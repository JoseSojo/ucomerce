import { useAuth } from '@/domain/context/AuthContext';
import { ProductData2 } from '@/domain/types';
import { useState } from 'react';

interface ProductTabsProps {
  product: ProductData2;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const auth = useAuth();
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', name: 'Description' },
    { id: 'specifications', name: 'Specifications' },
    { id: 'reviews', name: 'Reviews' },
  ];

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="border-b border-[#d9d9d9]">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab(`description`)}
            className={`py-3 px-1 font-medium text-sm border-b-2 ${activeTab === `description`
              ? 'border-[#FFEA00] text-[#FFEA00]'
              : 'border-transparent text-gray-500 hover:text-[#793205]'
              } transition-colors`}
          >
            Description
          </button>
          {
            auth.session && <>
              <button
                onClick={() => setActiveTab(`specifications`)}
                className={`py-3 px-1 font-medium text-sm border-b-2 ${activeTab === `specifications`
                  ? 'border-[#FFEA00] text-[#FFEA00]'
                  : 'border-transparent text-gray-500 hover:text-[#793205]'
                  } transition-colors`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab(`reviews`)}
                className={`py-3 px-1 font-medium text-sm border-b-2 ${activeTab === `reviews`
                  ? 'border-[#FFEA00] text-[#FFEA00]'
                  : 'border-transparent text-gray-500 hover:text-[#793205]'
                  } transition-colors`}
              >
                Reviews
                {product.reviews && <span className="ml-1">({product.reviews.length})</span>}
              </button>
            </>
          }
        </div>
      </div>

      {/* Tab content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div className="text-[#793205] space-y-4">
            <p>{product.description}</p>
          </div>
        )}

        {auth.session && <>{activeTab === 'specifications' && product.specifications && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex">
                <div className="w-1/3 text-sm font-medium text-gray-500">{key}</div>
                <div className="w-2/3 text-sm text-[#793205]">{value}</div>
              </div>
            ))}
          </div>
        )}</>}

        {auth.session && <>{activeTab === 'reviews' && product.reviews && (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-[#e9e9e9] pb-4 last:border-0">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < review.rating ? "#FFD700" : "none"}
                        stroke="#FFD700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-medium text-sm">{review.userName}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-[#793205]">{review.comment}</p>
              </div>
            ))}
          </div>
        )}</>}
      </div>
    </div>
  );
};

export default ProductTabs;