import { Article } from '../types/dog';
import { MEDIA_ASSETS } from './mediaAssets';

export const ARTICLES: Article[] = [
  {
    id: 'comment-choisir-son-chien',
    title: 'Comment choisir son chien selon son mode de vie ?',
    category: 'Adoption & Choix',
    readTimeMinutes: 6,
    publishedDate: 'Octobre 2026',
    author: 'Dr Claire Moreau, Éthologue canine',
    excerpt:
      'Au-delà de l’apparence d’un chiot, adopter un chien engage pour 10 à 16 ans. Apprenez à aligner votre rythme quotidien, votre logement et votre expérience avec les vrais besoins de la race.',
    coverPhoto: MEDIA_ASSETS.heroDogsGroup,
    sections: [
      {
        heading: 'Évaluer honnêtement votre temps et votre niveau d’activité',
        body: 'Le critère le plus déterminant n’est pas la superficie de votre salon, mais le temps réel que vous consacrez chaque jour aux sorties, au jeu et à la présence. Un Berger australien ou un Border Collie en maison avec jardin sans balades extérieures s’ennuiera profondément, tandis qu’un Whippet ou un Bouledogue français bien promené s’épanouira sereinement en appartement.'
      },
      {
        heading: 'Comprendre la vocation d’origine de chaque groupe',
        body: 'Chaque race porte dans son patrimoine comportemental le métier pour lequel elle a été sélectionnée : un chien courant suit les pistes olfactives, un berger réagit aux mouvements rapides, un chien nordique recherche l’effort d’endurance et un chien de garde observe son territoire. Choisir en connaissance de cause évite les incompréhensions futures.'
      },
      {
        heading: 'Budgétiser la vie entière du compagnon',
        body: 'Entre une alimentation de qualité, les soins vétérinaires préventifs, l’assurance santé éventuelle, le matériel et le toilettage, le budget annuel varie nettement entre un Chihuahua de 2 kg et un Terre-Neuve de 65 kg. Anticiper ces postes garantit une vie sereine à votre futur compagnon.'
      }
    ],
    keyTakeaways: [
      'Ne choisissez jamais une race uniquement sur son apparence physique.',
      'Adaptez le niveau d’énergie du chien à votre rythme réel en semaine.',
      'Rencontrez plusieurs sujets adultes de la race avant de décider.'
    ]
  },
  {
    id: 'comment-nourrir-correctement-son-chien',
    title: 'Comment nourrir correctement son chien à chaque âge ?',
    category: 'Nutrition',
    readTimeMinutes: 7,
    publishedDate: 'Octobre 2026',
    author: 'Dr Marc Delacroix, Vétérinaire nutritionniste',
    excerpt:
      'Croquettes, ration ménagère ou alimentation mixte : découvrez les principes essentiels d’une nutrition canine équilibrée pour soutenir la croissance, la vitalité et la longévité.',
    coverPhoto: MEDIA_ASSETS.articleDogCare,
    sections: [
      {
        heading: 'Lire attentivement la composition des aliments',
        body: 'Le chien est un carnivore à tendance omnivore : les protéines animales de haute valeur biologique doivent constituer le premier ingrédient de sa ration, accompagnées d’acides gras essentiels (oméga-3 et oméga-6), de fibres digestibles et d’un rapport calcium/phosphore rigoureusement équilibré.'
      },
      {
        heading: 'Adapter les portions à la croissance et à la stérilisation',
        body: 'Un chiot de grande race (Saint-Bernard, Dogue allemand) ne doit jamais grandir trop vite ni recevoir de suppléments calciques non prescrits, sous peine de fragiliser ses articulations. À l’âge adulte, la stérilisation réduit les besoins énergétiques d’environ 20 % : ajuster la gamelle prévient le surpoids.'
      },
      {
        heading: 'Prévenir la torsion gastrique chez les grands chiens',
        body: 'Fractionnez la ration journalière en deux repas distincts et instaurez un temps de repos calme d’au moins une heure avant et après le repas. L’eau fraîche doit rester disponible en permanence à température ambiante.'
      }
    ],
    keyTakeaways: [
      'Pesez toujours la ration journalière plutôt que de doser « à l’œil ».',
      'Bannissez les aliments toxiques : chocolat, raisin, oignon, ail, xylitol et avocat.',
      'Effectuez toute transition alimentaire progressivement sur 7 à 10 jours.'
    ]
  },
  {
    id: 'comment-eduquer-un-chiot',
    title: 'Comment éduquer un chiot avec bienveillance et cohérence ?',
    category: 'Éducation',
    readTimeMinutes: 8,
    publishedDate: 'Septembre 2026',
    author: 'Sophie Laurent, Éducatrice comportementaliste',
    excerpt:
      'Les quatre premiers mois façonnent l’équilibre d’un chien adulte. Voici les repères pratiques pour réussir la propreté, la socialisation et les premiers apprentissages sans conflit.',
    coverPhoto: MEDIA_ASSETS.articlePuppyTraining,
    sections: [
      {
        heading: 'La fenêtre d’or de la socialisation (8 à 16 semaines)',
        body: 'Durant ses premières semaines chez vous, exposez votre chiot de façon positive, progressive et non forcée aux bruits de la rue, aux différents profils humains, aux chiens équilibrés et aux manipulations vétérinaires. Chaque expérience positive renforce sa confiance durable.'
      },
      {
        heading: 'La propreté par l’anticipation plutôt que la punition',
        body: 'Un chiot ne contrôle pas encore pleinement ses sphincters. Sortez-le systématiquement au réveil, après chaque repas, après une séance de jeu et toutes les deux heures, puis félicitez chaleureusement dès qu’il se soulage dehors. Punir un accident découvert tardivement ne fait que créer de l’incompréhension.'
      },
      {
        heading: 'Des séances courtes basées sur le renforcement positif',
        body: 'Cinq minutes de jeu éducatif valent mieux qu’une longue séance fatigante. Récompensez immédiatement les comportements souhaités (calme, assis, retour au nom) par la voix, la caresse ou une petite friandise, et ignorez autant que possible les sollicitations agitées.'
      }
    ],
    keyTakeaways: [
      'Soyez cohérent : toute la famille doit appliquer exactement les mêmes règles.',
      'Apprenez le calme et l’isolement doux dès la première semaine.',
      'Ne punissez jamais après coup un oubli ou une bêtise.'
    ]
  },
  {
    id: 'comment-prendre-soin-du-pelage',
    title: 'Comment prendre soin du pelage et de la peau de son chien ?',
    category: 'Toilettage & Hygiène',
    readTimeMinutes: 5,
    publishedDate: 'Septembre 2026',
    author: 'Lucas Bernard, Maître toiletteur',
    excerpt:
      'Poil ras, double fourrure nordique ou manteau soyeux : chaque type de robe obéit à des gestes précis pour rester sain, brillant et confortable toute l’année.',
    coverPhoto: MEDIA_ASSETS.breedCaniche,
    sections: [
      {
        heading: 'Choisir la brosse adaptée au type de robe',
        body: 'Un gant en caoutchouc suffit pour lustrer un poil court (Boxer, Dalmatien), tandis qu’une carde douce et un peigne métallique à dents larges sont indispensables pour démêler sans douleur les franges d’un Golden Retriever ou le sous-poil dense d’un Samoyède.'
      },
      {
        heading: 'L’erreur fréquente de la tonte sur double pelage',
        body: 'Raser un Husky, un Spitz ou un Berger australien en été détruit sa barrière thermique naturelle : son sous-poil le protège autant des coups de soleil et de la chaleur que du froid hivernal. Un débourrage soigné en période de mue est infiniment plus efficace.'
      },
      {
        heading: 'Bains, oreilles, griffes et coussinets',
        body: 'Utilisez exclusivement un shampoing au pH canin neutre (différent du pH humain) espacé de plusieurs semaines. Vérifiez hebdomadairement les oreilles tombantes après les balades humides et inspectez les griffes ainsi que les épillets entre les doigts en été.'
      }
    ],
    keyTakeaways: [
      'Brossez toujours avant le bain afin d’éviter que les nœuds ne se resserrent avec l’eau.',
      'Ne rasez jamais un chien à double fourrure (Spitz, Nordiques, Bergers).',
      'N’employez jamais de shampoing humain sur un chien.'
    ]
  },
  {
    id: 'vaccins-et-soins-veterinaires',
    title: 'Vaccins, antiparasitaires et calendrier de soins vétérinaires',
    category: 'Santé préventive',
    readTimeMinutes: 6,
    publishedDate: 'Août 2026',
    author: 'Dr Claire Moreau, Éthologue canine',
    excerpt:
      'La prévention reste la meilleure alliée d’une longue vie. Faites le point sur les vaccins essentiels, la protection contre les parasites et la visite annuelle de bilan.',
    coverPhoto: MEDIA_ASSETS.breedBergerAllemand,
    sections: [
      {
        heading: 'Les valences vaccinales fondamentales',
        body: 'La primovaccination du chiot (souvent entre 8 et 16 semaines) protège contre la maladie de Carré, l’hépatite de Rubarth, la parvovirose et la leptospirose. Selon la région et le mode de vie (voyages, chenil, expositions), votre vétérinaire conseille également la rage ou la toux de chenil.'
      },
      {
        heading: 'Protection raisonnée contre puces, tiques et vers',
        body: 'Les tiques peuvent transmettre la piroplasmose ou la maladie de Lyme, tandis que les moustiques phlébotomes véhiculent la leishmaniose dans les régions méditerranéennes. Un calendrier antiparasitaire interne et externe adapté à votre zone géographique protège efficacement votre compagnon.'
      },
      {
        heading: 'Le bilan senior dès 7 à 8 ans',
        body: 'Chez les grandes races dès 6–7 ans et les petites races dès 8–9 ans, une prise de sang et une auscultation cardiaque annuelles permettent de dépister précocement arthrose, troubles rénaux ou valvulopathies et d’adapter le confort de vie.'
      }
    ],
    keyTakeaways: [
      'Tenez à jour le passeport européen et l’identification par puce électronique (I-CAD).',
      'Inspectez le pelage au retour de chaque balade forestière pour retirer les tiques rapidement.',
      'Vérifiez la sensibilité génétique MDR1 chez les bergers avant certains traitements.'
    ]
  },
  {
    id: 'comportements-des-chiens',
    title: 'Décrypter les comportements quotidiens de nos chiens',
    category: 'Comportement',
    readTimeMinutes: 6,
    publishedDate: 'Août 2026',
    author: 'Sophie Laurent, Éducatrice comportementaliste',
    excerpt:
      'Pourquoi votre chien gratte-t-il son panier avant de dormir, penche-t-il la tête ou se secoue-t-il après une rencontre ? Plongée dans les rituels hérités de l’évolution.',
    coverPhoto: MEDIA_ASSETS.breedBorderCollie,
    sections: [
      {
        heading: 'Tourner en rond avant de se coucher et enfouir des objets',
        body: 'Ce comportement ancestral permettait aux canidés sauvages d’aplatir les hautes herbes, de chasser d’éventuels insectes ou serpents et de vérifier la direction du vent avant le repos. De même, enterrer un os répond à un instinct de mise en réserve.'
      },
      {
        heading: 'Le mouvement de tête incliné sur le côté',
        body: 'En penchant la tête lorsqu’un humain lui parle, le chien ajuste l’orientation de ses pavillons auriculaires pour localiser plus précisément l’origine des fréquences vocales tout en observant mieux l’expression de votre visage au-delà de son museau.'
      },
      {
        heading: 'Les « quarts d’heure de folie » (zoomies)',
        body: 'Ces courses explosives soudaines (FRAPs) expriment une décharge d’énergie positive ou une libération de tension accumulée après un bain, une promenade stimulante ou les retrouvailles du soir.'
      }
    ],
    keyTakeaways: [
      'De nombreux comportements jugés « bizarres » ont une explication adaptative logique.',
      'Les chiens apprennent par association immédiate, jamais par vengeance ou malice.',
      'Enrichir le quotidien par le flair réduit nettement les comportements d’ennui.'
    ]
  },
  {
    id: 'accessoires-indispensables',
    title: 'Les accessoires indispensables pour accueillir et équiper son chien',
    category: 'Équipement',
    readTimeMinutes: 5,
    publishedDate: 'Juillet 2026',
    author: 'Lucas Bernard, Conseiller cynophile',
    excerpt:
      'Harnais ergonomique en Y, longe de promenade, couchage orthopédique et jeux d’occupation : distinguez l’essentiel du superflu avant l’arrivée de votre chien.',
    coverPhoto: MEDIA_ASSETS.breedShibaInu,
    sections: [
      {
        heading: 'Harnais en Y et laisse de 2 mètres plutôt que laisse à enrouleur',
        body: 'Un harnais en forme de Y libère parfaitement les épaules tout en préservant les cervicales et la trachée lors des découvertes. Pour apprendre la marche détendue, une laisse fixe de 1,80 à 2 mètres — complétée d’une longe de 5 à 10 m en nature — offre un vrai confort de communication.'
      },
      {
        heading: 'Couchage adapté, gamelles stables et sécurité en voiture',
        body: 'Privilégiez un panier lavable placé dans un coin calme hors des courants d’air, des gamelles en inox ou céramique faciles à désinfecter, et une caisse de transport homologuée ou ceinture dédiée pour tous les trajets en voiture.'
      },
      {
        heading: 'Jouets masticatoires et tapis de léchage',
        body: 'Mastiquer libère des endorphines apaisantes naturelles chez le chien. Les jouets en caoutchouc naturel à garnir et les tapis de fouille olfactive offrent une dépense mentale précieuse les jours de pluie.'
      }
    ],
    keyTakeaways: [
      'Privilégiez la qualité et la sécurité des matériaux plutôt que l’accumulation de jouets.',
      'Vérifiez que le harnais ne frotte jamais derrière les coudes ni sur la gorge.',
      'Faites graver une médaille avec votre numéro de téléphone dès le premier jour.'
    ]
  },
  {
    id: 'erreurs-a-eviter',
    title: 'Les 7 erreurs les plus fréquentes à éviter avec son chien',
    category: 'Conseils pratiques',
    readTimeMinutes: 6,
    publishedDate: 'Juillet 2026',
    author: 'Dr Claire Moreau, Éthologue canine',
    excerpt:
      'Même avec les meilleures intentions, certaines habitudes brouillent la communication avec notre chien. Voici comment les reconnaître et les corriger simplement.',
    coverPhoto: MEDIA_ASSETS.bannerHerdingDogs,
    sections: [
      {
        heading: 'Répéter un ordre dix fois et crier de loin',
        body: 'Lorsque l’on répète « Assis, assis, assis ! », le chien apprend que le premier signal ne vaut rien. Prononcez l’indication une seule fois calmement lorsque votre chien est attentif, puis aidez-le à réussir pour récompenser.'
      },
      {
        heading: 'Négliger les sorties sous prétexte d’avoir un grand jardin',
        body: 'Le jardin devient très vite familier et pauvre en odeurs nouvelles. Même une grande propriété ne remplace jamais les promenades quotidiennes qui nourrissent la curiosité olfactive et l’équilibre social.'
      },
      {
        heading: 'Forcer les rencontres frontales en laisse tendue',
        body: 'Une laisse courte et tendue bloque la possibilité pour le chien d’effectuer des courbes d’approche polies. Laisser du mou en laisse lors des croisement apaise considérablement les interactions.'
      }
    ],
    keyTakeaways: [
      'Un jardin clos ne remplace jamais les sorties d’exploration extérieure.',
      'Une laisse détendue évite bien des tensions lors des rencontres.',
      'Restez constant dans les autorisations : ce qui est interdit adulte doit l’être chiot.'
    ]
  },
  {
    id: 'langage-corporel-des-chiens',
    title: 'Comprendre le langage corporel et les signaux d’apaisement du chien',
    category: 'Communication canine',
    readTimeMinutes: 7,
    publishedDate: 'Juin 2026',
    author: 'Sophie Laurent, Éducatrice comportementaliste',
    excerpt:
      'Une queue qui remue ne signifie pas toujours la joie, et un bâillement exprime souvent une tension. Apprenez à lire chaque posture de votre chien avec précision.',
    coverPhoto: MEDIA_ASSETS.breedGoldenRetriever,
    sections: [
      {
        heading: 'Les signaux d’apaisement décrits par Turid Rugaas',
        body: 'Détourner la tête, se lécher brièvement la truffe, bâiller hors fatigue, renifler subitement le sol ou ralentir sa marche sont des messages pacifiques utilisés par le chien pour désamorcer une situation inconfortable ou exprimer son besoin d’espace.'
      },
      {
        heading: 'Décoder la queue, les oreilles et le regard',
        body: 'Une queue basse et souple en large balayage traduit une détente amicale, alors qu’une queue dressée très haut et raidie en battements rapides et courts révèle une forte excitation ou tension. De même, lorsque l’on voit le blanc de l’œil (« œil de baleine »), le chien signale un malaise.'
      },
      {
        heading: 'La révérence de jeu et le secouement de décompression',
        body: 'Avant-train abaissé au sol et arrière-train relevé : cette posture universelle invite au jeu sans menace. Après une rencontre intense, un grand secouement de tout le corps (comme au sortir de l’eau) permet au chien d’évacuer la tension nerveuse.'
      }
    ],
    keyTakeaways: [
      'Observez l’ensemble du corps (posture, tension musculaire, regard), jamais la queue seule.',
      'Respectez un chien qui détourne la tête ou recule : ne forcez pas le contact.',
      'Apprenez aux enfants à reconnaître les signes d’inconfort pour garantir des relations sûres.'
    ]
  }
];
