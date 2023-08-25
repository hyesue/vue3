import {getSemanticColorToken} from './color';
import {semanticTypographyTokenByRole} from './typography';

export const stdsSemanticToken = {
  color: getSemanticColorToken,
  typography: semanticTypographyTokenByRole,
} as const;

export * from './color';
export * from './typography';
