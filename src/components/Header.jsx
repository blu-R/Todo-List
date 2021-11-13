import React from "react";

import Button from "./Button";
import IoIosListBox from "./IoIosListBox";
import GrCheckboxSelected from "./GrCheckboxSelected";
import GrCheckbox from "./GrCheckbox";

//STYLES
import "../styles/Header.css";

const Header = ({ title, fAll, fCompleted, fPending }) => {
    return (
        <header>
            <h1>{title}</h1>
            <div>
                <Button
                    icon={<IoIosListBox className="ico" />}
                    name="All"
                    fClick={fAll}
                />

                <Button
                    icon={<GrCheckboxSelected className="ico" />}
                    name="Completed"
                    fClick={fCompleted}
                />
                <Button
                    icon={<GrCheckbox className="ico" />}
                    name="Pending"
                    fClick={fPending}
                />
            </div>
        </header>
    );
};

export default Header;
