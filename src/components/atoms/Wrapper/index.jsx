import React from 'react';
import { StyledWrapper } from './Wrapper.style';

const Wrapper = ({
  flex = true, direction = 'row', children, ...props
}) => {
  return (
    <StyledWrapper
      {...props}
      flex={flex}
      direction={direction}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
