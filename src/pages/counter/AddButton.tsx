import React from "react";
import { useDispatch } from "react-redux";
import { add, addOne } from "./counterSlice";

type AddButtonProps = {
    title: string,
    increase?: number
};

const AddButton: React.FC<AddButtonProps> = ({title, increase=1}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (increase <= 1) dispatch(addOne());
        else dispatch(add(increase));
    };

    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

export default AddButton;