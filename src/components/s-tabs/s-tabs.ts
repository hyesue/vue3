import type {PropType, VNode} from 'vue';
import Vue from 'vue';

import type {TabsSize, TabsVariant} from './tabs.props';

export interface TabsData {
  selectedIndex: number;
}

export interface TabsContext {
  variant: TabsVariant;
  size: TabsSize;
  selectedIndex: number;
  onChangeTab: (index: number) => void;
}

export const STabs = Vue.extend({
  name: 'STabs',
  provide() {
    return {
      $TabsContext: () => this.TabsContext,
    };
  },
  props: {
    variant: {
      type: String as PropType<TabsVariant>,
      default: 'line-flexible',
    },
    size: {
      type: String as PropType<TabsSize>,
      default: 'sm',
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data(): TabsData {
    return {
      selectedIndex: this.defaultIndex,
    };
  },
  computed: {
    TabsContext(): TabsContext {
      return {
        variant: this.variant as TabsVariant,
        size: this.size as TabsSize,
        selectedIndex: this.selectedIndex,
        onChangeTab: (index: number) => this.onChangeTab(index),
      };
    },
  },
  methods: {
    onChangeTab(index: number) {
      this.selectedIndex = index;

      this.$emit('change', index);
    },
  },
  render(h): VNode {
    return h('div', {}, this.$slots.default);
  },
});
