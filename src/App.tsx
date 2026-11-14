import { useEffect, useMemo, useState } from 'react';
import { Breed, BreedFilterState, CategorySlug, PageId } from './types/dog';
import { ALL_BREEDS } from './data/breeds';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { BreedDetailModal } from './components/BreedDetailModal';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AdvicePage } from './pages/AdvicePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const FAVORITES_STORAGE_KEY = 'univers-des-chiens-favorites-v1';

const DEFAULT_FILTERS: BreedFilterState = {
  search: '',
  country: 'Tous',
  size: 'Tous',
  weightBracket: 'Tous',
  coatType: 'Tous',
  energyLevel: 'Tous',
  temperament: 'Tous',
  lifespanBracket: 'Tous',
  category: 'Toutes',
  onlyFavorites: false,
  sortBy: 'popularite',
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('accueil');
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [filters, setFilters] = useState<BreedFilterState>(DEFAULT_FILTERS);
  const [pendingArticleId, setPendingArticleId] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore storage read errors
    }
    return ['berger-allemand', 'golden-retriever', 'shiba-inu'];
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Ignore storage write errors
    }
  }, [favorites]);

  const toggleFavorite = (breedId: string) => {
    setFavorites((prev) =>
      prev.includes(breedId) ? prev.filter((id) => id !== breedId) : [...prev, breedId]
    );
  };

  const handleOpenFavorites = () => {
    setFilters({ ...DEFAULT_FILTERS, onlyFavorites: true });
    setActivePage('races');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCategoryInCatalog = (slug: CategorySlug) => {
    setFilters({ ...DEFAULT_FILTERS, category: slug });
    setActivePage('races');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticleFromHome = (articleId: string) => {
    setPendingArticleId(articleId);
    setActivePage('conseils');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const relatedBreeds = useMemo(() => {
    if (!selectedBreed) return [];
    return ALL_BREEDS.filter(
      (b) =>
        b.id !== selectedBreed.id &&
        b.categories.some((c) => selectedBreed.categories.includes(c))
    ).slice(0, 3);
  }, [selectedBreed]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EC] text-[#141413]">
      <Navbar
        activePage={activePage}
        onNavigate={(page) => setActivePage(page)}
        favoritesCount={favorites.length}
        onOpenFavorites={handleOpenFavorites}
      />

      <main className="flex-1">
        {activePage === 'accueil' && (
          <HomePage
            breeds={ALL_BREEDS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectBreed={setSelectedBreed}
            onNavigate={(page) => setActivePage(page)}
            onOpenArticle={handleOpenArticleFromHome}
          />
        )}

        {activePage === 'races' && (
          <CatalogPage
            breeds={ALL_BREEDS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectBreed={setSelectedBreed}
            filters={filters}
            onChangeFilters={setFilters}
            onResetFilters={() => setFilters(DEFAULT_FILTERS)}
          />
        )}

        {activePage === 'categories' && (
          <CategoriesPage
            breeds={ALL_BREEDS}
            onSelectBreed={setSelectedBreed}
            onExploreCategoryInCatalog={handleExploreCategoryInCatalog}
          />
        )}

        {activePage === 'galerie' && (
          <GalleryPage
            breeds={ALL_BREEDS}
            onSelectBreed={setSelectedBreed}
          />
        )}

        {activePage === 'conseils' && (
          <AdvicePage
            initialArticleId={pendingArticleId}
            onClearInitialArticle={() => setPendingArticleId(null)}
          />
        )}

        {activePage === 'apropos' && (
          <AboutPage
            totalBreeds={ALL_BREEDS.length}
            onNavigate={(page) => setActivePage(page)}
          />
        )}

        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer
        onNavigate={(page) => setActivePage(page)}
        totalBreeds={ALL_BREEDS.length}
      />

      <BackToTop />

      <BreedDetailModal
        breed={selectedBreed}
        onClose={() => setSelectedBreed(null)}
        isFavorite={selectedBreed ? favorites.includes(selectedBreed.id) : false}
        onToggleFavorite={toggleFavorite}
        onSelectBreed={(b) => setSelectedBreed(b)}
        relatedBreeds={relatedBreeds}
      />
    </div>
  );
}
