import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEcomerce } from '@/domain/context/EcomerceContext';
import { CategoryDto } from '@/domain/dto/category.dto';

const Categories: React.FC = () => {
  const { category, setFilters } = useEcomerce();

  const [filterCategory, setFilterCategory] = useState(``);

  const FilterCategoryId = (category: CategoryDto) => {
    setFilters((prev) => {
      return { ...prev, categorySelect: category };
    })
  }

  return (
    <section id="categorias" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">Explora Nuestras Categorías</h2>
          <p className="section-subtitle">Encuentra la herramienta perfecta para cada trabajo</p>
          <Link href={`/category`} className='bg-[#FFDB58] hover:bg-[#FFEA00] text-white px-8 py-4 rounded'>Ver Todas</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.map((category, index) => {
            return (
              <div
                key={category.id}
                className="relative overflow-hidden rounded-lg group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div style={{ background: category.color }} className={`relative bottom-0 left-0 right-0 p-6 flex justify-between items-center`}>
                  <h3 className="text-xl font-bold text-black mb-1">{category.name}</h3>
                  <div className="flex justify-between items-center">
                    <Link href={`/product`} onClick={() => FilterCategoryId(category)} className="px-3 text-xs text-black font-bold h-8 bg-[#FFDB58] rounded-full flex items-center justify-center">
                      Productos <ArrowRight size={18} className="" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;