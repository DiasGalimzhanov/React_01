import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <StateContext.Provider value={{ todos, addTodo }}>
      {children}
    </StateContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a StateProvider");
  }
  return context;
};
