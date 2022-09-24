import queryString from 'query-string';

const BASE_OPENDB_URL = 'https://opentdb.com/api.php';

export const getQuizUrl = ({
  amount = 10,
  category = 'any',
  difficulty = 'any',
  type = 'any',
}) => {
  const params = {
    amount,
  };

  if (category !== 'any') {
    params.category = category;
  }

  if (difficulty !== 'any') {
    params.difficulty = difficulty;
  }

  if (type !== 'any') {
    params.type = type;
  }

  const url = `${BASE_OPENDB_URL}/?${queryString.stringify(params)}`;

  return url;
};

export const saveQuiz = (userId, sessionInfo, type) => {
  if (type === 'paused' || type === 'results') {
    let savedInfo = JSON.parse(window.localStorage.getItem(userId));

    // Init localstorage if currently not exist
    if (!savedInfo) {
      savedInfo = {
        paused: [],
        results: [],
      };
      window.localStorage.setItem(userId, savedInfo);
    }

    if (type === 'results') {
      // Get the latest 9
      const lastNine = savedInfo.results.slice(0, 9);

      window.localStorage.setItem(userId, JSON.stringify({
        ...savedInfo,
        [type]: [sessionInfo, ...lastNine],
      }));
    } else {
      // Get the latest 9
      const list = savedInfo.paused.slice(0, 9);

      // Check if session already recorder
      const target = list.filter((i) => i.sessionId === sessionInfo.sessionId)[0];
      let newList;

      if (target) {
        list[list.indexOf(target)] = sessionInfo;
        newList = list;
      } else {
        newList = [sessionInfo, ...savedInfo.paused];
      }

      window.localStorage.setItem(userId, JSON.stringify({
        ...savedInfo,
        paused: newList,
      }));
    }
  }
};

export const removeQuizSession = (userId) => {
  if (!userId) return;

  let savedInfo = JSON.parse(window.localStorage.getItem(userId));

  // Init localstorage if currently not exist
  if (!savedInfo) {
    savedInfo = {
      paused: [],
      results: [],
    };
    window.localStorage.setItem(userId, savedInfo);
  }

  const list = savedInfo.paused;
  list.shift();

  window.localStorage.setItem(userId, JSON.stringify({
    ...savedInfo,
    paused: list,
  }));
};

export const saveRemainingTime = (userId, newRemainingTime) => {
  if (!userId) return;

  let savedInfo = JSON.parse(window.localStorage.getItem(userId));

  // Init localstorage if currently not exist
  if (!savedInfo) {
    savedInfo = {
      paused: [],
      results: [],
    };
    window.localStorage.setItem(userId, savedInfo);
  }

  const list = savedInfo.paused;
  if (list.length > 0) {
    list[0].remainingTime = newRemainingTime;
  }

  window.localStorage.setItem(userId, JSON.stringify({
    ...savedInfo,
    paused: list,
  }));
};

export const getSavedQuizzes = (userId, type) => {
  let savedInfo = JSON.parse(window.localStorage.getItem(userId));

  // Init localstorage if currently not exist
  if (!savedInfo) {
    savedInfo = {
      paused: [],
      results: [],
    };
    window.localStorage.setItem(userId, JSON.stringify(savedInfo));
  }

  return savedInfo[type];
};
