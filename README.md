# 무신사 게섯거라 프로젝트

<img width="900" alt="before1" src="https://user-images.githubusercontent.com/32115010/172581149-2b03454a-3f5a-418e-b5fd-5c0ac68480d5.jpeg">


[![frontend - dohveloper](https://img.shields.io/badge/frontend-dohveloper-blue?logo=blue)](https://github.com/dohveloper)
[![frontend - minsu2344](https://img.shields.io/badge/frontend-minsu2344-blue?logo=blue)](https://github.com/minsu2344)
[![frontend - gomiseki](https://img.shields.io/badge/backend-gomiseki-white?logo=blue)](https://github.com/gomiseki)
[![frontend - dnjwm8612](https://img.shields.io/badge/backend-dnjwm8612-white?logo=blue)](https://github.com/dnjwm8612)


## TOC
- [0. 시작하며...](#0-시작하며)
- [1. 주어진 상황](#1-주어진-상황)
- [2. 내게 주어진 업무](#2-나에게-주어진-업무)
- [3. 업무 달성을 위해 한 일](#3-업무를-완료하기-위해-한-일)
  * [3-1. 반복된 코드가 많았던 기존 템플릿 코드의 재활용성을 높이려고 노력](#3-1-반복된-코드가-많았던-기존-템플릿-코드의-재활용성을-높이려고-노력했다)
  * [3-2. 인터렉션과 디자인을 고려하여 각 페이지들을 구현](#3-2-인터렉션과-디자인을-고려하여-각-페이지들을-구현했다)
  * [3-3. ESLint, Wiki 등 컨벤션을 활용하여 팀으로 작업해도 코드 퀄리티가 유지되게 노력](#3-3-eslint-wiki-등을-활용하여-팀으로-작업해도-코드-퀄리티가-유지되게-노력했다)
  * [3-4. 개발 외 작업들](#3-4-개발-외-작업들)
- [4. 결과 및 배운점](#4-결과-및-배운점)

<br />

## 0. 시작하며...

5월 23일부터 5월 3일까지 약 2주동안 팀원 4명과 쇼핑몰을 만드는 웹 프로젝트를 실시했다.

무신사를 따라잡는 멋진 쇼핑몰을 만들자는 의미에서 프로젝트 이름을 “무신사 게섯거라" 라고 정했다.

일명 stop musinsa 프로젝트. 무신사를 멈춰보자! 

![멈춰](https://user-images.githubusercontent.com/32115010/172581174-291ca031-5f8c-4b9b-9f0c-42d1fd733e46.png)

하지만 프로젝트를 시작해보니 멈춰진 것은 우리였다.

비록 무신사의 발 끝조차도 따라가지 못했지만, 2주간의 프로젝트동안 많은 것을 배울 수 있었다. 

그래서 프로젝트를 하면서 배운 것들을 기록해두고자 한다.

<br />

## 1. 주어진 상황

- 엘리스코딩 부트캠프에서 2주간 팀원 4명과 함께 기본 쇼핑몰 기능을 만드는 팀프로젝트를 했고 나는 그 중 프론트엔드와 프로젝트 발표를 담당하였다.
- 다른 팀보다 팀원이 한 명 부족했었기에 시간과 범위 관리가 이번 프로젝트의 핵심이었다.
- 기본 템플릿 코드와 만들어야 하는 기능에 대한 가이드라인이 주어졌고 매일 저녁 9시에 현업자 분들로부터 피드백을 1시간 정도 받을 수 있었다.


<br />


## 2. 나에게 주어진 업무

- 개발
    - 프론트엔드 구현: 공통모듈(헤더,푸터 등), 상품리스트 페이지, 상세페이지의 UI와 기능구현을 맡았다.
    - 코드 개선: 아무도 맡긴 적은 없지만 반복된 코드가 많은 템플릿 코드를 보고나니 왠지 모를 사명감(?)이 생겼다
- 그 외
    - 디자인: 구현할 페이지들의 디자인을 담당했다.
    - 프로젝트 발표: 마지막 날 최종 프로젝트 발표를 담당하였다.



<br />

## 3. 업무를 완료하기 위해 한 일

### 3-1. 반복된 코드가 많았던 기존 템플릿 코드의 재활용성을 높이려고 노력했다.

- 웹 컴포넌트 사용: 템플릿 코드를 받아보니 코드 재활용성이 낮은게 아쉬웠다. 프레임워크를 쓰면 안된다길래 웹 표준인 웹 컴포넌트를 배워서 적용시켰다.(불량모범생)
- 폴더 구조 변경: asset, styles, js, components, pages 로 나눠서 프로젝트 가독성을 높였다.
- 재활용 가능한 컴포넌트 구현: property 또는 attribute 로 다양한 타입의 Header, ProductList 등을 처리할 수 있게 컴포넌트를 구현했다.

<br />

😔 *앗 너무 복잡해* 

| 기본 제공된 코드 (구조화 X & 반복되는 코드)        | 템플릿으로 제공된 페이지            | 
|:-------------:|:-------------:|  
|<img width="300" alt="before1" src="https://user-images.githubusercontent.com/32115010/172581190-8aba1c07-c533-404c-9115-bf4f08425999.png">     | <img width="600"  alt="before2" src="https://user-images.githubusercontent.com/32115010/172581196-60a2d731-e4aa-45cd-93b7-06eeb79b23a4.png"> |




😊 *앗 너무 깔끔해~* 
| 바꾼 코드 (구조화 O & 웹 컴포넌트로 재활용성 UP)   | Web component를 활용한 ProductList 페이지    | 
|:-------------:|:-------------:| 
|<img width="300" alt="after1" src="https://user-images.githubusercontent.com/32115010/172581184-4fc7939b-f8c8-4963-8359-5ca9c20d514c.png">   |<img width="600" alt="after2" src="https://user-images.githubusercontent.com/32115010/172581189-434d5c82-8274-4264-8a04-1e870b47986c.png">|


<br />


### 3-2. 인터렉션과 디자인을 고려하여 각 페이지들을 구현했다.

- 디자인과 인터렉션을 최대한 상용 서비스와 비슷하게 하려고 신경을 많이 썼다.
- CSS: 높이, 너비, 폰트크기 등 CSS를 통해 UI를 깔끔하게 보이게 구현하도록 많이 신경썼다.
- 인터렉션:  skeleton, animation, Intersection Observer 등 을 사용하여 사용하여 매끄러운 인터렉션에 신경썼다.

<br />

😊 *앗 로딩시 카드가 반짝거리네. 너무 매끄러워~* 

| skeleton & animation으로 매끄러운 인터렉션 신경 씀.   | 
|:-------------:| 
|<img width="800" alt="interaction" src="https://i.imgur.com/JflgKjU.gif">     | 


😊 *앗 CSS너무 깔끔해~* 

| 반응형 디자인 구현은 필수! | 상용 퀄리티로 보이게 CSS 값들을 신경 씀   | 
|:-------------:|:-------------:| 
|<img width="600" alt="responsive" src="https://i.imgur.com/jL9Q3LJ.gif">   |<img width="200" alt="home-mobile" src="https://user-images.githubusercontent.com/32115010/172581202-ad06bdd9-b0ac-444a-b06e-4e93703913aa.png">|


<br />

### 3-3. ESLint, Wiki 등을 활용하여 팀으로 작업해도 코드 퀄리티가 유지되게 노력했다.

- ESLint와 팀 위키를 사용하여 컨벤션을 기록하여 모두 비슷한 컨벤션을 사용할 수 있도록 노력했다.
- feature/frontend/product 등과 같은 브랜치네이밍 사용했고 작업후 dev와 master에 순차적으로 머지했다.
- 현직자 코치님들에게 리뷰를 받아 git flow, 브랜치 네이밍 등 실제 현업 과정을 프로젝트에 적용시키고자 노력했다.

| Wiki로 컨벤션 관리   | 
|:-------------:| 
|<img width="800" alt="wiki" src="https://user-images.githubusercontent.com/32115010/172581213-2164fffc-8a40-4045-961a-6f32b82d014e.png">   | 

| 이번 프로젝트동안 고생해준 팀원들!  | 
|:-------------:| 
|<img width="800" alt="team" src="https://user-images.githubusercontent.com/32115010/172581209-769f8d5d-aecf-4d0d-845c-3f87dd55650f.png">|


<br />

### 3-4. 개발 외 작업들

- 디자인
    - figma 를 이용하여 무신사 스타일의 디자인 구현했고, 최대한 비슷한 UI를 구현하고자 css값들을 chrome dev tool 찾아보며 정확한 값으로 구현하는데 노력했다.
    - 무신사 홈페이지는 반응형이 안되어있어서 따로 반응형 디자인을 디자인했다.
- 프로젝트 발표
    - 발표 스토리 라인 설정: 무신사를 따라잡는 멋진 프로젝트를 하고자 시작 ⇒  프로젝트 데모 보여주기, 어려웠던 점 및 배운점 ⇒ 비록 무신사를 따라잡지는 못했지만 많은 것을 배울 수 있었음.
    - keynote로 ppt 작업: 팀원들마다 배운 점, 해결한 점, 소감을 디스코드로 취합하여 이를 발표에 녹임.
    - 발표 연습: 6분 내에 데모와 프로젝트 설명을 전부 맞춰야 해서, 발표 전 시간을 초과하지 않도록 여러번 연습


| figma로 디자인 작업   | keynote 로 발표자료준비    | 
|:-------------:|:-------------:| 
|<img width="500" alt="figma" src="https://user-images.githubusercontent.com/32115010/172595231-15578115-e806-4e58-bca4-6e0f34f6c30e.png">   |<img width="500" alt="ppt" src="https://user-images.githubusercontent.com/32115010/172595209-8eef3ae5-87dd-4e2d-93ca-99bf73249980.png">|



<br />

## 4. 결과 및 배운점

- 코드 퀄리티를 높이려고 노력하는 과정 속에서 웹 컴포넌트와 ESLint에 대해 배울 수 있었다.
    
| MDN과 이 책이 많은 도움이 되었다. | 
|:-------------:| 
|<img width="200" alt="book" src="https://user-images.githubusercontent.com/32115010/172581200-e375eb82-dcfe-4464-a550-4eb95a2df473.png">|


    
- 사이트의 UX를 고려하는 과정 속에서 skeleton과 Intersection Observer에 대해 배울 수 있었다.
- Git을 활용하여 협업하는 법을 배웠다. issue, MR, wiki 등을 적극 활용하여 프로젝트를 진행해보면서 git을 이용한 협업과 merge conflicts 에 친숙해졌다.
<br/>
- 여담으로는 발표에서도 배운 점이 있었다. 항상 느끼는거지만 발표할 때 시간에 대한 촉박함 때문에 강약조절에 실패하는 것 같다. 다음 발표에서는 중요한 부분에서는 퍼즈를 줘가면서 강조하는 것에 더 신경을 쓴다면 내용을 더 잘 전달할 수 있을 것 같다.
