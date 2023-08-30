import * as is from './is';

import {breakpoints} from '../foundations';
import type {Breakpoint} from '../foundations';
import type {NullablePartial} from '../lib/util-types';
import {objectEntries, objectFromEntries, omitBy} from '../lib/utils';

export type ResponsiveProp<Token extends string> =
  | null
  | undefined
  | Token
  | Token[]
  | NullablePartial<
      Record<Breakpoint, Token> & {
        default: Token;
      }
    >;

export function parseResponsiveProp<Token extends string>(
  prop: ResponsiveProp<Token>,
): Partial<Record<Breakpoint, Token>> & {default?: Token} {
  if (is.array(prop)) {
    return prop.length > 0
      ? omitBy(
          objectFromEntries([
            ['default', prop[0]],
            ...prop.map(
              (value, index) =>
                [breakpoints[index], value] as [Breakpoint, Token],
            ),
          ]),
          is.nullish,
        )
      : {};
  }

  if (is.object_(prop)) {
    return omitBy(prop, is.nullish);
  }

  if (is.string_(prop)) {
    return {default: prop};
  }

  return {};
}

export function mapResponsiveClasses<Token extends string>(
  prop: ResponsiveProp<Token>,
  mapper: (value: Token) => string | undefined,
) {
  const parsedProp = parseResponsiveProp(prop);

  return objectEntries(parsedProp).map(([key, value]) => {
    if (is.undefined_(value)) {
      return;
    }

    return key === 'default' ? `${mapper(value)}` : `${key}:${mapper(value)}`;
  });
}
