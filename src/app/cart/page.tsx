"use client";

import React from 'react';
import Header from '@/components/app/home/Header';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useEcomerce } from '@/domain/context/EcomerceContext';
import UpdateQuantity from '@/components/product/UpdateQuantity';

const CartPage: React.FC = () => {
  const { cart, modifyQuantityToCart, removeToCart } = useEcomerce();

  const calculateSummary = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * 0.16; // 16% IVA
    return {
      subtotal,
      tax,
      total: subtotal + tax,
      itemCount: cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  };

  const summary = calculateSummary();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className="">
      <div className='bg-gradient-to-l bg-red-400 from-[#FFDB58] to-[#FFEA00] h-[70px]'>
        <Header />
      </div>

      <div className="min-h-screen bg-[#f7f7f7] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <ShoppingCart className="h-8 w-8 text-[#FFEA00] mr-3" />
            <h1 className="text-3xl font-bold text-[#793205]">Carrito de Compras</h1>
          </div>

          {cart.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <ShoppingCart className="h-16 w-16 text-[#FFDB58] mx-auto mb-4" />
              <p className="text-[#FFEA00] text-lg">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item,i) => (
                  <div key={item.product.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <img
                      width={25}
                      height={25}
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="ml-6 flex-1">
                        <h3 className="text-lg font-semibold text-[#793205]">{item.product.name}</h3>
                        <p className="text-[#FFEA00] mt-1">{formatPrice(item.product.price)}</p>

                        <div className="flex items-center justify-between mt-4">
                          <UpdateQuantity product={item} i={i} />

                          <div className="flex items-center space-x-4">
                            <p className="text-[#FFEA00] font-semibold">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                            <button
                              onClick={() => removeToCart(i)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                  <h2 className="text-xl font-semibold text-[#793205] mb-4">Resumen de Compra</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[#FFEA00]">
                      <span>Subtotal ({summary.itemCount} artículos)</span>
                      <span>{formatPrice(summary.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#FFEA00]">
                      <span>IVA (16%)</span>
                      <span>{formatPrice(summary.tax)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-lg text-[#793205]">
                        <span>Total</span>
                        <span>{formatPrice(summary.total)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-[#FFEA00] text-white py-3 px-4 rounded-md hover:bg-[#793205] transition-colors">
                    Proceder al Pago
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;