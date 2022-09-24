import React from 'react';
import { ChoicesWrapper } from './Choices.style';

const Choices = ({ children }) => {
  return (
    <ChoicesWrapper>
      {children}
    </ChoicesWrapper>
  );
};

export default Choices;
