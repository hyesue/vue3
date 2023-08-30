import * as is from 'src/lib/is';

let id = 0;

export const useId = (prefix?: string) =>
	[prefix, String(id++)].filter(is.string_).join('-');
