import React from "react";

function GrCheckboxSelected(props) {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fill="none"
                // stroke="#fff"
                strokeWidth={2}
                d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"
            />
        </svg>
    );
}

export default GrCheckboxSelected;
