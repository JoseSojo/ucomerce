"use client";

import Footer from "@/components/app/home/Footer";
import Header from "@/components/app/home/Header";
import FilterSection from "@/components/product/FilterSection";
import ProductCard from "@/components/product/ProductCard";
import { useEcomerce } from "@/domain/context/EcomerceContext";

export default function ProductsPage() {
    const { products } = useEcomerce();

    return (
        <div>
            <div className='bg-gradient-to-l bg-red-400 from-[#FFDB58] to-[#FFEA00] h-[70px]'>
                <Header />
            </div>

            <div className="min-h-screen">
                
                <FilterSection />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    

                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map(product => (
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
