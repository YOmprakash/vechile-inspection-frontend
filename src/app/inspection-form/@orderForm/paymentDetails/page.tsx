
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import {  CreditCard } from 'lucide-react'
import React from 'react'

const PaymentDetails = () => {
  return (
    <div>
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
            <Select>
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
            <input
              id="amount"
              placeholder="$0.00"
              
              className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-200 transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>
        <div className="space-y-3">
          <Label htmlFor="promoCode" className="text-gray-700 font-semibold">Promo Code (Optional)</Label>
          <input
            id="promoCode"
            placeholder="Enter promo code if you have one"
           
            className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-200 transition-all duration-200 bg-white shadow-sm"
          />
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default PaymentDetails
