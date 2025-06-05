// Data models for the Competitive Report

export interface Platform {
  name: string;
  size: string;
  target: string;
  focus: string;
  funding: string;
  color: string;
  price: number;
  differentiators: string[];
  partnerships: string;
}

export interface PricingTier {
  platform: string;
  smb: boolean;
  midMarket: boolean;
  enterprise: boolean;
  price: number;
}

export interface Satisfaction {
  platform: string;
  overall: number;
  easeOfUse: number;
  support: number;
  value: number;
}

export interface FeatureMatrixRow {
  feature: string;
  category: string;
  benefit: string;
  honeAI: { value: string; url: string };
  betterUp: { value: string; url: string };
  lifeLabs: { value: string; url: string };
  strive: { value: string; url: string };
  thinkific: { value: string; url: string };
  absorb: { value: string; url: string };
  mursion: { value: string; url: string };
  monark: { value: string; url: string };
  udemy: { value: string; url: string };
}

// Market positioning data with additional details
export const platformData: Platform[] = [
  {
    name: 'Hone AI',
    size: 'Startup',
    target: 'Enterprise',
    focus: 'AI-powered management training',
    funding: 'Early Stage',
    color: '#8B5CF6',
    price: 300,
    differentiators: [
      'Voice-first AI coaching approach',
      'Focus on real-time management scenarios',
      'Newer entrant with innovative technology',
    ],
    partnerships: 'Emerging partnerships in tech sector',
  },
  {
    name: 'BetterUp',
    size: 'Large',
    target: 'Enterprise',
    focus: 'Executive coaching',
    funding: '$1.7B valuation',
    color: '#10B981',
    price: 1500,
    differentiators: [
      'Established enterprise coaching platform',
      'Strong executive coaching heritage',
      'Significant funding and market presence',
    ],
    partnerships: 'Airbnb, Chevron, Hilton',
  },
  {
    name: 'LifeLabs Learning',
    size: 'Medium',
    target: 'Mid-market to Enterprise',
    focus: 'Skills-based leadership',
    funding: 'Series B',
    color: '#F59E0B',
    price: 400,
    differentiators: [
      'Research-backed leadership programs',
      'Focus on behavioral science',
      'Customizable skill-building modules',
    ],
    partnerships: 'Google, Etsy, Warby Parker',
  },
  {
    name: 'Strive',
    size: 'Startup',
    target: 'SMB to Mid-market',
    focus: 'Manager effectiveness',
    funding: 'Series A',
    color: '#EF4444',
    price: 150,
    differentiators: [
      'Focus on frontline managers',
      'Simple, actionable insights',
      'Mobile-first approach',
    ],
    partnerships: 'Growing SMB customer base',
  },
  {
    name: 'Thinkific',
    size: 'Large',
    target: 'SMB to Enterprise',
    focus: 'Course creation & LMS',
    funding: 'Public (TSX)',
    color: '#3B82F6',
    price: 200,
    differentiators: [
      'Strong course creation tools',
      'Flexible pricing for different market segments',
      'Established marketplace presence',
    ],
    partnerships: '50,000+ course creators',
  },
  {
    name: 'Absorb LMS',
    size: 'Large',
    target: 'Enterprise',
    focus: 'Learning management',
    funding: 'Private Equity',
    color: '#6366F1',
    price: 600,
    differentiators: [
      'Enterprise-grade LMS platform',
      'Advanced reporting and analytics',
      'Compliance and certification tracking',
    ],
    partnerships: 'Fortune 500 companies',
  },
  {
    name: 'Mursion',
    size: 'Medium',
    target: 'Enterprise',
    focus: 'VR simulation training',
    funding: 'Series B',
    color: '#EC4899',
    price: 800,
    differentiators: [
      'VR-based immersive training',
      'Unique simulation capabilities',
      'Focus on soft skills development',
    ],
    partnerships: 'Walmart, Starbucks pilots',
  },
  {
    name: 'Monark',
    size: 'Small',
    target: 'SMB to Mid-market',
    focus: 'Corporate training',
    funding: 'Seed',
    color: '#84CC16',
    price: 120,
    differentiators: [
      'Affordable corporate training solutions',
      'Quick deployment and setup',
      'Focus on small to mid-size companies',
    ],
    partnerships: 'Regional business partnerships',
  },
  {
    name: 'Udemy',
    size: 'Large',
    target: 'SMB to Enterprise',
    focus: 'Marketplace learning',
    funding: 'Public (NASDAQ)',
    color: '#F97316',
    price: 180,
    differentiators: [
      'Large marketplace of courses',
      'Wide variety of topics and instructors',
      'Flexible learning paths',
    ],
    partnerships: '15,000+ organizations',
  },
];

