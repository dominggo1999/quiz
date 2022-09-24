import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectedOnly = ({ redirected, children }) => {
  if (!redirected) {
    return <Navigate to="/start-quiz" />;
  }

  return children;
};

export default RedirectedOnly;
