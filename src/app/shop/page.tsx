"use client";

import React, { useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Product } from '@/domain/types';
import { categories, products } from '@/domain/data';
import SearchBar from '@/components/ui/shop/SearchBar';
import CategoryFilter from '@/components/app/shop/CategoryFilter';
import ProductCard from '@/components/ui/shop/CardProduct';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    let results = products;
    
    // Apply category filter
    if (selectedCategory) {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    // Apply subcategory filter
    if (selectedSubcategory) {
      results = results.filter(product => product.subcategory === selectedSubcategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(results);
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="pt-16 md:pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
          <p className="text-gray-600">
            Discover our collection of high-quality products
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={toggleFilters}
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={setSelectedCategory}
              onSubcategoryChange={setSelectedSubcategory}
            />
          </div>
          
          {/* Products Grid */}
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    setSearchQuery('');
                  }}
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} products
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;