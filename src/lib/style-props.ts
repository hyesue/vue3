//import type {PropOptions} from 'vue';

import type {ResponsiveProp} from './map-responsive-classes';

import type {
  BorderRadius,
  BorderWidth,
  Color,
  ColorRole,
  FontSize,
  FontWeight,
  LineHeight,
  Size,
  Spacing,
  TypographyRole,
} from '../foundations';

export const stylePropOptions: PropOptions = {
  type: [String, Array, Object],
  required: false,
};

export type StylePropOptions<T extends string = string> = PropOptions<
  ResponsiveProp<T>
>;

export interface StyleProps {
  /**
   * Border
   */
  borderWidth: StylePropOptions<BorderWidth>;
  borderStyle: StylePropOptions<string>;
  borderColor: StylePropOptions<Color | ColorRole>;
  borderTopWidth: StylePropOptions<BorderWidth>;
  borderTopStyle: StylePropOptions<string>;
  borderTopColor: StylePropOptions<Color | ColorRole>;
  borderRightWidth: StylePropOptions<BorderWidth>;
  borderRightStyle: StylePropOptions<string>;
  borderRightColor: StylePropOptions<Color | ColorRole>;
  borderBottomWidth: StylePropOptions<BorderWidth>;
  borderBottomStyle: StylePropOptions<string>;
  borderBottomColor: StylePropOptions<Color | ColorRole>;
  borderLeftWidth: StylePropOptions<BorderWidth>;
  borderLeftStyle: StylePropOptions<string>;
  borderLeftColor: StylePropOptions<Color | ColorRole>;

  /**
   * Border Radius
   */
  radius: StylePropOptions<BorderRadius>;
  topRadius: StylePropOptions<BorderRadius>;
  rightRadius: StylePropOptions<BorderRadius>;
  bottomRadius: StylePropOptions<BorderRadius>;
  leftRadius: StylePropOptions<BorderRadius>;
  topLeftRadius: StylePropOptions<BorderRadius>;
  topRightRadius: StylePropOptions<BorderRadius>;
  bottomRightRadius: StylePropOptions<BorderRadius>;
  bottomLeftRadius: StylePropOptions<BorderRadius>;

  /**
   * Spacing
   */
  margin: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  m: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginTop: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  mt: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginRight: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  mr: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginBottom: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  mb: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginLeft: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  ml: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginX: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  mx: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  marginY: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  my: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  padding: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  p: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingTop: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  pt: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingRight: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  pr: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingBottom: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  pb: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingLeft: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  pl: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingX: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  px: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  paddingY: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;
  py: StylePropOptions<Spacing | `-${Spacing}` | 'auto'>;

  /**
   * Size
   */
  width: StylePropOptions<Size | 'auto'>;
  w: StylePropOptions<Size | 'auto'>;
  height: StylePropOptions<Size | 'auto'>;
  h: StylePropOptions<Size | 'auto'>;
  minWidth: StylePropOptions<Size | 'auto'>;
  minW: StylePropOptions<Size | 'auto'>;
  maxWidth: StylePropOptions<Size | 'auto'>;
  maxW: StylePropOptions<Size | 'auto'>;
  minHeight: StylePropOptions<Size | 'auto'>;
  minH: StylePropOptions<Size | 'auto'>;
  maxHeight: StylePropOptions<Size | 'auto'>;
  maxH: StylePropOptions<Size | 'auto'>;

  /**
   * Background
   */
  backgroundImage: StylePropOptions<string>;
  bgImage: StylePropOptions<string>;
  backgroundSize: StylePropOptions<string>;
  bgSize: StylePropOptions<string>;
  backgroundPosition: StylePropOptions<string>;
  bgPosition: StylePropOptions<string>;
  backgroundRepeat: StylePropOptions<string>;
  bgRepeat: StylePropOptions<string>;
  backgroundAttachment: StylePropOptions<string>;
  bgAttachment: StylePropOptions<string>;

  /**
   * Typography
   */
  fontSize: StylePropOptions<FontSize | TypographyRole>;
  lineHeight: StylePropOptions<LineHeight | TypographyRole>;
  fontWeight: StylePropOptions<FontWeight | TypographyRole>;

  /**
   * Color
   */
  color: StylePropOptions<Color | ColorRole>;
  backgroundColor: StylePropOptions<Color | ColorRole>;
}

export const styleProps: StyleProps = {
  borderWidth: stylePropOptions,
  borderStyle: stylePropOptions,
  borderColor: stylePropOptions,
  borderTopWidth: stylePropOptions,
  borderTopStyle: stylePropOptions,
  borderTopColor: stylePropOptions,
  borderRightWidth: stylePropOptions,
  borderRightStyle: stylePropOptions,
  borderRightColor: stylePropOptions,
  borderBottomWidth: stylePropOptions,
  borderBottomStyle: stylePropOptions,
  borderBottomColor: stylePropOptions,
  borderLeftWidth: stylePropOptions,
  borderLeftStyle: stylePropOptions,
  borderLeftColor: stylePropOptions,
  radius: stylePropOptions,
  topRadius: stylePropOptions,
  rightRadius: stylePropOptions,
  bottomRadius: stylePropOptions,
  leftRadius: stylePropOptions,
  topLeftRadius: stylePropOptions,
  topRightRadius: stylePropOptions,
  bottomRightRadius: stylePropOptions,
  bottomLeftRadius: stylePropOptions,
  margin: stylePropOptions,
  m: stylePropOptions,
  marginTop: stylePropOptions,
  mt: stylePropOptions,
  marginRight: stylePropOptions,
  mr: stylePropOptions,
  marginBottom: stylePropOptions,
  mb: stylePropOptions,
  marginLeft: stylePropOptions,
  ml: stylePropOptions,
  marginX: stylePropOptions,
  mx: stylePropOptions,
  marginY: stylePropOptions,
  my: stylePropOptions,
  padding: stylePropOptions,
  p: stylePropOptions,
  paddingTop: stylePropOptions,
  pt: stylePropOptions,
  paddingRight: stylePropOptions,
  pr: stylePropOptions,
  paddingBottom: stylePropOptions,
  pb: stylePropOptions,
  paddingLeft: stylePropOptions,
  pl: stylePropOptions,
  paddingX: stylePropOptions,
  px: stylePropOptions,
  paddingY: stylePropOptions,
  py: stylePropOptions,
  width: stylePropOptions,
  w: stylePropOptions,
  height: stylePropOptions,
  h: stylePropOptions,
  minWidth: stylePropOptions,
  minW: stylePropOptions,
  maxWidth: stylePropOptions,
  maxW: stylePropOptions,
  minHeight: stylePropOptions,
  minH: stylePropOptions,
  maxHeight: stylePropOptions,
  maxH: stylePropOptions,
  backgroundImage: stylePropOptions,
  bgImage: stylePropOptions,
  backgroundSize: stylePropOptions,
  bgSize: stylePropOptions,
  backgroundPosition: stylePropOptions,
  bgPosition: stylePropOptions,
  backgroundRepeat: stylePropOptions,
  bgRepeat: stylePropOptions,
  backgroundAttachment: stylePropOptions,
  bgAttachment: stylePropOptions,
  fontSize: stylePropOptions,
  lineHeight: stylePropOptions,
  fontWeight: stylePropOptions,
  color: stylePropOptions,
  backgroundColor: stylePropOptions,
};
