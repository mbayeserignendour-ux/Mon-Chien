import { FaqItem, GalleryPhotoItem, VideoGuideItem } from '../types/dog';
import { MEDIA_ASSETS } from './mediaAssets';

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'gal-1',
    title: 'Harmonie des races au soleil couchant',
    caption: 'Six représentants emblématiques réunis en lumière dorée : Husky, Golden Retriever, Bouledogue français, Dalmatien, Berger allemand et Border Collie.',
    category: 'Portraits',
    src: MEDIA_ASSETS.heroDogsGroup,
    location: 'Atelier de photographie canine',
  },
  {
    id: 'gal-2',
    title: 'Course nordique au lever du jour',
    caption: 'Un Husky sibérien et un Samoyède évoluant côte à côte dans la neige alpine à l’aube.',
    category: 'Nordiques & Bergers',
    src: MEDIA_ASSETS.bannerNordicDogs,
    breedId: 'husky-siberien',
    location: 'Col alpin enneigé',
  },
  {
    id: 'gal-3',
    title: 'Sentinelles des hautes crêtes',
    caption: 'Border Collie et Berger australien observant la vallée brumeuse depuis un sentier d’altitude.',
    category: 'Nordiques & Bergers',
    src: MEDIA_ASSETS.bannerHerdingDogs,
    breedId: 'border-collie',
    location: 'Hautes terres écossaises',
  },
  {
    id: 'gal-4',
    title: 'Port de tête du Berger allemand',
    caption: 'Portrait de profil trois-quarts soulignant l’attention et la noblesse du Berger allemand noir et feu.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedBergerAllemand,
    breedId: 'berger-allemand',
    location: 'Galerie de pierre calcaire',
  },
  {
    id: 'gal-5',
    title: 'Lumière d’automne sur le Golden Retriever',
    caption: 'Sourire chaleureux et franges dorées dans les herbes dorées d’octobre.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedGoldenRetriever,
    breedId: 'golden-retriever',
    location: 'Prairie d’automne',
  },
  {
    id: 'gal-6',
    title: 'Regard glaciaire du Husky sibérien',
    caption: 'Contraste saisissant entre les yeux bleu glacier et la chaleur du bois de cèdre.',
    category: 'Nordiques & Bergers',
    src: MEDIA_ASSETS.breedHuskySiberien,
    breedId: 'husky-siberien',
    location: 'Refuge nordique',
  },
  {
    id: 'gal-7',
    title: 'Charme parisien du Bouledogue français',
    caption: 'Posture compacte et oreilles dressées sur pierre de travertin.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedBouledogueFrancais,
    breedId: 'bouledogue-francais',
    location: 'Studio travertin',
  },
  {
    id: 'gal-8',
    title: 'Sérénité japonaise du Shiba Inu',
    caption: 'Shiba Inu roux observant paisiblement un jardin zen traditionnel au matin.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedShibaInu,
    breedId: 'shiba-inu',
    location: 'Jardin de Kyoto',
  },
  {
    id: 'gal-9',
    title: 'Allure sculpturale du Caniche abricot',
    caption: 'Toison bouclée parfaitement équilibrée et port de tête fier.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedCaniche,
    breedId: 'caniche',
    location: 'Atelier d’albâtre',
  },
  {
    id: 'gal-10',
    title: 'Concentration du Border Collie',
    caption: 'Regard attentif prêt à recevoir la moindre indication de son maître.',
    category: 'En action',
    src: MEDIA_ASSETS.breedBorderCollie,
    breedId: 'border-collie',
    location: 'Sentier bocager',
  },
  {
    id: 'gal-11',
    title: 'Le Dalmatien sous l’arche méditerranéenne',
    caption: 'Robe tachetée nette et silhouette sèche dans la lumière adriatique.',
    category: 'En action',
    src: MEDIA_ASSETS.breedDalmatien,
    breedId: 'dalmatien',
    location: 'Village dalmate',
  },
  {
    id: 'gal-12',
    title: 'Quiétude alpine du Saint-Bernard',
    caption: 'Moment de repos sur la terrasse boisée face aux sommets valaisans.',
    category: 'Portraits',
    src: MEDIA_ASSETS.breedSaintBernard,
    breedId: 'saint-bernard',
    location: 'Chalet alpin',
  },
  {
    id: 'gal-13',
    title: 'Complicité du brossage quotidien',
    caption: 'Soin doux du pelage d’un Labrador dans un intérieur apaisé.',
    category: 'Éducation & Soins',
    src: MEDIA_ASSETS.articleDogCare,
    breedId: 'labrador-retriever',
    location: 'Foyer familial',
  },
  {
    id: 'gal-14',
    title: 'Premières leçons en douceur',
    caption: 'Apprentissage du « assis » par renforcement positif chez un chiot Golden Retriever.',
    category: 'Éducation & Soins',
    src: MEDIA_ASSETS.articlePuppyTraining,
    breedId: 'golden-retriever',
    location: 'Atelier éducatif',
  },
];

export const VIDEO_GUIDES: VideoGuideItem[] = [
  {
    id: 'vid-biomeca-berger',
    title: 'Découvrir les allures : le trot allongé du Berger allemand',
    category: 'Présentation de race',
    duration: '02:15',
    summary:
      'Analyse interactive en mouvement de la foulée rasante, de l’angulation postérieure et de la posture attentive du Berger allemand.',
    breedId: 'berger-allemand',
    chapters: [
      { time: '00:00', label: 'Marche d’observation', description: 'Équilibre naturel du dos et port de queue en sabre au pas calme.' },
      { time: '00:45', label: 'Trot allongé économique', description: 'Extension maximale des membres antérieurs sans perte d’énergie verticale.' },
      { time: '01:30', label: 'Galop & arrêt attentif', description: 'Passage fluide de la course à la posture de vigilance.' },
    ],
  },
  {
    id: 'vid-agility-border',
    title: 'Réactivité et conduite : le Border Collie en action',
    category: 'Présentation de race',
    duration: '01:55',
    summary:
      'Observation cinématique des changements d’appuis rapides, du regard bas caractéristique et de la coordination maître-chien.',
    breedId: 'border-collie',
    chapters: [
      { time: '00:00', label: 'Posture d’approche (« l’œil »)', description: 'Abaissement du garrot pour guider le mouvement sans aboiement.' },
      { time: '00:50', label: 'Trot agile et virages serrés', description: 'Souplesse lombaire permettant des pivots instantanés.' },
      { time: '01:25', label: 'Sprint de rassemblement', description: 'Accélération explosive en pleine course.' },
    ],
  },
  {
    id: 'vid-langage-corporel',
    title: 'Comprendre le langage corporel et les signaux canins',
    category: 'Comportement canin',
    duration: '02:40',
    summary:
      'Démonstration animée des postures essentielles : révérence de jeu, signaux d’apaisement, port d’oreilles et mouvement de la queue.',
    breedId: 'golden-retriever',
    chapters: [
      { time: '00:00', label: 'La révérence de jeu', description: 'Coudes au sol et queue détendue : invitation pacifique à l’interaction.' },
      { time: '00:55', label: 'Signaux de confort vs alerte', description: 'Différence entre un balayage souple et une posture figée.' },
      { time: '01:50', label: 'Décompression naturelle', description: 'Secouement du corps après une situation stimulante.' },
    ],
  },
  {
    id: 'vid-nordique-husky',
    title: 'Endurance polaire : la mécanique du Husky sibérien',
    category: 'Vidéo éducative',
    duration: '02:05',
    summary:
      'Comment la foulée pendulaire du Husky optimise sa dépense énergétique sur de longues distances enneigées.',
    breedId: 'husky-siberien',
    chapters: [
      { time: '00:00', label: 'Trot de croisière', description: 'Mouvement économe permettant plusieurs heures de traction modérée.' },
      { time: '00:50', label: 'Port du panache et thermorégulation', description: 'Rôle de la queue enroulée pour protéger la truffe au repos.' },
      { time: '01:35', label: 'Galop sur neige meuble', description: 'Répartition du poids sur des pattes compactes et résistantes.' },
    ],
  },
  {
    id: 'vid-sprint-whippet',
    title: 'Double suspension aérienne : la vitesse du Whippet',
    category: 'Présentation de race',
    duration: '01:45',
    summary:
      'Décomposition visuelle du galop à double temps de suspension permettant aux lévriers d’atteindre plus de 55 km/h.',
    breedId: 'whippet',
    chapters: [
      { time: '00:00', label: 'Phase de regroupement', description: 'Flexion profonde du rein voussé rassemblant les quatre membres.' },
      { time: '00:40', label: 'Extension totale en vol', description: 'Suspension complète au-dessus du sol à vitesse maximale.' },
      { time: '01:15', label: 'Retour au pas calme', description: 'Transition rapide vers la récupération calme.' },
    ],
  },
  {
    id: 'vid-education-chiot',
    title: 'Les bases de l’éducation positive du chiot',
    category: 'Vidéo éducative',
    duration: '02:20',
    summary:
      'Méthode pas à pas pour capter l’attention visuelle, récompenser le calme et construire un rappel fiable dès 2 mois.',
    breedId: 'shiba-inu',
    chapters: [
      { time: '00:00', label: 'Prise de contact visuelle', description: 'Associer son prénom à une expérience positive immédiate.' },
      { time: '00:50', label: 'Position assise naturelle', description: 'Guider sans jamais appuyer sur la croupe du chiot.' },
      { time: '01:40', label: 'Rappel joyeux en longe', description: 'Valoriser chaque retour volontaire auprès du maître.' },
    ],
  },
];

