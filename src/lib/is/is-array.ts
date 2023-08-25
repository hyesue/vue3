import {isFunction} from './is-function';

export const isArray = <T>(
  value: unknown,
  predicate?: (value: T) => value is T,
): value is T[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (!isFunction(predicate)) {
    return true;
  }

  return value.every(predicate);
};
