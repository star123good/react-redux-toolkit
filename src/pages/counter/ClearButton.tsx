import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "./counterSlice";

type ClearButtonProps = {
    title: string,
};

const ClearButton: React.FC<ClearButtonProps> = ({title}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clear());
    };

    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

export default ClearButton;