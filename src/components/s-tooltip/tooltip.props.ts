export const TOOLTIP_PLACEMENTS = {
	'top': 'top',
	'top-start': 'top-start',
	'top-end': 'top-end',
	'bottom': 'bottom',
	'bottom-start': 'bottom-start',
	'bottom-end': 'bottom-end',
	'left': 'left',
	'right': 'right',
} as const;

export type TooltipPlacements = keyof typeof TOOLTIP_PLACEMENTS;
