import { Check } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { currentStepSelector } from '../selector';
import { StepsProps } from '../interfaces';


const Steps:React.FC<StepsProps> = ({steps}) => {
   const currentStep = useSelector(currentStepSelector);
   
   const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

   return (
     <div className="w-full max-w-4xl  mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const Icon = step.icon;
          
          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center z-10">
                <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold
                    transition-all duration-300 relative z-10
                    ${status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : status === 'current'
                      ? 'bg-blue-500 text-white ring-4 ring-blue-200'
                      : 'bg-gray-200 text-gray-500'}
                  `}>
                  {status === 'completed' ? (
                    <Check className="w-7 h-7 " />
                  ) : (
                    <Icon className="w-7 h-7" />
                  )}
                </div>
                <div className="mt-3 text-center">
                  <div className={`text-sm font-semibold transition-colors duration-300 ${
                    status === 'current' ? 'text-gc-blue' : 
                    status === 'completed' ? 'text-gc-green' : 
                    'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                  
                </div>
              </div>
              {index < steps.length - 1 && (
                  <div className={`
                    flex-1 h-0.5 mx-4 transition-all duration-300
                    ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                  `} />
                )}
                
            </React.Fragment>
          );
        })}
        
        
      </div>
       <div className="w-full bg-gray-200 mt-4 rounded-full h-2">
         <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

    </div>
  )
}

export default Steps
