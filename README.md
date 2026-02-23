# 플러그링크 테크 블로그

플러그링크 팀의 기술 블로그입니다. 서비스를 만들며 겪은 기술적 도전과 해결 과정, 팀의 성장 이야기를 공유합니다.

## 기술 스택

- **Framework**: [Astro 5](https://astro.build/)
- **UI**: [Svelte 5](https://svelte.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: Markdown / MDX

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
├── site/                  # 콘텐츠 및 설정
│   ├── assets/            # 이미지, 파비콘 등 정적 파일
│   ├── content/           # 블로그 포스트
│   └── config.ts          # 사이트 설정
└── src/                   # 엔진 (컴포넌트, 레이아웃, 페이지)
```

## 글 작성하기

`site/content/posts/` 에 Markdown 파일을 추가하세요.

```markdown
---
title: '글 제목'
description: '요약'
pubDate: 2026-01-01
tags: ['engineering'] # engineering | design | product | culture
---

본문 내용
```

### 태그 카테고리

| 태그          | 설명                 |
| ------------- | -------------------- |
| `engineering` | 개발, 인프라, 기술   |
| `design`      | UX/UI, 디자인 시스템 |
| `product`     | 프로덕트, 지표       |
| `culture`     | 팀 문화, 성장        |

## 배포

`master` 브랜치에 push하면 GitHub Actions를 통해 자동 배포됩니다.
