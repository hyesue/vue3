<script lang="ts">
import {defineComponent, computed, ref} from 'vue';
import type {PropType} from 'vue';

import type {
  InputSizes,
  InputVariant,
  InputValidationState,
} from './input.props';
import {
  INPUT_VALIDATION_STATES,
  INPUT_SIZES,
  INPUT_VARIANTS,
} from './input.props';

import * as is from '../../lib/is';
import {objectKeys} from '../../lib/utils';

export default defineComponent({
  name: 'SInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    /**
     * Input 값
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * Input 타입
     */
    variant: {
      type: String as PropType<InputVariant>,
      default: INPUT_VARIANTS.outline,
      validator: (value: InputVariant) =>
        objectKeys(INPUT_VARIANTS).includes(value),
    },
    /**
     * Input 사이즈
     */
    size: {
      type: String as PropType<InputSizes>,
      default: INPUT_SIZES.sm,
      validator: (value: InputSizes) => objectKeys(INPUT_SIZES).includes(value),
    },
    /**
     * 유효성 검사 상태
     */
    validationState: {
      type: String as PropType<InputValidationState>,
      default: 'none',
      required: false,
      validator: (value: InputValidationState) =>
        objectKeys(INPUT_VALIDATION_STATES).includes(value),
    },
    /**
     * Input 비활성 여부
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Input 요소 class
     */
    inputClass: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const isFocused = ref(false);

    return {
      isFocused,
      rootClasses: computed(() => ({
        'stds-input-container': true,
        'h-32 pl-12 pr-12 focus-within:pr-[1.1rem] focus-within:pl-[1.1rem]':
          props.size === INPUT_SIZES.sm,
        'h-44 pl-16 pr-16 focus-within:pr-[1.5rem] focus-within:pl-[1.5rem]':
          props.size === INPUT_SIZES.lg,
        'bg-neutral-variant-3':
          props.variant === INPUT_VARIANTS.outline && !props.isDisabled,
        'bg-disabled-variant-3 border-border':
          props.variant === INPUT_VARIANTS.outline && props.isDisabled,
        'border-transparent bg-neutral-variant-2':
          props.variant === INPUT_VARIANTS.fill && !props.isDisabled,
        'bg-disabled-variant-3 border-transparent':
          props.variant === INPUT_VARIANTS.fill && props.isDisabled,
        'border-2 pr-[1.1rem] pl-[1.1rem]':
          props.validationState !== INPUT_VALIDATION_STATES.none &&
          props.size === INPUT_SIZES.sm,
        'border-2 pr-[1.5rem] pl-[1.5rem]':
          props.validationState !== INPUT_VALIDATION_STATES.none &&
          props.size === INPUT_SIZES.lg,
        'border-border':
          props.validationState === INPUT_VALIDATION_STATES.none &&
          props.variant === INPUT_VARIANTS.outline,
        'border-error': props.validationState === INPUT_VALIDATION_STATES.error,
        'border-warning':
          props.validationState === INPUT_VALIDATION_STATES.warning,
        'border-success':
          props.validationState === INPUT_VALIDATION_STATES.success,
        'border-information':
          props.validationState === INPUT_VALIDATION_STATES.informational,
      })),
      inputClasses: computed(() => ({
        'stds-input': true,
        'text-xs leading-xs': props.size === INPUT_SIZES.sm,
        'text-md leading-sm': props.size === INPUT_SIZES.lg,
        [props.inputClass]: !is.nullish(props.inputClass),
      })),
    };
  },
  methods: {
    onInput(event: InputEvent): void {
      if (is.HTMLElement(event.target, HTMLInputElement)) {
        /**
         * Input에 값이 입력될 때 `input` 이벤트를 방출합니다.
         *
         * `[string, InputEvent]`
         *
         * @event input
         */
        this.$emit('input', event.target.value, event);
      }
    },
    onChange(event: Event): void {
      /**
       * Input이 변경되었을 때 `change` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event change
       */
      this.$emit('change', event);
    },
    onFocus(event: FocusEvent): void {
      this.isFocused = true;

      /**
       * Input이 focus 되었을 때 `focus` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event focus
       */
      this.$emit('focus', event);
    },
    onBlur(event: Event): void {
      this.isFocused = false;

      /**
       * Input이 blur 되었을 때 `blur` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event blur
       */
      this.$emit('blur', event);
    },
    onKeyup(event: Event): void {
      /**
       * Input에 keyup 이벤트가 트리거되었을 때 `keyup` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event keyup
       */
      this.$emit('keyup', event);
    },
    onKeydown(event: Event): void {
      /**
       * Input에 keydown 이벤트가 트리거되었을 때 `keydown` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event keydown
       */
      this.$emit('keydown', event);
    },
    onClear(): void {
      /**
       * Input의 clear 버튼이 클릭되었을 때 `clear` 이벤트를 방출합니다.
       *
       * `[Event]`
       *
       * @event clear
       */
      this.$emit('clear');
      this.$emit('input', '');
    },
  },
});
</script>

<template>
  <div :class="rootClasses">
    <div class="stds-input-wrapper">
      <input
        v-bind="$attrs"
        :class="inputClasses"
        :value="value"
        :disabled="isDisabled"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="onKeyup"
        @keydown="onKeydown"
      />
    </div>
    <button
      v-if="!isDisabled && isFocused && value.length > 0"
      type="button"
      class="stds-input-clear-button stove-ui-icon before:ic-control-close-circle-fill"
      @mousedown="onClear"
    >
      <span class="sr-only">Clear</span>
    </button>
    <!-- @slot Input 컴포넌트 오른쪽 아이콘 버튼 -->
    <slot name="rightIcon" />
  </div>
</template>
