import React from "react";
import { useSelector } from "react-redux";
import s from "./Counter.module.scss";

function CounterValue() {
    const { count } = useSelector((state) => state.counter);

    return <div className={s.value}>{count}</div>;
}

export default CounterValue;
