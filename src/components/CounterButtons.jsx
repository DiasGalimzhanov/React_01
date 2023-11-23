import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, multiplyBy, divideBy } from "../store/counterSlice";
import s from "./Counter.module.scss";

function CounterButtons() {
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    const onMultiplyBy = () => {
        dispatch(multiplyBy(2));
    };

    const onDivideBy = () => {
        dispatch(divideBy(2));
    };

    return (
        <div className={s.buttons}>
            <button className={s.button} onClick={onIncrement}>
                +1
            </button>
            <button className={s.button} onClick={onDecrement}>
                -1
            </button>
            <button className={s.button} onClick={onMultiplyBy}>
                *2
            </button>
            <button className={s.button} onClick={onDivideBy}>
                /2
            </button>
        </div>
    );
}

export default CounterButtons;
