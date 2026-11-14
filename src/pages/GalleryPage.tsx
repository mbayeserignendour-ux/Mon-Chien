import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Video, X, ZoomIn } from 'lucide-react';
import { Breed, GalleryPhotoItem } from '../types/dog';
import { GALLERY_PHOTOS, VIDEO_GUIDES } from '../data/galleryAndFaq';
import { BreedMotionPlayer } from '../components/BreedMotionPlayer';

interface GalleryPageProps {
  breeds: Breed[];
  onSelectBreed: (breed: Breed) => void;
}

type PhotoFilter = 'Toutes' | GalleryPhotoItem['category'];

export const GalleryPage: React.FC<GalleryPageProps> = ({ breeds, onSelectBreed }) => {
  const [photoFilter, setPhotoFilter] = useState<PhotoFilter>('Toutes');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEO_GUIDES[0].id);

  const visiblePhotos =
    photoFilter === 'Toutes'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === photoFilter);

  const activeVideo =
    VIDEO_GUIDES.find((v) => v.id === activeVideoId) ?? VIDEO_GUIDES[0];
  const activeVideoBreed =
    breeds.find((b) => b.id === activeVideo.breedId) ?? breeds[0];

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) =>
          i === null ? null : (i + 1) % visiblePhotos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, visiblePhotos.length]);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-2 border-b border-[#141413]/12 pb-6">
        <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
          Photothèque & cinématique canine
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413]">
          Galerie photos et vidéos éducatives
        </h1>
        <p className="text-base text-[#141413]/75 max-w-2xl leading-relaxed">
          Explorez nos portraits haute définition avec visionneuse zoomable ainsi que nos
          modules vidéo interactifs sur les allures et le comportement des chiens.
        </p>
      </div>

      {/* SECTION 1: PHOTO GALLERY */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-[#141413]">
            Exposition photographique
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-[#141413]/12">
            {(
              [
                'Toutes',
                'Portraits',
                'En action',
                'Nordiques & Bergers',
                'Éducation & Soins',
              ] as PhotoFilter[]
            ).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setPhotoFilter(tab);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  photoFilter === tab
                    ? 'bg-[#141413] text-white'
                    : 'text-[#141413]/70 hover:text-[#141413]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, idx) => {
            const linkedBreed = photo.breedId
              ? breeds.find((b) => b.id === photo.breedId)
              : undefined;

            return (
              <figure
                key={photo.id}
                className="group bg-white rounded-xl border border-[#141413]/10 overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBE4D8] cursor-zoom-in block"
                  aria-label={`Agrandir : ${photo.title}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/65 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </button>

                <figcaption className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono-num text-[#EA580C]">
                      {photo.category} · {photo.location}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#141413]">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#141413]/75 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>

                  {linkedBreed && (
                    <div className="pt-2 border-t border-[#141413]/8">
                      <button
                        type="button"
                        onClick={() => onSelectBreed(linkedBreed)}
                        className="text-xs font-semibold text-[#141413] hover:text-[#EA580C] transition-colors cursor-pointer"
                      >
                        Consulter la fiche {linkedBreed.name} →
                      </button>
                    </div>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: VIDEO & BIOMECHANICS STUDIO */}
      <section className="space-y-6 pt-6 border-t border-[#141413]/12">
        <div className="space-y-1.5">
          <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C] flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5" />
            <span>Lecteurs vidéo interactifs</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#141413]">
            Allures, comportement et présentations de races
          </h2>
          <p className="text-sm text-[#141413]/70 max-w-2xl">
            Sélectionnez une séquence ci-dessous pour observer les chapitres de mouvement,
            comparer le pas, le trot et le galop, et comprendre le langage corporel canin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Active Player */}
          <div className="lg:col-span-8 space-y-3">
            <BreedMotionPlayer
              breed={activeVideoBreed}
              chapters={activeVideo.chapters}
            />
            <div className="bg-white rounded-xl border border-[#141413]/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs text-[#EA580C] font-mono-num">
                  {activeVideo.category} · Durée {activeVideo.duration}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#141413]">
                  {activeVideo.title}
                </h3>
                <p className="text-sm text-[#141413]/75">{activeVideo.summary}</p>
              </div>
              <button
                type="button"
                onClick={() => onSelectBreed(activeVideoBreed)}
                className="px-4 py-2.5 rounded-lg bg-[#141413] hover:bg-[#EA580C] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Fiche : {activeVideoBreed.name}
              </button>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-[#141413]/10 divide-y divide-[#141413]/10 overflow-hidden">
            <div className="p-4 bg-[#FAF7F2]">
              <h3 className="font-display text-base font-semibold text-[#141413]">
                Programme vidéo ({VIDEO_GUIDES.length} modules)
              </h3>
            </div>
            {VIDEO_GUIDES.map((vid) => {
              const isSelected = vid.id === activeVideo.id;
              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={() => setActiveVideoId(vid.id)}
                  className={`w-full text-left p-4 flex items-start gap-3 transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#141413] text-white' : 'hover:bg-[#F7F3EC]'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-[#EA580C] text-white'
                        : 'bg-[#F7F3EC] text-[#141413]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[11px] font-mono-num ${
                        isSelected ? 'text-[#FDBA74]' : 'text-[#EA580C]'
                      }`}
                    >
                      {vid.category} · {vid.duration}
                    </div>
                    <div className="text-sm font-semibold leading-snug mt-0.5">
                      {vid.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && visiblePhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 rounded-lg bg-white text-[#141413] hover:bg-[#EA580C] hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer l’image"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length
              );
            }}
            className="hidden sm:flex p-3 rounded-lg bg-white/15 hover:bg-white/25 text-white mr-4 cursor-pointer"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#141413] rounded-xl overflow-hidden border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] bg-black">
              <img
                src={visiblePhotos[lightboxIndex].src}
                alt={visiblePhotos[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-mono-num text-[#FDBA74]">
                  {visiblePhotos[lightboxIndex].category} ·{' '}
                  {visiblePhotos[lightboxIndex].location}
                </div>
                <h3 className="font-display text-xl font-semibold mt-0.5">
                  {visiblePhotos[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/75 mt-1">
                  {visiblePhotos[lightboxIndex].caption}
                </p>
              </div>
              <div className="text-xs font-mono-num text-white/60 shrink-0">
                {lightboxIndex + 1} / {visiblePhotos.length}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length);
            }}
            className="hidden sm:flex p-3 rounded-lg bg-white/15 hover:bg-white/25 text-white ml-4 cursor-pointer"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
