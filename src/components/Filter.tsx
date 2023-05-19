import { useStore } from "@nanostores/react";
import { isHidden, filterItems } from "../stores/FilterStore";

import FilterButton from "./FilterButton";

export default function Filter() {
  const $filterItems = useStore(filterItems);
  const $isHidden = useStore(isHidden);

  const hideFilter = $isHidden ? "hidden" : "block";

  return (
    <article
      className={`${hideFilter} mx-auto -mt-9 grid w-[calc(325vw/3.75)] min-w-[325px] grid-flow-col justify-between gap-6 rounded-md bg-white px-6 py-5 shadow-card`}
    >
      <menu className="flex flex-row flex-wrap gap-4">
        {$filterItems.map(({ label }, index) => (
          <li key={`${label}-${index}`}>
            <FilterButton label={label} canRemove={true} />
          </li>
        ))}
      </menu>

      <button
        type="button"
        className="text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline"
        onClick={() => {
          filterItems.set([]);
          isHidden.set(true);
        }}
      >
        Clear
      </button>
    </article>
  );
}
