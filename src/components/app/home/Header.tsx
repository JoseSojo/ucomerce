import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/domain/context/AuthContext';

const Header: React.FC = () => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!window) return;
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-gray-50 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
              Grupo<span className="text-[#FFDB58]">Kasama</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {
              auth.session
                ? <>
                  <Link href="/" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#FFEA00]' : 'text-white'}`}>Inicio</Link>
                  <Link href="/category" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Categorías</Link>
                  <Link href="/product" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Productos</Link>
                  <Link href="/blog" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Blog</Link>
                  <Link href="#contacto" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Contacto</Link>
                </>
                : <>
                  <Link href="/" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Inicio</Link>
                  <Link href="/product" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Productos</Link>
                  <Link href="/blog" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Blog</Link>
                  <Link href="#contacto" className={`font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>Contacto</Link>
                </>
            }
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className={`hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
              <Search size={20} />
            </button>
            {
              auth.session
                ? <>
                  <Link href={`/cart`} className={`hover:text-[#FFDB58] transition-colors relative ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
                    <ShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-[#FFDB58] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                  </Link>
                  <Link href={`/profile`} className={`flex items-center space-x-1 ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
                    <User size={20} />
                    <span className="font-medium hover:text-[#FFDB58] transition-colors">Perfíl</span>
                  </Link>
                  <button onClick={auth.logout} className={`flex items-center space-x-1 ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
                    <LogOut size={20} />
                    <span className="font-medium hover:text-[#FFDB58] transition-colors">Salir</span>
                  </button>
                </>
                : <>
                  <Link href={`/auth`} className={`flex items-center space-x-1 ${scrolled ? 'text-[#793205]' : 'text-white'}`}>
                    <User size={20} />
                    <span className="font-medium hover:text-[#FFDB58] transition-colors">Iniciar Sesión</span>
                  </Link>
                </>
            }

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-[#793205]' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="font-medium text-[#793205] hover:text-[#FFDB58] py-2 border-b border-gray-100">Inicio</Link>
            <Link href="#categorias" className="font-medium text-[#793205] hover:text-[#FFDB58] py-2 border-b border-gray-100">Categorías</Link>
            <Link href="#productos" className="font-medium text-[#793205] hover:text-[#FFDB58] py-2 border-b border-gray-100">Productos</Link>
            <Link href="#blog" className="font-medium text-[#793205] hover:text-[#FFDB58] py-2 border-b border-gray-100">Blog</Link>
            <Link href="#contacto" className="font-medium text-[#793205] hover:text-[#FFDB58] py-2">Contacto</Link>
          </nav>
        </div>
      </div>
    </header >
  );
};

export default Header;