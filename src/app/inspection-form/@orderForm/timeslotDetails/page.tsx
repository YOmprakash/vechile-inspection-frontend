import React from 'react';
import { format, addDays, startOfToday, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, ChevronLeft, ChevronRight, ClockIcon } from 'lucide-react';
import { RootState, useAppDispatch } from '@/store/appStore';
import { handleNextStep, handlePreviousStep } from '../../slice';
import { setDate, setTime, confirmTimeslot } from './slice';
import { useSelector } from 'react-redux';

const TimeslotDetails = () => {
  // Select state from the Redux store
  const dispatch = useAppDispatch();
  const { selectedDate, selectedTime } = useSelector((state:RootState) => state.timeSlotDetails.timeslotData);

  // Generate next 7 days
  const today = startOfToday();
  const upcomingDays = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  // Generate time slots from 10 AM to 8 PM
  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  // Dispatch action to set the date in Redux store
  const handleDateSelect = (date: Date) => {
    // Dates are stored as ISO strings for Redux serializability
    dispatch(setDate(date.toISOString()));
  };

  // Dispatch action to set the time in Redux store
  const handleTimeSelect = (time: string) => {
    dispatch(setTime(time));
  };

  // Dispatch actions to confirm the slot and proceed
  const handleConfirmSlot = () => {
    if (selectedDate && selectedTime) {
      dispatch(confirmTimeslot({ date: selectedDate, time: selectedTime }));
      dispatch(handleNextStep());
    }
  };

  // Parse selectedDate string back to a Date object for formatting
  const parsedSelectedDate = selectedDate ? parseISO(selectedDate) : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gc-black font-bold mb-2">
            Select Your Time Slot
          </h1>
          <p className="text-muted-foreground">
            Pick a date and time for your inspection
          </p>
        </div>

        {/* Date Selector */}
        <div className="mb-8">
          <div className="flex items-center text-blue-500 gap-2 mb-6">
            <CalendarIcon className="h-5 w-5 " />
            <h2 className="text-xl font-semibold">Choose a Date</h2>
          </div>
          
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {upcomingDays.map((date, index) => {
                const isSelected = parsedSelectedDate && format(date, 'yyyy-MM-dd') === format(parsedSelectedDate, 'yyyy-MM-dd');
                const isToday = index === 0;
                
                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateSelect(date)}
                    className={`
                      flex-shrink-0 px-6 py-4 rounded-xl border-2 min-w-[100px] shadow-sm hover:shadow-md
                      ${isSelected 
                        ? 'bg-blue-500 border-blue-500 text-white shadow-lg transform scale-105' 
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }
                    `}
                  >
                    <div className="text-center">
                      <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                        {isToday ? 'Today' : format(date, 'EEE')}
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                        {format(date, 'd')}
                      </div>
                      <div className={`text-xs font-medium ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
                        {format(date, 'MMM')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {parsedSelectedDate && (
            <div className="mt-4 p-3 bg-blue-50 border text-blue-700 border-blue-200 rounded-lg">
              <p className="text-sm font-medium">
                📅 Selected: {format(parsedSelectedDate, 'EEEE, MMMM d, yyyy')}
              </p>
            </div>
          )}
        </div>

        {/* Time Slot Grid */}
        <div className="mb-8">
          <div className="flex items-center text-blue-700 gap-2 mb-4">
            <ClockIcon className="h-5 w-5 text-blue-700 " />
            <h2 className="text-lg font-semibold">Choose a Time</h2>
          </div>
          
          {!selectedDate ? (
            <Card className='bg-gc-blue'>
              <CardContent className="p-8 text-center">
                <p className="text-gc-green">Please select a date first</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;
                
                return (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200 text-center
                      ${isSelected
                        ? 'bg-blue-500 border-blue-500 text-white shadow-lg'
                        : 'bg-gc-iron-gray border-border'
                      }
                    `}
                  >
                    <span className="font-medium">{time}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Summary */}
        {parsedSelectedDate && selectedTime && (
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-green-800">
                    You selected: {format(parsedSelectedDate, 'MMMM d, yyyy')} at {selectedTime}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Ready to confirm your time slot
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Button
            type="button"
            className='text-gc-black border border-gc-black bg-transparent'
            onClick={() => dispatch(handlePreviousStep())}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleConfirmSlot}
            disabled={!selectedDate || !selectedTime}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
          >
            Confirm &amp; Continue
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeslotDetails;