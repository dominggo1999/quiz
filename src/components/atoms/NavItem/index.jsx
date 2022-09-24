import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavItem } from './NavItem.style';

const NavItem = ({ children, to = '/' }) => {
  return (
    <StyledNavItem>
      <NavLink
        to={to}
        className={(navData) => (navData.isActive ? 'active' : '')}
      >
        {children}
      </NavLink>
    </StyledNavItem>
  );
};

export default NavItem;
