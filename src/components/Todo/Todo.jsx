import React from "react";
import s from "./Todo.module.scss";


function Todo({ title, value, date }) {
  return (
    <div className={s.Todo}>
      <div className={s.title}>{title}</div>
      <div className={s.value}>{value}</div>
      <div className={s.date}>{date}</div>
    </div>
  );
}

export default Todo;
