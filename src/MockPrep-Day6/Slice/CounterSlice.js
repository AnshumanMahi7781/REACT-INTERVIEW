import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    countVal: 0,
}
const CounterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        add: (state, actions) => {
            state.countVal = state.countVal + actions.payload
        },
        sub : (state, actions)=>{
            state.countVal = state.countVal - actions.payload

        },
        multi : (state, actions)=>{
            state.countVal = state.countVal * actions.payload


        },
        division : (state, actions)=>{
            state.countVal = state.countVal / actions.payload

        },
    }
});
export default CounterSlice