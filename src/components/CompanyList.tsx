import { useStore } from "@nanostores/react";
import { filterCompanies } from "../stores/FilterStore";
import Company from "./Company";

export default function CompanyList() {
  const $filterCompanies = useStore(filterCompanies);

  return (
    <menu className="mt-14 grid gap-y-10 md:mt-[75px]">
      {$filterCompanies.map((company, index) => {
        return (
          <li
            key={`${company.company}-${index}`}
            className="mx-auto w-[calc(325vw/3.75)] min-w-[325px]"
          >
            <Company {...company} />
          </li>
        );
      })}
    </menu>
  );
}
