import { Badge, Check } from 'lucide-react';
import React, { useState } from 'react'
import { LucideIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { currentStepSelector } from '../selector';
export interface StepData {
    title: string;
    id:number;
    icon:LucideIcon;
}

export interface StepsProps {
    steps: StepData[];
}



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
                  flex items-center justify-center w-14 h-14 bg-gc-before rounded-full text-white font-bold transition-all duration-500 shadow-lg
                
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
                  <Badge className={`mt-2 transition-all duration-300 ${
                    status === 'current' ? 'border-blue-500 text-gc-blue bg-blue-50' :
                    status === 'completed' ? 'border-green-500 text-gc-green bg-green-50' :
                    'border-gray-300 text-gray-500 bg-gray-50'
                  }`}>
                    Step {step.id}
                  </Badge>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`flex-1 h-2 mx-6 rounded-full transition-all duration-500 shadow-inner ${
                  step.id < currentStep ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                  'bg-gradient-to-r from-gray-200 to-gray-300'
                }`}>
                  
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default Steps
