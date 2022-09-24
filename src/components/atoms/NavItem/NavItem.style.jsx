import tw, { styled } from 'twin.macro';

export const StyledNavItem = styled.li`
  ${tw`
    text-white
    list-none
    hover:text-red-600
  `}

  .active{
    ${tw`
      text-red-600
    `}
  }
`;
