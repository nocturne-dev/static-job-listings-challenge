import type { MouseEvent } from "react";
import { useStore } from "@nanostores/react";
import { filterItems, isHidden, type FilterProps, filterCompanies, refreshCompanies } from "../stores/FilterStore";

export default function FilterButton({ label, canRemove }: FilterProps) {
  const $filterItems = useStore(filterItems);
  const $isHidden = useStore(isHidden);

  return canRemove ? (
    <article className="grid grid-flow-col">
      <h3 className="rounded-l-lg bg-light-grayish-cyan-fg px-2 py-[10px] text-base leading-none text-desaturated-dark-cyan">
        {label}
      </h3>
      <button
        type="button"
        className="text-bold rounded-r-lg bg-desaturated-dark-cyan px-2 py-[10px] text-base leading-none text-white hover:bg-very-dark-grayish-cyan"
        onClick={(event: MouseEvent) => {
          event.preventDefault();
          let items = $filterItems.filter((filter) => filter.label !== label);
          filterItems.set(items);
          isHidden.set((items.length <= 0));
          filterCompanies.set(refreshCompanies());
        }}
      >
        X
      </button>
    </article>
  ) : (
    <button
      type="button"
      className="rounded-lg bg-light-grayish-cyan-fg px-2 py-[10px] text-base leading-none text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white"
      onClick={(event: MouseEvent) => {
        event.preventDefault();

        let filterItem = $filterItems.find(
          (item) =>
            item.label === label
        );

        if (!filterItem) {
          filterItems.set([...$filterItems, { label, canRemove }]);

          if($isHidden) {
            isHidden.set(false);
          }

          filterCompanies.set(refreshCompanies());
        }
      }}
    >
      {label}
    </button>
  );
}
