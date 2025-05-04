'use client';

import ButtonUI from '@/components/ui/button';
import { ActiveUser } from '@/domain/types';
import React, { useState, useEffect } from 'react';

interface UserFormProps {
  initialData?: ActiveUser;
  onSubmit: (data: ActiveUser) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isSubmitting
}) => {
  const [formData, setFormData] = useState<ActiveUser>({
    name: '',
    email: ``,
    id: ``,
    isActive: true,
    lastActive: new Date(),
    role: `User`
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ActiveUser, string>>>({});
   
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        email: initialData.email,
        id: initialData.id,
        isActive: initialData.isActive,
        lastActive: initialData.lastActive,
        role: initialData.role,
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
    if (errors[name as keyof ActiveUser]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ActiveUser, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'User name is required';
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
          User Name
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
          {initialData ? 'Update User' : 'Create User'}
        </ButtonUI>
      </div>
    </form>
  );
};

export default UserForm;