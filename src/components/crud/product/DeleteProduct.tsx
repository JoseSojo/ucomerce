'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import ButtonUI from '@/components/ui/button';

interface DeleteConfirmationProps {
  productName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  productName,
  onConfirm,
  onCancel,
  isDeleting
}) => {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <AlertTriangle className="h-6 w-6 text-red-600" />
      </div>
      
      <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Product</h3>
      
      <div className="mt-3">
        <p className="text-sm text-gray-500">
          Are you sure you want to delete <strong>{productName}</strong>? This action cannot be undone.
        </p>
      </div>
      
      <div className="mt-6 flex justify-center gap-3">
        <ButtonUI 
          type="button" 
          variant="secondary" 
          onClick={onCancel}
          disabled={isDeleting}
        >
          Cancel
        </ButtonUI>
        <ButtonUI 
          type="button" 
          variant="danger" 
          onClick={onConfirm}
          isLoading={isDeleting}
        >
          Delete
        </ButtonUI>
      </div>
    </div>
  );
};

export default DeleteConfirmation;