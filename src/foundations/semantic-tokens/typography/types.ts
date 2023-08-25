import type {FontSize, FontWeight, LineHeight} from '../../index';

export type TypographyRole =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6'
  | 'title7'
  | 'title8'
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'btn1'
  | 'btn2'
  | 'btn3'
  | 'cap1'
  | 'cap2';

export interface SemanticTypographyToken {
  fontSize: FontSize;
  lineHeight: LineHeight;
  fontWeight?: FontWeight;
}

export type SemanticTypographyTokens = Record<
  TypographyRole,
  SemanticTypographyToken
>;
