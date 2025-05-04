'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Package } from 'lucide-react';
import { CategoryDataDTO, Category } from '@/domain/types';
import { useToast } from '@/components/template/ToastContainer';
import { categories } from '@/domain/data';
import CategoryForm from '@/components/crud/category/FormCategory';
import ButtonUI from '@/components/ui/button';
import CategoryTable from '@/components/crud/category/TableCategory';
import Modal from '@/components/common/Modal';
import CategoryDetails from '@/components/crud/category/DetailsCategory';
import DeleteConfirmation from '@/components/crud/category/DeleteCategory';

type ModalView = 'none' | 'create' | 'edit' | 'view' | 'delete';

const CategoryPage: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<any>({
    search: '',
    category: ''
  });
  
  const [modalView, setModalView] = useState<ModalView>('none');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { showToast } = useToast();
  
  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = categories;
        setCategory(data);
      } catch (error) {
        console.error('Failed to load products:', error);
        showToast('Failed to load products', 'error');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, [showToast]);
  
  // Filter products
  const filteredCategory = category.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(filters.search.toLowerCase())
        
    return matchesSearch;
  });
  
  // Modal handlers
  const openCreateModal = () => {
    setSelectedCategory(null);
    setModalView('create');
  };
  
  const openEditModal = (category: Category) => {
    setSelectedCategory(category);
    setModalView('edit');
  };
  
  const openViewModal = (category: Category) => {
    setSelectedCategory(category);
    setModalView('view');
  };
  
  const openDeleteModal = (category: Category) => {
    setSelectedCategory(category);
    setModalView('delete');
  };
  
  const closeModal = () => {
    setModalView('none');
    setSelectedCategory(null);
  };
  
  // CRUD operations
  const handleCreateCategory = async (data: CategoryDataDTO) => {
    setIsSubmitting(true);
    
    // try {
    //   const newProduct = await productService.createProduct(data);
    //   setCategory(prev => [...prev, newProduct]);
    //   showToast('Product created successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to create product:', error);
    //   showToast('Failed to create product', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  const handleUpdateProduct = async (data: CategoryDataDTO) => {
    if (!selectedCategory) return;
    
    setIsSubmitting(true);
    
    // try {
    //   const updatedProduct = await productService.updateProduct(selectedCategory.id, data);
    //   setCategory(prev => 
    //     prev.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    //   );
    //   showToast('Product updated successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to update product:', error);
    //   showToast('Failed to update product', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  const handleDeleteProduct = async () => {
    // if (!selectedCategory) return;
    
    // setIsSubmitting(true);
    
    // try {
    //   await productService.deleteProduct(selectedCategory.id);
    //   setCategory(prev => prev.filter(product => product.id !== selectedCategory.id));
    //   showToast('Product deleted successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to delete product:', error);
    //   showToast('Failed to delete product', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  // View modal content based on current mode
  const renderModalContent = () => {
    switch (modalView) {
      case 'create':
        return (
          <CategoryForm
            onSubmit={handleCreateCategory}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        );
        
      case 'edit':
        return selectedCategory ? (
          <CategoryForm
            initialData={selectedCategory}
            onSubmit={handleUpdateProduct}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        ) : null;
        
      case 'view':
        return selectedCategory ? (
          <CategoryDetails
            category={selectedCategory}
            onEdit={() => setModalView('edit')}
          />
        ) : null;
        
      case 'delete':
        return selectedCategory ? (
          <DeleteConfirmation
            productName={selectedCategory.name}
            onConfirm={handleDeleteProduct}
            onCancel={closeModal}
            isDeleting={isSubmitting}
          />
        ) : null;
        
      default:
        return null;
    }
  };
  
  // Modal title based on current mode
  const getModalTitle = () => {
    switch (modalView) {
      case 'create':
        return 'Create New Product';
      case 'edit':
        return 'Edit Product';
      case 'view':
        return 'Product Details';
      case 'delete':
        return 'Delete Product';
      default:
        return '';
    }
  };

  // Modal size based on current mode
  const getModalSize = () => {
    switch (modalView) {
      case 'view':
        return 'xl';
      case 'delete':
        return 'sm';
      default:
        return 'lg';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-600" />
            Categorías
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Maneja las categorías y subcategorías que utilizas para manejar tus productos.
          </p>
        </div>
        
        <ButtonUI
          variant="primary"
          icon={<Plus size={16} />}
          onClick={openCreateModal}
        >
          Add Product
        </ButtonUI>
      </div>
      
      <CategoryTable
        category={filteredCategory}
        onView={openViewModal}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
        filters={filters}
        onFilterChange={setFilters}
        isLoading={isLoading}
      />
      
      <Modal
        isOpen={modalView !== 'none'}
        onClose={closeModal}
        title={getModalTitle()}
        size={getModalSize()}
        closeOnClickOutside={modalView !== 'delete'}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default CategoryPage;