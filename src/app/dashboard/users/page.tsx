'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Package } from 'lucide-react';
import { ActiveUser } from '@/domain/types';
import { useToast } from '@/components/template/ToastContainer';
import { generateMockActiveUsers } from '@/domain/data';
import UserForm from '@/components/crud/user/FormUser';
import ButtonUI from '@/components/ui/button';
import UserTable from '@/components/crud/user/TableUser';
import Modal from '@/components/common/Modal';
import UserDetails from '@/components/crud/user/DetailsUser';
import DeleteConfirmation from '@/components/crud/user/DeleteUser';

type ModalView = 'none' | 'create' | 'edit' | 'view' | 'delete';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<ActiveUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<any>({
    search: '',
    category: ''
  });
  
  const [modalView, setModalView] = useState<ModalView>('none');
  const [selectedUser, setSelectedUser] = useState<ActiveUser | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { showToast } = useToast();
  
  // Load users
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const data = generateMockActiveUsers(10);
        setUsers(data);
      } catch (error) {
        console.error('Failed to load users:', error);
        showToast('Failed to load users', 'error');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadUsers();
  }, [showToast]);
  
  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           user.email.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = !filters.category || user.email === filters.category;
    
    return matchesSearch && matchesCategory;
  });
  
  // Modal handlers
  const openCreateModal = () => {
    setSelectedUser(null);
    setModalView('create');
  };
  
  const openEditModal = (user: ActiveUser) => {
    setSelectedUser(user);
    setModalView('edit');
  };
  
  const openViewModal = (user: ActiveUser) => {
    setSelectedUser(user);
    setModalView('view');
  };
  
  const openDeleteModal = (user: ActiveUser) => {
    setSelectedUser(user);
    setModalView('delete');
  };
  
  const closeModal = () => {
    setModalView('none');
    setSelectedUser(null);
  };
  
  // CRUD operations
  const handleCreateUser = async (data: ActiveUser) => {
    setIsSubmitting(true);
    
    // try {
    //   const newUser = await userService.createUser(data);
    //   setUsers(prev => [...prev, newUser]);
    //   showToast('User created successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to create user:', error);
    //   showToast('Failed to create user', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  const handleUpdateUser = async (data: ActiveUser) => {
    if (!selectedUser) return;
    
    setIsSubmitting(true);
    
    // try {
    //   const updatedUser = await userService.updateUser(selectedUser.id, data);
    //   setUsers(prev => 
    //     prev.map(user => user.id === updatedUser.id ? updatedUser : user)
    //   );
    //   showToast('User updated successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to update user:', error);
    //   showToast('Failed to update user', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  const handleDeleteUser = async () => {
    // if (!selectedUser) return;
    
    // setIsSubmitting(true);
    
    // try {
    //   await userService.deleteUser(selectedUser.id);
    //   setUsers(prev => prev.filter(user => user.id !== selectedUser.id));
    //   showToast('User deleted successfully', 'success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Failed to delete user:', error);
    //   showToast('Failed to delete user', 'error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  // View modal content based on current mode
  const renderModalContent = () => {
    switch (modalView) {
      case 'create':
        return (
          <UserForm
            onSubmit={handleCreateUser}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        );
        
      case 'edit':
        return selectedUser ? (
          <UserForm
            initialData={selectedUser}
            onSubmit={handleUpdateUser}
            onCancel={closeModal}
            isSubmitting={isSubmitting}
          />
        ) : null;
        
      case 'view':
        return selectedUser ? (
          <UserDetails
            user={selectedUser}
            onEdit={() => setModalView('edit')}
          />
        ) : null;
        
      case 'delete':
        return selectedUser ? (
          <DeleteConfirmation
            name={selectedUser.name}
            onConfirm={handleDeleteUser}
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
        return 'Create New User';
      case 'edit':
        return 'Edit User';
      case 'view':
        return 'User Details';
      case 'delete':
        return 'Delete User';
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
            Users Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your user inventory, add new users, and update existing ones.
          </p>
        </div>
        
        <ButtonUI
          variant="primary"
          icon={<Plus size={16} />}
          onClick={openCreateModal}
        >
          Add User
        </ButtonUI>
      </div>
      
      <UserTable
        users={filteredUsers}
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

export default UsersPage;