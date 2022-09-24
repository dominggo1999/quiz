import tw, { styled } from 'twin.macro';

export const Bar = styled.div`
  ${tw`
    w-full
    relative
    rounded-full 
    overflow-hidden 
    bg-[#232148]
    h-2
  `}
`;

export const Thumb = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0
    bg-red-600
    w-0
    h-full
    rounded-full
  `}

  transition : width ease-in-out 300ms; 
`;
