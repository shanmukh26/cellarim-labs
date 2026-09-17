// Kept for legacy section components (not used on lean pages)
export const problems = [
  {
    n: "01",
    title: "Extraction",
    subtitle: "Produced from plants, animal tissue, or natural sources",
    issues: [
      "Low yields and limited scalability",
      "Resource-intensive harvesting",
      "Seasonal and geographically constrained supply",
    ],
    flow: ["Natural source", "Harvesting", "Processing", "Product"],
  },
  {
    n: "02",
    title: "Chemical synthesis",
    subtitle: "Built through multi-step petrochemical processes",
    issues: [
      "Complex and expensive manufacturing",
      "Hazardous reagents and waste streams",
      "High energy consumption and carbon footprint",
    ],
    flow: ["Petrochemical feedstock", "Multi-step reaction", "Hazardous & energy-intensive", "Product"],
  },
  {
    n: "03",
    title: "Fermentation",
    subtitle: "Engineered microbes produce the molecule inside a living cell",
    issues: [
      "The cell decides, not you — survival beats production",
      "Every molecule needs a new organism and months of re-engineering",
      "Purification of cell mass drives most of the cost",
    ],
    flow: ["Feedstock", "Living cell", "Cell mass + product slurry", "Purification"],
  },
];

export const approaches = [
  {
    n: "01",
    title: "Chemical synthesis",
    body: "Extracted from crude origins. Tough on skin, tough on the planet.",
    final: false,
  },
  {
    n: "02",
    title: "Precision fermentation",
    body: "Made by living cells. Slow, impure, unpredictable.",
    final: false,
  },
  {
    n: "03",
    title: "Cell-free — by Cellarim",
    body: "Built with enzymes. Precision. Purity. Scalable science.",
    final: true,
  },
];

// ============================================================
// HOME — platform-first teasers & proof
// Markable only: purity, first-in-India, reactor scale.
// Weak pitch-deck numbers (kg/mo, 20L) stay off the homepage.
// ============================================================
export const homeProof = [
  { value: "99%+", label: "Product purity" },
  { value: "1st", label: "Cell-free HA in India" },
  { value: "1,000 L", label: "HA bioreactor capacity" },
  { value: "100 L", label: "Enzyme production" },
];

export const homeTeasers = [
  {
    href: "/platform",
    tag: "Platform",
    title: "AI-guided enzymes. Zero living cells.",
    body: "Modular cascades that convert feedstock into high-purity biomolecules — continuous, precise, outside biology’s bottlenecks.",
  },
  {
    href: "/neuhyal",
    tag: "NeuHyal™",
    title: "India’s first cell-free hyaluronic acid.",
    body: "Ultra-pure. Endotoxin-free. Tunable MW from one enzyme platform — already in commercial formulations.",
    uses: [
      "Clean skincare",
      "Serums",
      "Moisturizers",
      "Personal care",
      "Nutraceuticals",
      "Medical",
    ],
  },
  {
    href: "/about",
    tag: "About",
    title: "Built by protein scientists. Scaled in Bengaluru.",
    body: "From Perfect Day and Novozymes DNA to a cell-free manufacturing stack designed for the next decade of actives.",
  },
];

export const contrast = {
  living: {
    title: "Inside the cell",
    points: [
      "Growth and survival compete with production",
      "Months to re-engineer for each new molecule",
      "Biomass purification drives cost and waste",
    ],
  },
  cellFree: {
    title: "Outside the cell",
    points: [
      "Enzymes run continuous cascades you control",
      "Reuse the same stack across biomolecules",
      "Hours to product, precise molecular weight",
    ],
  },
};

// ============================================================
// WHY CELL-FREE
// ============================================================
export const cellFreeAdvantages = [
  { metric: "Continuous", label: "24/7 production", detail: "vs. batch cycles" },
  { metric: ">95%", label: "Feedstock conversion", detail: "vs. cell metabolism limits" },
  { metric: "Hours", label: "Time to product", detail: "vs. days to weeks" },
  { metric: "Precise", label: "MW control", detail: "vs. hard to tune" },
];

// ============================================================
// WORKFLOW — 6 steps from technology PDF
// ============================================================
export const workflowSteps = [
  {
    n: "01",
    title: "Select target",
    short: "Commercial + technical fit",
    body: "Choose a biomolecule with strong market demand and a pathway that benefits from cell-free control.",
  },
  {
    n: "02",
    title: "Find the enzymes",
    short: "Pathway design",
    body: "Identify and engineer the enzyme set required to assemble the target from renewable feedstock.",
  },
  {
    n: "03",
    title: "AI-optimize",
    short: "Cell-free conditions",
    body: "Use AI-guided protein engineering — ancestral reconstruction, consensus design, rapid screening — so enzymes thrive outside living cells.",
  },
  {
    n: "04",
    title: "Produce enzymes",
    short: "Pichia host",
    body: "Engineer Pichia pastoris purely as a high-titer enzyme-production host — not as the molecule factory.",
  },
  {
    n: "05",
    title: "Run the cascade",
    short: "Multi-step chemistry",
    body: "Assemble enzymes into a modular cascade with substrate feeding, cofactor regeneration, and impurity control.",
  },
  {
    n: "06",
    title: "Scale",
    short: "Bench → pilot → plant",
    body: "Transfer the process from bench to pilot reactors and industrial manufacturing with standardized protocols.",
  },
];

