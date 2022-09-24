import React from 'react';
import { decode } from 'html-entities';
import { StyledChoiceItem } from './ChoiceItem.stories.style';

const ChoiceItem = ({ children, onClick }) => {
  return (
    <StyledChoiceItem
      onClick={onClick}
      role="button"
    >
      {decode(children)}
    </StyledChoiceItem>
  );
};

export default ChoiceItem;
