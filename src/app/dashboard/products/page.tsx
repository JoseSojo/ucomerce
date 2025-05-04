'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Package } from 'lucide-react';
import { ProductCrud, ProductDataDTO } from '@/domain/types';
import { useToast } from '@/components/template/ToastContainer';
import { generateMockProducts } from '@/domain/data';
import ProductForm from '@/components/crud/product/FormProduct';
import ButtonUI from '@/components/ui/button';
import ProductTable from '@/components/crud/product/TableProduct';
import Modal from '@/components/common/Modal';
import ProductDetails from '@/components/crud/product/DetailsProduct';
import DeleteConfirmation from '@/components/crud/product/DeleteProduct';

type ModalView = 'none' | 'create' | 'edit' | 'view' | 'delete';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<ProductCrud[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<any>({
    search: '',
    category: ''
  });
  
  const [modalView, setModalView] = useState<ModalView>('none');
  const [selectedProduct, setSelectedProduct] = useState<ProductCrud | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { showToast } = useToast();
  
  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = generateMockProducts(10);
        setProducts(data);
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
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           product.description.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = !filters.category || product.category === filters.category;
    
    return matchesSearch && matchesCategory;
  });
  
  // Modal handlers
  const openCreateModal = () => {
    setSelectedProduct(null);
    setModalView('create');
  };
  
  const openEditModal = (product: ProductCrud) => {
    setSelectedProduct(product);
    setModalView('edit');
  };
  
  const openViewModal = (product: ProductCrud) => {
    setSelectedProduct(product);
    setModalView('view');
  };
  
  const openDeleteModal = (product: ProductCrud) => {
    setSelectedProduct(product);
    setModalView('delete');
  };
  
  const closeModal = () => {
    setModalView('none');
    setSelectedProduct(null);
  };
  
  // CRUD operations
  const handleCreateProduct = async (data: ProductDataDTO) => {
    setIsSubmitting(true);
    
    // try {
    //   const newProduct = await productService.createProduct(data);
    //   setProducts(prev => [...prev, newProduct]);
    //   showToast('Product created successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to create product:', error);
    //   showToast('Failed to create product', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  const handleUpdateProduct = async (data: ProductDataDTO) => {
    if (!selectedProduct) return;
    
    setIsSubmitting(true);
    
    // try {
    //   const updatedProduct = await productService.updateProduct(selectedProduct.id, data);
    //   setProducts(prev => 
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
    // if (!selectedProduct) return;
    
    // setIsSubmitting(true);
    
    // try {
    //   await productService.deleteProduct(selectedProduct.id);
    //   setProducts(prev => prev.filter(product => product.id !== selectedProduct.id));
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
          <ProductForm
            onSubmit={handleCreateProduct}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        );
        
      case 'edit':
        return selectedProduct ? (
          <ProductForm
            initialData={selectedProduct}
            onSubmit={handleUpdateProduct}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        ) : null;
        
      case 'view':
        return selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onEdit={() => setModalView('edit')}
          />
        ) : null;
        
      case 'delete':
        return selectedProduct ? (
          <DeleteConfirmation
            productName={selectedProduct.name}
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
            Products Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your product inventory, add new products, and update existing ones.
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
      
      <ProductTable
        products={filteredProducts}
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

export default ProductsPage;