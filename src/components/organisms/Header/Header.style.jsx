import tw, { styled } from 'twin.macro';

export const HeaderWrapper = styled.header`
  ${tw`
    flex
    items-center 
    max-w-container
    mx-auto
    py-7
    px-4 
    relative
    justify-between
  `}

  .hamburger-menu{
    ${tw`
      md:hidden
    `}
  }
`;
