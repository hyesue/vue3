import type {VNode} from 'vue';
import Vue from 'vue';

import type {TabsContext} from './s-tabs';
import type {TabsSize} from './tabs.props';

import * as is from 'src/lib/is';

export const STabItem = Vue.extend({
  name: 'STabItem',
  inject: ['$TabsContext'],
  props: {
    isSelected: Boolean,
    id: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    context(): TabsContext {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (this.$TabsContext as () => TabsContext)();
    },
    isFirstItem(): boolean {
      return this.id === 0;
    },
    isAfterSelected(): boolean {
      const {selectedIndex} = this.context;
      return this.id - selectedIndex === 1;
    },
    listItemClasses(): string[] {
      const {size, variant} = this.context;

      if (variant === 'line-flexible') {
        return [
          'relative px-16 border-solid border-b-1 border-inverse-elevation-2',
        ];
      }
      if (variant === 'line-fixed') {
        return ['relative basis-full'];
      }
      if (variant === 'box') {
        const deviderClasses: Record<TabsSize, string> = {
          sm: 'before:stds-tab-divider-1 first:before:content-none',
          lg: 'before:stds-tab-divider-2 first:before:content-none',
        } as const;
        const hasDivider =
          !this.isFirstItem && !this.isSelected && !this.isAfterSelected;

        return [
          'relative ml-[0.1rem] basis-full first:ml-0',
          hasDivider && deviderClasses[size],
          this.isSelected && 'bg-surface-elevation-1',
        ].filter(is.string_);
      }

      return [];
    },
    lineFlexibleButtonClasses(): string[] {
      const {size} = this.context;
      const defaultClasses =
        'relative flex h-full w-full items-center justify-center break-all py-11 text-xl leading-xl';
      const sizeClasses: Record<TabsSize, string> = {
        sm: 'min-h-48',
        lg: 'min-h-60',
      } as const;
      const activeClasses = {
        activated:
          'font-medium text-on-surface-elevation-1 after:bg-on-surface-elevation-1 after:w-full after:h-2 after:absolute after:left-0 after:bottom-[-0.1rem]',
        inactive: 'text-on-surface-elevation-2',
      } as const;

      return [
        defaultClasses,
        sizeClasses[size],
        this.isSelected ? activeClasses.activated : activeClasses.inactive,
      ];
    },
    lineFixedButtonClasses(): string[] {
      const {size} = this.context;
      const defaultClasses =
        'flex h-full w-full items-center justify-center break-all py-8 px-20';
      const sizeClasses: Record<TabsSize, string> = {
        sm: 'min-h-44 text-md leading-lg',
        lg: 'min-h-48 text-xl leading-xl',
      } as const;
      const activeClasses = {
        activated:
          'after:stds-tab-active-1 font-medium text-on-surface-elevation-1',
        inactive: 'text-on-surface-elevation-2',
      } as const;

      return [
        defaultClasses,
        sizeClasses[size],
        this.isSelected ? activeClasses.activated : activeClasses.inactive,
      ];
    },
    boxButtonClasses(): string[] {
      const {size} = this.context;
      const defaultClasses =
        'flex h-full w-full items-center justify-center break-all py-10 px-20 font-medium';
      const sizeClasses: Record<TabsSize, string> = {
        sm: 'min-h-44 text-md leading-lg',
        lg: 'min-h-60 text-xl leading-xl',
      } as const;
      const activeClasses = {
        activated:
          'bg-transparent after:stds-tab-active-2 text-on-surface-elevation-1',
        inactive: 'bg-surface-elevation-3 text-on-surface-elevation-3',
      } as const;

      return [
        defaultClasses,
        sizeClasses[size],
        this.isSelected ? activeClasses.activated : activeClasses.inactive,
      ];
    },
    buttonClasses(): string[] {
      const {variant} = this.context;

      if (variant === 'line-flexible') {
        return this.lineFlexibleButtonClasses;
      }
      if (variant === 'line-fixed') {
        return this.lineFixedButtonClasses;
      }
      if (variant === 'box') {
        return this.boxButtonClasses;
      }

      return [];
    },
  },
  render(h): VNode {
    return h(
      'li',
      {
        class: this.listItemClasses,
      },
      [
        h(
          'button',
          {
            attrs: {
              type: 'button',
            },
            class: this.buttonClasses,
          },
          this.$slots.default,
        ),
      ],
    );
  },
});
