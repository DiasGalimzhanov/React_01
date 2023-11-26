import React, { useState } from "react";
import s from "./TodoCreator.module.scss";
import Button from "../Button/Button";

function TodoCreator({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleClick = () => {
    onAddTodo({
      title: title,
      task: value,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setValue("");
  };

  return (
    <div className={s.todoCreator}>
      <input
        type="text"
        className={s.input}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className={s.input}
        placeholder="Story"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className={s.button} onClick={handleClick}>
        Save
      </Button>
    </div>
  );
}

export default TodoCreator;
