export type PageId =
  | 'accueil'
  | 'races'
  | 'categories'
  | 'galerie'
  | 'conseils'
  | 'apropos'
  | 'contact';

export type SizeCategory = 'Petit' | 'Moyen' | 'Grand';

export type CoatType = 'Court' | 'Mi-long' | 'Long' | 'Frisé' | 'Dur';

export type EnergyLevel = 'Calme' | 'Modéré' | 'Élevé' | 'Très élevé';

export type Continent =
  | 'Europe'
  | 'Asie'
  | 'Amérique du Nord'
  | 'Amérique du Sud'
  | 'Afrique'
  | 'Océanie';

export type CategorySlug =
  | 'compagnie'
  | 'berger'
  | 'chasse'
  | 'garde'
  | 'travail'
  | 'sportifs'
  | 'nordiques'
  | 'petite-taille'
  | 'grande-taille';

export interface BreedMorphology {
  earStyle: 'erect' | 'floppy' | 'semi-erect' | 'button' | 'feathered' | 'bat';
  muzzleStyle: 'long' | 'medium' | 'short' | 'bearded' | 'wrinkled';
  coatPattern:
    | 'solid'
    | 'bicolor'
    | 'tricolor'
    | 'saddle'
    | 'spotted'
    | 'brindle'
    | 'merle'
    | 'masked'
    | 'tuxedo';
  coatTexture: 'smooth' | 'fluffy' | 'curly' | 'wiry' | 'silky';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  eyeColor: string;
  noseColor: string;
  tailStyle: 'curled' | 'sabre' | 'plume' | 'docked-short' | 'whip';
  plateNumber: string;
}

export interface Breed {
  id: string;
  // 1. Nom de la race
  name: string;
  // 2. Origine et pays d'origine
  originCountry: string;
  continent: Continent;
  originRegion: string;
  // 3. Histoire et évolution de la race
  history: string;
  // 4. Description physique
  physicalDescription: string;
  // 5. Couleurs de robe
  coatColors: string[];
  // 6. Taille moyenne
  heightAvg: string;
  heightRangeCm: [number, number];
  // 7. Poids moyen
  weightAvg: string;
  weightRangeKg: [number, number];
  // 8. Espérance de vie
  lifespan: string;
  lifespanRangeYears: [number, number];
  // 9. Caractère et tempérament
  temperament: string[];
  temperamentSummary: string;
  // 10. Comportement avec les enfants
  behaviorWithChildren: string;
  // 11. Comportement avec les autres animaux
  behaviorWithAnimals: string;
  // 12. Niveau d'intelligence
  intelligenceScore: 1 | 2 | 3 | 4 | 5;
  intelligenceDetail: string;
  // 13. Niveau d'activité physique
  activityScore: 1 | 2 | 3 | 4 | 5;
  energyLevel: EnergyLevel;
  // 14. Besoins en exercice
  exerciseNeeds: string;
  // 15. Alimentation recommandée
  recommendedDiet: string;
  // 16. Entretien du pelage
  coatCare: string;
  // 17. Problèmes de santé fréquents
  healthIssues: string[];
  // 18. Conditions de vie idéales
  idealLivingConditions: string;
  // 19. Avantages et particularités
  advantagesAndSpecialties: string;
  // 20. Conseils pour bien éduquer cette race
  trainingTips: string;

  // Additional required editorial fields
  shortDescription: string;
  anecdotes: string[];
  unusualFacts: string[];
  didYouKnow: string;
  sizeCategory: SizeCategory;
  coatType: CoatType;
  categories: CategorySlug[];
  popularityRank: number;
  photo?: string;
  morpho: BreedMorphology;
  gaitSpeedKmh: number;
  strideFrequency: string;
  fciGroup: string;
}

export interface DogCategory {
  slug: CategorySlug;
  name: string;
  subtitle: string;
  description: string;
  keyTraits: string[];
  historicalRole: string;
  coverPhoto?: string;
  accentHex: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTimeMinutes: number;
  publishedDate: string;
  author: string;
  excerpt: string;
  coverPhoto: string;
  sections: {
    heading: string;
    body: string;
  }[];
  keyTakeaways: string[];
}

export interface GalleryPhotoItem {
  id: string;
  title: string;
  caption: string;
  category: 'Portraits' | 'En action' | 'Nordiques & Bergers' | 'Éducation & Soins';
  src: string;
  breedId?: string;
  location: string;
}

export interface VideoGuideItem {
  id: string;
  title: string;
  category: 'Présentation de race' | 'Comportement canin' | 'Vidéo éducative';
  duration: string;
  summary: string;
  breedId: string;
  chapters: { time: string; label: string; description: string }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: string;
}

export interface BreedFilterState {
  search: string;
  country: string;
  size: SizeCategory | 'Tous';
  weightBracket: 'Tous' | 'Moins de 10 kg' | '10 à 25 kg' | '25 à 45 kg' | 'Plus de 45 kg';
  coatType: CoatType | 'Tous';
  energyLevel: EnergyLevel | 'Tous';
  temperament: string;
  lifespanBracket: 'Tous' | '8–11 ans' | '11–13 ans' | '13 ans et plus';
  category: CategorySlug | 'Toutes';
  onlyFavorites: boolean;
  sortBy: 'popularite' | 'nom' | 'taille-asc' | 'taille-desc' | 'esperance';
}
