import create from 'zustand';
import produce from 'immer';
import short from 'short-uuid';
import { saveQuiz, removeQuizSession, saveRemainingTime } from '@/services/quizzes';

const TIME_LIMIT = 60; // Seconds

const initialQuiz = {
  waitingForConfirmation: false,
  redirected: false,
  isStarting: false,
  isFromSaved: false,
  questions: [],
  currentQuestionIndex: 0,
  answered: 0,
  correct: 0,
  url: '',
  timeLimit: TIME_LIMIT,
  remainingTime: 0,
  sessionId: '',
  userId: '',
  isResume: false,
};

const useQuizStore = create((set, get) => {
  const saveSession = (newSessionId) => {
    // Save session for "resumability feature"
    const {
      questions,
      correct,
      answered,
      remainingTime,
      sessionId: oldSessionId,
      userId,
    } = get();

    saveQuiz(userId, {
      questions,
      correct,
      // "Save session" happens on the previous value
      // Need to add the last counter
      answered: newSessionId ? 0 : answered + 1,
      remainingTime,
      sessionId: newSessionId || oldSessionId,
      savedDate: new Date(),
    }, 'paused');
  };

  return {
    ...initialQuiz,
    update: (key, value) => {
      return set(produce((draft) => {
        // Only change existing key
        if (Object.keys(initialQuiz).indexOf(key) > -1) {
          draft[key] = value;
        }
      }));
    },
    prepareQuiz: (url) => {
      return set(produce((draft) => {
        draft.url = url;
        draft.redirected = true;
        draft.timeLimit = TIME_LIMIT * 1000;
        draft.remainingTime = draft.timeLimit;
      }));
    },
    askForConfirmation: (data) => {
      return set(produce((draft) => {
        draft.waitingForConfirmation = true;
        draft.questions = data;
      }));
    },
    startQuizFromStart: () => {
      const newSessionId = short.generate();

      return set(produce((draft) => {
        if (!draft.sessionId) {
          saveSession(newSessionId);
        }

        draft.isStarting = true;
        draft.waitingForConfirmation = false;
        draft.sessionId = draft.sessionId || newSessionId;
      }));
    },
    clearQuiz: () => {
      removeQuizSession(get().userId);

      return set(produce((draft) => {
        Object.keys(initialQuiz).forEach((key) => {
          draft[key] = initialQuiz[key];
        });
      }));
    },
    nextQuestion: (isCorrect) => {
      saveSession();

      return set(produce((draft) => {
        draft.answered += 1;
        if (isCorrect) {
          draft.correct += 1;
        }

        draft.currentQuestionIndex += 1;
      }));
    },
    subtractRemainingTime: () => {
      return set(produce((draft) => {
        draft.remainingTime -= 1000;
        saveRemainingTime(draft.userId, draft.remainingTime);
      }));
    },
    saveResult: () => {
      const {
        questions,
        correct,
        answered,
        userId,
        currentQuestionIndex,
        sessionId,
        remainingTime,
      } = get();

      saveQuiz(userId, {
        questions,
        correct,
        sessionId,
        savedDate: new Date(),
        // "Save result" happens on the previous value
        // Need to add the last counter
        answered: answered ? answered + 1 : 0,
        remainingTime,
      }, 'results');

      if (currentQuestionIndex === questions.length - 1) {
        // "Save result" happens on the previous value
        // Need to add the last counter
        return set(produce((draft) => {
          draft.answered += 1;
        }));
      }
    },
    resumeQuiz: ({
      questions, sessionId, answered, correct, remainingTime,
    }) => {
      return set(produce((draft) => {
        draft.isResume = true;
        draft.redirected = true;
        draft.timeLimit = remainingTime;
        draft.remainingTime = draft.timeLimit;
        draft.waitingForConfirmation = true;
        draft.questions = questions;
        draft.sessionId = sessionId;
        draft.currentQuestionIndex = answered;
        draft.correct = correct;
        draft.answered = answered;
      }));
    },
  };
});

export default useQuizStore;
