import type {BorderWidth} from './types';

export const borderWidth: Record<BorderWidth | 'DEFAULT', string> = {
  '0': '0',
  '1': '1px',
  '2': '.2rem',
  'DEFAULT': '1px',
};
