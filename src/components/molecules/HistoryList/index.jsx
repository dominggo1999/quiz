import React from 'react';
import Wrapper from '@/components/atoms/Wrapper';
import { ListContainer } from './HistoryList.style';
import HistoryItem from '@/components/molecules/HistoryItem';

const HistoryList = ({ list, isResumable }) => {
  return (
    <Wrapper>
      <ListContainer>
        {
          list?.length > 0 && list.map((session) => {
            return (
              <HistoryItem
                key={session.sessionId}
                isResumable={isResumable}
                session={session}
              />
            );
          })
        }
      </ListContainer>
    </Wrapper>
  );
};

export default HistoryList;
