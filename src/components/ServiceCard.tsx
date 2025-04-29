
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, services, className, style }) => {
  return (
    <Card className={`h-full shadow-md hover:shadow-lg transition-shadow ${className}`} style={style}>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-brand-blue">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex">
              <CheckCircle className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
