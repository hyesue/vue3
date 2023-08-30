<script lang="ts">
import {computed, defineComponent} from 'vue';

import {
  DropdownState,
  useDropdownContext,
} from 'src/components/s-dropdown/src/dropdown.context';
import {DROPDOWN_SIZES} from 'src/components/s-dropdown/src/dropdown.props';
import {SIcon} from 'src/components/s-icon';

export default defineComponent({
  name: 'SDropdownButton',
  components: {
    SIcon,
  },
  setup() {
    const context = useDropdownContext();

    return {
      context,
      classes: computed(
        () =>
          ({
            text: {
              'stds-dropdown-text-button': true,
              'h-32 text-md leading-lg': true,
            },
            line: {
              'stds-dropdown-line-button': true,
              'px-12 focus-within:px-[1.1rem] h-32 text-btn3 leading-btn3 disabled:px-12':
                context.size === DROPDOWN_SIZES.sm,
              'px-16 focus-within:px-[1.5rem] h-44 text-btn2 leading-btn2 disabled:px-16':
                context.size === DROPDOWN_SIZES.lg,
            },
          })[context.variant],
      ),
      labelClasses: 'overflow-hidden overflow-ellipsis whitespace-nowrap',
      iconClasses: computed(
        () =>
          ({
            text: {
              'ml-12': true,
              'text-xl': context.size,
              'text-on-surface-elevation-3': !context.isDisabled,
              'text-disabled-variant-1': context.isDisabled,
              'rotate-180': context.state === DropdownState.Open,
            },
            line: {
              'text-xs ml-8': context.size === DROPDOWN_SIZES.sm,
              'text-xl ml-12': context.size === DROPDOWN_SIZES.lg,
              'text-on-surface-elevation-2': !context.isDisabled,
              'text-disabled-variant-1': context.isDisabled,
              'rotate-180': context.state === DropdownState.Open,
            },
          })[context.variant],
      ),
    };
  },
  methods: {
    onClick(event: PointerEvent): void {
      /**
       * DropdownButton이 클릭될 때, `click` 이벤트를 방출합니다.
       *
       * `[PointerEvent]`
       *
       * @event click
       */
      this.$emit('click', event);
    },
  },
});
</script>

<template>
  <button :class="classes" :disabled="context.isDisabled" @click="onClick">
    <span :class="labelClasses">
      <!-- @slot DropdownButton 내부 텍스트 -->
      <slot />
    </span>
    <SIcon :class="iconClasses" icon="ic-control-select-arrow-down-fill" />
  </button>
</template>
