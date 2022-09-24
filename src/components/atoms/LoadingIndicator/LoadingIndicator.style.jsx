import tw, { styled, theme } from 'twin.macro';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const prixClipFix = keyframes`
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
`;

export const Loader = styled.div`    
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &::before , &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: ${prixClipFix} 2s linear infinite ;
  }

  &::after{
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg );
    border-color: ${theme`colors.red.500`};
  }
`;

export const LoaderText = styled.span`
  ${tw`
    text-lg 
    mt-4
  `}
`;

export const LoaderWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
  `}

  ${LoaderText}{
    ${({ text }) => !text && tw`hidden`}
  }

  ${({ cover }) => cover && tw`py-52`}
`;
