import tw, { styled } from 'twin.macro';

export const FormWrapper = styled.div`
  ${tw`
    flex 
    flex-col
    max-w-[400px]
    mx-auto
    gap-y-3
    mt-20
    px-4
  `}
`;

export const FormTitle = styled.h1`
  ${tw`
    text-3xl
    sm:text-4xl
    font-extrabold
    text-red-600
  `}
`;

export const FormDescription = styled.p`
  ${tw`
    sm:text-lg
  `}
`;
