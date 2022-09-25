import tw, { styled } from 'twin.macro';

export const ScoreContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full 
    max-w-[24rem] 
    justify-center
    mx-auto
    gap-y-3
    pb-10
  `}

  span{
    ${tw`
      flex
      justify-center
      w-full
    `}
  }
  
  img{
    ${tw`
      mb-3
    `}
  }
`;

export const ScoreLabel = styled.span`
  ${tw`
    text-lg
  `}
`;

export const ScoreValue = styled.span`
  ${tw`
    font-semibold
    text-3xl
    text-red-600
  `}
`;
