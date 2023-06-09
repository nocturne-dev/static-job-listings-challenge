export type CardProps = {
  isFeatured: boolean;
  children: React.ReactNode;
};

export default function Card({ isFeatured, children }: CardProps) {
  const additionalCardStyle = isFeatured
    ? "border-l-4 border-desaturated-dark-cyan pl-5 md:pl-9"
    : "pl-6 md:pl-10";

  const cardStyle =
    "relative rounded-md bg-white pb-6 pr-6 pt-8 shadow-card md:grid md:grid-cols-[auto_auto_1fr] md:gap-x-6 md:py-8 md:pr-10";

  return (
    <section className={`${cardStyle} ${additionalCardStyle}`}>
      {children}
    </section>
  );
}
