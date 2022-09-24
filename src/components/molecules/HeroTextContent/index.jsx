import React from 'react';
import short from 'short-uuid';
import { TextContent, Title, Description } from './HeroTextContent.style';
import ButtonList from '../ButtonList';
import Button from '@/components/atoms/Button';

const HeroTextContent = ({ title, description, actions }) => {
  return (
    <TextContent>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>

      <ButtonList>
        {
          actions.map(({
            to, isCallToAction, disabled, label, ...rest
          }) => {
            return (
              <Button
                key={short.generate()}
                isLink
                to={to}
                isCallToAction={isCallToAction}
                disableLinkNavigation={disabled}
                {...rest}
              >
                {label}
              </Button>
            );
          })
        }
      </ButtonList>
    </TextContent>
  );
};

export default HeroTextContent;
