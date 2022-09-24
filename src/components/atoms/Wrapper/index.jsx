import React from 'react';
import { StyledWrapper } from './Wrapper.style';

const Wrapper = ({ flex = true, direction = 'row', children }) => {
  return (
    <StyledWrapper
      flex={flex}
      direction={direction}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
