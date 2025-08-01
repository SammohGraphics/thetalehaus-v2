import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { motion } from 'framer-motion';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title={''} description={''}>
            <Head title="Log in" />

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
                                <Lock className="w-8 h-8 mr-2" />
                                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                            </div>
                            <CardDescription className="text-teal-100">
                                Enter your credentials to access your account
                            </CardDescription>
                        </CardHeader>
                    </div>

                    <CardContent className="p-6">
                        {status && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md text-sm"
                            >
                                {status}
                            </motion.div>
                        )}

                        <form className="space-y-4" onSubmit={submit}>
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
                                        autoFocus
                                        className="pl-10"
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink 
                                            href={route('password.request')} 
                                            className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        className="pl-10 pr-10"
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={data.remember}
                                        onCheckedChange={(checked) => setData('remember', Boolean(checked))}
                                    />
                                    <Label htmlFor="remember" className="text-gray-700 dark:text-gray-300">
                                        Remember me
                                    </Label>
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-2"
                                    disabled={processing}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {processing ? (
                                        <>
                                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            <motion.span
                                                animate={{
                                                    x: isHovered ? [0, 2, 0] : 0
                                                }}
                                                transition={{
                                                    repeat: isHovered ? Infinity : 0,
                                                    duration: 1
                                                }}
                                                className="mr-2"
                                            >
                                                →
                                            </motion.span>
                                            Sign In
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?{' '}
                            <TextLink 
                                href={route('register')} 
                                className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
                            >
                                Create one
                            </TextLink>
                        </div>
                    </CardContent>
                </Card>

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-600/10 -z-10"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-600/10 -z-10"></div>
            </motion.div>
        </AuthLayout>
    );
}