'use client';

import React from 'react';
import { Edit } from 'lucide-react';
import { ActiveUser } from '@/domain/types';
import ButtonUI from '@/components/ui/button';

interface UserDetailsProps {
  user: ActiveUser;
  onEdit: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onEdit }) => {
 
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">
            Email: {user.email}
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

export default UserDetails;