'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { X, Check, ChevronRight, User, Car, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Steps from '../components/Step';
import { useAppDispatch } from '@/store/appStore';
import { handleNextStep, handlePreviousStep } from '../slice';
import FormStep from '../components/formStep';


interface FormData {
  customerDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  vehicleDetails: {
    type: string;
    make: string;
    model: string;
    year: string;
    vin: string;
  };
  paymentInfo: {
    method: string;
    amount: string;
    promoCode: string;
  };
}

const OrderInspectionForm = () => {
const dispatch = useAppDispatch()
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    customerDetails: {
      fullName: '',
      email: '',
      phone: '',
      address: ''
    },
    vehicleDetails: {
      type: '',
      make: '',
      model: '',
      year: '',
      vin: ''
    },
    paymentInfo: {
      method: '',
      amount: '',
      promoCode: ''
    }
  });

  const steps = [
    { id: 1, title: 'Customer Details', icon: User },
    { id: 2, title: 'Vehicle Details', icon: Car },
    { id: 3, title: 'Payment Information', icon: CreditCard }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      dispatch(handleNextStep())
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
       dispatch(handlePreviousStep())
    }
  };


  const updateFormData = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };


  const renderCustomerDetails = () => (
    <Card className=" border-0 shadow-xl bg-gc-wheat  rounded-2xl animate-fade-in hover:shadow-2xl transition-all duration-300">
      <CardHeader className="pb-6 rounded-t-2xl">
        <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gc-blue text-gc-blue rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          Customer Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="fullName" className="text-gray-700 font-semibold">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.customerDetails.fullName}
              onChange={(e) => updateFormData('customerDetails', 'fullName', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.customerDetails.email}
              onChange={(e) => updateFormData('customerDetails', 'email', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={formData.customerDetails.phone}
              onChange={(e) => updateFormData('customerDetails', 'phone', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="address" className="text-gray-700 font-semibold">Address</Label>
            <Textarea
              id="address"
              placeholder="Enter your address"
              value={formData.customerDetails.address}
              onChange={(e) => updateFormData('customerDetails', 'address', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm min-h-[90px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderVehicleDetails = () => (
    <Card className="gradient-card border-0 shadow-xl rounded-2xl animate-fade-in hover:shadow-2xl transition-all duration-300">
      <CardHeader className="pb-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-t-2xl">
        <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-gc-grtext-gc-green rounded-full flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          Vehicle Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="vehicleType" className="text-gray-700 font-semibold">Vehicle Type</Label>
            <Select value={formData.vehicleDetails.type} onValueChange={(value) => updateFormData('vehicleDetails', 'type', value)}>
              <SelectTrigger className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 bg-white shadow-sm">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-white border-gray-200 shadow-lg">
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="coupe">Coupe</SelectItem>
                <SelectItem value="convertible">Convertible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label htmlFor="make" className="text-gray-700 font-semibold">Make</Label>
            <Input
              id="make"
              placeholder="e.g., Toyota, Ford, BMW"
              value={formData.vehicleDetails.make}
              onChange={(e) => updateFormData('vehicleDetails', 'make', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <Label htmlFor="model" className="text-gray-700 font-semibold">Model</Label>
            <Input
              id="model"
              placeholder="e.g., Camry, F-150"
              value={formData.vehicleDetails.model}
              onChange={(e) => updateFormData('vehicleDetails', 'model', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="year" className="text-gray-700 font-semibold">Year</Label>
            <Input
              id="year"
              placeholder="e.g., 2023"
              value={formData.vehicleDetails.year}
              onChange={(e) => updateFormData('vehicleDetails', 'year', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="vin" className="text-gray-700 font-semibold">VIN</Label>
            <Input
              id="vin"
              placeholder="17-character VIN"
              value={formData.vehicleDetails.vin}
              onChange={(e) => updateFormData('vehicleDetails', 'vin', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPaymentInfo = () => (
    <Card className="gradient-card border-0 shadow-xl rounded-2xl animate-fade-in hover:shadow-2xl transition-all duration-300">
      <CardHeader className="pb-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-t-2xl">
        <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          Payment Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="paymentMethod" className="text-gray-700 font-semibold">Payment Method</Label>
            <Select value={formData.paymentInfo.method} onValueChange={(value) => updateFormData('paymentInfo', 'method', value)}>
              <SelectTrigger className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-200 bg-white shadow-sm">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-white border-gray-200 shadow-lg">
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="debit-card">Debit Card</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label htmlFor="amount" className="text-gray-700 font-semibold">Amount</Label>
            <Input
              id="amount"
              placeholder="$0.00"
              value={formData.paymentInfo.amount}
              onChange={(e) => updateFormData('paymentInfo', 'amount', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="space-y-3">
          <Label htmlFor="promoCode" className="text-gray-700 font-semibold">Promo Code (Optional)</Label>
          <Input
            id="promoCode"
            placeholder="Enter promo code if you have one"
            value={formData.paymentInfo.promoCode}
            onChange={(e) => updateFormData('paymentInfo', 'promoCode', e.target.value)}
            className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-200 transition-all duration-200 bg-white shadow-sm"
          />
        </div>
      </CardContent>
    </Card>
  );



  return (
    <div className="min-h-screen bg-gc-green p-4 md:p-8 relative overflow-hidden">
     

      {/* Close Button */}
      <Link href='/'>
       <Button
        size="icon"
        className="absolute top-6 right-6 z-50 bg-white/90  rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-200 "
      >
        <X className="w-6 h-6 text-gray-700" />
      </Button>
      </Link>
     

      <div className="max-w-4xl mx-auto mt-12 relative z-10">
        
        <Steps steps={steps} />

        {/* Form Content */}
        <div className="mb-12">
          <FormStep />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-4xl mx-auto">
          <Button
            onClick={handleBack}
            disabled={currentStep === 1}
            variant="outline"
            className="bg-white/95 border-white text-gray-700 hover:bg-white hover:text-gray-900 rounded-xl px-8 py-4 font-semibold disabled:opacity-50 transition-all duration-200 shadow-lg backdrop-blur-sm"
          >
            Back
          </Button>
          
          <div className="flex gap-4">
            {currentStep < 3 && (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-500 to-gc-bltext-gc-blue hover:from-blue-600 hover:to-blue-800 text-white rounded-xl px-10 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Next Step
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            )}
            
            {currentStep === 3 && (
              <Button
                onClick={() => console.log('Form submitted:', formData)}
                className="bg-gradient-to-r from-green-500 to-gc-grtext-gc-green hover:from-green-600 hover:to-green-800 text-white rounded-xl px-10 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Complete Inspection
                <Check className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInspectionForm;