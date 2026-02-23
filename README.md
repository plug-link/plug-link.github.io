# 플러그링크 테크 블로그

**Astro 5**, **Svelte 5 Runes**, **Tailwind CSS 4** 기반의 플러그링크 기술 블로그입니다.

서비스를 만들며 겪은 기술적 도전과 해결 과정, 팀의 성장 이야기를 공유합니다.

## 🎨 테마

[Spaceship](https://github.com/alec-c4/spaceship) 템플릿을 기반으로 제작되었습니다.

## ✨ 주요 기능

- **🚀 고성능**: Astro 기반으로 최소한의 JavaScript와 빠른 로딩 속도 제공
- **⚡ 최적화**:
  - **Partytown**: Google Analytics를 웹 워커로 오프로드
  - **로딩 인디케이터**: 부드러운 페이지 전환 프로그레스 바
- **🎨 모던 디자인**: 다크 모드 지원 및 유동적 타이포그래피
- **Svelte 5 Runes**: 최신 Svelte 반응성 시스템 (`$state`, `$derived`, `$props`) 활용
- **Tailwind CSS 4**: 고성능 제로 런타임 CSS 프레임워크
- **📝 블로그**:
  - **MDX 지원**: 포스트 내에 Svelte 컴포넌트 직접 삽입
  - **시리즈 지원**: 관련 포스트를 시리즈로 묶어 자동 네비게이션
  - **초안 모드**: 프로덕션에서 초안 숨김, 개발 환경에서만 표시
  - **예약 발행**: 미래 날짜로 포스트 발행 예약
  - **커스텀 CTA**: 포스트 하단에 콜투액션 블록 추가
  - **포스트별 설정**: CTA 및 댓글 개별 토글
- **💬 댓글 시스템**:
  - **GitHub Discussions**: Giscus 기반 프라이버시 친화적 댓글
  - **완전 커스터마이징**: 테마, 언어, 동작 방식 설정 가능
  - **포스트별 토글**: 개별 포스트에서 댓글 활성화/비활성화
- **🔍 검색**: 포스트 제목 및 설명 기반 빠른 클라이언트 사이드 검색
- **📊 SEO**:
  - **JSON-LD**: WebSite, BlogPosting, Person, Breadcrumbs 구조화 데이터 자동 생성
  - **캐노니컬 URL**: 캐노니컬 링크 및 robots 메타 태그 지원
  - **동적 OG 이미지**: 포스트별 소셜 미리보기 이미지 자동 생성
  - **RSS 피드 & 사이트맵**: 바로 사용 가능한 RSS 및 사이트맵
- **✍️ 마크다운**:
  - **Shiki 구문 강조**: 라인 하이라이트, diff, 단어 강조 지원
  - **자동 목차(TOC)**: 스크롤 스파이 기능이 있는 인터랙티브 목차
  - **헤딩 앵커 링크**: 특정 섹션 공유를 위한 클릭 가능한 링크
  - **Mermaid 다이어그램**: 마크다운 내 플로우차트 및 다이어그램 지원
  - **이모지 지원**: 네이티브 이모지 숏코드 (`:rocket:` 등)
- **🧹 모듈식 아키텍처**: 잘 정리된 컴포넌트 및 컨텐츠 컬렉션

## 🛠️ 기술 스택

- **프레임워크**: [Astro 5](https://astro.build/)
- **UI 컴포넌트**: [Svelte 5](https://svelte.dev/)
- **스타일링**: [Tailwind CSS 4](https://tailwindcss.com/)
- **컨텐츠**: Markdown & MDX
- **최적화**: Sharp, Shiki, Partytown
- **아이콘**: Lucide & custom SVGs

## 🚀 시작하기

### 사전 요구사항

- [Node.js](https://nodejs.org/) (LTS 권장)
- [pnpm](https://pnpm.io/)

### 설치

1. 저장소 클론:

   ```bash
   git clone https://github.com/rosie-pluglink/rosie-pluglink.github.io.git
   cd rosie-pluglink.github.io
   ```

2. 의존성 설치:

   ```bash
   pnpm install
   ```

3. 개발 서버 실행:

   ```bash
   pnpm dev
   ```

4. 프로덕션 빌드:
   ```bash
   pnpm build
   ```

## 📂 프로젝트 구조

컨텐츠와 엔진 코드를 분리하는 구조로, 엔진 업데이트 시 컨텐츠를 유지할 수 있습니다.

```text
/
├── site/              # 🟢 컨텐츠 & 설정 (유지)
│   ├── assets/        # 이미지, 파비콘 등 에셋
│   ├── content/       # 포스트, 프로젝트
│   └── config.ts      # 사이트 설정
├── src/               # ⚙️ 코어 엔진
│   ├── components/    # UI 컴포넌트
│   ├── layouts/       # 페이지 템플릿
│   ├── lib/           # 유틸리티
│   └── pages/         # 라우트
├── public/            # 정적 파일
├── astro.config.mjs   # Astro 설정
└── package.json
```

## 📖 컨텐츠 관리

### ✍️ 컨텐츠 추가

`site/content/` 디렉토리에서 관리합니다.

- **포스트**: `site/content/posts/`
- **소개**: `site/content/about/index.md`

### 🔧 설정

전체 사이트 설정은 `site/config.ts`에서 관리합니다:

```typescript
export const SITE = {
  author: 'PLUGLINK',
  title: 'PLUGLINK Tech',
  desc: '플러그링크 기술 블로그',
  website: 'https://rosie-pluglink.github.io',

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

## ☁️ 배포

기본적으로 정적 사이트(SSG)이며, **GitHub Pages**에 배포되어 있습니다.

동적 기능이 필요한 경우 Astro 어댑터를 설치합니다:

- **Vercel**: `pnpm astro add vercel`
- **Netlify**: `pnpm astro add netlify`
- **Cloudflare**: `pnpm astro add cloudflare`

자세한 내용: [Astro 배포 가이드](https://docs.astro.build/en/guides/deploy/)
