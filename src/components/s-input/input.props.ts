export const INPUT_SIZES = {
  sm: 'sm',
  lg: 'lg',
} as const;

export type InputSizes = keyof typeof INPUT_SIZES;

export const INPUT_VARIANTS = {
  fill: 'fill',
  outline: 'outline',
} as const;

export type InputVariant = keyof typeof INPUT_VARIANTS;

export const INPUT_VALIDATION_STATES = {
  none: 'none',
  error: 'error',
  warning: 'warning',
  success: 'success',
  informational: 'informational',
} as const;

export type InputValidationState = keyof typeof INPUT_VALIDATION_STATES;
