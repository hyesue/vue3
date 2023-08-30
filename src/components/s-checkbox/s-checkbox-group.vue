<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType, VNode} from 'vue';

import type {CheckboxSize} from './checkbox.props';
import {CHECKBOX_SIZES} from './checkbox.props';

import {objectKeys} from '../../lib/utils';
import {cleanChildren, cloneVNodeElement} from '../../lib/v-dom';

export default defineComponent({
  name: 'SCheckboxGroup',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * Checkbox 이름
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Checkbox 값
     */
    value: {
      type: Array as PropType<Array<string | number | boolean>>,
      default: () => [],
    },
    /**
     * Checkbox 사이즈
     */
    size: {
      type: String as PropType<CheckboxSize>,
      default: CHECKBOX_SIZES.md,
      validator: (value: CheckboxSize) =>
        objectKeys(CHECKBOX_SIZES).includes(value),
    },
    /**
     * Checkbox 비활성 여부
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(isChecked: boolean, checkedItemValue: string | number | boolean) {
      const checkList = isChecked
        ? [...this.value, checkedItemValue]
        : this.value.filter(
            (checkListValue) => checkListValue !== checkedItemValue,
          );
      /**
       * Checkbox의 값이 변경되었을 때 `change` 이벤트를 방출합니다.
       *
       * `[Array<string>]`
       *
       * @event change
       */
      this.$emit('change', checkList);
    },
  },
  render(h): VNode {
    /**
     * @slot Checkbox 컴포넌트 리스트
     */
    const validChildren = cleanChildren(this.$slots.default);

    const clones = validChildren.map((vNode, index) => {
      if (!vNode.tag) return;

      const vNodeProps = (vNode?.componentOptions?.propsData ?? {}) as Record<
        string,
        unknown
      > & {value: string | number | boolean};
      const vNodeListeners = (vNode?.componentOptions?.listeners ??
        {}) as Record<string, (...args: any[]) => void>;

      const clone = cloneVNodeElement(
        vNode,
        {
          props: {
            id: vNodeProps.id ?? `${this.name}-${index}`,
            name: vNodeProps.name ?? `${this.name}-${index}`,
            size: vNodeProps.size ?? this.size,
            isChecked: this.value.includes(vNodeProps.value),
          },
          on: {
            ...vNodeListeners,
            change: (isChecked: boolean, event: Event) => {
              vNodeListeners.change?.(isChecked, event);
              this.onChange(isChecked, vNodeProps.value);
            },
          },
        },
        h,
      );

      return h('div', {}, [clone]);
    });

    return h(
      'div',
      {
        attrs: {
          role: 'group',
        },
      },
      clones,
    );
  },
});
</script>
