import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import { inspectionFormReducer } from "@/app/inspection-form/slice";
export const store = configureStore({
    reducer:{
        orderForm:inspectionFormReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()