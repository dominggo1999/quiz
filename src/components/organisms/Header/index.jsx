import React from 'react';
import Brand from '@/components/atoms/Brand';
import NavList from '@/components/atoms/NavList';
import NavItem from '@/components/atoms/NavItem';
import Button from '@/components/atoms/Button';
import Wrapper from '@/components/atoms/Wrapper';

import { useAuth } from '@/context/AuthProvider';

const Header = () => {
  const { logout } = useAuth();

  return (
    <Wrapper as="header">
      <Brand />
      <NavList>
        <NavItem to="/start-quiz">Start A Quiz</NavItem>
        <NavItem to="/finished">Finished</NavItem>
        <NavItem to="/paused">Paused</NavItem>
        <Button onClick={logout}>Logout</Button>
      </NavList>
    </Wrapper>
  );
};

export default Header;
