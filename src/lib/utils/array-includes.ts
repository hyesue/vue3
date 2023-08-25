/**
 * 타입 가드 버전의 `Array#includes()`.
 *
 * - [TypeScript issues about this](https://github.com/microsoft/TypeScript/issues/26255#issuecomment-748211891)
 *
 * @example
 * ```
 * import {arrayIncludes} from '../../utils';
 *
 * const values = ['a', 'b', 'c'] as const;
 * const valueToCheck: unknown = 'a';
 *
 * if (arrayIncludes(values, valueToCheck)) {
 * 	// We now know that the value is of type `typeof values[number]`.
 * }
 * ```
 */
const arrayIncludes = <Type extends SuperType, SuperType = unknown>(
  array: Type[] | readonly Type[],
  item: SuperType,
  fromIndex?: number,
): item is Type => {
  return array.includes(item as Type, fromIndex);
};

export default arrayIncludes;
