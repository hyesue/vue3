<script lang="ts">
import {useWindowScroll} from '@vueuse/core';
import {computed, defineComponent} from 'vue';
import type {PropType} from 'vue';

export default defineComponent({
	name: 'STopButton',
	props: {
		/**
		 * Scroll을 이동할 target 요소
		 */
		target: {
			type: Object as PropType<Window | Element>,
			default: () => window,
		},
		/**
		 * TopButton을 표시하기 시작할 최소 높이
		 */
		visibleHeight: {
			type: Number,
			default: 50,
		},
		/**
		 * `Element.scrollTo(options)`
		 *
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
		 */
		scrollToOptions: {
			type: Object as PropType<ScrollToOptions>,
			default: () => ({top: 0, left: 0}),
		},
	},
	setup(props) {
		const {y} = useWindowScroll();

		return {
			isVisible: computed(() => y.value >= props.visibleHeight),
		};
	},
	methods: {
		onClick(event: PointerEvent): void {
			(this.target ?? window).scrollTo(this.scrollToOptions);

			/**
			 * 버튼이 클릭될 때, `click` 이벤트를 방출합니다.
			 *
			 * `[PointerEvent]`
			 *
			 * @event click
			 */
			this.$emit('click', event);
		},
	},
});
</script>

<template>
	<button
		v-show="isVisible"
		class="stds-top-button stove-ui-icon before:ic-control-top-line"
		@click="onClick"
	>
		<span class="sr-only">Scroll to top</span>
	</button>
</template>
