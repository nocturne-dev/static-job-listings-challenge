import { createContext, useState } from "react";

export type FilterProps = {
  label: string;
  canRemove: boolean;
};

export const FilterContext = createContext<{
  filters: FilterProps[];
  addFilter: (newFilter: FilterProps) => void;
  removeFilter: (filterToRemove: FilterProps) => void;
}>({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
});

export default function FilterContextProvider(props: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState<FilterProps[]>([]);

  const addFilter = (newFilter: FilterProps) => {
    setFilters((prev) => [...prev, newFilter]);
  };

  const removeFilter = (filterToRemove: FilterProps) => {
    setFilters((prev) =>
      prev.filter(
        (filter) =>
          filter.label.toUpperCase().trim() !==
          filterToRemove.label.toUpperCase().trim()
      )
    );
  };

  const context = {
    filters,
    addFilter,
    removeFilter,
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}
