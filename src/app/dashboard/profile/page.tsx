'use client';

import React, { useState } from 'react';
import { Mail, Phone, Globe, Users, Calendar, Briefcase } from 'lucide-react';
import { CompanyProfile } from '@/domain/profile';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(
    () => import('@/components/admin/widgets/profile/MapProfile'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>
    }
);

export default function ProfilePage() {

    const profile: CompanyProfile = {
        id: '1',
        name: 'GrupoKasama',
        logo: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
        coverPhoto: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
        about: 'GrupoKasama es un líder en la distribución y venta de herramientas profesionales y equipamiento industrial. Con años de experiencia en el mercado, nos especializamos en proporcionar soluciones de alta calidad para profesionales y empresas, ofreciendo una amplia gama de herramientas manuales, eléctricas y equipamiento especializado para diversos sectores industriales.',
        industry: 'Venta de Herramientas Industriales',
        founded: '2010',
        size: '50-100 empleados',
        website: 'https://grupokasama.com',
        contact: {
            email: 'contacto@grupokasama.com',
            phone: '+52 (555) 123-4567',
            socialMedia: {
                linkedin: 'https://linkedin.com/company/grupokasama',
                facebook: 'https://facebook.com/grupokasama'
            }
        },
        location: {
            address: 'Av. Industrial 789',
            city: 'Ciudad de México',
            state: 'CDMX',
            country: 'México',
            postalCode: '03800',
            coordinates: {
                latitude: 19.4326,
                longitude: -99.1332
            }
        },
        gallery: [
            'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
            'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg',
            'https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg',
            'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg'
        ]
    };

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Cover Photo */}
            <div className="relative h-64 md:h-80">
                <img
                width={25}
                height={25}
                    src={profile.coverPhoto}
                    alt="Company Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="relative -mt-24 sm:-mt-32 mb-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:items-center">
                                <img
                                width={25}
                                height={25}
                                    src={profile.logo}
                                    alt={profile.name}
                                    className="h-24 w-24 rounded-lg object-cover shadow-lg"
                                />
                                <div className="mt-4 sm:mt-0 sm:ml-6">
                                    <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-0">
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Column - Contact & Location */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Contact Information */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600">{profile.contact.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600">{profile.contact.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                                    {/* <a href={profile.website} className="text-blue-600 hover:underline">
                                        {profile.website}
                                    </a> */}
                                </div>
                            </div>
                        </div>

                        {/* Company Details */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Details</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600">{profile.industry}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600">Founded in {profile.founded}</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600">{profile.size}</span>
                                </div>
                            </div>
                        </div>

                        {/* Company Details */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Company</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 whitespace-pre-line">{profile.about}</p>

                            </div>
                        </div>
                    </div>

                    {/* Right Column - About & Gallery */}
                    <div className="lg:col-span-2 space-y-6">

                        <MapComponent />

                    </div>
                </div>
            </div>
        </div>
    );
};

