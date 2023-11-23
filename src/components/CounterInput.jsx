import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBy, removeBy } from "../store/counterSlice";
import s from "./Inpute.module.scss";

function CounterInput() {
    const [inputValue, setInputValue] = useState(0);
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onAddBy = () => {
        dispatch(addBy(Number(inputValue)));
    };

    const onRemoveBy = () => {
        dispatch(removeBy(Number(inputValue)));
    };

    return (
        <div className={s.input}>
            <input type="number" value={inputValue} onChange={onInputChange} />
            <button className={s.button} onClick={onAddBy}> Add</button>
            <button className={s.button} onClick={onRemoveBy}> Remove</button>
        </div>
    );
}

export default CounterInput;
