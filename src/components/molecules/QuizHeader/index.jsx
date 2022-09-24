import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import Button from '@/components/atoms/Button';
import Timer from '@/components/atoms/Timer';
import { HeaderWrapper } from './QuizHeader.style';

const QuizHeader = ({ clearQuiz = () => { } }) => {
  return (
    <HeaderWrapper>
      <Timer />
      <Button
        iconPosition="left"
        icon={IoMdArrowBack}
        onClick={clearQuiz}
      >
        Exit Quiz
      </Button>
    </HeaderWrapper>
  );
};

export default QuizHeader;
