import React from "react";
import { createRoot } from "react-dom/client";
import { StateProvider } from "./StateContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
