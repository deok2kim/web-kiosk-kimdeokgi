# BAEDAL.KOMM

[프로젝트 구경 하러 가기](http://3.38.170.182/)

## ERD
<img width="898" alt="image" src="https://user-images.githubusercontent.com/52899349/184266948-3fc0245c-95c0-4d3f-80f2-91ab02d6dfc3.png">

### 💎 구현 기능 목록

> 메인
- 상품 카테고리 선택
- 상품 선택 및 옵션 선택
- 결제 수단 선택
- 결제 및 영수증 조회

### 💎 구현하면서 어려웠던 점

- 좋은 코드까지 생각하며 구현하기 어려웠다. (여전히 어려웠다. 그래도 조금 나아졌다.)
- nestjs 와 typeOrm 그리고 Typescript 까지.... 처음 해본 것들이라 시간이 좀 걸렸다. 특히 타입스크립트는... 좋긴 좋은데 
- 애니메이션 부분이 어려웠다. 어렵기도 했지만 시간이 부족했다고 핑계를 댈 수 있다.

### 💎 성능 최적화에 대한 고민과 개선 방법

- useCallback, useMemo, React.Memo 등... 시간을 들이면 충분히 개선할 수 있을거 같다. 작은 프로젝트지만
- Context API 를 활용하여 Props Drilling 을 막아줬다.

### 💎 FAQ, 차후 개선할 점

- CSS: 믹스인 등을 활용하여 불필요한 중복 방지.. 예를 들어 flex, flex, flex...
- 컴포넌트를 재사용하기 위한것도 좋지만 너무 범용성이 있게 만들고해서 따로 만드는 것도 좋겠다. 모달 부분

### 💎 아쉬운 점

- 애니메이션과 타입스크립트 학습이 부족했다.
- api 의 응답 코드가 없는 점... -> 결제 deny 를 해주지 못했다.

## 💎 프로젝트 실행 방법

1. `git clone https://github.com/woowa-techcamp-2022/web-kiosk-kimdeokgi.git`
2. `terminal1`: `cd web-kiosk-kimdeokgi/server && npm i && npm run start:dev`
3. `termianl2`: `cd web-kiosk-kimdeokgi/client && npm i && npm run start`
4. [🚀 로컬 실행 주소로 이동](http://localhost:3000)

## 💎 도움을 주신 분들

모든 분들이 많은 도움을 주셨지만 그 중에서 가장 도움을 많이 주신 `4조 (혁진님, 경민님, 태규님)` 분들에게 감사 인사를 드립니다.
