/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizHeader from '@/components/molecules/QuizHeader';
import ProgressIndex from '@/components/atoms/ProgressIndex';
import ProgressBar from '@/components/atoms/ProgressBar';
import { QuizItemWrapper } from './QuizItem.style';
import Question from '@/components/atoms/Question';
import Choices from '@/components/molecules/Choices';
import ChoiceItem from '@/components/atoms/ChoiceItem';
import useQuizStore from '@/stores/useQuizStore';
import { useAuth } from '@/context/AuthProvider';
import { shuffleArray } from '@/util/shuffleArray';

const {
  nextQuestion,
  saveResult,
} = useQuizStore.getState();

const QuizItem = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const currentQuestion = questions[currentQuestionIndex];

  const {
    question,
    type,
    incorrect_answers,
    correct_answer,
  } = currentQuestion;
  const options = type === 'multiple' ? shuffleArray([...incorrect_answers, correct_answer]) : ['True', 'False'];

  return (
    <QuizItemWrapper>
      <QuizHeader />
      <ProgressBar />
      <ProgressIndex />
      <Question question={question} />
      <Choices>

        {options.map((i) => {
          return (
            <ChoiceItem
              onClick={() => {
                if (currentQuestionIndex < questions.length - 1) {
                  nextQuestion(i === correct_answer, user.uid);
                } else {
                  saveResult(user.uid);
                  navigate('/final-score');
                }
              }}
              key={i}
            >
              {i}
            </ChoiceItem>
          );
        })}
      </Choices>
    </QuizItemWrapper>
  );
};

export default QuizItem;
