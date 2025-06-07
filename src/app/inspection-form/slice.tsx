import { createSlice } from "@reduxjs/toolkit";

export interface stateFroms {
    currentStep: number;
}

const initialState: stateFroms = {
    currentStep: 0,
}

const inspectionFormSlice = createSlice({
    name: "inspectionForm",
    initialState: initialState,
    reducers: {
        handleNextStep: (state) => {
            state.currentStep = state.currentStep + 1;
        },
        handlePreviousStep: (state) => {
            state.currentStep = state.currentStep - 1;
        },
    }
})

export const {handleNextStep,handlePreviousStep} = inspectionFormSlice.actions;
export const inspectionFormReducer = inspectionFormSlice.reducer;