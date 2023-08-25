import type {
  FontSize,
  FontWeight,
  GlobalTypographyToken,
  LineHeight,
} from './types';

const fontSize: Record<FontSize, string> = {
  'none': '0',
  '2xs': '1.1rem',
  'xs': '1.2rem',
  'sm': '1.3rem',
  'md': '1.4rem',
  'lg': '1.5rem',
  'xl': '1.6rem',
  '2xl': '1.8rem',
  '3xl': '2.0rem',
  '4xl': '2.4rem',
  '5xl': '3.2rem',
  '6xl': '4.2rem',
  '7xl': '5rem',
};

const lineHeight: Record<LineHeight, string> = {
  'xs': '1.8rem',
  'sm': '2.0rem',
  'md': '2.2rem',
  'lg': '2.4rem',
  'xl': '2.6rem',
  '2xl': '3.0rem',
  '3xl': '3.4rem',
  '4xl': '4.4rem',
  '5xl': '5.6rem',
  '6xl': '7rem',
};

const fontWeight: Record<FontWeight, string> = {
  regular: '400',
  medium: '500',
  bold: '700',
};

export const globalTypographyToken: GlobalTypographyToken = {
  fontSize,
  lineHeight,
  fontWeight,
};
