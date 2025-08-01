'use client';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Link as InertiaLink } from '@inertiajs/react';
import { SharedData } from '@/lib/types';

export const Header = ({ auth }: { auth: SharedData['auth'] }) => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100 }}
    className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3 sm:py-4 dark:border-gray-700 bg-white/10 dark:bg-[#0a0a0a]/10 backdrop-blur"
  >
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex-shrink-0 flex items-center gap-4"
        >
          <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" loading="lazy" />
          <div className="hidden sm:flex items-center">
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-3 sm:mx-4" />
            <div className="text-xs sm:text-sm text-center">
              <p className="font-medium dark:text-teal-100">Based in</p>
              <p className="font-semibold dark:text-teal-100">Tanzania, East Africa</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="sm:hidden text-xs text-center">
        <p className="font-medium dark:text-teal-100">Based in Tanzania, East Africa</p>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg hover:shadow-teal-500/20 transition-all text-sm sm:text-base"
          >
            Let's Connect
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 text-sm space-y-2 p-2">
          {auth.user ? (
            <InertiaLink
              href={route('logout')}
              className="block px-3 py-2 rounded hover:bg-muted transition-colors"
            >
              Logout
            </InertiaLink>
          ) : (
            <>
              <InertiaLink
                href={route('login')}
                className="block px-3 py-2 rounded hover:bg-muted transition-colors"
              >
                Log in
              </InertiaLink>
              <InertiaLink
                href={route('register')}
                className="block px-3 py-2 rounded hover:bg-muted transition-colors"
              >
                Register
              </InertiaLink>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  </motion.header>
);