# PLUGLINK Tech Blog

**Astro 5**, **Svelte 5 Runes**, **Tailwind CSS 4** 기반의 플러그링크 기술 블로그입니다.
서비스를 만들며 겪은 기술적 도전과 해결 과정, 팀의 성장 이야기를 공유합니다.

## 🎨 Theme

[Spaceship](https://github.com/alec-c4/spaceship) 템플릿을 기반으로 제작되었습니다.

## 🛠️ Tech Stack

- Framework: [Astro 5](https://astro.build/)
- UI: [Svelte 5](https://svelte.dev/)
- Styling: [Tailwind CSS 4](https://tailwindcss.com/)
- Content: Markdown / MDX

## 🚀 Getting Started

### 요구사항

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/) (This project is configured for pnpm)

### 설치

1. Clone the repository:

   ```bash
   git clone https://github.com/plug-link/plug-link.github.io.git
   cd plug-link.github.io
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Build for production:
   ```bash
   pnpm build
   ```

## 📂 Project Structure

```text
/
├── site/              # 🟢 컨텐츠 & 설정 (유지)
│   ├── assets/        # 이미지, 파비콘 등 에셋
│   ├── content/       # 포스트, 프로젝트
│   └── config.ts      # 사이트 설정
├── src/               # ⚙️ Core Engine (Updateable)
│   ├── components/    # UI components
│   ├── layouts/       # Page templates
│   ├── lib/           # Logic and utilities
│   └── pages/         # Routes
├── public/            # Static files
├── astro.config.mjs   # Astro 설정
└── package.json
```

## 📖 Content Management

### ✍️ 컨텐츠 추가

`site/content/` 디렉토리에서 관리합니다.

- **포스트**: `site/content/posts/`
- **프로젝트**: `site/content/projects/`
- **About(소개)**: `site/content/about/index.md`

### 📝 컨텐츠 작성

- **VS Code Snippets**: 마크다운 파일을 열고 `post`, `project` 또는 `appearance`를 입력한 후, **Tab** 키를 누르면 Front-matter가 자동으로 생성됩니다.
- **Templates**: 각 콘텐츠 폴더에는 예제로 사용할 수 있는 `_template.md`라는 이름의 템플릿 파일이 있습니다.
- **Dev Container**: 모든 필수 확장 프로그램과 도구가 포함된 사전 구성된 개발 환경(`.devcontainer/`)이 제공됩니다.

### 🔧 설정

전체 사이트 설정은 `site/config.ts`에서 관리합니다:

```typescript
export const SITE = {
  author: 'PLUGLINK',
  title: 'PLUGLINK Tech',
  desc: '플러그링크 기술 블로그',
  website: 'https://plug-link.github.io',

  // 홈페이지 설정
  featuredPostsCount: 1, // 추천 포스트 수
  latestPostsCount: 3, // 최신 포스트 수

  // CTA 블록 설정
  cta: {
    enabled: true,
    filePath: 'site/cta.md',
  },

  // 댓글 설정 (GitHub Discussions / Giscus)
  comments: {
    enabled: false,
    repo: 'username/repo',
    repoId: '', // https://giscus.app 에서 발급
    categoryId: '', // https://giscus.app 에서 발급
  },

  // 애널리틱스
  googleAnalyticsId: 'G-XXXXXXXXXX',
};
```

## 📚 Documentation

자세한 가이드는 `docs` 에서 확인할 수 있습니다.

- [포스트 게시 방법](https://github.com/plug-link/plug-link.github.io/blob/master/docs/how-to-publish-posts.md) - 게시물 작성, Front-matter 옵션, 이미지 및 추가 기능에 대한 가이드
- [Spaceship 테마 구성하기](https://github.com/plug-link/plug-link.github.io/blob/master/docs/configuring-spaceship.md) - 모든 구성 옵션, 배포 및 사용자 지정 사항에 대한 가이드

### 빠른 경로

- **Post 작성**: `site/content/posts/your-post.md`
- **Project 추가**: `site/content/projects/your-project.md`
- **CTA 커스텀**: `site/cta.md` 수정
- **Configuring Comments**: [giscus.app](https://giscus.app/ko) 세팅
- **Analytics**: `site/config.ts`에 GA4 ID 추가

## ☁️ Deployment

기본적으로 정적 사이트(SSG)이며, **GitHub Pages**에 배포되어 있습니다.

동적 기능이 필요한 경우 Astro 어댑터를 설치합니다:

- **Vercel**: `pnpm astro add vercel`
- **Netlify**: `pnpm astro add netlify`
- **Cloudflare**: `pnpm astro add cloudflare`
- **Node.js**: `pnpm astro add node` (For VPS/Docker)

자세한 내용: [Astro 배포 가이드](https://docs.astro.build/en/guides/deploy/)

## 📜 License

MIT License © [Alexey Poimtsev](https://github.com/alec-c4)
