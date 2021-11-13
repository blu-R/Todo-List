import React from "react";

import "../styles/Button.css";

const Button = ({ icon, name, fClick }) => {
    return (
        <button onClick={fClick}>
            {icon} {name}
        </button>
    );
};

export default Button;