// Pricing tier data
export const pricingData: PricingTier[] = [
  { platform: 'Hone AI', smb: false, midMarket: true, enterprise: true, price: 300 },
  { platform: 'BetterUp', smb: false, midMarket: false, enterprise: true, price: 1500 },
  { platform: 'LifeLabs Learning', smb: false, midMarket: true, enterprise: true, price: 400 },
  { platform: 'Strive', smb: true, midMarket: true, enterprise: false, price: 150 },
  { platform: 'Thinkific', smb: true, midMarket: true, enterprise: true, price: 200 },
  { platform: 'Absorb LMS', smb: false, midMarket: true, enterprise: true, price: 600 },
  { platform: 'Mursion', smb: false, midMarket: false, enterprise: true, price: 800 },
  { platform: 'Monark', smb: true, midMarket: true, enterprise: false, price: 120 },
  { platform: 'Udemy', smb: true, midMarket: true, enterprise: true, price: 180 },
];

// Customer satisfaction data
export const satisfactionData: Satisfaction[] = [
  { platform: 'BetterUp', overall: 4.2, easeOfUse: 4.1, support: 4.3, value: 3.8 },
  { platform: 'Thinkific', overall: 4.6, easeOfUse: 4.7, support: 4.5, value: 4.4 },
  { platform: 'Absorb LMS', overall: 4.3, easeOfUse: 4.2, support: 4.4, value: 4.0 },
  { platform: 'Udemy', overall: 4.2, easeOfUse: 4.5, support: 3.9, value: 4.3 },
  { platform: 'Mursion', overall: 4.1, easeOfUse: 3.8, support: 4.2, value: 3.7 },
];

