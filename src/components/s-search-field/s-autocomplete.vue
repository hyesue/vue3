<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import type {PropType} from 'vue';

import {useSearchFieldContext} from 'src/components/s-search-field/src/search-field.context';
import {SSwitch} from 'src/components/s-switch';
import {useId} from 'src/composables';

export default defineComponent({
	name: 'SAutocomplete',
	components: {
		SSwitch,
	},
	props: {
		searchResults: {
			type: Array as PropType<string[]>,
			default: () => [],
		},
	},
	setup(props) {
		const context = useSearchFieldContext();
		const query = computed(() => new RegExp(context.searchInput, 'i'));

		return {
			context,
			useId,
			isOn: ref(true),
			filteredResults: computed(() =>
				props.searchResults.filter((result) => query.value.test(result)),
			),
			highlight: (text: string) =>
				text.replace(
					query.value,
					(match) => `<span class="text-brand-primary">${match}</span>`,
				),
		};
	},
	methods: {
		onClickSearchResultItem(result: string): void {
			/**
			 * 검색 결과 아이템이 클릭될 때, `clickSearchResultItem` 이벤트를 방출합니다.
			 *
			 * `[string]`
			 *
			 * @event clickSearchResultItem
			 */
			this.$emit('clickSearchResultItem', result);
		},
		onChangeIsOn(newValue: boolean, event: Event): void {
			this.isOn = newValue;

			/**
			 * 자동완성 사용 Switch가 변경되었을 때 `changeIsOn` 이벤트를 방출합니다.
			 *
			 * `[boolean, Event]`
			 *
			 * @event changeIsOn
			 */
			this.$emit('changeIsOn', newValue, event);
		},
		onClickReportButton(event: PointerEvent): void {
			/**
			 * 신고 버튼이 클릭될 때, `report` 이벤트를 방출합니다.
			 *
			 * `[PointerEvent]`
			 *
			 * @event report
			 */
			this.$emit('report', event);
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
			class="absolute top-4 z-dropdown block w-full rounded-md border-1 border-solid border-inverse-variant-1 bg-surface-layer shadow-4"
		>
			<div
				v-if="isOn && filteredResults.length > 0"
				class="max-h-[33.8rem] overflow-hidden overflow-y-auto border-b-1 border-solid border-inverse-variant-1 scrollbar-form-1"
			>
				<ul class="py-8 px-0">
					<li
						v-for="result in filteredResults"
						:key="result"
						class="relative"
						@click="onClickSearchResultItem(result)"
					>
						<!-- eslint-disable vue/no-v-html -->
						<span
							class="flex w-full flex-row flex-nowrap items-center justify-start whitespace-pre py-8 px-16 text-md font-regular leading-lg text-on-surface-elevation-2 hover:bg-interaction-hover active:bg-interaction-pressed"
							v-html="highlight(result)"
						/>
						<!-- eslint-enable vue/no-v-html -->
					</li>
				</ul>
			</div>

			<div
				class="flex flex-row flex-nowrap items-center justify-between py-[1.0rem] px-16"
			>
				<SSwitch
					:id="`stds-autocomplete-switch-${useId()}`"
					v-model="isOn"
					:isLabelVisible="true"
					labelText="자동완성"
					@change="onChangeIsOn"
				/>
				<div class="flex">
					<button
						class="stove-ui-icon my-0 mx-12 shrink-0 text-3xl text-on-surface-elevation-4 duration-150 before:ic-object-report-fill focus-within:outline-0"
						@click="onClickReportButton"
					>
						<span class="sr-only">신고</span>
					</button>
					<button
						class="stove-ui-icon relative my-0 mx-12 mr-0 shrink-0 text-3xl text-on-surface-elevation-3 duration-150 before:ic-control-close-line after:absolute after:-left-12 after:top-1/2 after:-mt-[0.9rem] after:h-[1.8rem] after:w-[0.1rem] after:bg-inverse-elevation-3 after:content-[''] focus-within:outline-0"
						@click="onClickCloseButton"
					>
						<span class="sr-only">닫기</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
