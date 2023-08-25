import _kebabCase from 'lodash.kebabcase';
import type {KebabCase} from 'type-fest';

/**
 * 엄격 타입 버전의 `_.kebabCase()`.
 *
 *  @example
 * ```
 * import {kebabCase} from '../../utils';
 *
 * const someVariable = kebabCase('fooBar');
 * //=> 'foo-bar'
 * ```
 */
const kebabCase = <T extends string>(string?: T): KebabCase<T> => {
  return _kebabCase(string) as KebabCase<T>;
};

export default kebabCase;
