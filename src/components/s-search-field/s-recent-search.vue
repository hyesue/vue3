<script lang="ts">
import {computed, defineComponent} from 'vue';
import type {PropType} from 'vue';

import {useSearchFieldContext} from 'src/components/s-search-field/src/search-field.context';

export default defineComponent({
	name: 'SRecentSearch',
	props: {
		recentSearchRecords: {
			type: Array as PropType<string[]>,
			default: () => [],
		},
	},
	setup() {
		const context = useSearchFieldContext();
		const query = computed(() => new RegExp(context.searchInput, 'i'));

		return {
			context,
			highlight: (text: string) =>
				text.replace(
					query.value,
					(match) => `<span class="text-brand-primary">${match}</span>`,
				),
		};
	},
	methods: {
		onClickSearchRecordItem(record: string, event: PointerEvent): void {
			/**
			 * 최근 검색 기록 아이템이 클릭될 때, `clickSearchRecordItem` 이벤트를 방출합니다.
			 *
			 * `[string, PointerEvent]`
			 *
			 * @event clickSearchRecordItem
			 */
			this.$emit('clickSearchRecordItem', record, event);
		},
		onClickDeleteSearchRecord(event: PointerEvent): void {
			/**
			 * 최근 검색 기록 아이템 삭제 버튼이 클릭될 때, `clickDeleteSearchRecord` 이벤트를 방출합니다.
			 *
			 * `[PointerEvent]`
			 *
			 * @event clickDeleteSearchRecord
			 */
			this.$emit('clickDeleteSearchRecord', event);
		},
		onClickDeleteSearchRecordItem(index: number, event: PointerEvent): void {
			/**
			 * 최근 검색 기록 아이템 삭제 버튼이 클릭될 때, `clickDeleteSearchRecordItem` 이벤트를 방출합니다.
			 *
			 * `[string, PointerEvent]`
			 *
			 * @event clickDeleteSearchRecordItem
			 */
			this.$emit('clickDeleteSearchRecordItem', index, event);
		},
		onClickCloseButton(event: PointerEvent): void {
			/**
			 * 닫기 버튼이 클릭될 때, `click` 이벤트를 방출합니다.
			 *
			 * `[PointerEvent]`
			 *
			 * @event click
			 */
			this.$emit('click', event);
			this.context.closeModule();
		},
	},
});
</script>

<template>
	<div v-show="context.isModuleOpen" class="relative">
		<div
			class="absolute top-4 z-dropdown block w-full rounded-md border-1 border-solid border-inverse-elevation-1 bg-surface-layer shadow-4"
		>
			<div class="max-h-[33.8rem] overflow-hidden overflow-y-auto">
				<ul class="py-8 px-0">
					<li
						v-for="(record, index) in recentSearchRecords"
						:key="record"
						class="relative"
						@click="onClickSearchRecordItem(record, $event)"
					>
						<!-- eslint-disable vue/no-v-html -->
						<span
							class="flex w-full flex-row flex-nowrap items-center justify-start whitespace-nowrap py-8 px-16 text-md font-regular leading-lg text-on-surface-elevation-2 hover:bg-interaction-hover active:bg-interaction-pressed"
							v-html="highlight(record)"
						/>
						<!-- eslint-enable vue/no-v-html -->
						<button
							class="stove-ui-icon absolute top-1/2 right-16 -mt-8 ml-8 shrink-0 text-xl text-inverse-elevation-2 duration-150 before:ic-control-close-circle-fill focus-within:outline-0"
							@click.stop="onClickDeleteSearchRecordItem(index, $event)"
						>
							<span class="sr-only">Delete</span>
						</button>
					</li>
				</ul>
			</div>

			<div
				class="flex h-44 flex-row flex-nowrap items-center justify-between border-t-1 border-solid border-inverse-elevation-1 px-16"
			>
				<button
					class="text-md font-regular leading-lg text-on-surface-elevation-3 focus-within:outline-0"
					@click="onClickDeleteSearchRecord($event)"
				>
					전체 삭제
				</button>
				<button
					class="stove-ui-icon relative my-0 mx-12 mr-0 shrink-0 text-3xl text-on-surface-elevation-3 duration-150 before:ic-control-close-line focus-within:outline-0"
					@click="onClickCloseButton"
				>
					<span class="sr-only">닫기</span>
				</button>
			</div>
		</div>
	</div>
</template>
