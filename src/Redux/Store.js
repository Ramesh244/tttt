import { configureStore } from "@reduxjs/toolkit";
import objectDatareducer from '../Redux/Action'

export const Store=configureStore({
    reducer:{

        display:objectDatareducer
    }


})