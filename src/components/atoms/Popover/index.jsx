import React from 'react';
import { DismissButton, FocusScope, useOverlay } from 'react-aria';
import { PopoverWrapper } from './Popover.style';

const Popover = (props) => {
  const ref = React.useRef();
  const {
    popoverRef = ref,
    isOpen,
    onClose,
    children,
  } = props;

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay({
    isOpen,
    onClose,
    shouldCloseOnBlur: true,
    isDismissable: true,
  }, popoverRef);

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <PopoverWrapper
        {...overlayProps}
        ref={popoverRef}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </PopoverWrapper>
    </FocusScope>
  );
};

export default Popover;
