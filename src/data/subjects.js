// Subjects data organized by academic level
export const subjectsData = {
  college: [
    {
      id: "c-math",
      titleFr: "Mathématiques",
      titleEn: "Mathematics",
      code: "MATH-COL",
      descFr: "Calcul numérique, géométrie, équations du 1er degré, théorèmes fondamentaux (Pythagore, Thales).",
      descEn: "Arithmetic, geometry, linear equations, fundamental theorems (Pythagoras, Thales)."
    },
    {
      id: "c-pc",
      titleFr: "Physique-Chimie",
      titleEn: "Physics & Chemistry",
      code: "PC-COL",
      descFr: "Initiation aux sciences physiques, états de la matière, masse volumique et électricité élémentaire.",
      descEn: "Introductory physics, states of matter, density, and basic electric circuits."
    },
    {
      id: "c-fr",
      titleFr: "Français",
      titleEn: "French Literature",
      code: "FR-COL",
      descFr: "Grammaire rigoureuse, étude de textes classiques, rédaction et méthodologie du Brevet des collèges.",
      descEn: "Grammar, classical text analysis, essay writing, and national exam preparation."
    },
    {
      id: "c-ang",
      titleFr: "Anglais",
      titleEn: "English Language",
      code: "ENG-COL",
      descFr: "Consolidation du vocabulaire, compréhension orale, structures grammaticales de base et expression.",
      descEn: "Vocabulary building, listening comprehension, grammar structures, and speaking practice."
    },
    {
      id: "c-svt",
      titleFr: "Sciences & SVT",
      titleEn: "Life & Earth Sciences",
      code: "SVT-COL",
      descFr: "Compréhension du vivant, biologie humaine, géologie et démarche scientifique d'observation.",
      descEn: "Living organisms, human biology, geology, and observational scientific methodology."
    },
    {
      id: "c-info",
      titleFr: "Informatique & Algo",
      titleEn: "Computer Science Intro",
      code: "CS-COL",
      descFr: "Initiation à la logique algorithmique, Scratch, premiers pas sur Python et pensée computationnelle.",
      descEn: "Introductory algorithmic logic, Scratch, Python basics, and computational thinking."
    }
  ],
  lycee: [
    {
      id: "l-math",
      titleFr: "Mathématiques Spé",
      titleEn: "Advanced Mathematics",
      code: "MATH-LYC",
      descFr: "Analyse, récurrence, probabilités, géométrie dans l'espace, limites, dérivées et équations différentielles.",
      descEn: "Calculus, induction, probability, 3D geometry, limits, derivatives, and differential equations."
    },
    {
      id: "l-phys",
      titleFr: "Physique",
      titleEn: "Physics",
      code: "PHYS-LYC",
      descFr: "Mécanique newtonienne, thermodynamique, ondes, électromagnétisme et physique quantique élémentaire.",
      descEn: "Newtonian mechanics, thermodynamics, waves, electromagnetism, and introductory quantum physics."
    },
    {
      id: "l-chim",
      titleFr: "Chimie",
      titleEn: "Chemistry",
      code: "CHIM-LYC",
      descFr: "Transformations acides-bases, oxydoréduction, cinétique chimique et synthèse organique.",
      descEn: "Acid-base reactions, redox, chemical kinetics, and organic synthesis."
    },
    {
      id: "l-svt",
      titleFr: "Sciences (SVT / NSI)",
      titleEn: "Sciences & Technology",
      code: "SCI-LYC",
      descFr: "Génétique, immunologie, dynamique terrestre et enseignements scientifiques du Bac.",
      descEn: "Genetics, immunology, earth dynamics, and scientific Baccalaureate curriculum."
    },
    {
      id: "l-fr",
      titleFr: "Français & Écrit",
      titleEn: "French & Essay Writing",
      code: "FR-LYC",
      descFr: "Préparation aux épreuves écrites et orales du Bac : dissertation, commentaire composé et explication.",
      descEn: "Preparation for Baccalaureate written & oral exams: essays, literary analysis, commentary."
    },
    {
      id: "l-ang",
      titleFr: "Anglais Avancé",
      titleEn: "Advanced English",
      code: "ENG-LYC",
      descFr: "Préparation aux certifications (TOEFL, Cambridge), synthèse de documents et argumentation complexe.",
      descEn: "Preparation for certifications (TOEFL/Cambridge), document synthesis, and debate."
    },
    {
      id: "l-philo",
      titleFr: "Philosophie",
      titleEn: "Philosophy",
      code: "PHILO-LYC",
      descFr: "Méthodologie de la dissertation philosophique, explication de texte, analyse des notions clés.",
      descEn: "Methodology of philosophical essay writing, text analysis, and study of core concepts."
    },
    {
      id: "l-info",
      titleFr: "Informatique NSI & Python",
      titleEn: "Computer Science (NSI)",
      code: "NSI-LYC",
      descFr: "Programmation Python rigoureuse, structures de données (listes, piles, arbres), bases de données SQL.",
      descEn: "Rigorous Python programming, data structures (lists, stacks, trees), SQL databases."
    }
  ],
  superieur: [
    {
      id: "s-ana",
      titleFr: "Analyse Réelle & Complexe",
      titleEn: "Real & Complex Analysis",
      code: "MATH-SUP-1",
      descFr: "Intégration de Riemann/Lebesgue, séries numériques & de fonctions, équations différentielles, analyse vectorielle.",
      descEn: "Riemann/Lebesgue integration, infinite series, differential equations, vector calculus."
    },
    {
      id: "s-alg",
      titleFr: "Algèbre Linéaire & Bilinéaire",
      titleEn: "Linear & Bilinear Algebra",
      code: "MATH-SUP-2",
      descFr: "Espaces vectoriels, applications linéaires, réduction d'endomorphismes, valeurs propres, espaces euclidiens.",
      descEn: "Vector spaces, linear maps, matrix diagonalization, eigenvalues, Euclidean spaces."
    },
    {
      id: "s-stat",
      titleFr: "Statistiques & Probabilités",
      titleEn: "Probability & Statistics",
      code: "STAT-SUP",
      descFr: "Variables aléatoires continues, lois de probabilité, théories de l'estimation, tests d'hypothèses et régression.",
      descEn: "Continuous random variables, probability distributions, estimation theory, hypothesis testing."
    },
    {
      id: "s-algo",
      titleFr: "Algorithmique & Graphes",
      titleEn: "Algorithms & Graph Theory",
      code: "ALGO-SUP",
      descFr: "Complexité temporelle/spatiale, structures de données avancées, algorithmes sur les graphes, programmation dynamique.",
      descEn: "Time/space complexity, advanced data structures, graph algorithms, dynamic programming."
    },
    {
      id: "s-prog",
      titleFr: "Programmation (C / C++ / Python)",
      titleEn: "Advanced Programming",
      code: "PROG-SUP",
      descFr: "Gestion mémoire, pointeurs, programmation orientée objet, architecture logicielle et calcul scientifique.",
      descEn: "Memory management, pointers, OOP, software architecture, and scientific computing."
    },
    {
      id: "s-phys",
      titleFr: "Physique Théorique",
      titleEn: "Theoretical Physics",
      code: "PHYS-SUP",
      descFr: "Mécanique analytique (Lagrangien/Hamiltonien), électrodynamique, physique statistique et thermodynamique hors équilibre.",
      descEn: "Analytical mechanics (Lagrangian/Hamiltonian), electrodynamics, statistical physics."
    },
    {
      id: "s-info",
      titleFr: "Informatique Théorique",
      titleEn: "Theoretical Computer Science",
      code: "INFO-SUP",
      descFr: "Automates finis, langages formels, calculabilité, logique du premier ordre et sémantique des langages.",
      descEn: "Finite automata, formal languages, computability, first-order logic, and formal semantics."
    }
  ]
};
