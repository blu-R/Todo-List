import React from "react";

import "../styles/Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>
                {" "}
                Copyright &copy; ~ bLu.<span>Я</span> ~ {currentYear}
            </p>
        </footer>
    );
};

export default Footer;
