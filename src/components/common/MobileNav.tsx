import React from 'react';
import { Home, BookOpen, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

const MobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-40">
      <div className="flex justify-around py-3">
        <Link href="#" className="flex flex-col items-center text-[#FFEA00] hover:text-[#FFDB58] transition-colors">
          <Home size={20} />
          <span className="text-xs mt-1">Inicio</span>
        </Link>
        <Link href="#blog" className="flex flex-col items-center text-[#FFEA00] hover:text-[#FFDB58] transition-colors">
          <BookOpen size={20} />
          <span className="text-xs mt-1">Blog</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#FFEA00] hover:text-[#FFDB58] transition-colors">
          <Search size={20} />
          <span className="text-xs mt-1">Buscar</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#FFEA00] hover:text-[#FFDB58] transition-colors relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 bg-[#FFDB58] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          <span className="text-xs mt-1">Carrito</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#FFEA00] hover:text-[#FFDB58] transition-colors">
          <User size={20} />
          <span className="text-xs mt-1">Cuenta</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;