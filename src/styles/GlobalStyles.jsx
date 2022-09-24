import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased
      bg-blue-700
      font-primary
      text-white
    `}

    h1,h2,h3,h4,h5,h6 {
      ${tw`
        font-display
      `}
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
