'use client';

import React from 'react';

interface Brand {
  id: number;
  name: string;
  logo: string;
  foundedYear: number;
  specialization: string;
  backgroundColor: string;
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    {
      id: 1,
      name: "KAMASA",
      logo: "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foundedYear: 2020,
      specialization: "Electronics & Technology",
      backgroundColor: "#E7F5FF"
    },
    {
      id: 2,
      name: "KAILI",
      logo: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foundedYear: 1976,
      specialization: "Consumer Electronics",
      backgroundColor: "#FFF5F5"
    },
    {
      id: 3,
      name: "ASAKI",
      logo: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foundedYear: 1946,
      specialization: "Electronics & Entertainment",
      backgroundColor: "#F3F4FF"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Marcas Exclusivas</h2>
          <p className="section-subtitle">Trabajamos con las mejores marcas del mercado</p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-6">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-none w-96 rounded-xl overflow-hidden transition-transform hover:scale-105"
                  style={{ backgroundColor: brand.backgroundColor }}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#0A082D] mb-2">
                      {brand.name}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Founded</span>
                        <span className="font-medium text-[#16446A]">{brand.foundedYear}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="block font-medium text-[#0A082D]">Specialization</span>
                        <span className="block mt-1">{brand.specialization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f7f7f7] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f7f7f7] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Brands;