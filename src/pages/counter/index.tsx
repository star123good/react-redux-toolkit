import React from "react";
import Counter from "./Counter";
import AddButton from "./AddButton";

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
        </>
    );
};

export default CounterPage;