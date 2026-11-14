import React, { useMemo, useState } from 'react';
import {
  Filter,
  Heart,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import {
  Breed,
  BreedFilterState,
  CategorySlug,
  CoatType,
  EnergyLevel,
  SizeCategory,
} from '../types/dog';
import { UNIQUE_COUNTRIES, UNIQUE_TEMPERAMENTS } from '../data/breeds';
import { DOG_CATEGORIES } from '../data/categories';
import { BreedCard } from '../components/BreedCard';

interface CatalogPageProps {
  breeds: Breed[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectBreed: (breed: Breed) => void;
  filters: BreedFilterState;
  onChangeFilters: React.Dispatch<React.SetStateAction<BreedFilterState>>;
  onResetFilters: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  breeds,
  favorites,
  onToggleFavorite,
  onSelectBreed,
  filters,
  onChangeFilters,
  onResetFilters,
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);

  const filteredBreeds = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    const list = breeds.filter((b) => {
      if (filters.onlyFavorites && !favorites.includes(b.id)) return false;

      if (query) {
        const haystack = [
          b.name,
          b.originCountry,
          b.originRegion,
          b.shortDescription,
          ...b.temperament,
          ...b.coatColors,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      if (filters.country !== 'Tous' && b.originCountry !== filters.country) return false;
      if (filters.size !== 'Tous' && b.sizeCategory !== filters.size) return false;
      if (filters.coatType !== 'Tous' && b.coatType !== filters.coatType) return false;
      if (filters.energyLevel !== 'Tous' && b.energyLevel !== filters.energyLevel) return false;

      if (
        filters.temperament !== 'Tous' &&
        !b.temperament.includes(filters.temperament)
      ) {
        return false;
      }

      if (
        filters.category !== 'Toutes' &&
        !b.categories.includes(filters.category)
      ) {
        return false;
      }

      if (filters.weightBracket !== 'Tous') {
        const avgWeight = (b.weightRangeKg[0] + b.weightRangeKg[1]) / 2;
        if (filters.weightBracket === 'Moins de 10 kg' && avgWeight >= 10) return false;
        if (filters.weightBracket === '10 à 25 kg' && (avgWeight < 10 || avgWeight > 25)) return false;
        if (filters.weightBracket === '25 à 45 kg' && (avgWeight <= 25 || avgWeight > 45)) return false;
        if (filters.weightBracket === 'Plus de 45 kg' && avgWeight <= 45) return false;
      }

      if (filters.lifespanBracket !== 'Tous') {
        const avgLife = (b.lifespanRangeYears[0] + b.lifespanRangeYears[1]) / 2;
        if (filters.lifespanBracket === '8–11 ans' && avgLife >= 11.5) return false;
        if (filters.lifespanBracket === '11–13 ans' && (avgLife < 11 || avgLife > 13.5)) return false;
        if (filters.lifespanBracket === '13 ans et plus' && avgLife < 13) return false;
      }

      return true;
    });

    const sorted = [...list];
    switch (filters.sortBy) {
      case 'nom':
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
        break;
      case 'taille-asc':
        sorted.sort((a, b) => a.heightRangeCm[0] - b.heightRangeCm[0]);
        break;
      case 'taille-desc':
        sorted.sort((a, b) => b.heightRangeCm[1] - a.heightRangeCm[1]);
        break;
      case 'esperance':
        sorted.sort((a, b) => b.lifespanRangeYears[1] - a.lifespanRangeYears[1]);
        break;
      case 'popularite':
      default:
        sorted.sort((a, b) => a.popularityRank - b.popularityRank);
        break;
    }

    return sorted;
  }, [breeds, favorites, filters]);

  const activeFilterCount = [
    filters.country !== 'Tous',
    filters.size !== 'Tous',
    filters.weightBracket !== 'Tous',
    filters.coatType !== 'Tous',
    filters.energyLevel !== 'Tous',
    filters.temperament !== 'Tous',
    filters.lifespanBracket !== 'Tous',
    filters.category !== 'Toutes',
    filters.onlyFavorites,
    filters.search.trim().length > 0,
  ].filter(Boolean).length;

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 border-b border-[#141413]/12 pb-6">
        <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
          Catalogue encyclopédique · {breeds.length} races
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413]">
          Toutes les races de chiens du monde
        </h1>
        <p className="text-base text-[#141413]/75 max-w-2xl leading-relaxed">
          Recherchez instantanément par nom, pays d’origine, gabarit, pelage, niveau d’énergie,
          tempérament ou espérance de vie. Cliquez sur une race pour ouvrir son dossier complet.
        </p>
      </div>

      {/* Smart Search Bar & Quick Controls */}
      <div className="bg-white rounded-xl border border-[#141413]/12 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#141413]/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={filters.search}
              onChange={(e) =>
                onChangeFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              placeholder="Rechercher une race, un pays ou un trait (ex : Shiba, Japon, calme, berger...)"
              aria-label="Rechercher une race de chien"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-sm text-[#141413] placeholder:text-[#141413]/45 focus:outline-none focus:border-[#EA580C]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                onChangeFilters((prev) => ({
                  ...prev,
                  onlyFavorites: !prev.onlyFavorites,
                }))
              }
              className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filters.onlyFavorites
                  ? 'bg-[#EA580C] border-[#EA580C] text-white'
                  : 'bg-[#F7F3EC] border-[#141413]/12 text-[#141413] hover:border-[#EA580C]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${filters.onlyFavorites ? 'fill-current' : ''}`} />
              <span>Mes favoris ({favorites.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAdvancedFilters((s) => !s)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs font-semibold text-[#141413] hover:border-[#141413]/40 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showAdvancedFilters ? 'Masquer filtres' : 'Afficher filtres'}</span>
            </button>

            <select
              value={filters.sortBy}
              onChange={(e) =>
                onChangeFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as BreedFilterState['sortBy'],
                }))
              }
              aria-label="Trier les races"
              className="px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs font-semibold text-[#141413] focus:outline-none focus:border-[#EA580C] cursor-pointer"
            >
              <option value="popularite">Tri : Popularité</option>
              <option value="nom">Tri : Nom (A–Z)</option>
              <option value="taille-asc">Tri : Plus petit au plus grand</option>
              <option value="taille-desc">Tri : Plus grand au plus petit</option>
              <option value="esperance">Tri : Meilleure espérance de vie</option>
            </select>
          </div>
        </div>

        {/* Multi-Criteria Filter Grid */}
        {showAdvancedFilters && (
          <div className="pt-4 border-t border-[#141413]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Pays d'origine */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Pays d’origine</span>
              <select
                value={filters.country}
                onChange={(e) =>
                  onChangeFilters((p) => ({ ...p, country: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Tous les pays</option>
                {UNIQUE_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>

            {/* Taille */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Taille</span>
              <select
                value={filters.size}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    size: e.target.value as SizeCategory | 'Tous',
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Toutes tailles</option>
                <option value="Petit">Petit (&lt; 35 cm)</option>
                <option value="Moyen">Moyen (35 – 55 cm)</option>
                <option value="Grand">Grand (&gt; 55 cm)</option>
              </select>
            </label>

            {/* Poids */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Poids</span>
              <select
                value={filters.weightBracket}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    weightBracket: e.target.value as BreedFilterState['weightBracket'],
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Tous poids</option>
                <option value="Moins de 10 kg">Moins de 10 kg</option>
                <option value="10 à 25 kg">10 à 25 kg</option>
                <option value="25 à 45 kg">25 à 45 kg</option>
                <option value="Plus de 45 kg">Plus de 45 kg</option>
              </select>
            </label>

            {/* Type de pelage */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Type de pelage</span>
              <select
                value={filters.coatType}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    coatType: e.target.value as CoatType | 'Tous',
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Tous pelages</option>
                <option value="Court">Poil court</option>
                <option value="Mi-long">Poil mi-long</option>
                <option value="Long">Poil long</option>
                <option value="Frisé">Poil frisé</option>
              </select>
            </label>

            {/* Niveau d'énergie */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Niveau d’énergie</span>
              <select
                value={filters.energyLevel}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    energyLevel: e.target.value as EnergyLevel | 'Tous',
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Tous niveaux</option>
                <option value="Calme">Calme</option>
                <option value="Modéré">Modéré</option>
                <option value="Élevé">Élevé</option>
                <option value="Très élevé">Très élevé</option>
              </select>
            </label>

            {/* Tempérament */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Tempérament</span>
              <select
                value={filters.temperament}
                onChange={(e) =>
                  onChangeFilters((p) => ({ ...p, temperament: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Tous tempéraments</option>
                {UNIQUE_TEMPERAMENTS.map((temp) => (
                  <option key={temp} value={temp}>
                    {temp}
                  </option>
                ))}
              </select>
            </label>

            {/* Espérance de vie */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Espérance de vie</span>
              <select
                value={filters.lifespanBracket}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    lifespanBracket: e.target.value as BreedFilterState['lifespanBracket'],
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Tous">Toutes durées</option>
                <option value="8–11 ans">8 à 11 ans</option>
                <option value="11–13 ans">11 à 13 ans</option>
                <option value="13 ans et plus">13 ans et plus</option>
              </select>
            </label>

            {/* Catégorie */}
            <label className="block space-y-1">
              <span className="text-xs font-medium text-[#141413]/70">Catégorie de chien</span>
              <select
                value={filters.category}
                onChange={(e) =>
                  onChangeFilters((p) => ({
                    ...p,
                    category: e.target.value as CategorySlug | 'Toutes',
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Toutes">Toutes catégories</option>
                {DOG_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {/* Active Results & Reset Row */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#141413]/70">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#EA580C]" />
            <span className="font-mono-num font-semibold text-[#141413]">
              {filteredBreeds.length}
            </span>
            <span>
              {filteredBreeds.length <= 1 ? 'race trouvée' : 'races trouvées'} sur {breeds.length}
            </span>
          </div>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] hover:text-[#141413] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser les filtres ({activeFilterCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {filteredBreeds.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#141413]/12 p-12 text-center space-y-4">
          <h2 className="font-display text-2xl font-semibold text-[#141413]">
            Aucune race ne correspond à ces critères
          </h2>
          <p className="text-sm text-[#141413]/70 max-w-md mx-auto">
            Essayez d’élargir votre recherche ou de réinitialiser certains filtres pour explorer l’ensemble du catalogue.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Afficher toutes les races</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              isFavorite={favorites.includes(breed.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectBreed}
            />
          ))}
        </div>
      )}
    </div>
  );
};
