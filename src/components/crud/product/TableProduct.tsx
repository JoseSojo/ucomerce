'use client';

import React, { useState } from 'react';
import { Edit, Trash2, Eye, Search, ArrowUpDown } from 'lucide-react';
import { ProductCrud } from '@/domain/types';
import ButtonUI from '@/components/ui/button';
import Image from 'next/image';

interface ProductTableProps {
  products: ProductCrud[];
  onView: (product: ProductCrud) => void;
  onEdit: (product: ProductCrud) => void;
  onDelete: (product: ProductCrud) => void;
  filters: { search: string, category: string };
  onFilterChange: (filters: { search: string, category: string }) => void;
  isLoading: boolean;
}

type SortField = 'name' | 'price' | 'category' | 'stock' | 'updatedAt';
type SortDirection = 'asc' | 'desc';

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onView,
  onEdit,
  onDelete,
  filters,
  onFilterChange,
  isLoading
}) => {
  const [sortField, setSortField] = useState<SortField>('updatedAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
      case 'stock':
        comparison = a.stock - b.stock;
        break;
      case 'updatedAt':
        comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        break;
      default:
        comparison = 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      category: e.target.value
    });
  };

  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="overflow-hidden bg-white shadow-md rounded-lg">
      <div className="p-4 border-b flex flex-col md:flex-row gap-4 items-end">
        <div className="w-full md:w-64">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Products
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 border"
              placeholder="Search by name..."
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="w-full md:w-40">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category-filter"
            className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 border"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  className="flex items-center gap-1 focus:outline-none group"
                  onClick={() => handleSort('name')}
                >
                  Product
                  <ArrowUpDown
                    size={14}
                    className={`${sortField === 'name' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  />
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  className="flex items-center gap-1 focus:outline-none group"
                  onClick={() => handleSort('category')}
                >
                  Category
                  <ArrowUpDown
                    size={14}
                    className={`${sortField === 'category' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  />
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  className="flex items-center gap-1 focus:outline-none group"
                  onClick={() => handleSort('price')}
                >
                  Price
                  <ArrowUpDown
                    size={14}
                    className={`${sortField === 'price' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  />
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  className="flex items-center gap-1 focus:outline-none group"
                  onClick={() => handleSort('stock')}
                >
                  Stock
                  <ArrowUpDown
                    size={14}
                    className={`${sortField === 'stock' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  />
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  className="flex items-center gap-1 focus:outline-none group"
                  onClick={() => handleSort('updatedAt')}
                >
                  Last Updated
                  <ArrowUpDown
                    size={14}
                    className={`${sortField === 'updatedAt' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  />
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center text-gray-500">
                  <div className="flex justify-center">
                    <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <p className="mt-2">Loading products...</p>
                </td>
              </tr>
            ) : sortedProducts.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  <p>No products found.</p>
                </td>
              </tr>
            ) : (
              sortedProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          width={25}
                          height={25}
                          className="h-10 w-10 rounded-full object-cover"
                          src={product.imageUrl}
                          alt={product.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=No+Image';
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex text-xs px-2 py-0.5 rounded-full ${product.stock > 20
                          ? 'bg-green-100 text-green-800'
                          : product.stock > 0
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                    >
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(product.updatedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <ButtonUI
                        size="sm"
                        variant="ghost"
                        onClick={() => onView(product)}
                        icon={<Eye size={16} />}
                      >
                        View
                      </ButtonUI>
                      <ButtonUI
                        size="sm"
                        variant="ghost"
                        onClick={() => onEdit(product)}
                        icon={<Edit size={16} />}
                      >
                        Edit
                      </ButtonUI>
                      <ButtonUI
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() => onDelete(product)}
                        icon={<Trash2 size={16} />}
                      >
                        Delete
                      </ButtonUI>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;