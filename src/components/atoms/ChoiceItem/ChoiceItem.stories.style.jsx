import tw, { styled } from 'twin.macro';

export const StyledChoiceItem = styled.div`
  ${tw`
    w-full
    list-none
  `}
`;

export const StyledChoiceButton = styled.button`
  ${tw`
    outline-none
    bg-[#232148]
    rounded-sm 
    p-4
    w-full
    border-2
    border-[#232148]
    hover:border-red-600
    focus:border-red-600
    text-left
  `}
`;
