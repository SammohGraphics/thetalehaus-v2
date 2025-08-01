import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
    
}


export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="relative flex min-h-svh items-center justify-center bg-gradient-to-br from-teal-50 via-teal-100 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 p-4 sm:p-6 md:p-8 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="flex flex-col gap-8 p-8 sm:p-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50">
                    {/* Logo and title section */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <Link 
                            href={route('home')} 
                            className="group flex flex-col items-center gap-2 font-medium"
                        >
                            <motion.div 
                                whileHover={{ rotate: 15 }}
                                className="mb-1 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-teal-600 to-emerald-500 p-2 shadow-md"
                            >
                                <AppLogoIcon className="size-8 fill-current text-white" />
                            </motion.div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2 text-center"
                        >
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                                {title}
                            </h1>
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Content with subtle entrance animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        {children}
                    </motion.div>
                </div>

                {/* Footer links */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-500"
                >
                    <Link 
                        href={route('privacy')} 
                        className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <span>•</span>
                    <Link 
                        href={route('terms')} 
                        className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                        Terms of Service
                    </Link>
                </motion.div> */}
            </motion.div>
        </div>
    );
}
