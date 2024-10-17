import { useEffect, useState } from 'react';

const Parallalex = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({
            x: clientX / window.innerWidth - 0.5,
            y: clientY / window.innerHeight - 0.5,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateTransform = (layerFactor) => {
        const xOffset = mousePosition.x * layerFactor;
        const yOffset = mousePosition.y * layerFactor;
        return `translate(${xOffset}%, ${yOffset}%)`;
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-backgroundB bg-cover bg-center"
                style={{
                    transform: calculateTransform(1),
                }}
            />
            <div
                className="absolute top-[calc(50%+135px)] left-[calc(50%-500px)] w-[500px] h-[315px] bg-Big-mountain bg-cover bg-center"
                style={{
                    transform: calculateTransform(5),
                }}
            />
            <div
                className="absolute top-[calc(50%+100px)] left-50% w-[210px] h-[350px] bg-Left-mountain bg-cover bg-center"
                style={{
                    transform: calculateTransform(10),
                }}
            />
            <div
                className="absolute top-[calc(50%+180px)] right-[calc(0%-4px)] w-[300px] h-[270px] bg-Right-mountain bg-cover bg-center"
                style={{
                    transform: calculateTransform(10),
                }}
            />

            <div
                className="absolute top-[calc(50%+200px)] right-[calc(50%-455px)] w-[300px] h-[250px] bg-Small-mountain bg-cover bg-center"
                style={{
                    transform: calculateTransform(15),
                }}
            />
        </div>
    )
}

export default Parallalex;