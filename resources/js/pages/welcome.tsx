'use client';
import { Head, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

// Components
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { HeroSlider } from '@/components/sections/HeroSlider';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
// import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';

// Constants
import { HERO_IMAGES } from '@/lib/constants';
import { SharedData } from '@/lib/types';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600|poppins:500,600,700"
          rel="stylesheet"
        />
      </Head>

      <div className="flex min-h-screen flex-col bg-white text-[#1b1b18] dark:bg-[#0a0a0a] overflow-x-hidden">
        <Header auth={auth} />
        <Navigation />
        
        <section ref={heroRef} className="relative w-full mx-auto overflow-hidden -mt-4 sm:-mt-10">
          <HeroSlider 
            images={HERO_IMAGES} 
            currentSlide={currentSlide} 
            yBg={yBg}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        </section>

        <ProjectsSection />
        <ServicesSection />
        <CtaSection />
        {/* <ContactSection /> */}
        <Footer />
      </div>
    </>
  );
}