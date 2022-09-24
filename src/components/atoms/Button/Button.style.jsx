import tw, { styled } from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    px-3 
    bg-blue-500
    rounded-sm
    text-white 
    self-start
    flex
    items-center
    gap-x-3
  `}

  ${(p) => {
    switch (p.$iconPosition) {
      case 'right':
        return tw`flex-row`;
      case 'left':
        return tw`flex-row-reverse`;
      default:
        break;
    }
  }}

  ${(p) => (p.$isCallToAction ? tw`py-3` : tw`py-1`)}
  
  ${(p) => p.$isFullWidth && tw`w-full justify-center`}
`;
