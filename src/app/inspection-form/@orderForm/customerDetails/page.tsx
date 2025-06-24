'use client';


import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/appStore';
import { updateField } from './slice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { validateAndProceed } from '../../thunks';

const CustomerDetails = () => {
  const dispatch = useAppDispatch();
  const { data, errors } = useSelector((state: RootState) => state.customerDetails);
  const currentStep = useSelector((state: RootState) => state.orderForm.currentStep);
  const handleChange = (field: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(updateField({ field, value: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(validateAndProceed())
  };

  return (
    <Card className="border-0 rounded-2xl bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader >
        <CardTitle className="text-2xl font-bold text-gc-blue-gray flex items-center gap-3">
          <div className="w-10 h-10 bg-gc-coral-orange text-white rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          Customer Details
        </CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <input
                id="fullName"
                value={data.fullName}
                onChange={handleChange('fullName')}
                className="input-style  "
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <input
                id="email"
                value={data.email}
                onChange={handleChange('email')}
                className="input-style"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
              <input
                id="phone"
                value={data.phone}
                onChange={handleChange('phone')}
                className="input-style"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
              <Textarea
                id="address"
                value={data.address}
                onChange={handleChange('address')}
                className="input-style"
                placeholder="Enter your address"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
          </div>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">Privacy Notice</p>
                <p>Your personal information is securely stored and will only be used for order processing and communication purposes.</p>
              </div>
            </div>
          </Card>
          <div className="flex gap-4 pt-4">
            {currentStep < 3 && (
              <Button
                type="submit"
                className="flex text-white items-center gap-2 bg-blue-500 hover:bg-blue-600"
              >
                Next Step
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default CustomerDetails;
