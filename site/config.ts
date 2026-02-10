export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Rosie',
  desc: 'Developer blog powered by Astro and GitHub Pages.',
  title: 'Rosie Blog',
  ogImage: 'og.png',
  lang: 'ko-KR',
  base: '/',
  website: 'https://rosie-pluglink.github.io',
  social: {
    github: 'https://github.com/rosie-pluglink',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription: 'Welcome to my blog. Sharing thoughts, tutorials, and projects.',
  blogDescription: 'A collection of thoughts, tutorials, and general web discovery.',
  projectsDescription: "Things I've built that I'm proud of. Many of them are open-source.",

  // Homepage post counts
  featuredPostsCount: 3,
  latestPostsCount: 3,

  // Homepage projects
  homeProjects: {
    enabled: true,
    count: 4,
  },

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: true,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  // Giscus comments configuration
  // Get your configuration from https://giscus.app
  comments: {
    enabled: false, // Set to true after filling in the IDs below
    repo: 'rosie-pluglink/rosie-pluglink.github.io', // Your GitHub repository
    repoId: '', // Get from https://giscus.app - enter repo above and copy the value
    category: 'General', // GitHub Discussions category name
    categoryId: '', // Get from https://giscus.app - select category and copy the value
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme', // Automatically matches your site theme
    lang: 'en',
  },
};
