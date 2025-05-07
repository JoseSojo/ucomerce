import React from 'react';
import { GitCompareArrows, Minus, Package2, Plus, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/domain/context/AuthContext';
import { ProductDto } from '@/domain/dto/product.dto';
import { useEcomerce } from '@/domain/context/EcomerceContext';
import UpdateQuantity from './UpdateQuantity';

interface ProductCardProps {
  product: ProductDto;
  min?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, min }) => {
  const auth = useAuth();

  const { compareOpenModalAndAdd, addToCart, cart, modifyQuantityToCart } = useEcomerce();

  const element = cart.find(item => item.product.id === product.id);
  const i = cart.findIndex(item => item.product.id === product.id);

  if(!product) return;

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
          <span className="bg-amber-300 text-sm font-black text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
            {product.category.name}
          </span>
          <div className='mt-1 w-full flex flex-wrap gap-3'>
            {
              product.subcategory.map((sub, i) => (
                <span key={`subcategory-${sub.id}-${i}`} className='text-xs font-medium px-3 py-1 rounded-[20px] bg-amber-300'>{sub.name}</span>
              ))
            }
          </div>
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
            {!min &&   <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Package2 size={18} className="text-primary-medium" />
                <span className="text-sm text-gray-600">Stock: {product.stock}</span>
              </div>
              <span className="text-2xl font-bold text-primary-dark">${product.price}</span>
            </div>}

            <div className='flex gap-3'>
              {
                element
                  ? <UpdateQuantity product={element} i={i} />
                  : <button onClick={() => addToCart(product)} className="mt-6 w-full bg-amber-300 hover:bg-amber-400 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <ShoppingCart size={20} className="mr-2" />
                  </button>
              }
              <button onClick={() => compareOpenModalAndAdd(product)} className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <GitCompareArrows size={20} className="mr-2" />
              </button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default ProductCard;