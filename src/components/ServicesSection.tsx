
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Business Structure Advisory",
      description: "Expert guidance on selecting the optimal business structure for your venture",
      services: [
        "Proprietorship setup guidance",
        "LLP formation assistance",
        "Private Limited incorporation",
        "OPC establishment support",
        "Partnership firm registration"
      ]
    },
    {
      title: "Company Registration",
      description: "Comprehensive assistance with all registration requirements",
      services: [
        "MCA (ROC) registration",
        "GST registration",
        "PAN & TAN registration",
        "Bank account opening assistance",
        "Digital Signature Certificate (DSC)"
      ]
    },
    {
      title: "Real Estate & Space Management",
      description: "End-to-end real estate and space management solutions",
      services: [
        "Collaborations with Prestige, Shobha, Godrej",
        "Site selection for offices and facilities",
        "Leasing and legal documentation",
        "Space customization and management",
        "Green building compliance"
      ]
    },
    {
      title: "Office Setup & Development",
      description: "Complete office setup and infrastructure development",
      services: [
        "Interior & functional space planning",
        "Equipment sourcing and furnishing",
        "Sustainable practices integration",
        "Logistics coordination",
        "Asset management setup"
      ]
    },
    {
      title: "Technology & Infrastructure Setup",
      description: "Comprehensive IT infrastructure implementation",
      services: [
        "Workstation and server setup",
        "Network and cloud infrastructure",
        "Hardware procurement and setup",
        "Software stack implementation",
        "Security systems integration"
      ]
    },
    {
      title: "Vendor Ecosystem Management",
      description: "Complete vendor management and relationship solutions",
      services: [
        "Curated trusted vendor network",
        "Vendor negotiation & onboarding",
        "Relationship management",
        "Performance monitoring",
        "Contract administration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Our Comprehensive Services</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          From business registration to complete operational setup, we handle every aspect of establishing your business presence in India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              services={service.services}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
