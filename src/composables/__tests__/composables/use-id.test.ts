import {it, expect} from 'vitest';

import {useId} from 'src/composables';

it('함수를 실행할 때마다 중복되지 않는 Id를 리턴한다', () => {
	const ids = [
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
		useId(),
	];

	expect(ids.length).toBe([...new Set(ids)].length);
});

it('접두사가 주어질 경우 접두사가 있는 id를 반환한다', () => {
	expect(useId('hello').startsWith('hello-')).toBeTruthy();
});
