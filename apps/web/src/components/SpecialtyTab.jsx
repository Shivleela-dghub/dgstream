import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

function SpecialtyTab({ strategies, ctaText = 'Start Growing My Practice' }) {
  return (
    <div className="py-8">
      <ul className="space-y-4 mb-8">
        {strategies.map((strategy, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-base">{strategy}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="bg-accent hover:bg-accent/90">
        <Link to="/contact">{ctaText}</Link>
      </Button>
    </div>
  );
}

export default SpecialtyTab;