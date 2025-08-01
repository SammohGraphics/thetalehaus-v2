import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { motion } from 'framer-motion';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title={''} description={''}>
            <Head title="Register" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-6 text-white">
                        <CardHeader className="p-0">
                            <div className="flex items-center justify-center mb-4">
                                <User className="w-8 h-8 mr-2" />
                                <CardTitle className="text-2xl font-bold">Join Our Community</CardTitle>
                            </div>
                            <CardDescription className="text-teal-100">
                                Create your account to get started
                            </CardDescription>
                        </CardHeader>
                    </div>

                    <CardContent className="p-6">
                        <form className="space-y-4" onSubmit={submit}>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                                    Full Name
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        className="pl-10"
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="John Doe"
                                        disabled={processing}
                                    />
                                </div>
                                <InputError message={errors.name} className="mt-1" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        className="pl-10"
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@example.com"
                                        disabled={processing}
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                                    Password
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        className="pl-10 pr-10"
                                        autoComplete="new-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        disabled={processing}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={processing}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-1" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password_confirmation" className="text-gray-700 dark:text-gray-300">
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="password_confirmation"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                        className="pl-10 pr-10"
                                        autoComplete="new-password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="••••••••"
                                        disabled={processing}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        disabled={processing}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                <InputError message={errors.password_confirmation} className="mt-1" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-4"
                                    disabled={processing}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {processing ? (
                                        <>
                                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                            Creating account...
                                        </>
                                    ) : (
                                        <>
                                            Get Started
                                            <motion.span
                                                animate={{
                                                    x: isHovered ? [0, 5, 0] : 0
                                                }}
                                                transition={{
                                                    repeat: isHovered ? Infinity : 0,
                                                    duration: 1.5
                                                }}
                                                className="ml-2"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.span>
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <TextLink 
                                href={route('login')} 
                                className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
                            >
                                Sign in
                            </TextLink>
                        </div>
                    </CardContent>
                </Card>

                {/* Password strength indicator (can be implemented with logic) */}
                {data.password && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password Strength
                            </span>
                            <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                                {data.password.length > 10 ? 'Strong' : data.password.length > 6 ? 'Medium' : 'Weak'}
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div 
                                className={`h-1.5 rounded-full ${
                                    data.password.length > 10 
                                        ? 'bg-green-500' 
                                        : data.password.length > 6 
                                        ? 'bg-yellow-500' 
                                        : 'bg-red-500'
                                }`}
                                style={{ width: `${Math.min(100, data.password.length * 10)}%` }}
                            ></div>
                        </div>
                    </motion.div>
                )}

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-600/10 -z-10"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-600/10 -z-10"></div>
            </motion.div>
        </AuthLayout>
    );
}