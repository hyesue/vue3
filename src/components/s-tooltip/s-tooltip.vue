<script lang="ts">
import type {Instance} from 'tippy.js';
import {defineComponent, ref} from 'vue';
import type {PropType} from 'vue';
import {TippyComponent} from 'vue-tippy/dist/vue-tippy.esm';

import type {TooltipPlacements} from './tooltip.props';
import {TOOLTIP_PLACEMENTS} from './tooltip.props';

import {objectKeys} from 'src/lib/utils';

export default defineComponent({
	name: 'STooltip',
	components: {
		tippy: TippyComponent,
	},
	/**
	 * @/s-tooltip은 내부적으로 vue-tippy v4를 사용합니다.
	 *
	 * vue-tippy의 옵션을 커스텀하여 props로 제공합니다.
	 *
	 * @see https://kabbouchi.github.io/vue-tippy/4.0/all-options.html
	 */
	props: {
		/**
		 * 툴팁 화살표 표시 여부
		 */
		arrow: {
			type: Boolean,
			default: true,
		},
		/**
		 * 툴팁 내용.
		 *
		 * 문자열이나 HTML 요소, 내용을 반환하는 함수를 사용할 수 있습니다.
		 */
		content: {
			type: [String, Element, Function],
			default: undefined,
		},
		/**
		 * 툴팁을 표시할 CSS transition 애니메이션 ms 단위 시간
		 */
		duration: {
			type: [Number, Array] as PropType<number | number[]>,
			default: 0,
		},
		/**
		 * 자동 툴팁 뒤집기 여부.
		 *
		 * 공간이 충분하지 않은 경우, 자동으로 가능한 뷰포트 내에 배치되도록 팁이 뒤집을지 여부를 설정합니다.
		 */
		useFlip: {
			type: Boolean,
			default: true,
		},
		/**
		 * 위치가 업데이트되는 경우(예: 스크롤, 크기 조정 또는 도구 설명의 크기가 변경된 경우) 툴팁을 뒤집을지 여부를 설정합니다.
		 */
		flipOnUpdate: {
			type: Boolean,
			default: true,
		},
		/**
		 * 툴팁 방향
		 *
		 * 참조 요소를 기준으로 툴팁을 배치할 방향을 설정합니다.
		 */
		placement: {
			type: String as PropType<TooltipPlacements>,
			default: TOOLTIP_PLACEMENTS.bottom,
			validator: (value: TooltipPlacements) =>
				objectKeys(TOOLTIP_PLACEMENTS).includes(value),
		},
		/**
		 * 툴팁을 표시하게 하는 이벤트 (공백으로 구분되는 문자열)
		 */
		trigger: {
			type: String,
			default: 'mouseenter focus',
		},
		/**
		 * z-index
		 *
		 * 툴팁의 z-index를 설정합니다.
		 */
		zIndex: {
			type: Number,
			default: 600,
		},
	},
	setup() {
		const tippyRef = ref(null);

		return {
			tippyRef,
		};
	},

	methods: {
		onHidden(instance: Instance): void {
			/**
			 * Tooltip이 완전히 숨겨질 때 `hidden` 이벤트를 방출합니다.
			 *
			 * `[Instance]`
			 *
			 * @event hidden
			 */
			this.$emit('hidden', instance);
		},
		onHide(instance: Instance): void {
			/**
			 * Tooltip이 숨겨지기 시작할 때, `hide` 이벤트를 방출합니다.
			 *
			 * `[Instance]`
			 *
			 * @event hide
			 */
			this.$emit('hide', instance);
		},
		onMount(instance: Instance): void {
			/**
			 * Tooltip이 DOM에 마운트할 때 `mount` 이벤트를 방출합니다.
			 *
			 * `[Instance]`
			 *
			 * @event mount
			 */
			this.$emit('mount', instance);
		},
		onShow(instance: Instance): void {
			/**
			 * Tooltip이 보여지기 시작할 때, `show` 이벤트를 방출합니다.
			 *
			 * `[Instance]`
			 *
			 * @event show
			 */
			this.$emit('show', instance);
		},
		onShown(instance: Instance): void {
			/**
			 * Tooltip이 완전히 보여질 때 `shown` 이벤트를 방출합니다.
			 *
			 * `[Instance]`
			 *
			 * @event shown
			 */
			this.$emit('shown', instance);
		},
	},
});
</script>

<template>
	<tippy
		ref="tippyRef"
		class="stds-tooltip"
		v-bind="$attrs"
		:arrow="arrow"
		:content="content"
		:duration="duration"
		:flip="useFlip"
		:flipOnUpdate="flipOnUpdate"
		:placement="placement"
		:trigger="trigger"
		:zIndex="zIndex"
		:onHidden="onHidden"
		:onHide="onHide"
		:onMount="onMount"
		:onShow="onShow"
		:onShown="onShown"
	>
		<template #trigger>
			<!-- @slot 툴팁을 표시하게 할 타겟 요소 -->
			<slot name="target" />
		</template>

		<!-- @slot 툴팁 내에 표시할 컴포넌트 -->
		<slot />
	</tippy>
</template>
