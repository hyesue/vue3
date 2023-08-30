<script lang="ts">
import {onClickOutside} from '@vueuse/core';
import {computed, defineComponent, provide, reactive, ref} from 'vue';
import type {PropType} from 'vue';

import type {InputSizes} from 'src/components/s-input';
import {INPUT_SIZES, SInput} from 'src/components/s-input';
import type {SearchFieldContext} from 'src/components/s-search-field/src/search-field.context';
import {CONTEXT_KEYS} from 'src/composables';
import type {ClassProp} from 'src/lib/util-types';
import {objectKeys} from 'src/lib/utils';

export default defineComponent({
	name: 'SSearchField',
	components: {
		SInput,
	},
	model: {
		prop: 'value',
		event: 'input',
	},
	props: {
		/**
		 * Input 값
		 */
		value: {
			type: String,
			default: '',
		},
		/**
		 * Input 사이즈
		 */
		size: {
			type: String as PropType<InputSizes>,
			default: INPUT_SIZES.sm,
			validator: (value: InputSizes) => objectKeys(INPUT_SIZES).includes(value),
		},
		/**
		 * Input 요소 class
		 */
		inputClass: {
			type: String,
			default: null,
		},
		/**
		 * InputContainer 클래스
		 */
		inputContainerClass: {
			type: [String, Object, Array] as PropType<ClassProp>,
			default: '',
		},
	},
	setup(props) {
		const isModuleOpen = ref(false);
		const context: SearchFieldContext = reactive({
			searchInput: computed(() => props.value),
			isModuleOpen,
			openModule: () => {
				isModuleOpen.value = true;
			},
			closeModule: () => {
				isModuleOpen.value = false;
			},
		});
		provide(CONTEXT_KEYS.SSearchField, context);

		const updateIsModuleOpen = (value: string) => {
			if (value.length > 0) {
				context.openModule();
				return;
			}

			context.closeModule();
		};

		const target = ref(null);
		onClickOutside(target, () => {
			context.closeModule();
		});

		return {
			target,
			context,
			searchButtonClasses: computed(() => ({
				'stds-search-field-search-button stove-ui-icon before:ic-navigation-search-line':
					true,
				'text-xl': props.size === INPUT_SIZES.sm,
				'text-3xl': props.size === INPUT_SIZES.lg,
			})),

			updateIsModuleOpen,
		};
	},
	methods: {
		onInput(value: string): void {
			this.updateIsModuleOpen(value);
		},
		onFocus(): void {
			this.updateIsModuleOpen(this.context.searchInput);
		},
		onClear(): void {
			/**
			 * 'x' 버튼이 클릭될 때, `clear` 이벤트를 방출합니다.
			 *
			 * @event clear
			 */
			this.$emit('clear');
		},
		onClickSearchButton(event: PointerEvent): void {
			/**
			 * 검색 버튼이 클릭될 때, `search` 이벤트를 방출합니다.
			 *
			 * `[string, PointerEvent]`
			 *
			 * @event search
			 */
			this.$emit('search', this.value, event);
		},
	},
});
</script>

<template>
	<div ref="target">
		<SInput
			v-bind="$attrs"
			:value="value"
			:size="size"
			:inputClass="inputClass"
			:class="inputContainerClass"
			v-on="$listeners"
			@input="onInput"
			@focus="onFocus"
			@clear="onClear"
		>
			<template #rightIcon>
				<button :class="searchButtonClasses" @click="onClickSearchButton">
					<span class="sr-only">Search</span>
				</button>
			</template>
		</SInput>
		<!-- @slot SAutocomplete 컴포넌트 -->
		<slot name="autocomplete" />
		<!-- @slot SRecentSearch 컴포넌트 -->
		<slot name="recentSearch" />
	</div>
</template>
