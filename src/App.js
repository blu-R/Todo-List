import React, { useState, useEffect, useRef } from "react";

import "./styles/App.css";

//COMPONENTS
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
    //HOOKS
    const [todoList, setTodoList] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    const [activeBtnName, setActiveBtnName] = useState("All");

    const ref = useRef();
    useEffect(() => {
        const handleTodoList = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const result = await response.json();
            ref.current = result.slice(0, 20);
            setTodoList(ref.current);
        };
        handleTodoList();
    }, []);
    //FUNCTIONS
    const filterAll = () => {
        setActiveBtnName("All");

        setFilterOn(false);
        setTodoList(ref.current);
    };

    const filterCompleted = () => {
        setActiveBtnName("Completed");

        setFilterOn(true);
        setTodoList(
            ref.current.filter((todoItem) => todoItem.completed && todoItem)
        );
    };

    const filterPending = () => {
        // console.log(e.target.name);
        setActiveBtnName("Pending");

        setFilterOn(true);
        setTodoList(
            ref.current.filter((todoItem) => !todoItem.completed && todoItem)
        );
    };

    const handleCompleteTodo = (id) => {
        ref.current = ref.current.map((todo) =>
            todo.id === id
                ? {
                      ...todo,
                      completed: !todo.completed,
                      title: "sí funciona",
                  }
                : todo
        );

        filterOn
            ? todoList.pop().completed
                ? filterCompleted()
                : filterPending()
            : filterAll();
    };

    return (
        <div className="app">
            <Header
                btnIsActive={activeBtnName}
                title="TODO List"
                fAll={filterAll}
                fCompleted={filterCompleted}
                fPending={filterPending}
            />
            <div className="body">
                {todoList && todoList.length
                    ? todoList.map((todo) => (
                          <Todo
                              key={todo.id}
                              id={todo.id}
                              title={todo.title}
                              status={todo.completed}
                              fHandleStatus={handleCompleteTodo}
                          />
                      ))
                    : null}
            </div>
            <Footer />
        </div>
    );
}

export default App;
