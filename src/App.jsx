import React from "react";
import CounterValue from "./components/CounterValue"
import CounterInput from "./components/CounterInput";
import CounterButtons from "./components/CounterButtons";
import { Provider } from "react-redux"
import store from "./store"
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <CounterValue />
                <CounterInput />
                <CounterButtons />
            </div>
        </Provider>
    );
}

export default App;