import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.style';

const Button = ({
  disableLinkNavigation,
  isLink,
  to,
  isCallToAction = false,
  onClick = () => { },
  children,
  icon: Icon,
  iconPosition = 'right',
  isFullWidth = false,
  ...restProps
}) => {
  const handleClick = (e) => {
    if (isLink && disableLinkNavigation) {
      e.preventDefault();
    }

    onClick();
  };

  return (
    <StyledButton
      onClick={handleClick}
      as={isLink ? Link : 'button'}
      to={isLink ? to : null}
      $isCallToAction={isCallToAction}
      $iconPosition={iconPosition}
      $isFullWidth={isFullWidth}
      {...restProps}
    >
      {children}
      {Icon && <Icon />}
    </StyledButton>
  );
};

export default Button;
