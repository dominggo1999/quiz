import tw, { styled } from 'twin.macro';

export const ImageWrapper = styled.div`
  ${tw`
    w-full 
  `}

  img{
    ${tw`
      w-full
      max-h-full 
      max-w-full
    `}
  }
`;
