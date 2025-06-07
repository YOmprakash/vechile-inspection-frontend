import { LucideIcon } from "lucide-react";

export interface stateFroms {
    currentStep: number;
}

export interface StepData {
    title: string;
    id:number;
    icon:LucideIcon;
}

export interface StepsProps {
    steps: StepData[];
}

export interface VehicleData {
  vehicleType: string;
  make: string;
  model: string;
  year: string;
  vin: string;
   inspectionType: string;
}

export interface VehicleValidationErrors {
  vehicleType?: string;
  make?: string;
  model?: string;
  year?: string;
  vin?: string;
  inspectionType?: string;
}

export interface VehicleDetailsState {
  data: VehicleData;
  errors: VehicleValidationErrors;
}

export interface ModelProps{
  isOpen:boolean;
  onClose:() => void;
  totalAmount:number;
}
export interface customerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface CustomerDetailsState {
  data: customerDetails;
  errors: ValidationErrors;
}