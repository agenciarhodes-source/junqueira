import { UserCheck, Users, FolderOpen, History } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const CARDS = [
  {
    icon: UserCheck,
    title: "Situação atual",
    text: "Idade a partir de 65 anos ou deficiência de longo prazo, conforme os critérios legais.",
  },
  {
    icon: Users,
    title: "Informações familiares",
    text: "Quem reside na mesma casa e como o orçamento do grupo familiar é composto.",
  },
  {
    icon: FolderOpen,
    title: "Documentação",
    text: "Documentos pessoais, comprovantes, registros de saúde e inscrição no CadÚnico.",
  },
  {
    icon: History,
    title: "Histórico do pedido",
    text: "Pedidos anteriores, cartas de decisão e o andamento registrado no Meu INSS.",
  },
];

export const Analysis = () => (
  <section data-testid="analysis-section" className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]">
          03 — Análise
        </p>
        <h2 className="max-w-[24ch] text-2xl font-semibold leading-snug tracking-tight text-[#1C1C1E] sm:text-3xl">
          O que normalmente é analisado
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article
              data-testid={`analysis-card-${i + 1}`}
              className="group h-full rounded-xl border border-[#E2E2E2] bg-[#F1F1F1]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:bg-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#804040]/10 transition-colors duration-300 group-hover:bg-[#804040]">
                <card.icon className="h-5 w-5 text-[#804040] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#1C1C1E]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#55555C]">{card.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
