import React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import LandingPage from './pages/LandingPage';
import StartQuiz from './pages/StartQuiz';
import Quiz from './pages/Quiz';
import FinalScore from './pages/FinalScore';
import Paused from './pages/Paused';

const routes = [
  {
    path: '/',
    element: LandingPage,
  },
  {
    path: '/auth',
    element: Auth,
  },
  {
    path: '/start-quiz',
    element: StartQuiz,
    isProtected: true,
  },
  {
    path: '/quiz',
    element: Quiz,
    isProtected: true,
  },
  {
    path: '/final-score',
    element: FinalScore,
    isProtected: true,
  },
  {
    path: '/paused',
    element: Paused,
    isProtected: true,
  },
];

const Routes = () => {
  return (
    <ReactRouterRoutes>
      {
        routes?.length > 0 && routes.map(({ isProtected, path, element: Element }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<Element />}
            />
          );
        })
      }

    </ReactRouterRoutes>
  );
};

export default Routes;
