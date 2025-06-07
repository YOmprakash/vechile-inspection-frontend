
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleData, VehicleDetailsState, VehicleValidationErrors } from '../../interfaces';


// 2. Define the initial state
const initialState: VehicleDetailsState = {
  data: {
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    inspectionType: '',
  },
  errors: {},
};

// 3. Create validation logic for vehicle fields
const validateField = (field: keyof VehicleData, value: string): string | undefined => {
  switch (field) {
    case 'vehicleType':
      return value.trim() ? undefined : 'Vehicle type is required';
    case 'make':
      return value.trim() ? undefined : 'Make is required';
    case 'model':
      return value.trim() ? undefined : 'Model is required';
    case 'year':
      // Simple validation for a 4-digit year
      return /^\d{4}$/.test(value) ? undefined : 'Must be a 4-digit year';
    case 'vin':
      // Standard VIN is 17 characters, alphanumeric
      return /^[A-HJ-NPR-Z0-9]{17}$/i.test(value) ? undefined : 'Must be a valid 17-character VIN';
   case 'inspectionType': // <-- Add this case
      return value ? undefined : 'Please select an inspection type';
      default:
      return undefined;
  }
};

// 4. Create the slice
const vehicleDetailsSlice = createSlice({
  name: 'vehicleDetails',
  initialState,
  reducers: {
    // Action to update a field and validate it on the fly
    updateVehicleField: (state, action: PayloadAction<{ field: keyof VehicleData; value: string }>) => {
      const { field, value } = action.payload;
      state.data[field] = value;
      // Clear error or set a new one
      const error = validateField(field, value);
      if (error) {
        state.errors[field] = error;
      } else {
        delete state.errors[field];
      }
    },
    // Action to validate the entire form at once
    validateVehicleForm: (state) => {
      const errors: VehicleValidationErrors = {};
      for (const key in state.data) {
        const field = key as keyof VehicleData;
        const error = validateField(field, state.data[field]);
        if (error) {
          errors[field] = error;
        }
      }
      state.errors = errors;
    },
    resetVehicleDetails: () => initialState,
  },
});

export const { updateVehicleField, validateVehicleForm, resetVehicleDetails } = vehicleDetailsSlice.actions;
export const vehicleDetailsReducer = vehicleDetailsSlice.reducer;