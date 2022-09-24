import tw, { styled } from 'twin.macro';

export const SelectWrapper = styled.div`
  ${tw`
    w-full
    relative
  `}
`;

export const SelectLabel = styled.span`
  ${tw`
    block 
    font-medium 
    text-lg
    mb-2
    text-red-500
  `}
`;

export const SelectActiveValue = styled.span``;

export const SelectTriggerIcon = styled.span``;

export const SelectTrigger = styled.button`
  ${tw`
    inline-flex
    w-full 
    justify-between
    px-2
    py-1
    relative
    flex-row
    items-center
    justify-between
    rounded-md
    overflow-hidden
    cursor-default
    shadow-sm
    border-2
    outline-none
  `}
  &[aria-expanded="true"], &:focus {
    ${tw`
      border-red-500
    `}
  }
  &[aria-expanded="true"] ${SelectTriggerIcon}, 
  &:focus ${SelectTriggerIcon}{
    ${tw`
      text-red-500
    `}
  }
`;
