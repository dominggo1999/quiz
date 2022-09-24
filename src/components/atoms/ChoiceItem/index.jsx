import React from 'react';
import { decode } from 'html-entities';
import { StyledChoiceItem, StyledChoiceButton } from './ChoiceItem.stories.style';

const ChoiceItem = (props) => {
  const { children, onClick } = props;

  return (
    <StyledChoiceItem>
      <StyledChoiceButton
        onClick={onClick}
      >
        {decode(children)}
      </StyledChoiceButton>
    </StyledChoiceItem>
  );
};

export default ChoiceItem;
