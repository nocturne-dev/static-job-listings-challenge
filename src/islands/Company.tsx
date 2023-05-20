import FilterButton from "./FilterButton";
import Card from "./Card";

export type CompanyProps = {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function Company({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}: CompanyProps) {
  return (
    <Card isFeatured={isFeatured}>
      <figure className="absolute -top-6 max-w-[48px] md:relative md:top-0 md:max-w-[134px] md:place-self-center">
        <img className="w-screen rounded-full" src={logo} alt={company} />
      </figure>

      <article className="grid gap-y-[15px] md:gap-y-3">
        <section className="grid auto-cols-max grid-flow-col gap-x-6">
          <h1 className="items-center py-[10px] text-base leading-none text-desaturated-dark-cyan md:items-start md:text-lg">
            {company}
          </h1>

          {(isNew || isFeatured) && (
            <div className="grid auto-cols-max grid-flow-col items-center gap-x-2 md:items-start">
              {isNew && (
                <p className="rounded-2xl bg-desaturated-dark-cyan p-[10px] text-base leading-none text-white md:rounded-3xl md:p-2 md:text-lg">
                  New!
                </p>
              )}
              {isFeatured && (
                <p className="rounded-2xl bg-very-dark-grayish-cyan p-[10px] text-base leading-none text-white md:rounded-3xl md:p-2 md:text-lg">
                  Featured
                </p>
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-base leading-none text-very-dark-grayish-cyan hover:cursor-pointer hover:text-desaturated-dark-cyan md:text-lg">
            {position}
          </h2>
        </section>

        <section className="mt-[6px] grid auto-cols-max grid-flow-col gap-x-3">
          <p className="text-base leading-none text-dark-grayish-cyan md:text-lg">
            {postedAt}
          </p>
          <p className="text-base leading-none text-dark-grayish-cyan md:text-lg">
            &middot;
          </p>
          <p className="text-base leading-none text-dark-grayish-cyan md:text-lg">
            {contract}
          </p>
          <p className="text-base leading-none text-dark-grayish-cyan md:text-lg">
            &middot;
          </p>
          <p className="text-base leading-none text-dark-grayish-cyan md:text-lg">
            {location}
          </p>
        </section>
      </article>

      <hr className="mt-6 md:m-0 md:hidden" />

      <article className="mt-4 flex flex-row flex-wrap content-start gap-4 md:mt-0 md:content-center md:justify-end md:text-end">
        <FilterButton label={role} canRemove={false} />
        <FilterButton label={level} canRemove={false} />

        {languages.map((language, index) => (
          <FilterButton
            key={`${language}-${index}`}
            label={language}
            canRemove={false}
          />
        ))}

        {tools.map((tool, index) => (
          <FilterButton
            key={`${tool}-${index}`}
            label={tool}
            canRemove={false}
          />
        ))}
      </article>
    </Card>
  );
}
