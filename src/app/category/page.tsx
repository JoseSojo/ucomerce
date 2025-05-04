"use client";

import Footer from "@/components/app/home/Footer";
import Header from "@/components/app/home/Header";
import Hero from "@/components/app/home/Hero";
import { categories } from "@/domain/data"
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Categorys() {

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    return (
        <div>
            <Header />
            <Hero title="Explora entre diversas categorías" />

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-primary-dark mb-8">Categorías de Herramientas y Maquinaria</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${selectedCategory === category.id ? 'ring-2 ring-primary-medium' : ''
                                    }`}
                            >
                                <div
                                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => setSelectedCategory(
                                        selectedCategory === category.id ? null : category.id
                                    )}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-semibold text-primary-dark">
                                            {category.name}
                                        </h2>
                                        <ChevronRight
                                            size={20}
                                            className={`text-primary-medium transition-transform duration-300 ${selectedCategory === category.id ? 'rotate-90' : ''
                                                }`}
                                        />
                                    </div>
                                    <p className="text-gray-600">
                                        {category.subcategories.length} subcategorías
                                    </p>
                                </div>

                                {selectedCategory === category.id && (
                                    <div className="bg-gray-50 p-6 animate-fade-in border-t border-gray-100">
                                        <div className="space-y-3">
                                            {category.subcategories.map((subcategory) => (
                                                <div
                                                    key={subcategory.id}
                                                    className="block bg-white rounded-lg p-4 hover:shadow-md transition-all hover:translate-x-1"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-medium text-primary-dark">
                                                            {subcategory.name}
                                                        </h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
