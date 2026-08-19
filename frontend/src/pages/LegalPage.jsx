import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SITE } from "@/config/site";

const CONTENT = {
  privacidade: {
    title: "Política de Privacidade",
    sections: [
      {
        heading: "1. Dados coletados",
        body: "Esta página pode coletar parâmetros de campanha (como UTM e GCLID) para fins de mensuração. Dados pessoais fornecidos voluntariamente no formulário externo de triagem são tratados conforme a finalidade informada no momento do envio.",
      },
      {
        heading: "2. Finalidade",
        body: "As informações são utilizadas exclusivamente para viabilizar o atendimento solicitado, organizar a triagem inicial e cumprir obrigações legais e regulatórias aplicáveis à advocacia.",
      },
      {
        heading: "3. Compartilhamento",
        body: "Os dados não são vendidos nem compartilhados para fins comerciais. O compartilhamento ocorre apenas quando necessário à prestação do serviço ou por determinação legal.",
      },
      {
        heading: "4. Segurança e retenção",
        body: "Adotamos medidas técnicas e organizacionais razoáveis para proteger as informações. Os dados são mantidos apenas pelo período necessário às finalidades descritas ou exigido por lei.",
      },
      {
        heading: "5. Contato",
        body: `Para exercer direitos ou esclarecer dúvidas sobre esta política, utilize o canal oficial: ${SITE.phoneIntl}.`,
      },
    ],
  },
  termos: {
    title: "Termos de Uso",
    sections: [
      {
        heading: "1. Caráter informativo",
        body: "O conteúdo desta página tem finalidade exclusivamente informativa, em conformidade com o Código de Ética e Disciplina da OAB. Nenhuma informação aqui apresentada constitui aconselhamento jurídico, promessa ou garantia de resultado.",
      },
      {
        heading: "2. Uso do formulário",
        body: "O envio de informações pelo formulário de triagem não estabelece, por si só, relação advogado-cliente. A eventual contratação depende de análise individual e de instrumento próprio.",
      },
      {
        heading: "3. Propriedade intelectual",
        body: "Textos, marcas e elementos visuais desta página pertencem ao escritório ou são utilizados com autorização, sendo vedada a reprodução sem finalidade legítima.",
      },
      {
        heading: "4. Alterações",
        body: "Estes termos podem ser atualizados periodicamente. A versão vigente é sempre a publicada nesta página.",
      },
    ],
  },
  lgpd: {
    title: "LGPD — Proteção de Dados",
    sections: [
      {
        heading: "1. Compromisso",
        body: "O tratamento de dados pessoais observa a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com respeito aos princípios de finalidade, adequação, necessidade e transparência.",
      },
      {
        heading: "2. Bases legais",
        body: "Os dados são tratados com base no consentimento do titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse, conforme o caso.",
      },
      {
        heading: "3. Direitos do titular",
        body: "Você pode solicitar, a qualquer momento, a confirmação, o acesso, a correção, a anonimização, a portabilidade ou a eliminação dos seus dados pessoais, nos termos da legislação.",
      },
      {
        heading: "4. Como exercer seus direitos",
        body: `As solicitações podem ser encaminhadas pelo canal oficial: ${SITE.phoneIntl}. As demandas são analisadas e respondidas dentro dos prazos legais.`,
      },
    ],
  },
};

export default function LegalPage({ slug }) {
  const page = CONTENT[slug];

  useEffect(() => {
    document.title = `${page.title} | ${SITE.firmName}`;
  }, [page.title]);

  return (
    <div data-testid={`legal-page-${slug}`} className="min-h-screen bg-[#F1F1F1]">
      <Header />
      <main className="mx-auto max-w-[860px] px-5 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <a
          href="/bpc-loas"
          data-testid="legal-back-link"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#804040] transition-colors hover:text-[#663333]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a página
        </a>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#1C1C1E] sm:text-4xl">
          {page.title}
        </h1>
        <div className="mt-8 rounded-xl border border-[#E2E2E2] bg-white p-6 sm:p-10">
          {page.sections.map((section) => (
            <section key={section.heading} className="mb-8 last:mb-0">
              <h2 className="text-base font-semibold text-[#1C1C1E] sm:text-lg">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#55555C] sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
