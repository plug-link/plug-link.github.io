---
title: '플러그링크 디자인 시스템 2.0을 소개합니다'
description: 'Figma 토큰과 코드의 완벽한 동기화를 달성한 디자인 시스템 2.0의 구축 과정과 핵심 설계 원칙을 공유합니다.'
pubDate: 2026-02-05
tags: ['design', 'design-system', 'engineering']
featured: true
---

# 플러그링크 디자인 시스템 2.0을 소개합니다

플러그링크의 첫 번째 디자인 시스템은 빠르게 성장하는 서비스를 따라잡기 바빴습니다. 컴포넌트 수가 200개를 넘어가면서 일관성을 유지하기 어려워졌고, Figma와 코드 사이의 간극은 점점 벌어졌습니다.

## 문제 인식

기존 디자인 시스템의 핵심 문제는 세 가지였습니다.

1. **Figma-Code 불일치**: 디자이너가 Figma에서 수정한 값이 코드에 반영되기까지 수동 작업 필요
2. **토큰 체계 부재**: 색상, 타이포그래피, 스페이싱에 대한 일관된 토큰이 없음
3. **다크 모드 대응 어려움**: 색상이 하드코딩되어 있어 테마 전환이 사실상 불가능

## Design Token 기반 아키텍처

2.0의 핵심은 **Design Token**입니다. Figma Variables에서 정의한 토큰이 자동으로 CSS Custom Properties로 변환됩니다.

```css
/* 자동 생성되는 토큰 파일 */
:root {
  --pl-color-primary-500: #0066ff;
  --pl-color-primary-600: #0052cc;
  --pl-spacing-xs: 4px;
  --pl-spacing-sm: 8px;
  --pl-spacing-md: 16px;
  --pl-radius-md: 8px;
}
```

## 컴포넌트 설계 원칙

### Composition over Configuration

단일 컴포넌트에 모든 옵션을 넣는 대신, 작은 컴포넌트를 조합하는 방식을 택했습니다.

```tsx
// Before: 모든 것을 props로
<Button icon="check" iconPosition="left" loading size="lg" />

// After: 조합 가능한 구조
<Button size="lg">
  <Button.Icon><CheckIcon /></Button.Icon>
  <Button.Label>확인</Button.Label>
</Button>
```

## 도입 효과

- 디자이너-개발자 핸드오프 시간: 2일 → 2시간
- 다크 모드 지원: 신규 컴포넌트 100% 대응
- 접근성 기본 보장: WCAG 2.1 AA 기준 충족

디자인 시스템은 완성이 아니라 지속적인 개선의 여정입니다. 앞으로의 계획도 이어서 공유하겠습니다.
