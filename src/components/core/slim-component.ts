import {defineComponent} from 'vue';

import {useDefaultSlots} from 'src/composables';

export const SlimComponent = defineComponent({
	name: 'SlimComponent',
	setup() {
		const slots = useDefaultSlots();

		return () => slots[0];
	},
});
