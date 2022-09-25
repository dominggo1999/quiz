import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { IoMdArrowBack } from 'react-icons/io';
import { FormWrapper, FormTitle, FormDescription } from './AuthForm.style';
import Button from '@/components/atoms/Button';

const AuthForm = ({ register = () => { }, buttonText = 'Login' }) => {
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
      <Button
        isLink
        to="/"
        iconPosition="left"
        icon={IoMdArrowBack}
        isFullWidth
        isCallToAction
        type="cancel"
      >
        Back To Landing Page
      </Button>
    </FormWrapper>
  );
};

export default AuthForm;
