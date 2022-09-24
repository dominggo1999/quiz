import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import useTimeOut from 'react-use/lib/useTimeout';
import ReactConfetti from 'react-confetti';

const Confetti = ({ duration = 10000 }) => {
  const { width, height } = useWindowSize();
  const [isComplete] = useTimeOut(duration);

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={!isComplete()}
    />
  );
};

export default Confetti;
