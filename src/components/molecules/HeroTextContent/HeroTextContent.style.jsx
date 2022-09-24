import tw, { styled } from 'twin.macro';

export const TextContent = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-4
  `}

  .button-list{
    ${tw`
      mt-3
    `}
  }
`;

export const Title = styled.h1`
  ${tw`
    text-red-500
    text-3xl
    md:text-4xl  
    lg:text-5xl
    font-bold
  `}
`;

export const Description = styled.p`
  ${tw`
    md:text-lg
    lg:text-xl
  `}
`;
