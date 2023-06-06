import React from 'react';
import DesktopSidebar from '@/app/components/sidebar/DesktopSidebar';

interface SidebarProps {
  children: React.ReactNode;
};

const Sidebar = async ({children}: SidebarProps) => {
  return (
    <div className={'h-full'}>
      <DesktopSidebar />
      <main className={'lg:pl-20 h-full'}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
