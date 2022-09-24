import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoMdPlay } from 'react-icons/io';
import Image from '@/components/atoms/Image';
import HeroTextContent from '@/components/molecules/HeroTextContent';

import Wrapper from '@/components/atoms/Wrapper';
import { HeroContainer } from './Hero.style';

const Hero = ({
  heroImage = '/demo.gif',
  title = 'The best quiz app in the world',
  description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nulla saepe soluta aliquid qui possimus quisquam vitae odio? Neque, dolor.',
  actions = [{
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
  }],
}) => {
  return (
    <Wrapper>
      <HeroContainer>
        <Image
          src={heroImage}
          alt="hero"
        />
        <HeroTextContent
          title={title}
          description={description}
          actions={actions}
        />
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
