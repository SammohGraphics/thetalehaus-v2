'use client';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ServiceCard = ({ service }: { 
  service: { 
    title: string; 
    description: string; 
    icon: string 
  } 
}) => (
  <Card className="h-full hover:shadow-lg transition-shadow border-teal-100 dark:border-teal-900/50 hover:border-teal-300 dark:hover:border-teal-500">
    <CardContent className="p-4 sm:p-6 text-center">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-teal-700 dark:text-teal-400">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{service.description}</p>
      <Button variant="link" className="mt-3 sm:mt-4 text-teal-600 dark:text-teal-400 text-sm sm:text-base">
        Learn more <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
    </CardContent>
  </Card>
);