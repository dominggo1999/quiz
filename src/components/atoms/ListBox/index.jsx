import React from 'react';
import { useListBox, useOption } from 'react-aria';
import { BiCheck } from 'react-icons/bi';

import { StyledList, StyledOption, SelectedOptionIcon } from './Listbox.style';

const Option = ({ item, state }) => {
  const ref = React.useRef();
  const {
    optionProps,
    isSelected,
    isFocused,
    isDisabled,
  } = useOption(
    { key: item.key },
    state,
    ref,
  );

  return (
    <StyledOption
      {...optionProps}
      isSelected={isSelected}
      isFocused={isFocused}
      isDisabled={isDisabled}
      ref={ref}
    >
      {item.rendered}
      {isSelected && (
        <SelectedOptionIcon aria-hidden="true">

          <BiCheck />
        </SelectedOptionIcon>
      )}
    </StyledOption>
  );
};

const ListBox = (props) => {
  const ref = React.useRef();
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <StyledList
      {...listBoxProps}
      ref={listBoxRef}
    >
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </StyledList>
  );
};

export default ListBox;
