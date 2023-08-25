<template>
  <button :class="classes" @click="onClick" :disabled="disabled">
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
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {ButtonVariant, ButtonSize} from './button.props';

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
     */
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
      validator: (value: ButtonVariant) =>
        ['primary', 'secondary', 'success', 'warning', 'danger'].includes(
          value,
        ),
    },
    /**
     * Button 좌측 아이콘
    icon: {
      type: String as PropType<AllIcons>,
      default: undefined,
      validator: (value: AllIcons) => arrayIncludes(ALL_ICONS, value),
    },
     */
    /**
     * Button 좌측 아이콘 class
     */
    iconClass: {
      type: String,
      default: null,
    },
    /**
     * Button 크기
     */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md',
      validator: (value: ButtonSize) =>
        ['xs', 'sm', 'md', 'lg'].includes(value),
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
  computed: {
    classes(): string {
      return (
        `btn btn-${this.variant} btn-${this.size}` +
        (this.disabled ? ' disabled' : '')
      );
    },
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
