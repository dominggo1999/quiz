import React from 'react';
import { StyledContainerIndex } from './ProgressIndex.style';
import useQuizStore from '@/stores/useQuizStore';

const ProgressIndex = () => {
  const answered = useQuizStore((state) => state.answered);
  const total = useQuizStore((state) => state.questions.length);

  return (
    <StyledContainerIndex>
      Number <span>{answered + 1}</span>  of <span>{total}</span> Questions
    </StyledContainerIndex>
  );
};

export default ProgressIndex;
