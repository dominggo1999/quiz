import React, { useLayoutEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { BiStopwatch } from 'react-icons/bi';
import { useAuth } from '@/context/AuthProvider';
import useQuizStore from '@/stores/useQuizStore';

import { TimerWrapper } from './Timer.style';

const {
  saveResult,
  subtractRemainingTime,
} = useQuizStore.getState();

let intervalID;
const Timer = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const timeLimit = useQuizStore((state) => state.timeLimit);

  const {
    seconds,
    minutes,
  } = useTimer({
    expiryTimestamp: (new Date()).getTime() + timeLimit,
    onExpire: () => {
      saveResult(user?.uid);
      navigate('/final-score');
    },
  });

  // Keeping track of the remaining time
  useLayoutEffect(() => {
    intervalID = setInterval(() => {
      subtractRemainingTime();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <TimerWrapper>
      <BiStopwatch />
      <span>0{minutes}</span>:<span>{seconds < 10 ? `0${seconds.toString()}` : seconds}</span>
    </TimerWrapper>
  );
};

export default Timer;
