import React from "react";
import Counter from "./Counter";
import AddButton from "./AddButton";
import ClearButton from "./ClearButton";

const CounterPage: React.FC = () => {
    return (
        <>
            <Counter 
                label="Redux Counter"
            />
            <AddButton 
                title="Add +3"
                increase={3}
            />
            <AddButton 
                title="Add ++"
            />
            <ClearButton 
                title="Clear"
            />
        </>
    );
};

export default CounterPage;