'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { X, User, Car, CreditCard, Timer } from 'lucide-react';
import Link from 'next/link';
import Steps from '../components/Step';
import FormStep from '../components/formStep';

const OrderInspectionForm = () => {
  const steps = [
    { id: 0, title: 'Customer Details', icon: User },
    { id: 1, title: 'Vehicle Details', icon: Car },
    { id: 2, title: 'Timeslot Details', icon: Timer },
    { id: 3, title: 'Payment Information', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gc-mist-gray p-4 md:p-8 relative overflow-hidden">

      <Link href='/'>
        <Button
          size="icon"
          className="absolute top-6 right-16 z-50 bg-white hover:bg-gc-mist-gray rounded-full w-12 h-12 shadow-md transition duration-200"
        >
          <X className="w-6 h-6 text-gc-blue-gray" />
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto mt-12 relative z-10">

        <Steps steps={steps} />

        <div className="mb-12">
          <FormStep />
        </div>
      </div>
    </div>
  );
};

export default OrderInspectionForm;
