import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/domain/context/AuthContext';

const BestSellers: React.FC = () => {
  const [activeTab] = useState('herramientas');
  const auth = useAuth();

  const products = {
    herramientas: [
      {
        id: 1,
        name: 'Taladro Profesional 20V',
        price: 1299.99,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/115558/pexels-photo-115558.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 15,
        brand: 'DeWalt'
      },
      {
        id: 2,
        name: 'Sierra Circular 1800W',
        price: 2499.99,
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2003010/pexels-photo-2003010.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 0,
        brand: 'Makita'
      },
      {
        id: 3,
        name: 'Set de Destornilladores (42 pcs)',
        price: 599.99,
        rating: 4.9,
        image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 20,
        brand: 'Stanley'
      },
      {
        id: 4,
        name: 'Rotomartillo SDS-Plus',
        price: 3299.99,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 10,
        brand: 'Bosch'
      }
    ],
    maquinaria: [
      {
        id: 5,
        name: 'Compresor de Aire 100L',
        price: 4899.99,
        rating: 4.7,
        image: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 5,
        brand: 'Truper'
      },
      {
        id: 6,
        name: 'Generador Eléctrico 7500W',
        price: 12999.99,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/8876488/pexels-photo-8876488.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 0,
        brand: 'Honda'
      },
      {
        id: 7,
        name: 'Soldadora Inverter 200A',
        price: 3599.99,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/3845162/pexels-photo-3845162.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 12,
        brand: 'Lincoln'
      },
      {
        id: 8,
        name: 'Escalera Telescópica 4.4m',
        price: 2199.99,
        rating: 4.9,
        image: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=600',
        discount: 0,
        brand: 'Werner'
      }
    ]
  };

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="section-title">Los Más Vendidos Este Mes</h2>
          <p className="section-subtitle">Descubre por qué nuestros clientes confían en estos productos</p>
        </div>

        <div className="flex justify-center mb-8 animate-on-scroll">
          <Link
            href={`/product`}
            className={`px-6 py-2 rounded-md transition-all bg-[#FFDB58] hover:bg-[#FFEA00] text-gray-900`}
          >
            Ver Más
          </Link>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeTab as keyof typeof products].map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm hover:shadow transition-all">
                    <Heart size={16} className="text-gray-600" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm hover:shadow transition-all">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                </div>
                <div className="aspect-w-1 aspect-h-1 h-48">
                  <img
                    width={25}
                    height={25}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/50 to-transparent h-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-4 w-full">
                <div className="text-xs text-[#FFDB58] font-medium mb-1">{product.brand}</div>
                <h3 className="text-lg font-semibold text-[#793205] mb-1 transition-colors group-hover:text-[#FFEA00]">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>

                {
                  auth.session
                    ? <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-xl font-bold text-[#FFEA00]">
                            ${product.discount > 0
                              ? (product.price - (product.price * product.discount / 100)).toFixed(2)
                              : product.price.toFixed(2)
                            }
                          </span>
                          {product.discount > 0 && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              ${product.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button className="w-10 h-10 rounded-full bg-[#FFDB58] hover:bg-[#FFEA00] flex items-center justify-center transition-colors">
                          <ShoppingCart size={18} className="text-black" />
                        </button>
                      </div>
                    </>
                    : <>
                      <Link
                        href={`/auth`}
                        className='py-3 rounded text-gray-900 font-bold flex text-center justify-center items-center m-auto w-full bg-[#FFDB58] hover:bg-[#FFEA00]'
                      >
                        <span>Cotizar</span>
                      </Link>
                    </>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;