
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Clock, BarChart4, Users, Globe, Lightbulb } from 'lucide-react';

const WhyUsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
      title: "One-stop Business Solution",
      description: "From registration to compliance to strategic advice, we handle it all under one roof."
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: "Legal + Operational Expertise",
      description: "Our team combines legal knowledge with practical business operations experience."
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-blue" />,
      title: "Tech-enabled Compliance Alerts",
      description: "Never miss a deadline with our automated compliance notification system."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-brand-blue" />,
      title: "Long-term Partnership Model",
      description: "We're invested in your success through all phases of business growth."
    },
    {
      icon: <Globe className="h-10 w-10 text-brand-blue" />,
      title: "Pan-India Coverage",
      description: "Operational expertise across all states and union territories in India."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-brand-blue" />,
      title: "Industry-agnostic Approach",
      description: "Experience working with businesses across diverse sectors and industries."
    }
  ];

  return (
    <section id="why-us" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Why Choose CorpAssist?</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Our comprehensive approach and expertise set us apart from traditional business service providers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl text-brand-dark">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
