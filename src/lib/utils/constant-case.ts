import type {SnakeCase} from 'type-fest';

import snakeCase from './snake-case';

/**
 * 엄격 타입 버전의 `_.constantCase()`.
 *
 *  @example
 * ```
 * import {constantCase} from '../../utils';
 *
 * const someVariable = constantCase('foo-bar');
 * //=> 'FOO_BAR'
 * ```
 */
const constantCase = <T extends string>(
  string?: T,
): Uppercase<SnakeCase<T>> => {
  return snakeCase(string).toUpperCase() as Uppercase<SnakeCase<T>>;
};

export default constantCase;
