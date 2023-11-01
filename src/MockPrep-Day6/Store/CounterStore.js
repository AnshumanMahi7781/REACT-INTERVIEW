import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slice/CounterSlice";

const CounterStore = configureStore({
    reducer : {
        CounterApp : CounterSlice.reducer,
    }
});

export default CounterStore