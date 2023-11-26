import React from "react";
import s from "./TodoGrid.module.scss";
import Todo from "../Todo";

function TodoGrid({ todos = [] }) {
  console.log("TodoGrid rendered with todos:", todos);

  return (
    <div className={s.todoGrid}>
      {todos.map((elem, index) => (
        <Todo
          key={index}
          title={elem.title}
          value={elem.task}
          date={elem.date}
        />
      ))}
    </div>
  );
}

export default TodoGrid;
