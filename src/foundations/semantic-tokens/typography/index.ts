import type {
  SemanticTypographyToken,
  SemanticTypographyTokens,
  TypographyRole,
} from './types';

export const typographyRoleNameByRole: Record<TypographyRole, string> = {
  title1: 'Title 1',
  title2: 'Title 2',
  title3: 'Title 3',
  title4: 'Title 4',
  title5: 'Title 5',
  title6: 'Title 6',
  title7: 'Title 7',
  title8: 'Title 8',
  text1: 'Text 1',
  text2: 'Text 2',
  text3: 'Text 3',
  text4: 'Text 4',
  btn1: 'Button 1',
  btn2: 'Button 2',
  btn3: 'Button 3',
  cap1: 'Caption 1',
  cap2: 'Caption 2',
};

const title1: SemanticTypographyToken = {
  fontSize: '7xl',
  lineHeight: '6xl',
  fontWeight: 'medium',
};

const title2: SemanticTypographyToken = {
  fontSize: '6xl',
  lineHeight: '5xl',
  fontWeight: 'medium',
};

const title3: SemanticTypographyToken = {
  fontSize: '5xl',
  lineHeight: '4xl',
  fontWeight: 'medium',
};

const title4: SemanticTypographyToken = {
  fontSize: '4xl',
  lineHeight: '3xl',
  fontWeight: 'medium',
};

const title5: SemanticTypographyToken = {
  fontSize: '3xl',
  lineHeight: '2xl',
  fontWeight: 'medium',
};

const title6: SemanticTypographyToken = {
  fontSize: '2xl',
  lineHeight: 'xl',
  fontWeight: 'medium',
};

const title7: SemanticTypographyToken = {
  fontSize: 'xl',
  lineHeight: 'lg',
  fontWeight: 'medium',
};

const title8: SemanticTypographyToken = {
  fontSize: 'md',
  lineHeight: 'sm',
  fontWeight: 'medium',
};

const text1: SemanticTypographyToken = {
  fontSize: 'xl',
  lineHeight: 'xl',
};

const text2: SemanticTypographyToken = {
  fontSize: 'lg',
  lineHeight: 'lg',
};

const text3: SemanticTypographyToken = {
  fontSize: 'md',
  lineHeight: 'lg',
};

const text4: SemanticTypographyToken = {
  fontSize: 'sm',
  lineHeight: 'md',
};

const btn1: SemanticTypographyToken = {
  fontSize: 'xl',
  lineHeight: 'lg',
  fontWeight: 'medium',
};

const btn2: SemanticTypographyToken = {
  fontSize: 'md',
  lineHeight: 'sm',
  fontWeight: 'medium',
};

const btn3: SemanticTypographyToken = {
  fontSize: 'xs',
  lineHeight: 'xs',
  fontWeight: 'medium',
};

const cap1: SemanticTypographyToken = {
  fontSize: 'xs',
  lineHeight: 'xs',
  fontWeight: 'regular',
};

const cap2: SemanticTypographyToken = {
  fontSize: '2xs',
  lineHeight: 'xs',
  fontWeight: 'regular',
};

export const semanticTypographyTokenByRole: SemanticTypographyTokens = {
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  text1,
  text2,
  text3,
  text4,
  btn1,
  btn2,
  btn3,
  cap1,
  cap2,
};

export * from './types';
