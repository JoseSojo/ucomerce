"use client";

import React, { useState } from 'react';
import Header from '@/components/app/home/Header';
import Hero from '@/components/app/home/Hero';
import { blogPosts } from '@/domain/data';
import BlogCard from '@/components/blog/card';
import { BookOpen } from 'lucide-react';
import Footer from '@/components/app/home/Footer';

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === 'all' || post.category.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

  return (
    <div className="">
      <Header />
      <Hero title='Aprende a utilizar nuestras herramientas más modernas' />

      <div className="min-h-screen">
        <div className="bg-primary-medium py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to GrupoKasama Blog</h1>
              <p className="text-xl text-primary-light mb-8">
                Exploring the latest in web development, design, and technology
              </p>

              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-400 px-4 py-3 rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <BookOpen size={20} className="text-primary-medium" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="text-primary-dark font-medium">Filter by:</span>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors text-white ${filter === category
                    ? 'bg-[#FFEA00]'
                    : 'bg-[#FFDB58] text-primary-medium hover:bg-[#FFEA00]'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-primary-dark mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default ShopPage;