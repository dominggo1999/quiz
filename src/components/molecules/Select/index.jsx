import React, { useRef } from 'react';
import { useSelectState } from 'react-stately';
import {
  HiddenSelect,
  useSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from 'react-aria';

import { HiSelector } from 'react-icons/hi';

import {
  SelectWrapper,
  SelectLabel,
  SelectTrigger,
  SelectActiveValue,
  SelectTriggerIcon,
} from './Select.style';

import ListBox from '../../atoms/ListBox';
import Popover from '../../atoms/Popover';

const Select = (props) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const buttonRef = useRef();
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
  } = useSelect(props, state, buttonRef);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, buttonRef);

  const { focusProps } = useFocusRing();

  return (
    <SelectWrapper>
      <SelectLabel {...labelProps}>{props.label}</SelectLabel>
      <HiddenSelect
        state={state}
        triggerRef={buttonRef}
        label={props.label}
        name={props.name}
      />
      <SelectTrigger
        {...mergeProps(buttonProps, focusProps)}
        ref={buttonRef}
      >
        <SelectActiveValue {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </SelectActiveValue>
        <SelectTriggerIcon
          aria-hidden="true"
          isOpen={state.isOpen}
        >
          <HiSelector />
        </SelectTriggerIcon>
      </SelectTrigger>

      {state.isOpen
        && (
          <Popover
            isOpen={state.isOpen}
            onClose={state.close}
          >
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </SelectWrapper>
  );
};

export default Select;
