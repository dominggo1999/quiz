import tw, { styled } from 'twin.macro';

export const PopoverWrapper = styled.div`
  ${tw`
    absolute
    z-10
    top-full
    w-full
    shadow-lg
    border
    border-blue-400
    bg-blue-400
    rounded-md
    mt-2
  `}
`;
