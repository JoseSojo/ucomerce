import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Training: React.FC = () => {
  const workshops = [
    {
      id: 1,
      title: 'Uso seguro de herramientas eléctricas',
      date: '25 Jul 2025',
      location: 'Centro de capacitación GrupoKasama',
      image: 'https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&w=600',
      instructor: 'Ing. Roberto Vega',
      price: 'Gratuito para clientes',
      spots: 12
    },
    {
      id: 2,
      title: 'Técnicas avanzadas de soldadura',
      date: '18 Aug 2025',
      location: 'Taller Industrial Zona Norte',
      image: 'https://images.pexels.com/photos/3845162/pexels-photo-3845162.jpeg?auto=compress&cs=tinysrgb&w=600',
      instructor: 'Téc. Manuel Flores',
      price: '$899.99',
      spots: 8
    },
    {
      id: 3,
      title: 'Acabados profesionales en carpintería',
      date: '5 Sep 2025',
      location: 'Centro de capacitación GrupoKasama',
      image: 'https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=600',
      instructor: 'Mtra. Laura Díaz',
      price: '$1,299.99',
      spots: 10
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Capacítate con Nuestros Especialistas</h2>
          <p className="section-subtitle">Aprende de profesionales y mejora tus habilidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-3 right-3 z-10 bg-[#72AFC1] text-white text-xs font-bold px-2 py-1 rounded">
                  {workshop.spots} lugares
                </div>
                <img
                  width={25}
                  height={25}
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A082D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#0A082D] mb-3 group-hover:text-[#16446A] transition-colors">
                  {workshop.title}
                </h3>

                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-[#72AFC1]" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-[#72AFC1]" />
                    <span>{workshop.location}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500">Instructor:</span>
                      <span className="ml-1 font-medium text-[#16446A]">{workshop.instructor}</span>
                    </div>
                    <div className="font-bold text-[#16446A]">{workshop.price}</div>
                  </div>

                  <Link
                    href="#"
                    className="block w-full py-2 text-center rounded bg-[#16446A] text-white hover:bg-[#0A082D] transition-colors"
                  >
                    Reservar Lugar
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

export default Training;