import { Canvas } from "@react-three/fiber";
import Mcree from "./Mccree";
import { useEffect, useState } from "react";
import { OrbitControls, Preload } from "@react-three/drei";

export const Experience = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}
	}, [])

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [45, 17, 37], fov: 15 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<OrbitControls
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
			/>
			<Mcree
				scale={isMobile ? 2.5 : 3.5}
				position={isMobile ? [2, -4, 1] : [7, -5.5, 1]}
			/>
			{/* <Ninja
					scale={isMobile ? 3 : 4}
					position={isMobile ? [2, -4, 1] : [4, -4.5, 1]}
					rotate={[-0.01, -0.2, -0.1]}
				/> */}
			<Preload all />
		</Canvas>
	)
}