import React from 'react';
import { StyledNavList, StyledMobileNavList } from './NavList.style';

export const MobileNavList = ({ children }) => {
  return (
    <StyledMobileNavList>
      {children}
    </StyledMobileNavList>
  );
};

const NavList = ({ children }) => {
  return (
    <StyledNavList>
      {children}
    </StyledNavList>
  );
};

export default NavList;
