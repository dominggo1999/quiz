import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthProvider';
import useQuizStore from '@/stores/useQuizStore';
import RedirectedOnly from '@/components/particles/RedirectedOnly';
import WaitingForConfirmation from '@/components/molecules/WaitingForConfirmation';
import LoadingIndicator from '@/components/atoms/LoadingIndicator';

const {
  askForConfirmation,
  startQuizFromStart,
  clearQuiz,
  update,
} = useQuizStore.getState();

const ProtectedQuiz = () => {
  const url = useQuizStore((state) => state.url);
  const waitingForConfirmation = useQuizStore((state) => state.waitingForConfirmation);
  const isResume = useQuizStore((state) => state.isResume);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.uid) {
      update('userId', user.uid);
    }
  }, [user]);

  const { isFetching, isError } = useQuery(
    [url],
    ({ signal }) => fetch(url, { signal }).then((res) => res.json()),
    {
      enabled: !isResume, // Only fetch if using url
      onSuccess: (data) => {
        askForConfirmation(data.results);
      },
      refetchOnWindowFocus: false,
    },
  );

  if (isFetching) {
    return <LoadingIndicator cover />;
  }

  if (isError) {
    return <p>error...</p>;
  }

  if (waitingForConfirmation) {
    return (
      <WaitingForConfirmation
        onCancel={clearQuiz}
        onConfirm={startQuizFromStart}
      />
    );
  }

  return (
    <div>
      <button onClick={clearQuiz}>Exit Quiz</button>
    </div>
  );
};

const Quiz = () => {
  const redirected = useQuizStore((state) => state.redirected);

  return (
    <RedirectedOnly redirected={redirected}>
      <ProtectedQuiz />
    </RedirectedOnly>
  );
};

export default Quiz;
