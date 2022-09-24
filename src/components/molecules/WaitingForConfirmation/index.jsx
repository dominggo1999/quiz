import React from 'react';
import { IoIosRocket, IoMdArrowBack } from 'react-icons/io';

import Wrapper from '@/components/atoms/Wrapper';
import ButtonList from '../ButtonList';
import Button from '@/components/atoms/Button';
import { ConfirmationContainer, ConfirmationMessage } from './WaitingForConfitmation.style';

const WaitingForConfirmation = ({
  message = 'Are you ready for the quiz ?',
  onCancel = () => { },
  onConfirm = () => { },
}) => {
  return (
    <Wrapper direction="col">
      <ConfirmationContainer>
        <img
          src="https://i.giphy.com/media/xT39Db8zIOODTppk08/giphy.webp"
          alt="Are you ready?"
        />
        <ConfirmationMessage>
          {message}
        </ConfirmationMessage>
        <ButtonList>
          <Button
            icon={IoMdArrowBack}
            iconPosition="left"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            icon={IoIosRocket}
            iconPosition="left"
            onClick={onConfirm}
          >
            Let&apos;s go !!
          </Button>
        </ButtonList>
      </ConfirmationContainer>
    </Wrapper>
  );
};

export default WaitingForConfirmation;
