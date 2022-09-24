import tw, { styled } from 'twin.macro';

export const StyledNavList = styled.ul`
  ${tw`
    hidden
    md:flex
    justify-end
    gap-x-10
    items-center
    ml-auto
  `}
`;

export const StyledMobileNavList = styled.ul`
  ${tw`
    absolute 
    top-full
    w-full 
    h-52
    md:hidden
    flex 
    flex-col
    left-1/2
    max-w-container 
    -translate-x-1/2 
    px-4
    gap-y-4
    py-3
    bg-blue-700 
    z-50
  `}
`;
