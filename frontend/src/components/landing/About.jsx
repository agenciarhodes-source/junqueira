import { Reveal } from "@/components/landing/Reveal";
import { IMAGES, SITE } from "@/config/site";

export const About = () => (
  <section data-testid="about-section" className="py-16 sm:py-24">
    <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={IMAGES.office}
            alt="Ambiente de escritório de advocacia"
            data-testid="about-image"
            loading="lazy"
            className="h-[280px] w-full object-cover sm:h-[380px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#804040]/20 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]">
          06 — Institucional
        </p>
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[#1C1C1E] sm:text-3xl">
          {SITE.firmName}
        </h2>
        <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-[#55555C]">
          O {SITE.firmName} atua na área previdenciária com foco em atendimento digital, análise
          individualizada e comunicação clara em cada etapa. O escritório trabalha de forma
          criteriosa, observando as normas éticas da advocacia e a legislação aplicável.
        </p>
        <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[#55555C]">
          Esta página tem caráter exclusivamente informativo. Nenhum conteúdo aqui apresentado
          constitui promessa de resultado, que sempre depende da análise individual do caso.
        </p>
        <p className="mt-6 font-editorial text-lg italic text-[#804040]">
          Informação clara é o primeiro passo de qualquer análise.
        </p>
      </Reveal>
    </div>
  </section>
);
