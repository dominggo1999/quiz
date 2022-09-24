import tw, { styled } from 'twin.macro';

export const HeroContainer = styled.main`
  ${tw`
    grid 
    lg:grid-cols-2
    gap-x-10
    gap-y-8
    items-center
    min-h-[600px]
    py-20
  `}

  & > *:nth-child(1){
    ${tw`
      order-2
      lg:order-1
    `}
  }

  & > *:nth-child(2){
    ${tw`
      order-1
      lg:order-2
    `}
  }
`;
