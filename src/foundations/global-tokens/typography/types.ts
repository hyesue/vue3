import type {KebabCase} from 'type-fest';

import type {globalTypographyToken} from '.';

export type FontSize =
  | 'none'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export type LineHeight =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type FontWeight = 'regular' | 'medium' | 'bold';

export interface GlobalTypographyToken {
  fontSize: Record<FontSize, string>;
  lineHeight: Record<LineHeight, string>;
  fontWeight: Record<FontWeight, string>;
}

export type FontAttributes = KebabCase<keyof typeof globalTypographyToken>;
