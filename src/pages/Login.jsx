import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { Camera } from 'lucide-react';

const Login = () => {
    const { signIn, signUp } = useAuth();
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (isSignUp && password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            if (isSignUp) {
                const { error } = await signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                            username: username,
                        }
                    }
                });
                if (error) throw error;
                alert('Check your email for the login link!');
            } else {
                const { error } = await signIn({ email, password });
                if (error) throw error;
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background-dark text-white font-display px-4">
            <div className="w-full max-w-sm space-y-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="size-12 text-primary flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
                        <Camera className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        {isSignUp ? 'Create an account' : 'Welcome back'}
                    </h2>
                    <p className="text-white/60 text-sm">
                        {isSignUp ? 'Start creating amazing videos today.' : 'Sign in to access your studio.'}
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        {isSignUp && (
                            <>
                                <div>
                                    <label htmlFor="full-name" className="sr-only">Full Name</label>
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="relative block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white placeholder-white/50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username" className="sr-only">Username</label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="relative block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white placeholder-white/50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </>
                        )}
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white placeholder-white/50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white placeholder-white/50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {isSignUp && (
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="relative block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white placeholder-white/50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-white hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {loading ? 'Processing...' : (isSignUp ? 'Sign up' : 'Sign in')}
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-sm font-medium text-white/60 hover:text-primary transition-colors"
                    >
                        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
