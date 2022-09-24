import tw, { styled } from 'twin.macro';

export const StyledWrapper = styled.div`
  ${tw` 
    max-w-container
    mx-auto
    px-4
  `}

  ${({ direction }) => {
    switch (direction) {
      case 'row':
        return tw`flex-row`;
      case 'col':
        return tw`flex-col`;
      default:
        break;
    }
  }}


  ${({ flex }) => (flex ? tw`flex` : tw`block`)}
`;
