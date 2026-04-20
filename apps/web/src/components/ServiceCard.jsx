import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, image, alt, link = '/contact' }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent overflow-hidden group">
      {image && (
        <div className="w-full aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={alt || title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className={image ? "pt-6" : ""}>
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-base mb-6 flex-1">
          {description}
        </CardDescription>
        <Button asChild variant="outline" className="w-full group/btn">
          <Link to={link}>
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;