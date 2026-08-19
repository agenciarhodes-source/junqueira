import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/config/site";

const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade", testId: "footer-privacy-link" },
  { label: "Termos de Uso", href: "/termos-de-uso", testId: "footer-terms-link" },
  { label: "LGPD", href: "/lgpd", testId: "footer-lgpd-link" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#2A1A1A] text-white/70">
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
      <div>
        <p className="text-lg font-semibold text-white">{SITE.firmName}</p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          {SITE.area}
        </p>
        <p className="mt-4 text-sm">{SITE.oab}</p>
      </div>
      <nav aria-label="Links legais">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Legal</p>
        <ul className="mt-4 space-y-2.5">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={link.testId}
                className="text-sm transition-colors duration-200 hover:text-[#C5A059]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
          Canais oficiais
        </p>
        <ul className="mt-4 space-y-2.5 text-sm">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#C5A059]" />
            <a
              href={`mailto:${SITE.email}`}
              data-testid="footer-email-link"
              className="transition-colors duration-200 hover:text-[#C5A059]"
            >
              {SITE.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#C5A059]" />
            <span data-testid="footer-phone">{SITE.phone}</span>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
            <span data-testid="footer-address">{SITE.address}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:px-6 lg:px-8">
        <p data-testid="footer-ethical-notice">
          Conteúdo estritamente informativo, em conformidade com o Código de Ética e Disciplina da
          OAB. Não constitui promessa de resultado nem substitui a análise individual do caso.
        </p>
        <p>
          © {new Date().getFullYear()} {SITE.firmName}. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);
