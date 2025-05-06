import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title?: string
}

const Hero: React.FC<Props> = ({ title }) => {
  return (
    <section className="relative h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          width={25}
          height={25}
          src="https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Herramientas de trabajo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#793205]/80 to-[#FFEA00]/50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title ? title : `Las Mejores Herramientas Para Tus Proyectos`}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Todo lo que necesitas para construir, reparar y crear.
            Herramientas profesionales con garantía extendida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#productos" className="btn-primary flex items-center justify-center gap-2">
              Ver Productos <ChevronRight size={18} />
            </Link>
            <Link href="#contacto" className="btn-outline bg-white/10 text-white border-white hover:bg-white hover:text-[#FFEA00] flex items-center justify-center gap-2">
              Contáctanos <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;