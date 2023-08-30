export const CHECKBOX_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type CheckboxSize = keyof typeof CHECKBOX_SIZES;

export const CHECKBOX_ALIGNS = {
  top: 'top',
  middle: 'middle',
} as const;

export type CheckboxAlign = keyof typeof CHECKBOX_ALIGNS;
