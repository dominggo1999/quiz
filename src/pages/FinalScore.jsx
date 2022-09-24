import React, { useMemo, useEffect } from 'react';

import RedirectedOnly from '../components/particles/RedirectedOnly';
import useQuizStore from '../stores/useQuizStore';
import Score from '@/components/molecules/Score';

const {
  clearQuiz,
} = useQuizStore.getState();

const FinalScore = () => {
  const { isStarting, ...quizInfo } = useQuizStore.getState();

  const quizInfoMemo = useMemo(() => {
    return { ...quizInfo };
  }, []);

  useEffect(() => {
    clearQuiz();
  }, []);

  return (
    <RedirectedOnly redirected={isStarting}>
      <Score info={quizInfoMemo} />
    </RedirectedOnly>
  );
};

export default FinalScore;
