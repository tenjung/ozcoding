## Flex (한 방향 배치, 1차원 레이아웃)

사용 예시: 텍스트 버튼들을 가로로 중앙 정렬  
클래스: `.flex .justify-center .items-center`

- `flex`: flexbox 활성화
- `justify-center`: 주 축(가로) 가운데 정렬
- `items-center`: 교차 축(세로) 가운데 정렬

---

## Grid (행과 열, 2차원 레이아웃)

사용 예시: 3행 3열 박스 균일 간격 배치  
클래스: `.grid .grid-cols-3 .grid-rows-3 .gap-4`

- `grid`: grid 레이아웃 활성화
- `grid-cols-3`: 3열 설정
- `grid-rows-3`: 3행 설정
- `gap-4`: 행과 열 사이 간격

---

## 메인 헤더 Sticky 및 Sticky Menu 적용

- 처음엔 문서 흐름에 따라 움직임
- 스크롤 시 지정 위치(top 등)에 닿으면 고정됨
- 부모 영역 내에서만 고정, 벗어나면 다시 움직임

---
