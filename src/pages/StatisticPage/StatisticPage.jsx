import React from "react";
import Header from "../../components/Header/Header";
import { useTodoContext } from "../../StateContext"; 

function StatisticsPage() {
  const { todos } = useTodoContext();

  console.log("StatisticsPage Todos:", todos);

  return (
    <div>
      <Header />
      <div>Created todos: {todos.length}</div>
    </div>
  );
}

export default StatisticsPage;
