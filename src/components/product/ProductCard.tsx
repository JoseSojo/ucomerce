import React from 'react';
import { Package2, ShoppingCart } from 'lucide-react';
import { ProductCrud } from '@/domain/types';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/domain/context/AuthContext';

interface ProductCardProps {
  product: ProductCrud;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const auth = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            width={25}
            height={25}
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {product.stock < 10 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              ¡Últimas unidades!
            </span>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-4">
          <span className="text-sm font-medium text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <Link href={`/product/${product.id}`}>
          <h2 className="text-xl font-semibold text-primary-dark mb-2 hover:text-primary-medium transition-colors">
            {product.name}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {
          auth.session && <>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Package2 size={18} className="text-primary-medium" />
                <span className="text-sm text-gray-600">Stock: {product.stock}</span>
              </div>
              <span className="text-2xl font-bold text-primary-dark">${product.price}</span>
            </div>

            <button className="mt-6 w-full bg-primary-medium hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
              <ShoppingCart size={20} className="mr-2" />
              Agregar al carrito
            </button>
          </>
        }
      </div>
    </div>
  );
};

export default ProductCard;