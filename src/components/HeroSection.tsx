import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-gradient">
      <div className="section-container flex flex-col md:flex-row items-center py-20 md:py-28">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">SYAM:</span> Setup. Yield. Align. Manage.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your end-to-end business consultancy partner in India, from inception to independence. We handle the regulatory complexities, so you can focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-brand-blue hover:bg-opacity-90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              className="px-8 py-6 text-lg"
              asChild
            >
              <Link to="/quote">
                <Calculator className="mr-2 h-5 w-5" />
                Cost Calculator
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Business consultancy services" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;