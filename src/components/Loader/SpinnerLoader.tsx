import React from 'react';
import { colors } from '../../config';


interface SpinnerLoaderProps {
    color?: string;
    size?: number;
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({ color = 'text', size = 40 }) => {
    const resolvedColor = color in colors ? colors[color as keyof typeof colors] : color;

    // Convertir el tamaño a número para calcular el ancho del borde
    //const sizeInPx = parseFloat(size);
    const sizeInPx = size;

    // Calcular el ancho del borde como un porcentaje del tamaño
    const borderWidth = `${sizeInPx * 0.1}px`; // Usamos el 10% del tamaño del loader como ancho del borde

    // Estilos en JavaScript
    const spinnerLoaderStyle: React.CSSProperties = {
        display: 'inline-block',
        width: size,
        height: size,
        border: `${borderWidth} solid ${colors.light}`, // Fondo del círculo
        borderTop: `${borderWidth} solid ${resolvedColor}`, // Color del borde superior (para el spinner)
        borderRadius: '50%',
        boxSizing: 'border-box',
        animation: 'spinner-animation 2s linear infinite',
    };

    const keyframes = `
    @keyframes spinner-animation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

    // Insertar keyframes en el DOM
    const insertKeyframes = () => {
        const styleSheet = document.styleSheets[0];
        if (styleSheet) {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        }
    };

    React.useEffect(() => {
        insertKeyframes();
    }, []);

    return <div className="precooked-spinner-loader" style={spinnerLoaderStyle}></div>;
};

export default SpinnerLoader;
