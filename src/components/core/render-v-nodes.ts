import {defineComponent} from 'vue';

export const RenderVNodes = defineComponent({
	functional: true,
	render: (_, {props}) => props.vNodes,
});
