import tw, { styled } from 'twin.macro';

export const StyledChoiceItem = styled.li`
  ${tw`
    bg-[#232148]
    rounded-sm 
    p-4
    w-full
    border-2
    border-[#232148]
    hover:border-red-600
    list-none
  `}
`;
