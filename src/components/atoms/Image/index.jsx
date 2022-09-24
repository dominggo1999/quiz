import React from 'react';
import { ImageWrapper } from './Image.style';

const Image = ({
  width = 837,
  height,
  alt,
  src,
  ...restProps
}) => {
  return (
    <ImageWrapper
      className="image-wrapper"
    >
      <img
        alt={alt}
        src={src}
        {...restProps}
        width={width}
        height={height}
      />
    </ImageWrapper>
  );
};

export default Image;
