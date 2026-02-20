---
title: 'Next.js 앱 라우터에서 초기 로딩 속도를 50% 개선한 방법'
description: 'Server Components, Streaming, 그리고 번들 최적화를 통해 플러그링크 웹 서비스의 Core Web Vitals를 크게 개선한 경험을 공유합니다.'
pubDate: 2026-01-14
tags: ['engineering', 'nextjs', 'performance']
---

# Next.js 앱 라우터에서 초기 로딩 속도를 50% 개선한 방법

플러그링크의 메인 웹 서비스는 Next.js App Router 기반으로 구축되어 있습니다. 서비스가 성장하면서 번들 사이즈가 커졌고, Core Web Vitals 점수가 눈에 띄게 하락하기 시작했습니다.

## 문제 분석

Lighthouse 점수를 측정한 결과:

- **LCP (Largest Contentful Paint)**: 4.2s (빨간색)
- **FID (First Input Delay)**: 180ms (주황색)
- **CLS (Cumulative Layout Shift)**: 0.15

가장 큰 병목은 **JavaScript 번들 사이즈**였습니다. 클라이언트로 전송되는 JS가 650KB에 달했습니다.

## 해결 전략

### 1. Server Components 최대 활용

기존에 Client Component로 작성된 컴포넌트 중 상당수가 실제로는 서버에서 렌더링 가능했습니다.

```tsx
// Before: 불필요하게 Client Component
'use client';
export function ProductList({ products }) {
  return products.map((p) => <ProductCard key={p.id} {...p} />);
}

// After: Server Component로 전환
export function ProductList({ products }) {
  return products.map((p) => <ProductCard key={p.id} {...p} />);
}
```

### 2. Streaming과 Suspense

데이터 페칭이 오래 걸리는 섹션을 Suspense로 감싸고, 나머지 UI를 먼저 스트리밍했습니다.

### 3. Dynamic Import 정리

라우트별로 필요한 코드만 로드되도록 dynamic import를 정리했습니다. 특히 대시보드에서 사용하는 차트 라이브러리가 메인 번들에 포함되어 있던 문제를 해결했습니다.

## 결과

- **LCP**: 4.2s → 1.8s
- **FID**: 180ms → 45ms
- **JS 번들**: 650KB → 280KB
- **Lighthouse Performance**: 52 → 94

웹 성능 최적화에 은탄환은 없습니다. 꾸준한 측정과 개선의 반복이 핵심입니다.
