import React from 'react';
import EmptyState from '@/app/components/EmptyState';

interface UsersProps {

};

const Users = ({}: UsersProps) => {
  return (
    <div className={'hidden lg:block lg:pl-80 h-full'}>
      <EmptyState />
    </div>
  );
};

export default Users;
