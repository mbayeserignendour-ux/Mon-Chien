import React, { useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown, Compass, ShieldCheck } from 'lucide-react';
import { PageId } from '../types/dog';
import { FAQ_ITEMS } from '../data/galleryAndFaq';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface AboutPageProps {
  totalBreeds: number;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ totalBreeds, onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
            À propos d’Univers des Chiens
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413] leading-tight">
            Comprendre chaque race pour mieux vivre ensemble
          </h1>
          <p className="text-base text-[#141413]/80 leading-relaxed">
            Univers des Chiens est une plateforme encyclopédique et éducative conçue pour offrir
            aux passionnés, aux familles et aux futurs adoptants une information claire, nuancée
            et fidèle à la réalité cynologique de chaque race.
          </p>
          <p className="text-base text-[#141413]/80 leading-relaxed">
            Notre conviction est simple : la connaissance précise des origines historiques, des
            besoins physiques, du tempérament et de la santé d’un chien est la première garantie
            d’une cohabitation harmonieuse et responsable.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('races')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Explorer les {totalBreeds} fiches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#141413]/15 text-[#141413] hover:border-[#141413] text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Contacter la rédaction</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#141413]/12 bg-[#EBE4D8] min-h-[320px]">
          <img
            src={MEDIA_ASSETS.bannerHerdingDogs}
            alt="Border Collie et Berger australien sur les hauteurs"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Editorial Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-3">
          <BookOpen className="w-6 h-6 text-[#EA580C]" />
          <h2 className="font-display text-xl font-semibold text-[#141413]">
            Rigueur encyclopédique en 20 points
          </h2>
          <p className="text-sm text-[#141413]/75 leading-relaxed">
            Chaque fiche suit un cadre analytique identique couvrant l’histoire, la morphologie,
            la compatibilité familiale, l’alimentation, le toilettage et la prévention vétérinaire.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-3">
          <Compass className="w-6 h-6 text-[#EA580C]" />
          <h2 className="font-display text-xl font-semibold text-[#141413]">
            Ouverture sur les six continents
          </h2>
          <p className="text-sm text-[#141413]/75 leading-relaxed">
            Des races françaises et européennes aux chiens primitifs d’Afrique, d’Asie, des
            Amériques et d’Océanie, notre base met en lumière la diversité mondiale du monde canin.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-3">
          <ShieldCheck className="w-6 h-6 text-[#EA580C]" />
          <h2 className="font-display text-xl font-semibold text-[#141413]">
            Éducation bienveillante et responsabilité
          </h2>
          <p className="text-sm text-[#141413]/75 leading-relaxed">
            Nous défendons une approche fondée sur l’éthologie moderne, le renforcement positif et
            le respect de la sensibilité propre à chaque lignée.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <div className="space-y-1.5 border-b border-[#141413]/12 pb-5">
          <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
            Questions fréquentes
          </div>
          <h2 className="font-display text-3xl font-semibold text-[#141413]">
            Foire aux questions (FAQ)
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[#141413]/12 divide-y divide-[#141413]/10 overflow-hidden">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono-num text-[#EA580C]">
                      {item.topic}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#141413]">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#141413]/60 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#EA580C]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#141413]/80 leading-relaxed max-w-3xl">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
