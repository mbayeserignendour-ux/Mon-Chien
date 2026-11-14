import { DogCategory } from '../types/dog';
import { MEDIA_ASSETS } from './mediaAssets';

export const DOG_CATEGORIES: DogCategory[] = [
  {
    slug: 'compagnie',
    name: 'Chiens de compagnie',
    subtitle: 'Complices du foyer et de la vie quotidienne',
    description:
      'Sélectionnés pour leur sociabilité, leur douceur et leur proximité affective avec l’humain, les chiens de compagnie s’épanouissent au cœur du foyer, en ville comme à la campagne.',
    keyTraits: [
      'Forte réceptivité aux émotions humaines',
      'Adaptation aisée à la vie intérieure',
      'Sociabilité élevée avec la famille et les visiteurs',
    ],
    historicalRole:
      'Des cours impériales asiatiques aux salons européens, ces chiens ont accompagné l’humain avant tout pour le lien social et le réconfort.',
    coverPhoto: MEDIA_ASSETS.breedBouledogueFrancais,
    accentHex: '#EA580C',
  },
  {
    slug: 'berger',
    name: 'Chiens de berger',
    subtitle: 'Stratèges de l’intelligence et de la conduite',
    description:
      'Façonnés par des siècles de coopération étroite avec les bergers, ces chiens brillent par leur rapidité d’apprentissage, leur lecture du mouvement et leur loyauté indéfectible.',
    keyTraits: [
      'Capacité d’apprentissage parmi les plus élevées du règne canin',
      'Endurance remarquable et grande réactivité',
      'Besoin important de stimulation mentale et physique',
    ],
    historicalRole:
      'Conduite, rassemblement et guidage des troupeaux ovins et bovins sur de vastes pâturages parfois escarpés.',
    coverPhoto: MEDIA_ASSETS.bannerHerdingDogs,
    accentHex: '#B45309',
  },
  {
    slug: 'chasse',
    name: 'Chiens de chasse',
    subtitle: 'Experts de l’odorat, du pistage et du rapport',
    description:
      'Regroupant chiens d’arrêt, chiens courants, terriers et rapporteurs, cette famille rassemble des races dotées d’un flair prodigieux, d’une endurance soutenue et d’un enthousiasme naturel en plein air.',
    keyTraits: [
      'Sens olfactif et pistage extrêmement développés',
      'Gait endurant et énergie constante en extérieur',
      'Tempérament généralement gai et sociable en meute',
    ],
    historicalRole:
      'Pistage, arrêt devant le gibier, déterrage ou rapport en eau froide aux côtés des chasseurs.',
    coverPhoto: MEDIA_ASSETS.breedGoldenRetriever,
    accentHex: '#9A3412',
  },
  {
    slug: 'garde',
    name: 'Chiens de garde et de protection',
    subtitle: 'Sentinelles vigilantes et protecteurs dévoués',
    description:
      'Doués d’un instinct territorial sûr et d’un grand sang-froid, ces chiens veillent avec sérieux sur leur foyer et leur famille tout en sachant faire preuve d’une tendresse profonde envers les leurs.',
    keyTraits: [
      'Vigilance naturelle et présence dissuasive calme',
      'Loyauté protectrice envers leur cercle familial',
      'Nécessité d’une socialisation précoce et cohérente',
    ],
    historicalRole:
      'Protection des fermes, des troupeaux contre les prédateurs, des convois marchands et des domaines ruraux.',
    coverPhoto: MEDIA_ASSETS.breedBergerAllemand,
    accentHex: '#1C1917',
  },
  {
    slug: 'travail',
    name: 'Chiens de travail',
    subtitle: 'Sauveteurs, guides et partenaires d’utilité publique',
    description:
      'Des sommets alpins aux océans glacés en passant par les missions d’assistance médicale, les chiens de travail mettent leur puissance, leur flair et leur calme au service de vies humaines.',
    keyTraits: [
      'Robustesse physique et résistance aux intempéries',
      'Fiabilité sous pression et sang-froid',
      'Coopération structurée avec un conducteur',
    ],
    historicalRole:
      'Sauvetage en avalanche et en mer, traction de charges, détection olfactive et assistance aux personnes vulnérables.',
    coverPhoto: MEDIA_ASSETS.breedSaintBernard,
    accentHex: '#78350F',
  },
  {
    slug: 'sportifs',
    name: 'Chiens sportifs',
    subtitle: 'Athlètes d’endurance, d’agilité et de vitesse',
    description:
      'Taillés pour le mouvement, la course et les disciplines cynophiles modernes (canicross, agility, frisbee, poursuite à vue), ils partagent une vitalité contagieuse avec les maîtres actifs.',
    keyTraits: [
      'Rapport puissance/poids optimisé et grande souplesse',
      'Besoin quotidien d’exercice soutenu et varié',
      'Motivation élevée pour les jeux de vitesse et de coopération',
    ],
    historicalRole:
      'Courses de vitesse, accompagnement d’attelages rapides et travail d’endurance sur de longues distances.',
    coverPhoto: MEDIA_ASSETS.breedDalmatien,
    accentHex: '#C2410C',
  },
  {
    slug: 'nordiques',
    name: 'Chiens nordiques',
    subtitle: 'Héritiers des grands froids et des attelages polaires',
    description:
      'Parés d’une double fourrure isolante, d’oreilles triangulaires et d’un esprit indépendant forgé dans les contrées arctiques, les chiens nordiques fascinent par leur esthétique lupoïde et leur résistance.',
    keyTraits: [
      'Fourrure double dense protégeant contre le gel extrême',
      'Tempérament autonome, propre et peu aboyeur (vocalises)',
      'Fort instinct de meute et goût pour les grands espaces frais',
    ],
    historicalRole:
      'Traction de traîneaux, garde de rennes et survie partagée avec les peuples autochtones du Grand Nord.',
    coverPhoto: MEDIA_ASSETS.bannerNordicDogs,
    accentHex: '#0F172A',
  },
  {
    slug: 'petite-taille',
    name: 'Chiens de petite taille',
    subtitle: 'Grands tempéraments en format agile',
    description:
      'Moins de 10 kg mais dotés de personnalités riches — du calme réconfortant du Carlin à l’audace du Jack Russell — ces chiens s’adaptent aisément aux voyages et aux foyers urbains.',
    keyTraits: [
      'Espérance de vie souvent supérieure à 13–16 ans',
      'Facilité de transport et faible encombrement intérieur',
      'Diversité exceptionnelle de caractères et de robes',
    ],
    historicalRole:
      'Compagnons précieux des foyers urbains ou chasseurs agiles de petits nuisibles dans les galeries.',
    coverPhoto: MEDIA_ASSETS.breedShibaInu,
    accentHex: '#D97706',
  },
  {
    slug: 'grande-taille',
    name: 'Chiens de grande taille',
    subtitle: 'Noblesse, stature imposante et force tranquille',
    description:
      'Dépassant souvent 35 kg, ces chiens impressionnent par leur prestance sculpturale tout en surprenant par leur calme serein à la maison et la douceur de leur cœur.',
    keyTraits: [
      'Présence rassurante et tempérament souvent posé à l’âge adulte',
      'Croissance osseuse à accompagner avec rigueur nutritionnelle',
      'Attachement profond et protecteur envers la famille',
    ],
    historicalRole:
      'Protection contre les grands prédateurs, sauvetage en milieu extrême et accompagnement des domaines.',
    coverPhoto: MEDIA_ASSETS.heroDogsGroup,
    accentHex: '#451A03',
  },
];
