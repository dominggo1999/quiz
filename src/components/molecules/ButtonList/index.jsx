import React from 'react';
import { List } from './Button.style';

const ButtonList = ({ children }) => {
  return (
    <List>
      {children}
    </List>
  );
};

export default ButtonList;
