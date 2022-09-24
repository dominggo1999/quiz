import tw, { styled } from 'twin.macro';

export const TimerWrapper = styled.span`
  ${tw`
    text-2xl
    inline-flex
    items-center
  `}

  svg{
    ${tw`
      mr-1
      text-3xl
      text-red-600
    `}
  }
`;
