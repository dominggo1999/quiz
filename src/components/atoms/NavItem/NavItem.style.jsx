import tw, { styled } from 'twin.macro';

export const StyledNavItem = styled.li`
  ${tw`
    text-white
    list-none
    hover:text-red-500
  `}

  .active{
    ${tw`
      text-red-500
    `}
  }
`;
