"use client";

import React, { useState } from 'react';
import { LogOut, Package, Heart, CreditCard, User as UserIcon, Settings, ShoppingBag, Mail, Phone, MapPin, User, CheckCircle, Clock, XCircle, Calendar, DollarSign, Building2, FileText, Star, StarOff, StarHalf } from 'lucide-react';
import { redirect } from 'next/navigation';
import Header from '@/components/app/home/Header';
import { companyProfile } from '@/domain/data';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyName: companyProfile.companyName,
    ruc: companyProfile.ruc,
    email: companyProfile.email,
    phone: companyProfile.phone,
    address: companyProfile.address,
    legalRepresentative: companyProfile.legalRepresentative,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'pending':
        return <Clock size={20} className="text-yellow-500" />;
      case 'cancelled':
        return <XCircle size={20} className="text-red-500" />;
      default:
        return null;
    }
  };

  const creditPercentage = (companyProfile.creditInfo.used / companyProfile.creditInfo.limit) * 100;

  return (
    <>
      <div className='bg-gradient-to-l bg-red-400 from-[#72AFC1] to-[#16446A] h-[70px]'>
        <Header />
      </div>

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Company Profile Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-primary-dark flex-1">Perfil Empresarial</h1>

                <div className='flex justify-between items-center flex-col flex-1 mb-6'>
                  <h2 className="text-md text-gray-600 font-bold text-primary-dark">Calificación</h2>
                  <div className='flex'>
                    <Star className='text-yellow-400' />
                    <Star className='text-yellow-400' />
                    <Star className='text-yellow-400' />
                    <StarHalf className='text-yellow-400' />
                    <StarOff className='text-yellow-900' />
                  </div>
                </div>

                
              </div>


              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Razón Social</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">RUC</label>
                      <input
                        type="text"
                        value={formData.ruc}
                        onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-primary-dark mb-3">Dirección</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Calle</label>
                        <input
                          type="text"
                          value={formData.address.street}
                          onChange={(e) => setFormData({
                            ...formData,
                            address: { ...formData.address, street: e.target.value }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                        <input
                          type="text"
                          value={formData.address.city}
                          onChange={(e) => setFormData({
                            ...formData,
                            address: { ...formData.address, city: e.target.value }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-primary-dark mb-3">Representante Legal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                          type="text"
                          value={formData.legalRepresentative.name}
                          onChange={(e) => setFormData({
                            ...formData,
                            legalRepresentative: { ...formData.legalRepresentative, name: e.target.value }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                        <input
                          type="text"
                          value={formData.legalRepresentative.position}
                          onChange={(e) => setFormData({
                            ...formData,
                            legalRepresentative: { ...formData.legalRepresentative, position: e.target.value }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-medium hover:bg-primary-dark text-white py-2 rounded-lg transition-colors"
                  >
                    Guardar Cambios
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Building2 size={20} className="text-primary-medium" />
                      <div>
                        <p className="text-sm text-gray-500">Razón Social</p>
                        <p className="font-medium text-primary-dark">{companyProfile.companyName}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText size={20} className="text-primary-medium" />
                      <div>
                        <p className="text-sm text-gray-500">RUC</p>
                        <p className="font-medium text-primary-dark">{companyProfile.ruc}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-primary-medium" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-primary-dark">{companyProfile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={20} className="text-primary-medium" />
                      <div>
                        <p className="text-sm text-gray-500">Teléfono</p>
                        <p className="font-medium text-primary-dark">{companyProfile.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-primary-dark mb-4 flex items-center">
                      <MapPin size={20} className="mr-2 text-primary-medium" />
                      Dirección
                    </h3>
                    <p className="text-primary-dark">
                      {companyProfile.address.street}<br />
                      {companyProfile.address.city}, {companyProfile.address.state}<br />
                      {companyProfile.address.country}, {companyProfile.address.postalCode}
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-primary-dark mb-4 flex items-center">
                      <User size={20} className="mr-2 text-primary-medium" />
                      Representante Legal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nombre</p>
                        <p className="font-medium text-primary-dark">{companyProfile.legalRepresentative.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Cargo</p>
                        <p className="font-medium text-primary-dark">{companyProfile.legalRepresentative.position}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-primary-dark">{companyProfile.legalRepresentative.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Teléfono</p>
                        <p className="font-medium text-primary-dark">{companyProfile.legalRepresentative.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Credit Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
                <CreditCard size={24} className="mr-2 text-primary-medium" />
                Información de Crédito Empresarial
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Línea de Crédito</span>
                    <DollarSign size={20} className="text-primary-medium" />
                  </div>
                  <p className="text-2xl font-bold text-primary-dark">
                    ${companyProfile.creditInfo.limit.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Crédito Utilizado</span>
                    <DollarSign size={20} className="text-red-500" />
                  </div>
                  <p className="text-2xl font-bold text-red-500">
                    ${companyProfile.creditInfo.used.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Crédito Disponible</span>
                    <DollarSign size={20} className="text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-500">
                    ${companyProfile.creditInfo.available.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-medium h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${creditPercentage}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-600">Última Evaluación</p>
                    <p className="font-medium text-primary-dark">{companyProfile.creditInfo.lastEvaluation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Score Crediticio</p>
                    <p className="font-medium text-primary-dark">{companyProfile.creditInfo.creditScore}/100</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
                <Package size={24} className="mr-2 text-primary-medium" />
                Historial de Compras
              </h2>

              <div className="space-y-6">
                {companyProfile.purchases.map((purchase) => (
                  <div key={purchase.id} className="border rounded-lg p-4">
                    <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                      <div className="flex items-center space-x-4">
                        <Calendar size={20} className="text-primary-medium" />
                        <span className="font-medium text-primary-dark">{purchase.date}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(purchase.status)}
                          <span className="capitalize text-sm font-medium">{purchase.status}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Factura:</span> {purchase.invoiceNumber}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {purchase.products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center text-sm">
                          <div>
                            <p className="font-medium text-primary-dark">{product.name}</p>
                            <p className="text-gray-500">
                              Cantidad: {product.quantity} x ${product.price.toFixed(2)}
                            </p>
                          </div>
                          <p className="font-medium text-primary-dark">${product.total.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Método de Pago</span>
                        <span className="font-medium text-primary-dark">{purchase.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Total</span>
                        <span className="text-lg font-bold text-primary-dark">
                          ${purchase.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProfilePage;