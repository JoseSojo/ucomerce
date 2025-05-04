'use client';

import React from 'react';
import { Edit } from 'lucide-react';
import { Category } from '@/domain/types';
import ButtonUI from '@/components/ui/button';

interface CategoryDetailsProps {
  category: Category;
  onEdit: () => void;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category, onEdit }) => {
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
          <p className="text-sm text-gray-500">
            Category ID: {category.id}
          </p>
        </div>
        <ButtonUI 
          size="sm"
          variant="primary"
          onClick={onEdit}
          icon={<Edit size={16} />}
        >
          Edit
        </ButtonUI>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="flex flex-col items-center">
          
         
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;