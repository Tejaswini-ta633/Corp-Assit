
import React from 'react';
import PhaseCard from './PhaseCard';

const PhasesSection = () => {
  const phases = [
    {
      number: 1,
      title: "Business Setup & Licensing Interface",
      subtitle: "From concept to operational entity",
      description: "We help entrepreneurs and businesses establish their company in any chosen region across India with complete legal and regulatory compliance.",
      features: [
        "Business structure advisory (Proprietorship, LLP, Pvt Ltd, etc.)",
        "Company registration (MCA, GST, PAN, etc.)",
        "Trade licenses, FSSAI, Import/Export, MSME registration",
        "Location-specific compliance based on state and industry",
        "Interface with government bodies and legal representatives"
      ],
      outcome: "A fully registered, legally compliant business ready to operate."
    },
    {
      number: 2,
      title: "Compliance Management & Regulatory Flow",
      subtitle: "Keeping your business compliant",
      description: "We ensure ongoing regulatory compliance and eliminate the risk of license expiry or penalties through our proactive management system.",
      features: [
        "Automated alerts for license renewals and filings",
        "ROC filings, GST returns, and TDS compliance",
        "Legal audits and documentation updates",
        "Annual compliance checklist tracking",
        "Dedicated compliance dashboard for real-time status"
      ],
      outcome: "A smooth-operating business that never misses a regulatory beat."
    },
    {
      number: 3,
      title: "Strategic Collaboration & Independence",
      subtitle: "Growing towards self-sufficiency",
      description: "We partner with your business for growth until it can sustainably operate independently, providing strategic support throughout the journey.",
      features: [
        "Strategic advisory on scaling and expansion",
        "HR, operations, tech & financial structuring support",
        "Mentorship, investor readiness, pitch deck support",
        "Periodic review & handholding",
        "Gradual transition plan to full independence"
      ],
      outcome: "A self-sufficient business equipped with tools, strategy, and confidence."
    }
  ];

  return (
    <section id="phases" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Our 3-Phase Approach</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          SYAM: Setup. Yield. Align. Manage. Our methodology ensures a smooth journey from business inception to independence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {phases.map((phase) => (
            <PhaseCard 
              key={phase.number}
              number={phase.number}
              title={phase.title}
              subtitle={phase.subtitle}
              description={phase.description}
              features={phase.features}
              outcome={phase.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
