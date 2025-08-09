'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto relative">
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700">
          What We Offer
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 dark:from-teal-400 dark:to-teal-400 bg-clip-text text-transparent">
          Our Premium Services
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Tailored solutions designed to elevate your business to new heights
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.title} variants={item}>
            <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-teal-300/50 dark:hover:border-teal-500/50 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    {service.icon && service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground">
          Not sure what you need?{' '}
          <span className="text-teal-600 dark:text-teal-400 font-medium cursor-pointer hover:underline">
            Let&apos;s discuss your project
          </span>
        </p>
      </motion.div>
    </section>
  );
};