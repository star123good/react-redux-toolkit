import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        clear: (state) => {
            state.value = 0;
        },
        addOne: (state) => {
            state.value = state.value + 1;
        },
        add: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
    },
});

export const { clear, addOne, add } = counterSlice.actions;

export default counterSlice.reducer;
