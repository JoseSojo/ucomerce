import { useAuth } from '@/domain/context/AuthContext';
import { ProductData2 } from '@/domain/types';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';

interface RelatedProductsProps {
  products: ProductData2[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const auth = useAuth();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-[#0A082D] mb-4">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-[#e9e9e9] rounded-lg p-4 transition-transform hover:shadow-md hover:-translate-y-1 bg-white"
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <div>
              <h3 className="font-medium text-[#0A082D] line-clamp-2 h-12">{product.name}</h3>
              
              {product.rating && (
                <div className="flex items-center mt-1 mb-2">
                  <StarIcon size={16} fill="#FFD700" stroke="#FFD700" />
                  <span className="ml-1 text-sm">{product.rating.toFixed(1)}</span>
                </div>
              )}
              
              { auth.session && <div className="font-bold text-[#16446A]">{formatPrice(product.price)}</div>}
              
              <Link href={`/product/2ad10fdc-0b95-487d-822e-321d04c82216`} className="mt-3 w-full bg-[#72AFC1] hover:bg-[#16446A] text-white py-2 px-4 rounded-md text-sm transition-colors">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;