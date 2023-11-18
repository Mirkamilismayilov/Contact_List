import { configureStore } from "@reduxjs/toolkit";
import sliceCounter from "./features/sliceCounter";

export default configureStore({
    reducer:{
        counter:sliceCounter
        
    }
})