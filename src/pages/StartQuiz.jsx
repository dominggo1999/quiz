import React from 'react';
import QuizOptions from '@/components/organisms/QuizOptions';
import quizData from '@/data/quiz';

const StartQuiz = () => {
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