// Feature matrix data
export const featureMatrix: FeatureMatrixRow[] = [
  {
    feature: 'Live Instructor-Led Classes',
    category: 'must-have',
    benefit: 'Facilitates immediate feedback and hands-on skills development',
    honeAI: { value: 'Yes', url: 'https://honehq.com/' },
    betterUp: { value: 'Yes', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Yes', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Yes', url: 'https://www.strive.co/' },
    thinkific: { value: 'Yes', url: 'https://www.thinkific.com/' },
    absorb: { value: 'Yes', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Yes', url: 'https://www.mursion.com/' },
    monark: { value: 'Yes', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Yes', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Personalized Learning Paths',
    category: 'must-have',
    benefit: 'Customization of learning experience for managerial roles',
    honeAI: { value: 'Yes', url: 'https://honehq.com/' },
    betterUp: { value: 'Yes', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Yes', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Yes', url: 'https://www.strive.co/' },
    thinkific: { value: 'Yes', url: 'https://www.thinkific.com/' },
    absorb: { value: 'Yes', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Yes', url: 'https://www.mursion.com/' },
    monark: { value: 'Yes', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Yes', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Scalability',
    category: 'must-have',
    benefit: 'Deploys training effectively across various organizational divisions',
    honeAI: { value: 'Yes', url: 'https://honehq.com/' },
    betterUp: { value: 'Yes', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Yes', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Yes', url: 'https://www.strive.co/' },
    thinkific: { value: 'Yes', url: 'https://www.thinkific.com/' },
    absorb: { value: 'Yes', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Yes', url: 'https://www.mursion.com/' },
    monark: { value: 'Yes', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Yes', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'AI-Powered Coaching',
    category: 'performance',
    benefit: 'Enhances learning with adaptive strategies',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium*', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Medium*', url: 'https://www.strive.co/' },
    thinkific: { value: 'Medium*', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'High', url: 'https://www.mursion.com/' },
    monark: { value: 'High', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Medium*', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Cohort-Based Learning',
    category: 'performance',
    benefit: 'Fosters interaction and collaborative learning among managers',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'High', url: 'https://lifelabslearning.com/' },
    strive: { value: 'High', url: 'https://www.strive.co/' },
    thinkific: { value: 'Medium', url: 'https://www.thinkific.com/' },
    absorb: { value: 'Medium', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Medium', url: 'https://www.mursion.com/' },
    monark: { value: 'Medium', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Medium', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Course Creation Tools',
    category: 'performance',
    benefit: 'Empowers organizations to tailor training to specific requirements',
    honeAI: { value: 'Medium', url: 'https://honehq.com/' },
    betterUp: { value: 'Medium*', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Low', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Low*', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Low*', url: 'https://www.mursion.com/' },
    monark: { value: 'Low*', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Medium', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Integration with Business Tools',
    category: 'performance',
    benefit: 'Ensures seamless workflow integration',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Medium', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'High', url: 'https://www.mursion.com/' },
    monark: { value: 'High', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Employee Progress Tracking',
    category: 'performance',
    benefit: 'Provides insights into learning effectiveness and areas for improvement',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Medium', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Medium', url: 'https://www.mursion.com/' },
    monark: { value: 'Medium', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Mobile Learning',
    category: 'performance',
    benefit: 'Enables learning on-the-go across devices',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium', url: 'https://lifelabslearning.com/' },
    strive: { value: 'High', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Medium', url: 'https://www.mursion.com/' },
    monark: { value: 'Medium', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Compliance & Security',
    category: 'performance',
    benefit: 'Meets enterprise security and regulatory requirements',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Medium', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'High', url: 'https://www.mursion.com/' },
    monark: { value: 'Medium', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Multi-Language Support',
    category: 'performance',
    benefit: 'Supports global workforce training needs',
    honeAI: { value: 'Medium', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Low', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Low', url: 'https://www.strive.co/' },
    thinkific: { value: 'Medium', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Medium', url: 'https://www.mursion.com/' },
    monark: { value: 'Low', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Advanced Analytics & Reporting',
    category: 'performance',
    benefit: 'Deep insights into learning effectiveness and ROI',
    honeAI: { value: 'High', url: 'https://honehq.com/' },
    betterUp: { value: 'High', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'Medium', url: 'https://lifelabslearning.com/' },
    strive: { value: 'Medium', url: 'https://www.strive.co/' },
    thinkific: { value: 'High', url: 'https://www.thinkific.com/' },
    absorb: { value: 'High', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Medium', url: 'https://www.mursion.com/' },
    monark: { value: 'Medium', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'High', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Live Scenario Simulations',
    category: 'delighter',
    benefit: 'Real-world practice in a safe environment',
    honeAI: { value: 'No', url: 'https://honehq.com/' },
    betterUp: { value: 'No', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'No', url: 'https://lifelabslearning.com/' },
    strive: { value: 'No', url: 'https://www.strive.co/' },
    thinkific: { value: 'No', url: 'https://www.thinkific.com/' },
    absorb: { value: 'No', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Yes', url: 'https://www.mursion.com/' },
    monark: { value: 'Yes', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'Yes*', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Voice-First AI Coaching',
    category: 'delighter',
    benefit: 'Real-time coaching using voice tech',
    honeAI: { value: 'Yes*', url: 'https://honehq.com/' },
    betterUp: { value: 'Yes*', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'No', url: 'https://lifelabslearning.com/' },
    strive: { value: 'No', url: 'https://www.strive.co/' },
    thinkific: { value: 'No', url: 'https://www.thinkific.com/' },
    absorb: { value: 'No', url: 'https://www.absorblms.com/' },
    mursion: { value: 'No', url: 'https://www.mursion.com/' },
    monark: { value: 'No', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'No', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'Micro-Learning Nudges',
    category: 'delighter',
    benefit: 'Bite-sized content for better retention',
    honeAI: { value: 'No*', url: 'https://honehq.com/' },
    betterUp: { value: 'Yes*', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'No', url: 'https://lifelabslearning.com/' },
    strive: { value: 'No', url: 'https://www.strive.co/' },
    thinkific: { value: 'No', url: 'https://www.thinkific.com/' },
    absorb: { value: 'No', url: 'https://www.absorblms.com/' },
    mursion: { value: 'No', url: 'https://www.mursion.com/' },
    monark: { value: 'Yes*', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'No', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'VR-Based Training',
    category: 'delighter',
    benefit: 'Immersive, simulated learning',
    honeAI: { value: 'No', url: 'https://honehq.com/' },
    betterUp: { value: 'No', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'No', url: 'https://lifelabslearning.com/' },
    strive: { value: 'No', url: 'https://www.strive.co/' },
    thinkific: { value: 'No', url: 'https://www.thinkific.com/' },
    absorb: { value: 'No', url: 'https://www.absorblms.com/' },
    mursion: { value: 'Yes', url: 'https://www.mursion.com/' },
    monark: { value: 'No', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'No', url: 'https://business.udemy.com/' }
  },
  {
    feature: 'AI-Generated Content',
    category: 'delighter',
    benefit: 'Automatically curated training material',
    honeAI: { value: 'No', url: 'https://honehq.com/' },
    betterUp: { value: 'No', url: 'https://www.betterup.com/' },
    lifeLabs: { value: 'No', url: 'https://lifelabslearning.com/' },
    strive: { value: 'No', url: 'https://www.strive.co/' },
    thinkific: { value: 'No', url: 'https://www.thinkific.com/' },
    absorb: { value: 'Yes', url: 'https://www.absorblms.com/' },
    mursion: { value: 'No', url: 'https://www.mursion.com/' },
    monark: { value: 'No', url: 'https://www.monarkinc.com/' },
    udemy: { value: 'No', url: 'https://business.udemy.com/' }
  }
];

export const employeeImpact = [
  {
    value: "70%",
    description: "of variance in engagement depends on leadership",
    source: "Gallup Research"
  },
  {
    value: "45%",
    description: "say companies don't develop future leaders",
    source: "TalentLMS"
  },
  {
    value: "36%",
    description: "witness ineffective leadership frequently",
    source: "TalentLMS"
  },
  {
    value: "84%",
    description: "prioritize leadership investment despite market conditions",
    source: "BetterManager"
  }
];

export const retentionImpact = [
  {
    value: "60%",
    description: "need training before 2027 due to skills disruption",
    source: "WEF Future of Jobs"
  },
  {
    value: "25%",
    description: "increase in business outcomes with effective leadership investment",
    source: "BetterManager Study"
  },
  {
    value: "43%",
    description: "prioritize AI integration in leadership development",
    source: "Harvard Business Publishing"
  }
];

export const criticalInsights = [
  {
    title: "Leadership Gaps",
    items: [
      { text: "77% of organizations report leadership is lacking", source: "Harvard Business Publishing" },
      { text: "Leadership confidence at lowest point since 2021 (61.2/100)", source: "Russell Reynolds" },
      { text: "44% of workers' core skills will be disrupted by 2027", source: "World Economic Forum" }
    ]
  },
  {
    title: "Training Effectiveness",
    items: [
      { text: "Leadership training shows strong transfer effectiveness (δ=.82)", source: "Rice University" },
      { text: "43% cite insufficient leadership training programs", source: "TalentLMS" },
      { text: "Face-to-face delivery most effective for leadership development", source: "Rice University" }
    ]
  },
  {
    title: "Financial Impact",
    items: [
      { text: "Average ROI: $7 return for every $1 invested", source: "BetterManager Study" },
      { text: "70% average budget cuts in leadership development 2023-2024", source: "TalentLMS" },
      { text: "ROI range varies from $3-$11 per dollar invested", source: "BetterManager Study" }
    ]
  },
  {
    title: "Industry Investment",
    items: [
      { text: "Law firms invest $2,667 per person annually", source: "HR Dive Analysis" },
      { text: "Global leadership development market: $366 billion", source: "ZipDo Industry Statistics" },
      { text: "84% prioritize investment despite market conditions", source: "BetterManager Study" }
    ]
  }
]; 