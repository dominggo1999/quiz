import React from 'react';
import { Loader, LoaderWrapper, LoaderText } from './LoadingIndicator.style';

const LoadingIndicator = ({ text = 'Loading...', cover = true }) => {
  return (
    <LoaderWrapper
      cover={cover}
      text={text}
    >
      <Loader />
      <LoaderText>{text}</LoaderText>
    </LoaderWrapper>
  );
};

export default LoadingIndicator;
