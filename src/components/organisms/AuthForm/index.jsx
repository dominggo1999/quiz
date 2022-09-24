import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FormWrapper, FormTitle, FormDescription } from './AuthForm.style';
import Button from '@/components/atoms/Button';

const AuthForm = ({ register = () => { }, buttonText = 'Login With Google' }) => {
  return (
    <FormWrapper>
      <FormTitle>
        Login
      </FormTitle>
      <FormDescription>
        Welcome to Quiz, you need to login first before starting a quiz
      </FormDescription>
      <Button
        onClick={register}
        iconPosition="left"
        icon={BsGoogle}
        isFullWidth
        isCallToAction
      >
        {buttonText}
      </Button>
    </FormWrapper>
  );
};

export default AuthForm;
