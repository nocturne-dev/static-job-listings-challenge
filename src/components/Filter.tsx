import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import FilterButton from "./FilterButton";

export default function Filter() {
  const { filters } = useContext(FilterContext);

  const isHidden = filters.length <= 0 && "hidden";

  return (
    <article
      className={`${isHidden} mx-auto -mt-9 grid w-[calc(325vw/3.75)] min-w-[325px] grid-flow-col justify-between gap-6 rounded-md bg-white px-6 py-5 shadow-card`}
    >
      <menu className="flex flex-row flex-wrap gap-4">
        {filters.map(({ label }, index) => (
          <li key={`${label}-${index}`}>
            <FilterButton label={label} canRemove={true} />
          </li>
        ))}
      </menu>

      <button className="text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline">
        Clear
      </button>
    </article>
  );
}
