import React from 'react';
import Wrapper from '../Wrapper';
import { EmptyHistoryContainer } from './EmptyHistory.style';

const EmptyHistory = ({ children }) => {
  return (
    <Wrapper>
      <EmptyHistoryContainer>
        {children}
      </EmptyHistoryContainer>
    </Wrapper>
  );
};

export default EmptyHistory;
