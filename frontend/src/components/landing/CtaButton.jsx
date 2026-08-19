import { ArrowRight } from "lucide-react";
import { openFlipform } from "@/lib/tracking";

export const CtaButton = ({ location, testId, className = "" }) => (
  <button
    type="button"
    data-testid={testId}
    onClick={() => openFlipform(location)}
    className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#804040] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#663333] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 ${className}`}
  >
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    <span className="relative">Fale com um Advogado</span>
    <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
);
