import tw, { styled } from 'twin.macro';

export const StyledOption = styled.li`
  ${tw`
    m-1
    rounded-md
    py-2
    px-2
    text-sm
    outline-none
    cursor-pointer
    flex
    items-center
    justify-between
    text-white
  `}
  ${({ isFocused }) => isFocused && tw`bg-red-500`}
  ${({ isSelected }) => isSelected && tw`font-bold`}
  ${(p) => {
    if (p.isFocused || p.isSelected) {
      if (p.isFocused) {
        return tw`text-white`;
      }
      return tw`text-red-500`;
    } if (p.isDisabled) {
      return tw`text-gray-200`;
    }
  }}
`;

export const SelectedOptionIcon = styled.span`
  ${tw`
    inline-flex 
    text-xl
  `}
`;

export const StyledList = styled.ul`
  ${tw`
    outline-none
    overflow-auto 
    max-h-[20rem]
  `}
`;
