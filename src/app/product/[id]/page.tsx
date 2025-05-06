"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/app/home/Header';
import ProductImageGallery from '@/components/product/ficha/ProductImage';
import ProductInfo from '@/components/product/ficha/ProductInfo';
import ProductTabs from '@/components/product/ficha/ProductTable';
import RelatedProducts from '@/components/product/ficha/RelateProducts';
import { mockProduct, relatedProducts } from '@/domain/products';

export default function PostPage({ }: { params: { id: string } }) {
    // const id = params.id;

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className='bg-gradient-to-l bg-red-400 from-[#72AFC1] to-[#16446A] h-[70px]'>
                <Header />
            </div>

            <main className="max-w-7xl mx-auto py-6 px-4">
                {/* Product section */}
                <div className="bg-white rounded-lg shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product images */}
                    <ProductImageGallery
                        images={mockProduct.images || [mockProduct.imageUrl]}
                        productName={mockProduct.name}
                    />

                    {/* Product info */}
                    <ProductInfo product={mockProduct} />
                </div>

                {/* Tabs section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                    <ProductTabs product={mockProduct} />
                </div>

                {/* Related products */}
                <RelatedProducts products={relatedProducts} />
            </main>

        </div>
    );
};
