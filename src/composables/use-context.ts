import {inject} from 'vue';

import {getCurrentComponentTagName, objectHasOwn} from 'src/lib/utils';

export const CONTEXT_KEYS = {
	SContentsPopup: Symbol('ContentsPopupContext'),
	SDialog: Symbol('SDialogContext'),
	SDropdown: Symbol('SDropdownContext'),
	SSearchField: Symbol('SSearchFieldContext'),
} as const;

export type ContextKey = keyof typeof CONTEXT_KEYS;

export const getContextKey = (component: ContextKey) => {
	if (!objectHasOwn(CONTEXT_KEYS, component)) {
		new Error(`<${component} /> doesn't have context.`);
	}

	return CONTEXT_KEYS[component] as symbol;
};

export const useContext = <Context>(parent: ContextKey) => {
	const context = inject(getContextKey(parent), null);
	const currentComponentTagName = getCurrentComponentTagName();

	if (context === null) {
		const err = new Error(
			`<${currentComponentTagName} /> is missing a parent <${parent} /> component.`,
		);
		if (Error.captureStackTrace) Error.captureStackTrace(err, useContext);
		throw err;
	}

	return context as Context;
};
