import Navbar from '@/components/Navbar';
import React from 'react';

export default function BecomeInspectorPage() {
    return (
        <>

          
                <Navbar />
                <div className="max-w-xl mx-auto bg-white rounded-xl ">
                    <h1 className="text-2xl font-semibold mb-4 text-center">
                        Become an Inspector
                    </h1>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        Fill in your details below to register as an official inspector.
                    </p>
                </div>
            
        </>

    );
}
