import React from "react";

function GrCheckbox(props) {
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
            <rect
                width={20}
                height={20}
                x={2}
                y={2}
                fill="none"
                // stroke="#fff"
                strokeWidth={2}
            />
        </svg>
    );
}

export default GrCheckbox;
