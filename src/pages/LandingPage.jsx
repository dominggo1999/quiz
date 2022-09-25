import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoMdPlay } from 'react-icons/io';
import Hero from '@/components/organisms/Hero';

const LandingPage = () => {
  return (
    <Hero
      heroImageSize={
        {
          width: 1359,
          height: 654,
        }
      }
      heroImage="/demo.gif"
      title="Just another fun quiz app"
      description="Learn more about movies, sports, music, and more with our fun quizzes"
      actions={[{
        to: 'https://github.com/dominggo1999/quiz',
        label: 'Source Code',
        isCallToAction: true,
        icon: BsGithub,
        iconPosition: 'left',
      },
      {
        to: '/start-quiz',
        label: 'Start A Quiz',
        isCallToAction: true,
        icon: IoMdPlay,
        iconPosition: 'left',
      }]}
    />
  );
};

export default LandingPage;
