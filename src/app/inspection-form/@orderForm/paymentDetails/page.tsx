'use client'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/appStore';
import { handlePreviousStep } from '../../slice'; 

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, CreditCard, Banknote, Smartphone, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { ModelProps } from '../../interfaces';

const INSPECTION_PRICES = {
  basic: 1499,
  premium: 2499,
  default: 0,
};
const PLATFORM_FEE = 99;


const SuccessModal :React.FC<ModelProps> = ({ isOpen, onClose, totalAmount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-md m-4 bg-white rounded-2xl shadow-2xl transform animate-scale-in">
        <CardContent className="p-8 text-center relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full h-8 w-8"
          >
            <X className="h-5 w-5 text-gray-500" />
          </Button>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-5">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">Payment Successful!</h3>
          <p className="mt-3 text-gray-600">
            Thank you for your order. We have received your payment of{' '}
            <span className="font-bold">₹{totalAmount.toLocaleString('en-IN')}</span>.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            A confirmation email has been sent to you. Our team will be in touch shortly.
          </p>

          <Button
            onClick={onClose}
            className="mt-8 w-full rounded-lg py-5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700"
          >
            Close
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


const PaymentDetails = () => {
  const dispatch = useAppDispatch();
  
  const { inspectionType } = useSelector((state: RootState) => state.vehicleDetails.data);
  const [totalAmount, setTotalAmount] = useState(PLATFORM_FEE);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paymentMethods = [
    { value: 'credit-card', label: 'Credit Card', icon: CreditCard },
    { value: 'debit-card', label: 'Debit Card', icon: CreditCard },
    { value: 'upi', label: 'UPI / QR Code', icon: Smartphone },
    { value: 'netbanking', label: 'Net Banking', icon: Banknote }
  ];

  useEffect(() => {
    const basePrice = INSPECTION_PRICES[inspectionType as keyof typeof INSPECTION_PRICES] || INSPECTION_PRICES.default;
    setTotalAmount(basePrice + PLATFORM_FEE);
  }, [inspectionType]);

  const getInspectionTypeName = () => {
    if (inspectionType === 'basic') return 'Basic Inspection';
    if (inspectionType === 'premium') return 'Premium Inspection';
    return 'No Inspection Selected';
  };

  const selectedPaymentMethod = paymentMethods.find(p => p.value === paymentMethod);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    
  };

  return (
    <>
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        totalAmount={totalAmount} 
      />
      <Card className="border-0 shadow-lg bg-white rounded-2xl animate-fade-in transition-all duration-300">
        <CardHeader className="pb-6 rounded-t-2xl bg-slate-50 border-b">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            Payment & Confirmation
          </CardTitle>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod" className="font-semibold text-gray-700">Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger id="paymentMethod" className="input-style h-11 text-base focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <div className="flex items-center gap-3">
                        {selectedPaymentMethod ? (
                          <>
                            <selectedPaymentMethod.icon className="h-5 w-5 text-gray-500" />
                            <span>{selectedPaymentMethod.label}</span>
                          </>
                        ) : (
                          <SelectValue placeholder="Select a payment method" />
                        )}
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          <div className="flex items-center gap-3">
                            <method.icon className="h-5 w-5 text-gray-500" />
                            <span>{method.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="promoCode" className="font-semibold text-gray-700">Promo Code (Optional)</Label>
                  <input
                    id="promoCode"
                    placeholder="Enter promo code"
                    className="input-style"
                  />
                </div>
                <div className="!mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mt-0.5">
                        <ShieldCheck size={14} />
                    </div>
                    <div className="text-sm text-blue-800">
                        <p className="font-semibold">Your payment is secure.</p>
                        <p className="text-blue-700">All transactions are encrypted. We never store card details.</p>
                    </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="font-semibold text-gray-700">Order Summary</Label>
                  <Card className="bg-slate-50 border-slate-200 rounded-lg p-5">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-gray-800">
                        <span>{getInspectionTypeName()}</span>
                        <span className="font-medium">₹{(totalAmount - PLATFORM_FEE).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600">
                        <span>Platform & Service Fee</span>
                        <span className="font-medium">₹{PLATFORM_FEE.toLocaleString('en-IN')}</span>
                      </div>
                      <hr className="border-t border-slate-200 my-2" />
                      <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                        <span>Total Payable</span>
                        <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
                     <h4 className="font-semibold text-green-800">What happens next?</h4>
                     <p className="text-sm text-green-700">
                        After payment, you'll get a confirmation email and our inspector will contact you within 24 hours to schedule the visit.
                     </p>
                </div>
              </div>

            </div>

            <div className="flex justify-between items-center border-t pt-6 mt-12">
                <Button
                  type="button"
                  onClick={() => dispatch(handlePreviousStep())}
                 className='text-gc-black border border-gc-black bg-transparent'
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
                <Button
                  type="submit"
                  className="rounded-lg px-8 py-5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700"
                >
                  Pay ₹{totalAmount.toLocaleString('en-IN')}
                </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </>
  );
};

export default PaymentDetails;

