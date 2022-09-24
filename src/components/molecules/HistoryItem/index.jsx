import React from 'react';
import { useNavigate } from 'react-router-dom';
import useQuizStore from '@/stores/useQuizStore';
import { HistoryItemContainer, SavedTime } from './HistoryItem.style';
import Button from '@/components/atoms/Button';

const { resumeQuiz } = useQuizStore.getState();

export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return date.toLocaleTimeString('en-us', options);
};

const HistoryItem = ({
  session,
  isResumable,
}) => {
  const navigate = useNavigate();

  const {
    savedDate,
    answered,
    correct,
    remainingTime,
    questions,
  } = session;

  return (
    <HistoryItemContainer>
      <SavedTime>{formatDate(savedDate)}</SavedTime>
      <p>Total : {questions.length || ''}</p>
      <p>Answered : {answered.toString() || ''}</p>

      {
        !isResumable && (

          <p>Correct : {correct.toString() || ''}</p>
        )
      }

      <p>Remaining Time : {(remainingTime / 1000).toString() || ''} second{remainingTime > 1 && 's'}</p>

      {
        isResumable && (
          <Button
            onClick={() => {
              resumeQuiz(session);
              navigate('/quiz');
            }}
          >
            Resume
          </Button>
        )
      }
    </HistoryItemContainer>
  );
};

export default HistoryItem;
