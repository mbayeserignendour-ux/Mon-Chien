import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Compass,
  Heart,
  Mail,
  Check,
  Sparkles,
} from 'lucide-react';
import { Breed, PageId } from '../types/dog';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { LATEST_DISCOVERIES, OWNER_QUICK_TIPS } from '../data/galleryAndFaq';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { BreedCard } from '../components/BreedCard';

interface HomePageProps {
  breeds: Breed[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectBreed: (breed: Breed) => void;
  onNavigate: (page: PageId) => void;
  onOpenArticle: (articleId: string) => void;
}

const BANNER_SLIDES = [
  {
    id: 'slide-1',
    image: MEDIA_ASSETS.heroDogsGroup,
    kicker: 'Encyclopédie canine internationale',
    title: 'Découvrez le merveilleux monde des chiens',
    subtitle:
      'Explorez plus de 50 races venues des six continents : origines historiques, caractère, besoins précis, vidéos en mouvement et conseils d’experts.',
    ctaLabel: 'Explorer les races',
    targetPage: 'races' as PageId,
  },
  {
    id: 'slide-2',
    image: MEDIA_ASSETS.bannerNordicDogs,
    kicker: 'Chiens nordiques & attelages',
    title: 'L’endurance et la grâce des terres polaires',
    subtitle:
      'Du Husky sibérien au Samoyède souriant, plongez dans l’histoire millénaire des compagnons des neiges et du Grand Nord.',
    ctaLabel: 'Voir les catégories',
    targetPage: 'categories' as PageId,
  },
  {
    id: 'slide-3',
    image: MEDIA_ASSETS.bannerHerdingDogs,
    kicker: 'Bergers & intelligence canine',
    title: 'Des partenaires d’une intelligence remarquable',
    subtitle:
      'Border Collie, Berger australien, Beauceron ou Berger allemand : comprenez leurs aptitudes cognitives et comment les stimuler.',
    ctaLabel: 'Découvrir la galerie',
    targetPage: 'galerie' as PageId,
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  breeds,
  favorites,
  onToggleFavorite,
  onSelectBreed,
  onNavigate,
  onOpenArticle,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterOk, setNewsletterOk] = useState(false);
  const [newsletterErr, setNewsletterErr] = useState('');

  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const popularBreeds = breeds.slice(0, 6);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterErr('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    setNewsletterErr('');
    setNewsletterOk(true);
    setNewsletterEmail('');
  };

  const currentSlide = BANNER_SLIDES[activeSlide];

  return (
    <div className="space-y-20">
      {/* 1. HERO SECTION WITH PARALLAX & ANIMATED BANNER SLIDER */}
      <section className="relative bg-[#141413] text-white overflow-hidden">
        {/* Parallax Image Layer */}
        <motion.div
          style={{ y: heroImageY }}
          className="relative h-[540px] sm:h-[600px] lg:h-[650px] w-full"
        >
          {BANNER_SLIDES.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                idx === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}
          {/* Measured Scrim Overlay ensuring >= 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/92 via-[#141413]/52 to-[#141413]/25" />
        </motion.div>

        {/* Hero Foreground Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="max-w-2xl space-y-5">
              <div className="text-xs font-mono-num uppercase tracking-widest text-[#FDBA74]">
                {currentSlide.kicker}
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.08] tracking-tight text-white">
                {currentSlide.title}
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                {currentSlide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('races')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explorer les races</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {currentSlide.targetPage !== 'races' && (
                  <button
                    type="button"
                    onClick={() => onNavigate(currentSlide.targetPage)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/12 hover:bg-white/22 backdrop-blur-sm text-white text-sm font-medium border border-white/20 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{currentSlide.ctaLabel}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Slide Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4">
              <div className="flex items-center gap-2">
                {BANNER_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Afficher la bannière ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === activeSlide ? 'w-10 bg-[#EA580C]' : 'w-4 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length)
                  }
                  aria-label="Bannière précédente"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length)}
                  aria-label="Bannière suivante"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED STATISTICS STRIP */}
      <section aria-label="Chiffres clés de la plateforme" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-xl border border-[#141413]/12 shadow-sm grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#141413]/10">
          <div className="p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-semibold text-[#141413]">
              <AnimatedCounter target={breeds.length} />
            </div>
            <div className="text-sm font-medium text-[#141413] mt-1">Races documentées</div>
            <div className="text-xs text-[#141413]/60 mt-0.5">Fiches détaillées et illustrées</div>
          </div>

          <div className="p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-semibold text-[#EA580C]">
              <AnimatedCounter target={6} />
            </div>
            <div className="text-sm font-medium text-[#141413] mt-1">Continents représentés</div>
            <div className="text-xs text-[#141413]/60 mt-0.5">Europe, Asie, Amériques, Afrique, Océanie</div>
          </div>

          <div className="p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-semibold text-[#141413]">
              <AnimatedCounter target={9} />
            </div>
            <div className="text-sm font-medium text-[#141413] mt-1">Catégories canines</div>
            <div className="text-xs text-[#141413]/60 mt-0.5">Bergers, chasse, nordiques, compagnie…</div>
          </div>

          <div className="p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-semibold text-[#141413]">
              <AnimatedCounter target={20} />
            </div>
            <div className="text-sm font-medium text-[#141413] mt-1">Critères par fiche</div>
            <div className="text-xs text-[#141413]/60 mt-0.5">Origines, santé, nutrition & éducation</div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR BREEDS SHOWCASE */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#141413]/12 pb-5">
          <div className="space-y-1.5">
            <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
              Sélection incontournable
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141413]">
              Les races les plus populaires
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('races')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Voir les {breeds.length} races du catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {popularBreeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              isFavorite={favorites.includes(breed.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectBreed}
            />
          ))}
        </motion.div>
      </section>

      {/* 4. LATEST CANINE DISCOVERIES */}
      <section className="bg-white border-y border-[#141413]/10 py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Science & éthologie</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141413]">
                Dernières découvertes canines
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('apropos')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#141413] hover:text-[#EA580C] transition-colors cursor-pointer"
            >
              <span>Méthodologie scientifique</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_DISCOVERIES.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#F7F3EC] rounded-xl border border-[#141413]/10 p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono-num text-[#EA580C]">
                    0{index + 1}. {item.kicker}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#141413] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#141413]/80 leading-relaxed">{item.summary}</p>
                </div>
                <div className="pt-3 border-t border-[#141413]/10 text-xs text-[#141413]/60">
                  {item.detail}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL OWNER TIPS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#141413]/12 pb-5">
          <div className="space-y-1.5">
            <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
              Bien-être au quotidien
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141413]">
              Conseils essentiels pour les propriétaires
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('conseils')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Tous nos guides pratiques</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OWNER_QUICK_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl border border-[#141413]/10 p-5 flex flex-col justify-between gap-4 hover:border-[#EA580C]/50 transition-colors"
            >
              <div className="space-y-2">
                <BookOpen className="w-5 h-5 text-[#EA580C]" />
                <h3 className="font-display text-lg font-semibold text-[#141413]">{tip.title}</h3>
                <p className="text-sm text-[#141413]/75 leading-relaxed">{tip.text}</p>
              </div>
              <button
                type="button"
                onClick={() => onOpenArticle(tip.articleId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] hover:text-[#141413] transition-colors cursor-pointer"
              >
                <span>Lire le guide complet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EXPLORATION INVITATION & NEWSLETTER */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141413] text-white rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-widest text-[#FDBA74]">
              <Compass className="w-4 h-4" />
              <span>Rejoignez la communauté cynophile</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Recevez nos fiches de races et dossiers vétérinaires
            </h2>
            <p className="text-sm text-white/75 leading-relaxed max-w-xl">
              Une lettre mensuelle sans publicité intrusive : nouvelles races étudiées, guides de saison et astuces d’éducation bienveillante.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-white/65">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{favorites.length} favori(s) sauvegardé(s)</span>
              </span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => onNavigate('categories')}
                className="underline hover:text-white cursor-pointer"
              >
                Parcourir les 9 catégories
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            {newsletterOk ? (
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3 text-sm text-[#FDBA74]">
                <Check className="w-5 h-5 shrink-0" />
                <span>Inscription confirmée ! À très bientôt dans votre boîte de réception.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5" noValidate>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="nom@exemple.fr"
                      aria-label="Adresse e-mail"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    S’abonner
                  </button>
                </div>
                {newsletterErr && <p className="text-xs text-[#FCA5A5]">{newsletterErr}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
