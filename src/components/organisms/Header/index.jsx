import React from 'react';
import Brand from '@/components/atoms/Brand';
import NavList from '@/components/atoms/NavList';
import NavItem from '@/components/atoms/NavItem';
import Button from '@/components/atoms/Button';
import { HeaderWrapper } from './Header.style';

import { useAuth } from '@/context/AuthProvider';

const Header = () => {
  const { logout } = useAuth();

  return (
    <HeaderWrapper>
      <Brand />
      <NavList>
        <NavItem to="/start-quiz">Start A Quiz</NavItem>
        <NavItem to="/finished">Finished</NavItem>
        <NavItem to="/paused">Paused</NavItem>
        <Button onClick={logout}>Logout</Button>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
