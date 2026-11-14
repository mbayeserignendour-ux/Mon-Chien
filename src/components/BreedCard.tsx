import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Breed } from '../types/dog';
import { BreedPortrait } from './BreedPortrait';

interface BreedCardProps {
  breed: Breed;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (breed: Breed) => void;
}

export const BreedCard: React.FC<BreedCardProps> = ({
  breed,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  return (
    <article className="group bg-white rounded-xl border border-[#141413]/10 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Visual Portrait */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <button
          type="button"
          onClick={() => onSelect(breed)}
          className="block w-full h-full text-left cursor-pointer focus-visible:outline-none"
          aria-label={`Ouvrir la fiche détaillée de ${breed.name}`}
        >
          <BreedPortrait breed={breed} className="w-full h-full" />
        </button>

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(breed.id);
          }}
          aria-label={
            isFavorite
              ? `Retirer ${breed.name} des favoris`
              : `Ajouter ${breed.name} aux favoris`
          }
          className={`absolute top-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
            isFavorite
              ? 'bg-[#EA580C] border-[#EA580C] text-white'
              : 'bg-white/92 border-[#141413]/12 text-[#141413] hover:text-[#EA580C]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          {/* Unboxed typographic metadata (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#141413]/60">
            <span className="font-medium text-[#EA580C]">{breed.originCountry}</span>
            <span aria-hidden="true">·</span>
            <span>Taille : {breed.sizeCategory}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-num">{breed.heightAvg}</span>
          </div>

          <h3 className="font-display text-xl font-semibold text-[#141413] leading-snug">
            {breed.name}
          </h3>

          <p className="text-sm text-[#141413]/75 leading-relaxed line-clamp-2">
            {breed.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-[#141413]/8 flex items-center justify-between gap-3">
          <span className="text-xs text-[#141413]/55 font-mono-num">
            {breed.lifespan}
          </span>
          <button
            type="button"
            onClick={() => onSelect(breed)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F7F3EC] hover:bg-[#141413] text-[#141413] hover:text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Découvrir cette race</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
