import React from 'react';
import useQuizStore from '@/stores/useQuizStore';
import { Bar, Thumb } from './ProgressBar.style';

const ProgressBar = () => {
  const answered = useQuizStore((state) => state.answered);
  const total = useQuizStore((state) => state.questions.length);
  const percentage = (answered) / total;

  return (
    <Bar>
      <Thumb
        style={{
          width: `${percentage * 100}%`,
        }}
      />
    </Bar>
  );
};

export default ProgressBar;
