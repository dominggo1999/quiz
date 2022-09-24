import React from 'react';
import { StyledBrand } from './Brand.style';

const Brand = ({ text, children, to = '/' }) => {
  return (
    <StyledBrand
      onClick={(e) => e.preventDefault()}
      to={to}
    >
      {text || children || 'Quiz'}
    </StyledBrand>
  );
};

export default Brand;
