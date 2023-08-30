import type {VNode} from 'vue';
import Vue from 'vue';

import type {TabsContext} from './s-tabs';
import type {TabsVariant} from './tabs.props';

import {cleanChildren, cloneVNodeElement} from 'src/lib/v-dom';

export const STabList = Vue.extend({
  name: 'STabList',
  inject: ['$TabsContext'],
  props: {},
  computed: {
    context(): TabsContext {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (this.$TabsContext as () => TabsContext)();
    },
    classes(): string {
      const {variant} = this.context;
      const classesByVariant: Record<TabsVariant, string> = {
        'line-flexible':
          'flex relative px-16 bg-surface-elevation-1 overflow-x-auto scrollbar-form-2 after:w-full after:h-[0.1rem] after:bg-inverse-elevation-2 after:absolute after:bottom-0 after:left-0',
        'line-fixed':
          'flex relative bg-surface-elevation-1 overflow-hidden after:bg-inverse-elevation-2  after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-[0.1rem]',
        'box': 'flex bg-surface-elevation-3',
      } as const;

      return classesByVariant[variant];
    },
  },
  methods: {
    onChangeTab(index: number) {
      this.$emit('change', index);
    },
  },
  render(h): VNode {
    const {selectedIndex, onChangeTab}: TabsContext = this.context;
    const validChildren = cleanChildren(this.$slots.default);
    const clones = validChildren.map((vNode, index) => {
      const isSelected = index === selectedIndex;
      const handleClick = (event: MouseEvent) => {
        onChangeTab(index);

        this.$emit('click', event);
      };

      const clone = cloneVNodeElement(
        vNode,
        {
          props: {
            isSelected,
          },
          nativeOn: {
            click: handleClick,
          },
          attrs: {
            id: index,
          },
        },
        h,
      );

      return clone;
    });

    return h(
      'ul',
      {
        class: this.classes,
      },
      clones,
    );
  },
});
