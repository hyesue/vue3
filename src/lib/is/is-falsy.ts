export type Falsy = false | 0 | 0n | '' | null | undefined;

export const isFalsy = <T>(value: T | Falsy): value is Falsy => !value;
