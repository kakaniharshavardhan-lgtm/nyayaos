export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  badge: string;
  slaOutcome: string;
  techStack: string[];
  workflow: { phase: string; title: string; desc: string }[];
  imageUrl: string;
  deepOverview?: string[];
  keyFeatures?: { title: string; desc: string; metric?: string }[];
  businessImpact?: string[];
  relatedProjectIds?: string[];
}

export interface WebApplication {
  id: string;
  number?: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description?: string;
  category: 'Enterprise & Infrastructure' | 'Commerce & Lifestyle' | 'Media & AI' | 'Creative & Artisanal';
  primaryColor: string;
  accentColor: string;
  highlights: string[];
  techStack?: string[];
  slaMetric?: string;
  imageUrl?: string;
  theme: 'dark' | 'light';
  previewDetails: {
    heroTitle: string;
    heroSubtitle: string;
    headerNav: string[];
    statOrPill: string;
    layoutStyle: 'modern-saas' | 'media-grid' | 'art-editorial' | 'industrial-portal' | 'luxury-boutique';
  };
}

export interface MobileApplication {
  id: string;
  name: string;
  category: string;
  platform: string;
  tagline: string;
  description: string;
  primaryColor: string;
  screenBadge: string;
  highlights: string[];
  interfaceMockup: {
    headerTitle: string;
    heroText: string;
    subText: string;
    primaryActionText: string;
    metricsOrPills: string[];
    contentBlocks: { title: string; subtitle: string; tag?: string }[];
  };
}

export interface VisionPillar {
  title: string;
  lead: string;
  description: string;
  iconName: string;
}

export interface MissionPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  engineeringFocus: string;
}
