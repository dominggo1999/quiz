import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizOptions from '@/components/organisms/QuizOptions';
import quizData from '@/data/quiz';
import { useAuth } from '@/context/AuthProvider';

const StartQuiz = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <QuizOptions
      fields={quizData}
      startQuiz={
        (options) => {
          console.log(options);
        }
      }
    />
  );
};

export default StartQuiz;
