"use client";

import React from 'react';
import { LogOut, Package, Heart, CreditCard, User as UserIcon, Settings, ShoppingBag } from 'lucide-react';
import { redirect } from 'next/navigation';

const ProfilePage: React.FC = () => {
  
  // Redirect if not logged in
//   React.useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);
  
//   if (!user) {
//     return null; // or a loading spinner
//   }
  
  const handleLogout = () => {
    // logout();
    redirect('/');
  };
  
  const accountSections = [
    {
      icon: <UserIcon size={20} className="text-indigo-600" />,
      title: 'Personal Information',
      description: 'Manage your account details',
    },
    {
      icon: <Package size={20} className="text-indigo-600" />,
      title: 'Orders',
      description: 'Check your order history',
      count: 3,
    },
    {
      icon: <Heart size={20} className="text-indigo-600" />,
      title: 'Wishlist',
      description: 'Manage your saved items',
      count: 5,
    },
    {
      icon: <CreditCard size={20} className="text-indigo-600" />,
      title: 'Payment Methods',
      description: 'Manage your payment options',
    },
    {
      icon: <Settings size={20} className="text-indigo-600" />,
      title: 'Preferences',
      description: 'Customize your shopping experience',
    },
  ];

  return (
    <div className="pt-16 md:pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Account</h1>
                <p className="text-indigo-100">Welcome back, John Doe</p>
              </div>
              <button
                onClick={handleLogout}
                className="mt-4 md:mt-0 flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <LogOut size={18} className="mr-2" /> Logout
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Account overview */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center text-indigo-800 mb-1">
                    <ShoppingBag size={18} className="mr-2" />
                    <span className="font-medium">3 Orders</span>
                  </div>
                  <p className="text-sm text-gray-600">You have 1 order in progress</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center text-purple-800 mb-1">
                    <Heart size={18} className="mr-2" />
                    <span className="font-medium">5 Wishlist Items</span>
                  </div>
                  <p className="text-sm text-gray-600">2 items are back in stock</p>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center text-emerald-800 mb-1">
                    <CreditCard size={18} className="mr-2" />
                    <span className="font-medium">VIP Status</span>
                  </div>
                  <p className="text-sm text-gray-600">You ve earned free shipping</p>
                </div>
              </div>
            </div>
            
            {/* Account sections */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Manage Account</h2>
              <div className="divide-y">
                {accountSections.map((section, index) => (
                  <div 
                    key={index}
                    className="py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {section.icon}
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-800">{section.title}</h3>
                          <p className="text-sm text-gray-500">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        {section.count && (
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                            {section.count}
                          </span>
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;