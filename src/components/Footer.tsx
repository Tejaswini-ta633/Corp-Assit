
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Corp<span className="text-brand-teal">Assist</span></h2>
            <p className="text-gray-300 mb-4">
              Your trusted partner for business setup, compliance management, and strategic growth in India.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#phases" className="text-gray-300 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Registration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">License Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance Monitoring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Growth Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Regions Served</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">North India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">South India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">East India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">West India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Central India</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} CorpAssist. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
