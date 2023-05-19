import { useContext } from "react";
import { FilterContext, FilterProps } from "../context/FilterContext";

export default function FilterButton({ label, canRemove }: FilterProps) {
  const { removeFilter, addFilter } = useContext(FilterContext);

  return canRemove ? (
    <article className="grid grid-flow-col">
      <h3 className="rounded-l-lg bg-light-grayish-cyan-fg px-2 py-[10px] text-base leading-none text-desaturated-dark-cyan">
        {label}
      </h3>
      <button
        type="button"
        className="text-bold rounded-r-lg bg-desaturated-dark-cyan px-2 py-[10px] text-base leading-none text-white hover:bg-very-dark-grayish-cyan"
        onClick={() => removeFilter({ label, canRemove })}
      >
        X
      </button>
    </article>
  ) : (
    <button
      type="button"
      className="rounded-lg bg-light-grayish-cyan-fg px-2 py-[10px] text-base leading-none text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white"
      onClick={() => {
        console.log("Hello!");
        addFilter({ label, canRemove })
      }}
    >
      {label}
    </button>
  );
}
