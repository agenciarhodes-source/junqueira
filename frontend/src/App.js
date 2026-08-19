import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import BpcLoasPage from "@/pages/BpcLoasPage";
import LegalPage from "@/pages/LegalPage";
import { initTracking } from "@/lib/tracking";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    initTracking();
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/bpc-loas" replace />} />
        <Route path="/bpc-loas" element={<BpcLoasPage />} />
        <Route path="/politica-de-privacidade" element={<LegalPage slug="privacidade" />} />
        <Route path="/termos-de-uso" element={<LegalPage slug="termos" />} />
        <Route path="/lgpd" element={<LegalPage slug="lgpd" />} />
        <Route path="*" element={<Navigate to="/bpc-loas" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
