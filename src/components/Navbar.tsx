
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">Corp<span className="text-brand-teal">Assist</span></span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-base font-medium text-gray-600 hover:text-brand-teal transition-colors">
              Services
            </a>
            <a href="#phases" className="text-base font-medium text-gray-600 hover:text-brand-teal transition-colors">
              Our Approach
            </a>
            <a href="#about" className="text-base font-medium text-gray-600 hover:text-brand-teal transition-colors">
              About Us
            </a>
            <a href="#why-us" className="text-base font-medium text-gray-600 hover:text-brand-teal transition-colors">
              Why Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-brand-orange hover:bg-opacity-90 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-brand-teal focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a 
              href="#services" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#phases" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Our Approach
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#why-us" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
            <Button 
              className="w-full mt-4 bg-brand-orange hover:bg-opacity-90 text-white"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