export const LATEST_DISCOVERIES = [
  {
    id: 'disc-1',
    kicker: 'Archéologie & Génétique',
    title: 'Une histoire commune vieille de plus de 15 000 ans',
    summary:
      'Les analyses paléogénétiques récentes confirment que le chien est le tout premier animal domestiqué par l’humain, bien avant l’agriculture, à partir de lignées anciennes de loups aujourd’hui disparues.',
    detail: 'Études comparatives de l’ADN ancien en Eurasie et Sibérie.',
  },
  {
    id: 'disc-2',
    kicker: 'Cognition Olfactive',
    title: 'Comment le chien « cartographie » le temps par l’odorat',
    summary:
      'Grâce à jusqu’à 300 millions de récepteurs olfactifs et une respiration séparée entre entrée d’air et expiration latérale, le chien perçoit l’ancienneté d’une trace et la direction exacte d’un passage.',
    detail: 'Biomécanique de la truffe et neurosciences sensorielles.',
  },
  {
    id: 'disc-3',
    kicker: 'Communication Humain-Chien',
    title: 'Le muscle du sourcil né de la cohabitation',
    summary:
      'Des anatomistes ont découvert que les chiens domestiques ont développé un muscle facial spécifique (LAOM) leur permettant de hausser l’arcade interne du sourcil — un regard expressif absent chez le loup.',
    detail: 'Évolution anatomique de l’expressivité canine.',
  },
];

export const OWNER_QUICK_TIPS = [
  {
    id: 'tip-1',
    title: 'Privilégiez la dépense olfactive',
    text: 'Vingt minutes de reniflage libre en promenade fatiguent autant mentalement qu’une longue course en ligne droite.',
    articleId: 'comportements-des-chiens',
  },
  {
    id: 'tip-2',
    title: 'Protégez les coussinets en été',
    text: 'Testez l’asphalte avec le dos de votre main pendant 5 secondes : s’il est trop chaud pour vous, il brûle les pattes.',
    articleId: 'erreurs-a-eviter',
  },
  {
    id: 'tip-3',
    title: 'Respectez les signaux de calme',
    text: 'Un chien qui détourne la tête ou se lèche la truffe demande poliment de l’espace et de la douceur.',
    articleId: 'langage-corporel-des-chiens',
  },
  {
    id: 'tip-4',
    title: 'Fractionnez les repas des géants',
    text: 'Deux repas par jour avec une heure de calme avant et après réduisent les risques de troubles digestifs graves.',
    articleId: 'comment-nourrir-correctement-son-chien',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    topic: 'Adoption',
    question: 'Peut-on avoir un chien de grande taille en appartement ?',
    answer:
      'Oui, pour de nombreuses races calmes à l’intérieur comme le Dogue allemand, le Whippet ou le Bouvier bernois, à condition d’assurer de vraies sorties quotidiennes variées, un ascenseur ou un rez-de-chaussée pour préserver les articulations en croissance, et suffisamment de présence humaine.',
  },
  {
    id: 'faq-2',
    topic: 'Classification',
    question: 'Combien de races de chiens sont reconnues dans le monde ?',
    answer:
      'La Fédération Cynologique Internationale (FCI) reconnaît officiellement plus de 350 races réparties en 10 groupes selon leur morphologie et leur fonction historique. Univers des Chiens recense 54 races emblématiques couvrant l’ensemble des six continents habités.',
  },
  {
    id: 'faq-3',
    topic: 'Allergies',
    question: 'Existe-t-il des races réellement hypoallergéniques ?',
    answer:
      'Aucune race n’est 100 % dépourvue d’allergènes (présents aussi dans la salive et les squames cutanées), mais les chiens sans sous-poil perdant très peu de poils — comme le Caniche, le Bichon maltais ou le Xoloitzcuintle — diffusent nettement moins d’allergènes dans l’environnement.',
  },
  {
    id: 'faq-4',
    topic: 'Éducation',
    question: 'À quel âge faut-il commencer l’éducation d’un chiot ?',
    answer:
      'Dès son arrivée à la maison, généralement vers 8 à 10 semaines, par de courtes séances ludiques de 5 minutes fondées sur le renforcement positif, la socialisation progressive et l’apprentissage du calme.',
  },
  {
    id: 'faq-5',
    topic: 'Santé',
    question: 'Pourquoi la taille influence-t-elle l’espérance de vie des chiens ?',
    answer:
      'Contrairement à d’autres mammifères, les petits chiens vivent généralement plus longtemps (13 à 17 ans) que les races géantes (7 à 10 ans), en raison d’une croissance cellulaire plus rapide et de contraintes cardiovasculaires et articulaires accrues chez les grands gabarits.',
  },
  {
    id: 'faq-6',
    topic: 'Site',
    question: 'Comment sauvegarder mes races préférées sur Univers des Chiens ?',
    answer:
      'Cliquez sur l’icône cœur présente sur chaque carte du catalogue ou dans la fiche détaillée d’une race. Vos favoris sont mémorisés localement dans votre navigateur et accessibles en un clic via le filtre « Mes favoris » ou le bouton Favoris du menu.',
  },
];
