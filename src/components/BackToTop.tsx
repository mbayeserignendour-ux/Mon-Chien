import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#141413] hover:bg-[#EA580C] text-white text-xs font-semibold shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
    >
      <ArrowUp className="w-4 h-4" />
      <span className="hidden sm:inline">Haut de page</span>
    </button>
  );
};
