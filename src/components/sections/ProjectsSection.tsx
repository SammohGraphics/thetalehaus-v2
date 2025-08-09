'use client';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  const firstRow = PROJECTS.slice(0, PROJECTS.length / 2);
  const secondRow = PROJECTS.slice(PROJECTS.length / 2);

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-700 dark:text-teal-400"
        >
          Our Featured Projects
        </motion.h2>
        
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-gray-50 dark:from-[#0f0f0f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-gray-50 dark:from-[#0f0f0f] to-transparent" />
          
          <div className="relative mb-6 overflow-hidden">
            <Marquee 
              speed={40}
              pauseOnHover
              gradient
              gradientColor={cn(
                "bg-gray-50 dark:bg-[#0f0f0f]",
                "from-gray-50 dark:from-[#0f0f0f]",
                "to-transparent"
              )}
              gradientWidth={100}
              className="py-2"
            >
              {firstRow.map((project) => (
                <div key={project.title} className="mx-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <motion.div
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                        className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
                      />
                    </div>
                    <ProjectCard {...project} />
                  </motion.div>
                </div>
              ))}
            </Marquee>
          </div>
          
          <div className="relative overflow-hidden">
            <Marquee 
              direction="right"
              speed={40}
              pauseOnHover
              gradient
              gradientColor={cn(
                "bg-gray-50 dark:bg-[#0f0f0f]",
                "from-gray-50 dark:from-[#0f0f0f]",
                "to-transparent"
              )}
              gradientWidth={100}
              className="py-2"
            >
              {secondRow.map((project) => (
                <div key={project.title} className="mx-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <motion.div
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                        className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
                      />
                    </div>
                    <ProjectCard {...project} />
                  </motion.div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400 dark:hover:text-[#0a0a0a] relative overflow-hidden group"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};