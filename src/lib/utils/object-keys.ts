import type {StringKeyOf} from 'type-fest';

/**
 * 엄격 타입 버전의 `Object.keys()`.
 *
 * `Object.keys()`는 항상 `string[]`를 반환합니다.
 * 이 함수는 주어진 객체의 엄격한 타입의 키 배열을 반환합니다.
 *
 * - [Explanation](https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript)
 * - [TypeScript issues about this](https://github.com/microsoft/TypeScript/issues/45390)
 *
 * @example
 * ```
 * import {objectKeys} from '../../utils';
 *
 * const stronglyTypedItems = objectKeys({a: 1, b: 2, c: 3});
 * // => Array<'a' | 'b' | 'c'>
 *
 * const untypedItems = Object.keys(items);
 * // => Array<string>
 * ```
 */
const objectKeys = <Type extends object>(
  value: Type,
): Array<StringKeyOf<Type>> => {
  return Object.keys(value) as Array<StringKeyOf<Type>>;
};

export default objectKeys;
