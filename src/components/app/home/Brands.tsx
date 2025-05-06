import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    {
      id: 1,
      name: 'DeWalt',
      logo: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Herramientas profesionales para los trabajos más exigentes. Reconocida por su durabilidad y potencia.',
      established: 1924,
      featured: 'Taladros y Herramientas Eléctricas'
    },
    {
      id: 2,
      name: 'Bosch',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Innovación alemana en cada herramienta. Precisión, eficiencia y tecnología de vanguardia.',
      established: 1886,
      featured: 'Medición y Herramientas Inalámbricas'
    },
    {
      id: 3,
      name: 'Makita',
      logo: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Calidad japonesa reconocida mundialmente. Especialistas en soluciones inalámbricas de alto rendimiento.',
      established: 1915,
      featured: 'Sierras y Rotomartillos'
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Marcas Exclusivas</h2>
          <p className="section-subtitle">Trabajamos con las mejores marcas del mercado</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={brand.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                width={25}
                height={25}
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#793205]/70 to-transparent flex items-start justify-center pt-6">
                  <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{brand.description}</p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-[#FFEA00]">Fundada:</span>
                    <span>{brand.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#FFEA00]">Especialidad:</span>
                    <span>{brand.featured}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="#" 
                    className="block w-full py-2 text-center rounded border border-[#FFEA00] text-[#FFEA00] hover:bg-[#FFEA00] hover:text-gray-700 font-bold transition-colors"
                  >
                    Ver Productos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;