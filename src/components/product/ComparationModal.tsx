import React from 'react';
import { X, Minus, Plus, Delete } from 'lucide-react';
import { useEcomerce } from '@/domain/context/EcomerceContext';

interface ComparisonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ComparisonModal = ({ isOpen, onClose }: ComparisonModalProps) => {
    if (!isOpen) return null;

    const { compare, removeElementCompare } = useEcomerce();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    const compareSpecification = (spec: string | undefined) => {
        if (!spec) return <Minus className="text-gray-400" size={18} />;
        return <div className="text-sm text-[#0A082D]">{spec}</div>;
    };

    // Get all unique specification keys from all products
    const allSpecifications = compare.reduce((specs, product) => {
        if (product.specifications) {
            Object.keys(product.specifications).forEach(key => {
                if (!specs.includes(key)) specs.push(key);
            });
        }
        return specs;
    }, [] as string[]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-[#0A082D]">Product Comparison</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-[#0A082D] transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 py-2">
                        {/* Products */}
                        {compare.map((product, i) => (
                            <div key={product.id} className="p-2 rounded-md shadow">
                                <div className="rounded w-full mb-3 flex items-center justify-center">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h3 className="font-medium text-sm text-[#0A082D] line-clamp-2">{product.name}</h3>
                                    <button 
                                        onClick={() => removeElementCompare(i)} 
                                        className='px-3 py-1 rounded font-bold text-white bg-red-600 hover:bg-red-700 duration-200'
                                    >
                                        <Delete className='w-4' />
                                    </button>
                                </div>
                                <div className="font-bold flex justify-between text-sm">
                                    <span>Precio</span>
                                    <span className='text-amber-500'>{formatPrice(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Specifications comparison */}
                    {allSpecifications.length > 0 && (
                        <div className="px-6 pb-6">
                            <h4 className="font-medium text-lg text-[#0A082D] mb-4">Specifications</h4>
                            <div className="space-y-2">
                                {allSpecifications.map((key) => (
                                    <div key={key} className={`grid grid-cols-${compare.length + 1} gap-4 py-2 border-b border-gray-200`}>
                                        <div className="text-sm font-medium text-gray-500">{key}</div>
                                        {compare.map((product) => (
                                            <div key={`${product.id}-${key}`}>
                                                {compareSpecification(product.specifications?.[key])}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#72AFC1] text-white rounded hover:bg-[#16446A] transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComparisonModal;