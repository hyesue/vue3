import type {
  DropdownSize,
  DropdownVariant,
} from 'src/components/s-dropdown/src/dropdown.props';
import {useContext} from 'src/composables';

export enum DropdownState {
  Open,
  Closed,
}

export interface DropdownContext {
  variant: DropdownVariant;
  size: DropdownSize;
  isDisabled: boolean;

  state: DropdownState;

  values: unknown[];
  selected: number;

  open(): void;
  close(): void;
  select(value: unknown): void;
}

export const useDropdownContext = () =>
  useContext<DropdownContext>('SDropdown');
