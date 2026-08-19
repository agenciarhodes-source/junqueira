const ITEMS = [
  "Benefício de Prestação Continuada",
  "Informação clara",
  "Análise individualizada",
  "Atendimento digital",
  "Assistência social",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-8 text-xs font-semibold uppercase tracking-[0.3em] text-white/85">
          {item}
        </span>
        <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A059]" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    aria-hidden="true"
    className="overflow-hidden border-y border-[#C5A059]/30 bg-[#804040] py-4"
  >
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </div>
);
