import React, { useState } from "react";
import s from "./HomePage.module.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TodoCreator from "../../components/TodoCreator";
import TodoGrid from "../../components/TodoGrid";
import { Link } from "react-router-dom";
import { useTodoContext } from "../../StateContext";

function HomePage() {
  const { todos, addTodo } = useTodoContext();

  const handleAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  return (
    <div>
      <Header />
      <TodoCreator onAddTodo={handleAddTodo} />
      <TodoGrid todos={todos} />
      <Link to="/statistics">
        <Button className={s.button}>Go to Statistics</Button>
      </Link>
    </div>
  );
}

export default HomePage;
