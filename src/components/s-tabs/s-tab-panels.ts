import type {VNode} from 'vue';
import Vue from 'vue';

import type {TabsContext} from './s-tabs';

import {cleanChildren, cloneVNodeElement} from 'src/lib/v-dom';

export const STabPanels = Vue.extend({
  name: 'STabPanels',
  inject: ['$TabsContext'],
  computed: {
    context(): TabsContext {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (this.$TabsContext as () => TabsContext)();
    },
  },
  methods: {
    onChangeTab(index: number) {
      this.$emit('change', index);
    },
  },
  render(h): VNode {
    const {selectedIndex} = this.context;
    const validChildren = cleanChildren(this.$slots.default);
    const clones = validChildren.map((child, index) => {
      const isSelected = index === selectedIndex;

      return cloneVNodeElement(
        child,
        {
          props: {
            isSelected,
          },
        },
        h,
      );
    });

    return h('div', {}, clones);
  },
});
