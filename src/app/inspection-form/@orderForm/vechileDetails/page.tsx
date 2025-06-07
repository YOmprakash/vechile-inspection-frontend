import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { Car } from 'lucide-react'
import React from 'react'

const VehicleDetails = () => {
  return (
    <div>
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
            <Select >
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
            <input
              id="make"
              placeholder="e.g., Toyota, Ford, BMW"
             
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <Label htmlFor="model" className="text-gray-700 font-semibold">Model</Label>
            <input
              id="model"
              placeholder="e.g., Camry, F-150"
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="year" className="text-gray-700 font-semibold">Year</Label>
            <input
              id="year"
              placeholder="e.g., 2023"
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="vin" className="text-gray-700 font-semibold">VIN</Label>
            <input
              id="vin"
              placeholder="17-character VIN"
              className="rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default VehicleDetails
