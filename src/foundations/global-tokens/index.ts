import {borderRadius} from './border-radius';
import {borderWidth} from './border-width';
import {boxShadow} from './box-shadow';
import {breakpoint} from './breakpoint';
import {globalColorToken} from './color';
import {icon} from './icon';
import {size} from './size';
import {spacing} from './spacing';
import {globalTypographyToken} from './typography';
import {zIndex} from './z-index';

export const stdsGlobalToken = {
  borderRadius,
  borderWidth,
  boxShadow,
  breakpoint,
  color: globalColorToken,
  icon,
  spacing,
  size,
  typography: globalTypographyToken,
  zIndex,
} as const;

export * from './constants';
export * from './types';
