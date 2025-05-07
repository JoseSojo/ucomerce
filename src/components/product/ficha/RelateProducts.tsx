import { useAuth } from '@/domain/context/AuthContext';
import { useEcomerce } from '@/domain/context/EcomerceContext';
import { ProductData2 } from '@/domain/types';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '../ProductCard';
import { ProductDto } from '@/domain/dto/product.dto';

interface RelatedProductsProps {
  products: ProductDto[];
}

const RelatedProducts = ({ }: RelatedProductsProps) => {
  const { products } = useEcomerce();

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-[#793205] mb-4">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* {products.map((product) => (
          <ProductCard product={product} min />
        ))} */}
        { products && <ProductCard product={products[0]} min /> }
        { products && <ProductCard product={products[1]} min /> }
        { products && <ProductCard product={products[2]} min /> }
      </div>
    </div>
  );
};

export default RelatedProducts;