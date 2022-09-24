import tw, { styled } from 'twin.macro';

export const StyledContainerIndex = styled.p`
  ${tw`
    text-lg
    text-center
  `}

  span{
    ${tw`
      text-red-600
      font-semibold
    `}
  }
`;
