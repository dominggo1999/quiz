import tw, { styled } from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    px-5
    md:px-6
    bg-red-500
    hover:bg-red-400
    rounded-sm
    text-blue-700
    self-start
    flex
    items-center
    gap-x-3
    font-medium
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

  ${(p) => (p.$isCallToAction ? tw`py-3 md:(py-4 text-lg)` : tw`py-2`)}
  
  ${(p) => p.$isFullWidth && tw`w-full justify-center`}


  /* Icon */
  svg{
    ${tw`
      text-xl
    `}
  }
`;
