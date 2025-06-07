import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { User } from 'lucide-react'
import React from 'react'

const CustomerDetails = () => {
  return (
    <div>
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
  
            <input
              id="fullName"
              placeholder="Enter your full name"
              className="rounded-xl border-gray-200  duration-200 bg-white shadow-sm"
            />

          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
            <input
              id="phone"
              placeholder="Enter your phone number"
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="address" className="text-gray-700 font-semibold">Address</Label>
            <Textarea
              id="address"
              placeholder="Enter your address"
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm min-h-[90px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default CustomerDetails
