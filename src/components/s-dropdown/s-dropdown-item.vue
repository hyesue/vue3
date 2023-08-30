<script lang="ts">
import {computed, defineComponent} from 'vue';
import type {PropType} from 'vue';

import {useDropdownContext} from 'src/components/s-dropdown/src/dropdown.context';

export default defineComponent({
  name: 'SDropdownItem',
  props: {
    /**
     * DropdownItem 값
     */
    value: {
      type: [Number, String, Boolean, Object] as PropType<
        number | string | boolean | Record<PropertyKey, unknown>
      >,
      required: true,
    },
  },
  setup(props, {emit}) {
    const context = useDropdownContext();

    const id = context.values.indexOf(props.value) + 1;

    const click = (event: PointerEvent) => {
      context.select(id);
      emit('click', event);
    };

    return {
      context,
      buttonClasses: computed(() => ({
        'stds-dropdown-list-item': true,
        'bg-ico-select-check-selected font-medium text-brand-primary':
          context.selected === id,
      })),
      click,
    };
  },
  methods: {
    onClick(event: PointerEvent): void {
      const id = this.context.values.indexOf(this.value) + 1;
      this.context.select(id);

      /**
       * DropdownItem이 클릭될 때, `click` 이벤트를 방출합니다.
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
  <li>
    <button :class="buttonClasses" @click="click">
      <!-- @slot Dropdown Item 내용 -->
      <slot />
    </button>
  </li>
</template>
