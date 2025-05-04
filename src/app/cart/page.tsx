"use client";

import React, { useState } from 'react';
import Header from '@/components/app/home/Header';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { CartItem } from '@/domain/cart';
import Image from 'next/image';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Taladro Profesional Industrial',
      price: 299.99,
      quantity: 1,
      imageUrl: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      stock: 10
    },
    {
      id: '2',
      name: 'Set de Llaves Inglesas',
      price: 149.99,
      quantity: 2,
      imageUrl: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
      stock: 15
    }
  ]);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.min(Math.max(1, newQuantity), item.stock) }
          : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const calculateSummary = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.16; // 16% IVA
    return {
      subtotal,
      tax,
      total: subtotal + tax,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
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
      <div className='bg-gradient-to-l bg-red-400 from-[#72AFC1] to-[#16446A] h-[70px]'>
        <Header />
      </div>

      <div className="min-h-screen bg-[#f7f7f7] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <ShoppingCart className="h-8 w-8 text-[#16446A] mr-3" />
            <h1 className="text-3xl font-bold text-[#0A082D]">Carrito de Compras</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <ShoppingCart className="h-16 w-16 text-[#72AFC1] mx-auto mb-4" />
              <p className="text-[#16446A] text-lg">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <img
                      width={25}
                      height={25}
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="ml-6 flex-1">
                        <h3 className="text-lg font-semibold text-[#0A082D]">{item.name}</h3>
                        <p className="text-[#16446A] mt-1">{formatPrice(item.price)}</p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-md hover:bg-[#72AFC1] hover:bg-opacity-20 text-[#16446A]"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={18} />
                            </button>
                            <span className="w-12 text-center text-[#0A082D]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-md hover:bg-[#72AFC1] hover:bg-opacity-20 text-[#16446A]"
                              disabled={item.quantity >= item.stock}
                            >
                              <Plus size={18} />
                            </button>
                          </div>

                          <div className="flex items-center space-x-4">
                            <p className="text-[#16446A] font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
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
                  <h2 className="text-xl font-semibold text-[#0A082D] mb-4">Resumen de Compra</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[#16446A]">
                      <span>Subtotal ({summary.itemCount} artículos)</span>
                      <span>{formatPrice(summary.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#16446A]">
                      <span>IVA (16%)</span>
                      <span>{formatPrice(summary.tax)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-lg text-[#0A082D]">
                        <span>Total</span>
                        <span>{formatPrice(summary.total)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-[#16446A] text-white py-3 px-4 rounded-md hover:bg-[#0A082D] transition-colors">
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