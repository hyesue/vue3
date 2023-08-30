import type {ExtractPropTypes} from 'vue';
import {computed} from 'vue';

import * as is from '../lib/is';
import {mapResponsiveClasses} from '../lib/map-responsive-classes';
import type {StyleProps} from '../lib/style-props';

import {objectEntries} from 'src/lib/utils';

export const tailwindClassByStyleProp: Record<keyof StyleProps, string> = {
	borderWidth: 'border',
	borderStyle: 'border',
	borderColor: 'border',
	borderTopWidth: 'border-t',
	borderTopStyle: 'border-t',
	borderTopColor: 'border-t',
	borderRightWidth: 'border-r',
	borderRightStyle: 'border-r',
	borderRightColor: 'border-r',
	borderBottomWidth: 'border-b',
	borderBottomStyle: 'border-b',
	borderBottomColor: 'border-b',
	borderLeftWidth: 'border-l',
	borderLeftStyle: 'border-l',
	borderLeftColor: 'border-l',
	radius: 'rounded',
	topRadius: 'rounded-t',
	rightRadius: 'rounded-r',
	bottomRadius: 'rounded-b',
	leftRadius: 'rounded-l',
	topLeftRadius: 'rounded-tl',
	topRightRadius: 'rounded-tr',
	bottomRightRadius: 'rounded-br',
	bottomLeftRadius: 'rounded-bl',
	margin: 'm',
	m: 'm',
	marginTop: 'mt',
	mt: 'mt',
	marginRight: 'mr',
	mr: 'mr',
	marginBottom: 'mb',
	mb: 'mb',
	marginLeft: 'ml',
	ml: 'ml',
	marginX: 'mx',
	mx: 'mx',
	marginY: 'my',
	my: 'my',
	padding: 'p',
	p: 'p',
	paddingTop: 'pt',
	pt: 'pt',
	paddingRight: 'pr',
	pr: 'pr',
	paddingBottom: 'pb',
	pb: 'pb',
	paddingLeft: 'pl',
	pl: 'pl',
	paddingX: 'px',
	px: 'px',
	paddingY: 'py',
	py: 'py',
	width: 'w',
	w: 'w',
	height: 'h',
	h: 'h',
	minWidth: 'min-w',
	minW: 'min-w',
	maxWidth: 'max-w',
	maxW: 'max-w',
	minHeight: 'min-h',
	minH: 'min-h',
	maxHeight: 'max-h',
	maxH: 'max-h',
	backgroundImage: '',
	bgImage: '',
	backgroundSize: 'bg',
	bgSize: 'bg',
	backgroundPosition: 'bg',
	bgPosition: 'bg',
	backgroundRepeat: 'bg',
	bgRepeat: 'bg',
	backgroundAttachment: 'bg',
	bgAttachment: 'bg',
	fontSize: 'text',
	lineHeight: 'leading',
	fontWeight: 'font',
	color: 'text',
	backgroundColor: 'bg',
};

const passStyleProps = ['backgroundImage'];

export const useStyle = (props: Readonly<ExtractPropTypes<StyleProps>>) =>
	computed(() =>
		objectEntries(props)
			.filter(([key]) => key in tailwindClassByStyleProp)
			.filter(([key]) => !passStyleProps.includes(key))
			.map(([key, value]) =>
				mapResponsiveClasses(value, (value) =>
					value.startsWith('-')
						? `-${tailwindClassByStyleProp[key]}-${value.slice(1)}`
						: `${tailwindClassByStyleProp[key]}-${value}`,
				),
			)
			.flat()
			.filter(is.string_),
	);
