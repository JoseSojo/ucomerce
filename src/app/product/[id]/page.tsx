"use client";

import React, { useState } from 'react';
import Header from '@/components/app/home/Header';
import ProductImageGallery from '@/components/product/ficha/ProductImage';
import ProductInfo from '@/components/product/ficha/ProductInfo';
import ProductTabs from '@/components/product/ficha/ProductTable';
import RelatedProducts from '@/components/product/ficha/RelateProducts';
import { useEcomerce } from '@/domain/context/EcomerceContext';

export default function PostPage({ }: { params: { id: string } }) {
    // const id = params.id;
    const [quantity, setQuantity] = useState(0);

    const { products } = useEcomerce();
    const element = products[0];
    if(!element) return <></>;

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className='bg-gradient-to-l bg-red-400 from-[#FFDB58] to-[#FFEA00] h-[70px]'>
                <Header />
            </div>

            <main className="max-w-7xl mx-auto py-6 px-4">
                {/* Product section */}
                <div className="bg-white rounded-lg shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product images */}
                    <ProductImageGallery
                        images={element.images || [element.imageUrl]}
                        productName={element.name}
                    />

                    {/* Product info */}
                    <ProductInfo quantity={quantity} setQuantity={setQuantity} product={element} />
                </div>

                {/* Tabs section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                    <ProductTabs product={element} />
                </div>

                {/* Related products */}
                <RelatedProducts products={[products[0],products[1],products[2]]} />
            </main>

        </div>
    );
};
