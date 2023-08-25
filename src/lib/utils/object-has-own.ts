const has = Object.prototype.hasOwnProperty;

/**
 * 엄격 타입 버전의 `Object.hasOwn()`.
 *
 * 객체가 지정된 속성을 자체적으로 가지고 있는지 여부를 반환합니다.
 *
 * @example
 * ```
 * import {objectHasOwn} from '../../utils';
 *
 * objectHasOwn({}, 'hello');
 * //=> false
 *
 * objectHasOwn([1, 2, 3], 0);
 * //=> true
 * ```
 */
const objectHasOwn = <ObjectType, Key extends PropertyKey>(
  object: ObjectType,
  key: Key,
): object is ObjectType & Record<Key, unknown> => {
  // TODO: Use `Object.hasOwn()` when targeting Node.js 16.
  return has.call(object, key);
};

export default objectHasOwn;
