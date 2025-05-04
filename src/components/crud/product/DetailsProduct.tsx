'use client';

import React from 'react';
import { Edit } from 'lucide-react';
import { ProductCrud } from '@/domain/types';
import ButtonUI from '@/components/ui/button';
import Image from 'next/image';

interface ProductDetailsProps {
  product: ProductCrud;
  onEdit: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onEdit }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-sm text-gray-500">
            Product ID: {product.id}
          </p>
        </div>
        <ButtonUI
          size="sm"
          variant="primary"
          onClick={onEdit}
          icon={<Edit size={16} />}
        >
          Edit
        </ButtonUI>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="flex flex-col items-center">
          <img
            width={25}
            height={25}
            src={product.imageUrl}
            alt={product.name}
            className="w-full aspect-square object-contain border rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=No+Image';
            }}
          />

          <div className="mt-4 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-lg font-semibold text-gray-900">{formatPrice(product.price)}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Stock</p>
                <p className="text-lg font-semibold text-gray-900">{product.stock}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Details</h3>
            <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {product.category}
                  </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <span className={`inline-flex text-xs px-2 py-1 rounded-full ${product.stock > 20
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 0
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {product.stock > 20
                      ? 'In Stock'
                      : product.stock > 0
                        ? 'Low Stock'
                        : 'Out of Stock'}
                  </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Created At</dt>
                <dd className="mt-1 text-sm text-gray-900">{formatDate(product.createdAt)}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Updated At</dt>
                <dd className="mt-1 text-sm text-gray-900">{formatDate(product.updatedAt)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;