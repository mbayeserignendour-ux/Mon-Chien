import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Search,
  Share2,
  X,
} from 'lucide-react';
import { Article } from '../types/dog';
import { ARTICLES } from '../data/articles';

interface AdvicePageProps {
  initialArticleId?: string | null;
  onClearInitialArticle: () => void;
}

export const AdvicePage: React.FC<AdvicePageProps> = ({
  initialArticleId,
  onClearInitialArticle,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialArticleId) {
      const found = ARTICLES.find((a) => a.id === initialArticleId);
      if (found) setActiveArticle(found);
      onClearInitialArticle();
    }
  }, [initialArticleId, onClearInitialArticle]);

  useEffect(() => {
    if (!activeArticle) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeArticle]);

  const categories = ['Tous', ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedCategory !== 'Tous' && art.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleShareCopy = async (article: Article) => {
    try {
      await navigator.clipboard.writeText(`${article.title} — Univers des Chiens`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-[#141413]/12 pb-6">
        <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
          Magazine & guides pratiques · {ARTICLES.length} dossiers
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413]">
          Blog et conseils canins
        </h1>
        <p className="text-base text-[#141413]/75 max-w-2xl leading-relaxed">
          Articles rédigés avec rigueur pour accompagner chaque étape de la vie de votre chien :
          choix, nutrition, éducation bienveillante, santé préventive et décryptage du langage corporel.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl border border-[#141413]/12 p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F7F3EC] rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#141413] text-white'
                  : 'text-[#141413]/75 hover:text-[#141413]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-[#141413]/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un article..."
            aria-label="Rechercher un guide ou article"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-xs text-[#141413] placeholder:text-[#141413]/45 focus:outline-none focus:border-[#EA580C]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#141413]/12 p-10 text-center space-y-3">
          <p className="font-display text-xl font-semibold text-[#141413]">
            Aucun article trouvé
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCategory('Tous');
            }}
            className="text-xs font-semibold text-[#EA580C] hover:underline cursor-pointer"
          >
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl border border-[#141413]/10 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                className="aspect-[4/3] w-full overflow-hidden bg-[#EBE4D8] block cursor-pointer"
              >
                <img
                  src={article.coverPhoto}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#141413]/60">
                    <span className="font-semibold text-[#EA580C]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-num">{article.readTimeMinutes} min de lecture</span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-[#141413] leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#141413]/75 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#141413]/8 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#141413]/55 truncate">{article.author}</span>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Lire l’article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Editorial Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#141413]/75 backdrop-blur-sm overflow-y-auto p-3 sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveArticle(null)}
        >
          <article
            className="max-w-3xl mx-auto bg-[#FBF9F5] rounded-2xl border border-[#141413]/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#141413]/10 px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#141413]/65">
                <BookOpen className="w-4 h-4 text-[#EA580C]" />
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-num">{activeArticle.readTimeMinutes} min</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShareCopy(activeArticle)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#141413]/12 text-xs font-medium text-[#141413] hover:border-[#EA580C] cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#EA580C]" />
                  ) : (
                    <Share2 className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? 'Lien copié' : 'Partager'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-lg bg-[#141413] text-white hover:bg-[#EA580C] transition-colors cursor-pointer"
                  aria-label="Fermer l’article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="aspect-[16/9] w-full bg-[#EBE4D8]">
              <img
                src={activeArticle.coverPhoto}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <header className="space-y-3 border-b border-[#141413]/10 pb-6">
                <div className="text-xs font-mono-num text-[#EA580C]">
                  {activeArticle.publishedDate} · Par {activeArticle.author}
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#141413] leading-tight">
                  {activeArticle.title}
                </h2>
                <p className="text-base text-[#141413]/80 leading-relaxed">
                  {activeArticle.excerpt}
                </p>
              </header>

              <div className="space-y-6 max-w-prose">
                {activeArticle.sections.map((sec, idx) => (
                  <section key={sec.heading} className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-[#141413]">
                      0{idx + 1}. {sec.heading}
                    </h3>
                    <p
                      className={`text-[15px] text-[#141413]/85 leading-[1.75] ${
                        idx === 0
                          ? 'first-letter:text-4xl first-letter:font-display first-letter:font-semibold first-letter:text-[#EA580C] first-letter:float-left first-letter:mr-2.5 first-letter:leading-none'
                          : ''
                      }`}
                    >
                      {sec.body}
                    </p>
                  </section>
                ))}
              </div>

              <aside className="bg-white rounded-xl border border-[#141413]/12 p-6 space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#141413]">
                  Points essentiels à retenir
                </h3>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#141413]/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};
