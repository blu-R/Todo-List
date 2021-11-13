import React from "react";

import GrCheckboxSelected from "./GrCheckboxSelected";
import GrCheckbox from "./GrCheckbox";

import "../styles/Todo.css";

const Todo = ({ title, status, fHandleStatus, id }) => {
    return (
        <div className="todo-container">
            <div className="todo-title">
                <h1
                    style={
                        status ? { textDecoration: `line-through` } : undefined
                    }
                >
                    {status ? (
                        <GrCheckboxSelected className="ico" />
                    ) : (
                        <GrCheckbox className="ico" />
                    )}{" "}
                    {title}
                </h1>
            </div>
            <div className="todo-status">
                <button
                    className={status ? "complete" : "reset"}
                    onClick={() => fHandleStatus(id)}
                >
                    {status ? "Reset" : "Complete"}
                </button>
            </div>
        </div>
    );
};

export default Todo;
