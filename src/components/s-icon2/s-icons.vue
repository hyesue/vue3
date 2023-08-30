<script lang="ts">
import {computed, defineComponent} from 'vue';
import type {PropType} from 'vue';

import type {IconSizess} from './s-icons.props';
import {SVG_ICON_COMPONENTS} from './svg-components';

import type {AllIcons} from '../../foundations';
import {COLOR_ICONS, ALL_ICONS} from '../../foundations';
import {arrayIncludes} from '../../lib/utils';

export default defineComponent({
  name: 'SIcon2',
  components: {
    ...SVG_ICON_COMPONENTS,
  },
  props: {
    /**
     * Icon 이름
     */
    icon: {
      type: String as PropType<AllIcons>,
      default: ALL_ICONS[0],
      validator: (value: string) => arrayIncludes(ALL_ICONS, value),
    },
    /**
     * Icon 사이즈
     */
    size: {
      type: String as PropType<IconSizess | 'auto'>,
      default: 'xl',
    },
    /**
     * 스크린 리더 텍스트
     */
    srOnlyText: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const sizeByToken = {
      'auto': null,
      'xs': 12,
      'sm': 13,
      'md': 14,
      'lg': 15,
      'xl': 16,
      '2xl': 18,
      '3xl': 20,
      '4xl': 24,
      '5xl': 32,
      '6xl': 42,
      '7xl': 50,
    } as const;

    const fontSizeClassByToken = {
      'auto': '',
      'xs': 'h-12 w-12 text-xs',
      'sm': 'h-[1.3rem] w-[1.3rem] text-sm',
      'md': 'h-[1.4rem] w-[1.4rem] text-md',
      'lg': 'h-[1.5rem] w-[1.5rem] text-lg',
      'xl': 'h-16 w-16 text-xl',
      '2xl': 'h-[1.8rem] w-[1.8rem] text-2xl',
      '3xl': 'h-20 w-20 text-3xl',
      '4xl': 'h-24 w-24 text-4xl',
      '5xl': 'h-32 w-32 text-5xl',
      '6xl': 'h-[4.2rem] w-[4.2rem] text-6xl',
      '7xl': 'h-[5rem] w-[5rem] text-7xl',
    } as const;

    return {
      svgIconSize: computed(() => sizeByToken[props.size]),
      fontIconClasses: computed(() => [
        'stove-ui-icon',
        fontSizeClassByToken[props.size],
        `before:${props.icon}`,
      ]),
      isSvgIcon: computed(() => arrayIncludes(COLOR_ICONS, props.icon)),
    };
  },
  methods: {
    onClick(event: PointerEvent): void {
      /**
       * Icon이 클릭될 때, `click` 이벤트를 방출합니다.
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
  <component
    :is="icon"
    v-if="isSvgIcon"
    role="presentation"
    :width="svgIconSize"
    :height="svgIconSize"
    :aria-labelledby="icon"
    @click="onClick"
  />

  <i v-else :class="fontIconClasses">
    <span v-if="srOnlyText" class="sr-only">{{ srOnlyText }}</span>
  </i>
</template>
