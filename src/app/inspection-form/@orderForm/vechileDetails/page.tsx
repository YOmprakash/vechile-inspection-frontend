
'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/appStore';
import { updateVehicleField } from './slice';
import { validateVehicleAndProceed } from '../../thunks';
import { handlePreviousStep } from '../../slice';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming this is your Select component path
import { Car, ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleDetails = () => {
  const dispatch = useAppDispatch();
  const { data, errors } = useSelector((state: RootState) => state.vehicleDetails);

  const handleChange = (field: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateVehicleField({ field, value: e.target.value }));
  };


  const handleSelectChange = (field: keyof typeof data) => (value: string) => {
    dispatch(updateVehicleField({ field, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(validateVehicleAndProceed());
  };
    const vehicleTypes = [
    'Sedan',
    'SUV',
    'Truck',
    'Hatchback',
    'Coupe',
    'Convertible',
    'Wagon',
    'Van',
    'Motorcycle'
  ];
  const INSPECTION_OPTIONS = {
  basic: {
    name: 'Basic Inspection',
    price: 1499,
    description: 'Covers essential checks for engine, brakes, and tires.'
  },
  premium: {
    name: 'Premium Inspection',
    price: 2499,
    description: 'Comprehensive check including electronics, body, and interior.'
  }
};


  return (
    <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          Vehicle Details
        </CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6 p-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="vehicleType" className="text-sm font-medium text-gray-700">Vehicle Type</Label>
              <Select value={data.vehicleType} onValueChange={handleSelectChange('vehicleType')}>
                <SelectTrigger id="vehicleType" className="input-style">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                  <SelectContent>
              {vehicleTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
              </Select>
              {errors.vehicleType && <p className="text-red-500 text-sm">{errors.vehicleType}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="make" className="text-sm font-medium text-gray-700">Make</Label>
              <input
                id="make"
                value={data.make}
                onChange={handleChange('make')}
                placeholder="e.g., Toyota, Ford"
                className="input-style"
              />
              {errors.make && <p className="text-red-500 text-sm">{errors.make}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="model" className="text-sm font-medium text-gray-700">Model</Label>
              <input
                id="model"
                value={data.model}
                onChange={handleChange('model')}
                placeholder="e.g., Camry, F-150"
                className="input-style"
              />
              {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="year" className="text-sm font-medium text-gray-700">Year</Label>
              <input
                id="year"
                value={data.year}
                onChange={handleChange('year')}
                placeholder="e.g., 2023"
                className="input-style"
              />
              {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="vin" className="text-sm font-medium text-gray-700">VIN</Label>
              <input
                id="vin"
                value={data.vin}
                onChange={handleChange('vin')}
                placeholder="17-character VIN"
                className="input-style"
              />
              {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
            </div>
       
          </div>
          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium text-gray-700">Inspection Type</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(INSPECTION_OPTIONS).map(([key, option]) => {
                const isSelected = data.inspectionType === key;
                return (
                  <label
                    key={key}
                    htmlFor={`${key}-inspection`}
                    className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-green-50 border-green-500 shadow-md'
                        : 'bg-white border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <input
                      id={`${key}-inspection`}
                      name="inspectionType"
                      type="radio"
                      value={key}
                      checked={isSelected}
                      onChange={handleChange('inspectionType')}
                      className="absolute opacity-0" 
                    />
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-800">{option.name}</p>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                      <p className="text-lg font-bold text-green-600">
                        ₹{option.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
            {errors.inspectionType && <p className="text-red-500 text-sm mt-2">{errors.inspectionType}</p>}
          </div>
          
          <Card className="p-4 bg-orange-50 border-orange-200">
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <div className="text-sm text-orange-700">
            <p className="font-medium mb-1">Vehicle Information</p>
            <p>Please ensure all vehicle details are accurate. This information will be used for the inspection process and pricing calculations.</p>
          </div>
        </div>
      </Card>
          <div className="flex justify-between gap-4 pt-4">
            <Button
              type="button"
            
              className='text-gc-black border border-gc-black bg-transparent'
              onClick={() => dispatch(handlePreviousStep())}
              
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button
              type="submit"
              className="flex text-white items-center gap-2 bg-blue-500 hover:bg-blue-600"
            >
              Next Step
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default VehicleDetails;