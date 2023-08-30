import {useContext} from 'src/composables';

export interface SearchFieldContext {
	searchInput: string;

	isModuleOpen: boolean;

	openModule(): void;
	closeModule(): void;
}

export const useSearchFieldContext = () =>
	useContext<SearchFieldContext>('SSearchField');
