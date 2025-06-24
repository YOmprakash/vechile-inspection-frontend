
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customerDetails, CustomerDetailsState, ValidationErrors } from '../../interfaces';

const initialState: CustomerDetailsState = {
  data: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
  },
  errors: {},
};

const validateField = (field: keyof customerDetails, value: string): string | undefined => {
  switch (field) {
    case 'fullName':
      return value.trim() ? undefined : 'Full name is required';
    case 'email':
      return /^\S+@\S+\.\S+$/.test(value) ? undefined : 'Invalid email format';
    case 'phone':
      return /^\d{10}$/.test(value) ? undefined : 'Phone must be 10 digits';
    case 'address':
      return value.trim() ? undefined : 'Address is required';
    default:
      return undefined;
  }
};

const customerDetailsSlice = createSlice({
  name: 'customerDetails',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof customerDetails; value: string }>) => {
      const { field, value } = action.payload;
      state.data[field] = value;
      state.errors[field] = validateField(field, value);
    },
    validateForm: (state) => {
      const errors: ValidationErrors = {};
      for (const key in state.data) {
        const field = key as keyof customerDetails;
        const error = validateField(field, state.data[field]);
        if (error) errors[field] = error;
      }
      state.errors = errors;
    },
    resetCustomerDetails: () => initialState,
  },
});

export const { updateField, validateForm, resetCustomerDetails } = customerDetailsSlice.actions;
export const customerDetailsReducer = customerDetailsSlice.reducer;
