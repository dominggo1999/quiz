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
    py-10
  `}

  img{
    ${tw`
      max-w-full
      w-full
      mb-6
    `}

    aspect-ratio : 1/1;
  }
`;

export const ConfirmationMessage = styled.div`
  ${tw`
    flex
    text-lg
  `}
`;
