'use client';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSlider = ({ 
  images, 
  currentSlide,
  yBg,
  onNext,
  onPrev
}: {
  images: string[],
  currentSlide: number,
  yBg: import('framer-motion').MotionValue<string>,
  onNext: () => void,
  onPrev: () => void
}) => (
  <div className="relative h-[80vh] min-h-[500px] max-h-[800px] w-full">
    {images.map((image, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: index === currentSlide ? 1 : 0,
          zIndex: index === currentSlide ? 10 : 0,
          scale: index === currentSlide ? 1 : 1.05
        }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className="absolute inset-0"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/50 to-teal-950/30 z-10"
          style={{ y: yBg }}
        />
        <motion.img
          src={image}
          alt={`Hero background ${index + 1}`}
          className="w-full h-full object-cover object-center"
          style={{ y: yBg }}
          loading="eager"
        />
      </motion.div>
    ))}
    
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white font-poppins leading-tight"
      >
        INTEGRATED <span className="text-teal-300">MEDIA SOLUTIONS</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-teal-100 px-4"
      >
        At The Tale House, we specialize in Live Streaming, Video Production and Content Creation services.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <Button 
          size="lg"
          className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white hover:from-teal-700 hover:to-emerald-600 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg flex items-center gap-2"
        >
          Explore Services <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="border-white dark:text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg flex items-center gap-2"
        >
          <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Watch Showreel
        </Button>
      </motion.div>
    </div>

    <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-30 flex justify-center gap-3 sm:gap-4">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => onNext()}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4 sm:w-6' : 'bg-white/50'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    <button 
      onClick={onPrev}
      className="absolute left-2 sm:left-4 top-1/2 z-30 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
      aria-label="Previous slide"
    >
      <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
    </button>
    <button 
      onClick={onNext}
      className="absolute right-2 sm:right-4 top-1/2 z-30 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
      aria-label="Next slide"
    >
      <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
    </button>
  </div>
);