import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type CounterProps = {
    label: string
};

const Counter: React.FC<CounterProps> = ({label}) => {
    const counter = useSelector((state: RootState) => state.counter.value);

    return (
        <>
            <h1>{label}</h1>
            <p>Counter: {counter}</p>
        </>
    );
};

export default Counter;