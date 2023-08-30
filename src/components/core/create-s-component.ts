import type {PropType, VNode} from 'vue';
import {h, defineComponent} from 'vue';

import * as is from 'src/lib/is';
import {omitBy} from 'src/lib/utils';

export interface CreateSComponentInfo {
	id?: string;
	title?: string;
	type: string;
	props?: Readonly<Record<string, unknown>>;
	children?: SComponentChildren;
}

export type SComponentChildren =
	| Array<string | null | undefined | CreateSComponentInfo>
	| null
	| undefined;

export interface CreateSComponentFunction {
	({id, title, type, props, children}: CreateSComponentInfo): VNode;
}

export const createSComponent: CreateSComponentFunction = ({
	id,
	title,
	type,
	props,
	children,
}) => {
	const vNodeData = {
		props: omitBy(
			{
				id,
				componentTitle: title,
				...props,
			},
			is.null_,
		),
	};

	if (is.nullish(children)) {
		return h(type, vNodeData, children);
	}

	return h(
		type,
		vNodeData,
		children.map((child) => {
			if (is.string_(child)) {
				return child;
			}

			if (is.nullish(child)) {
				return h();
			}

			return createSComponent(child);
		}),
	);
};

export const CreateSComponent = defineComponent({
	functional: true,
	props: {
		id: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			required: true,
		},
		props: {
			type: Object as PropType<Readonly<Record<string, unknown>>>,
			default: null,
		},
		children: {
			type: Array as PropType<SComponentChildren>,
			default: null,
		},
	},
	render: (_, context) => createSComponent(context.props),
});
