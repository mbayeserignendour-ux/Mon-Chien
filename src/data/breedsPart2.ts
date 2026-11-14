import { Breed } from '../types/dog';

export const breedsPart2: Breed[] = [
  {
    id: 'cocker-spaniel-anglais',
    name: 'Cocker Spaniel anglais',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Angleterre et Pays de Galles',
    history:
      'Issu des anciens chiens d’oiseaux espagnols introduits en Grande-Bretagne dès le XIVe siècle, il tire son nom de la chasse à la bécasse (« woodcock »). La séparation officielle d’avec le Springer Spaniel eut lieu en 1892.',
    physicalDescription:
      'Chien de chasse compact aux longues oreilles soyeuses attachées bas, regard doux et chaleureux et queue sans cesse frétillante.',
    coatColors: ['Noir', 'Roux doré', 'Marron', 'Rouan bleu', 'Rouan orange', 'Noir et feu'],
    heightAvg: '38 – 41 cm',
    heightRangeCm: [38, 41],
    weightAvg: '12,5 – 14,5 kg',
    weightRangeKg: [12.5, 14.5],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Joyeux', 'Affectueux', 'Dynamique', 'Gourmand'],
    temperamentSummary:
      'Enthousiaste et tendre, le Cocker dégage une joie de vivre permanente tout en restant un véritable chien de quête au nez fin.',
    behaviorWithChildren:
      'Très complice et joueur avec les enfants doux.',
    behaviorWithAnimals:
      'Très sociable avec ses congénères ; peut poursuivre les oiseaux au jardin.',
    intelligenceScore: 4,
    intelligenceDetail: 'Intelligent et réceptif, particulièrement motivé par les jeux olfactifs et récompenses.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h à 1h30 de sortie quotidienne en nature avec pistes olfactives et jeux de rapport.',
    recommendedDiet:
      'Rations contrôlées car son appétit remarquable favorise la prise de poids.',
    coatCare:
      'Brossage 3 fois par semaine sur les franges et oreilles ; épilation régulière recommandée chez le toiletteur.',
    healthIssues: ['Otites (oreilles longues peu aérées)', 'Atrophie rétinienne', 'Néphropathie familiale'],
    idealLivingConditions:
      'Maison ou appartement avec un foyer présent et actif.',
    advantagesAndSpecialties:
      'Format passe-partout, gentillesse constante et flair exceptionnel.',
    trainingTips:
      'Éducation ferme dans la douceur dès chiot pour éviter les caprices alimentaires ou de confort.',
    shortDescription:
      'Compagnon joyeux aux longues oreilles soyeuses, infatigable explorateur doté d’un cœur immense.',
    anecdotes: [
      'Les deux premières éditions de Crufts à Londres comptaient déjà parmi leurs vedettes des Cockers Spaniels de la lignée « Obo ».',
      'La chienne Lupo, un Cocker Spaniel anglais noir, fut l’animal emblématique de la famille royale britannique dans les années 2010.'
    ],
    unusualFacts: [
      'Sa queue bat presque en continu lorsqu’il suit une piste, ce qui lui a valu le surnom anglais de « Merry Cocker ».',
      'La forme incurvée de ses longues oreilles aide à diriger les molécules odorantes vers sa truffe au sol.'
    ],
    didYouKnow:
      'Le Cocker Spaniel anglais est plus athlétique et possède un museau plus allongé que le Cocker américain.',
    sizeCategory: 'Moyen',
    coatType: 'Mi-long',
    categories: ['chasse', 'compagnie', 'sportifs'],
    popularityRank: 19,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'silky',
      primaryColor: '#B56733',
      secondaryColor: '#D98E52',
      accentColor: '#7A3E1A',
      eyeColor: '#3A2112',
      noseColor: '#1E1A18',
      tailStyle: 'sabre',
      plateNumber: '19',
    },
    gaitSpeedKmh: 36,
    strideFrequency: 'Trot vif et actif',
    fciGroup: 'Groupe 8 · Chiens leveurs de gibier',
  },
  {
    id: 'yorkshire-terrier',
    name: 'Yorkshire Terrier',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Comté du Yorkshire (Angleterre)',
    history:
      'Sélectionné au XIXe siècle par des ouvriers écossais venus travailler dans les filatures du Yorkshire pour chasser les rats dans les usines et galeries minières, avant de devenir un chien de compagnie aristocratique prisé dans le monde entier.',
    physicalDescription:
      'Petit terrier aux proportions compactes, recouvert d’un long manteau droit et soyeux bleu acier sur le dos et fauve doré sur la tête.',
    coatColors: ['Bleu acier foncé et fauve doré'],
    heightAvg: '20 – 24 cm',
    heightRangeCm: [20, 24],
    weightAvg: '2 – 3,2 kg',
    weightRangeKg: [2, 3.2],
    lifespan: '13 – 16 ans',
    lifespanRangeYears: [13, 16],
    temperament: ['Intrépide', 'Vif', 'Alerte', 'Affectueux'],
    temperamentSummary:
      'Petit chien au grand caractère de terrier : courageux, curieux, protecteur de son foyer et très attaché à ses maîtres.',
    behaviorWithChildren:
      'Amical avec les enfants respectueux ; sa petite ossature reste fragile face aux gestes brusques.',
    behaviorWithAnimals:
      'Hardiesse parfois surdimensionnée devant de grands chiens ; socialisation précoce utile.',
    intelligenceScore: 4,
    intelligenceDetail: 'Vif d’esprit et rapide à comprendre les routines du foyer.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '40 minutes de marche quotidienne et séances de jeux en intérieur.',
    recommendedDiet:
      'Croquettes mini-format favorisant l’hygiène bucco-dentaire.',
    coatCare:
      'Le poil pousse en continu sans sous-poil : brossage quasi quotidien s’il est gardé long, ou coupe courte pratique (« coupe puppy ») toutes les 6 semaines.',
    healthIssues: ['Tartre dentaire', 'Luxation de la rotule', 'Collapsus trachéal (privilégier le harnais)'],
    idealLivingConditions:
      'Parfait en appartement ou maison, apprécie la présence régulière de son maître.',
    advantagesAndSpecialties:
      'Très faible perte de poils, format voyageable partout et grande vigilance d’alerte.',
    trainingTips:
      'Ne pas céder à tous ses caprices sous prétexte de sa petite taille ; utiliser un harnais plutôt qu’un collier.',
    shortDescription:
      'Ancien ratier des filatures anglaises devenu joyau soyeux, vif, courageux et infatigable compagnon de ville.',
    anecdotes: [
      'Durant la Seconde Guerre mondiale, une minuscule femelle Yorkshire nommée Smoky a posé des câbles de communication dans des tuyaux étroits aux Philippines.',
      'Les chiots Yorkshire naissent entièrement noirs et feu et n’acquièrent leur robe bleu acier et or qu’entre 6 mois et 2 ans.'
    ],
    unusualFacts: [
      'Sa fourrure présente une structure proche du cheveu humain et ne possède pas de sous-poil.',
      'Le champion Huddersfield Ben (né en 1865) est considéré comme le père fondateur de la race.'
    ],
    didYouKnow:
      'Le célèbre ruban rouge sur la tête en exposition sert traditionnellement à dégager les longs poils devant ses yeux.',
    sizeCategory: 'Petit',
    coatType: 'Long',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 20,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'bearded',
      coatPattern: 'bicolor',
      coatTexture: 'silky',
      primaryColor: '#4A515B',
      secondaryColor: '#D99E57',
      accentColor: '#EAD09F',
      eyeColor: '#251710',
      noseColor: '#141413',
      tailStyle: 'sabre',
      plateNumber: '20',
    },
    gaitSpeedKmh: 22,
    strideFrequency: 'Démarche vive et assurée',
    fciGroup: 'Groupe 3 · Terriers',
  },
  {
    id: 'bichon-maltais',
    name: 'Bichon maltais',
    originCountry: 'Malte / Bassin méditerranéen',
    continent: 'Europe',
    originRegion: 'Méditerranée centrale',
    history:
      'L’une des plus anciennes races de compagnie d’Europe : déjà mentionné par Aristote et représenté sur des céramiques grecques dès le Ve siècle av. J.-C., il accompagnait les dames de la Rome antique puis des cours de la Renaissance.',
    physicalDescription:
      'Petit chien élégant à l’ossature fine, drapé d’un long pelage blanc pur, soyeux et lisse sans boucle, aux yeux sombres vifs soulignés d’un contour noir.',
    coatColors: ['Blanc pur (ivoire pâle toléré)'],
    heightAvg: '20 – 25 cm',
    heightRangeCm: [20, 25],
    weightAvg: '3 – 4 kg',
    weightRangeKg: [3, 4],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Tendre', 'Gai', 'Vif', 'Sociable'],
    temperamentSummary:
      'Extrêmement doux, proche de l’humain, intelligent et joueur sans agressivité.',
    behaviorWithChildren:
      'Affectueux avec les enfants doux qui respectent son petit gabarit.',
    behaviorWithAnimals:
      'Sociable et pacifique avec chiens et chats.',
    intelligenceScore: 4,
    intelligenceDetail: 'Apprend très volontiers tours et obéissance ludique.',
    activityScore: 2,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '30 à 45 minutes de promenade et de jeux par jour.',
    recommendedDiet:
      'Croquettes pour petits chiens de haute digestibilité afin de limiter les traces lacrymales brunâtres.',
    coatCare:
      'Brossage 3 à 4 fois par semaine et nettoyage quotidien du contour des yeux ; faible perte de poils.',
    healthIssues: ['Larmoiement oculaire', 'Tartre dentaire', 'Luxation de la rotule'],
    idealLivingConditions:
      'Appartement ou maison ; déteste la solitude prolongée.',
    advantagesAndSpecialties:
      'Très peu allergisant, douceur permanente et excellente longévité.',
    trainingTips:
      'Habituation progressive à la solitude dès chiot pour éviter l’anxiété de séparation.',
    shortDescription:
      'Compagnon méditerranéen millénaire à la robe blanche immaculée, symbole de tendresse et d’élégance.',
    anecdotes: [
      'Les Romains appelaient ce petit chien « Canis Melitaeus » et le considéraient comme un porte-bonheur et un apaisant naturel.',
      'Représenté dans les tableaux de Titien, Rubens et Goya aux côtés de la noblesse européenne.'
    ],
    unusualFacts: [
      'Malgré son nom, la race n’est pas originaire uniquement de l’île de Malte : « Malat » désignait autrefois les ports marchands méditerranéens.',
      'Son pelage est dépourvu de sous-poil.'
    ],
    didYouKnow:
      'Le Bichon maltais ne perd presque pas de poils lors des changements de saison.',
    sizeCategory: 'Petit',
    coatType: 'Long',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 21,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'bearded',
      coatPattern: 'solid',
      coatTexture: 'silky',
      primaryColor: '#FAF9F6',
      secondaryColor: '#EDE7DC',
      accentColor: '#D6CEBE',
      eyeColor: '#1E1510',
      noseColor: '#141312',
      tailStyle: 'plume',
      plateNumber: '21',
    },
    gaitSpeedKmh: 20,
    strideFrequency: 'Pas légers et coulés',
    fciGroup: 'Groupe 9 · Chiens d’agrément et de compagnie',
  },
  {
    id: 'carlin',
    name: 'Carlin (Pug)',
    originCountry: 'Chine',
    continent: 'Asie',
    originRegion: 'Chine impériale puis Pays-Bas',
    history:
      'Élevé dans les palais impériaux chinois depuis plus de deux millénaires (où les plis de son front formaient le caractère chinois « Prince »), il fut importé en Europe au XVIe siècle par la Compagnie néerlandaise des Indes orientales et devint le chien fétiche de la maison d’Orange.',
    physicalDescription:
      'Petit chien compact et carré (« Multum in parvo »), tête ronde plissée, grands yeux ronds sombres, masque noir et queue en tire-bouchon serrée sur la hanche.',
    coatColors: ['Fauve à masque noir', 'Noir', 'Argent', 'Abricot'],
    heightAvg: '25 – 33 cm',
    heightRangeCm: [25, 33],
    weightAvg: '6,3 – 8,1 kg',
    weightRangeKg: [6.3, 8.1],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Charmant', 'Digne', 'Malicieux', 'Calme'],
    temperamentSummary:
      'Toujours de bonne humeur, jamais agressif, adorant la proximité humaine et doué d’un sens comique naturel.',
    behaviorWithChildren:
      'Merveilleux compagnon pour les enfants calmes grâce à sa patience.',
    behaviorWithAnimals:
      'Très sociable avec tous les animaux du foyer.',
    intelligenceScore: 3,
    intelligenceDetail: 'Intelligent et sensible à l’humeur humaine, parfois un peu têtu.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '30 à 40 minutes de promenade modérée par jour, à l’ombre dès que la température dépasse 22 °C.',
    recommendedDiet:
      'Alimentation contrôlée en calories pour éviter l’obésité qui aggraverait sa respiration.',
    coatCare:
      'Poil court lisse perdant pas mal de poils ; brossage hebdomadaire et nettoyage attentif du pli nasal et des yeux.',
    healthIssues: ['Syndrome brachycéphale', 'Ulcères cornéens (yeux proéminents)', 'Surpoids'],
    idealLivingConditions:
      'Vie en appartement confortable, climat tempéré ou climatisé en été.',
    advantagesAndSpecialties:
      'Gentillesse universelle, silence relatif et grande adaptabilité aux foyers citadins.',
    trainingTips:
      'Éducation positive douce et gourmande ; privilégier le harnais en Y pour ne pas comprimer la trachée.',
    shortDescription:
      'Petit philosophe chinois à la frimousse plissée et la queue en boucle, concentré de tendresse et de bonne humeur.',
    anecdotes: [
      'Un Carlin nommé Pompey sauva la vie du prince Guillaume le Taciturne en 1572 en donnant l’alerte lors d’une attaque nocturne.',
      'Joséphine de Beauharnais possédait un célèbre Carlin prénommé Fortuné qui dormait jusque dans le lit conjugal.'
    ],
    unusualFacts: [
      'La devise officielle de la race, « Multum in parvo », signifie « beaucoup dans un petit espace ».',
      'Une boucle double de la queue est considérée comme idéale chez les sujets d’exposition.'
    ],
    didYouKnow:
      'Les rides frontales du Carlin étaient prisées par les empereurs chinois car elles évoquaient l’idéogramme « Wang » (Prince).',
    sizeCategory: 'Petit',
    coatType: 'Court',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 22,
    morpho: {
      earStyle: 'button',
      muzzleStyle: 'wrinkled',
      coatPattern: 'masked',
      coatTexture: 'smooth',
      primaryColor: '#DFC59A',
      secondaryColor: '#1E1B18',
      accentColor: '#B89566',
      eyeColor: '#1D140E',
      noseColor: '#141312',
      tailStyle: 'curled',
      plateNumber: '22',
    },
    gaitSpeedKmh: 19,
    strideFrequency: 'Démarche roulante caractéristique',
    fciGroup: 'Groupe 9 · Chiens d’agrément et de compagnie',
  },
  {
    id: 'chow-chow',
    name: 'Chow-Chow',
    originCountry: 'Chine',
    continent: 'Asie',
    originRegion: 'Chine du Nord et Mongolie',
    history:
      'Race primitive vieille de plus de 2 000 ans, représentée sur des bas-reliefs de la dynastie Han. Il servait de chien polyvalent : garde des temples, traction de charrettes et chasse aux loups.',
    physicalDescription:
      'Chien compact et puissant à l’allure léonine due à son épaisse collerette autour du cou, queue portée sur le dos et célèbre langue bleu-noir.',
    coatColors: ['Fauve rouge', 'Noir', 'Bleu', 'Crème', 'Cannelle'],
    heightAvg: '46 – 56 cm',
    heightRangeCm: [46, 56],
    weightAvg: '20 – 32 kg',
    weightRangeKg: [20, 32],
    lifespan: '9 – 12 ans',
    lifespanRangeYears: [9, 12],
    temperament: ['Indépendant', 'Digne', 'Calme', 'Réservé'],
    temperamentSummary:
      'Souvent comparé à un chat dans un corps de lion : loyal mais peu démonstratif, très propre, calme et réservé envers les inconnus.',
    behaviorWithChildren:
      'Tolérant avec les enfants calmes qui le laissent tranquille quand il se repose.',
    behaviorWithAnimals:
      'Distant ou sélectif envers les chiens inconnus ; socialisation précoce indispensable.',
    intelligenceScore: 3,
    intelligenceDetail: 'Intelligent mais très autonome ; refuse toute contrainte inutile.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '45 minutes à 1h de marche tranquille quotidienne ; éviter la chaleur.',
    recommendedDiet:
      'Alimentation modérée en protéines, adaptée à un chien au métabolisme relativement calme.',
    coatCare:
      'Brossage méticuleux 2 à 3 fois par semaine jusqu’à la peau pour prévenir le feutrage du sous-poil épais.',
    healthIssues: ['Entropion (paupières)', 'Dysplasie du coude et de la hanche', 'Coup de chaleur'],
    idealLivingConditions:
      'Intérieur calme ou jardin frais ombragé ; convient aux maîtres respectant son tempérament indépendant.',
    advantagesAndSpecialties:
      'Propreté naturelle, silence, allure spectaculaire et excellente capacité de garde.',
    trainingTips:
      'Patience absolue, respect et renforcement positif dès 2 mois ; aucune dureté.',
    shortDescription:
      'Lion chinois à la langue bleu-noir, d’une dignité féline et d’une indépendance ancestrale.',
    anecdotes: [
      'Sigmund Freud était un grand passionné de Chow-Chow : sa chienne Jofi assistait régulièrement à ses séances de psychanalyse à Vienne.',
      'La reine Victoria reçut un Chow-Chow au XIXe siècle, lançant la vogue de la race en Europe.'
    ],
    unusualFacts: [
      'Sa langue, ses lèvres et son palais sont pigmentés de bleu-noir, une caractéristique qu’il ne partage qu’avec le Shar-Pei.',
      'Ses membres postérieurs très droits lui confèrent une démarche caractéristique dite « sur échasses ».'
    ],
    didYouKnow:
      'La race existe également en variété à poil court (« Smooth Chow »), plus rare mais reconnue officiellement.',
    sizeCategory: 'Moyen',
    coatType: 'Long',
    categories: ['nordiques', 'garde', 'compagnie'],
    popularityRank: 23,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'short',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#C55D28',
      secondaryColor: '#DF7A42',
      accentColor: '#8B3912',
      eyeColor: '#291911',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '23',
    },
    gaitSpeedKmh: 28,
    strideFrequency: 'Démarche courte et raide caractéristique',
    fciGroup: 'Groupe 5 · Chiens de type Spitz et primitif',
  },
  {
    id: 'cane-corso',
    name: 'Cane Corso',
    originCountry: 'Italie',
    continent: 'Europe',
    originRegion: 'Pouilles et Italie du Sud',
    history:
      'Descendant direct des anciens molosses romains (« Canis pugnax »), le Cane Corso a survécu dans les campagnes du sud de l’Italie comme gardien de fermes, conducteur de bétail semi-sauvage et chasseur de sangliers avant d’être restauré dans les années 1970.',
    physicalDescription:
      'Grand molosse athlétique et sec (moins lourd que le Mâtin de Naples), à la tête large légèrement convexe, musculature saillante et poil court brillant.',
    coatColors: ['Noir', 'Gris plomb', 'Fauve', 'Bringé', 'Froment'],
    heightAvg: '60 – 68 cm',
    heightRangeCm: [60, 68],
    weightAvg: '40 – 50 kg',
    weightRangeKg: [40, 50],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Protecteur', 'Équilibré', 'Fidèle', 'Dissuasif'],
    temperamentSummary:
      'Calme et très attaché à son cercle familial, vigilant par instinct mais sans agressivité gratuite lorsqu’il est bien socialisé.',
    behaviorWithChildren:
      'Doux et attentif envers les enfants de son foyer tout en nécessitant une surveillance vu sa force.',
    behaviorWithAnimals:
      'Socialisation précoce essentielle pour une entente sereine avec les autres chiens.',
    intelligenceScore: 4,
    intelligenceDetail: 'Très attentif à son maître, capable d’évaluer rapidement une situation.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 par jour d’exercice modéré à soutenu (randonnée, pistage, obéissance).',
    recommendedDiet:
      'Alimentation équilibrée pour grands molosses, fractionnée en deux repas loin des efforts.',
    coatCare:
      'Poil ras très simple à brosser une fois par semaine.',
    healthIssues: ['Dysplasie de la hanche', 'Torsion gastrique', 'Prolapsus de la glande nictitante (« œil cerise »)'],
    idealLivingConditions:
      'Maison avec jardin bien clôturé et maître expérimenté offrant une présence réelle.',
    advantagesAndSpecialties:
      'Gardien naturel remarquablement équilibré, athlétique et peu baveux comparé à d’autres grands molosses.',
    trainingTips:
      'Éducation ferme, juste, calme et très tôt socialisée ; éviter les jeux d’excitation violents.',
    shortDescription:
      'Noble molosse italien à la musculature sculpturale, gardien loyal, athlétique et profondément attaché aux siens.',
    anecdotes: [
      'Le nom « Corso » viendrait du latin « cohors », signifiant « protecteur » ou « gardien de la cour ».',
      'Dans les années 1970, la race ne comptait plus que quelques dizaines de spécimens ruraux dans les Pouilles avant son sauvetage.'
    ],
    unusualFacts: [
      'Contrairement à d’autres grands mâtins, le Cane Corso est capable de galoper sur de longues distances avec agilité.',
      'Il exprime souvent une grande sensibilité vocale par de légers soupirs et grognements affectueux.'
    ],
    didYouKnow:
      'La race a été officiellement reconnue par la FCI seulement en 1996 (à titre provisoire) puis en 2007 à titre définitif.',
    sizeCategory: 'Grand',
    coatType: 'Court',
    categories: ['garde', 'travail', 'grande-taille'],
    popularityRank: 24,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'short',
      coatPattern: 'solid',
      coatTexture: 'smooth',
      primaryColor: '#484A4E',
      secondaryColor: '#2E3033',
      accentColor: '#76797F',
      eyeColor: '#5B3A1B',
      noseColor: '#19191B',
      tailStyle: 'sabre',
      plateNumber: '24',
    },
    gaitSpeedKmh: 40,
    strideFrequency: 'Trot allongé et puissant',
    fciGroup: 'Groupe 2 · Molossoïdes',
  },
  {
    id: 'beagle',
    name: 'Beagle',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Angleterre',
    history:
      'Chien courant de petite taille utilisé depuis le Moyen Âge pour chasser le lièvre à pied en meute. Le nom viendrait du vieux français « begueule » (grande gueule, pour sa voix puissante) ou du celte « beag » (petit).',
    physicalDescription:
      'Petit chien courant trapu et robuste, au crâne légèrement bombé, grands yeux bruns doux, longues oreilles tombantes arrondies et queue portée gaiement à extrémité blanche.',
    coatColors: ['Tricolore (noir, feu, blanc)', 'Bicolore (citron et blanc)', 'Lièvre et blanc'],
    heightAvg: '33 – 40 cm',
    heightRangeCm: [33, 40],
    weightAvg: '10 – 18 kg',
    weightRangeKg: [10, 18],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Amical', 'Curieux', 'Gai', 'Gourmand'],
    temperamentSummary:
      'Chien de meute ultra sociable, doux, joyeux et dépourvu d’agressivité, mais gouverné par son flair extraordinaire.',
    behaviorWithChildren:
      'Excellent compagnon de jeu pour les enfants grâce à sa robustesse et sa gentillesse.',
    behaviorWithAnimals:
      'Adore vivre avec d’autres chiens ; peut suivre avec enthousiasme la piste d’un chat ou lapin inconnu.',
    intelligenceScore: 3,
    intelligenceDetail: 'Très débrouillard pour trouver nourriture et pistes, demande patience pour l’obéissance stricte.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 par jour de balades olfactives ; longe recommandée en zone non clôturée.',
    recommendedDiet:
      'Attention à son appétit vorace : rations pesées et gamelle anti-glouton souvent utiles.',
    coatCare:
      'Poil ras serré très facile à brosser une fois par semaine ; vérifier régulièrement les oreilles tombantes.',
    healthIssues: ['Obésité', 'Otites', 'Hernie discale', 'Épilepsie'],
    idealLivingConditions:
      'Maison avec jardin parfaitement clôturé ou appartement si balades olfactives très généreuses et compagnie canine/humaine.',
    advantagesAndSpecialties:
      'Absence quasi totale d’agressivité, format robuste pratique et joie de vivre communicative.',
    trainingTips:
      'Travailler le rappel très tôt avec des récompenses irrésistibles et pratiquer le mantrailing (recherche de personnes).',
    shortDescription:
      'Chien courant tricolore au flair prodigieux, toujours joyeux, sociable et célèbre dans le monde entier.',
    anecdotes: [
      'Snoopy, le célèbre chien de la bande dessinée Peanuts créée par Charles Schulz, est un Beagle.',
      'Dans de nombreux aéroports internationaux (la « Beagle Brigade »), les Beagles détectent les denrées agricoles illicites sans effrayer les voyageurs.'
    ],
    unusualFacts: [
      'Son odorat compte environ 220 millions de récepteurs olfactifs (contre 5 millions chez l’humain).',
      'Le bout blanc de sa queue servait aux chasseurs à le repérer facilement dans les hautes fougères.'
    ],
    didYouKnow:
      'Charles Darwin embarqua sur le HMS Beagle, navire baptisé en hommage à la race.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['chasse', 'compagnie'],
    popularityRank: 25,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'tricolor',
      coatTexture: 'smooth',
      primaryColor: '#F5F2EB',
      secondaryColor: '#B5622C',
      accentColor: '#1E1C1A',
      eyeColor: '#4A2C14',
      noseColor: '#181615',
      tailStyle: 'sabre',
      plateNumber: '25',
    },
    gaitSpeedKmh: 35,
    strideFrequency: 'Trot libre et régulier',
    fciGroup: 'Groupe 6 · Chiens courants',
  },
  {
    id: 'levrier-afghan',
    name: 'Lévrier afghan',
    originCountry: 'Afghanistan',
    continent: 'Asie',
    originRegion: 'Montagnes d’Afghanistan et Perse',
    history:
      'Race très ancienne originaire des plateaux montagneux afghans où il chassait à vue la gazelle et le léopard des neiges. Son long pelage soyeux le protégeait des nuits glaciales en altitude.',
    physicalDescription:
      'Lévrier élancé et aristocratique à la tête longue couronnée d’un toupet soyeux, regard oriental légèrement oblique et longue robe soyeuse flottant au vent.',
    coatColors: ['Sable doré', 'Crème', 'Noir', 'Bleu', 'Bringé', 'Domino'],
    heightAvg: '63 – 74 cm',
    heightRangeCm: [63, 74],
    weightAvg: '23 – 28 kg',
    weightRangeKg: [23, 28],
    lifespan: '12 – 14 ans',
    lifespanRangeYears: [12, 14],
    temperament: ['Indépendant', 'Digne', 'Sensible', 'Rapide'],
    temperamentSummary:
      'Majestueux et un brin distant avec les inconnus, mais très attaché et parfois espiègle en privé avec son cercle intime.',
    behaviorWithChildren:
      'Calme et poli avec des enfants doux qui ne tirent pas son pelage.',
    behaviorWithAnimals:
      'Fort instinct de poursuite à vue envers tout petit animal qui court.',
    intelligenceScore: 3,
    intelligenceDetail: 'Esprit indépendant et sélectif : n’obéit pas machinalement.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      'A besoin de courir librement à pleine vitesse dans un parc sécurisé et clos plusieurs fois par semaine, en plus des balades quotidiennes.',
    recommendedDiet:
      'Alimentation digeste de haute qualité soutenant la peau et le manteau soyeux.',
    coatCare:
      'Entretien exigeant : brossage et démêlage complets plusieurs fois par semaine, bains réguliers pour préserver la soie du poil.',
    healthIssues: ['Sensibilité aux anesthésiques (faible masse grasse)', 'Cataracte', 'Chylothorax'],
    idealLivingConditions:
      'Foyer calme offrant accès régulier à des terrains clos pour ses sprints et appréciant le toilettage.',
    advantagesAndSpecialties:
      'Élégance incomparable au galop, discrétion et absence d’odeur corporelle.',
    trainingTips:
      'Patience extrême, douceur et récompenses valorisantes ; éviter le lâcher en zone non clôturée près des routes.',
    shortDescription:
      'Aristocrate des sommets afghans drapé d’une soie majestueuse, alliant allure impériale et vitesse fulgurante.',
    anecdotes: [
      'Pablo Picasso possédait un Lévrier afghan nommé Kaboul qui lui inspira plusieurs esquisses et sculptures.',
      'En 2005, le premier chien cloné au monde, nommé Snuppy, était un Lévrier afghan né en Corée du Sud.'
    ],
    unusualFacts: [
      'Ses hanches très mobiles lui permettent de négocier des virages serrés sur terrains rocheux en pleine course.',
      'Le poil ras sur le dos (« selle ») contraste naturellement avec les longues franges des flancs et pattes.'
    ],
    didYouKnow:
      'Les poils longs retombant sur ses oreilles étaient parfois attachés par un « snood » lors des repas pour éviter de les salir.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['chasse', 'sportifs', 'grande-taille'],
    popularityRank: 26,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'long',
      coatPattern: 'masked',
      coatTexture: 'silky',
      primaryColor: '#DFB676',
      secondaryColor: '#F3DFB4',
      accentColor: '#3B2D22',
      eyeColor: '#482D16',
      noseColor: '#1B1816',
      tailStyle: 'curled',
      plateNumber: '26',
    },
    gaitSpeedKmh: 62,
    strideFrequency: 'Galop aérien de très haute vitesse',
    fciGroup: 'Groupe 10 · Lévriers',
  },
  {
    id: 'basenji',
    name: 'Basenji',
    originCountry: 'République démocratique du Congo',
    continent: 'Afrique',
    originRegion: 'Bassin du fleuve Congo',
    history:
      'L’une des races les plus anciennes de la planète, représentée sur des tombeaux égyptiens dès 2000 av. J.-C. Redécouvert au XIXe siècle en Afrique centrale, il guidait les chasseurs dans la forêt en portant une clochette en bois autour du cou.',
    physicalDescription:
      'Petit chien primitif carré, fin et musclé, au front plissé, grandes oreilles dressées, pelage ras luisant et queue enroulée serrée sur la croupe.',
    coatColors: ['Roux et blanc', 'Noir et blanc', 'Tricolore', 'Bringé et blanc'],
    heightAvg: '40 – 43 cm',
    heightRangeCm: [40, 43],
    weightAvg: '9,5 – 11 kg',
    weightRangeKg: [9.5, 11],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Silencieux', 'Curieux', 'Indépendant', 'Propre'],
    temperamentSummary:
      'Surnommé « le chien qui n’aboie pas », curieux, vif, félin dans sa propreté et très attaché à son groupe tout en gardant son libre arbitre.',
    behaviorWithChildren:
      'Joueur avec les enfants calmes et respectueux.',
    behaviorWithAnimals:
      'Instinct de chasse fort envers petits rongeurs ou oiseaux ; s’entend bien avec d’autres chiens primitifs.',
    intelligenceScore: 4,
    intelligenceDetail: 'Très rusé et observateur (capable d’ouvrir portes ou loquets), indépendant dans l’obéissance.',
    activityScore: 4,
    energyLevel: 'Élevé',
    exerciseNeeds:
      '1h30 d’activité par jour, idéalement course en enclos sécurisé ou poursuite à vue sur leurre.',
    recommendedDiet:
      'Alimentation équilibrée de haute qualité.',
    coatCare:
      'Extrêmement propre, il se lèche comme un chat et n’a presque aucune odeur ; coup de gant hebdomadaire.',
    healthIssues: ['Syndrome de Fanconi (dépistage ADN disponible)', 'Atrophie rétinienne'],
    idealLivingConditions:
      'Maître averti, clôtures hautes et environnement sécurisé (excellent grimpeur) ; apprécie la chaleur.',
    advantagesAndSpecialties:
      'Aucun aboiement, propreté féline, absence totale d’odeur et charme primitif unique.',
    trainingTips:
      'Séances courtes, ludiques et variées avec récompenses motivantes ; sécuriser systématiquement ses sorties.',
    shortDescription:
      'Chien millénaire d’Afrique centrale célèbre pour ne jamais aboyer et faire sa toilette tel un chat.',
    anecdotes: [
      'S’il n’aboie pas en raison de la conformation particulière de son larynx, il émet un son mélodieux unique appelé le « yodel du Basenji » lorsqu’il est ravi.',
      'Le terme « Basenji » vient d’une langue bantoue signifiant « créature des brousses ».'
    ],
    unusualFacts: [
      'Contrairement à presque tous les chiens domestiques, la femelle Basenji n’a généralement qu’un seul cycle de chaleurs par an, à l’automne.',
      'Il est capable de grimper sur des clôtures grillagées avec une agilité étonnante.'
    ],
    didYouKnow:
      'Des études génétiques du génome canin confirment que le Basenji appartient au groupe basal des lignées canines les plus anciennes.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['chasse', 'sportifs', 'compagnie'],
    popularityRank: 27,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#C25F2A',
      secondaryColor: '#F7F4ED',
      accentColor: '#91421A',
      eyeColor: '#482B16',
      noseColor: '#191716',
      tailStyle: 'curled',
      plateNumber: '27',
    },
    gaitSpeedKmh: 44,
    strideFrequency: 'Trot allongé très élastique',
    fciGroup: 'Groupe 5 · Chiens de type primitif',
  },
  {
    id: 'basset-hound',
    name: 'Basset Hound',
    originCountry: 'Royaume-Uni / France',
    continent: 'Europe',
    originRegion: 'France (Artois) puis Grande-Bretagne',
    history:
      'Issu des anciens bassets français (notamment le Basset d’Artois) croisés au XIXe siècle en Angleterre avec le Chien de Saint-Hubert pour accentuer son flair et sa charpente basse destinée à la chasse à pied.',
    physicalDescription:
      'Chien court sur pattes au corps long et lourd, peau lâche plissée, yeux doux aux paupières inférieures légèrement tombantes et immenses oreilles veloutées.',
    coatColors: ['Tricolore (noir, blanc, feu)', 'Bicolore (citron et blanc)'],
    heightAvg: '33 – 38 cm',
    heightRangeCm: [33, 38],
    weightAvg: '20 – 29 kg',
    weightRangeKg: [20, 29],
    lifespan: '10 – 12 ans',
    lifespanRangeYears: [10, 12],
    temperament: ['Placide', 'Affectueux', 'Têtu', 'Sociable'],
    temperamentSummary:
      'Calme à la maison, doux et très attachant, mais doté d’une détermination immuable dès qu’il suit une odeur.',
    behaviorWithChildren:
      'Très patient et gentil avec les enfants.',
    behaviorWithAnimals:
      'Chien de meute très sociable avec les autres chiens et animaux familiers.',
    intelligenceScore: 3,
    intelligenceDetail: 'Flair hors du commun, obéissance plutôt lente et réfléchie.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '45 minutes à 1h de marche quotidienne à son rythme, en évitant escaliers répétés et sauts.',
    recommendedDiet:
      'Ration stricte pour prévenir l’embonpoint qui solliciterait excessivement sa colonne vertébrale.',
    coatCare:
      'Brossage hebdomadaire du poil court et nettoyage régulier des plis et des longues oreilles.',
    healthIssues: ['Hernie discale', 'Otites chroniques', 'Torsion gastrique', 'Glaucome'],
    idealLivingConditions:
      'Logement de plain-pied ou ascenseur afin de préserver son dos long.',
    advantagesAndSpecialties:
      'Deuxième meilleur odorat du monde canin après le Chien de Saint-Hubert, tempérament paisible et voix grave mélodieuse.',
    trainingTips:
      'Patience et humour indispensables ; récompenses alimentaires et harnais confortable.',
    shortDescription:
      'Chien courant à l’allure inimitable et aux longues oreilles veloutées, calme au foyer et doté d’un flair légendaire.',
    anecdotes: [
      'Le chien de l’inspecteur Columbo dans la célèbre série télévisée était un Basset Hound nommé « Chien ».',
      'George Washington possédait des Bassets offerts par le marquis de La Fayette après la Révolution américaine.'
    ],
    unusualFacts: [
      'Ses longues oreilles et ses plis faciaux retiennent littéralement les odeurs autour de sa truffe lorsqu’il renifle le sol.',
      'Malgré ses pattes courtes, c’est un chien lourd et musclé pouvant peser près de 30 kg.'
    ],
    didYouKnow:
      'Le mot « Basset » vient directement du français « bas », soulignant sa faible hauteur au garrot.',
    sizeCategory: 'Moyen',
    coatType: 'Court',
    categories: ['chasse', 'compagnie'],
    popularityRank: 28,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'wrinkled',
      coatPattern: 'tricolor',
      coatTexture: 'smooth',
      primaryColor: '#F4F1EA',
      secondaryColor: '#A95929',
      accentColor: '#1E1C1A',
      eyeColor: '#482813',
      noseColor: '#171615',
      tailStyle: 'sabre',
      plateNumber: '28',
    },
    gaitSpeedKmh: 24,
    strideFrequency: 'Pas posés, lourds et endurants',
    fciGroup: 'Groupe 6 · Chiens courants',
  },
  {
    id: 'terre-neuve',
    name: 'Terre-Neuve',
    originCountry: 'Canada',
    continent: 'Amérique du Nord',
    originRegion: 'Île de Terre-Neuve',
    history:
      'Compagnon des pêcheurs de morue sur l’île canadienne de Terre-Neuve depuis le XVIIIe siècle, il tirait les lourds filets glacés, remorquait les barques et sauvait les marins tombés à la mer.',
    physicalDescription:
      'Géant puissant à l’ossature massive, large tête rassurante, double fourrure dense et huileuse parfaitement imperméable et pattes palmées.',
    coatColors: ['Noir', 'Marron', 'Landseer (blanc et noir)'],
    heightAvg: '66 – 71 cm',
    heightRangeCm: [66, 71],
    weightAvg: '50 – 70 kg',
    weightRangeKg: [50, 70],
    lifespan: '8 – 10 ans',
    lifespanRangeYears: [8, 10],
    temperament: ['Doux', 'Courageux', 'Dévoué', 'Calme'],
    temperamentSummary:
      'Douceur légendaire : pacifique, patient, protecteur instinctif des personnes en difficulté dans l’eau.',
    behaviorWithChildren:
      'Considéré comme une véritable « nounou » bienveillante auprès des enfants.',
    behaviorWithAnimals:
      'Très tolérant et amical avec chiens, chats et autres animaux.',
    intelligenceScore: 4,
    intelligenceDetail: 'Grand sens de l’initiative en sauvetage nautique.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h de marche tranquille quotidienne et, idéalement, baignades régulières qui soulagent ses articulations.',
    recommendedDiet:
      'Alimentation pour races géantes avec croissance surveillée et deux repas fractionnés.',
    coatCare:
      'Brossage approfondi 3 fois par semaine pour aérer son épais sous-poil et prévenir les nœuds.',
    healthIssues: ['Dysplasie de la hanche et du coude', 'Sténose sous-aortique', 'Torsion gastrique'],
    idealLivingConditions:
      'Maison avec espace et accès facile à des plans d’eau ; souffre des étés très chauds.',
    advantagesAndSpecialties:
      'Nageur d’élite capable de tracter plusieurs personnes dans une mer agitée.',
    trainingTips:
      'Éducation douce dès chiot pour la marche en laisse et l’initiation au sauvetage à l’eau.',
    shortDescription:
      'Colosse canadien aux pattes palmées, sauveteur aquatique intrépide au tempérament d’une infinie douceur.',
    anecdotes: [
      'En 1815, un Terre-Neuve sauta à la mer pour sauver Napoléon Bonaparte tombé à l’eau lors de son évasion de l’île d’Elbe.',
      'Le personnage de Nana, la chienne nounou dans Peter Pan, est inspiré d’un Terre-Neuve (ou Landseer).'
    ],
    unusualFacts: [
      'Il ne nage pas en « chien » classique mais effectue un mouvement puissant de brasse grâce à ses larges pattes palmées.',
      'Son pelage produit un sébum naturel qui empêche l’eau glacée d’atteindre sa peau.'
    ],
    didYouKnow:
      'Un Terre-Neuve entraîné peut tracter dans l’eau un bateau de pêche ou plusieurs nageurs sur plus d’un kilomètre.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['travail', 'compagnie', 'grande-taille'],
    popularityRank: 29,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#1B1A19',
      secondaryColor: '#363432',
      accentColor: '#56514C',
      eyeColor: '#3A2314',
      noseColor: '#141312',
      tailStyle: 'plume',
      plateNumber: '29',
    },
    gaitSpeedKmh: 30,
    strideFrequency: 'Foulée ample et souple malgré le poids',
    fciGroup: 'Groupe 2 · Molossoïdes de type montagne',
  },
  {
    id: 'berger-australien',
    name: 'Berger australien',
    originCountry: 'États-Unis',
    continent: 'Amérique du Nord',
    originRegion: 'Ouest américain (Californie / Colorado)',
    history:
      'Contrairement à son nom, la race a été développée aux États-Unis au XIXe siècle à partir de chiens de berger basques venus d’Espagne via l’Australie avec les troupeaux de moutons mérinos, puis sélectionnée dans les ranchs de l’Ouest américain.',
    physicalDescription:
      'Chien de taille moyenne bien proportionné, à la robe mi-longue flamboyante souvent merle ou tricolore, aux yeux parfois bleus, ambre ou particolores et à la queue naturellement courte ou longue.',
    coatColors: ['Bleu merle', 'Rouge merle', 'Noir tricolore', 'Rouge tricolore'],
    heightAvg: '46 – 58 cm',
    heightRangeCm: [46, 58],
    weightAvg: '18 – 30 kg',
    weightRangeKg: [18, 30],
    lifespan: '12 – 15 ans',
    lifespanRangeYears: [12, 15],
    temperament: ['Enthousiaste', 'Intelligent', 'Attaché', 'Sportif'],
    temperamentSummary:
      'Polyvalent, fusionnel avec son foyer, très joueur, attentif et toujours prêt pour l’aventure.',
    behaviorWithChildren:
      'Très complice et dynamique avec les enfants ; surveiller l’instinct de conduite du troupeau.',
    behaviorWithAnimals:
      'Sociable s’il est bien habitué dès chiot.',
    intelligenceScore: 5,
    intelligenceDetail: 'Apprend très vite en agility, obéissance rythmée, frisbee et recherche.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      '1h30 à 2h quotidiennes d’activité physique et de stimulation mentale.',
    recommendedDiet:
      'Croquettes équilibrées riches en protéines et acides gras pour chiens actifs.',
    coatCare:
      'Brossage 2 fois par semaine (plus fréquent sur la culotte et derrière les oreilles).',
    healthIssues: ['Sensibilité médicamenteuse MDR1', 'Anomalie de l’œil (AOC / cataracte)', 'Dysplasie'],
    idealLivingConditions:
      'Maître actif et présent, maison ou appartement avec nombreuses activités sportives.',
    advantagesAndSpecialties:
      'Beauté des robes merles, polyvalence sportive et attachement familial profond.',
    trainingTips:
      'Ne jamais marier deux chiens merles ensemble en élevage (risque grave de surdité/cécité) ; canaliser son énergie par l’apprentissage du calme.',
    shortDescription:
      'Faussement australien mais authentique star des ranchs américains, célèbre pour ses robes merles et sa vitalité.',
    anecdotes: [
      'Dans les rodéos américains des années 1950, des Bergers australiens réalisaient des démonstrations acrobatiques spectaculaires.',
      'Certains individus naissent naturellement avec une queue courte (anoure ou brachyoure).'
    ],
    unusualFacts: [
      'Un même œil de Berger australien peut être « particolore » : moitié bleu, moitié marron.',
      'Il figure parmi les races préférées en France pour sa polyvalence familiale et sportive.'
    ],
    didYouKnow:
      'Ses ancêtres venaient du Pays basque avant de transiter par l’Australie vers la Californie.',
    sizeCategory: 'Moyen',
    coatType: 'Mi-long',
    categories: ['berger', 'sportifs', 'compagnie'],
    popularityRank: 30,
    morpho: {
      earStyle: 'semi-erect',
      muzzleStyle: 'medium',
      coatPattern: 'merle',
      coatTexture: 'fluffy',
      primaryColor: '#8B949D',
      secondaryColor: '#B56B3B',
      accentColor: '#F5F3EE',
      eyeColor: '#56A4DA',
      noseColor: '#2A221F',
      tailStyle: 'docked-short',
      plateNumber: '30',
    },
    gaitSpeedKmh: 46,
    strideFrequency: 'Foulée souple et agile',
    fciGroup: 'Groupe 1 · Chiens de berger et de bouvier',
  },
  {
    id: 'bouvier-bernois',
    name: 'Bouvier bernois',
    originCountry: 'Suisse',
    continent: 'Europe',
    originRegion: 'Canton de Berne',
    history:
      'Ancien chien de ferme suisse issu des montagnes autour de Berne, il gardait les fermes, conduisait les vaches laitières et tirait les charrettes de fromage vers les marchés villageois.',
    physicalDescription:
      'Grand chien tricolore robuste et harmonieux à la fourrure longue et lustrée noir de jais, marquée de feu roux aux joues et pattes et de blanc pur sur le poitrail et le chanfrein.',
    coatColors: ['Tricolore (noir, feu roux et blanc)'],
    heightAvg: '58 – 70 cm',
    heightRangeCm: [58, 70],
    weightAvg: '36 – 52 kg',
    weightRangeKg: [36, 52],
    lifespan: '7 – 9 ans',
    lifespanRangeYears: [7, 9],
    temperament: ['Tendre', 'Calme', 'Fidèle', 'Doux'],
    temperamentSummary:
      'Chien de famille par excellence : affectueux, posé, attentif aux émotions humaines et très attaché à son foyer.',
    behaviorWithChildren:
      'Merveilleusement doux et patient avec les enfants.',
    behaviorWithAnimals:
      'Très sociable avec les chiens, chats et animaux de ferme.',
    intelligenceScore: 4,
    intelligenceDetail: 'Sensible et appliqué, demande de la douceur.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h à 1h15 de balade quotidienne tranquille ; affectionne la fraîcheur et les randonnées modérées.',
    recommendedDiet:
      'Alimentation haute qualité pour grandes races afin de soutenir articulations et longévité.',
    coatCare:
      'Brossage 2 à 3 fois par semaine pour entretenir le long poil luisant et limiter les nœuds.',
    healthIssues: ['Sarcome histiocytaire', 'Dysplasie de la hanche et du coude', 'Torsion gastrique'],
    idealLivingConditions:
      'Maison avec jardin frais et vie à l’intérieur près des maîtres.',
    advantagesAndSpecialties:
      'Tempérament d’or, robe tricolore spectaculaire et calme naturel.',
    trainingTips:
      'Éducation positive douce et précoce ; éviter tout entraînement brusque qui le rendrait craintif.',
    shortDescription:
      'Grand cœur tricolore des campagnes bernoises, alliant force calme, tendresse familiale et fidélité.',
    anecdotes: [
      'Il porte le surnom suisse alémanique de « Dürrbächler », d’après une auberge bernoise où la race était particulièrement élevée.',
      'Sa robe tricolore suit un dessin symétrique très codifié, avec la « croix suisse » blanche sur le poitrail.'
    ],
    unusualFacts: [
      'Il met du temps à atteindre sa maturité psychologique, restant très chiot dans sa tête jusqu’à 2 ans.',
      'Il adore la neige et les activités de traction légère (attelage sur petite charrette).'
    ],
    didYouKnow:
      'Le Bouvier bernois est l’une des quatre variétés de bouviers suisses, et la seule à poil long.',
    sizeCategory: 'Grand',
    coatType: 'Long',
    categories: ['berger', 'travail', 'compagnie', 'grande-taille'],
    popularityRank: 31,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'medium',
      coatPattern: 'tricolor',
      coatTexture: 'fluffy',
      primaryColor: '#191918',
      secondaryColor: '#B85A26',
      accentColor: '#FAF8F4',
      eyeColor: '#482B16',
      noseColor: '#141312',
      tailStyle: 'plume',
      plateNumber: '31',
    },
    gaitSpeedKmh: 34,
    strideFrequency: 'Trot souple et assuré',
    fciGroup: 'Groupe 2 · Bouviers suisses',
  },
  {
    id: 'cavalier-king-charles',
    name: 'Cavalier King Charles Spaniel',
    originCountry: 'Royaume-Uni',
    continent: 'Europe',
    originRegion: 'Angleterre',
    history:
      'Issu des petits épagneuls de salon adorés des rois Charles Ier et Charles II d’Angleterre au XVIIe siècle. La variété moderne au museau plus long fut recréée dans les années 1920 d’après les tableaux d’époque de Van Dyck.',
    physicalDescription:
      'Petit épagneul gracieux aux grands yeux ronds sombres pleins de douceur, oreilles longues frangées et pelage soyeux plat ou légèrement ondulé.',
    coatColors: ['Blenheim (blanc et châtain)', 'Tricolore', 'Noir et feu', 'Ruby (rouge uni)'],
    heightAvg: '30 – 33 cm',
    heightRangeCm: [30, 33],
    weightAvg: '5,4 – 8 kg',
    weightRangeKg: [5.4, 8],
    lifespan: '10 – 14 ans',
    lifespanRangeYears: [10, 14],
    temperament: ['Tendre', 'Doux', 'Sociable', 'Adaptable'],
    temperamentSummary:
      'D’une gentillesse désarmante, sans aucune agressivité, il s’adapte aussi bien au rythme d’une famille animée qu’à celui d’une personne âgée.',
    behaviorWithChildren:
      'Compagnon modèle, doux et joueur avec les enfants.',
    behaviorWithAnimals:
      'S’entend à merveille avec tous les chiens et chats.',
    intelligenceScore: 4,
    intelligenceDetail: 'Facile à éduquer par la douceur et l’affection.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '45 minutes à 1h de balade par jour ; aime courir au parc tout en sachant rester calme sur le canapé.',
    recommendedDiet:
      'Croquettes pour petits chiens évitant la prise de poids.',
    coatCare:
      'Brossage 3 fois par semaine sur les oreilles et franges ; ne nécessite pas de coupe.',
    healthIssues: ['Maladie valvulaire mitrale (suivi cardiologique annuel conseillé)', 'Syringomyélie'],
    idealLivingConditions:
      'Appartement ou maison avec présence humaine régulière.',
    advantagesAndSpecialties:
      'Douceur universelle, facilité d’éducation pour un premier chien et regard irrésistible.',
    trainingTips:
      'Travailler la solitude progressivement et utiliser la voix douce et les câlins.',
    shortDescription:
      'Petit épagneul royal britannique au regard tendre, compagnon d’une douceur et d’une sociabilité exceptionnelles.',
    anecdotes: [
      'La robe « Blenheim » tient son nom du palais de Blenheim du duc de Marlborough, où une tache châtain sur le sommet du crâne (« la marque de la duchesse ») est très prisée.',
      'Selon une tradition historique, le roi Charles II autorisait ses épagneuls à entrer dans tous les édifices publics de Londres.'
    ],
    unusualFacts: [
      'Malgré son allure de petit chien de salon, il conserve un instinct d’épagneul et adore courir après les papillons.',
      'Sa queue reste constamment en mouvement amical.'
    ],
    didYouKnow:
      'Le King Charles Spaniel (à face plate) et le Cavalier King Charles sont deux races distinctes.',
    sizeCategory: 'Petit',
    coatType: 'Mi-long',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 32,
    morpho: {
      earStyle: 'feathered',
      muzzleStyle: 'medium',
      coatPattern: 'bicolor',
      coatTexture: 'silky',
      primaryColor: '#FAF7F0',
      secondaryColor: '#A94D22',
      accentColor: '#C56A36',
      eyeColor: '#251710',
      noseColor: '#191614',
      tailStyle: 'plume',
      plateNumber: '32',
    },
    gaitSpeedKmh: 26,
    strideFrequency: 'Allure libre et élégante',
    fciGroup: 'Groupe 9 · Épagneuls anglais d’agrément',
  },
  {
    id: 'jack-russell-terrier',
    name: 'Jack Russell Terrier',
    originCountry: 'Royaume-Uni / Australie',
    continent: 'Europe',
    originRegion: 'Devon (Angleterre)',
    history:
      'Sélectionné au XIXe siècle par le pasteur John (« Jack ») Russell dans le Devon pour suivre les chevaux lors de la chasse au renard et déloger le gibier des terriers. La race fut standardisée plus tard en Australie.',
    physicalDescription:
      'Petit terrier agile au corps légèrement plus long que haut, poitrine étroite flexible, robe majoritairement blanche marquée de fauve et/ou noir, en poil lisse, rude ou « broken ».',
    coatColors: ['Blanc avec marques feu et/ou noires'],
    heightAvg: '25 – 30 cm',
    heightRangeCm: [25, 30],
    weightAvg: '5 – 6 kg',
    weightRangeKg: [5, 6],
    lifespan: '13 – 16 ans',
    lifespanRangeYears: [13, 16],
    temperament: ['Intrépide', 'Hyper-actif', 'Malin', 'Joyeux'],
    temperamentSummary:
      'Un concentré d’énergie et d’audace dans un petit corps : intelligent, vif, déterminé et infatigable.',
    behaviorWithChildren:
      'Très bon compagnon de jeux actifs avec les enfants respectueux.',
    behaviorWithAnimals:
      'Forte réactivité face aux petits rongeurs ; socialisation poussée nécessaire envers les autres chiens.',
    intelligenceScore: 4,
    intelligenceDetail: 'Comprend tout à toute vitesse, adore résoudre des énigmes et apprendre des tours.',
    activityScore: 5,
    energyLevel: 'Très élevé',
    exerciseNeeds:
      'Au moins 1h30 à 2h quotidiennes de vraies dépenses (agility, pistage, jeu de balle, course).',
    recommendedDiet:
      'Alimentation riche et équilibrée adaptée aux petits chiens très sportifs.',
    coatCare:
      'Brossage hebdomadaire pour le poil lisse ; épilation trimestrielle pour le poil dur.',
    healthIssues: ['Luxation du cristallin', 'Luxation de la rotule', 'Surdité possible sur robe très blanche'],
    idealLivingConditions:
      'Foyer sportif et dynamique capable de canaliser son énergie ; jardin clos obligatoire (excellent sauteur et creuseur).',
    advantagesAndSpecialties:
      'Longévité robuste, taille pratique et talent spectaculaire au cinéma et en agility.',
    trainingTips:
      'Fermeté bienveillante dès le premier jour et apprentissage impératif du retour au calme.',
    shortDescription:
      'Petit terrier britannique débordant d’audace et de ressort, infatigable complice des sportifs et des joueurs.',
    anecdotes: [
      'Un Jack Russell nommé Uggie remporta la Palme Dog à Cannes et brilla dans le film oscarisé « The Artist ».',
      'Il est capable de bondir à plus de cinq fois sa propre hauteur au garrot.'
    ],
    unusualFacts: [
      'Sa poitrine devait historiquement pouvoir être enserrée par deux mains d’homme pour lui permettre d’entrer dans les terriers de renard.',
      'Le Parson Russell Terrier est la variété sœur plus haute sur pattes.'
    ],
    didYouKnow:
      'La robe doit impérativement comporter plus de 51 % de blanc afin d’être visible à la sortie des terriers.',
    sizeCategory: 'Petit',
    coatType: 'Court',
    categories: ['chasse', 'sportifs', 'petite-taille'],
    popularityRank: 33,
    morpho: {
      earStyle: 'button',
      muzzleStyle: 'medium',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#FAF8F4',
      secondaryColor: '#C56D2C',
      accentColor: '#1E1B18',
      eyeColor: '#291910',
      noseColor: '#161515',
      tailStyle: 'sabre',
      plateNumber: '33',
    },
    gaitSpeedKmh: 38,
    strideFrequency: 'Trot rapide et bondissant',
    fciGroup: 'Groupe 3 · Terriers',
  },
  {
    id: 'teckel',
    name: 'Teckel (Dachshund)',
    originCountry: 'Allemagne',
    continent: 'Europe',
    originRegion: 'Allemagne',
    history:
      'Élevé en Allemagne dès le Moyen Âge (« Dachshund » signifie « chien à blaireau ») pour pister et déterrer blaireaux et renards dans leurs galeries souterraines. Décliné en trois tailles (Standard, Nain, Kaninchen) et trois poils (ras, long, dur).',
    physicalDescription:
      'Silhouette basse et allongée caractéristique, pattes courtes mais musclées, poitrail proéminent, museau conique et regard vif.',
    coatColors: ['Noir et feu', 'Fauve rouge', 'Arlequin (merle)', 'Sanglier (poil dur)', 'Chocolat'],
    heightAvg: '15 – 27 cm',
    heightRangeCm: [15, 27],
    weightAvg: '3,5 – 9 kg',
    weightRangeKg: [3.5, 9],
    lifespan: '12 – 16 ans',
    lifespanRangeYears: [12, 16],
    temperament: ['Ténace', 'Courageux', 'Malin', 'Attaché'],
    temperamentSummary:
      'Grand chien dans un corps bas : intrépide, fidèle, parfois entêté, très joueur et excellent petit gardien d’alerte.',
    behaviorWithChildren:
      'Affectueux avec les enfants calmes ; enseigner comment le porter horizontalement en soutenant le dos.',
    behaviorWithAnimals:
      'Bon camarade avec les autres chiens ; fort instinct de poursuite sur petits animaux.',
    intelligenceScore: 4,
    intelligenceDetail: 'Fin stratège capable de ruser, aime le travail olfactif et le pistage.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '1h de marche quotidienne sur terrain plat en évitant les sauts répétés (canapé/escaliers).',
    recommendedDiet:
      'Alimentation contrôlée pour préserver impérativement sa colonne vertébrale de tout surpoids.',
    coatCare:
      'Minimal pour poil ras, brossage régulier pour poil long, épilation saisonnière pour poil dur.',
    healthIssues: ['Hernie discale (protéger le dos)', 'Tartre dentaire'],
    idealLivingConditions:
      'Appartement ou maison de plain-pied (rampes recommandées pour accéder au canapé).',
    advantagesAndSpecialties:
      'Neuf combinaisons possibles (3 tailles × 3 poils), grande longévité et courage remarquable.',
    trainingTips:
      'Éducation cohérente dès le plus jeune âge sans céder à ses regards attendrissants.',
    shortDescription:
      'Saucisse athlétique allemande au courage de lion, déclinée en poil ras, long ou dur pour tous les foyers.',
    anecdotes: [
      'Un Teckel nommé Waldi fut la toute première mascotte officielle des Jeux olympiques modernes, à Munich en 1972.',
      'Le peintre Pablo Picasso possédait aussi un Teckel nommé Lump, immortalité dans ses toiles de Vallauris.'
    ],
    unusualFacts: [
      'Sa queue épaisse servait jadis de « poignée » aux chasseurs pour l’aider à ressortir d’un terrier étroit.',
      'Les Teckels Kaninchen (lapins) pèsent moins de 3,5 kg et mesurent moins de 30 cm de tour de poitrine.'
    ],
    didYouKnow:
      'En allemand, « Dachs » signifie blaireau et « Hund » chien.',
    sizeCategory: 'Petit',
    coatType: 'Court',
    categories: ['chasse', 'compagnie', 'petite-taille'],
    popularityRank: 34,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'long',
      coatPattern: 'bicolor',
      coatTexture: 'smooth',
      primaryColor: '#1E1C1A',
      secondaryColor: '#C56A2B',
      accentColor: '#DC8544',
      eyeColor: '#3B2314',
      noseColor: '#161515',
      tailStyle: 'sabre',
      plateNumber: '34',
    },
    gaitSpeedKmh: 25,
    strideFrequency: 'Trot vif et fluide près du sol',
    fciGroup: 'Groupe 4 · Teckels',
  },
  {
    id: 'spitz-nain-pomeranien',
    name: 'Spitz nain (Poméranien)',
    originCountry: 'Allemagne / Pologne',
    continent: 'Europe',
    originRegion: 'Poméranie (rive baltique)',
    history:
      'Descendant des anciens chiens nordiques de traîneau et de garde européens (Spitz allemands), il fut miniaturisé en Poméranie puis popularisé en Angleterre par la reine Victoria à la fin du XIXe siècle.',
    physicalDescription:
      'Boule de poils minuscule et vivace, tête de renard aux petites oreilles dressées, collerette opulente et queue en panache portée sur le dos.',
    coatColors: ['Orange', 'Crème', 'Noir', 'Blanc', 'Sable zibeline', 'Bleu merle'],
    heightAvg: '18 – 24 cm',
    heightRangeCm: [18, 24],
    weightAvg: '1,8 – 3,5 kg',
    weightRangeKg: [1.8, 3.5],
    lifespan: '12 – 16 ans',
    lifespanRangeYears: [12, 16],
    temperament: ['Vif', 'Extraverti', 'Vigilant', 'Attaché'],
    temperamentSummary:
      'Audacieux, joyeux, très alerte et parfois aboyeur s’il n’est pas canalisé ; convaincu d’être bien plus grand qu’il ne l’est.',
    behaviorWithChildren:
      'Adapté aux enfants calmes capables de manipuler un petit chien délicat.',
    behaviorWithAnimals:
      'Sociable mais prompt à défier des chiens dix fois plus lourds si on ne le guide pas.',
    intelligenceScore: 4,
    intelligenceDetail: 'Très curieux, apprend tours et agilité miniature avec enthousiasme.',
    activityScore: 3,
    energyLevel: 'Modéré',
    exerciseNeeds:
      '30 à 45 minutes de promenade et de jeux d’intérieur quotidiens.',
    recommendedDiet:
      'Croquettes très petites riches en oméga-3 et protéines pour nourrir sa dense fourrure.',
    coatCare:
      'Brossage 2 à 3 fois par semaine jusqu’au sous-poil ; ne jamais raser à ras au risque d’abîmer durablement la repousse (alopécie X).',
    healthIssues: ['Luxation de la rotule', 'Alopécie X', 'Collapsus trachéal'],
    idealLivingConditions:
      'Parfait en appartement, aime vivre au cœur de la famille.',
    advantagesAndSpecialties:
      'Allure de petit renard duveteux, très peu sensible aux intempéries grâce au sous-poil et belle longévité.',
    trainingTips:
      'Apprendre tôt le silence sur commande pour limiter les aboiements d’alerte.',
    shortDescription:
      'Petit spitz duveteux à frimousse de renard, pétillant, fidèle et doté d’une présence étonnante.',
    anecdotes: [
      'La reine Victoria possédait plus de 30 Spitz de Poméranie et imposa la mode du format miniature.',
      'Deux Spitz nains figurèrent parmi les trois seuls chiens rescapés du naufrage du Titanic en 1912.'
    ],
    unusualFacts: [
      'Il partage les mêmes ancêtres nordiques que le Samoyède et le Malamute, bien qu’il pèse vingt fois moins lourd.',
      'Michel-Ange et Mozart comptaient des Spitz parmi leurs fidèles compagnons.'
    ],
    didYouKnow:
      'Son pelage est constitué de deux couches : un sous-poil laineux très dense qui soutient un long poil de couverture droit.',
    sizeCategory: 'Petit',
    coatType: 'Long',
    categories: ['compagnie', 'petite-taille', 'nordiques'],
    popularityRank: 35,
    morpho: {
      earStyle: 'erect',
      muzzleStyle: 'medium',
      coatPattern: 'solid',
      coatTexture: 'fluffy',
      primaryColor: '#DC7D34',
      secondaryColor: '#F3B46C',
      accentColor: '#9E4B17',
      eyeColor: '#251710',
      noseColor: '#161515',
      tailStyle: 'curled',
      plateNumber: '35',
    },
    gaitSpeedKmh: 22,
    strideFrequency: 'Pas sautillants et vifs',
    fciGroup: 'Groupe 5 · Spitz allemands',
  },
  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    originCountry: 'Chine / Tibet',
    continent: 'Asie',
    originRegion: 'Cité interdite de Pékin',
    history:
      'Élevé pendant des siècles dans les monastères tibétains puis offert aux empereurs de Chine sous la dynastie Ming et Qing, le « chien lion » vivait exclusivement à l’intérieur de la Cité interdite.',
    physicalDescription:
      'Petit chien robuste plus long que haut, à la tête ronde chrysanthème (poils poussant dans toutes les directions sur le chanfrein), museau court et long manteau fluide.',
    coatColors: ['Toutes couleurs admises (or et blanc, noir et blanc, fauve, bringé)'],
    heightAvg: '20 – 27 cm',
    heightRangeCm: [20, 27],
    weightAvg: '4,5 – 7,5 kg',
    weightRangeKg: [4.5, 7.5],
    lifespan: '12 – 16 ans',
    lifespanRangeYears: [12, 16],
    temperament: ['Affectueux', 'Calme', 'Sociable', 'Fier'],
    temperamentSummary:
      'Amical, calme, très attaché à son confort et à sa famille, peu aboyeur et gentil avec les visiteurs.',
    behaviorWithChildren:
      'Doux et patient avec les enfants respectueux.',
    behaviorWithAnimals:
      'Coexiste très pacifiquement avec chats et chiens.',
    intelligenceScore: 3,
    intelligenceDetail: 'Intelligent mais indépendant : apprécie la routine et la douceur.',
    activityScore: 2,
    energyLevel: 'Calme',
    exerciseNeeds:
      '30 à 40 minutes de promenade tranquille par jour ; éviter les coups de chaleur.',
    recommendedDiet:
      'Croquettes adaptées aux mâchoires courtes.',
    coatCare:
      'Brossage quasi quotidien s’il conserve son long manteau impérial, ou tonte courte pratique toutes les 6 à 8 semaines ; nettoyer yeux et moustaches.',
    healthIssues: ['Sensibilité oculaire', 'Syndrome brachycéphale léger', 'Tartre dentaire'],
    idealLivingConditions:
      'Parfait en appartement calme ou maison, convient bien aux familles comme aux seniors.',
    advantagesAndSpecialties:
      'Perd très peu de poils, tempérament paisible et gentillesse constante.',
    trainingTips:
      'Propreté et rappel à enseigner avec constance et friandises dès l’arrivée à la maison.',
    shortDescription:
      '« Chien-lion » des palais impériaux chinois, affectueux, serein et paré d’une somptueuse robe chrysanthème.',
    anecdotes: [
      'En mandarin, « Shih Tzu » signifie littéralement « chien lion » en référence au lion sacré du bouddhisme.',
      'Presque tous les Shih Tzu vivants aujourd’hui descendent de seulement quatorze chiens sauvés de Chine dans les années 1930.'
    ],
    unusualFacts: [
      'Contrairement aux autres races, les poils de son museau poussent vers le haut comme les pétales d’un chrysanthème.',
      'Il faisait office de « bouillotte vivante » aux pieds des membres de la cour impériale.'
    ],
    didYouKnow:
      'Sa queue abondamment frangée est portée gaiement recourbée sur le dos.',
    sizeCategory: 'Petit',
    coatType: 'Long',
    categories: ['compagnie', 'petite-taille'],
    popularityRank: 36,
    morpho: {
      earStyle: 'floppy',
      muzzleStyle: 'bearded',
      coatPattern: 'bicolor',
      coatTexture: 'silky',
      primaryColor: '#FAF7F0',
      secondaryColor: '#B57B45',
      accentColor: '#563D28',
      eyeColor: '#251710',
      noseColor: '#171514',
      tailStyle: 'curled',
      plateNumber: '36',
    },
    gaitSpeedKmh: 20,
    strideFrequency: 'Allure unie et fière',
    fciGroup: 'Groupe 9 · Chiens du Tibet',
  },
];
