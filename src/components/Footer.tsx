import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Share2 } from 'lucide-react';
import { PageId } from '../types/dog';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  totalBreeds: number;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, totalBreeds }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const goTo = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-[#F7F3EC] mt-20 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-[#F7F3EC]/70 leading-relaxed max-w-sm">
              Encyclopédie canine francophone consacrée à l’exploration des races du monde entier,
              à leur histoire, à leurs besoins et au bien-être de nos compagnons.
            </p>
            <div className="text-xs font-mono-num text-[#FDBA74]">
              {totalBreeds} races documentées · 6 continents · 9 catégories
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-[#F7F3EC]/70">
              {(
                [
                  ['accueil', 'Accueil'],
                  ['races', 'Races de chiens'],
                  ['categories', 'Catégories'],
                  ['galerie', 'Galerie multimédia'],
                ] as [PageId, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => goTo(id)}
                    className="hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">Ressources</h3>
            <ul className="space-y-2 text-sm text-[#F7F3EC]/70">
              {(
                [
                  ['conseils', 'Blog & Conseils'],
                  ['apropos', 'À propos & FAQ'],
                  ['contact', 'Contact'],
                ] as [PageId, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => goTo(id)}
                    className="hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#EA580C]" />
              <span>Lettre d’information canine</span>
            </h3>
            <p className="text-xs text-[#F7F3EC]/70 leading-relaxed">
              Recevez chaque mois nos nouveaux dossiers de races, guides vétérinaires et conseils d’éducation positive.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#FDBA74] bg-white/5 border border-white/15 px-3.5 py-2.5 rounded-lg">
                <Check className="w-4 h-4 shrink-0" />
                <span>Merci ! Votre inscription à la newsletter est confirmée.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.fr"
                    aria-label="Adresse e-mail pour la newsletter"
                    className="flex-1 min-w-0 px-3.5 py-2 rounded-lg bg-white/8 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#EA580C]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>S’inscrire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-[#FCA5A5]">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Social Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3EC]/55">
          <p>© {new Date().getFullYear()} Univers des Chiens. Plateforme éducative et encyclopédique canine.</p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-[#F7F3EC]/70">
              <Share2 className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Réseaux :</span>
            </span>
            <button
              type="button"
              onClick={() => goTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Instagram
            </button>
            <button
              type="button"
              onClick={() => goTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              YouTube
            </button>
            <button
              type="button"
              onClick={() => goTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
