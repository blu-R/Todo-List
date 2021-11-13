import React from "react";

import Button from "./Button";
import IoIosListBox from "./IoIosListBox";
import GrCheckboxSelected from "./GrCheckboxSelected";
import GrCheckbox from "./GrCheckbox";

//STYLES
import "../styles/Header.css";

const Header = ({ btnIsActive, title, fAll, fCompleted, fPending }) => {
    return (
        <header>
            <h1>{title}</h1>
            <div>
                <Button
                    btnActive={btnIsActive}
                    icon={<IoIosListBox className="ico" />}
                    name="All"
                    fClick={fAll}
                />

                <Button
                    btnActive={btnIsActive}
                    icon={<GrCheckboxSelected className="ico" />}
                    name="Completed"
                    fClick={fCompleted}
                />
                <Button
                    btnActive={btnIsActive}
                    icon={<GrCheckbox className="ico" />}
                    name="Pending"
                    fClick={fPending}
                />
            </div>
        </header>
    );
};

export default Header;
