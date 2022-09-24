import React from 'react';
import { useAuth } from '@/context/AuthProvider';
import LoadingIndicator from '@/components/atoms/LoadingIndicator';
import AuthForm from '@/components/organisms/AuthForm';

const Auth = () => {
  const { loading, signInWithGoogle } = useAuth();

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <AuthForm
      register={signInWithGoogle}
      buttonText="Login With Google"
    />
  );
};

export default Auth;
