'use client';
import { useState, useEffect } from 'react';

import NavLoading from './NavLoading';
import Logo from '@/navbar/Logo';
import UserMenu from '@/navbar/UserMenu';
import Container from '@/components/Container';
import { SafeUser } from '@/types';
import RouteMenu from './RouteMenu';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <NavLoading />;

  return (
    <div className='fixed z-10 w-full bg-white shadow-sm dark:bg-stone-950'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3'>
          <Logo />
          <div className='flex flex-row items-center justify-between gap-3'>
            <RouteMenu currentUser={currentUser} />
          </div>
          <div className='flex flex-row items-center justify-between gap-3'>
            <UserMenu currentUser={currentUser} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
