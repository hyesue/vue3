/**
 * 엄격 타입 버전의 `Object.fromEntries()`.
 *
 * `Object.fromEntries()`는 항상 `{[key: string]: T}`을 반환합니다.
 * 이 함수는 주어진 엔트리 배열로부터 엄격한 타입의 객체를 리턴합니다.
 *
 * - [TypeScript issues about this](https://github.com/microsoft/TypeScript/issues/35745)
 *
 * @example
 * ```
 * import {objectFromEntries} from '../../utils';
 *
 * const stronglyTypedObjectFromEntries = objectFromEntries([
 * 	['a', 123],
 * 	['b', 'someString'],
 * 	['c', true],
 * ]);
 * //=> {a: number; b: string; c: boolean}
 *
 * const untypedEntries = Object.fromEntries(entries);
 * //=> {[key: string]: string}
 * ```
 */
const objectFromEntries = <
  Key extends PropertyKey,
  Entries extends ReadonlyArray<readonly [Key, unknown]>,
>(
  value: Entries,
): {
  [K in Extract<Entries[number], readonly [Key, unknown]>[0]]: Extract<
    Entries[number],
    readonly [K, unknown]
  >[1];
} => {
  return Object.fromEntries(value) as {
    [K in Extract<Entries[number], [Key, unknown]>[0]]: Extract<
      Entries[number],
      [K, unknown]
    >[1];
  };
};

export default objectFromEntries;
