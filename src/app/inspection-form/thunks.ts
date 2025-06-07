
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/appStore';
import { validateForm } from './@orderForm/customerDetails/slice';
import { handleNextStep } from './slice';
import { validateVehicleForm } from './@orderForm/vechileDetails/slice';

export const validateAndProceed = createAsyncThunk(
  'customerDetails/validateAndProceed',
  async (_, { dispatch, getState }) => {
    // First, dispatch the synchronous validation action
    dispatch(validateForm());

    // Then, get the most up-to-date state
    const state = getState() as RootState;
    const { errors } = state.customerDetails;

    // Check the errors from the fresh state
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      // If no errors, dispatch the action to go to the next step
      dispatch(handleNextStep());
    }
    // We can return the errors if we want to handle them in the component
    return errors;
  }
);

export const validateVehicleAndProceed = createAsyncThunk(
  'vehicleDetails/validateAndProceed',
  async (_, { dispatch, getState }) => {
    // First, dispatch the synchronous validation action from the vehicle slice
    dispatch(validateVehicleForm());

    // Then, get the most up-to-date state
    const state = getState() as RootState;
    const { errors } = state.vehicleDetails; // 👈 Use vehicleDetails state

    // Check the errors from the fresh state
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      // If no errors, dispatch the action to go to the next step
      dispatch(handleNextStep());
    }
    
    // Optionally return errors for handling in the component if needed
    return errors;
  }
);