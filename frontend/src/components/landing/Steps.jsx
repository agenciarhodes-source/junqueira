import { Reveal } from "@/components/landing/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Entenda as informações",
    text: "Leia o conteúdo desta página e compreenda os critérios e documentos relacionados ao benefício.",
  },
  {
    num: "02",
    title: "Inicie a triagem",
    text: "Responda a poucas perguntas objetivas no formulário externo sobre a sua situação.",
  },
  {
    num: "03",
    title: "Continue para o atendimento",
    text: "Quando houver aderência ao fluxo, a triagem segue para a central de atendimento.",
  },
];

export const Steps = () => (
  <section data-testid="steps-section" className="bg-[#5C2E2E] py-16 sm:py-24">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C5A059]">
          04 — Como funciona
        </p>
        <h2 className="max-w-[24ch] text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
          Um caminho simples, em três etapas
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.1}>
            <article
              data-testid={`step-${step.num}`}
              className="border-t border-[#C5A059]/40 pt-6"
            >
              <span className="font-editorial text-5xl italic leading-none text-[#C5A059]">
                {step.num}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
