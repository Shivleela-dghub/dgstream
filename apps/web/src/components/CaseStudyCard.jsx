import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

function CaseStudyCard({ specialty, challenge, solution, metrics }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-accent">{specialty}</span>
        </div>
        <CardTitle className="text-xl">{challenge}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6">
          {solution}
        </CardDescription>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-accent">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CaseStudyCard;