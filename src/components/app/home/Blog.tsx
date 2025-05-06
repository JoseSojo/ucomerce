import React from 'react';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Cómo elegir el taladro adecuado para cada proyecto',
      excerpt: 'Descubre las características que debes considerar al comprar un taladro y cómo seleccionar el mejor modelo según tus necesidades.',
      image: 'https://images.pexels.com/photos/5691629/pexels-photo-5691629.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Jun 2025',
      readTime: '6 min',
      author: 'Carlos Rodríguez'
    },
    {
      id: 2,
      title: 'Guía de mantenimiento para herramientas eléctricas',
      excerpt: 'Aprende cómo mantener tus herramientas en óptimas condiciones para prolongar su vida útil y garantizar un rendimiento eficiente.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '3 May 2025',
      readTime: '8 min',
      author: 'María González'
    },
    {
      id: 3,
      title: 'Los 5 errores más comunes al usar una sierra circular',
      excerpt: 'Evita estos errores frecuentes que pueden comprometer tu seguridad y la calidad de tus cortes cuando trabajas con sierras circulares.',
      image: 'https://images.pexels.com/photos/3846250/pexels-photo-3846250.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '22 Apr 2025',
      readTime: '5 min',
      author: 'Jorge Méndez'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Guías y Consejos</h2>
          <p className="section-subtitle">Aprende a sacar el máximo provecho de tus herramientas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                width={25}
                height={25}
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime} lectura</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A082D] mb-2 hover:text-[#16446A] transition-colors">
                  <Link href="#">{article.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <User size={14} className="mr-1 text-[#16446A]" />
                    <span className="text-gray-600">{article.author}</span>
                  </div>
                  <Link href="#" className="text-[#16446A] font-medium flex items-center hover:text-[#72AFC1] transition-colors">
                    Leer más <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-on-scroll">
          <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
            Explorar Blog Completo <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;