import type {SvgIcons} from '../../../foundations';

/* prettier-ignore */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export const SVG_ICON_COMPONENTS: Record<SvgIcons, () => Promise<typeof import("*.vue")>> = {
	'ic-logo-apple-color': () => import('./ic-logo-apple-color.vue'),
	'ic-logo-discord-color': () => import('./ic-logo-discord-color.vue'),
	'ic-logo-facebook-color': () => import('./ic-logo-facebook-color.vue'),
	'ic-logo-google-color': () => import('./ic-logo-google-color.vue'),
	'ic-logo-google-playstore-color': () => import('./ic-logo-google-playstore-color.vue'),
	'ic-logo-instagram-color': () => import('./ic-logo-instagram-color.vue'),
	'ic-logo-kakaotalk-color': () => import('./ic-logo-kakaotalk-color.vue'),
	'ic-logo-naver-color': () => import('./ic-logo-naver-color.vue'),
	'ic-logo-onestore-color': () => import('./ic-logo-onestore-color.vue'),
	'ic-logo-stove-color': () => import('./ic-logo-stove-color.vue'),
	'ic-logo-stove-symbol-color': () => import('./ic-logo-stove-symbol-color.vue'),
	'ic-logo-twitter-color': () => import('./ic-logo-twitter-color.vue'),
	'ic-logo-window-color': () => import('./ic-logo-window-color.vue'),
	'ic-logo-youtube-color': () => import('./ic-logo-youtube-color.vue'),
};
