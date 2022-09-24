import tw, { styled } from 'twin.macro';

export const StyledChoiceItem = styled.li`
  ${tw`
    w-full
    list-none
  `}
`;

export const StyledChoiceButton = styled.button`
  ${tw`
    outline-none
    bg-blue-400
    rounded-sm 
    p-4
    w-full
    border-2
    border-blue-400
    hover:border-red-600
    focus:border-red-600
    text-left
  `}
`;
