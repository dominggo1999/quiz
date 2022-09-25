import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.style';
import { isValidUrl } from '@/util/isValidUrl';

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
  type,
  ...restProps
}) => {
  const handleClick = (e) => {
    if (isValidUrl(to)) {
      e.preventDefault();
      window.open(to, '_blank');
    }

    onClick(e);
  };

  return (
    <StyledButton
      onClick={handleClick}
      as={isLink ? Link : 'button'}
      to={isLink ? to : null}
      $type={type}
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
