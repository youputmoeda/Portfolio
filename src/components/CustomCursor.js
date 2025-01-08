import AnimatedCursor from "react-animated-cursor";


const CustomCursor = () => {
    return (
        <>
            <AnimatedCursor
                innerSize={10}              // Tamanho do círculo interno
                outerSize={40}              // Tamanho do círculo externo
                color="255, 182, 193"       // Cor RGB (Rosa claro)
                outerAlpha={0.2}            // Transparência do círculo externo
                innerScale={1}              // Escala padrão do círculo interno
                outerScale={2.5}            // Escala ao passar o cursor sobre elementos clicáveis
            />
        </>
    );
};

export default CustomCursor;
