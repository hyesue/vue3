<script lang="ts">
import {defineComponent, computed} from 'vue';
import type {PropType} from 'vue';

import type {CheckboxAlign, CheckboxSize} from './checkbox.props';
import {CHECKBOX_ALIGNS, CHECKBOX_SIZES} from './checkbox.props';

import * as is from '../../lib/is';
import {objectKeys} from '../../lib/utils';

export default defineComponent({
  name: 'SCheckbox',
  model: {
    prop: 'isChecked',
    event: 'change',
  },
  props: {
    /**
     * Checkbox Id
     */
    id: {
      type: String,
      default: undefined,
    },
    /**
     * Checkbox 이름
     */
    name: {
      type: String,
      default: undefined,
    },
    /**
     * Checkbox 값
     */
    value: {
      type: [String, Boolean, Number],
      default: false,
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
     * Checkbox 텍스트 정렬
     */
    align: {
      type: String as PropType<CheckboxAlign>,
      default: CHECKBOX_ALIGNS.middle,
      validator: (value: CheckboxAlign) =>
        objectKeys(CHECKBOX_ALIGNS).includes(value),
    },
    /**
     * Checkbox 체크 여부
     */
    isChecked: {
      type: Boolean,
      default: false,
    },
    /**
     * Checkbox 비활성 여부
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {slots}) {
    const hasText = computed(() => !is.undefined_(slots.default));

    return {
      checkboxContainerClasses: computed(() => ({
        'stds-checkbox-container': true,
        'items-start': props.align === CHECKBOX_ALIGNS.top,
        'items-center': props.align === CHECKBOX_ALIGNS.middle,
        'min-h-16 min-w-16': props.size === CHECKBOX_SIZES.sm,
        'min-h-20 min-w-20': props.size === CHECKBOX_SIZES.md,
        'min-h-24 min-w-24': props.size === CHECKBOX_SIZES.lg,
      })),
      checkboxClasses: computed(() => ({
        'stds-checkbox peer': true,
        'h-16 w-16 after:text-xs focus-visible:border-1':
          props.size === CHECKBOX_SIZES.sm,
        'h-20 w-20 after:text-xl focus-visible:border-2':
          props.size === CHECKBOX_SIZES.md,
        'h-24 w-24 after:text-3xl focus-visible:border-2':
          props.size === CHECKBOX_SIZES.lg,
      })),
      labelClasses: computed(() => ({
        'stds-checkbox-label': hasText.value,
        'stds-checkbox-label-sr-only': !hasText.value,
        'text-text3':
          hasText.value &&
          (props.size === CHECKBOX_SIZES.sm ||
            props.size === CHECKBOX_SIZES.md),
        'text-text1': hasText.value && props.size === CHECKBOX_SIZES.lg,
      })),
      hasText,
    };
  },
  methods: {
    onChange(event: Event): void {
      if (is.HTMLElement(event.target, HTMLInputElement)) {
        /**
         * Checkbox의 상태가 변경되었을 때 `change` 이벤트를 방출합니다.
         *
         * `[boolean, Event]`
         *
         * @event change
         */
        this.$emit('change', !this.isChecked, event);
      }
    },
  },
});
</script>

<template>
  <div :class="checkboxContainerClasses">
    <input
      :id="id"
      :class="checkboxClasses"
      type="checkbox"
      :name="name"
      :value="String(value)"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="onChange"
    />
    <label :class="labelClasses" :for="id">
      <!-- @slot Checkbox 텍스트 -->
      <slot />
    </label>
  </div>
</template>
