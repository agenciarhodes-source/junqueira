import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CtaButton } from "@/components/landing/CtaButton";

export const StickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="mobile-sticky-cta"
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E2E2] bg-white/95 px-5 py-3 backdrop-blur-md md:hidden"
        >
          <CtaButton
            location="sticky-mobile"
            testId="sticky-cta-button"
            className="w-full px-6 py-3.5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
