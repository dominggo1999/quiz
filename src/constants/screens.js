import { theme } from 'twin.macro';

const tailwindScreens = theme`screens`;
export const screens = {};
Object.keys(tailwindScreens).forEach((key) => {
  screens[key] = parseInt(tailwindScreens[key].replace('px', ''), 10);
});
