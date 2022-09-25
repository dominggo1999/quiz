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

  img{
    ${tw`
      rounded
      py-10
    `}

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
