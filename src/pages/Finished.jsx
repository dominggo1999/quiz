import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { getSavedQuizzes } from '../services/quizzes';
import LoadingIndicator from '@/components/atoms/LoadingIndicator';
import HistoryList from '@/components/molecules/HistoryList';
import EmptyHistory from '@/components/atoms/EmptyHistoryList';

const Finished = () => {
  const [list, setList] = useState();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const savedPaused = getSavedQuizzes(user.uid, 'results');
      setList(savedPaused);
    }
  }, [user]);

  if (!user) {
    return <LoadingIndicator cover />;
  }

  if (list?.length === 0) {
    return (
      <EmptyHistory>
        No Finished Quiz Session Found
      </EmptyHistory>
    );
  }

  return (
    <HistoryList
      list={list}
      isResumable={false}
    />
  );
};

export default Finished;
