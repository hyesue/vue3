<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType, VNode} from 'vue';

import type {RadioSize} from './radio.props';
import {RADIO_SIZES} from './radio.props';

import {objectKeys} from 'src/lib/utils';
import {cleanChildren, cloneVNodeElement} from 'src/lib/v-dom';

export default defineComponent({
	name: 'SRadioGroup',
	model: {
		prop: 'value',
		event: 'change',
	},
	props: {
		/**
		 * Radio 이름
		 */
		name: {
			type: String,
			default: undefined,
		},
		/**
		 * Radio 값
		 */
		value: {
			type: [String, Boolean, Number],
			default: undefined,
		},
		/**
		 * Radio 사이즈
		 */
		size: {
			type: String as PropType<RadioSize>,
			default: RADIO_SIZES.md,
			validator: (value: RadioSize) => objectKeys(RADIO_SIZES).includes(value),
		},
		/**
		 * Radio 비활성 여부
		 */
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onChange(value: string | boolean | number): void {
			/**
			 * Radio의 값이 변경되었을 때 `change` 이벤트를 방출합니다.
			 *
			 * `[string]`
			 *
			 * @event change
			 */
			this.$emit('change', value);
		},
	},
	render(h): VNode {
		/**
		 * @slot Radio 컴포넌트 리스트
		 */
		const validChildren = cleanChildren(this.$slots.default);

		const clones = validChildren.map((vNode, index) => {
			if (!vNode.tag) return;

			const vNodeProps = (vNode?.componentOptions?.propsData ?? {}) as Record<
				string,
				unknown
			> & {value: string | number | boolean};
			const vNodeListeners = (vNode?.componentOptions?.listeners ??
				{}) as Record<string, (event: Event) => void>;

			const clone = cloneVNodeElement(
				vNode,
				{
					props: {
						name: this.name,
						id: vNodeProps.id ?? `${this.name}-${index}`,
						size: vNodeProps.size ?? this.size,
						isChecked: vNodeProps.value === this.value,
					},
					on: {
						...vNodeListeners,
						change: (event: Event) => {
							vNodeListeners.change?.(event);
							this.onChange(vNodeProps.value);
						},
					},
				},
				h,
			);

			return h('div', {}, [clone]);
		});

		return h(
			'div',
			{
				attrs: {
					role: 'radiogroup',
				},
			},
			clones,
		);
	},
});
</script>
