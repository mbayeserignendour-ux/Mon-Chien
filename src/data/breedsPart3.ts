import { Breed } from '../types/dog';

export const breedsPart3: Breed[] = [
  {
    id: 'malamute-alaska',
    name: 'Malamute d’Alaska',
    originCountry: 'États-Unis (Alaska)',
    continent: 'Amérique du Nord',
    originRegion: 'Baie de Kotzebue (Alaska)',
    history:
      'Élevé depuis des siècles par la tribu inuite des Mahlemuts pour tirer de lourdes charges de ravitaillement et chasser le gibier arctique. Il joua un rôle crucial lors de la ruée vers l’or du Klondike et des expéditions polaires de l’amiral Byrd.',
    physicalDescription:
      'Chien nordique massif, large et puissant à la forte ossature, tête large, oreilles triangulaires bien écartées et queue touffue portée en panache. Contrairement au Husky, ses yeux sont toujours bruns.',
    coatColors: ['Gris loup et blanc', 'Noir et blanc', 'Roux et blanc', 'Blanc pur'],
    heightAvg: '58 – 64 cm',
    heightRangeCm: [58, 64],
    weightAvg: '34 – 45 kg',
    weightRangeKg: [34, 45],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Loyal', 'Puissant', 'Amical', 'Indépendant'],
    temperamentSummary:
      'Plus posé et puissant que le Husky, très affectueux avec les humains mais parfois affirmé face aux chiens de même sexe.',
    behaviorWithChildren:
      'Doux et protecteur avec les enfants respectueux.',
    behaviorWithAnimals:
      'Prudence avec les chiens de même sexe et petits animaux à cause de son instinct de prédation.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent, pragmatique et fier, refuse la contrainte autoritaire.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h d’effort d’endurance ou de traction modérée (cani-randonnée, traîneau) par temps frais.',
    recommendedDiet:
      'Alimentation riche en protéines et acides gras oméga-3 ; ration modérée au repos.',
    coatCare:
      'Fourrure double extrêmement épaisse nécessitant brossage régulier et démêlage intensif pendant les mues.',
    healthIssues: ['Dysplasie de la hanche', 'Polyneuropathie héréditaire', 'Chondrodysplasie'],
    idealLivingConditions:
      'Maison avec grand terrain clos et climat tempéré à froid ; vie difficile en été urbain.',
    advantagesAndSpecialties:
      'Force de traction phénoménale, endurance calme et fidélité majestueuse.',
    trainingTips:
      'Éducation ferme, calme et cohérente dès chiot pour ne pas être débordé par sa force adulte.',
    shortDescription:
      'Locomotive arctique des Inuits Mahlemuts, le Malamute séduit par sa carrure puissante, son panache et sa loyauté.',
    anecdotes: [
      'Un Malamute est l’un des emblèmes animaux officiels de l’État de l’Alaska depuis 2010.',
      'Contrairement au Husky sélectionné pour la vitesse pure, le Malamute est le « poids lourd » du traîneau capable de tracter plusieurs centaines de kilos.'
    ],
    unusualFacts: [
      'Chez le Malamute d’Alaska de pure race, les yeux bleus sont un défaut éliminatoire : ils doivent toujours être bruns.',
      'Il creuse volontiers des trous profonds en été pour dormir sur la terre fraîche.'
    ],
    didYouKnow:
      'Jack London s’est inspiré des grands chiens nordiques de type Malamute dans ses romans « L’Appel de la forêt » et « Croc-Blanc ».',
    sizeCategory: 'Grand',
    coatType: 'Mi-long',
    categories: ['nordiques', 'travail', 'sportifs', 'grande-taille'],
    popularityRank: 37,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'masked',
      coatTexture: 'fluffy',
      primaryColor: '#666B70',
      secondaryColor: '#F7F5F0',
      accentColor: '#36393D',
      eyeColor: '#4A2C14',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '37',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Trot puissant et régulier',
    fciGroup: 'Groupe 5 · Chiens nordiques de traîneau',
  },
  {
    id: 'braque-de-weimar',
    name: 'Braque de Weimar',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Thuringe (Cour de Weimar)',
    history:
      'Élevé au début du XIXe siècle à la cour du Grand-Duc Charles-Auguste de Saxe-Weimar pour chasser le grand gibier puis le gibier à plumes. Surnommé le « fantôme gris », il resta longtemps réservé à un cercle fermé d’éleveurs allemands.',
    physicalDescription:
      'Chien d’arrêt de taille moyenne à grande, athlétique et noble, vêtu d’un pelage ras argenté-gris unique assorti d’yeux ambre clair (bleus chez le chiot).',
    coatColors: ['Gris argent', 'Gris chevreuil', 'Gris souris'],
    heightAvg: '57 – 70 cm',
    heightRangeCm: [57, 70],
    weightAvg: '25 – 40 kg',
    weightRangeKg: [25, 40],
    lifespan: '10 – 13 ans',
    lifespanRangeYears: [10, 13],
    temperament: ['Fusionnel', 'Athlétique', 'Sensible', 'Vif'],
    temperamentSummary:
      'Très proche de son maître au point de souffrir de la solitude, dynamique en extérieur et calme auprès des siens s’il est bien dépensé.',
    behaviorWithChildren:
      'Affectueux et joueur avec les enfants déjà capables de respecter un chien sportif.',
    behaviorWithAnimals:
      'Forte pulsion de chasse ; socialisation précoce indispensable avec chats et petits animaux.',
    intelligenceScore: 5,
    intelligenceDetail: 'Très intelligent, apprend rapidement mais a besoin d’un conducteur cohérent.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h de course, pistage, canicross ou chasse chaque jour.',
    recommendedDiet:
      'Ration fractionnée en deux repas loin des exercices pour limiter le risque de torsion gastrique.',
    coatCare:
      'Poil ras satiné très facile : coup de gant hebdomadaire.',
    healthIssues: ['Dilatation-torsion de l’estomac', 'Dysplasie de la hanche', 'Entropion'],
    idealLivingConditions:
      'Maître sportif très présent ; souffre rapidement d’anxiété s’il reste seul 8 heures par jour.',
    advantagesAndSpecialties:
      'Beauté métallique spectaculaire de sa robe grise, polyvalence de chasse et loyauté absolue.',
    trainingTips:
      'Socialisation calme à la solitude dès chiot et éducation positive ferme.',
    shortDescription:
      'Le « fantôme gris » de Weimar conjugue une robe argentée fascinante à l’endurance d’un athlète de grand espace.',
    anecdotes: [
      'Le photographe William Wegman a rendu le Braque de Weimar mondialement célèbre par ses portraits artistiques de ses chiens Man Ray et Fay Ray.',
      'Le président américain Dwight D. Eisenhower possédait une femelle Braque de Weimar nommée Heidi à la Maison-Blanche.'
    ],
    unusualFacts: [
      'Tous les chiots Braque de Weimar naissent avec des yeux bleu ciel qui virent progressivement vers l’ambre doré.',
      'Il existe aussi une variété officielle à poil long avec une queue frangée.'
    ],
    didYouKnow:
      'Son surnom « Grey Ghost » (Fantôme gris) lui vient de sa façon silencieuse de se fondre dans la brume matinale des sous-bois.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['chasse', 'sportifs', 'grande-taille'],
    popularityRank: 38,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#A6A4A0',
      secondaryColor: '#C5C2BC',
      accentColor: '#767470',
      eyeColor: '#D49E3D',
      noseColor: '#706B68',
      tailStyle: 'whip',
      plateNumber: '38',
    },
    gaitSpeedKmh: 48,
    strideFrequency: 'Trot allongé et souple',
    fciGroup: 'Groupe 7 · Chiens d’arrêt',
  },
  {
    id: 'epagneul-breton',
    name: 'Épagneul breton',
    originCountry: 'France',
    continent: 'Europe',
    originRegion: 'Centre-Bretagne (Callac)',
    history:
      'Né au cœur de la Bretagne rurale au XIXe siècle, notamment autour de Callac, du croisement entre petits chiens d’arrêt locaux et Setters anglais apportés par les chasseurs britanniques. Premier chien d’arrêt français dans le monde.',
    physicalDescription:
      'Chien compact « cob » (inscriptible dans un carré), à l’expression vive et intelligente, queue naturellement courte ou écourtée, et poil fin légèrement ondulé.',
    coatColors: ['Blanc et orange', 'Blanc et noir', 'Blanc et marron', 'Tricolore'],
    heightAvg: '47 – 52 cm',
    heightRangeCm: [47, 52],
    weightAvg: '13 – 18 kg',
    weightRangeKg: [13, 18],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Vif', 'Sociable', 'Joyeux', 'Obéissant'],
    temperamentSummary:
      '« Un maximum de qualités dans un minimum de volume » : infatigable sur le terrain, doux, joueur et très proche de sa famille à la maison.',
    behaviorWithChildren:
      'Compagnon joyeux, doux et robuste avec les enfants.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères ; garde un intérêt pour les oiseaux au jardin.',
    intelligenceScore: 5,
    intelligenceDetail: 'Énorme envie de coopérer, d’apprendre et de faire plaisir.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h quotidiennes de marche active, jeux de recherche ou course en liberté.',
    recommendedDiet:
      'Alimentation équilibrée pour chien sportif moyen.',
    coatCare:
      'Brossage hebdomadaire et inspection des oreilles et pattes après les sorties en sous-bois.',
    healthIssues: ['Otites', 'Dysplasie de la hanche occasionnelle', 'Épilepsie rare'],
    idealLivingConditions:
      'Famille active aimant la nature, les randonnées ou le canicross.',
    advantagesAndSpecialties:
      'Format compact facile à emmener partout, gentillesse extrême et santé robuste.',
    trainingTips:
      'Éducation très douce car il est sensible ; excellent dès chiot pour le rappel et la recherche.',
    shortDescription:
      'Fierté canine de Bretagne, ce petit athlète carré conjugue flair prodigieux, gaieté et tendresse familiale.',
    anecdotes: [
      'La commune de Callac dans les Côtes-d’Armor est surnommée la « capitale mondiale de l’Épagneul breton ».',
      'Il est l’un des chiens d’arrêt les plus répandus aux États-Unis sous le nom de « Brittany ».'
    ],
    unusualFacts: [
      'Environ 15 % des chiots naissent naturellement sans queue ou avec une queue courte (anoure/brachyoure).',
      'Le standard de 1907 l’a consacré comme le plus petit des chiens d’arrêt continentaux.'
    ],
    didYouKnow:
      'Sa devise historique résume son génie : « Un maximum de qualités dans un minimum de volume ».',
    sizeCategory: 'Moyen',
    coatType: 'Mi-long',
    categories: ['chasse', 'sportifs', 'compagnie'],
    popularityRank: 39,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'medium',
      coatPattern: 'bicolor',
      coatTexture: 'fluffy',
      primaryColor: '#FAF8F4',
      secondaryColor: '#D6702B',
      accentColor: '#A94D18',
      eyeColor: '#693B16',
      noseColor: '#8B4D36',
      tailStyle: 'docked-short',
      plateNumber: '39',
    },
    gaitSpeedKmh: 45,
    strideFrequency: 'Galop énergique et serré',
    fciGroup: 'Groupe 7 · Chiens d’arrêt continentaux',
  },
  {
    id: 'beauceron',
    name: 'Beauceron (Berger de Beauce)',
    originCountry: 'France',
    continent: 'Europe',
    originRegion: 'Beauce et plaines du Bassin parisien',
    history:
      'L’une des plus anciennes races de bergers français, sélectionnée pendant des siècles pour guider d’immenses troupeaux de moutons dans les plaines sans clôtures de Beauce et défendre les fermes contre les loups.',
    physicalDescription:
      'Grand berger rustique et puissant, sans lourdeur, à poil court noir et feu (dit « Bas-Rouge ») ou arlequin gris, reconnaissable à ses doubles ergots aux pattes arrière.',
    coatColors: ['Noir et feu (Bas-Rouge)', 'Arlequin (gris, noir et feu)'],
    heightAvg: '61 – 70 cm',
    heightRangeCm: [61, 70],
    weightAvg: '30 – 45 kg',
    weightRangeKg: [30, 45],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Loyal', 'Franc', 'Courageux', 'Protecteur'],
    temperamentSummary:
      'Franc, sûr de lui, profondément attaché à sa famille et excellent gardien dissuasif ; demande une éducation précoce mais juste.',
    behaviorWithChildren:
      'Protecteur et patient avec les enfants de la famille lorsqu’il est bien guidé.',
    behaviorWithAnimals:
      'Cohabitation bonne si socialisé tôt ; garde parfois un instinct de contrôle sur les animaux en mouvement.',
    intelligenceScore: 5,
    intelligenceDetail: 'Très brillant en pistage, sauvetage et obéissance, mais mûrit lentement (vers 2-3 ans).',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 à 2h d’exercice structuré chaque jour (randonnée, vélo, pistage, obéissance).',
    recommendedDiet:
      'Alimentation équilibrée pour grands bergers actifs, en deux repas pour limiter les risques gastriques.',
    coatCare:
      'Poil court double très rustique : brossage hebdomadaire.',
    healthIssues: ['Torsion gastrique', 'Dysplasie de la hanche', 'Cardiomyopathie dilatée'],
    idealLivingConditions:
      'Maison avec grand terrain ou maître très sportif et disponible, expérimenté dans l’éducation canine.',
    advantagesAndSpecialties:
      'Rusticité exemplaire, loyauté totale et polyvalence remarquable en secours et garde.',
    trainingTips:
      'Socialisation riche et éducation cohérente sans brutalité ; ne jamais se laisser attendrir par ses grands yeux durant l’adolescence.',
    shortDescription:
      'Le « gentilhomme campagnard » aux bas rouges, grand berger français reconnu à ses doubles ergots uniques.',
    anecdotes: [
      'L’écrivaine Colette le qualifiait affectueusement de « gentilhomme campagnard ».',
      'Le Beauceron a servi durant les deux guerres mondiales comme chien messager et détecteur de mines.'
    ],
    unusualFacts: [
      'Le standard exige la présence de doubles ergots bien formés à chaque patte postérieure, formant comme un « pouce » supplémentaire.',
      'On le surnomme « Bas-Rouge » en raison des marques feu montant sur le bas de ses pattes noires.'
    ],
    didYouKnow:
      'Le Beauceron a servi de race fondatrice lors de la création du Dobermann en Allemagne.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['berger', 'garde', 'travail', 'grande-taille'],
    popularityRank: 40,
    morpho: {
      earStyle: 'semi-erect',
      muzzleStyle: 'long',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#191918',
      secondaryColor: '#B55727',
      accentColor: '#D6783F',
      eyeColor: '#452A15',
      noseColor: '#141312',
      tailStyle: 'sabre',
      plateNumber: '40',
    },
    gaitSpeedKmh: 46,
    strideFrequency: 'Trot allongé très soutenu',
    fciGroup: 'Groupe 1 · Chiens de berger français',
  },
  {
    id: 'dogue-de-bordeaux',
    name: 'Dogue de Bordeaux',
    originCountry: 'France',
    continent: 'Europe',
    originRegion: 'Aquitaine et Bordelais',
    history:
      'L’une des plus anciennes races françaises, descendante des grands molosses d’Aquitaine utilisés au Moyen Âge pour la chasse au sanglier et à l’ours, puis pour la garde des domaines viticoles et des châteaux du Bordelais.',
    physicalDescription:
      'Molosse bréviligne massif et musclé, célèbre pour sa tête énorme sillonnée de rides profondes, son masque rouge ou noir et sa robe acajou chaude.',
    coatColors: ['Fauve acajou à masque marron (rouge) ou noir'],
    heightAvg: '58 – 68 cm',
    heightRangeCm: [58, 68],
    weightAvg: '45 – 65 kg',
    weightRangeKg: [45, 65],
    lifespan: '7 – 10 ans',
    lifespanRangeYears: [7, 10],
    temperament: ['Calme', 'Attaché', 'Dissuasif', 'Courageux'],
    temperamentSummary:
      'Force tranquille par excellence : très doux et affectueux avec les siens, vigilant mais posé, peu aboyeur.',
    behaviorWithChildren:
      'Grand protecteur tendre et patient envers les enfants de la famille.',
    behaviorWithAnimals:
      'Socialisation précoce requise pour apaiser son tempérament affirmé envers d’autres grands chiens.',
    intelligenceScore: 3,
    intelligenceDetail: 'Réfléchi et calme, apprend par douceur et cohérence.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '45 minutes à 1h de marche calme par jour, à la fraîche en été.',
    recommendedDiet:
      'Croquettes spéciales races géantes en deux ou trois repas quotidiens.',
    coatCare:
      'Poil ras fin facile à brosser ; nettoyer régulièrement les plis de la face.',
    healthIssues: ['Dilatation-torsion de l’estomac', 'Dysplasie de la hanche', 'Cardiopathie'],
    idealLivingConditions:
      'Maison de plain-pied fraîche et vie proche de sa famille.',
    advantagesAndSpecialties:
      'Présence dissuasive exceptionnelle combinée à une immense tendresse intérieure.',
    trainingTips:
      'Éducation douce et constante dès 2 mois pour maîtriser sa marche en laisse.',
    shortDescription:
      'Puissant molosse d’Aquitaine à la robe acajou chaleureuse, force tranquille et gardien dévoué des foyers.',
    anecdotes: [
      'Un Dogue de Bordeaux nommé Beasley partagea l’affiche avec Tom Hanks dans le film culte « Turner et Hooch » (1989).',
      'Sa mâchoire figure proportionnellement parmi les plus larges et puissantes de l’espèce canine.'
    ],
    unusualFacts: [
      'Il possède la tête la plus volumineuse proportionnellement au reste du corps dans tout le règne canin.',
      'Le masque brun (« rouge ») s’accompagne d’une truffe marron et d’yeux noisette.'
    ],
    didYouKnow:
      'La race a failli s’éteindre après la Seconde Guerre mondiale avant d’être sauvée par Raymond Triquet dans les années 1960.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'compagnie', 'grande-taille'],
    popularityRank: 41,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'wrinkled',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#B55B27',
      secondaryColor: '#8B3E17',
      accentColor: '#D67F4A',
      eyeColor: '#5B3A1B',
      noseColor: '#5C301E',
      tailStyle: 'sabre',
      plateNumber: '41',
    },
    gaitSpeedKmh: 28,
    strideFrequency: 'Pas lourd et souple de molosse',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'montagne-des-pyrenees',
    name: 'Montagne des Pyrénées (Patou)',
    originCountry: 'France',
    continent: 'Europe',
    originRegion: 'Chaîne des Pyrénées',
    history:
      'Gardien ancestral des troupeaux ovins dans les Pyrénées face aux ours et aux loups depuis le Moyen Âge, il fut également adopté par Louis XIV comme « Chien Royal de France » pour garder les châteaux.',
    physicalDescription:
      'Colosse blanc majestueux recouvert d’une épaisse fourrure protectrice, aux doubles ergots aux pattes arrière et à la queue en panache formant l’« arroundera » en action.',
    coatColors: ['Blanc pur', 'Blanc avec taches gris blaireau ou fauve'],
    heightAvg: '65 – 80 cm',
    heightRangeCm: [65, 80],
    weightAvg: '45 – 65 kg',
    weightRangeKg: [45, 65],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Protecteur', 'Indépendant', 'Calme', 'Nocturne'],
    temperamentSummary:
      'Gardien né qui prend ses décisions seul avec discernement ; doux avec les siens mais très territorial la nuit.',
    behaviorWithChildren:
      'Très doux, protecteur et bienveillant envers les enfants de sa famille.',
    behaviorWithAnimals:
      'Protecteur naturel envers les animaux qu’il considère comme faisant partie de son troupeau.',
    intelligenceScore: 4,
    intelligenceDetail: 'Autonome et réfléchi : il n’exécute pas de tours mécaniques mais veille en stratège.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h à 1h30 de marche quotidienne ; reste très calme et endurant sur son territoire.',
    recommendedDiet:
      'Alimentation équilibrée pour races géantes avec métabolisme plutôt économe.',
    coatCare:
      'Brossage 2 fois par semaine pour aérer son épais manteau imperméable.',
    healthIssues: ['Dysplasie de la hanche', 'Torsion gastrique', 'Sensibilité aux anesthésiques'],
    idealLivingConditions:
      'Maison rurale ou grand terrain bien clôturé ; inadapté à la vie urbaine étroite en appartement.',
    advantagesAndSpecialties:
      'Protection dissuasive hors pair des troupeaux et familles, très doux avec les siens.',
    trainingTips:
      'Socialisation précoce avec les randonneurs et visiteurs ; respect de son autonomie.',
    shortDescription:
      'Seigneur blanc des Pyrénées, protecteur millénaire des estives au calme souverain et à la vigilance nocturne.',
    anecdotes: [
      'Le célèbre chien « Belle » dans le roman et la série « Belle et Sébastien » de Cécile Aubry est un Montagne des Pyrénées.',
      'Son nom familier « Patou » vient du terme pyrénéen désignant le chien de garde du berger (« pastre »).'
    ],
    unusualFacts: [
      'Il possède naturellement deux ergots doubles aux pattes arrière, signe de pureté de la race.',
      'Sa vigilance est naturellement plus élevée au crépuscule et durant la nuit.'
    ],
    didYouKnow:
      'En 1675, le Dauphin Louis de France fit du Patou le gardien officiel du château de Louvre et des demeures royales.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['garde', 'travail', 'berger', 'grande-taille'],
    popularityRank: 42,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#FAF8F4',
      secondaryColor: '#E5DDD0',
      accentColor: '#C5B8A5',
      eyeColor: '#482B16',
      noseColor: '#191716',
      tailStyle: 'plume',
      plateNumber: '42',
    },
    gaitSpeedKmh: 34,
    strideFrequency: 'Allure souple et puissante malgré la masse',
    fciGroup: 'Groupe 2 · Chiens de montagne',
  },
  {
    id: 'shar-pei',
    name: 'Shar-Pei',
    originCountry: 'Chine',
    continent: 'Asie',
    originRegion: 'Province du Guangdong (Sud de la Chine)',
    history:
      'Race antique chinoise datant de plus de 2 000 ans, élevée par les paysans du Guangdong pour garder fermes et bétail. Presque éteinte au milieu du XXe siècle, elle fut sauvée par un éleveur de Hong Kong, Matgo Law, dans les années 1970.',
    physicalDescription:
      'Chien de taille moyenne carré et compact, célèbre pour ses plis cutanés distinctifs (plus nombreux chez le chiot), ses petites oreilles triangulaires plaquées, son museau dit « d’hippopotame » et sa langue bleu-noir.',
    coatColors: ['Fauve', 'Noir', 'Crème', 'Chocolat', 'Bleu', 'Lilas'],
    heightAvg: '44 – 51 cm',
    heightRangeCm: [44, 51],
    weightAvg: '18 – 28 kg',
    weightRangeKg: [18, 28],
    lifespan: '9 – 12 ans',
    lifespanRangeYears: [9, 12],
    temperament: ['Calme', 'Indépendant', 'Loyal', 'Propre'],
    temperamentSummary:
      'Discret, propre, très attaché à son cercle familial tout en gardant une certaine réserve envers les inconnus.',
    behaviorWithChildren:
      'Doux et calme avec les enfants respectueux.',
    behaviorWithAnimals:
      'Peut être réservé ou dominant avec les autres chiens sans socialisation précoce soignée.',
    intelligenceScore: 3,
    intelligenceDetail: 'Intelligent et autonome, réclame de la constance sans sévérité.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '45 minutes à 1h de promenade modérée par jour.',
    recommendedDiet:
      'Alimentation hypoallergénique pauvre en protéines inflammatoires pour préserver sa peau sensible.',
    coatCare:
      'Poil court hérissé dit « poil de cheval » très rêche au toucher ; surveiller l’hygiène des plis et du conduit auditif.',
    healthIssues: ['Fièvre familiale du Shar-Pei', 'Entropion', 'Dermatites des plis et otites'],
    idealLivingConditions:
      'Appartement calme ou maison, maître attentif aux soins dermatologiques.',
    advantagesAndSpecialties:
      'Silence, propreté naturelle et apparence sculpturale inimitable.',
    trainingTips:
      'Socialisation précoce intensive avec humains et congénères dès 8 semaines.',
    shortDescription:
      'Chien millénaire du Guangdong au museau velouté et à la peau plissée unique, calme, digne et dévoué.',
    anecdotes: [
      'En cantonais, « Shar-Pei » signifie « peau de sable », en référence à la texture rêche de son poil très court.',
      'Dans les années 1970, il figura au Guinness des records comme la race de chien la plus rare du monde.'
    ],
    unusualFacts: [
      'Ses plis lâches lui permettaient historiquement de se retourner sur lui-même même s’il était saisi par le cou.',
      'Il partage la langue bleu-noir avec le Chow-Chow.'
    ],
    didYouKnow:
      'Les rides très marquées du chiot s’atténuent naturellement à l’âge adulte pour ne subsister qu’au niveau du front et du garrot.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['garde', 'compagnie'],
    popularityRank: 43,
    morpho: {
      earStyle: 'button',
      muzzleStyle: 'wrinkled',
      coatPattern: 'solid',
      coatTexture: 'wiry',
      primaryColor: '#C58F5C',
      secondaryColor: '#9E6B3E',
      accentColor: '#DFB184',
      eyeColor: '#251710',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '43',
    },
    gaitSpeedKmh: 30,
    strideFrequency: 'Trot libre et vif',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'rhodesian-ridgeback',
    name: 'Rhodesian Ridgeback (Chien de Rhodésie à crête dorsale)',
    originCountry: 'Zimbabwe / Afrique du Sud',
    continent: 'Afrique',
    originRegion: 'Afrique australe',
    history:
      'Issu du croisement entre les chiens à crête dorsale des peuples Khoïkhoï d’Afrique australe et les chiens européens des colons néerlandais et britanniques. Il protégeait les fermes et maintenait les lions à distance lors des chasses.',
    physicalDescription:
      'Grand chien athlétique, musclé et rapide, célèbre pour sa crête dorsale (« ridge ») formée par une bande de poils poussant en sens inverse le long de la colonne vertébrale.',
    coatColors: ['Froment clair à froment rouge'],
    heightAvg: '61 – 69 cm',
    heightRangeCm: [61, 69],
    weightAvg: '32 – 41 kg',
    weightRangeKg: [32, 41],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Noble', 'Endurant', 'Courageux', 'Réservé'],
    temperamentSummary:
      'Calme et silencieux à la maison, athlète puissant en extérieur, très loyal envers les siens mais réservé avec les étrangers.',
    behaviorWithChildren:
      'Doux et protecteur avec les enfants de la famille.',
    behaviorWithAnimals:
      'Sociable si bien éduqué dès chiot, fort instinct de poursuite.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent et indépendant, demande cohérence et respect.',
    activityScore: 5,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 à 2h de course ou randonnée quotidienne ; apprécie énormément le canicross.',
    recommendedDiet:
      'Alimentation énergétique adaptée aux grands chiens athlétiques.',
    coatCare:
      'Poil court lisse sans odeur : coup de gant hebdomadaire.',
    healthIssues: ['Sinus dermoïde (dépistage chez le chiot)', 'Dysplasie de la hanche'],
    idealLivingConditions:
      'Maître sportif et maison avec jardin clos ; craint les hivers humides et froids.',
    advantagesAndSpecialties:
      'Aucune odeur forte, silence à la maison, endurance extraordinaire sous la chaleur.',
    trainingTips:
      'Éducation positive cohérente sans jamais recourir à la contrainte brute.',
    shortDescription:
      'Athlète d’Afrique australe orné d’une crête dorsale inversée unique, silencieux, endurant et fidèle.',
    anecdotes: [
      'Surnommé « chien à lions » car il encerclait et retenait les félins par son agilité sans jamais les attaquer frontalement.',
      'Il est l’une des deux seules races reconnues au monde possédant une crête dorsale de poils inversés (avec le Thai Ridgeback).'
    ],
    unusualFacts: [
      'Sa crête dorsale doit comporter exactement deux couronnes symétriques à son sommet.',
      'Il supporte remarquablement bien les températures élevées et le manque d’eau temporaire.'
    ],
    didYouKnow:
      'Le tout premier standard de la race fut rédigé à Bulawayo en 1922 sur le modèle du Dalmatien.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['chasse', 'garde', 'sportifs', 'grande-taille'],
    popularityRank: 44,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#C57135',
      secondaryColor: '#DC8E52',
      accentColor: '#8D491B',
      eyeColor: '#563116',
      noseColor: '#191716',
      tailStyle: 'sabre',
      plateNumber: '44',
    },
    gaitSpeedKmh: 50,
    strideFrequency: 'Foulée ample d’endurance',
    fciGroup: 'Groupe 6 · Races apparentées aux chiens courants',
  },
  {
    id: 'xoloitzcuintle',
    name: 'Xoloitzcuintle (Chien nu du Mexique)',
    originCountry: 'Mexique',
    continent: 'Amérique du Nord',
    originRegion: 'Mexique central et occidental',
    history:
      'Race sacrée vieille de plus de 3 500 ans vénérée par les Aztèques, Mayas et Toltèques comme guide des âmes vers l’au-delà (Mictlán). Son nom vient du dieu Xolotl et d’« itzcuintli » (chien).',
    physicalDescription:
      'Chien harmonieux et svelte existant en trois tailles (Standard, Moyen, Miniature) et deux variétés : peau nue lisse et chaude au toucher, ou variété à poil court.',
    coatColors: ['Noir', 'Gris ardoise', 'Bronze', 'Fauve rouge', 'Tacheté rose'],
    heightAvg: '25 – 60 cm (selon variété)',
    heightRangeCm: [25, 60],
    weightAvg: '4 – 25 kg (selon variété)',
    weightRangeKg: [4, 25],
    lifespan: '13 – 17 ans',
    lifespanRangeYears: [13, 17],
    temperament: ['Calme', 'Vigilant', 'Fidèle', 'Discret'],
    temperamentSummary:
      'Paisible, attentif, très proche de son foyer et un peu réservé avec les étrangers ; un compagnon silencieux et raffiné.',
    behaviorWithChildren:
      'Doux et affectueux avec les enfants calmes.',
    behaviorWithAnimals:
      'Sociable s’il est bien introduit jeune.',
    intelligenceScore: 4,
    intelligenceDetail: 'Observateur et attentif, apprend rapidement.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '45 minutes à 1h15 d’exercice quotidien selon la taille.',
    recommendedDiet:
      'Alimentation équilibrée naturelle pour soutenir la barrière cutanée.',
    coatCare:
      'Pas de brossage chez le chien nu : hydratation douce de la peau, protection solaire en été et manteau chaud en hiver.',
    healthIssues: ['Sensibilité au soleil/froid', 'Absence naturelle de prémolaires chez les sujets nus'],
    idealLivingConditions:
      'Intérieur chaleureux en appartement ou maison.',
    advantagesAndSpecialties:
      'Aucun poil sur les tapis, absence de puces et chaleur corporelle apaisante.',
    trainingTips:
      'Socialisation précoce douce ; protéger sa peau des griffures lors de jeux intenses.',
    shortDescription:
      'Trésor archéologique du Mexique précolombien, chien nu élégant, silencieux et chaleureux.',
    anecdotes: [
      'Les artistes Frida Kahlo et Diego Rivera élevaient de nombreux Xoloitzcuintles dans leur maison bleue de Coyoacán.',
      'Le personnage de Dante dans le film d’animation « Coco » est un Xoloitzcuintle.'
    ],
    unusualFacts: [
      'Sa peau paraît plus chaude au toucher car aucune fourrure ne fait écran à sa température corporelle normale (environ 38,5 °C).',
      'La mutation génétique responsable de l’absence de poils est liée à une dentition parfois incomplète.'
    ],
    didYouKnow:
      'La ville de Mexico a déclaré le Xoloitzcuintle « patrimoine culturel et symbole de la capitale » en 2016.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['compagnie', 'garde'],
    popularityRank: 45,
    morpho: {
      earStyle: 'bat',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#484340',
      secondaryColor: '#665E58',
      accentColor: '#292523',
      eyeColor: '#563116',
      noseColor: '#25211E',
      tailStyle: 'whip',
      plateNumber: '45',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Foulée souple et gracieuse',
    fciGroup: 'Groupe 5 · Chiens de type primitif',
  },
  {
    id: 'dogo-argentino',
    name: 'Dogo Argentino (Dogue argentin)',
    originCountry: 'Argentine',
    continent: 'Amérique du Sud',
    originRegion: 'Province de Córdoba',
    history:
      'Créé dans les années 1920 par le médecin argentin Antonio Nores Martínez afin d’obtenir un chien de chasse au gros gibier (pécari, puma) capable de chasser en meute dans la pampa tout en étant un gardien affectueux de la famille.',
    physicalDescription:
      'Grand molosse athlétique entièrement blanc pur, à la musculature sèche et puissante, tête massive et regard sombre expressif.',
    coatColors: ['Blanc pur (une seule tache sombre autour de l’œil tolérée)'],
    heightAvg: '60 – 68 cm',
    heightRangeCm: [60, 68],
    weightAvg: '40 – 45 kg',
    weightRangeKg: [40, 45],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Courageux', 'Loyal', 'Calme', 'Athlétique'],
    temperamentSummary:
      'Très affectueux avec sa famille et silencieux dans la maison, mais doté d’un tempérament affirmé nécessitant un maître expérimenté.',
    behaviorWithChildren:
      'Doux et protecteur envers les enfants de son foyer lorsqu’il est bien éduqué.',
    behaviorWithAnimals:
      'Dominance possible envers d’autres chiens ; socialisation intensive et continue obligatoire.',
    intelligenceScore: 4,
    intelligenceDetail: 'Courageux, déterminé et très attentif à son maître.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 d’activité structurée chaque jour.',
    recommendedDiet:
      'Alimentation riche en protéines de haute qualité.',
    coatCare:
      'Poil court lisse facile à entretenir ; protéger la peau blanche des coups de soleil intenses.',
    healthIssues: ['Surdité congénitale liée à la robe blanche (test BAER)', 'Sensibilité cutanée solaire'],
    idealLivingConditions:
      'Maître averti et cohérent, maison avec terrain clos sécurisé.',
    advantagesAndSpecialties:
      'Endurance remarquable, courage silencieux et grande loyauté.',
    trainingTips:
      'Socialisation impeccable dès 8 semaines, fermeté calme sans violence et rappel irréprochable.',
    shortDescription:
      'Seigneur blanc de la pampa argentine, alliant athlétisme puissant, courage et affection familiale.',
    anecdotes: [
      'Antonio Nores Martínez croisa dix races différentes — dont le Dogue allemand, le Boxer, le Bull Terrier et le Montagne des Pyrénées — pour fixer le Dogo Argentino.',
      'Il est parfois utilisé comme chien de sauvetage et d’assistance en Amérique du Sud.'
    ],
    unusualFacts: [
      'Sa robe blanche fut voulue pour que les chasseurs puissent le distinguer instantanément du gibier dans les fourrés.',
      'Il est l’une des rares races sud-américaines reconnues mondialement par la FCI.'
    ],
    didYouKnow:
      'Le Dogue de Córdoba, aujourd’hui disparu, a servi de base principale à la création de la race.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'chasse', 'travail', 'grande-taille'],
    popularityRank: 46,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#FAF8F4',
      secondaryColor: '#EAE4DA',
      accentColor: '#C9C0B2',
      eyeColor: '#3B2314',
      noseColor: '#191716',
      tailStyle: 'sabre',
      plateNumber: '46',
    },
    gaitSpeedKmh: 44,
    strideFrequency: 'Trot ample et galop puissant',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'fila-brasileiro',
    name: 'Fila Brasileiro',
    originCountry: 'Brésil',
    continent: 'Amérique du Sud',
    originRegion: 'Minas Gerais',
    history:
      'Développé dans les grandes fazendas du Brésil à partir d’anciens mastiffs portugais, de Bloodhounds et de bulldogs pour pister le bétail égaré dans la jungle et protéger les exploitations isolées.',
    physicalDescription:
      'Grand molosse lourd à l’ossature puissante, peau épaisse très lâche formant un fanon sous la gorge et longues oreilles tombantes.',
    coatColors: ['Fauve', 'Bringé', 'Noir (masque noir fréquent)'],
    heightAvg: '60 – 75 cm',
    heightRangeCm: [60, 75],
    weightAvg: '40 – 55 kg',
    weightRangeKg: [40, 55],
    lifespan: '9 – 11 ans',
    lifespanRangeYears: [9, 11],
    temperament: ['Protecteur', 'Méfiant', 'Dévoué', 'Courageux'],
    temperamentSummary:
      'Légendaire pour son « ojeriza » (méfiance naturelle envers les inconnus) doublée d’une dévotion totale envers sa famille.',
    behaviorWithChildren:
      'Très patient et protecteur envers les enfants de son foyer.',
    behaviorWithAnimals:
      'Réservé envers les animaux extérieurs au foyer.',
    intelligenceScore: 4,
    intelligenceDetail: 'Instinct de garde autonome très marqué.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h à 1h15 de promenade calme chaque jour avec un maître expérimenté.',
    recommendedDiet:
      'Croquettes pour races géantes en deux repas fractionnés.',
    coatCare:
      'Poil court lisse facile d’entretien.',
    healthIssues: ['Torsion gastrique', 'Dysplasie de la hanche', 'Entropion'],
    idealLivingConditions:
      'Propriété rurale bien clôturée avec maître très expérimenté.',
    advantagesAndSpecialties:
      'Flair hérité du Saint-Hubert allié à la puissance d’un grand gardien.',
    trainingTips:
      'Socialisation précoce stricte et gestion rigoureuse des réceptions de visiteurs.',
    shortDescription:
      'Grand gardien des fazendas brésiliennes, célèbre pour son allure féline souple et sa fidélité sans compromis.',
    anecdotes: [
      'Au Brésil, l’expression populaire « Fiel como um Fila » signifie « Fidèle comme un Fila ».',
      'Sa démarche caractéristique à l’amble (les deux pattes d’un même côté avancent ensemble) rappelle celle d’un grand félin.'
    ],
    unusualFacts: [
      'Le standard de la race mentionne explicitement sa méfiance naturelle envers les étrangers comme un trait identitaire.',
      'Le mot portugais « filar » signifie « saisir, retenir ferme ».'
    ],
    didYouKnow:
      'Il possède un fanon très développé sous le cou et un flair exceptionnel hérité du Chien de Saint-Hubert.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'grande-taille'],
    popularityRank: 47,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'wrinkled',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#B57B42',
      secondaryColor: '#25201C',
      accentColor: '#8B5728',
      eyeColor: '#482813',
      noseColor: '#161515',
      tailStyle: 'sabre',
      plateNumber: '47',
    },
    gaitSpeedKmh: 36,
    strideFrequency: 'Amble félin caractéristique',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'kelpie-australien',
    name: 'Kelpie australien',
    originCountry: 'Australie',
    continent: 'Océanie',
    originRegion: 'Nouvelle-Galles du Sud',
    history:
      'Sélectionné à la fin du XIXe siècle en Australie à partir de Collies écossais pour conduire d’immenses troupeaux de moutons sous le soleil implacable de l’Outback sur des dizaines de kilomètres par jour.',
    physicalDescription:
      'Chien de berger de taille moyenne, sec, musclé et agile, aux oreilles pointues bien écartées, regard vif et robe courte imperméable.',
    coatColors: ['Noir', 'Noir et feu', 'Chocolat', 'Fauve', 'Fumé bleu'],
    heightAvg: '43 – 51 cm',
    heightRangeCm: [43, 51],
    weightAvg: '14 – 22 kg',
    weightRangeKg: [14, 22],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Infatigable', 'Vif', 'Loyal', 'Concentré'],
    temperamentSummary:
      'Travailleur acharné, ultra intelligent, proche de son conducteur et doté d’une réserve d’énergie stupéfiante.',
    behaviorWithChildren:
      'Amical et joueur avec des enfants actifs.',
    behaviorWithAnimals:
      'Excellent avec les chiens s’il est bien dépensé ; instinct de conduite de troupeau très vif.',
    intelligenceScore: 5,
    intelligenceDetail: 'Capacité d’initiative stupéfiante sur troupeau comme en sports canins.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Minimum 2 heures par jour d’activité intense physique et mentale.',
    recommendedDiet:
      'Alimentation haute performance pour chien de travail.',
    coatCare:
      'Poil court double très simple : brossage hebdomadaire.',
    healthIssues: ['Race remarquablement rustique et saine', 'Atrophie rétinienne rare'],
    idealLivingConditions:
      'Vie rurale ou maître grand sportif pratiquant troupeau, agility ou canicross.',
    advantagesAndSpecialties:
      'Endurance légendaire sous la chaleur et santé de fer.',
    trainingTips:
      'Apprendre la détente et varier les exercices cognitifs pour éviter l’ennui.',
    shortDescription:
      'Athlète infatigable de l’Outback australien, célèbre pour sa capacité à courir sur le dos serré des moutons.',
    anecdotes: [
      'Une statue de « Red Dog », célèbre Kelpie voyageur du Pilbara en Australie-Occidentale, rend hommage à son incroyable histoire vraie.',
      'En Australie, un Kelpie bien dressé accomplit le travail de plusieurs cavaliers pour rassembler les troupeaux.'
    ],
    unusualFacts: [
      'Lorsque les moutons sont serrés dans un couloir, le Kelpie est célèbre pour sauter et marcher directement sur leur dos (« sheep backing »).',
      'Le nom Kelpie provient d’une figure mythologique celtique des eaux écossaises, nom donné à la femelle fondatrice de 1872.'
    ],
    didYouKnow:
      'Il peut parcourir jusqu’à 50 à 60 km par jour dans les grandes fermes australiennes.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['berger', 'sportifs', 'travail'],
    popularityRank: 48,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'long',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#1E1D1B',
      secondaryColor: '#B5622C',
      accentColor: '#D68544',
      eyeColor: '#4A2C14',
      noseColor: '#141312',
      tailStyle: 'sabre',
      plateNumber: '48',
    },
    gaitSpeedKmh: 48,
    strideFrequency: 'Foulée rase et ultra rapide',
    fciGroup: 'Groupe 1 · Chiens de berger',
  },
  {
    id: 'bouvier-australien',
    name: 'Bouvier australien (Australian Cattle Dog)',
    originCountry: 'Australie',
    continent: 'Océanie',
    originRegion: 'Nouvelle-Galles du Sud',
    history:
      'Créé au XIXe siècle par Thomas Hall en croisant des Collies bleus écossais avec le Dingo australien sauvage puis le Dalmatien et le Kelpie, afin d’obtenir un chien rustique capable de conduire le bétail sauvage sur des pistes brûlantes en silence.',
    physicalDescription:
      'Chien trapu, musclé et compact à l’allure de dingo, queue pendante épaisse et robe mouchetée unique bleu ou rouge.',
    coatColors: ['Bleu moucheté (avec ou sans marques feu)', 'Rouge moucheté'],
    heightAvg: '43 – 51 cm',
    heightRangeCm: [43, 51],
    weightAvg: '16 – 23 kg',
    weightRangeKg: [16, 23],
    lifespan: '12 – 16 ans',
    lifespanRangeYears: [12, 16],
    temperament: ['Endurant', 'Vigilant', 'Courageux', 'Déterminé'],
    temperamentSummary:
      'Travailleur infatigable, extrêmement loyal envers son maître, très vigilant et parfois méfiant envers les inconnus.',
    behaviorWithChildren:
      'Dévoué à ses enfants ; peut avoir tendance à pincer les talons en jeu (instinct de bouvier à canaliser).',
    behaviorWithAnimals:
      'Socialisation précoce essentielle avec d’autres chiens.',
    intelligenceScore: 5,
    intelligenceDetail: 'Classé parmi les 10 races les plus intelligentes du monde.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '2 heures par jour de sport, randonnée et stimulation intellectuelle.',
    recommendedDiet:
      'Alimentation riche adaptée aux chiens très actifs.',
    coatCare:
      'Poil court double dense et imperméable : brossage hebdomadaire.',
    healthIssues: ['Surdité congénitale (test BAER)', 'Atrophie rétinienne', 'Dysplasie'],
    idealLivingConditions:
      'Maître très actif capable de lui offrir un véritable travail ou sport.',
    advantagesAndSpecialties:
      'Longévité record pour un chien moyen et rusticité à toute épreuve.',
    trainingTips:
      'Rediriger dès chiot l’instinct de pincer les mollets vers des jouets ou exercices d’obéissance.',
    shortDescription:
      'Surnommé « Blue Heeler », ce bouvier rustique né du Dingo détient un record mondial de longévité.',
    anecdotes: [
      'Un Bouvier australien nommé Bluey a vécu 29 ans et 5 mois (1910–1939), longtemps record absolu du Guinness Book.',
      'Il conduit les troupeaux de bovins non en aboyant mais en pinçant silencieusement les talons des bêtes récalcitrantes.'
    ],
    unusualFacts: [
      'Tous les chiots Bouviers australiens naissent entièrement blancs (héritage du Dalmatien), leurs mouchetures bleues ou rouges apparaissant après quelques semaines.',
      'La variété « Stumpy Tail » possède naturellement une queue courte.'
    ],
    didYouKnow:
      'L’apport génétique du Dingo lui confère une résistance remarquable à la chaleur sèche australienne.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['berger', 'travail', 'sportifs'],
    popularityRank: 49,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'merle',
      coatTexture: 'smooth',
      primaryColor: '#5B6773',
      secondaryColor: '#C57038',
      accentColor: '#E5E7EB',
      eyeColor: '#251811',
      noseColor: '#161515',
      tailStyle: 'sabre',
      plateNumber: '49',
    },
    gaitSpeedKmh: 45,
    strideFrequency: 'Trot souple et infatigable',
    fciGroup: 'Groupe 1 · Chiens de bouvier',
  },
  {
    id: 'setter-irlandais',
    name: 'Setter irlandais rouge',
    originCountry: 'Irlande',
    continent: 'Europe',
    originRegion: 'Irlande',
    history:
      'Développé au XVIIIe siècle en Irlande à partir du Setter rouge et blanc et d’épagneuls anciens pour quêter la bécassine et la grouse dans les vastes landes de tourbières irlandaises.',
    physicalDescription:
      'Grand chien d’arrêt racé, élancé et fluide, paré d’une somptueuse robe acajou rouge châtain soyeuse munie de longues franges aux oreilles, poitrail, pattes et queue.',
    coatColors: ['Acajou vif sans aucune trace de noir'],
    heightAvg: '55 – 67 cm',
    heightRangeCm: [55, 67],
    weightAvg: '25 – 32 kg',
    weightRangeKg: [25, 32],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Enjoué', 'Affectueux', 'Exubérant', 'Doux'],
    temperamentSummary:
      'Joyeux, affectueux avec tout le monde, doté d’un tempérament fougueux et éternellement jeune.',
    behaviorWithChildren:
      'Formidable compagnon joueur et doux pour les enfants.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères ; instinct sur oiseaux.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent mais parfois distrait par son enthousiasme ; mûrit tard.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h de course en grands espaces chaque jour.',
    recommendedDiet:
      'Croquettes équilibrées en deux repas éloignés de l’activité.',
    coatCare:
      'Brossage 3 fois par semaine sur les longues franges soyeuses.',
    healthIssues: ['Torsion gastrique', 'Dysplasie de la hanche', 'CLAD (dépisté)'],
    idealLivingConditions:
      'Maison avec grand espace et maîtres sportifs aimant les longues sorties nature.',
    advantagesAndSpecialties:
      'Beauté flamboyante de la robe acajou et gentillesse sans faille.',
    trainingTips:
      'Patience, gaieté et constance sur le rappel.',
    shortDescription:
      'Flamboyant seigneur des landes irlandaises à la robe acajou soyeuse, fougueux, tendre et toujours enjoué.',
    anecdotes: [
      'Le terme « Setter » vient du verbe anglais « to set » (s’asseoir/se figer), décrivant son arrêt couché ou figé devant le gibier.',
      'Sa couleur officielle est décrite dans le standard comme « châtain vif, rappelant la châtaigne fraîchement épluchée ».'
    ],
    unusualFacts: [
      'C’est historiquement le Setter rouge et blanc qui a précédé le Setter entièrement rouge.',
      'Il conserve un enthousiasme de jeune chien jusque tard dans sa vie.'
    ],
    didYouKnow:
      'Son galop ample et léger fait partie des plus élégants du groupe des chiens d’arrêt.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['chasse', 'sportifs', 'grande-taille'],
    popularityRank: 50,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'silky',
      primaryColor: '#8B3418',
      secondaryColor: '#B54A24',
      accentColor: '#66220D',
      eyeColor: '#482813',
      noseColor: '#2B1710',
      tailStyle: 'plume',
      plateNumber: '50',
    },
    gaitSpeedKmh: 52,
    strideFrequency: 'Galop ample et aérien',
    fciGroup: 'Groupe 7 · Chiens d’arrêt britanniques',
  },
  {
    id: 'whippet',
    name: 'Whippet',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Nord de l’Angleterre',
    history:
      'Élevé au XIXe siècle par les mineurs du nord de l’Angleterre qui ne pouvaient entretenir de grands Greyhounds, il était utilisé pour la chasse au lapin et les courses dominicales, d’où son surnom affectueux de « cheval de course du pauvre ».',
    physicalDescription:
      'Lévrier de taille moyenne aux lignes aérodynamiques élégantes, poitrine profonde, rein voussé, taille fine et poil ras très doux.',
    coatColors: ['Toutes couleurs admises (fauve, bringé, noir, bleu, blanc panaché)'],
    heightAvg: '44 – 51 cm',
    heightRangeCm: [44, 51],
    weightAvg: '11 – 16 kg',
    weightRangeKg: [11, 16],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Doux', 'Silencieux', 'Calme', 'Rapide'],
    temperamentSummary:
      'À l’intérieur, un véritable chat qui dort sur les coussins douillets ; à l’extérieur, un sprinteur explosif d’une gentillesse extrême.',
    behaviorWithChildren:
      'Très doux, poli et patient avec les enfants calmes.',
    behaviorWithAnimals:
      'Très pacifique avec les chiens ; attention à l’instinct de poursuite sur les chats extérieurs.',
    intelligenceScore: 4,
    intelligenceDetail: 'Sensible et coopératif lorsqu’il est encouragé avec douceur.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h de balade quotidienne agrémentée de quelques sprints libres en zone sécurisée.',
    recommendedDiet:
      'Alimentation équilibrée et digeste ; éviter tout surpoids sur sa charpente légère.',
    coatCare:
      'Poil ras quasiment sans odeur ni perte excessive ; manteau chaud indispensable en hiver.',
    healthIssues: ['Peau fine sujette aux petites éraflures', 'Sensibilité anesthésique modérée'],
    idealLivingConditions:
      'Excellent en appartement grâce à son calme silencieux, avec canapé moelleux et accès régulier à des parcs.',
    advantagesAndSpecialties:
      'Absence d’aboiements, propreté, santé solide et élégance exceptionnelle.',
    trainingTips:
      'Éducation très douce ; le rappel se travaille en zone close avec jeu de poursuite.',
    shortDescription:
      'Sprinteur le plus rapide de sa catégorie jusqu’à 56 km/h, mais compagnon d’appartement calme, silencieux et câlin.',
    anecdotes: [
      'C’est le chien capable d’atteindre la plus grande accélération de sa taille : 0 à 56 km/h en quelques foulées.',
      'Il pratique la « coursing » (poursuite à vue sur leurre), sport canin spectaculaire sans contact.'
    ],
    unusualFacts: [
      'Lorsqu’il sprinte à plein régime, ses quatre pattes quittent simultanément le sol deux fois par cycle de foulée.',
      'Il préfère dormir sous une couette pour compenser son très faible taux de graisse corporelle.'
    ],
    didYouKnow:
      'Le Whippet est souvent surnommé « le lévrier idéal pour la ville » tant il est discret en intérieur.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['sportifs', 'compagnie', 'chasse'],
    popularityRank: 51,
    morpho: {
      earStyle: 'button',
      muzzleStyle: 'long',
      coatPattern: 'brindle',
      coatTexture: 'smooth',
      primaryColor: '#C59A6B',
      secondaryColor: '#564332',
      accentColor: '#FAF7F0',
      eyeColor: '#482813',
      noseColor: '#191716',
      tailStyle: 'whip',
      plateNumber: '51',
    },
    gaitSpeedKmh: 56,
    strideFrequency: 'Double suspension aérienne ultra rapide',
    fciGroup: 'Groupe 10 · Lévriers à poil court',
  },
  {
    id: 'kangal-berger-anatolie',
    name: 'Kangal (Berger d’Anatolie)',
    originCountry: 'Turquie',
    continent: 'Asie',
    originRegion: 'Plateaux d’Anatolie (région de Sivas)',
    history:
      'Sélectionné depuis plus de mille ans sur les hauts plateaux turcs pour protéger les troupeaux de moutons contre les loups, ours et chacals. Véritable fierté nationale turque dont l’exportation est strictement encadrée.',
    physicalDescription:
      'Grand chien rustique puissant et agile, à la robe fauve pâle ornée d’un masque noir net, oreilles tombantes noires et queue enroulée sur le dos en alerte.',
    coatColors: ['Fauve clair (sable) avec masque noir'],
    heightAvg: '71 – 81 cm',
    heightRangeCm: [71, 81],
    weightAvg: '45 – 65 kg',
    weightRangeKg: [45, 65],
    lifespan: '11 – 14 ans',
    lifespanRangeYears: [11, 14],
    temperament: ['Indépendant', 'Courageux', 'Calme', 'Protecteur'],
    temperamentSummary:
      'Gardien noble et posé, très doux avec sa famille mais doté d’un instinct territorial puissant et autonome.',
    behaviorWithChildren:
      'Protecteur et tolérant envers les enfants du foyer.',
    behaviorWithAnimals:
      'Protège le bétail familier ; méfiant envers les chiens intrus.',
    intelligenceScore: 4,
    intelligenceDetail: 'Autonome et stratège : évalue les menaces sans ordres directs.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h30 de marche quotidienne ; habitué aux climats rigoureux et grands espaces.',
    recommendedDiet:
      'Métabolisme étonnamment sobre pour un chien géant ; rations équilibrées.',
    coatCare:
      'Poil court à mi-long avec sous-poil dense : brossage hebdomadaire.',
    healthIssues: ['Race exceptionnellement saine et rustique', 'Dysplasie rare comparée à son gabarit'],
    idealLivingConditions:
      'Grand terrain rural solidement clôturé ; totalement inadapté à la vie en appartement.',
    advantagesAndSpecialties:
      'Force de dissuasion légendaire, longévité exceptionnelle pour un géant et rusticité absolue.',
    trainingTips:
      'Socialisation précoce indispensable et respect de son rôle naturel de protecteur.',
    shortDescription:
      'Légendaire protecteur des hauts plateaux turcs, géant agile au masque noir doté d’une force et d’une longévité rares.',
    anecdotes: [
      'En Namibie, un programme international a placé des Kangals dans les fermes pour éloigner les guépards sans les tuer, sauvant ainsi de nombreux félins menacés.',
      'Sa morsure figure parmi les plus puissantes mesurées chez les chiens domestiques.'
    ],
    unusualFacts: [
      'Malgré son poids de 55 à 65 kg, il atteint facilement 50 km/h en pointe pour intercepter un prédateur.',
      'Les bergers turcs lui mettent souvent un collier à pointes (« tasma ») contre les loups.'
    ],
    didYouKnow:
      'En Turquie, le Kangal est officiellement reconnu comme patrimoine national vivant.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'berger', 'grande-taille'],
    popularityRank: 52,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#DFC394',
      secondaryColor: '#1E1B18',
      accentColor: '#B89566',
      eyeColor: '#482813',
      noseColor: '#141312',
      tailStyle: 'curled',
      plateNumber: '52',
    },
    gaitSpeedKmh: 50,
    strideFrequency: 'Foulée longue, souple et impressionnante',
    fciGroup: 'Groupe 2 · Chiens de montagne et de troupeau',
  },
  {
    id: 'bull-terrier',
    name: 'Bull Terrier',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Birmingham (Angleterre)',
    history:
      'Sélectionné au milieu du XIXe siècle par James Hinks à Birmingham en croisant l’ancien Bulldog anglais et le Terrier blanc anglais (aujourd’hui éteint), créant un chien élégant et athlétique reconnaissable à son profil ovale.',
    physicalDescription:
      'Chien trapu et musclé, célèbre pour sa tête ovoïde unique sans stop (« tête en œuf »), ses petits yeux triangulaires enfoncés et ses oreilles droites rapprochées.',
    coatColors: ['Blanc pur', 'Bringé', 'Fauve', 'Tricolore', 'Noir et blanc'],
    heightAvg: '45 – 55 cm',
    heightRangeCm: [45, 55],
    weightAvg: '22 – 35 kg',
    weightRangeKg: [22, 35],
    lifespan: '11 – 14 ans',
    lifespanRangeYears: [11, 14],
    temperament: ['Clown', 'Courageux', 'Affectueux', 'Têtu'],
    temperamentSummary:
      '« Un enfant de 3 ans dans un costume de chien musclé » : comique, très affectueux avec les humains, plein d’énergie mais parfois cabochard.',
    behaviorWithChildren:
      'Très doux et joueur avec les enfants déjà assez solides pour ses élans joyeux.',
    behaviorWithAnimals:
      'Socialisation précoce stricte indispensable envers les autres chiens et petits animaux.',
    intelligenceScore: 3,
    intelligenceDetail: 'Intelligent mais très indépendant et joueur : s’éduque par le jeu.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h à 1h30 d’activité dynamique quotidienne (jeux de traction, balades, sports).',
    recommendedDiet:
      'Alimentation équilibrée pour chiens musclés.',
    coatCare:
      'Poil court dur et luisant : coup de gant hebdomadaire.',
    healthIssues: ['Surdité chez les sujets blancs (test BAER)', 'Allergies cutanées', 'Néphropathie'],
    idealLivingConditions:
      'Maître présent avec du caractère et de l’humour ; vie en intérieur chaleureuse.',
    advantagesAndSpecialties:
      'Humour irrésistible (« bully run »), courage et attachement fusionnel à sa famille.',
    trainingTips:
      'Cohérence absolue dès le premier jour sans jamais céder aux clowneries.',
    shortDescription:
      'Le terrier anglais au célèbre profil ovale, concentré de muscles, de tendresse et de pitreries irrésistibles.',
    anecdotes: [
      'Le général George S. Patton possédait un Bull Terrier blanc nommé Willie qui l’accompagnait sur les théâtres d’opérations.',
      'Le célèbre « Bullseye », mascotte de la chaîne américaine Target, est un Bull Terrier blanc.'
    ],
    unusualFacts: [
      'C’est la seule race reconnue au monde possédant des yeux de forme triangulaire.',
      'Lorsqu’il est fou de joie, il exécute le « hucklebuck » ou « bully run », une course circulaire frénétique arrière-train abaissé.'
    ],
    didYouKnow:
      'Il existe également une variété officielle appelée Bull Terrier Miniature (moins de 35,5 cm).',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['compagnie', 'sportifs'],
    popularityRank: 53,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'long',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#FAF8F4',
      secondaryColor: '#EAE4DA',
      accentColor: '#C5B8A8',
      eyeColor: '#251710',
      noseColor: '#161515',
      tailStyle: 'whip',
      plateNumber: '53',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Trot uni et énergique',
    fciGroup: 'Groupe 3 · Terriers',
  },
  {
    id: 'sloughi',
    name: 'Sloughi (Lévrier arabe)',
    originCountry: 'Maroc / Afrique du Nord',
    continent: 'Afrique',
    originRegion: 'Maghreb et Sahara septentrional',
    history:
      'Compagnon vénéré des tribus berbères et nomades d’Afrique du Nord depuis l’Antiquité, le Sloughi chassait à vue la gazelle, le lièvre et le chacal dans le désert tout en partageant la tente familiale.',
    physicalDescription:
      'Lévrier aristocratique aux lignes pures et sèches, museau fin, oreilles tombantes triangulaires, peau très fine laissant deviner la musculature et robe sable rase.',
    coatColors: ['Sable clair', 'Sable fauve', 'Sable rouge (avec ou sans masque noir et bringeures)'],
    heightAvg: '61 – 72 cm',
    heightRangeCm: [61, 72],
    weightAvg: '20 – 28 kg',
    weightRangeKg: [20, 28],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Noble', 'Sensible', 'Fidèle', 'Rapide'],
    temperamentSummary:
      'Digne, discret et profondément fidèle à son maître, réservé envers les étrangers et doté d’une sensibilité émotionnelle fine.',
    behaviorWithChildren:
      'Calme et doux avec les enfants respectueux.',
    behaviorWithAnimals:
      'Fort instinct de course sur petits animaux en mouvement.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent, autonome et très fin observateur.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h15 d’exercice quotidien incluant des sprints libres en terrain sécurisé.',
    recommendedDiet:
      'Alimentation digeste adaptée aux lévriers athlétiques.',
    coatCare:
      'Poil ras fin quasiment sans odeur ; prévoir un manteau chaud par temps humide et froid.',
    healthIssues: ['Atrophie progressive de la rétine (test ADN)', 'Sensibilité aux anesthésiques'],
    idealLivingConditions:
      'Foyer calme, doux et confortable ; le Sloughi apprécie les couchages épais.',
    advantagesAndSpecialties:
      'Propreté, silence à la maison, vitesse gracieuse et fidélité aristocratique.',
    trainingTips:
      'Éducation exclusivement douce et respectueuse ; la brutalité briserait sa confiance.',
    shortDescription:
      'Seigneur des sables nord-africains, ce lévrier millénaire conjugue silhouette sculpturale, silence et vitesse pure.',
    anecdotes: [
      'Le Maroc assure la tenue du standard international FCI du Sloughi, reconnu comme chien royal du Maghreb.',
      'Dans la tradition nomade, le Sloughi était le seul animal autorisé à dormir sous la tente familiale.'
    ],
    unusualFacts: [
      'Il est capable de courir à plus de 55 km/h sur terrain caillouteux désertique.',
      'Son pelage ras est si fin qu’il n’a pratiquement aucune odeur canine même mouillé.'
    ],
    didYouKnow:
      'À la différence de l’Azawakh plus longiligne, le Sloughi présente des proportions légèrement plus carrées et un peu plus charpentées.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['chasse', 'sportifs', 'grande-taille'],
    popularityRank: 54,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#DFB676',
      secondaryColor: '#25201C',
      accentColor: '#C29352',
      eyeColor: '#3B2314',
      noseColor: '#191716',
      tailStyle: 'whip',
      plateNumber: '54',
    },
    gaitSpeedKmh: 58,
    strideFrequency: 'Galop aérien du désert',
    fciGroup: 'Groupe 10 · Lévriers à poil court',
  },
];
