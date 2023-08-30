<script lang="ts">
import type {SwiperOptions} from 'swiper';
import {ref, computed, defineComponent} from 'vue';
import type {PropType} from 'vue';
import {swiper} from 'vue-awesome-swiper';

import {defaultSwiperOptions} from 'src/components/s-carousel/src/carousel.options';
import {merge} from 'src/lib/utils';

export default defineComponent({
	name: 'SCarousel',
	components: {
		swiper,
	},
	props: {
		/**
		 * @see https://github.com/nolimits4web/Swiper/blob/Swiper4/API.md#stds-carousel-api
		 */
		swiperOptions: {
			type: Object as PropType<SwiperOptions>,
			default: undefined,
		},
	},
	setup(props) {
		const swiperRef = ref(null);

		return {
			swiperRef,
			options: computed(() =>
				merge({}, defaultSwiperOptions, props.swiperOptions),
			),
		};
	},
});
</script>

<template>
	<swiper ref="swiperRef" class="stds-carousel-container" :options="options">
		<template #default>
			<slot />
		</template>

		<!-- Optional controls -->
		<template #pagination>
			<slot name="pagination" />
		</template>

		<template #button-prev>
			<slot name="button-prev" />
		</template>

		<template #button-next>
			<slot name="button-next" />
		</template>
	</swiper>
</template>
