import React, { useRef } from 'react';
import { decode } from 'html-entities';
import { useButton } from 'react-aria';
import { StyledChoiceItem, StyledChoiceButton } from './ChoiceItem.stories.style';

const ChoiceItem = (props) => {
  const { children, onClick } = props;

  const ref = useRef();
  const { buttonProps } = useButton(props, ref);

  return (
    <StyledChoiceItem>
      <StyledChoiceButton
        {...buttonProps}
        onClick={onClick}
      >
        {decode(children)}
      </StyledChoiceButton>
    </StyledChoiceItem>
  );
};

export default ChoiceItem;
