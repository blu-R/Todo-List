import React from "react";

import "../styles/Button.css";

const Button = ({ btnActive, icon, name, fClick }) => {
    return (
        <button
            className={btnActive === name ? "isActive" : undefined}
            name={name}
            onClick={fClick}
        >
            {icon} {name}
        </button>
    );
};

export default Button;
