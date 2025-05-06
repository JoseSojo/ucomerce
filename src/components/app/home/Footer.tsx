import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#000] text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Grupo<span className="text-[#FFDB58]">Kasama</span>
            </h2>
            <p className="text-white/80 mb-6">
              Tu proveedor confiable de herramientas y maquinaria profesional desde 2010. Calidad garantizada para proyectos de cualquier escala.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFDB58] transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFDB58] transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFDB58] transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFDB58] transition-colors">
                <Youtube size={18} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {/* <li><Link href="/dashboard" className="text-white/80 hover:text-[#FFDB58] transition-colors">Administración</Link></li> */}
              <li><Link href="#" className="text-white/80 hover:text-[#FFDB58] transition-colors">Inicio</Link></li>
              <li><Link href="/product" className="text-white/80 hover:text-[#FFDB58] transition-colors">Productos</Link></li>
              <li><Link href="/category" className="text-white/80 hover:text-[#FFDB58] transition-colors">Categorías</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-[#FFDB58] transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-[#FFDB58]" />
                <span className="text-white/80">Av. Reforma 247, Col. Centro, Ciudad de México, CP 06500</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#FFDB58]" />
                <Link href="tel:+525555123456" className="text-white/80 hover:text-[#FFDB58] transition-colors">+52 55 5512 3456</Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#FFDB58]" />
                <Link href="mailto:info@grupokasama.com" className="text-white/80 hover:text-[#FFDB58] transition-colors">info@grupokasama.com</Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Horario de Atención:</h4>
              <p className="text-white/80">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-white/80">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Boletín Informativo</h3>
            <p className="text-white/80 mb-4">
              Suscríbete para recibir ofertas exclusivas, novedades y consejos prácticos.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-[#FFDB58] hover:bg-[#5a9daf] px-4 rounded-r-md flex items-center justify-center transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
            <div>
              <img
              width={25}
              height={25}
                src="https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Métodos de pago" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 GrupoKasama. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 text-sm hover:text-[#FFDB58] transition-colors">Términos y Condiciones</Link>
              <Link href="#" className="text-white/60 text-sm hover:text-[#FFDB58] transition-colors">Política de Privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;