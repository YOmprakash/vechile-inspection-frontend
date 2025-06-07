 "use client"

import { useSelector } from 'react-redux'
import { currentStepSelector } from '../selector'
import CustomerDetails from '../@orderForm/customerDetails/page'
import VehicleDetails from '../@orderForm/vechileDetails/page'
import PaymentDetails from '../@orderForm/paymentDetails/page'

const FormStep = () => {

    const currentStep = useSelector(currentStepSelector)
    
    const renderFormByStep = (step: number) => {
        switch (step) {
            case 0:
                return <CustomerDetails />;
            case 1:
                return <VehicleDetails />;
            case 2:
                return <PaymentDetails />;
            default:
                return null;
        }
    }

    return <div className={"w-full h-full  "}>
        {
            renderFormByStep(currentStep)
        }
    </div>
}

export default FormStep;
