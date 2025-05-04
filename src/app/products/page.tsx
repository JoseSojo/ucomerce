"use client";

import Footer from "@/components/app/home/Footer";
import Header from "@/components/app/home/Header";
import Hero from "@/components/app/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import { generateMockProducts } from '@/domain/data';
import { Filter, Search } from "lucide-react";
import { useState } from "react";


export default function ProductsPage() {
    const products = generateMockProducts(100);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', ...new Set(products.map(product => product.category))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <Header />
            <Hero title="Aquí encontrarás las herramientas que busques" />

            <div className="min-h-screen">
                <div className="bg-primary-medium py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">Herramientas y Equipos Profesionales</h1>
                            <p className="text-xl text-primary-light mb-8">
                                Encuentra las mejores herramientas para tu proyecto
                            </p>

                            <div className="relative max-w-xl mx-auto">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="border border-gray-300 w-full px-4 py-3 rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <Search size={20} className="text-primary-medium" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        <div className="flex items-center">
                            <Filter size={20} className="text-primary-medium mr-2" />
                            <span className="text-primary-dark font-medium">Filtrar por:</span>
                        </div>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-[#16446A] text-white'
                                        : 'bg-[#72AFC1] text-white hover:bg-[#16446A]'
                                    }`}
                            >
                                {category === 'all' ? 'Todas' : category}
                            </button>
                        ))}
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-medium text-primary-dark mb-2">No se encontraron productos</h3>
                            <p className="text-gray-600">Intenta ajustar tu búsqueda o filtros</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}
