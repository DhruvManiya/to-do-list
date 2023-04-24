import { configureStore } from "@reduxjs/toolkit";
import listSliceReducer from "./listSlice.js";


const store = configureStore({
    reducer:{
        list:listSliceReducer
    }
});


export default store;
