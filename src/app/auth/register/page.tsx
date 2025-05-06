"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/app/home/Header';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Validate input
    if (!name || !email || !password) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    // Register user
    const successful = true; //register(email, name, password);
    
    if (successful) {
      redirect('/profile');
    } else {
      setError('Registration failed. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="pt-16 md:pt-24 pb-24 min-h-screen flex items-center">
      <div className='bg-gradient-to-l bg-red-400 from-[#FFDB58] to-[#FFEA00] h-[70px]'>
        <Header />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up">
          <div className="p-8 w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
              <p className="text-gray-600 mt-1">Join GrupoKasama to start shopping</p>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start">
                <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;