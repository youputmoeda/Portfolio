import { Canvas } from "@react-three/fiber";
import Ninja from "./Ninja"
import { Suspense, useEffect, useState } from "react";
import { Html, OrbitControls, Preload, ScrollControls, useProgress } from "@react-three/drei";

export const Experience = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		console.log(mediaQuery);
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}
	}, [])

	function Loader() {
		const { progress } = useProgress();

		return (
			<Html>
				<span className="canvas-load"></span>
				<p
					style={{
						fontSize: 14,
						color: '#f1f1f1',
						fontWeight: 800,
						marginTop: 40
					}}
				>
					{progress.toFixed(2)}%</p>
			</Html>
		)
	}

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [45, 17, 37], fov: 15 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<hemisphereLight intensity={3} groundColor="black" />
			<pointLight intensity={1} position={[5, 0.5, 2.5]} />
			<spotLight
				position={[5, 0.5, 2.5]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<ScrollControls damping={0.5} pages={10}>
					<Ninja
						scale={isMobile ? 3 : 4}
						position={isMobile ? [2, -4, 1] : [4, -4.5, 1]}
						rotate={[-0.01, -0.2, -0.1]}
					/>
				</ScrollControls>
			</Suspense>
			<Preload all />
		</Canvas>
	)
}