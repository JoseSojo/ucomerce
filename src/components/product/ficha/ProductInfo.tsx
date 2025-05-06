import { useState } from 'react';
import { ShoppingCart, Package, Heart, Share2, Shield, TruckIcon, StarIcon } from 'lucide-react';
import { ProductData2 } from '@/domain/types';
import { useAuth } from '@/domain/context/AuthContext';

interface ProductInfoProps {
  product: ProductData2;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const auth = useAuth();
  const [quantity, setQuantity] = useState(1);
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
        <span className="ml-2 text-sm text-[#16446A]">{rating.toFixed(1)}</span>
        <span className="ml-2 text-sm text-gray-500">
          ({product.reviews?.length || 0} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Breadcrumb */}
      <div className="flex text-sm text-[#16446A]/70">
        <span>Electronics</span>
        <span className="mx-2">&gt;</span>
        <span>Smartphones</span>
        <span className="mx-2">&gt;</span>
        <span className="font-medium">{product.name}</span>
      </div>

      {/* Product title and rating */}
      <div>
        <h1 className="text-2xl font-bold text-[#0A082D] mb-2">{product.name}</h1>
        {product.rating && renderStarRating(product.rating)}
      </div>

      {/* Price and stock */}
      {auth.session && <div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-[#16446A]">
            {formatPrice(product.price)}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            + Free shipping
          </span>
        </div>

        <div className="mt-1 flex items-center">
          <Package size={16} className="text-[#72AFC1] mr-1" />
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
          <span className="text-sm text-[#0A082D] mr-3">Quantity:</span>
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
          <button className="flex-1 bg-[#16446A] hover:bg-[#0A082D] text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center">
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
          <button className="flex-1 bg-[#72AFC1] hover:bg-[#16446A] text-white py-3 px-6 rounded-md transition-colors">
            Buy Now
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex items-center text-sm text-[#16446A] hover:text-[#0A082D]"
          >
            <Heart
              size={18}
              className="mr-1"
              fill={isFavorite ? "#16446A" : "none"}
            />
            {isFavorite ? 'Saved' : 'Save'}
          </button>
          <button className="flex items-center text-sm text-[#16446A] hover:text-[#0A082D]">
            <Share2 size={18} className="mr-1" />
            Share
          </button>
        </div>
      </div>}

      {/* Shipping and warranty */}
      {auth.session && <div className="bg-[#f7f7f7] p-4 rounded-md space-y-3">
        <div className="flex items-start">
          <TruckIcon size={20} className="text-[#16446A] mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-[#0A082D]">Free shipping nationwide</p>
            <p className="text-xs text-gray-500">
              Get it by {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Shield size={20} className="text-[#16446A] mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-[#0A082D]">12 months official warranty</p>
            <p className="text-xs text-gray-500">Full coverage for manufacturing defects</p>
          </div>
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