'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-50 backdrop-blur-md border-gc-light-gray-1 ${scrolling || isMenuOpen ? 'bg-white/95 border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gc-blue font-inter">
              Zenith Check
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gc-blue hover:text-gc-green font-medium transition-colors">
              Home
            </Link>
            <a href="#how-it-works" className="text-gc-blue hover:text-gc-green font-medium transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-gc-blue hover:text-gc-green font-medium transition-colors">
              Why Choose Us
            </a>
            <a href="#pricing" className="text-gc-blue hover:text-gc-green font-medium transition-colors">
              Pricing
            </a>
            <Link href="/become-inspector" className="text-gc-blue hover:text-gc-green font-medium transition-colors">
              Become Inspector
            </Link>
            
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/inspection-form" className="text-white bg-gc-coral-orange py-2 px-4 rounded-full font-medium hover:bg-orange-500 transition-colors">
              Create Inspection
            </Link>
            <Button  className="border-gc-blue  text-white bg-gc-blue py-2  transition">
              Login / Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gc-blue hover:text-gc-green p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t w-full border-gc-light-gray-1 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gc-blue hover:text-gc-green font-medium">
                About
              </a>
              <a href="#how-it-works" className="text-gc-blue hover:text-gc-green font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-gc-blue hover:text-gc-green font-medium">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-gc-blue text-gc-blue hover:bg-gc-blue hover:text-white transition">
              Login / Sign Up
            </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
