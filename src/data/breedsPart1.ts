import { Breed } from '../types/dog';
import { MEDIA_ASSETS } from './mediaAssets';

export const breedsPart1: Breed[] = [
  {
    id: 'berger-allemand',
    name: 'Berger allemand',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Thuringe et Wurtemberg',
    history:
      'Sélectionné à la fin du XIXe siècle par le capitaine Max von Stephanitz à partir de chiens de berger ruraux allemands, le Berger allemand a été conçu pour allier endurance, intelligence et obéissance absolue dans la conduite des troupeaux avant de devenir une référence mondiale du chien utilitaire.',
    physicalDescription:
      'Chien de taille moyenne à grande, solidement charpenté, à la silhouette allongée et musclée. Son port de tête est fier, ses oreilles sont dressées en pointe et son dos légèrement incliné vers la croupe.',
    coatColors: ['Noir et feu', 'Noir unicolore', 'Gris loup (sable)'],
    heightAvg: '55 – 65 cm',
    heightRangeCm: [55, 65],
    weightAvg: '22 – 40 kg',
    weightRangeKg: [22, 40],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Loyal', 'Courageux', 'Intelligent', 'Vigilant'],
    temperamentSummary:
      'Équilibré, sûr de lui, profondément attaché à sa famille, vigilant sans nervosité et doté d’une grande capacité d’apprentissage.',
    behaviorWithChildren:
      'Très protecteur et patient envers les enfants de son foyer lorsqu’il est bien socialisé dès le plus jeune âge.',
    behaviorWithAnimals:
      'Sociable avec les chiens et chats familiers s’il a été habitué tôt ; son instinct de garde reste présent face aux inconnus.',
    intelligenceScore: 5,
    intelligenceDetail: 'Classé parmi les 3 races les plus intelligentes au monde pour l’obéissance et la résolution de tâches.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      'Nécessite au minimum 1h30 à 2h d’activité quotidienne combinant marche rapide, pistage, obéissance et jeux de rapport.',
    recommendedDiet:
      'Alimentation riche en protéines animales digestes, avec un apport contrôlé en acides gras oméga-3 et chondroprotecteurs pour soutenir les articulations.',
    coatCare:
      'Brossage 2 à 3 fois par semaine, et quotidien en période de mue saisonnière (printemps et automne) pour éliminer le sous-poil dense.',
    healthIssues: ['Dysplasie de la hanche et du coude', 'Myélopathie dégénérative', 'Sensibilité digestive'],
    idealLivingConditions:
      'Maison avec jardin ou appartement spacieux à condition de bénéficier de sorties longues, structurées et stimulantes chaque jour.',
    advantagesAndSpecialties:
      'Polyvalence exceptionnelle : guide d’aveugle, sauvetage en décombres, chien de famille protecteur et champion de disciplines sportives canines.',
    trainingTips:
      'Privilégier une éducation ferme, juste et fondée sur le renforcement positif dès 2 mois ; canaliser son énergie par des exercices mentaux variés.',
    shortDescription:
      'Polyvalent, loyal et doté d’une intelligence remarquable, il excelle autant en famille que dans les missions de secours.',
    anecdotes: [
      'Horand von Grafrath, inscrit en 1899 sous le numéro SZ 1, est reconnu comme le premier Berger allemand officiel du livre des origines.',
      'Le Berger allemand Rin Tin Tin, sauvé en France durant la Première Guerre mondiale, est devenu l’une des plus célèbres vedettes du cinéma muet à Hollywood.'
    ],
    unusualFacts: [
      'Sa mâchoire possède une puissance de morsure estimée autour de 106 kg/cm².',
      'Il peut mémoriser plusieurs dizaines d’ordres complexes et enchaîner des séquences d’actions autonomes.'
    ],
    didYouKnow:
      'Les chiots Bergers allemands naissent souvent avec les oreilles tombantes qui se redressent progressivement entre 4 et 6 mois.',
    sizeCategory: 'Grand',
    coatType: 'Mi-long',
    categories: ['berger', 'garde', 'travail', 'grande-taille'],
    popularityRank: 1,
    photo: MEDIA_ASSETS.breedBergerAllemand,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'long',
      coatPattern: 'saddle',
      coatTexture: 'smooth',
      primaryColor: '#C68B49',
      secondaryColor: '#1E1D1B',
      accentColor: '#E5BC87',
      eyeColor: '#4A2E16',
      noseColor: '#161615',
      tailStyle: 'sabre',
      plateNumber: '01',
    },
    gaitSpeedKmh: 48,
    strideFrequency: 'Trot allongé très économique',
    fciGroup: 'Groupe 1 · Chiens de berger et de bouvier',
  },
  {
    id: 'labrador-retriever',
    name: 'Labrador Retriever',
    originCountry: 'Canada / Royaume-Uni',
    continent: 'Amérique du Nord',
    originRegion: 'Terre-Neuve puis Angleterre',
    history:
      'Descendant du chien de Saint-John élevé par les pêcheurs de Terre-Neuve pour récupérer les filets et poissons tombés à l’eau, il fut importé et perfectionné en Angleterre au XIXe siècle comme chien de rapport de gibier d’eau.',
    physicalDescription:
      'Corps puissant, rein large et poitrine bien descendue. Queue caractéristique dite « de loutre », épaisse à la base et recouverte d’un poil court et imperméable.',
    coatColors: ['Sable (jaune)', 'Noir', 'Chocolat'],
    heightAvg: '54 – 57 cm',
    heightRangeCm: [54, 57],
    weightAvg: '25 – 36 kg',
    weightRangeKg: [25, 36],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Affectueux', 'Sociable', 'Joueur', 'Docile'],
    temperamentSummary:
      'Doux, enthousiaste, sans agressivité ni timidité excessive, animé par un fort désir de plaire à son maître.',
    behaviorWithChildren:
      'Compagnon exemplaire des enfants : tolérant, patient et toujours partant pour jouer avec douceur.',
    behaviorWithAnimals:
      'S’entend très facilement avec ses congénères et cohabite paisiblement avec les chats.',
    intelligenceScore: 5,
    intelligenceDetail: 'Très grande facilité de dressage, particulièrement utilisé comme chien guide et chien d’assistance.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h à 1h30 d’exercice quotidien, avec une prédilection marquée pour la nage et les jeux de lancer-rapporter.',
    recommendedDiet:
      'Rations strictement pesées car la race présente une prédisposition génétique à l’appétit insatiable et à l’embonpoint.',
    coatCare:
      'Poil court double très simple à entretenir : un brossage hebdomadaire suffit, plus fréquent lors des mues.',
    healthIssues: ['Surpoids et obésité', 'Dysplasie de la hanche', 'Atrophie progressive de la rétine'],
    idealLivingConditions:
      'Famille active pouvant lui offrir balades en nature, baignades et présence humaine régulière.',
    advantagesAndSpecialties:
      'Pattes palmées et pelage hydrofuge en font un nageur infatigable ; premier chien d’assistance médicale au monde.',
    trainingTips:
      'Utiliser des récompenses alimentaires mesurées et travailler le rappel et la marche en laisse sans traction dès 3 mois.',
    shortDescription:
      'Nageur né et compagnon familial universel, réputé pour sa douceur, sa gourmandise et sa joie de vivre communicative.',
    anecdotes: [
      'Jusqu’en 2016, des chercheurs de Cambridge ont identifié une mutation du gène POMC expliquant pourquoi de nombreux Labradors ont constamment faim.',
      'Les premiers Labradors accompagnant les marins canadiens plongeaient dans les eaux glacées de l’Atlantique Nord.'
    ],
    unusualFacts: [
      'Il possède une « gueule douce » capable de transporter un œuf cru sans en briser la coquille.',
      'Ses espaces interdigitaux sont naturellement palmés pour améliorer la propulsion aquatique.'
    ],
    didYouKnow:
      'Une même portée de Labradors peut réunir des chiots noirs, jaunes et chocolats selon les gènes transmis par les parents.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['chasse', 'compagnie', 'travail', 'sportifs', 'grande-taille'],
    popularityRank: 2,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#E2BA78',
      secondaryColor: '#C89B54',
      accentColor: '#F3D7A4',
      eyeColor: '#5B3A1B',
      noseColor: '#231F20',
      tailStyle: 'sabre',
      plateNumber: '02',
    },
    gaitSpeedKmh: 40,
    strideFrequency: 'Foulée souple et nage endurante',
    fciGroup: 'Groupe 8 · Chiens rapporteurs de gibier',
  },
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    originCountry: 'Royaume-Uni (Écosse)',
    continent: 'Europe',
    originRegion: 'Highlands d’Écosse',
    history:
      'Créé dans les années 1860 par Lord Tweedmouth dans son domaine de Guisachan en Écosse, en croisant un Retriever à poil plat jaune avec un Tweed Water Spaniel afin d’obtenir un rapporteur doux, endurant et visible dans les hautes herbes.',
    physicalDescription:
      'Chien harmonieux et symétrique, au crâne large, aux yeux foncés expressifs et à la robe dorée mi-longue munie de franges soyeuses sur les membres et la queue.',
    coatColors: ['Or clair (crème)', 'Or moyen', 'Or foncé (acajou)'],
    heightAvg: '51 – 61 cm',
    heightRangeCm: [51, 61],
    weightAvg: '25 – 34 kg',
    weightRangeKg: [25, 34],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Doux', 'Fidèle', 'Équilibré', 'Enjoué'],
    temperamentSummary:
      'Tempérament d’or : affectueux, attentif aux émotions humaines, calme à l’intérieur et dynamique en extérieur.',
    behaviorWithChildren:
      'Exceptionnellement patient et tendre avec les enfants, ce qui en fait l’un des meilleurs chiens de famille.',
    behaviorWithAnimals:
      'Pacifique et accueillant envers les autres chiens, chats et petits animaux familiers.',
    intelligenceScore: 5,
    intelligenceDetail: 'Assimile rapidement les ordres complexes et excelle en médiation animale et sauvetage.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      'Environ 1h à 1h30 par jour entre promenades variées, jeux d’intelligence et natation.',
    recommendedDiet:
      'Croquettes de haute qualité équilibrées en protéines et fibres, évitant le surpoids après la stérilisation.',
    coatCare:
      'Brossage 2 à 3 fois par semaine, en insistant derrière les oreilles et sur les franges pour prévenir les nœuds.',
    healthIssues: ['Dysplasie de la hanche', 'Affections oculaires', 'Otites liées aux oreilles tombantes'],
    idealLivingConditions:
      'Tout logement offrant de la proximité humaine et des sorties quotidiennes en pleine nature ; supporte mal la solitude prolongée.',
    advantagesAndSpecialties:
      'Sensibilité émotionnelle hors pair, utilisé en zoothérapie dans les hôpitaux et écoles.',
    trainingTips:
      'Répond merveilleusement aux méthodes douces, à la voix encourageante et aux jeux de recherche olfactive.',
    shortDescription:
      'Éclatant par sa robe dorée et sa bienveillance naturelle, le Golden Retriever incarne l’équilibre familial idéal.',
    anecdotes: [
      'Tous les Golden Retrievers modernes descendent du mâle jaune « Nous », né en 1864 en Écosse.',
      'Le domaine de Guisachan accueille régulièrement des rassemblements internationaux regroupant plusieurs centaines de Golden Retrievers.'
    ],
    unusualFacts: [
      'Comme le Labrador, il possède une bouche très délicate capable de porter des objets fragiles sans les marquer.',
      'Il garde souvent un tempérament joueur de chiot jusqu’à l’âge de 4 ou 5 ans.'
    ],
    didYouKnow:
      'Son sous-poil dense est naturellement résistant à l’eau, héritage de son passé de rapporteur dans les lochs écossais.',
    sizeCategory: 'Grand',
    coatType: 'Mi-long',
    categories: ['compagnie', 'chasse', 'travail', 'grande-taille'],
    popularityRank: 3,
    photo: MEDIA_ASSETS.breedGoldenRetriever,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#E5B96D',
      secondaryColor: '#F3D99E',
      accentColor: '#C59042',
      eyeColor: '#432B14',
      noseColor: '#231D1A',
      tailStyle: 'plume',
      plateNumber: '03',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Allures fluides et amples',
    fciGroup: 'Groupe 8 · Chiens rapporteurs de gibier',
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Rottweil (Bade-Wurtemberg)',
    history:
      'Issu des molosses romains qui accompagnaient les légions pour garder le bétail, il s’établit dans la ville marchande de Rottweil où il protégeait les troupeaux et les bourses des marchands contre les brigands.',
    physicalDescription:
      'Chien molossoïde robuste, compact et musclé, au crâne large, à la mâchoire puissante et au pelage noir brillant nettement marqué de feu.',
    coatColors: ['Noir et feu (marques acajou nettement délimitées)'],
    heightAvg: '56 – 68 cm',
    heightRangeCm: [56, 68],
    weightAvg: '42 – 52 kg',
    weightRangeKg: [42, 52],
    lifespan: '9 – 11 ans',
    lifespanRangeYears: [9, 11],
    temperament: ['Calme', 'Courageux', 'Protecteur', 'Dévoué'],
    temperamentSummary:
      'Assuré, posé, très attaché à son cercle familial et doté d’un instinct territorial naturel qui demande un maître expérimenté.',
    behaviorWithChildren:
      'Tendre et protecteur avec les enfants de la famille, à condition de superviser les jeux en raison de sa masse musculaire.',
    behaviorWithAnimals:
      'Nécessite une socialisation précoce et rigoureuse pour cohabiter sereinement avec d’autres chiens de même sexe.',
    intelligenceScore: 4,
    intelligenceDetail: 'Compréhension rapide, très attentif aux signaux de son conducteur dans le travail de garde ou pistage.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 d’activité structurée quotidienne incluant marche, traction légère, obéissance et stimulation mentale.',
    recommendedDiet:
      'Alimentation haute digestibilité adaptée aux chiens de grande race afin de préserver la masse musculaire sans surcharger les hanches.',
    coatCare:
      'Poil court et serré très facile d’entretien : un passage au gant caoutchouc une fois par semaine.',
    healthIssues: ['Dysplasie coxo-fémorale', 'Sténose aortique', 'Torsion gastrique'],
    idealLivingConditions:
      'Foyer cohérent et disponible, idéalement avec jardin clôturé, disposant de temps pour l’éducation continue.',
    advantagesAndSpecialties:
      'Calme impressionnant face au stress, excellente capacité de dissuasion et loyauté sans faille.',
    trainingTips:
      'Socialisation intensive dès 8 semaines, règles constantes et éducation positive ferme sans brutalité.',
    shortDescription:
      'Puissant molosse allemand au cœur tendre avec les siens, alliant sang-froid, force tranquille et sens de la protection.',
    anecdotes: [
      'Au XIXe siècle, les bouchers de Rottweil accrochaient leur bourse autour du cou de leur chien pour sécuriser leurs recettes au retour du marché.',
      'La race a été officiellement reconnue comme chien de police en Allemagne en 1910.'
    ],
    unusualFacts: [
      'Il est parfois surnommé « chien de boucher de Rottweil » en référence à ses origines marchandes.',
      'Contrairement à sa réputation imposante, il recherche volontiers le contact physique en s’appuyant contre les jambes de ses maîtres.'
    ],
    didYouKnow:
      'La race a failli disparaître au début du XXe siècle avec l’arrivée du chemin de fer qui remplaça les convois de bétail, avant d’être sauvée par des éleveurs passionnés de Stuttgart.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'grande-taille'],
    popularityRank: 4,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#191918',
      secondaryColor: '#B55B27',
      accentColor: '#D6783A',
      eyeColor: '#3B2314',
      noseColor: '#141413',
      tailStyle: 'sabre',
      plateNumber: '04',
    },
    gaitSpeedKmh: 36,
    strideFrequency: 'Trot puissant et régulier',
    fciGroup: 'Groupe 2 · Chiens de type Pinscher et Schnauzer, Molossoïdes',
  },
  {
    id: 'bouledogue-francais',
    name: 'Bouledogue français',
    originCountry: 'France',
    continent: 'Europe',
    originRegion: 'Paris et Île-de-France',
    history:
      'Né dans les quartiers populaires parisiens à la fin du XIXe siècle du croisement entre petits bulldogs anglais importés par des dentellières et des terriers ratiers locaux, il conquit rapidement les artistes, écrivains et salons européens.',
    physicalDescription:
      'Petit molosse trapu au museau aplati, doté de larges oreilles droites dites « en chauve-souris », d’une ossature solide et d’une queue naturellement courte.',
    coatColors: ['Fauve', 'Bringé', 'Caille (blanc et bringé)', 'Crème'],
    heightAvg: '24 – 35 cm',
    heightRangeCm: [24, 35],
    weightAvg: '8 – 14 kg',
    weightRangeKg: [8, 14],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Sociable', 'Enjoué', 'Affectueux', 'Clown'],
    temperamentSummary:
      'Compagnon citadin par excellence : gai, proche de l’humain, peu aboyeur, parfois têtu mais toujours attachant.',
    behaviorWithChildren:
      'Très doux et amusant avec les enfants calmes, appréciant les séances de câlins autant que les petits jeux.',
    behaviorWithAnimals:
      'Généralement cordial s’il est socialisé tôt, même s’il peut se montrer possessif avec ses jouets.',
    intelligenceScore: 3,
    intelligenceDetail: 'Comprend vite mais demande patience et séances courtes pour rester motivé.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '30 à 45 minutes de sorties fractionnées par jour, impérativement aux heures fraîches en été.',
    recommendedDiet:
      'Alimentation hautement digestible, fractionnée en deux repas pour limiter les flatulences et préserver la ligne.',
    coatCare:
      'Poil ras sans sous-poil : brossage hebdomadaire et nettoyage régulier des plis faciaux avec une lotion douce.',
    healthIssues: ['Syndrome brachycéphale (respiration)', 'Sensibilité à la chaleur', 'Hernie discale'],
    idealLivingConditions:
      'Vie en appartement parfaitement adaptée grâce à son calme intérieur et son besoin modéré d’exercice.',
    advantagesAndSpecialties:
      'Peu exigeant en espace, très silencieux, doté d’une expressivité faciale irrésistible.',
    trainingTips:
      'Éducation douce sans brusquerie ; éviter tout effort intense par temps chaud et privilégier le jeu.',
    shortDescription:
      'Petit molosse parisien aux oreilles de chauve-souris, adoré pour son humour, sa tendresse et sa vie en appartement.',
    anecdotes: [
      'Toulouse-Lautrec et Colette comptaient parmi les premiers admirateurs célèbres du Bouledogue français à la Belle Époque.',
      'Un Bouledogue français prénommé Gamin de Pycombe figurait parmi les passagers célèbres du Titanic en 1912.'
    ],
    unusualFacts: [
      'En raison de son centre de gravité bas et de sa morphologie trapue, il nage très difficilement et doit porter un gilet près de l’eau.',
      'Il n’aboie que très rarement, s’exprimant plutôt par de petits grognements affectueux.'
    ],
    didYouKnow:
      'Ses oreilles droites arrondies au sommet sont surnommées « oreilles de chauve-souris » dans le standard officiel.',
    sizeCategory: 'Petit',
    coatType: 'Court',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 5,
    photo: MEDIA_ASSETS.breedBouledogueFrancais,
    morpho: {
      earStyle: 'bat',
      muzzleStyle: 'short',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#CFA372',
      secondaryColor: '#292320',
      accentColor: '#EAD0AD',
      eyeColor: '#2B1B12',
      noseColor: '#161515',
      tailStyle: 'docked-short',
      plateNumber: '05',
    },
    gaitSpeedKmh: 22,
    strideFrequency: 'Démarche vive à courtes foulées',
    fciGroup: 'Groupe 9 · Chiens d’agrément et de compagnie',
  },
  {
    id: 'husky-siberien',
    name: 'Husky sibérien',
    originCountry: 'Russie (Sibérie)',
    continent: 'Asie',
    originRegion: 'Bassin de la Kolyma (Tchoukotka)',
    history:
      'Élevé pendant des millénaires par le peuple semi-nomade des Tchouktches en Sibérie orientale pour tirer des traîneaux sur de longues distances et réchauffer les enfants dans les abris. Il devint mondialement célèbre en 1925 lors de la course au sérum de Nome en Alaska.',
    physicalDescription:
      'Chien nordique de taille moyenne, athlétique et gracieux, à la fourrure double épaisse, aux oreilles triangulaires dressées et aux yeux en amande bleus, marron ou vairons.',
    coatColors: ['Gris loup et blanc', 'Noir et blanc', 'Roux cuivré et blanc', 'Blanc pur'],
    heightAvg: '51 – 60 cm',
    heightRangeCm: [51, 60],
    weightAvg: '16 – 27 kg',
    weightRangeKg: [16, 27],
    lifespan: '12 – 14 ans',
    lifespanRangeYears: [12, 14],
    temperament: ['Indépendant', 'Endurant', 'Amical', 'Fugueur'],
    temperamentSummary:
      'Chien de meute très sociable et doux avec l’humain, mais indépendant, peu gardien et animé par un instinct de course irrépressible.',
    behaviorWithChildren:
      'Très gentil et joueur avec les enfants respectueux ; apprécie la vie de groupe animée.',
    behaviorWithAnimals:
      'Adore la compagnie d’autres chiens ; vigilance requise face aux petits animaux de proie (chats inconnus, rongeurs, volaille).',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligence pragmatique et autonome : il réfléchit avant d’obéir.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Minimum 2 heures par jour d’activité soutenue : canicross, VTT (bikejöring), traîneau ou randonnées sportives.',
    recommendedDiet:
      'Métabolisme efficace adapté aux protéines et lipides de qualité ; besoins modérés hors périodes de traction intense.',
    coatCare:
      'Sous-poil extrêmement dense nécessitant un brossage approfondi 2 fois par semaine et quotidien lors des deux grandes mues annuelles.',
    healthIssues: ['Cataracte juvénile', 'Atrophie rétinienne', 'Dermatose sensible au zinc'],
    idealLivingConditions:
      'Maître très sportif, clôture haute et enterrée (grand sauteur et creuseur), climat tempéré à froid.',
    advantagesAndSpecialties:
      'Endurance légendaire, aucune odeur corporelle forte et voix mélodieuse (« chant » du Husky).',
    trainingTips:
      'Travailler le rappel sans relâche (la longe reste souvent indispensable en zone ouverte) et instaurer une vraie complicité sans contrainte.',
    shortDescription:
      'Athlète des neiges au regard perçant, infatigable coureur de meute célèbre pour sa beauté lupoïde et son esprit libre.',
    anecdotes: [
      'En 1925, Balto et Togo menèrent l’attelage héroïque qui transporta le sérum antidiphtérique sur plus de 1 000 km dans le blizzard d’Alaska.',
      'Les Tchouktches laissaient dormir leurs Huskies à l’intérieur des tentes pour tenir chaud aux familles par -40 °C.'
    ],
    unusualFacts: [
      'Il ajuste son métabolisme en pleine course pour brûler les graisses sans accumuler de fatigue musculaire rapide.',
      'Il n’aboie presque jamais mais s’exprime par des vocalises rappelant le hurlement du loup.'
    ],
    didYouKnow:
      'Environ 15 à 20 % des Huskies présentent des yeux vairons (un œil bleu et un œil ambre ou brun) ou particolores.',
    sizeCategory: 'Moyen',
    coatType: 'Mi-long',
    categories: ['nordiques', 'sportifs', 'travail'],
    popularityRank: 6,
    photo: MEDIA_ASSETS.breedHuskySiberien,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'long',
      coatPattern: 'masked',
      coatTexture: 'fluffy',
      primaryColor: '#767D84',
      secondaryColor: '#F6F5F2',
      accentColor: '#3E4348',
      eyeColor: '#4BA3E3',
      noseColor: '#1E1D1C',
      tailStyle: 'plume',
      plateNumber: '06',
    },
    gaitSpeedKmh: 45,
    strideFrequency: 'Trot souple longue distance',
    fciGroup: 'Groupe 5 · Chiens de type Spitz et de type primitif',
  },
  {
    id: 'berger-belge-malinois',
    name: 'Berger belge malinois',
    originCountry: 'Belgique',
    continent: 'Europe',
    originRegion: 'Malines (Province d’Anvers)',
    history:
      'L’une des quatre variétés du Berger belge fixées à la fin du XIXe siècle par le professeur Adolphe Reul. Sélectionné à Malines pour son pelage court pratique aux champs et son ardeur au travail, il est devenu le chien d’intervention et de sport canin le plus prisé au monde.',
    physicalDescription:
      'Médioligne harmonieux, sec, musclé et agile. Tête finement ciselée au masque noir caractéristique, oreilles triangulaires dressées bien haut et poil court fauve charbonné.',
    coatColors: ['Fauve charbonné avec masque noir'],
    heightAvg: '56 – 66 cm',
    heightRangeCm: [56, 66],
    weightAvg: '20 – 30 kg',
    weightRangeKg: [20, 30],
    lifespan: '12 – 14 ans',
    lifespanRangeYears: [12, 14],
    temperament: ['Vif', 'Hyper-réactif', 'Dévoué', 'Courageux'],
    temperamentSummary:
      'Véritable athlète à l’énergie débordante, d’une loyauté fusionnelle et toujours prêt à agir au moindre signal.',
    behaviorWithChildren:
      'Protecteur et doux avec les enfants de son foyer lorsqu’il reçoit suffisamment d’exercice et de règles claires.',
    behaviorWithAnimals:
      'Cohabitation possible si éduquée tôt, mais son fort instinct de poursuite nécessite de canaliser ses réactions.',
    intelligenceScore: 5,
    intelligenceDetail: 'Réactivité fulgurante, capacité d’apprentissage hors norme en recherche, ring et agilité.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Au moins 2 heures quotidiennes mêlant sport intense, exercices cognitifs complexes et travail olfactif.',
    recommendedDiet:
      'Ration énergétique riche en protéines animales et graisses saines pour soutenir un métabolisme très actif.',
    coatCare:
      'Entretien minimal : brossage hebdomadaire pour retirer le poil mort.',
    healthIssues: ['Race globalement très rustique', 'Sensibilité articulaire en sport intensif', 'Épilepsie rare'],
    idealLivingConditions:
      'Maître très expérimenté et actif ; déconseillé aux personnes sédentaires malgré son attachement familial.',
    advantagesAndSpecialties:
      'Référence mondiale des unités de secours, détection et forces de sécurité grâce à sa légèreté et sa précision.',
    trainingTips:
      'Apprendre le calme (« pas bouger », détente) dès chiot autant que l’action ; utiliser exclusivement le renforcement positif structuré.',
    shortDescription:
      'Athlète belge à la vivacité fulgurante, doté d’une intelligence de travail exceptionnelle et d’un dévouement absolu.',
    anecdotes: [
      'Un Malinois nommé Cairo a participé aux opérations de sauvetage et de reconnaissance les plus médiatisées au début des années 2010.',
      'Il est capable de franchir des palissades de plus de 2,30 mètres avec une aisance spectaculaire.'
    ],
    unusualFacts: [
      'Son poids plume comparé à sa puissance musculaire lui offre un rapport poids/puissance supérieur à la plupart des chiens de travail.',
      'Il possède une sensibilité remarquable aux micro-gestes de son conducteur.'
    ],
    didYouKnow:
      'Malgré son allure proche du Berger allemand, le Malinois s’en distingue par un dos parfaitement horizontal et un ossature plus légère.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['berger', 'garde', 'travail', 'sportifs', 'grande-taille'],
    popularityRank: 7,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'long',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#B5733A',
      secondaryColor: '#1E1B18',
      accentColor: '#D6995C',
      eyeColor: '#3B2314',
      noseColor: '#121110',
      tailStyle: 'sabre',
      plateNumber: '07',
    },
    gaitSpeedKmh: 50,
    strideFrequency: 'Galop bondissant explosif',
    fciGroup: 'Groupe 1 · Chiens de berger et de bouvier',
  },
  {
    id: 'caniche',
    name: 'Caniche (Grand, Moyen, Nain, Toy)',
    originCountry: 'France / Allemagne',
    continent: 'Europe',
    originRegion: 'Europe occidentale',
    history:
      'À l’origine chien d’eau utilisé pour rapporter les canards (d’où « chien à canard » puis Caniche), la race fut adoptée par l’aristocratie française dès le XVIIe siècle. La tonte « lion » servait historiquement à protéger ses articulations et son cœur dans l’eau froide.',
    physicalDescription:
      'Silhouette élégante et proportionnée, portée fière, allure sautillante et poil bouclé ou cordé à pousse continue qui ne mue pratiquement pas.',
    coatColors: ['Abricot', 'Noir', 'Blanc', 'Marron', 'Gris', 'Fauve rouge'],
    heightAvg: '24 – 60 cm (selon variété)',
    heightRangeCm: [24, 60],
    weightAvg: '3 – 28 kg (selon variété)',
    weightRangeKg: [3, 28],
    lifespan: '12 – 16 ans',
    lifespanRangeYears: [12, 16],
    temperament: ['Brillant', 'Vif', 'Affectueux', 'Adaptable'],
    temperamentSummary:
      'Extraordinairement perspicace, joyeux, proche de son maître et capable de s’adapter à presque tous les modes de vie.',
    behaviorWithChildren:
      'Très joueur et complice avec les enfants doux, particulièrement les variétés Moyenne et Grand Caniche.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères et les chats lorsqu’il est bien socialisé.',
    intelligenceScore: 5,
    intelligenceDetail: 'Classé 2e race la plus intelligente au monde par le psychologue canin Stanley Coren.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '45 minutes à 1h30 selon la taille, complétées par des jeux d’adresse, d’agility ou de recherche.',
    recommendedDiet:
      'Croquettes adaptées à la taille du gabarit (Toy à Grand) avec un bon équilibre en acides aminés pour la qualité du poil.',
    coatCare:
      'Ne mue presque pas, mais exige un brossage régulier (3 fois/semaine) et un toilettage professionnel toutes les 6 à 8 semaines.',
    healthIssues: ['Atrophie rétinienne', 'Luxation de la rotule (petits formats)', 'Tartre dentaire'],
    idealLivingConditions:
      'Appartement ou maison ; la variété Grand Caniche apprécie particulièrement les espaces verts et activités sportives.',
    advantagesAndSpecialties:
      'Pelage hypoallergénique à faible perte de poils, longévité remarquable et talent inné pour apprendre des tours.',
    trainingTips:
      'Stimuler son esprit vif par des apprentissages variés ; éviter les répétitions monotones qui l’ennuient.',
    shortDescription:
      'Élégant, hypoallergénique et doté d’une intelligence prodigieuse, il brille autant en salon que sur les parcours d’agility.',
    anecdotes: [
      'Les caniches de cirque du XIXe siècle étaient célèbres en Europe pour leur capacité à exécuter des numéros chorégraphiés complexes.',
      'Le Caniche royal (Grand Caniche) a servi jusque dans les épreuves de traîneau de l’Iditarod en Alaska.'
    ],
    unusualFacts: [
      'Son pelage pousse en continu comme des cheveux humains et ne connaît pas de mue saisonnière massive.',
      'La FCI reconnaît officiellement quatre tailles distinctes sous un même standard.'
    ],
    didYouKnow:
      'Le mot allemand « Pudel » (Poodle en anglais) vient de « puddeln », qui signifie « barboter dans l’eau ».',
    sizeCategory: 'Moyen',
    coatType: 'Frisé',
    categories: ['compagnie', 'sportifs', 'chasse'],
    popularityRank: 8,
    photo: MEDIA_ASSETS.breedCaniche,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'curly',
      primaryColor: '#D6894A',
      secondaryColor: '#EEAA6D',
      accentColor: '#9E5825',
      eyeColor: '#3A2112',
      noseColor: '#1E1A18',
      tailStyle: 'docked-short',
      plateNumber: '08',
    },
    gaitSpeedKmh: 36,
    strideFrequency: 'Trot léger et élastique',
    fciGroup: 'Groupe 9 · Chiens d’agrément et de compagnie',
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    originCountry: 'Mexique',
    continent: 'Amérique du Nord',
    originRegion: 'État de Chihuahua',
    history:
      'Considéré comme le plus petit chien du monde, il descendrait du Techichi, petit chien sacré élevé par les civilisations toltèque puis aztèque bien avant l’arrivée des Européens.',
    physicalDescription:
      'Format minuscule au crâne caractéristique « en pomme », grands yeux ronds sombres, oreilles largement écartées et portées haut, existe en poil court et poil long.',
    coatColors: ['Fauve', 'Crème', 'Chocolat', 'Noir et feu', 'Merle', 'Blanc'],
    heightAvg: '15 – 23 cm',
    heightRangeCm: [15, 23],
    weightAvg: '1,5 – 3 kg',
    weightRangeKg: [1.5, 3],
    lifespan: '14 – 18 ans',
    lifespanRangeYears: [14, 18],
    temperament: ['Courageux', 'Vif', 'Exclusif', 'Alerte'],
    temperamentSummary:
      'Doté d’un tempérament intrépide qui ignore sa minuscule stature, très dévoué à sa personne de référence et excellent petit chien d’alerte.',
    behaviorWithChildren:
      'Mieux adapté aux enfants calmes et âgés sachant manipuler un chien très fragile avec douceur.',
    behaviorWithAnimals:
      'Vit volontiers avec d’autres Chihuahuas ; la prudence s’impose face aux grands chiens lors des jeux.',
    intelligenceScore: 3,
    intelligenceDetail: 'Astucieux et rapide à comprendre, surtout lorsqu’il est traité comme un vrai chien et non un jouet.',
    activityScore: 2,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '30 à 40 minutes de promenade quotidienne sur ses propres pattes ; craint le froid intense.',
    recommendedDiet:
      'Très petites croquettes riches en énergie pour éviter les chutes de glycémie, fréquentes chez les sujets minuscules.',
    coatCare:
      'Brossage hebdomadaire pour le poil court, 2 à 3 fois par semaine pour la variété à poil long.',
    healthIssues: ['Luxation de la rotule', 'Hypoglycémie du chiot', 'Accumulation de tartre dentaire'],
    idealLivingConditions:
      'Appartement calme ou maison, avec un maître attentif à sa sécurité thermique et physique.',
    advantagesAndSpecialties:
      'Plus longue espérance de vie parmi les races canines, facilité de transport et grand attachement affectif.',
    trainingTips:
      'Le laisser marcher au sol plutôt que de le porter en permanence ; socialisation précoce essentielle pour éviter les aboiements défensifs.',
    shortDescription:
      'Le plus petit chien du monde compense son format de poche par une personnalité audacieuse et une longévité record.',
    anecdotes: [
      'Des représentations gravées de chiens ressemblant au Techichi ont été retrouvées sur les pyramides de Cholula au Mexique.',
      'Il détient régulièrement les records de longévité canine, dépassant parfois les 18 ans.'
    ],
    unusualFacts: [
      'De nombreux Chihuahuas possèdent une « molera », petite fontanelle crânienne persistante qui demande de la délicatesse.',
      'Proportionnellement à sa masse corporelle, son cerveau figure parmi les plus volumineux du règne canin.'
    ],
    didYouKnow:
      'La race porte le nom du plus vaste État du Mexique, où les premiers spécimens modernes furent découverts au XIXe siècle.',
    sizeCategory: 'Petit',
    coatType: 'Court',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 9,
    morpho: {
      earStyle: 'bat',
      muzzleStyle: 'short',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#D6A566',
      secondaryColor: '#F5EAD7',
      accentColor: '#9C6B35',
      eyeColor: '#251710',
      noseColor: '#2D201A',
      tailStyle: 'curled',
      plateNumber: '09',
    },
    gaitSpeedKmh: 24,
    strideFrequency: 'Pas rapides et vifs',
    fciGroup: 'Groupe 9 · Chiens d’agrément et de compagnie',
  },
  {
    id: 'dobermann',
    name: 'Dobermann',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Apolda (Thuringe)',
    history:
      'Créé autour de 1870 par Karl Friedrich Louis Dobermann, percepteur d’impôts à Apolda qui souhaitait un chien rapide, élégant et courageux pour sa protection. Il croisa notamment Pinscher allemand, Rottweiler, Beauceron et Lévrier Greyhound.',
    physicalDescription:
      'Silhouette aristocratique, carrée et athlétique, au cou long et galbé, poil ras luisant noir ou marron marqué de feu.',
    coatColors: ['Noir et feu', 'Marron (chocolat) et feu'],
    heightAvg: '63 – 72 cm',
    heightRangeCm: [63, 72],
    weightAvg: '32 – 45 kg',
    weightRangeKg: [32, 45],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Fidèle', 'Sensible', 'Vigilant', 'Athlétique'],
    temperamentSummary:
      'Sous son allure impressionnante se cache un chien extrêmement affectueux surnommé le « chien velcro », très sensible aux humeurs de sa famille.',
    behaviorWithChildren:
      'Doux et protecteur envers les enfants de son foyer lorsqu’il est bien éduqué et dépensé.',
    behaviorWithAnimals:
      'Cohabite correctement s’il est socialisé tôt, bien qu’une certaine réserve puisse persister envers les chiens inconnus de même sexe.',
    intelligenceScore: 5,
    intelligenceDetail: 'Top 5 mondial en obéissance : assimile nouveaux exercices en quelques répétitions.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h d’exercice dynamique quotidien : course, pistage, canicross et exercices d’obéissance.',
    recommendedDiet:
      'Alimentation riche en protéines de qualité et L-carnitine/taurine bénéfique pour le soutien cardiaque.',
    coatCare:
      'Poil court sans sous-poil : très peu salissant, un coup de gant de toilettage hebdomadaire suffit ; sensible au froid hivernal.',
    healthIssues: ['Cardiomyopathie dilatée', 'Maladie de Von Willebrand', 'Syndrome de Wobbler'],
    idealLivingConditions:
      'Vie à l’intérieur près de ses maîtres (ne supporte pas le chenil isolé) avec accès quotidien à de grands espaces.',
    advantagesAndSpecialties:
      'Vitesse de sprint proche du lévrier alliée à une loyauté protectrice hors du commun.',
    trainingTips:
      'Éducation ferme mais exclusivement positive et douce : le Dobermann est très réceptif à l’intonation et se braque face aux méthodes rudes.',
    shortDescription:
      'Élégance athlétique et dévouement fusionnel définissent ce chien de garde sensible, vif et brillant.',
    anecdotes: [
      'Durant la Seconde Guerre mondiale, un Dobermann nommé Kurt sauva des centaines de soldats sur l’île de Guam en détectant une embuscade.',
      'Dans les pays européens interdisant l’otectomie et la caudectomie, le Dobermann conserve désormais ses oreilles tombantes et sa longue queue.'
    ],
    unusualFacts: [
      'Malgré son gabarit athlétique, il a très peu de graisse sous-cutanée et adore dormir sous une couverture en hiver.',
      'Il est l’une des rares races nommées d’après une personne précise (Karl Friedrich Louis Dobermann).'
    ],
    didYouKnow:
      'Sa robe marron et feu est officiellement reconnue aux côtés de la classique robe noire et feu.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'sportifs', 'grande-taille'],
    popularityRank: 10,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#1B1A19',
      secondaryColor: '#A95226',
      accentColor: '#CC6B38',
      eyeColor: '#3C2314',
      noseColor: '#141312',
      tailStyle: 'whip',
      plateNumber: '10',
    },
    gaitSpeedKmh: 52,
    strideFrequency: 'Foulée élastique et rapide',
    fciGroup: 'Groupe 2 · Chiens de type Pinscher et Schnauzer',
  },
  {
    id: 'boxer',
    name: 'Boxer',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Munich (Bavière)',
    history:
      'Issu du Bullenbeisser allemand (ancien chien de chasse au gros gibier) croisé au XIXe siècle avec le Bulldog anglais, le Boxer moderne fut fixé à Munich à partir de 1895.',
    physicalDescription:
      'Chien de taille moyenne, carré, à la musculature sèche et puissante, tête cubique reconnaissable avec museau court légèrement retroussé et masque noir.',
    coatColors: ['Fauve (jaune à rouge cerf)', 'Bringé (raies noires sur fond fauve)'],
    heightAvg: '53 – 63 cm',
    heightRangeCm: [53, 63],
    weightAvg: '25 – 32 kg',
    weightRangeKg: [25, 32],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Joueur', 'Loyal', 'Énergique', 'Protecteur'],
    temperamentSummary:
      'Éternel adolescent plein d’humour et d’enthousiasme, profondément attaché aux siens et très vigilant face aux situations inhabituelles.',
    behaviorWithChildren:
      'Réputé comme l’un des meilleurs gardiens et compagnons de jeu des enfants grâce à sa patience remarquable.',
    behaviorWithAnimals:
      'Amical s’il est bien socialisé, même si son jeu physique parfois brusque avec les pattes demande surveillance.',
    intelligenceScore: 4,
    intelligenceDetail: 'Très réceptif lorsqu’il est motivé par le jeu et les interactions ludiques.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 par jour d’activité variée (courses, balle, randonnée) en évitant les heures très chaudes.',
    recommendedDiet:
      'Croquettes digestes adaptées aux molossoïdes actifs, fractionnées en deux repas.',
    coatCare:
      'Poil court lisse facile à nettoyer avec un gant doux et un entretien régulier du pli nasal.',
    healthIssues: ['Cardiomyopathie', 'Sensibilité à la chaleur', 'Tumeurs cutanées (mastocytomes)'],
    idealLivingConditions:
      'Vie de famille chaleureuse à l’intérieur ; le Boxer supporte mal la solitude ou le froid prolongé.',
    advantagesAndSpecialties:
      'Mélange rare de prestance dissuasive et d’immense tendresse joueuse.',
    trainingTips:
      'Canaliser ses sauts enthousiastes dès chiot ; privilégier des séances courtes, dynamiques et positives.',
    shortDescription:
      'Musculeux mais éternel farceur, le Boxer conjugue fidélité familiale, courage et enthousiasme communicatif.',
    anecdotes: [
      'Le nom « Boxer » viendrait de son habitude caractéristique de se dresser sur ses pattes arrière et de frapper de ses pattes avant comme un boxeur.',
      'Il fut l’une des premières races utilisées officiellement comme chien d’assistance pour aveugles en Allemagne dès 1916.'
    ],
    unusualFacts: [
      'Les Boxers blancs représentent environ 20 à 25 % des naissances mais ne sont pas admis en confirmation standard FCI.',
      'Il conserve un tempérament fougueux et joueur bien au-delà de l’âge de 6 ans.'
    ],
    didYouKnow:
      'Son prognathisme inférieur naturel (mâchoire du bas légèrement avancée) est un héritage direct des anciens chiens de prise.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'compagnie', 'sportifs'],
    popularityRank: 11,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'short',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#C5793B',
      secondaryColor: '#231E1B',
      accentColor: '#F3EEE7',
      eyeColor: '#3B2314',
      noseColor: '#151413',
      tailStyle: 'sabre',
      plateNumber: '11',
    },
    gaitSpeedKmh: 44,
    strideFrequency: 'Trot puissant et élastique',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'dalmatien',
    name: 'Dalmatien',
    originCountry: 'Croatie',
    continent: 'Europe',
    originRegion: 'Dalmatie (côte adriatique)',
    history:
      'Représenté dès le XVIIe siècle sur des tableaux et chroniques d’église en Dalmatie, ce chien endurant accompagnait les diligences pour ouvrir la voie et garder les chevaux, d’où son association historique avec les casernes de pompiers.',
    physicalDescription:
      'Chien athlétique, symétrique et sec, célèbre dans le monde entier pour sa robe blanche pure constellée de taches rondes nettes noires ou foie (marron).',
    coatColors: ['Blanc à taches noires', 'Blanc à taches foie (marron)'],
    heightAvg: '54 – 62 cm',
    heightRangeCm: [54, 62],
    weightAvg: '24 – 32 kg',
    weightRangeKg: [24, 32],
    lifespan: '11 – 13 ans',
    lifespanRangeYears: [11, 13],
    temperament: ['Endurant', 'Gai', 'Sensible', 'Loyal'],
    temperamentSummary:
      'Extraverti, actif, amical avec ses proches, très attaché au mouvement et doté d’une mémoire remarquable.',
    behaviorWithChildren:
      'Très joueur avec les enfants déjà un peu grands, appréciant les longues parties de course.',
    behaviorWithAnimals:
      'S’entend particulièrement bien avec les chevaux par instinct historique, ainsi qu’avec les chiens socialisés.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent mais parfois indépendant ; sensible aux réprimandes injustes.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Minimum 1h30 à 2h quotidiennes de course, randonnée ou vélo.',
    recommendedDiet:
      'Alimentation pauvre en purines (éviter les abats, viandes rouges riches et certains poissons) pour prévenir les calculs urinaires spécifiques à la race.',
    coatCare:
      'Brossage fréquent avec un gant en caoutchouc : le poil court blanc mue tout au long de l’année.',
    healthIssues: ['Surdité congénitale uni ou bilatérale (test BAER recommandé)', 'Calculs d’urate'],
    idealLivingConditions:
      'Maître sportif et présent, maison avec jardin ou appartement associé à de vraies sorties d’endurance.',
    advantagesAndSpecialties:
      'Endurance exceptionnelle sur longue distance et robe unique au monde.',
    trainingTips:
      'Cohérence, douceur et motivation positive ; veiller à une hydratation abondante après chaque effort.',
    shortDescription:
      'Coureur infatigable à la robe tachetée inimitable, compagnon emblématique des chevaux et des sportifs d’endurance.',
    anecdotes: [
      'Tous les chiots Dalmatiens naissent entièrement blancs ; leurs célèbres taches commencent à apparaître vers l’âge de 10 à 14 jours.',
      'Aux États-Unis, le Dalmatien reste la mascotte officielle de nombreuses casernes de pompiers depuis l’époque des pompes tirées par des chevaux.'
    ],
    unusualFacts: [
      'Il est l’un des rares chiens dont le métabolisme excrète de l’acide urique plutôt que de l’allantoïne, à l’image des primates.',
      'Certains Dalmatiens retroussent les lèvres pour « sourire » lorsqu’ils accueillent chaleureusement leurs maîtres.'
    ],
    didYouKnow:
      'L’empreinte des taches d’un Dalmatien est unique à chaque individu, exactement comme les empreintes digitales humaines.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['compagnie', 'sportifs', 'grande-taille'],
    popularityRank: 12,
    photo: MEDIA_ASSETS.breedDalmatien,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'spotted',
      coatTexture: 'smooth',
      primaryColor: '#F6F4EF',
      secondaryColor: '#191918',
      accentColor: '#D6D0C4',
      eyeColor: '#3A2314',
      noseColor: '#171716',
      tailStyle: 'sabre',
      plateNumber: '12',
    },
    gaitSpeedKmh: 48,
    strideFrequency: 'Trot allongé d’endurance',
    fciGroup: 'Groupe 6 · Chiens courants et apparentés',
  },
  {
    id: 'samoyede',
    name: 'Samoyède',
    originCountry: 'Russie (Sibérie)',
    continent: 'Asie',
    originRegion: 'Toundra de Sibérie occidentale',
    history:
      'Compagnon séculaire du peuple nénètse (autrefois appelé Samoyède) en Sibérie arctique, il gardait les troupeaux de rennes, tirait les traîneaux et dormait auprès de la famille. Des explorateurs comme Fridtjof Nansen et Roald Amundsen l’emmenèrent vers les pôles.',
    physicalDescription:
      'Spitz arctique élégant vêtu d’une somptueuse double fourrure blanche immaculée, queue en panache rabattue sur le dos et commissures des lèvres relevées formant le célèbre « sourire du Samoyède ».',
    coatColors: ['Blanc pur', 'Crème', 'Blanc et biscuit'],
    heightAvg: '50 – 60 cm',
    heightRangeCm: [50, 60],
    weightAvg: '16 – 30 kg',
    weightRangeKg: [16, 30],
    lifespan: '12 – 14 ans',
    lifespanRangeYears: [12, 14],
    temperament: ['Amical', 'Doux', 'Sociable', 'Enjoué'],
    temperamentSummary:
      'Joyeux, affable avec tous (mauvais chien de garde car trop accueillant), très proche de sa meute humaine et parfois vocal.',
    behaviorWithChildren:
      'Formidable compagnon des enfants, très doux et patient dans les jeux.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères ; socialisation souhaitable pour les petits animaux.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent et indépendant, préférant coopérer par jeu plutôt que par obéissance mécanique.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 d’activité par jour, idéalement randonnée, canicross ou attelage par températures fraîches.',
    recommendedDiet:
      'Alimentation équilibrée riche en acides gras essentiels pour entretenir la densité et la brillance de la fourrure.',
    coatCare:
      'Brossage attentif 2 à 3 fois par semaine (et démêlage quotidien en période de mue) ; sa fourrure repousse naturellement la boue une fois sèche.',
    healthIssues: ['Dysplasie de la hanche', 'Glomérulopathie héréditaire', 'Diabète sucré'],
    idealLivingConditions:
      'Foyer actif et très présent, climat tempéré à frais ; craint les fortes chaleurs estivales.',
    advantagesAndSpecialties:
      'Pelage sans odeur forte de chien mouillé, douceur exceptionnelle et sourire naturel permanent.',
    trainingTips:
      'Éducation patiente, joyeuse et constante ; ne jamais le raser en été car son sous-poil l’isole aussi de la chaleur et des UV.',
    shortDescription:
      'Nuage blanc venu de Sibérie, le Samoyède séduit par son sourire légendaire, sa douceur et son endurance polaire.',
    anecdotes: [
      'C’est une chienne Samoyède nommée Etah qui mena l’attelage de Roald Amundsen jusqu’au Pôle Sud en 1911.',
      'Le sous-poil récolté lors des mues du Samoyède (chiengora) peut être filé comme de la laine angora.'
    ],
    unusualFacts: [
      'Son « sourire » protège ses babines de la formation de glaçons en empêchant la bave de couler dans le froid extrême.',
      'Sa fourrure blanche possède des propriétés autonettoyantes remarquables grâce à ses écailles lisses.'
    ],
    didYouKnow:
      'À l’origine, les Samoyèdes arboraient aussi des robes noires ou marron ; c’est l’élevage européen de la fin du XIXe siècle qui fixa la robe blanche.',
    sizeCategory: 'Moyen',
    coatType: 'Long',
    categories: ['nordiques', 'compagnie', 'travail', 'sportifs'],
    popularityRank: 13,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#FAF8F4',
      secondaryColor: '#EAE4D8',
      accentColor: '#D6CEBE',
      eyeColor: '#2B1F19',
      noseColor: '#1E1A18',
      tailStyle: 'curled',
      plateNumber: '13',
    },
    gaitSpeedKmh: 42,
    strideFrequency: 'Trot vif et léger',
    fciGroup: 'Groupe 5 · Chiens de type Spitz et primitif',
  },
  {
    id: 'shiba-inu',
    name: 'Shiba Inu',
    originCountry: 'Japon',
    continent: 'Asie',
    originRegion: 'Régions montagneuses de Honshū',
    history:
      'L’une des plus anciennes races canines japonaises, utilisée depuis des millénaires pour la chasse au petit gibier dans les montagnes escarpées. Déclaré « Monument naturel du Japon » en 1936, il fut sauvé de l’extinction après la Seconde Guerre mondiale.',
    physicalDescription:
      'Spitz compact à la silhouette équilibrée, oreilles triangulaires portées vers l’avant, queue épaisse enroulée sur le dos et marques blanches appelées « Urajiro » sur les joues et le poitrail.',
    coatColors: ['Roux', 'Sésame', 'Noir et feu', 'Crème (hors standard expo)'],
    heightAvg: '35 – 41 cm',
    heightRangeCm: [35, 41],
    weightAvg: '8 – 11 kg',
    weightRangeKg: [8, 11],
    lifespan: '13 – 16 ans',
    lifespanRangeYears: [13, 16],
    temperament: ['Indépendant', 'Propre', 'Digne', 'Malin'],
    temperamentSummary:
      'Souvent décrit comme « un quart chien, un quart chat, un quart humain, un quart singe » : calme, très propre, fier et sélectif dans ses amitiés.',
    behaviorWithChildren:
      'Respectueux avec les enfants calmes qui n’envahissent pas son espace personnel.',
    behaviorWithAnimals:
      'Possède un fort instinct de chasse et peut se montrer territorial face à des chiens inconnus de même sexe.',
    intelligenceScore: 4,
    intelligenceDetail: 'Très vif d’esprit mais indépendant : évalue toujours l’intérêt d’un ordre.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h de marche quotidienne variée, de préférence en laisse ou harnais sécurisé car le rappel demande une vigilance constante.',
    recommendedDiet:
      'Alimentation équilibrée sans excès calorique ; apprécie les protéines de poisson et volaille.',
    coatCare:
      'Chien extrêmement propre qui fait sa toilette comme un chat ; brossage hebdomadaire et brossage intensif lors des deux grandes mues.',
    healthIssues: ['Allergies cutanées', 'Luxation de la rotule', 'Glaucome'],
    idealLivingConditions:
      'Appartement ou maison avec clôture fiable, maître patient respectant son autonomie.',
    advantagesAndSpecialties:
      'Propreté naturelle précoce dès chiot, silence à la maison et longévité enviable.',
    trainingTips:
      'Socialisation très poussée dès 2 mois avec humains et chiens ; éducation basée sur le respect mutuel et les récompenses de haute valeur.',
    shortDescription:
      'Petit spitz japonais à l’esprit félin, célèbre pour sa propreté irréprochable, sa dignité et ses marques blanches Urajiro.',
    anecdotes: [
      'En japonais, « Shiba » signifie « broussailles » (allusion à la couleur automnale de ses poils et aux sous-bois où il chassait) ou « petit ».',
      'Lorsqu’il est contrarié ou excité, il pousse parfois le fameux « cri du Shiba », un jappement aigu et très expressif.'
    ],
    unusualFacts: [
      'Les marques blanches symétriques appelées Urajiro sur la face ventrale et les joues sont obligatoires dans le standard japonais.',
      'Des analyses génétiques placent le Shiba Inu parmi les races les plus proches des lignées canines primitives d’Asie.'
    ],
    didYouKnow:
      'En japonais, le mot « Inu » signifie tout simplement « chien ».',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['compagnie', 'chasse', 'nordiques'],
    popularityRank: 14,
    photo: MEDIA_ASSETS.breedShibaInu,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'masked',
      coatTexture: 'fluffy',
      primaryColor: '#C9692C',
      secondaryColor: '#F5EFE5',
      accentColor: '#8D4316',
      eyeColor: '#2B1B12',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '14',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Trot vif et souple',
    fciGroup: 'Groupe 5 · Chiens de type Spitz et primitif',
  },
  {
    id: 'akita-inu',
    name: 'Akita Inu',
    originCountry: 'Japon',
    continent: 'Asie',
    originRegion: 'Préfecture d’Akita (Nord de Honshū)',
    history:
      'Originaire des montagnes enneigées du nord du Japon, l’Akita chassait autrefois l’ours, le sanglier et le cerf. Élevé au rang de trésor national japonais en 1931, il symbolise fidélité et bonne santé : on offre encore une statuette d’Akita aux nouveau-nés et malades.',
    physicalDescription:
      'Grand chien puissant à l’ossature lourde, tête large triangulaire aux petits yeux foncés, oreilles épaisses inclinées vers l’avant et queue touffue enroulée sur le dos.',
    coatColors: ['Roux-fauve', 'Sésame', 'Bringé', 'Blanc pur'],
    heightAvg: '61 – 71 cm',
    heightRangeCm: [61, 71],
    weightAvg: '32 – 50 kg',
    weightRangeKg: [32, 50],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Digne', 'Loyal', 'Calme', 'Territorial'],
    temperamentSummary:
      'Silencieux, noble et profondément dévoué à ses maîtres, mais réservé envers les étrangers et dominant envers les chiens inconnus.',
    behaviorWithChildren:
      'Doux et protecteur envers les enfants calmes de sa famille, à condition qu’ils le respectent.',
    behaviorWithAnimals:
      'Cohabitation souvent délicate avec les autres chiens de même sexe ; exige vigilance et socialisation rigoureuse.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent et réfléchi, il n’obéit pas par servilité mais par confiance envers son guide.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h à 1h30 de marche quotidienne régulière sans efforts extrêmes par forte chaleur.',
    recommendedDiet:
      'Alimentation modérée en protéines brutes mais riche en acides gras oméga-3 pour protéger sa peau sensible.',
    coatCare:
      'Deux mues spectaculaires par an nécessitant un brossage en profondeur ; autrement brossage hebdomadaire.',
    healthIssues: ['Adénite sébacée', 'Syndrome UDS (uvéo-dermatologique)', 'Dysplasie de la hanche'],
    idealLivingConditions:
      'Foyer calme et expérimenté ; s’adapte même à l’appartement grâce à sa discrétion intérieure s’il est bien promené.',
    advantagesAndSpecialties:
      'Silence impressionnant, propreté et fidélité légendaire.',
    trainingTips:
      'Éducation cohérente, calme et respectueuse dès le plus jeune âge ; éviter toute confrontation brutale.',
    shortDescription:
      'Trésor national japonais rendu immortel par l’histoire d’Hachikō, alliant noblesse silencieuse et fidélité absolue.',
    anecdotes: [
      'Hachikō, un Akita Inu né en 1923, attendit chaque soir le retour de son maître décédé pendant plus de neuf ans devant la gare de Shibuya à Tokyo.',
      'L’écrivaine américaine Helen Keller fut la première personne à introduire l’Akita aux États-Unis en 1937 après un voyage au Japon.'
    ],
    unusualFacts: [
      'Il n’aboie pratiquement jamais, préférant grogner doucement pour communiquer.',
      'Ses pattes épaisses possèdent des membranes interdigitales marquées facilitant la marche sur la neige profonde.'
    ],
    didYouKnow:
      'L’Akita Inu japonais et l’Akita Américain sont reconnus par la FCI comme deux races distinctes depuis 1999.',
    sizeCategory: 'Grand',
    coatType: 'Mi-long',
    categories: ['nordiques', 'garde', 'grande-taille'],
    popularityRank: 15,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'masked',
      coatTexture: 'fluffy',
      primaryColor: '#CE783B',
      secondaryColor: '#F5EFE5',
      accentColor: '#984C1C',
      eyeColor: '#251811',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '15',
    },
    gaitSpeedKmh: 39,
    strideFrequency: 'Démarche ample, calme et puissante',
    fciGroup: 'Groupe 5 · Chiens de type Spitz et primitif',
  },
  {
    id: 'border-collie',
    name: 'Border Collie',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Région des Borders (Écosse / Angleterre)',
    history:
      'Sélectionné depuis le XIXe siècle à la frontière entre l’Écosse et l’Angleterre exclusivement sur ses aptitudes à conduire les troupeaux de moutons sur des reliefs difficiles grâce à son regard hypnotique (« l’œil »).',
    physicalDescription:
      'Chien de taille moyenne, harmonieux et souple, au regard vif et pénétrant, oreilles droites ou semi-dressées et robe mi-longue ou courte.',
    coatColors: ['Noir et blanc', 'Tricolore', 'Bleu merle', 'Rouge et blanc', 'Chocolat'],
    heightAvg: '46 – 56 cm',
    heightRangeCm: [46, 56],
    weightAvg: '14 – 22 kg',
    weightRangeKg: [14, 22],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Brillant', 'Infatigable', 'Attentif', 'Sensible'],
    temperamentSummary:
      'Considéré comme le chien le plus intelligent du monde, doté d’une concentration extrême et d’un besoin vital d’activité physique et mentale.',
    behaviorWithChildren:
      'Affectueux mais peut tenter de « rassembler » les enfants qui courent en leur mordillant doucement les talons si son instinct n’est pas redirigé.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères ; tendance à fixer et guider tout animal en mouvement.',
    intelligenceScore: 5,
    intelligenceDetail: 'N°1 mondial dans le classement de Stanley Coren : comprend de nouveaux ordres en moins de 5 répétitions.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Au moins 2 heures quotidiennes associant course, agility, frisbee, troupeau ou pistage cognitif.',
    recommendedDiet:
      'Alimentation riche et digeste adaptée aux chiens très sportifs, répartie en deux repas.',
    coatCare:
      'Brossage 1 à 2 fois par semaine pour aérer le sous-poil et retirer les débris végétaux.',
    healthIssues: ['Anomalie de l’œil du Colley (AOC)', 'Sensibilité médicamenteuse MDR1', 'Épilepsie'],
    idealLivingConditions:
      'Maître très disponible, actif et passionné d’éducation ou de sports canins.',
    advantagesAndSpecialties:
      'Roi incontesté de l’agility, du dog dancing, du troupeau et du sauvetage en montagne.',
    trainingTips:
      'Apprendre impérativement le repos et la gestion de l’excitation dès chiot pour éviter l’hyperactivité compulsive.',
    shortDescription:
      'Prodige d’intelligence et d’agilité issu des collines britanniques, animé par un regard captivant et une passion pour le travail.',
    anecdotes: [
      'Une chienne Border Collie nommée Chaser a appris et mémorisé avec exactitude les noms propres de plus de 1 022 jouets différents.',
      'Tous les Border Collies modernes remontent en grande partie à « Old Hemp », né en 1893 dans le Northumberland.'
    ],
    unusualFacts: [
      'Il contrôle les moutons non par les aboiements, mais en s’aplatissant au sol et en fixant le troupeau avec « l’œil du Border ».',
      'Un test ADN simple permet de dépister la mutation MDR1 avant toute administration de certains antiparasitaires.'
    ],
    didYouKnow:
      'Le terme « Border » fait directement référence à la région frontalière entre l’Angleterre et l’Écosse.',
    sizeCategory: 'Moyen',
    coatType: 'Mi-long',
    categories: ['berger', 'sportifs', 'travail'],
    popularityRank: 16,
    photo: MEDIA_ASSETS.breedBorderCollie,
    morpho: {
      earStyle: 'semi-erect',
      muzzleStyle: 'long',
      coatPattern: 'tuxedo',
      coatTexture: 'fluffy',
      primaryColor: '#1B1B1A',
      secondaryColor: '#F7F5F0',
      accentColor: '#4A4641',
      eyeColor: '#523217',
      noseColor: '#141413',
      tailStyle: 'plume',
      plateNumber: '16',
    },
    gaitSpeedKmh: 49,
    strideFrequency: 'Foulée rasante et changements d’appui instantanés',
    fciGroup: 'Groupe 1 · Chiens de berger et de bouvier',
  },
  {
    id: 'saint-bernard',
    name: 'Saint-Bernard',
    originCountry: 'Suisse',
    continent: 'Europe',
    originRegion: 'Col du Grand-Saint-Bernard (Valais)',
    history:
      'Élevé dès le XVIIe siècle par les chanoines de l’hospice du Grand-Saint-Bernard à 2 469 m d’altitude pour guider les voyageurs perdus dans le brouillard et localiser les victimes d’avalanches. Il aurait sauvé plus de 2 000 personnes au fil des siècles.',
    physicalDescription:
      'Colosse majestueux à la tête massive, front ridé, babines tombantes et robe dense blanche marquée de rouge-brun acajou et masque foncé.',
    coatColors: ['Blanc et rouge-brun acajou avec masque noir'],
    heightAvg: '65 – 90 cm',
    heightRangeCm: [65, 90],
    weightAvg: '60 – 90 kg',
    weightRangeKg: [60, 90],
    lifespan: '8 – 10 ans',
    lifespanRangeYears: [8, 10],
    temperament: ['Doux', 'Patient', 'Calme', 'Dévoué'],
    temperamentSummary:
      'Archétype du géant au cœur tendre : placide, affectueux, protecteur sans agressivité et d’une grande tolérance.',
    behaviorWithChildren:
      'Extrêmement bienveillant envers les enfants, tout en nécessitant la présence d’un adulte vu son poids impressionnant.',
    behaviorWithAnimals:
      'Très tolérant et amical envers les chiens et animaux de la ferme ou de la maison.',
    intelligenceScore: 4,
    intelligenceDetail: 'Sens exceptionnel d’orientation et d’initiative en milieu enneigé.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      'Promenades tranquilles d’environ 45 minutes à 1h par jour ; éviter les sauts et courses intensives durant la croissance.',
    recommendedDiet:
      'Croquettes spéciales races géantes avec apport maîtrisé en calcium/phosphore durant la croissance ; 2 à 3 petits repas pour prévenir la torsion gastrique.',
    coatCare:
      'Brossage 2 à 3 fois par semaine (plus fréquent pour la variété à poil long) et nettoyage régulier des yeux et babines.',
    healthIssues: ['Torsion-dilatation de l’estomac', 'Dysplasie articulaire', 'Entropion / ectropion'],
    idealLivingConditions:
      'Maison spacieuse avec jardin frais et ombragé ; supporte très mal la chaleur caniculaire.',
    advantagesAndSpecialties:
      'Calme olympien, capacité légendaire de secours en montagne et présence rassurante.',
    trainingTips:
      'Éduquer à marcher sans tirer dès ses 10 kg (quand il est chiot) car adulte il pèse autant qu’un adulte humain.',
    shortDescription:
      'Légendaire sauveteur des Alpes suisses, ce géant pacifique rayonne par sa douceur, son courage et sa bienveillance.',
    anecdotes: [
      'Le plus célèbre Saint-Bernard, Barry Ier (1800–1814), sauva plus de 40 personnes ensevelies sous la neige au col du Grand-Saint-Bernard.',
      'Le petit tonneau d’eau-de-vie accroché au cou est un mythe romantique popularisé par un tableau du peintre Edwin Landseer en 1820.'
    ],
    unusualFacts: [
      'Sa sensibilité aux variations de pression atmosphérique lui permettait d’anticiper les avalanches et tempêtes en montagne.',
      'La race existe officiellement en deux variétés : poil court (historique de l’hospice) et poil long.'
    ],
    didYouKnow:
      'La fondation Barry, à Martigny en Suisse, perpétue encore aujourd’hui la lignée historique des chiens de l’hospice.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['travail', 'garde', 'compagnie', 'grande-taille'],
    popularityRank: 17,
    photo: MEDIA_ASSETS.breedSaintBernard,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'wrinkled',
      coatPattern: 'bicolor',
      coatTexture: 'fluffy',
      primaryColor: '#9C4523',
      secondaryColor: '#F5F2EB',
      accentColor: '#362319',
      eyeColor: '#452815',
      noseColor: '#191716',
      tailStyle: 'plume',
      plateNumber: '17',
    },
    gaitSpeedKmh: 28,
    strideFrequency: 'Pas lourd, ample et régulier',
    fciGroup: 'Groupe 2 · Molossoïdes de type montagne',
  },
  {
    id: 'dogue-allemand',
    name: 'Dogue allemand',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Allemagne centrale',
    history:
      'Issu des anciens chiens de chasse au sanglier et à l’ours (Saupacker) croisés avec de grands lévriers pour gagner en vitesse et élégance, il fut consacré « chien national allemand » en 1878 et admiré par Bismarck.',
    physicalDescription:
      'Surnommé « l’Apollon des races canines », il associe une taille monumentale à une silhouette noble, sèche et parfaitement proportionnée.',
    coatColors: ['Arlequin (blanc tacheté noir)', 'Fauve', 'Bringé', 'Bleu', 'Noir'],
    heightAvg: '72 – 86 cm',
    heightRangeCm: [72, 86],
    weightAvg: '50 – 85 kg',
    weightRangeKg: [50, 85],
    lifespan: '7 – 10 ans',
    lifespanRangeYears: [7, 10],
    temperament: ['Doux', 'Affectueux', 'Noble', 'Calme'],
    temperamentSummary:
      'Un grand tendre convaincu d’être un petit chien de salon : paisible à l’intérieur, réservé avec les inconnus et profondément attaché à sa famille.',
    behaviorWithChildren:
      'Très doux et protecteur avec les enfants, tout en veillant aux mouvements involontaires de sa queue ou de son poids.',
    behaviorWithAnimals:
      'Cohabitation harmonieuse lorsqu’il est socialisé tôt.',
    intelligenceScore: 4,
    intelligenceDetail: 'Sensible, appliqué et désireux de bien faire auprès d’un maître calme.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h à 1h15 de promenade tranquille par jour ; croissance très stricte sans escaliers ni efforts intenses avant 18 mois.',
    recommendedDiet:
      'Croquettes formulées pour chiens géants avec ration fractionnée (2 à 3 fois/jour) et repos impératif 1h avant et après chaque repas.',
    coatCare:
      'Poil ras et lisse extrêmement facile d’entretien ; couchage épais indispensable pour éviter les callosités aux coudes.',
    healthIssues: ['Dilatation-torsion de l’estomac', 'Cardiomyopathie dilatée', 'Dysplasie'],
    idealLivingConditions:
      'Intérieur spacieux auprès de sa famille ; paradoxalement calme en appartement s’il est bien sorti, mais nécessite de l’espace pour s’étendre.',
    advantagesAndSpecialties:
      'Présence sculpturale unique, calme remarquable en intérieur et grande sensibilité affective.',
    trainingTips:
      'Éducation douce et précoce au rappel et à la marche en laisse détendue ; aucune brutalité.',
    shortDescription:
      '« L’Apollon des chiens » mêle une stature géante majestueuse à un tempérament doux, calme et très affectueux.',
    anecdotes: [
      'Un Dogue allemand nommé Zeus (Michigan) détient le record historique du chien le plus grand mesuré au garrot : 1,118 mètre.',
      'Le célèbre personnage animé Scooby-Doo est inspiré du Dogue allemand.'
    ],
    unusualFacts: [
      'Malgré son gabarit de 75 kg, son besoin d’exercice reste nettement inférieur à celui d’un Husky ou d’un Jack Russell.',
      'Sa croissance est l’une des plus rapides du règne animal : il multiplie son poids de naissance par près de 100 en 15 mois.'
    ],
    didYouKnow:
      'En anglais, il est appelé « Great Dane » (Grand Danois), bien que ses standards modernes aient été fixés en Allemagne.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['compagnie', 'garde', 'grande-taille'],
    popularityRank: 18,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'spotted',
      coatTexture: 'smooth',
      primaryColor: '#F3F1EC',
      secondaryColor: '#1B1A19',
      accentColor: '#76726A',
      eyeColor: '#3B2314',
      noseColor: '#161515',
      tailStyle: 'whip',
      plateNumber: '18',
    },
    gaitSpeedKmh: 44,
    strideFrequency: 'Foulée longue et majestueuse',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
];
