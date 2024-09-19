import { Unity, useUnityContext } from "react-unity-webgl"
import './UnityComponent.css';
import { Fragment, useCallback, useEffect } from "react";

const UnityComponent = () => {
	const { unityProvider, loadingProgression, sendMessage } = useUnityContext({
		loaderUrl: "unity-build/webgl/build.loader.js",
		dataUrl: "unity-build/webgl/build.data.unityweb",
		frameworkUrl: "unity-build/webgl/build.framework.js.unityweb",
		codeUrl: "unity-build/webgl/build.wasm.unityweb"
	});

	// Função para enviar o valor do scroll para o Unity
	const handleScroll = useCallback(() => {
		if (loadingProgression === 1) {
			const scrollValue = window.scrollY;
			const normalizedValue = (scrollValue / window.innerHeight).toFixed(2); // Normaliza o scroll
			console.log(`Scroll value sent: ${normalizedValue}`);
			sendMessage("Main Camera", "UpdateScroll", normalizedValue); // Envia para o Unity
		}
	}, [loadingProgression, sendMessage]);

	// Adiciona e remove o evento de scroll
	useEffect(() => {
		const onScroll = () => {
			if (loadingProgression === 1) {
				handleScroll();
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [handleScroll, loadingProgression]);

	return (
		<Fragment>
			{
				loadingProgression !== 1 &&
				<h1>Loading.... {Math.round(loadingProgression * 100)} %</h1>
			}
			<Unity className="container" unityProvider={unityProvider} />
		</Fragment>
	);
};

export default UnityComponent;