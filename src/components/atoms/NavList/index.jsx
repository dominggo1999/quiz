import React from 'react';
import { StyledNavList } from './NavList.style';

const NavList = ({ children }) => {
  return (
    <StyledNavList>
      {children}
    </StyledNavList>
  );
};

export default NavList;
