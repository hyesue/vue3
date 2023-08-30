import {useSlots} from 'vue';

export const useDefaultSlots = () => {
	return useSlots().default?.() ?? [];
};
