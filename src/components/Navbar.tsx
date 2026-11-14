import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { PageId } from '../types/dog';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'races', label: 'Races de chiens' },
  { id: 'categories', label: 'Catégories' },
  { id: 'galerie', label: 'Galerie' },
  { id: 'conseils', label: 'Conseils' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  favoritesCount,
  onOpenFavorites,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#141413]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand */}
        <button
          type="button"
          onClick={() => handleNav('accueil')}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded"
          aria-label="Accueil - Univers des Chiens"
        >
          <Logo />
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#141413]/75"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded ${
                  isActive ? 'text-[#141413] font-semibold' : ''
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#EA580C] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              onOpenFavorites();
              setMobileOpen(false);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141413] hover:bg-[#EA580C] text-white text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                favoritesCount > 0 ? 'fill-[#EA580C] text-[#EA580C]' : ''
              }`}
            />
            <span>Favoris</span>
            <span className="font-mono-num text-[11px] opacity-85">({favoritesCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg border border-[#141413]/15 text-[#141413] hover:bg-white transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#141413]/10 bg-[#F7F3EC] px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#141413] text-white'
                      : 'text-[#141413]/85 hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
