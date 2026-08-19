import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/Reveal";

const FAQ = [
  {
    q: "BPC é aposentadoria?",
    a: "Não. O BPC é um benefício assistencial, previsto na LOAS, enquanto a aposentadoria é um benefício previdenciário que exige contribuições ao INSS. Por essa diferença, o BPC não inclui 13º salário nem gera pensão por morte.",
  },
  {
    q: "É preciso ter contribuído para solicitar BPC?",
    a: "Não. Por se tratar de benefício assistencial, não é exigido tempo de contribuição. A análise se concentra em outros critérios legais, como idade ou deficiência de longo prazo e a situação socioeconômica do grupo familiar.",
  },
  {
    q: "O que significa um pedido indeferido?",
    a: "Significa que, na análise realizada, o INSS entendeu que os requisitos não ficaram demonstrados. A carta de decisão informa os fundamentos, e compreendê-los é o primeiro passo para avaliar os próximos passos, como a apresentação de recurso.",
  },
  {
    q: "Quais informações normalmente precisam ser organizadas?",
    a: "Em geral, documentos pessoais de quem mora na mesma casa, comprovantes de residência e de renda, inscrição atualizada no CadÚnico e, quando aplicável, laudos, exames e relatórios relacionados à saúde.",
  },
  {
    q: "Quem pode solicitar o benefício?",
    a: "A lei prevê critérios relacionados à idade, a partir de 65 anos, ou à deficiência de longo prazo, além de um critério socioeconômico ligado à renda do grupo familiar. A verificação desses requisitos é feita de forma individual.",
  },
  {
    q: "Como funciona a análise inicial?",
    a: "A triagem reúne informações básicas sobre a situação por meio de um formulário externo. A partir dessas respostas, é avaliada a aderência ao fluxo de atendimento e, quando aplicável, o caso segue para a central de atendimento.",
  },
];

export const Faq = () => (
  <section data-testid="faq-section" className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-[860px] px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]">
          05 — Perguntas frequentes
        </p>
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[#1C1C1E] sm:text-3xl">
          Dúvidas comuns sobre o BPC/LOAS
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              data-testid={`faq-accordion-item-${i + 1}`}
              className="border-b border-[#E2E2E2]"
            >
              <AccordionTrigger
                data-testid={`faq-question-${i + 1}`}
                className="py-5 text-left text-base font-medium text-[#1C1C1E] hover:text-[#804040] hover:no-underline"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-[#55555C] sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
