import tw, { styled } from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    px-5
    md:px-6
    bg-red-600
    hover:bg-red-500
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


  ${(p) => {
    switch (p.$type) {
      case 'cancel':
        return tw`bg-blue-400 text-white hover:text-blue-600`;
      default:
        break;
    }
  }}

  /* Icon */
  svg{
    ${tw`
      text-xl
    `}
  }
`;
