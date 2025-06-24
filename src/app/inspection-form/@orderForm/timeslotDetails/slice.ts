import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimeSlot {
  date: string;
  time: string;
}

export interface TimeslotState {
  timeslotData: {
    selectedDate: string | null;
    selectedTime: string | null;
  };
  confirmedTimeslot: TimeSlot | null;
}


const initialState: TimeslotState = {
  timeslotData: {
    selectedDate: null,
    selectedTime: null,
  },
  confirmedTimeslot: null,
};

const timeslotSlice = createSlice({
  name: 'timeslot',
  initialState,
  reducers: {
 
    setDate: (state, action: PayloadAction<string>) => {
      state.timeslotData.selectedDate = action.payload;
      state.timeslotData.selectedTime = null; 
    },
    
    setTime: (state, action: PayloadAction<string>) => {
      state.timeslotData.selectedTime = action.payload;
    },
  
    confirmTimeslot: (state, action: PayloadAction<TimeSlot>) => {
      state.confirmedTimeslot = action.payload;
    },

    resetTimeslot: (state) => {
      state.timeslotData = initialState.timeslotData;
      state.confirmedTimeslot = initialState.confirmedTimeslot;
    },
  },
});

export const { setDate, setTime, confirmTimeslot, resetTimeslot } = timeslotSlice.actions;

export const timeslotReducer = timeslotSlice.reducer;