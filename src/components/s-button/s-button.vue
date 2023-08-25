<template>
  <button :class="buttonClasses[size]" @click="onClick" :disabled="disabled">
    <SIcon
      v-if="icon"
      :icon="icon"
      :size="iconSizes[size]"
      :class="[iconClassesBySize[size], iconClass]"
    />
    <span :class="textClasses[size]">
      <!-- @slot Button 내부 텍스트 -->
      <slot />
    </span>
    <SIcon
      v-if="hasArrow"
      icon="ic-control-arrow-right-line"
      :size="arrowIconSizes[size]"
      :class="arrowIconClasses[size]"
    />
  </button>
</template>

<script lang="ts">
import SIcon from '../s-icon/s-icon.vue';
import {computed, defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {ButtonVariant, ButtonSize} from './button.props';
import {BUTTON_VARIANTS, BUTTON_SIZES} from './button.props';

import type {AllIcons} from '../../foundations';
import {ALL_ICONS} from '../../foundations';

import * as is from '../../lib/is';
import {arrayIncludes, objectKeys} from '../../lib/utils';

export default defineComponent({
  name: 'SButton',
  components: {
    SIcon,
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    /**
     * Button 타입
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
      validator: (value: ButtonVariant) =>
        ['primary', 'secondary', 'success', 'warning', 'danger'].includes(
          value,
        ),
    },
    */
    variant: {
      type: String as PropType<ButtonVariant>,
      default: BUTTON_VARIANTS.primary,
      validator: (value: ButtonVariant) =>
        objectKeys(BUTTON_VARIANTS).includes(value),
    },
    /**
     * Button 좌측 아이콘
     * */
    icon: {
      type: String as PropType<AllIcons>,
      default: undefined,
      validator: (value: AllIcons) => arrayIncludes(ALL_ICONS, value),
    },
    /**
     * Button 좌측 아이콘 class
     */
    iconClass: {
      type: String,
      default: null,
    },
    /**
     * Button 크기
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md',
      validator: (value: ButtonSize) =>
        ['xs', 'sm', 'md', 'lg'].includes(value),
    },
    */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md',
      validator: (value: ButtonSize) =>
        objectKeys(BUTTON_SIZES).includes(value),
    },
    /**
     * Button 활성 여부
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button 우측 화살표 아이콘 여부
     */
    hasArrow: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: '',
    },
    btnStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {slots}) {
    const isIconOnly = computed(
      () => !is.nullish(props.icon) && is.undefined_(slots.default),
    );

    const SOLID_BUTTON_VARIANTS = [
      BUTTON_VARIANTS.primary,
      BUTTON_VARIANTS.secondary,
      BUTTON_VARIANTS.tertiary,
      BUTTON_VARIANTS.white,
    ];

    const isSolid = computed(() =>
      arrayIncludes(SOLID_BUTTON_VARIANTS, props.variant),
    );

    const variantClasses: Record<ButtonVariant, string> = {
      primary: 's-button-primary',
      secondary: 's-button-secondary',
      tertiary: 's-button-tertiary',
      outline: 's-button-outline',
      white: 's-button-white',
      ghost: 's-button-ghost',
    } as const;

    return {
      isIconOnly,
      buttonClasses: computed(() => ({
        xs: [
          's-button',
          variantClasses[props.variant],
          'rounded-sm',
          'min-w-24',
          isIconOnly.value ? 'p-0 min-h-24' : 'px-8',
          !isIconOnly.value && (isSolid.value ? 'min-h-22' : 'min-h-[2.4rem]'),
        ].filter(is.string_),
        sm: [
          's-button',
          variantClasses[props.variant],
          'rounded-sm',
          'min-w-32',
          isIconOnly.value ? 'p-0 min-h-32' : 'px-12',
          !isIconOnly.value && (isSolid.value ? 'min-h-30' : 'min-h-[3.2rem]'),
        ].filter(is.string_),
        md: [
          's-button',
          variantClasses[props.variant],
          'rounded-md',
          'min-w-44',
          isIconOnly.value ? 'p-0 min-h-44' : 'px-16',
          !isIconOnly.value && (isSolid.value ? 'min-h-42' : 'min-h-[4.4rem]'),
        ].filter(is.string_),
        lg: [
          's-button',
          variantClasses[props.variant],
          'rounded-md',
          'min-w-56',
          isIconOnly.value ? 'p-0 min-h-56' : 'px-20',
          !isIconOnly.value && (isSolid.value ? 'min-h-54' : 'min-h-[5.6rem]'),
        ].filter(is.string_),
      })),
      iconClassesBySize: computed(() =>
        isIconOnly.value
          ? {}
          : {
              xs: 'mr-4',
              sm: 'mr-4',
              md: 'mr-8',
              lg: 'mr-8',
            },
      ),
      iconSizes: computed(() =>
        isIconOnly.value
          ? {
              xs: 'xl',
              sm: 'xl',
              md: '3xl',
              lg: '4xl',
            }
          : {
              xs: 'xl',
              sm: 'xl',
              md: '3xl',
              lg: '3xl',
            },
      ),
      textClasses: computed(() => ({
        xs: 'py-[0.1rem] text-btn3 leading-btn3',
        sm: 'py-[0.5rem] text-btn3 leading-btn3',
        md: 'py-[1.0rem] text-btn2 leading-btn2',
        lg: 'py-[1.4rem] text-btn1 leading-btn1',
      })),
      arrowIconClasses: computed(() => ({
        xs: 'ml-4 -mr-4',
        sm: 'ml-4 -mr-4',
        md: 'ml-4 -mr-4',
        lg: 'ml-4 -mr-4',
      })),
      arrowIconSizes: computed(() => ({
        xs: 'xl',
        sm: 'xl',
        md: '3xl',
        lg: '3xl',
      })),
    };
  },
  methods: {
    onClick(): void {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: arail;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  &.danger {
    background-color: #ff4949;
    color: #fff;
  }
  &.success {
    background-color: #13ce66;
    color: #fff;
  }
  &.info {
    background-color: #50bfff;
    color: #fff;
  }
}
</style>
