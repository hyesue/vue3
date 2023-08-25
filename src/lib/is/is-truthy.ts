import type {Falsy} from './is-falsy';

export const isTruthy = <T>(value: T | Falsy): value is T => Boolean(value);