// ============================================================
// PLATFORM — three-stage system
// ============================================================
export const platformStages = [
  {
    n: "01",
    tag: "AI-guided enzyme engineering",
    title: "Discover & design",
    body: "Map pathways and design enzyme variants with AI — tuned for activity outside living cells.",
    output: "High-performance enzyme candidates",
  },
  {
    n: "02",
    tag: "Cell-free process development",
    title: "Build & validate",
    body: "Assemble modular cascades, lock purity and yield, and prove the process at pilot.",
    output: "Pilot-ready manufacturing process",
  },
  {
    n: "03",
    tag: "Commercial manufacturing",
    title: "Scale & manufacture",
    body: "Transfer protocols and produce high-purity biomolecules for global customers.",
    output: "Commercial biomolecule production",
  },
];

export const technicalModules = [
  {
    title: "Enzyme discovery & design",
    detail: "Pathway mapping and candidate selection for each target molecule.",
  },
  {
    title: "AI-guided optimization",
    detail: "Directed evolution and sequence design tuned for cell-free conditions.",
  },
  {
    title: "Enzyme production",
    detail: "Strain and process development in high-yield expression hosts.",
  },
  {
    title: "Cofactor regeneration",
    detail: "Keep cascades running without costly stoichiometric cofactors.",
  },
  {
    title: "Process conditions",
    detail: "Buffers, feeding strategies, and reaction control for yield and purity.",
  },
  {
    title: "Enzyme reuse",
    detail: "Strategies that keep catalysts active across multiple production cycles.",
  },
  {
    title: "Analytics",
    detail: "Methods for purity, yield, and byproduct profiling at every scale.",
  },
  {
    title: "Reactor integration",
    detail: "Pilot-scale translation and manufacturing process integration.",
  },
];

/** Headline claims — strong enough to lead with on Home / Platform. */
export const marketingProof = [
  { value: "99%+", label: "Product purity" },
  { value: "1st", label: "Cell-free HA in India" },
  { value: "1,000 L", label: "HA bioreactor capacity" },
  { value: "100 L", label: "Enzyme production" },
];

/**
 * Technical / process detail — fine on Platform in quiet copy,
 * not as homepage brag numbers.
 */
export const processDetail = {
  pilotNote:
    "HA process validated from bench through a 20 L pilot before transfer into commercial reactors.",
  pathway: { value: "12→7", label: "Steps per cycle" },
  reuse: { value: "4+", label: "Enzyme reuse cycles" },
};

/** @deprecated Prefer marketingProof for public surfaces */
export const proofPoints = marketingProof;

// ============================================================
// FACILITY — reactor scale, not kg throughput
// ============================================================
export const facility = {
  location: "Attibele, Bengaluru",
  description:
    "End-to-end production from enzyme to final biomolecule — cosmetic, nutraceutical, and pharma-grade — with government approvals in place.",
  stats: [
    { value: "100 L", label: "Enzyme production" },
    { value: "1,000 L", label: "HA manufacturing" },
    { value: "ISO 8", label: "Cleanroom" },
    { value: "4,700 sq ft", label: "Facility" },
  ],
};

export const roadmap = [
  {
    year: "2024",
    label: "Foundation",
    points: ["Cell-free platform established", "Core enzyme library built"],
  },
  {
    year: "2025",
    label: "Validation",
    points: ["HA process demonstrated", "20 L pilot completed"],
  },
  {
    year: "Today",
    label: "Manufacturing",
    points: ["1,000 L HA reactors online", "100 L enzyme production"],
  },
  {
    year: "2027+",
    label: "Expansion",
    points: ["Multi-molecule platform", "Global partnerships"],
  },
];

// ============================================================
// PIPELINE
// ============================================================
export const pipeline = {
  validated: {
    name: "Hyaluronic Acid",
    note: "Validated the platform on one of the industry's most complex biomolecules.",
  },
  nearTerm: ["Ectoine", "Resveratrol", "Glycolic Acid"],
  midTerm: ["Ceramides", "Squalene", "Kojic Acid"],
};

// ============================================================
// PRODUCT — NeuHyal™
// ============================================================
export const productBenefits = [
  "Customizable molecular weights",
  "Ultra-pure and endotoxin-free",
  "Fully vegan, animal-free",
  "Tuned for any formulation need",
];

