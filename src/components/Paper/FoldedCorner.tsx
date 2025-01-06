import React from "react";

interface FoldedCornerProps {
    size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
}

const FoldedCorner: React.FC<FoldedCornerProps> = ({ size = "md", style }) => {
    const sizeStyles = {
        sm: { width: "20px", height: "20px" },
        md: { width: "30px", height: "30px" },
        lg: { width: "40px", height: "40px" },
    };

    return (
        <svg
            width={sizeStyles[size].width}
            height={sizeStyles[size].height}
            viewBox="0 0 30 30"
            style={style}
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C9.79086 2 8 3.79086 8 6V8.05287C6.86853 8.26819 5.93906 9.12255 5.6516 10.2724L3.6516 18.2724C3.17824 20.1658 4.61031 22 6.56202 22H17.4389C19.3906 22 20.8227 20.1658 20.3493 18.2724L18.3493 10.2724C18.0618 9.12223 17.1319 8.26772 16 8.05269V6C16 3.79086 14.2091 2 12 2ZM15.4389 10H8.56203C8.10316 10 7.70317 10.3123 7.59188 10.7575L5.59188 18.7575C5.4341 19.3886 5.91145 20 6.56202 20H17.4389C18.0895 20 18.5668 19.3886 18.4091 18.7575L16.4091 10.7575C16.2978 10.3123 15.8978 10 15.4389 10ZM14 8V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V8H14Z"
                fill="#ffffff"
            />
            <path
                fill="#cccccc"
                d="M 0.10149795,28.214661 C 9.3158048,21.655637 18.798953,15.249392 28.367304,0.05074673 L 29.979012,8.336367e-6 29.999995,17.926204 c 0.0062,5.27188 -5.479703,11.112835 -12.464149,12.062529 0,0 -11.6557651,-0.02819 -17.40562089,0.01128 z"
            />
        </svg>
    );
};

export default FoldedCorner;
