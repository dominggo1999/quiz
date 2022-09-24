import tw, { styled } from 'twin.macro';

export const ConfirmationContainer = styled.div`
  ${tw`
    w-full
    flex 
    flex-col
    items-center
    max-w-[24rem]
    mx-auto
    text-center
    py-20
  `}
`;

export const ConfirmationMessage = styled.div`
  ${tw`
    flex
    text-lg
  `}
`;
