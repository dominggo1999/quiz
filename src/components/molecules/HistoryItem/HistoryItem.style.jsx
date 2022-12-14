import tw, { styled } from 'twin.macro';

export const HistoryItemContainer = styled.div`
  ${tw`
    bg-blue-400
    rounded-sm 
    p-4
    w-full
    text-left
    flex
    flex-col 
    gap-y-1
  `}

  button{
    ${tw`
      mt-3
      ml-auto
    `}
  }
`;

export const SavedTime = styled.span`
  ${tw`
    text-red-600
    inline-flex
    text-lg 
    font-semibold 
    mb-1
  `}
`;
