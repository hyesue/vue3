import _camelCase from 'lodash.camelcase';
import type {CamelCase} from 'type-fest';

/**
 * 엄격 타입 버전의 `_.camelCase()`.
 *
 *  @example
 * ```
 * import {camelCase} from '../../utils';
 *
 * const someVariable = camelCase('foo-bar');
 * //=> 'fooBar'
 * ```
 */
const camelCase = <T extends string>(string?: T): CamelCase<T> => {
  return _camelCase(string) as CamelCase<T>;
};

export default camelCase;
