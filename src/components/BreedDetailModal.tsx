import React, { useEffect, useState } from 'react';
import {
  Activity,
  Award,
  BookOpen,
  Brain,
  Check,
  Compass,
  Dumbbell,
  Heart,
  Home,
  Info,
  Palette,
  PawPrint,
  Ruler,
  Scale,
  Scissors,
  Share2,
  ShieldAlert,
  Sparkles,
  Users,
  Utensils,
  Video,
  X,
  ZoomIn,
} from 'lucide-react';
import { Breed } from '../types/dog';
import { BreedPortrait } from './BreedPortrait';
import { BreedMotionPlayer } from './BreedMotionPlayer';
import { DOG_CATEGORIES } from '../data/categories';

interface BreedDetailModalProps {
  breed: Breed | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectBreed: (breed: Breed) => void;
  relatedBreeds: Breed[];
}

export const BreedDetailModal: React.FC<BreedDetailModalProps> = ({
  breed,
  onClose,
  isFavorite,
  onToggleFavorite,
  onSelectBreed,
  relatedBreeds,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'photo' | 'plate'>('photo');
  const [zoomed, setZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveMediaTab(breed?.photo ? 'photo' : 'plate');
    setZoomed(false);
    setCopied(false);
  }, [breed]);

  useEffect(() => {
    if (!breed) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomed) setZoomed(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [breed, zoomed, onClose]);

  if (!breed) return null;

  const handleCopyShare = async () => {
    const shareText = `${breed.name} (${breed.originCountry}) — Découvrez sa fiche complète sur Univers des Chiens.`;
    try {
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = encodeURIComponent(`Univers des Chiens — Fiche complète : ${breed.name}`);

  const categoryLabels = breed.categories
    .map((slug) => DOG_CATEGORIES.find((c) => c.slug === slug)?.name)
    .filter(Boolean)
    .join(' · ');

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141413]/75 backdrop-blur-sm overflow-y-auto p-3 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="breed-modal-title"
      onClick={onClose}
    >
      <div
        className="max-w-5xl mx-auto bg-[#F7F3EC] rounded-2xl border border-[#141413]/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Dossier Header */}
        <div className="sticky top-0 z-20 bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#141413]/10 px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-xs text-[#141413]/60 font-mono-num truncate">
              {breed.fciGroup} · Planche {breed.morpho.plateNumber}
            </div>
            <h2
              id="breed-modal-title"
              className="font-display text-xl sm:text-2xl font-semibold text-[#141413] truncate"
            >
              {breed.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleFavorite(breed.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                isFavorite
                  ? 'bg-[#EA580C] border-[#EA580C] text-white'
                  : 'bg-white border-[#141413]/15 text-[#141413] hover:border-[#EA580C]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? 'Favori enregistré' : 'Ajouter aux favoris'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#141413]/15 text-xs font-medium text-[#141413] hover:border-[#141413]/40 transition-colors cursor-pointer"
              title="Copier le lien de partage"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#EA580C]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copié' : 'Partager'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#141413] text-white hover:bg-[#EA580C] transition-colors cursor-pointer"
              aria-label="Fermer la fiche"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Dossier Body */}
        <div className="p-5 sm:p-8 space-y-10">
          {/* Top Hero Grid: Gallery Viewer + Technical Summary Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Viewer & Multi-view Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="relative rounded-xl overflow-hidden border border-[#141413]/12 bg-white aspect-[4/3]">
                <BreedPortrait
                  breed={breed}
                  forcePlate={activeMediaTab === 'plate'}
                  showPlateLabel
                  className="w-full h-full"
                />
                <button
                  type="button"
                  onClick={() => setZoomed(true)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#141413]/15 text-xs font-medium text-[#141413] hover:bg-[#141413] hover:text-white transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </button>
              </div>

              {/* Thumbnail switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {breed.photo && (
                    <button
                      type="button"
                      onClick={() => setActiveMediaTab('photo')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        activeMediaTab === 'photo'
                          ? 'bg-[#141413] text-white'
                          : 'bg-white text-[#141413]/75 border border-[#141413]/12 hover:text-[#141413]'
                      }`}
                    >
                      Photographie studio
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveMediaTab('plate')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      activeMediaTab === 'plate'
                        ? 'bg-[#141413] text-white'
                        : 'bg-white text-[#141413]/75 border border-[#141413]/12 hover:text-[#141413]'
                    }`}
                  >
                    Planche anatomique N° {breed.morpho.plateNumber}
                  </button>
                </div>
                <span className="text-xs text-[#141413]/60">{categoryLabels}</span>
              </div>
            </div>

            {/* Fiche Technique Récapitulative */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#141413]/12 p-5 sm:p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="border-b border-[#141413]/10 pb-3">
                  <h3 className="font-display text-lg font-semibold text-[#141413]">
                    Fiche technique récapitulative
                  </h3>
                  <p className="text-xs text-[#141413]/60 mt-0.5">
                    Critères morphologiques et repères de vie
                  </p>
                </div>

                <dl className="divide-y divide-[#141413]/8 text-sm">
                  <div className="py-2.5 flex items-center justify-between gap-4">
                    <dt className="text-[#141413]/65 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#EA580C]" />
                      <span>Origine</span>
                    </dt>
                    <dd className="font-medium text-right text-[#141413]">
                      {breed.originCountry} ({breed.continent})
                    </dd>
                  </div>
                  <div className="py-2.5 flex items-center justify-between gap-4">
                    <dt className="text-[#141413]/65 flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-[#EA580C]" />
                      <span>Taille moyenne</span>
                    </dt>
                    <dd className="font-mono-num font-medium text-[#141413]">
                      {breed.heightAvg} ({breed.sizeCategory})
                    </dd>
                  </div>
                  <div className="py-2.5 flex items-center justify-between gap-4">
                    <dt className="text-[#141413]/65 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#EA580C]" />
                      <span>Poids moyen</span>
                    </dt>
                    <dd className="font-mono-num font-medium text-[#141413]">{breed.weightAvg}</dd>
                  </div>
                  <div className="py-2.5 flex items-center justify-between gap-4">
                    <dt className="text-[#141413]/65 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#EA580C]" />
                      <span>Espérance de vie</span>
                    </dt>
                    <dd className="font-mono-num font-medium text-[#141413]">{breed.lifespan}</dd>
                  </div>
                  <div className="py-2.5 flex items-center justify-between gap-4">
                    <dt className="text-[#141413]/65 flex items-center gap-2">
                      <Scissors className="w-4 h-4 text-[#EA580C]" />
                      <span>Type de pelage</span>
                    </dt>
                    <dd className="font-medium text-[#141413]">{breed.coatType}</dd>
                  </div>
                </dl>

                {/* Intelligence & Activity Bars */}
                <div className="pt-3 border-t border-[#141413]/10 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-[#141413] flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5 text-[#EA580C]" />
                        <span>Niveau d’intelligence</span>
                      </span>
                      <span className="font-mono-num font-semibold">{breed.intelligenceScore}/5</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`h-1.5 rounded-sm ${
                            n <= breed.intelligenceScore ? 'bg-[#EA580C]' : 'bg-[#141413]/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-[#141413] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#EA580C]" />
                        <span>Niveau d’activité ({breed.energyLevel})</span>
                      </span>
                      <span className="font-mono-num font-semibold">{breed.activityScore}/5</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`h-1.5 rounded-sm ${
                            n <= breed.activityScore ? 'bg-[#141413]' : 'bg-[#141413]/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Share Strip */}
              <div className="pt-4 mt-4 border-t border-[#141413]/10 flex items-center justify-between gap-2 text-xs">
                <span className="text-[#141413]/60">Partager cette fiche :</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#F7F3EC] hover:bg-[#141413] hover:text-white transition-colors font-medium"
                  >
                    X
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#F7F3EC] hover:bg-[#141413] hover:text-white transition-colors font-medium"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#F7F3EC] hover:bg-[#141413] hover:text-white transition-colors font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Did You Know Editorial Highlight */}
          <div className="bg-white rounded-xl border border-[#EA580C]/30 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#141413]">
                Le saviez-vous ?
              </h3>
              <p className="text-sm text-[#141413]/85 leading-relaxed mt-1">{breed.didYouKnow}</p>
            </div>
          </div>

          {/* All 20 Required Breed Criteria Structured in Clear Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1, 2, 3: Identité & Histoire */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <BookOpen className="w-4 h-4 text-[#EA580C]" />
                <span>Origines, histoire et évolution</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <p>
                  <strong className="text-[#141413]">1. Nom de la race :</strong> {breed.name}
                </p>
                <p>
                  <strong className="text-[#141413]">2. Origine géographique :</strong> {breed.originCountry} — {breed.originRegion} ({breed.continent})
                </p>
                <p>
                  <strong className="text-[#141413]">3. Histoire et évolution :</strong> {breed.history}
                </p>
              </div>
            </section>

            {/* 4, 5, 6, 7, 8: Morphologie & Couleurs */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <Palette className="w-4 h-4 text-[#EA580C]" />
                <span>Description physique et mensurations</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <p>
                  <strong className="text-[#141413]">4. Description physique :</strong> {breed.physicalDescription}
                </p>
                <p>
                  <strong className="text-[#141413]">5. Couleurs de robe :</strong> {breed.coatColors.join(', ')}.
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#141413]/8 text-xs">
                  <div>
                    <div className="text-[#141413]/55">6. Taille</div>
                    <div className="font-mono-num font-semibold text-[#141413] mt-0.5">{breed.heightAvg}</div>
                  </div>
                  <div>
                    <div className="text-[#141413]/55">7. Poids</div>
                    <div className="font-mono-num font-semibold text-[#141413] mt-0.5">{breed.weightAvg}</div>
                  </div>
                  <div>
                    <div className="text-[#141413]/55">8. Espérance de vie</div>
                    <div className="font-mono-num font-semibold text-[#141413] mt-0.5">{breed.lifespan}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 9, 10, 11, 12: Comportement & Intelligence */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <Users className="w-4 h-4 text-[#EA580C]" />
                <span>Caractère, sociabilité et intelligence</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <p>
                  <strong className="text-[#141413]">9. Tempérament ({breed.temperament.join(' · ')}) :</strong>{' '}
                  {breed.temperamentSummary}
                </p>
                <p>
                  <strong className="text-[#141413]">10. Avec les enfants :</strong> {breed.behaviorWithChildren}
                </p>
                <p>
                  <strong className="text-[#141413]">11. Avec les autres animaux :</strong> {breed.behaviorWithAnimals}
                </p>
                <p>
                  <strong className="text-[#141413]">12. Intelligence ({breed.intelligenceScore}/5) :</strong> {breed.intelligenceDetail}
                </p>
              </div>
            </section>

            {/* 13, 14, 15, 16: Activité, Nutrition & Pelage */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <Dumbbell className="w-4 h-4 text-[#EA580C]" />
                <span>Exercice, alimentation et toilettage</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <p>
                  <strong className="text-[#141413]">13. Niveau d’activité :</strong> {breed.energyLevel} ({breed.activityScore}/5)
                </p>
                <p>
                  <strong className="text-[#141413]">14. Besoins en exercice :</strong> {breed.exerciseNeeds}
                </p>
                <p className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#141413]">15. Alimentation recommandée :</strong> {breed.recommendedDiet}
                  </span>
                </p>
                <p>
                  <strong className="text-[#141413]">16. Entretien du pelage :</strong> {breed.coatCare}
                </p>
              </div>
            </section>

            {/* 17 & 18: Santé & Cadre de vie */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <ShieldAlert className="w-4 h-4 text-[#EA580C]" />
                <span>Santé et conditions de vie idéales</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <div>
                  <strong className="text-[#141413]">17. Points de vigilance vétérinaire :</strong>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside">
                    {breed.healthIssues.map((issue) => (
                      <li key={issue}>{issue}</li>
                    ))}
                  </ul>
                </div>
                <p className="flex items-start gap-2 pt-2 border-t border-[#141413]/8">
                  <Home className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#141413]">18. Conditions de vie idéales :</strong> {breed.idealLivingConditions}
                  </span>
                </p>
              </div>
            </section>

            {/* 19 & 20: Atouts & Éducation */}
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2 border-b border-[#141413]/10 pb-3">
                <Award className="w-4 h-4 text-[#EA580C]" />
                <span>Particularités et éducation</span>
              </h3>
              <div className="space-y-3 text-sm text-[#141413]/80 leading-relaxed">
                <p>
                  <strong className="text-[#141413]">19. Avantages et particularités :</strong> {breed.advantagesAndSpecialties}
                </p>
                <p className="pt-2 border-t border-[#141413]/8">
                  <strong className="text-[#141413]">20. Conseils pour bien l’éduquer :</strong> {breed.trainingTips}
                </p>
              </div>
            </section>
          </div>

          {/* Video Section: Breed in Motion */}
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#141413] flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#EA580C]" />
                  <span>Découvrir le {breed.name} en mouvement</span>
                </h3>
                <p className="text-xs text-[#141413]/65 mt-0.5">
                  Simulateur biomécanique interactif des allures : pas, trot d’endurance et galop.
                </p>
              </div>
            </div>
            <BreedMotionPlayer breed={breed} />
          </section>

          {/* Anecdotes & Unusual Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-3">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#EA580C]" />
                <span>Anecdotes historiques</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-[#141413]/80 leading-relaxed list-disc list-inside">
                {breed.anecdotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-xl border border-[#141413]/10 p-6 space-y-3">
              <h3 className="font-display text-lg font-semibold text-[#141413] flex items-center gap-2">
                <PawPrint className="w-4 h-4 text-[#EA580C]" />
                <span>Faits insolites</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-[#141413]/80 leading-relaxed list-disc list-inside">
                {breed.unusualFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Related Breeds */}
          {relatedBreeds.length > 0 && (
            <section className="pt-4 border-t border-[#141413]/10 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#141413]">
                Races proches à découvrir
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedBreeds.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => onSelectBreed(rel)}
                    className="group bg-white rounded-xl border border-[#141413]/10 p-3 flex items-center gap-3 text-left hover:border-[#EA580C] transition-colors cursor-pointer"
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <BreedPortrait breed={rel} className="w-full h-full" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-sm text-[#141413] truncate group-hover:text-[#EA580C]">
                        {rel.name}
                      </div>
                      <div className="text-xs text-[#141413]/60 truncate">
                        {rel.originCountry} · {rel.sizeCategory}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox for Portrait */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation();
            setZoomed(false);
          }}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute top-5 right-5 p-2.5 rounded-lg bg-white text-[#141413] hover:bg-[#EA580C] hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer le zoom"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-3xl w-full aspect-[4/3] rounded-xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <BreedPortrait
              breed={breed}
              forcePlate={activeMediaTab === 'plate'}
              showPlateLabel
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
