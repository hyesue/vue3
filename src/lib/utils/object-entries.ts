import type {StringKeyOf} from 'type-fest';

/**
 * 엄격 타입 버전의 `Object.entries()`.
 *
 * `Object.entries()`는 항상 `Array<[string, T]>`의 배열을 반환합니다.
 * 이 함수는 엄격한 타입의 객체의 엔트리 배열을 반환합니다.
 *
 * - [TypeScript issues about this](https://github.com/microsoft/TypeScript/pull/12253)
 *
 * @example
 * ```
 * import {objectEntries} from '../../utils';
 *
 * const stronglyTypedEntries = objectEntries({a: 1, b: 2, c: 3});
 * //=> Array<['a' | 'b' | 'c', number]>
 *
 * const untypedEntries = Object.entries(items);
 * //=> Array<[string, number]>
 * ```
 */
const objectEntries = <Type extends Record<PropertyKey, unknown>>(
  value: Type,
): Array<[StringKeyOf<Type>, Type[StringKeyOf<Type>]]> => {
  return Object.entries(value) as Array<
    [StringKeyOf<Type>, Type[StringKeyOf<Type>]]
  >;
};

export default objectEntries;
