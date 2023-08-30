export const RADIO_SIZES = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
} as const;

export type RadioSize = keyof typeof RADIO_SIZES;

export const RADIO_ALIGNS = {
	top: 'top',
	middle: 'middle',
} as const;

export type RadioAlign = keyof typeof RADIO_ALIGNS;
