import React from 'react';
import { useAuth } from '@/context/AuthProvider';
import LoadingIndicator from '@/components/atoms/LoadingIndicator';

const Auth = () => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>Auth</div>
  );
};

export default Auth;
