import { FileQuestion, Hourglass, FileX2, ListChecks } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const CARDS = [
  {
    icon: FileQuestion,
    title: "Ainda não houve pedido",
    text: "Orientação prévia sobre requisitos, documentos e renda familiar antes de qualquer solicitação.",
  },
  {
    icon: Hourglass,
    title: "Pedido está em análise",
    text: "Compreensão do estágio do pedido, dos prazos e das possíveis exigências do INSS.",
  },
  {
    icon: FileX2,
    title: "Pedido foi indeferido",
    text: "Entendimento dos fundamentos do indeferimento para avaliar os caminhos disponíveis.",
  },
  {
    icon: ListChecks,
    title: "Dúvidas sobre os critérios",
    text: "Esclarecimentos sobre critérios de idade, saúde e composição da renda do grupo familiar.",
  },
];

export const Situations = () => (
  <section data-testid="situations-section" className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]">
          01 — Identificação
        </p>
        <h2 className="max-w-[24ch] text-2xl font-semibold leading-snug tracking-tight text-[#1C1C1E] sm:text-3xl">
          Esta página pode ajudar a entender situações como:
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article
              data-testid={`situation-card-${i + 1}`}
              className="group h-full rounded-xl border border-[#E2E2E2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]"
            >
              <card.icon className="h-6 w-6 text-[#804040] transition-colors duration-300 group-hover:text-[#C5A059]" />
              <h3 className="mt-4 text-base font-semibold text-[#1C1C1E]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#55555C]">{card.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
