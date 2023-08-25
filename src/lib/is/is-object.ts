import {isFunction} from './is-function';
import {isNull} from './is-null';

export const isObject = (value: unknown): value is object =>
  !isNull(value) && (typeof value === 'object' || isFunction(value));
