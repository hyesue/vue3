import {defineComponent} from 'vue';

export const RenderVNode = defineComponent({
	functional: true,
	render: (_, {props}) => props.vNode,
});
