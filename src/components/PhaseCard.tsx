
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PhaseCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  outcome: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  number,
  title,
  subtitle,
  description,
  features,
  outcome
}) => {
  return (
    <Card className="phase-card border-t-4 h-full flex flex-col" style={{ borderTopColor: number === 1 ? '#0B3954' : number === 2 ? '#087E8B' : '#FF5A5F' }}>
      <CardHeader>
        <Badge 
          className="w-fit mb-3" 
          style={{ 
            backgroundColor: number === 1 ? '#0B3954' : number === 2 ? '#087E8B' : '#FF5A5F',
            color: 'white'
          }}
        >
          Phase {number}
        </Badge>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg font-medium">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mt-6">
          <h4 className="font-semibold mb-2 text-brand-blue">Key Services:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-teal mt-1.5 mr-2"></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 bg-gray-50">
        <div>
          <h4 className="font-semibold text-brand-blue mb-1">Outcome:</h4>
          <p className="text-gray-700">{outcome}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PhaseCard;
