import { RootState } from "@/store/appStore";

export const currentStepSelector = (state:RootState) => state.orderForm.currentStep;