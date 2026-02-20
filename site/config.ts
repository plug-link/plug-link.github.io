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
  author: 'PLUGLINK',
  desc: '플러그링크 팀이 만들어가는 기술과 경험을 공유합니다.',
  title: 'PLUGLINK Tech',
  ogImage: 'og.png',
  lang: 'ko-KR',
  base: '/',
  website: 'https://rosie-pluglink.github.io',
  social: {
    github: 'https://github.com/plug-link',
    homepage: 'https://pluglink.kr',
    blog: 'https://blog.naver.com/pluglink',
    youtube: 'https://www.youtube.com/@pluglink',
    instagram: 'https://instagram.com/pluglink_official',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription: '플러그링크 팀이 만들어가는 기술과 경험을 공유합니다.',
  blogDescription: '플러그링크 엔지니어들이 직접 작성하는 기술 아티클',
  projectsDescription: '플러그링크가 만들고 있는 프로덕트와 오픈소스 프로젝트',

  // Homepage post counts
  featuredPostsCount: 3,
  latestPostsCount: 6,

  // Homepage projects
  homeProjects: {
    enabled: false,
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
    lang: 'ko',
  },
};
