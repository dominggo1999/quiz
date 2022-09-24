import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const StyledBrand = styled(Link)`
  ${tw`
    text-4xl 
    font-bold
    text-red-600
    font-display
  `}
`;
