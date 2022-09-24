import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizOptions from '@/components/organisms/QuizOptions';
import quizData from '@/data/quiz';
import { getQuizUrl } from '../services/quizzes';

import useQuizStore from '../stores/useQuizStore';

const { prepareQuiz } = useQuizStore.getState();

const StartQuiz = () => {
  const navigate = useNavigate();

  return (
    <QuizOptions
      fields={quizData}
      startQuiz={
        (options) => {
          prepareQuiz(getQuizUrl(options));
          navigate('/quiz');
        }
      }
    />
  );
};

export default StartQuiz;
