'use client';

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = scrolling || isMenuOpen
    ? (theme === 'dark' ? 'bg-gray-950/80 border-gray-700' : 'bg-white/95 border-b border-gc-light-gray-1')
    : 'bg-transparent border-transparent';

  const linkColor = theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gc-blue hover:text-gc-green';
  const logoColor = theme === 'dark' ? 'text-white' : 'text-gc-blue';

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold font-inter ${logoColor}`}>
              Zenith Check
            </Link>
          </div>

          {/* Desktop Navigation*/}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${linkColor} font-medium transition-colors`}>Home</Link>
            <a href="#how-it-works" className={`${linkColor} font-medium transition-colors`}>How It Works</a>
            <a href="#why-choose-us" className={`${linkColor} font-medium transition-colors`}>Why Choose Us</a>
            <a href="#pricing" className={`${linkColor} font-medium transition-colors`}>Pricing</a>
            <Link href="/become-inspector" className={`${linkColor} font-medium transition-colors`}>Become Inspector</Link>
          </div>

          {/* Desktop Auth Buttons*/}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/inspection-form" className="text-white bg-gc-coral-orange py-2 px-4 rounded-full font-medium hover:bg-orange-500 transition-colors">
              Create Inspection
            </Link>
            <Button className="border-gc-blue text-white bg-gc-blue py-2 transition">
              Login / Sign Up
            </Button>
            <Button
              onClick={toggleTheme}
              className={`rounded-full p-2 w-10 h-10 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile menu button*/}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              className={`rounded-full p-2 w-10 h-10 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gc-blue hover:text-gc-green'}`}
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
          <div className={`md:hidden py-4 border-t w-full ${theme === 'dark' ? 'border-gray-700 bg-gray-950' : 'border-gc-light-gray-1 bg-white'}`}>
            <div className="flex flex-col space-y-4 px-2">
              <a href="/" className={`${linkColor} font-medium`}>Home</a>
              <a href="#how-it-works" className={`${linkColor} font-medium`}>How It Works</a>
              <a href="#why-choose-us" className={`${linkColor} font-medium`}>Why Choose Us</a>
              <a href="#pricing" className={`${linkColor} font-medium`}>Pricing</a>
              <a href="/become-inspector" className={`${linkColor} font-medium`}>Become Inspector</a>
              <div className="flex flex-col space-y-2 pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gc-light-gray-1'}">
                <Link href="/inspection-form" className="text-center text-white bg-gc-coral-orange py-2 px-4 rounded-full font-medium hover:bg-orange-500 transition-colors">
                  Create Inspection
                </Link>
                <Button className="border-gc-blue text-white bg-gc-blue py-2 transition">
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