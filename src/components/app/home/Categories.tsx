import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Herramientas Eléctricas',
      image: 'https://images.pexels.com/photos/1409221/pexels-photo-1409221.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 124
    },
    {
      id: 2,
      name: 'Herramientas Manuales',
      image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 98
    },
    {
      id: 3,
      name: 'Maquinaria Pesada',
      image: 'https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 45
    },
    {
      id: 4,
      name: 'Equipos de Medición',
      image: 'https://images.pexels.com/photos/8120322/pexels-photo-8120322.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 76
    },
    {
      id: 5,
      name: 'Accesorios',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 203
    },
    {
      id: 6,
      name: 'Seguridad Industrial',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: 67
    }
  ];

  return (
    <section id="categorias" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Explora Nuestras Categorías</h2>
          <p className="section-subtitle">Encuentra la herramienta perfecta para cada trabajo</p>
          <Link href={`/category`} className='bg-[#72AFC1] hover:bg-[#16446A] text-white px-8 py-4 rounded'>Ver Todas</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="relative overflow-hidden rounded-lg group animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 h-64">
                <img
                width={25}
                height={25}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A082D] to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">{category.count} productos</span>
                  <span className="w-8 h-8 bg-[#72AFC1] rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;