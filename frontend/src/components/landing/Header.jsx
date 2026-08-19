import { SITE } from "@/config/site";

export const Header = () => (
  <header
    data-testid="site-header"
    className="fixed inset-x-0 top-0 z-40 border-b border-[#E2E2E2]/70 bg-white/90 backdrop-blur-md"
  >
    <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8">
      <a
        href="/bpc-loas"
        data-testid="header-brand-link"
        className="flex items-baseline gap-2"
        aria-label="Junqueira Advogados"
      >
        <span className="text-lg font-semibold tracking-tight text-[#1C1C1E]">Junqueira</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#804040]">
          Advogados
        </span>
      </a>
      <span className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#55555C] sm:flex">
        <span className="h-1 w-1 rotate-45 bg-[#C5A059]" />
        {SITE.area}
      </span>
    </div>
  </header>
);
