interface HTMLElementInstanceType<T extends HTMLElement = HTMLElement> {
  prototype: T;
  new (): T;
}

export const isHTMLElement = <T extends HTMLElementInstanceType>(
  value: unknown,
  subtype?: T,
): value is T[keyof T] => {
  return subtype ? value instanceof subtype : value instanceof HTMLElement;
};
