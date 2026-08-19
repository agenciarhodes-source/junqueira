import { Reveal } from "@/components/landing/Reveal";

const CHAPTERS = [
  {
    num: "01",
    title: "O que é o BPC?",
    text: "O Benefício de Prestação Continuada (BPC) é um benefício assistencial previsto na Lei Orgânica da Assistência Social (LOAS). Diferente da aposentadoria, ele não exige contribuições anteriores ao INSS. Possui critérios próprios, definidos em lei, que envolvem idade ou deficiência de longo prazo e a situação socioeconômica do grupo familiar.",
  },
  {
    num: "02",
    title: "Quais informações fazem parte da análise?",
    text: "A análise costuma considerar informações como idade, a existência de deficiência quando aplicável, a composição e a renda do grupo familiar, registros em cadastros sociais e demais elementos previstos na legislação. Cada situação apresenta particularidades, e a avaliação acontece caso a caso.",
  },
  {
    num: "03",
    title: "Documentação e registros",
    text: "Documentos e registros organizados ajudam qualquer análise: documentos pessoais, comprovantes de residência e de renda, laudos e exames quando houver questão de saúde e a inscrição no Cadastro Único (CadÚnico). Reunir essas informações com antecedência evita retrabalho e facilita a compreensão do cenário.",
  },
  {
    num: "04",
    title: "Pedido em análise ou indeferido",
    text: "Quando já existe um pedido, é importante compreender em qual estágio ele se encontra. Se houver decisão de indeferimento, entender os fundamentos indicados pelo INSS é o primeiro passo para avaliar os caminhos disponíveis, que podem incluir recurso administrativo ou outras medidas, conforme o caso.",
  },
];

export const Chapters = () => (
  <section data-testid="chapters-section" className="py-16 sm:py-24">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]">
          02 — Conteúdo
        </p>
        <h2 className="max-w-[26ch] text-2xl font-semibold leading-snug tracking-tight text-[#1C1C1E] sm:text-3xl">
          Entenda o benefício em quatro capítulos
        </h2>
      </Reveal>
      <div className="mt-12">
        {CHAPTERS.map((chapter, i) => (
          <Reveal key={chapter.num} delay={0.05 * i}>
            <article
              data-testid={`chapter-${chapter.num}`}
              className="grid gap-4 border-t border-[#E2E2E2] py-10 first:border-t-0 sm:grid-cols-[120px_1fr] sm:gap-10 lg:grid-cols-[180px_1fr]"
            >
              <span className="font-editorial text-6xl italic leading-none text-[#C5A059] sm:text-7xl">
                {chapter.num}
              </span>
              <div className="max-w-[68ch]">
                <h3 className="text-lg font-semibold text-[#1C1C1E] sm:text-xl">{chapter.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#55555C]">{chapter.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
