import { atom, map } from "nanostores";
import type { CompanyProps } from "../islands/Company";
import json from "../../data.json";

export const allCompanies: CompanyProps[] = json.map((company) => ({
  isNew: company.new,
  isFeatured: company.featured,
  ...company,
}));

export type FilterProps = {
  label: string;
  canRemove: boolean;
};

export const filterCompanies = map<CompanyProps[]>(allCompanies);
export const filterItems = map<FilterProps[]>([]);
export const isHidden = atom(true);

export const refreshCompanies = () => {
  const $filterItems = filterItems.get();

  if ($filterItems.length > 0) {
    let companiesDisplayed = [...allCompanies];

    $filterItems.forEach(({ label }) => {
      companiesDisplayed = companiesDisplayed.filter(
        ({ role, level, languages, tools }) => {
          return (
            label === role ||
            label === level ||
            languages.includes(label) ||
            tools.includes(label)
          );
        }
      );
    });

    return companiesDisplayed;
  }

  return allCompanies;
};
