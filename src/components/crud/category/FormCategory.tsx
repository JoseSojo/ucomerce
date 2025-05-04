'use client';

import ButtonUI from '@/components/ui/button';
import { Category, CategoryDataDTO } from '@/domain/types';
import React, { useState, useEffect } from 'react';

interface CategoryFormProps {
  initialData?: Category;
  onSubmit: (data: CategoryDataDTO) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isSubmitting
}) => {
  const [formData, setFormData] = useState<CategoryDataDTO>({
    name: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof CategoryDataDTO, string>>>({});
   

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' 
        ? parseFloat(value) || 0
        : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof CategoryDataDTO]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CategoryDataDTO, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Category name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Category Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      
      
      <div className="flex justify-end gap-3 pt-4">
        <ButtonUI 
          type="button" 
          variant="secondary" 
          onClick={onCancel}
        >
          Cancel
        </ButtonUI>
        <ButtonUI 
          type="submit" 
          variant="primary"
          isLoading={isSubmitting}
        >
          {initialData ? 'Update Category' : 'Create Category'}
        </ButtonUI>
      </div>
    </form>
  );
};

export default CategoryForm;