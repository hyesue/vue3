<script lang="ts">
import {provide, ref, computed, defineComponent, reactive} from 'vue';
import type {PropType} from 'vue';

import type {DropdownContext} from './dropdown.context';
import {DropdownState} from './dropdown.context';

import type {SDropdownItem} from './s-dropdown';
import type {DropdownSize, DropdownVariant} from './dropdown.props';
import {
  DROPDOWN_SIZES,
  DROPDOWN_VARIANTS,
} from 'src/components/s-dropdown/src/dropdown.props';
import type {TooltipPlacements} from 'src/components/s-tooltip';
import {STooltip, TOOLTIP_PLACEMENTS} from 'src/components/s-tooltip';
import {CONTEXT_KEYS} from 'src/composables';
import * as is from 'src/lib/is';
import type {PropsOf} from 'src/lib/util-types';
import {objectHasOwn, objectKeys} from 'src/lib/utils';

export default defineComponent({
  name: 'SDropdown',
  components: {
    STooltip,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * Dropdown 값
     */
    value: {
      type: [Number, String, Boolean, Object] as PropType<
        number | string | boolean | Record<PropertyKey, unknown>
      >,
      required: true,
    },
    /**
     * Dropdown 타입
     */
    variant: {
      type: String as PropType<DropdownVariant>,
      default: DROPDOWN_VARIANTS.line,
      validator: (value: DropdownVariant) =>
        objectKeys(DROPDOWN_VARIANTS).includes(value),
    },
    /**
     * Dropdown 사이즈
     */
    size: {
      type: String as PropType<DropdownSize>,
      default: DROPDOWN_SIZES.sm,
      validator: (value: DropdownSize) =>
        objectKeys(DROPDOWN_SIZES).includes(value),
    },
    /**
     * Dropdown 비활성화 여부
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Dropdown과 타겟 요소 간의 거리
     */
    distance: {
      type: Number,
      default: 4,
    },
    /**
     * Dropdown과 타겟 요소 간의 거리를 `'x, y'` 형으로 설정
     */
    offset: {
      type: String,
      default: '0',
    },
    /**
     * 툴팁 방향
     *
     * 참조 요소를 기준으로 툴팁을 배치할 방향을 설정합니다.
     */
    placement: {
      type: String as PropType<TooltipPlacements>,
      default: TOOLTIP_PLACEMENTS['bottom-start'],
      validator: (value: TooltipPlacements) =>
        objectKeys(TOOLTIP_PLACEMENTS).includes(value),
    },
    /**
     * Dropdown List의 최대 높이 (px)
     */
    maxHeight: {
      type: Number,
      default: null,
    },
    /**
     * Dropdown items 클릭시 Dropdown 접기 여부
     */
    closeOnClick: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {slots, emit}) {
    const state = ref(DropdownState.Closed);
    const tooltipRef = ref<HTMLElement | null>(null);
    const hasItems = computed(() => !is.undefined_(slots.dropdownItems));
    const dropdownItemValues = computed(
      () =>
        slots
          .dropdownItems?.()
          .map(
            ({componentOptions}) =>
              (componentOptions?.propsData as PropsOf<typeof SDropdownItem>)
                .value,
          ) ?? [],
    );
    const dropdownItemTexts = computed(
      () =>
        slots
          .dropdownItems?.()
          .map(({componentOptions}) => componentOptions?.children?.[0].text) ??
        [],
    );
    const selected = computed(() =>
      props.value ? dropdownItemValues.value.indexOf(props.value) + 1 : 0,
    );

    const open = () => {
      if (props.isDisabled) return;

      state.value = DropdownState.Open;
      emit('open');
    };
    const close = () => {
      if (props.isDisabled) return;

      state.value = DropdownState.Closed;
      emit('close');
    };
    const select = (index: number) => {
      if (props.isDisabled) return;

      if (objectHasOwn(tooltipRef.value, 'tippyRef') && props.closeOnClick) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tooltipRef.value.tippyRef.tippy().hide();
      }

      emit('change', dropdownItemValues.value[index - 1]);
    };

    const context: DropdownContext = reactive({
      variant: computed(() => props.variant),
      size: computed(() => props.size),
      isDisabled: computed(() => props.isDisabled),
      state,
      values: dropdownItemValues,
      selected,
      open,
      close,
      select,
    });

    provide(CONTEXT_KEYS.SDropdown, context);

    return {
      tooltipRef,
      context,
      hasItems,
      dropdownItemTexts,
      classes: computed(() => ({
        'stds-dropdown': true,
      })),
      selectClasses: computed(
        () =>
          ({
            text: 'stds-dropdown-text-select',
            line: {
              'stds-dropdown-line-select': true,
              'pl-12 pr-32 focus-within:pl-[1.1rem] focus-within:pr-[3.1rem] h-32 text-btn3 leading-btn3 bg-[calc(100%-1.2rem)_center] bg-[length:1.2rem] focus-within:bg-[calc(100%-1.1rem)_center]':
                props.size === DROPDOWN_SIZES.sm,
              'pl-16 pr-[4.4rem] focus-within:pl-[1.5rem] focus-within:pr-[4.3rem] h-44 text-btn2 leading-btn2 bg-[calc(100%-1.6rem)_center] bg-[length:1.6rem] focus-within:bg-[calc(100%-1.5rem)_center]':
                props.size === DROPDOWN_SIZES.lg,
            },
          })[props.variant],
      ),
      trigger: computed(() => (props.isDisabled ? '' : 'click')),
      open,
      close,
      select,
      selected,
      dropdownListStyles: computed(() =>
        props.maxHeight ? {maxHeight: `${props.maxHeight}px`} : null,
      ),
    };
  },
  /**
   * Storybook Control 패널 문서화를 위해 작성
   */
  methods: {
    onOpen() {
      /**
       * Dropdown이 열릴 때, `open` 이벤트를 방출합니다.
       *
       * @event open
       */
      this.$emit('open');
    },
    onClose() {
      /**
       * Dropdown이 닫힐 때, `close` 이벤트를 방출합니다.
       *
       * @event close
       */
      this.$emit('close');
    },
    onSelect(value: unknown) {
      /**
       * 선택한 값이 변경될 때, `change` 이벤트를 방출합니다.
       *
       * @event change
       */
      this.$emit('change', value);
    },
  },
});
</script>

<template>
  <STooltip
    ref="tooltipRef"
    :class="classes"
    v-bind="$attrs"
    appendTo="parent"
    role="listbox"
    :trigger="trigger"
    :placement="placement"
    :distance="distance"
    :offset="offset"
    :interactive="true"
    :animateFill="false"
    :arrow="false"
    v-on="$listeners"
    @shown="open"
    @hidden="close"
  >
    <template #target>
      <!-- @slot DropdownButton 컴포넌트 -->
      <slot />
    </template>

    <template v-if="!isDisabled && hasItems" #default>
      <ul class="stds-dropdown-list" :style="dropdownListStyles">
        <!-- @slot 메뉴 내에 표시할 아이템 목록 -->
        <slot name="dropdownItems" />
      </ul>
    </template>
  </STooltip>
</template>
