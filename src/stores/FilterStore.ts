import { atom, map } from "nanostores";

export type FilterProps = {
  label: string;
  canRemove: boolean;
};

export const filterItems = map<FilterProps[]>([]);

export const isHidden = atom(true);