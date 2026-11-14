import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breed, CategorySlug } from '../types/dog';
import { DOG_CATEGORIES } from '../data/categories';
import { BreedPortrait } from '../components/BreedPortrait';

interface CategoriesPageProps {
  breeds: Breed[];
  onSelectBreed: (breed: Breed) => void;
  onExploreCategoryInCatalog: (slug: CategorySlug) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  breeds,
  onSelectBreed,
  onExploreCategoryInCatalog,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<CategorySlug>(DOG_CATEGORIES[0].slug);

  const activeCategory =
    DOG_CATEGORIES.find((c) => c.slug === selectedSlug) ?? DOG_CATEGORIES[0];
  const matchingBreeds = breeds.filter((b) => b.categories.includes(activeCategory.slug));

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-[#141413]/12 pb-6">
        <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
          Classification fonctionnelle & morphologique
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413]">
          Les 9 grandes catégories de chiens
        </h1>
        <p className="text-base text-[#141413]/75 max-w-2xl leading-relaxed">
          Chaque chien porte l’héritage d’une fonction historique. Sélectionnez une famille pour
          explorer son rôle, ses traits dominants et toutes les races associées.
        </p>
      </div>

      {/* Category Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOG_CATEGORIES.map((cat) => {
          const count = breeds.filter((b) => b.categories.includes(cat.slug)).length;
          const isSelected = cat.slug === selectedSlug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedSlug(cat.slug)}
              className={`group text-left rounded-xl border overflow-hidden flex items-center gap-4 p-3 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#141413] text-white border-[#141413] shadow-sm'
                  : 'bg-white text-[#141413] border-[#141413]/12 hover:border-[#EA580C]'
              }`}
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#EBE4D8]">
                {cat.coverPhoto && (
                  <img
                    src={cat.coverPhoto}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div
                  className={`text-[11px] font-mono-num ${
                    isSelected ? 'text-[#FDBA74]' : 'text-[#EA580C]'
                  }`}
                >
                  {count} races
                </div>
                <h2 className="font-display text-base font-semibold leading-snug">
                  {cat.name}
                </h2>
                <p
                  className={`text-xs line-clamp-2 ${
                    isSelected ? 'text-white/75' : 'text-[#141413]/65'
                  }`}
                >
                  {cat.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Showcase */}
      <section className="bg-white rounded-2xl border border-[#141413]/12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Cover Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] bg-[#EBE4D8]">
            {activeCategory.coverPhoto && (
              <img
                src={activeCategory.coverPhoto}
                alt={activeCategory.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <div className="text-xs font-mono-num text-[#FDBA74]">
                  {matchingBreeds.length} races répertoriées
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  {activeCategory.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Editorial Description */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-base text-[#141413]/85 leading-relaxed">
                {activeCategory.description}
              </p>

              <div className="bg-[#F7F3EC] rounded-xl p-4 space-y-1.5">
                <div className="text-xs font-semibold text-[#141413]">Rôle historique</div>
                <p className="text-sm text-[#141413]/75 leading-relaxed">
                  {activeCategory.historicalRole}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#141413]">
                  Traits caractéristiques de la famille
                </div>
                <ul className="space-y-1.5">
                  {activeCategory.keyTraits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-start gap-2 text-sm text-[#141413]/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#141413]/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#141413]/60">
                Cliquez sur n’importe quelle race ci-dessous pour consulter sa fiche en 20 points.
              </span>
              <button
                type="button"
                onClick={() => onExploreCategoryInCatalog(activeCategory.slug)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Filtrer dans le catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Matching Breeds List */}
        <div className="border-t border-[#141413]/10 p-6 sm:p-8 bg-[#FAF7F2]">
          <h3 className="font-display text-lg font-semibold text-[#141413] mb-4">
            Races appartenant à la catégorie « {activeCategory.name} »
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchingBreeds.map((breed) => (
              <button
                key={breed.id}
                type="button"
                onClick={() => onSelectBreed(breed)}
                className="group bg-white rounded-xl border border-[#141413]/10 p-3 flex items-center gap-3 text-left hover:border-[#EA580C] transition-colors cursor-pointer"
              >
                <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                  <BreedPortrait breed={breed} className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm font-semibold text-[#141413] group-hover:text-[#EA580C] truncate">
                    {breed.name}
                  </div>
                  <div className="text-xs text-[#141413]/60 truncate">
                    {breed.originCountry} · {breed.sizeCategory}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
