import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./counterSlice";

type AddButtonProps = {
    title: string,
    increase?: number
};

const AddButton: React.FC<AddButtonProps> = ({title, increase=1}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(add(increase));
    };

    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

export default AddButton;