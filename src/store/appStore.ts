import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { inspectionFormReducer } from "@/app/inspection-form/slice";
import { customerDetailsReducer } from '@/app/inspection-form/@orderForm/customerDetails/slice';
import { vehicleDetailsReducer } from '@/app/inspection-form/@orderForm/vechileDetails/slice';
import { timeslotReducer } from '@/app/inspection-form/@orderForm/timeslotDetails/slice';

export const store = configureStore({
    reducer: {
        orderForm: inspectionFormReducer,
        customerDetails: customerDetailsReducer,
        vehicleDetails: vehicleDetailsReducer,
        timeSlotDetails: timeslotReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()