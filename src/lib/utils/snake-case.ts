import _snakeCase from 'lodash.snakecase';
import type {SnakeCase} from 'type-fest';

/**
 * 엄격 타입 버전의 `_.snakeCase()`.
 *
 *  @example
 * ```
 * import {snakeCase} from '../../utils';
 *
 * const someVariable = snakeCase('foo-bar');
 * //=> 'foo_bar'
 * ```
 */
const snakeCase = <T extends string>(string?: T): SnakeCase<T> => {
  return _snakeCase(string) as SnakeCase<T>;
};

export default snakeCase;
