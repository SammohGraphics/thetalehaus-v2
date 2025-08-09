'use client';
import { motion } from 'framer-motion';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const Navigation = () => {
  const navItems = [
    { id: 'haus', label: 'HAUS' },
    { id: 'work', label: 'WORK' },
    { id: 'us', label: 'US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const renderNavItems = (isMobile = false) => (
    <>
      {navItems.map((item) => (
        <motion.div 
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isMobile ? "w-full" : ""}
        >
          <a 
            href={`#${item.id}`}
            className={`relative group px-3 py-2 transition-all duration-300 block ${isMobile ? "text-center" : ""}`}
          >
            <span className="relative z-10 font-medium">
              {item.label}
            </span>
            
            {/* Creative hover effect - gradient underline with dot */}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-200 to-emerald-200 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ 
                scaleX: 1,
                transition: { type: 'spring', stiffness: 400, damping: 20 }
              }}
            />
            
            {/* Floating dot effect */}
            <motion.span
              className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0"
              whileHover={{
                opacity: 1,
                y: [0, -3, 0],
                transition: { duration: 0.8, repeat: Infinity }
              }}
            />
          </a>
        </motion.div>
      ))}
    </>
  );

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex justify-center mx-auto w-full max-w-2xl bg-gradient-to-r from-teal-600 to-teal-600 text-white py-2 rounded-full shadow-lg -mt-5 z-50 sticky top-4 px-4"
    >
      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden md:flex flex-wrap gap-4 justify-center text-sm w-full">
        {renderNavItems()}
      </div>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden flex w-full justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-gradient-to-b from-teal-600 to-emerald-500 text-white border-none rounded-b-2xl pt-16">
            <div className="flex flex-col items-center gap-6 text-lg">
              {renderNavItems(true)}
            </div>
            <SheetClose className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="text-white">×</span>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};