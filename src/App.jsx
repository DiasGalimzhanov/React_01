import React from "react";
import Router from "./Router";
import { StateProvider } from "./StateContext";
import "./styles/main.scss";

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
