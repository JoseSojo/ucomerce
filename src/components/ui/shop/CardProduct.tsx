import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/domain/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          width={25}
          height={25}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm font-medium text-indigo-600">{product.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;