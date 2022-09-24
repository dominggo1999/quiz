import React from 'react';
import { List } from './ButtonList.style';

const ButtonList = ({ children }) => {
  return (
    <List className="button-list">
      {children}
    </List>
  );
};

export default ButtonList;
