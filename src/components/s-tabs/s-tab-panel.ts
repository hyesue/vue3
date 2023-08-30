import type {VNode} from 'vue';
import Vue from 'vue';

export const STabPanel = Vue.extend({
  name: 'STabPanel',
  inject: ['$TabsContext'],
  props: {
    isSelected: Boolean,
  },
  render(h): VNode {
    return h(
      'div',
      {
        attrs: {
          hidden: !this.isSelected,
        },
      },
      this.$slots.default,
    );
  },
});