export const formats = [
  { code: "NeuHyal-H", body: "High MW — hydration, barrier care" },
  { code: "NeuHyal-M", body: "Medium MW — balanced delivery" },
  { code: "NeuHyal-L", body: "Low MW — deep skin absorption" },
  { code: "NeuHyal-O", body: "Oil-soluble — emulsions & lipids" },
  { code: "NeuHyal-San", body: "Alcohol-soluble — hygiene formulas" },
];

export const productValidation = [
  "Already live in a commercial formulation",
  "Multiple customer qualifications underway",
  "Talks with leading manufacturers and distributors",
];

export const applications = [
  "Clean skincare",
  "Serums",
  "Moisturizers",
  "Hygiene products",
  "Personal care",
  "Nutraceuticals",
  "Medical applications",
  "Custom beauty actives",
];

export const impactStats = [
  { value: "100%", label: "purity" },
  { value: "95%", label: "fewer emissions" },
  { value: "90%", label: "less land & water" },
  { value: "Enzymes", label: "only — no cells" },
];

export const processSteps = [
  "Enhances skin absorption",
  "Improves stability & texture",
  "No residual odor, color, or irritation",
  "Supports stronger clean-beauty claims",
];

// ============================================================
// TEAM
// ============================================================
export const team = [
  {
    initials: "NM",
    name: "Nisa Mehreen",
    role: "Co-founder & CEO",
    qualifications: ["MBA, IIM Tiruchirappalli", "BE in Construction Technology, DSCE"],
    experience: ["B2B Sales, TATA AIG", "Product Research, Recycle Green", "Operations Executive, Sharechat"],
    linkedin: "https://www.linkedin.com/in/nisamehreen/",
  },
  {
    initials: "HR",
    name: "Dr. Hitesh Rafalia",
    role: "Co-founder & CTO",
    qualifications: ["PhD, Protein Folding & Dynamics (NCBS, TIFR)", "MSc, Genetic Engineering (DAVV)"],
    experience: ["Founding team member, Perfect Day", "Associate Scientist, Novozymes"],
    linkedin: "https://www.linkedin.com/in/hitesh-rafalia-phd-5417a115/",
  },
  {
    initials: "DP",
    name: "Dr. Dharmendra Pandey",
    role: "Scientific Manager",
    qualifications: ["PhD, Yeast & Mitochondrial Biology (University of Delhi)", "Master's, Biotechnology (DAVV, Indore)"],
    experience: ["Research Investigator, Syngene", "Sr. Project Associate, Hyclone Life Sciences"],
    linkedin: "https://www.linkedin.com/in/dharmendra-kumar-pandey-205a3b19/",
  },
  {
    initials: "NA",
    name: "Dr. Nilesh Aghera",
    role: "NPD Scientific Manager",
    qualifications: ["PhD, Proteins (NCBS)", "MSc, Biochemistry (DAVV)"],
    experience: ["Scientific Head, Cosmos Bio", "Sr. Research Scientist, Intas Pharmaceuticals", "INSPIRE Faculty, IISc"],
    linkedin: "",
  },
  {
    initials: "CA",
    name: "Dr. Chandu AGS",
    role: "Scientific Manager",
    qualifications: ["PhD, Biochemistry (ICAR)", "Master's, Biochemistry (DAVV, Indore)"],
    experience: ["Principal Scientist, DE3PBIO (The Live Green Group Inc)", "JRF, CSIR-CFTRI"],
    linkedin: "https://www.linkedin.com/in/chandu-ags-ph-d-b377851a9/",
  },
  {
    initials: "SL",
    name: "Shubham Lakhani",
    role: "Process Engineer",
    qualifications: ["ME, Chemical Engineering (BITS Pilani)"],
    experience: ["Industrial Process Engineering, CSIR-NAL"],
    linkedin: "",
  },
];

// ============================================================
// BACKERS
// ============================================================
export const backers = {
  investors: ["3i Partners", "Momentum Capital", "Venture Catalysts"],
  industry: ["Soujanya", "Spectrum Ethers Pvt. Ltd."],
};

export const moat = [
  "AI-driven enzyme library on our own wet-lab data",
  "Cell-free manufacturing with cofactor regeneration",
  "Proprietary IP and know-how across the stack",
  "India-based, end-to-end manufacturing",
];

// ============================================================
// CONTACT
// ============================================================
export const contact = {
  phone: "+91 83104 68463",
  email: "founders@cellarimlabs.com",
  office:
    "No 16, IKP Knowledge Park, 3rd Floor, Bhuvanappa Layout, Tavarekere Main Road, Bengaluru, Karnataka 560029",
  linkedin: "https://www.linkedin.com/company/cellarim-labs/",
};
