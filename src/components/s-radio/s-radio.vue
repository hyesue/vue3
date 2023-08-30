<script lang="ts">
import {defineComponent, computed} from 'vue';
import type {PropType} from 'vue';

import type {RadioAlign, RadioSize} from './radio.props';
import {RADIO_ALIGNS, RADIO_SIZES} from './radio.props';

import * as is from 'src/lib/is';
import {objectKeys} from 'src/lib/utils';

export default defineComponent({
	name: 'SRadio',
	model: {
		prop: 'isChecked',
		event: 'checked',
	},
	props: {
		/**
		 * Radio Id
		 */
		id: {
			type: String,
			default: undefined,
		},
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
		 * Radio 텍스트 정렬
		 */
		align: {
			type: String as PropType<RadioAlign>,
			default: RADIO_ALIGNS.middle,
			validator: (value: RadioAlign) =>
				objectKeys(RADIO_ALIGNS).includes(value),
		},
		/**
		 * Radio 체크 여부
		 */
		isChecked: {
			type: Boolean,
			default: false,
		},
		/**
		 * Radio 비활성 여부
		 */
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, {slots}) {
		const hasText = computed(() => !is.undefined_(slots.default));

		return {
			radioContainerClasses: computed(() => ({
				'stds-radio-container': true,
				'items-start': props.align === RADIO_ALIGNS.top,
				'items-center': props.align === RADIO_ALIGNS.middle,
				'min-h-16 min-w-16': props.size === RADIO_SIZES.sm,
				'min-h-20 min-w-20': props.size === RADIO_SIZES.md,
				'min-h-24 min-w-24': props.size === RADIO_SIZES.lg,
			})),
			radioClasses: computed(() => ({
				'stds-radio peer': true,
				'top-2': props.align === RADIO_ALIGNS.top,
				'h-16 w-16 after:h-8 after:w-8': props.size === RADIO_SIZES.sm,
				'h-20 w-20 after:h-[1rem] after:w-[1rem]':
					props.size === RADIO_SIZES.md,
				'h-24 w-24 after:h-12 after:w-12': props.size === RADIO_SIZES.lg,
			})),
			labelClasses: computed(() => ({
				'stds-radio-label': hasText.value,
				'stds-radio-label-sr-only': !hasText.value,
				'text-text3 leading-text3':
					hasText.value &&
					(props.size === RADIO_SIZES.sm || props.size === RADIO_SIZES.md),
				'text-text1 leading-text1':
					hasText.value && props.size === RADIO_SIZES.lg,
			})),
			hasText,
		};
	},
	methods: {
		onChange(event: Event): void {
			if (is.HTMLElement(event.target, HTMLInputElement)) {
				/**
				 * Radio의 상태가 변경되었을 때 `change` 이벤트를 방출합니다.
				 *
				 * `[Event]`
				 *
				 * @event change
				 */
				this.$emit('change', event);
				/**
				 * Radio의 상태가 변경되었을 때 `checked` 이벤트를 방출합니다.
				 *
				 * `[boolean]`
				 *
				 * @event checked
				 */
				this.$emit('checked', event.target.checked);
			}
		},
	},
});
</script>

<template>
	<div :class="radioContainerClasses">
		<input
			v-bind="$attrs"
			:id="id"
			:class="radioClasses"
			type="radio"
			:name="name"
			:value="String(value)"
			:checked="isChecked"
			:disabled="isDisabled"
			@change="onChange"
		/>
		<label :class="labelClasses" :for="id">
			<!-- @slot Radio 텍스트 -->
			<slot />
		</label>
	</div>
</template>
