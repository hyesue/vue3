import {isNull} from './is-null';
import {isUndefined} from './is-undefined';

export const isNullish = (value: unknown): value is undefined | null =>
  isUndefined(value) || isNull(value);
