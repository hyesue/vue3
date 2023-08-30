<script lang="ts">
import {useBreakpoints} from '@vueuse/core';
import {defineComponent, ref, watch, computed} from 'vue';

import {stds} from 'src/foundations';

const DEFAULT_PAGE_PER_BLOCK = 10;
const MOBILE_PAGE_PER_BLOCK = 5;

export default defineComponent({
  name: 'SPagination',
  model: {
    prop: 'page',
    event: 'change',
  },
  props: {
    /**
     * 현재 페이지 번호
     */
    page: {
      type: Number,
      default: 1,
    },
    /**
     * 전체 페이지 갯수
     */
    pageCount: {
      type: Number,
      required: true,
    },
    /**
     * 이전/다음 블록으로 이동 버튼을 노출할지 여부
     */
    displayPrevAndNextButton: {
      type: Boolean,
      default: true,
    },
    /**
     * 처음/마지막 페이지로 이동 버튼을 노출할지 여부
     */
    displayFirstAndLastButton: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const breakpoints = useBreakpoints(stds.glob.breakpoint);
    const isMobile = breakpoints.smaller('sm');
    const pagePerBlock = computed(() =>
      isMobile.value ? MOBILE_PAGE_PER_BLOCK : DEFAULT_PAGE_PER_BLOCK,
    );

    /* eslint-disable prettier/prettier */
		const currentBlockNumber = computed(() => Math.ceil(props.page / pagePerBlock.value));
		const currentBlockFirstPage = computed(() => (currentBlockNumber.value - 1) * pagePerBlock.value + 1);
		const currentBlockLastPage = computed(() => currentBlockNumber.value === blockCounts.value ? props.pageCount : currentBlockNumber.value * pagePerBlock.value);
		const currentBlock = computed(() => Array.from({length: currentBlockLastPage.value - currentBlockFirstPage.value + 1}, (_, i) => currentBlockFirstPage.value + i));
		const blockCounts = computed(() => Math.ceil(props.pageCount / pagePerBlock.value));
		const hasPrevBlock = computed(() => props.page > pagePerBlock.value);
		const hasNextBlock = computed(() => blockCounts.value > currentBlockNumber.value);
		const prevBlockLastPage = computed(() => currentBlockFirstPage.value - 1);
		const nextBlockFirstPage = computed(() => currentBlockLastPage.value + 1);
		const isFirstBlock = computed(() => currentBlockNumber.value === 1);
		const isLastBlock = computed(() => currentBlockNumber.value === blockCounts.value);
		const hasSingleBlock = computed(() => blockCounts.value === 1);
		/* eslint-enable prettier/prettier */

    return {
      isMobile,
      pagePerBlock,
      currentBlockNumber,
      blockCounts,
      hasPrevBlock,
      hasNextBlock,
      prevBlockLastPage,
      nextBlockFirstPage,
      isFirstBlock,
      isLastBlock,
      hasSingleBlock,
      currentBlock,
    };
  },
  data() {
    return {
      arrowButtonClassesByState: {
        activated:
          'active:text-on-surface-elevation-2 active:bg-interaction-pressed',
        disabled:
          '!text-disabled-variant-1 cursor-not-allowed pointer-events-none',
      },
      pageButtonClassesByState: {
        active: 'font-medium !text-white !bg-brand-primary',
        inactive:
          'focus-visible:bg-inverse-elevation-4 focus-within:bg-interaction-hover',
      },
    };
  },
  methods: {
    movePage(page: number) {
      this.$emit('change', page);
    },
    movePrevBlock() {
      if (this.hasPrevBlock) {
        this.movePage(this.prevBlockLastPage);
      }
    },
    moveNextBlock() {
      if (this.hasNextBlock) {
        this.movePage(this.nextBlockFirstPage);
      }
    },
    moveFirstPage() {
      if (!this.isFirstBlock) {
        this.movePage(1);
      }
    },
    moveLastPage() {
      if (!this.isLastBlock) {
        this.movePage(this.pageCount);
      }
    },
  },
});
</script>

<template>
  <div
    class="flex w-full items-center justify-center py-12 px-0 text-center text-md"
  >
    <button
      v-if="displayFirstAndLastButton && !isMobile && !hasSingleBlock"
      :class="`${
        isFirstBlock
          ? arrowButtonClassesByState.disabled
          : arrowButtonClassesByState.activated
      } relative inline-block h-32 min-w-32 rounded-full leading-[3.2rem] text-on-surface-elevation-1 focus-within:outline-0 focus-visible:bg-inverse-elevation-4 focus-visible:outline-none`"
      @click="moveFirstPage"
    >
      <SIcon
        icon="ic-control-double-arrow-left-line"
        size="xl"
        srOnlyText="처음"
        class="align-middle"
      />
    </button>
    <button
      v-if="displayPrevAndNextButton && !hasSingleBlock"
      :class="`${
        isFirstBlock
          ? arrowButtonClassesByState.disabled
          : arrowButtonClassesByState.activated
      } relative inline-block h-32 min-w-32 rounded-full leading-[3.2rem] text-on-surface-elevation-1 focus-within:outline-0 focus-visible:bg-inverse-elevation-4 focus-visible:outline-none`"
      @click="movePrevBlock"
    >
      <SIcon
        icon="ic-control-arrow-left-line"
        size="xl"
        srOnlyText="이전"
        class="align-middle"
      />
    </button>
    <span :key="page" class="inline-block">
      <button
        v-for="pageNumber in currentBlock"
        :key="pageNumber"
        :class="`${
          page === pageNumber
            ? pageButtonClassesByState.active
            : pageButtonClassesByState.inactive
        } relative inline-block h-32 min-w-32 rounded-[1.6rem] py-0 px-12 leading-[3.2rem] text-on-surface-elevation-1 focus-within:outline-0 focus-visible:outline-none disabled:text-disabled-variant-1`"
        @click="movePage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </span>
    <button
      v-if="displayPrevAndNextButton && !hasSingleBlock"
      :class="`${
        isLastBlock
          ? arrowButtonClassesByState.disabled
          : arrowButtonClassesByState.activated
      } relative inline-block h-32 min-w-32 rounded-full leading-[3.2rem] text-on-surface-elevation-1 focus-within:outline-0 focus-visible:bg-inverse-elevation-4 focus-visible:outline-none`"
      @click="moveNextBlock"
    >
      <SIcon
        icon="ic-control-arrow-right-line"
        size="xl"
        srOnlyText="다음"
        class="align-middle"
      />
    </button>
    <button
      v-if="displayFirstAndLastButton && !isMobile && !hasSingleBlock"
      type="button"
      :class="`${
        isLastBlock
          ? arrowButtonClassesByState.disabled
          : arrowButtonClassesByState.activated
      } relative inline-block h-32 min-w-32 rounded-full leading-[3.2rem] text-on-surface-elevation-1 focus-within:outline-0 focus-visible:bg-inverse-elevation-4 focus-visible:outline-none`"
      @click="moveLastPage"
    >
      <SIcon
        icon="ic-control-double-arrow-right-line"
        size="xl"
        srOnlyText="마지막"
        class="align-middle"
      />
    </button>
  </div>
</template>
