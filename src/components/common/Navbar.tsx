'use client';

import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, Home, CarrotIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/domain/context/AuthContext';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return window.location.pathname === path;
    };

    const navLinks = [
        { name: 'Inicio', path: '/', icon: <Home size={20} /> },
        { name: 'Tienda', path: '/shop', icon: <ShoppingCart size={20} /> },
        { name: 'Entrar', path: '/login', icon: <User size={20} /> },
        { name: 'Buscar', path: '/search', icon: <Search size={20} /> },
        { name: 'Cotizar', path: '/search', icon: <CarrotIcon size={20} /> },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:block bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-24">
                        <Link href="/" className="text-3xl font-bold text-indigo-600">GrupoKasama</Link>

                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={`${link.path}`}
                                    className={`text-lg ${isActive(`${link.path}`)
                                            ? 'text-indigo-600 font-medium'
                                            : 'text-gray-700 hover:text-indigo-500'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="relative">
                                <button className="p-2 rounded-full hover:bg-gray-100">
                                    <ShoppingCart size={24} />
                                </button>
                                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
                <div className="grid grid-cols-4 py-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={`${link.path}`}
                            className={`flex flex-col items-center justify-center py-2 ${isActive(`${link.path}`) ? 'text-indigo-600' : 'text-gray-600'
                                }`}
                        >
                            {link.icon}
                            <span className="text-xs mt-1">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-0 right-0 p-4 z-50">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full bg-white shadow-md text-gray-700"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-40 animate-fade-in">
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link href="/" className="text-4xl font-bold text-indigo-600 mb-8">GrupoKasama</Link>

                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={`${link.path}`}
                                className={`text-2xl ${isActive(`${link.path}`) ? 'text-indigo-600 font-medium' : 'text-gray-700'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleMenu}
                            className="mt-8 p-2 rounded-full bg-gray-100 text-gray-700"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;