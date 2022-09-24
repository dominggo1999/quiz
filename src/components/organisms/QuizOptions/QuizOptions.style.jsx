import tw, { styled } from 'twin.macro';

export const QuizOptionsWrapper = styled.div`
  ${tw`
    max-w-container 
    px-4
    mx-auto
  `}
`;

export const QuizOptionsForm = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-7
    mx-auto
    max-w-[30rem]
  `}
`;
