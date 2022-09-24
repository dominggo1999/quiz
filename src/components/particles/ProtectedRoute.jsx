import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (!user && !loading) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;
