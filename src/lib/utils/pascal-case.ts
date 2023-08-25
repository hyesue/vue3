import type {PascalCase} from 'type-fest';

import camelCase from './camel-case';
import startCase from './start-case';

/**
 * 엄격 타입 버전의 `_.pascalCase()`.
 *
 *  @example
 * ```
 * import {pascalCase} from '../../utils';
 *
 * const someVariable = pascalCase('foo-bar');
 * //=> 'FooBar'
 * ```
 */
const pascalCase = <T extends string>(string?: T): PascalCase<T> => {
  return startCase(camelCase(string)).replace(/ /g, '') as PascalCase<T>;
};

export default pascalCase;
