
import React from 'react';
import ContactForm from './ContactForm';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Ready to start your business journey or need help with compliance? Contact us today for a consultation.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">Send Us a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Our Office</h4>
                      <p className="text-gray-700 mt-1">
                        Bangalore-USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-700 mt-1">
                        123456789
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-700 mt-1">
                        info@corpassist.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Business Hours</h4>
                      <p className="text-gray-700 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM <br />
                        Saturday: 10:00 AM - 2:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
