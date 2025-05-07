import { Dispatch, SetStateAction, useState } from 'react';
import { ShoppingCart, Package, StarIcon } from 'lucide-react';
import { useAuth } from '@/domain/context/AuthContext';
import { ProductDto } from '@/domain/dto/product.dto';
import { useEcomerce } from '@/domain/context/EcomerceContext';

interface ProductInfoProps {
  product: ProductDto;
  setQuantity: Dispatch<SetStateAction<number>>;
  quantity: number
}

const ProductInfo = ({ product, setQuantity,quantity }: ProductInfoProps) => {
  const auth = useAuth();
  const { addToCart } = useEcomerce();

  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            fill={index < Math.floor(rating) ? "#FFD700" : "none"}
            stroke={index < Math.floor(rating) ? "#FFD700" : "#888"}
            size={16}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-sm text-[#FFEA00]">{rating.toFixed(1)}</span>
        <span className="ml-2 text-sm text-gray-500">
          ({product.reviews?.length || 0} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Breadcrumb */}
      <div className="flex text-sm text-amber-500">
        <span>{product.category.name}</span>
        <span className="mx-2">&gt;</span>
        {
          product.subcategory.map((sub) => (
            <span key={`sub-${sub.name}-${sub.id}`} className='px-3 py-1 rounded-lg text-xs ml-1 bg-amber-400 text-black'>{sub.name}</span>

          ))
        }
      </div>

      {/* Product title and rating */}
      <div>
        <h1 className="text-2xl font-bold text-[#793205] mb-2">{product.name}</h1>
        {product.rating && renderStarRating(product.rating)}
      </div>

      {/* Price and stock */}
      {auth.session && <div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-[#FFEA00]">
            {formatPrice(product.price)}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            + Free shipping
          </span>
        </div>

        <div className="mt-1 flex items-center">
          <Package size={16} className="text-[#FFDB58] mr-1" />
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0
              ? `In stock (${product.stock} available)`
              : 'Out of stock'}
          </span>
        </div>
      </div>}

      {/* Purchase section */}
      {auth.session && <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <span className="text-sm text-[#793205] mr-3">Quantity:</span>
          <div className="flex items-center border border-[#d9d9d9] rounded">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="px-3 py-1 text-lg border-r border-[#d9d9d9] disabled:text-gray-300"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={incrementQuantity}
              disabled={quantity >= product.stock}
              className="px-3 py-1 text-lg border-l border-[#d9d9d9] disabled:text-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={()=>addToCart(product, quantity ? quantity  : 1)} className="flex-1 bg-[#FFEA00] hover:bg-[#793205] text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center">
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
          <button className="flex-1 bg-[#FFDB58] hover:bg-[#FFEA00] text-white py-3 px-6 rounded-md transition-colors">
            Buy Now
          </button>
        </div>
      </div>}

      {
        !auth.session && <div className="bg-[#f7f7f7] p-4 rounded-md space-y-3">
          <h2 className='text-lg font-bold'>Puedes conseguirlo en:</h2>
          <div className="flex items-start">
            <div>
              <img src={`/ml.png`} width={150} />
            </div>
          </div>
        </div>
      }
    </div >
  );
};

export default ProductInfo;