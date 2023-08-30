export const DROPDOWN_VARIANTS = {
  text: 'text',
  line: 'line',
} as const;

export type DropdownVariant = keyof typeof DROPDOWN_VARIANTS;

export const DROPDOWN_SIZES = {
  sm: 'sm',
  lg: 'lg',
} as const;

export type DropdownSize = keyof typeof DROPDOWN_SIZES;
