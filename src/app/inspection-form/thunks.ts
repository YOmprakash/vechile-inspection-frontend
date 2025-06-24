
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/appStore';
import { validateForm } from './@orderForm/customerDetails/slice';
import { handleNextStep } from './slice';
import { validateVehicleForm } from './@orderForm/vechileDetails/slice';

export const validateAndProceed = createAsyncThunk(
  'customerDetails/validateAndProceed',
  async (_, { dispatch, getState }) => {

    dispatch(validateForm());

    const state = getState() as RootState;
    const { errors } = state.customerDetails;

    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      dispatch(handleNextStep());
    }
    return errors;
  }
);

export const validateVehicleAndProceed = createAsyncThunk(
  'vehicleDetails/validateAndProceed',
  async (_, { dispatch, getState }) => {
    dispatch(validateVehicleForm());

    const state = getState() as RootState;
    const { errors } = state.vehicleDetails; 

    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      dispatch(handleNextStep());
    }
    
    
    return errors;
  }
);