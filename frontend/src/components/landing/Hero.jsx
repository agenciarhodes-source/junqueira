import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { IMAGES } from "@/config/site";

const LINES = ["BPC/LOAS:", "entenda quais critérios", "fazem parte da análise"];
const TRUST = ["Atendimento digital", "Análise individualizada", "Junqueira Advogados"];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 sm:px-6 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <motion.p
            {...fadeUp(0.05)}
            data-testid="hero-area-tag"
            className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#804040]"
          >
            <span className="h-px w-8 bg-[#C5A059]" />
            Direito Previdenciário — BPC/LOAS
          </motion.p>
          <h1 className="text-[30px] font-semibold leading-[1.14] tracking-tight text-[#1C1C1E] sm:text-4xl lg:text-[44px]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.18 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            {...fadeUp(0.62)}
            data-testid="hero-subtitle"
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-[#55555C] sm:text-lg"
          >
            Informações claras sobre requisitos, documentação, pedido e diferentes situações
            relacionadas ao Benefício de Prestação Continuada.
          </motion.p>
          <motion.ul {...fadeUp(0.74)} className="mt-7 flex flex-wrap gap-2.5">
            {TRUST.map((item) => (
              <li
                key={item}
                data-testid={`hero-trust-${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-white px-4 py-2 text-xs font-medium text-[#55555C]"
              >
                <Check className="h-3.5 w-3.5 text-[#804040]" />
                {item}
              </li>
            ))}
          </motion.ul>
          <motion.div {...fadeUp(0.86)} className="mt-9">
            <CtaButton location="hero" testId="hero-iniciar-triagem-button" />
            <p className="mt-4 text-xs text-[#55555C]">
              O botão abre um formulário externo e seguro, com poucas perguntas objetivas.
            </p>
          </motion.div>
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-[#C5A059]/50" />
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={IMAGES.hero}
              alt="Profissional analisando documentos em atendimento previdenciário"
              data-testid="hero-image"
              fetchpriority="high"
              style={{ y: imageY, scale: 1.12 }}
              className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#804040]/25 via-transparent to-transparent" />
          </div>
          <figcaption className="mt-4 text-right font-editorial text-sm italic text-[#804040]">
            Atendimento criterioso, informação clara.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};
