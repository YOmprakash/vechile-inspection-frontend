import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface for the timeslot data
export interface TimeSlot {
  date: string; // Storing date as an ISO string for serializability
  time: string;
}

// Interface for the slice's state
export interface TimeslotState {
  timeslotData: {
    selectedDate: string | null;
    selectedTime: string | null;
  };
  confirmedTimeslot: TimeSlot | null;
}

// Initial state for the slice
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
    /**
     * Sets the selected date and resets the selected time.
     * @param state The current state.
     * @param action The payload contains the date as an ISO string.
     */
    setDate: (state, action: PayloadAction<string>) => {
      state.timeslotData.selectedDate = action.payload;
      state.timeslotData.selectedTime = null; // Reset time when date changes
    },
    /**
     * Sets the selected time.
     * @param state The current state.
     * @param action The payload contains the selected time string.
     */
    setTime: (state, action: PayloadAction<string>) => {
      state.timeslotData.selectedTime = action.payload;
    },
    /**
     * Confirms the selected date and time, moving it to a confirmed state.
     * @param state The current state.
     * @param action The payload contains the confirmed TimeSlot object.
     */
    confirmTimeslot: (state, action: PayloadAction<TimeSlot>) => {
      state.confirmedTimeslot = action.payload;
    },
    /**
     * Resets the entire timeslot state to its initial values.
     */
    resetTimeslot: (state) => {
      state.timeslotData = initialState.timeslotData;
      state.confirmedTimeslot = initialState.confirmedTimeslot;
    },
  },
});

// Export actions to be used in components
export const { setDate, setTime, confirmTimeslot, resetTimeslot } = timeslotSlice.actions;

// Export the reducer to be added to the store
export const timeslotReducer = timeslotSlice.reducer;