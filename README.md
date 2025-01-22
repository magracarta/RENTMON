풀스택 프로젝트
<br/>
# RENTMON <br/>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmagracarta%2FRENTMON&count_bg=%2352BAFF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
<br/>
  
![image](https://github.com/user-attachments/assets/b6306518-3a4e-4c8c-a3d9-7fda09607177)
  
## URL
- USER : https://magracarta.pe.kr/user/
- HOST : https://magracarta.pe.kr/host/
- ADMIN : https://magracarta.pe.kr/admin/
<br/><br/>

## 1. 프로젝트 소개
> 공간 대여 서비스로, 공간등록 및 예약 등 다양한 기능을 제공하는 웹사이트
> 펜데믹 이후 다양한 공간에서 소규모 활동을 하고자 하는 사람급증
> 수요에 따라, 공간의 가치를 극대화화며 간편하게 대여와 이용을 연결하는 웹 사이트 제작

<br/>
<br/>


 ## 2. 개발 환경
 - FRONT : REACT, HTML5, CSS3, JAVASCRIPT, REDUX, AXIOS, SWIPER, React-Cookie
 - BACK : Spring Boot, MY SQL, JPA, Spring Boot Security, JWT Token, AWS
 - ETC : SNS Login(Naver, kakao, google),Open Weather Map, 도로명 주소 검색 (Daum),  Map (kakao, Naver)
 - TOOL : IntelliJ, VS Code, FIGMA, ERDCloud

<br/>


## 3. 팀원 구성 및 역할
🙂 김민주
- UI
  - 피그마를 통한 렌트몬 페이지 디자인 시안 제작
  - 페이지(user) : 로그인, 회원가입, 비밀번호 찾기, 마이페이지, 헤더 푸터, 서치팝업, 사이드메뉴 제작
- 기능
  - 초기 서버세팅 작업 (스프링부트, 시큐리티)
  - 구글, 네이버, 카카오 로그인 구현
  - 회원가입 이메일인증, 비밀번호 이메일 인증, 로그인 및 회원가입 정규표현식
  - 네이버 지도 API와 날씨API를 통해 공간예약 데이터 전달
  - 마이페이지 내 예약관리
<br/><br/>

😁 박정빈
- UI
  - 페이지(user) : 공간 상세, 공간 리스트, 공간 예약
- 기능
  - 공간 예약
  - 공간 전체 조회 및 필터 기능
  - 카카오 지도 API로 공간 위치 확인
<br/><br/>
 
😘 박단비
- UI
  - 페이지(host) : 로그인, 회원가입, 헤더푸터, 사이드 메뉴
- 기능
  - 구글, 네이버, 카카오 로그인 구현
  - 회원가입 이메일인증, 비밀번호 이메일 인증, 로그인 및 회원가입 정규표현식

   
😘 이정주
- UI
  - 페이지(admin) : 어드민 총괄
- 기능
  - 데시보드에서 하루 방문자 공간을 수치화 하여 노출 (MUI 라이브러리 사용)
  - 호스트와 유저 회원 관리
  - 신고 관리 (신고에 대한 답장)
  - 쿠폰관리 (쿠폰코드를 생성하여 발급)

<br/>

## 4. 개발 기간 및 작업 관리

### 개발 기간
- 전체 개발기간 : 24년 5월 27일 ~ 24년 6월 10일 (15일)
  - 24-7-31 : 프로젝트 초기 기획
  - 24-8-1 ~ 24-8-2 : 요구사항분석및 화면설계
  - 24-8-2 ~ 24-8-5 : 개발환경 구축
  - 24-8-5 ~ 24-8-25 : 개발진행
  - 24-8-23 ~ 24-8-26 : 발표 준비 및 개발 마무리
    
<br/>

## 5. 페이지 주요기능
### - 유저 페이지 <br/>

![magracarta pe kr_user_](https://github.com/user-attachments/assets/ef6a53ab-833e-4903-81a2-79eb25cf33e9)

![image](https://github.com/user-attachments/assets/8a9c499e-d0a5-491d-af59-37d8ca01111e)

### [유저 - 공간예약]
유저페이지는 공간 예약과 확인 기능을 제공합니다.

![image](https://github.com/user-attachments/assets/b6562223-e8b1-4c98-bd5c-02d9f9b27129)

1. 유저페이지의 메인화면으로 로그인 후 예약할 공간을 선택합니다.
2. 공간의 상세페이지로 페이지 중간의 예약하기를 클릭합니다.
3. 공간 예약 정보를 입력하여 예약합니다.
4. 예약한 공간은 마이페이지에서 확인 가능합니다.


<br/>

### - 호스트 페이지 <br/>
<img src="https://github.com/user-attachments/assets/fa8b86de-f897-4cca-8f39-0fe49ca08861"/>

![image](https://github.com/user-attachments/assets/2bb3845c-3ec8-4bbd-a04e-04f8bcebf57e)

### [호스트 - 공간등록]
호스트 페이지는 공간 등록, 예약 내역 조회, 질문 답변 기능을 제공합니다.

![image](https://github.com/user-attachments/assets/6d63401b-c89f-42fd-8613-94019bfc6f02)

<br/>

1. 호스트 페이지 메인화면으로 로그인 후 공간 등록하기를 클릭합니다.
2. 공간 유형 카테고리를 선택하는 페이지입니다.
3. 공간 상세 정보를 입력하여 공간을 등록합니다. 
4. 내 공간 관리에서 등록한 공간을 확인, 수정, 삭제할 수 있습니다.
   

<br/>
  
### - 관리자 페이지 <br/>
<img src="https://github.com/user-attachments/assets/130ff838-e0c7-4006-a5e2-9618ae20170e"/>

![image](https://github.com/user-attachments/assets/d80da032-632d-49b1-9902-3aa9ca064c5a)


### [관리자]
관리자 페이지는 회원관리 및 쿠폰을 생성합니다.

![image](https://github.com/user-attachments/assets/95cf5f1b-3ea5-41ed-87da-183f3921a001)

<br/>

1. 회원 관리을 관리합니다.
2. 신고된 공간을 확인한 후 처리 및 응답합니다.
3. 쿠폰 생성을 생성하여 고객에게 전달합니다.
  



<br/><br/>

## 5. 트러블 슈팅
- 유저 페이지 구현  - 비밀번호 찾기
  - 비밀번호 찾기 기능을 구현할 때, 사용자의 이메일로 비밀번호 변경 링크를 보내는 방식을 참고했습니다. 그러나 구현 과정에서 누구나 해당 링크에 접근해 비밀번호를 변경할 수 있는 보안 문제가 발생하였습니다. 이를 해결하기 위해 비밀번호 변경 프로세스에 추가적인 인증 절차를 도입하였습니다.
    먼저, 사용자가 비밀번호 찾기를 요청하면 랜덤한 인증 키를 생성하고, 이를 사용자의 브라우저에 쿠키로 저장하였습니다. 동시에, 이메일로 발송되는 비밀번호 변경 링크에 해당 랜덤 키를 쿼리 파라미터로 포함시켰습니다. 사용자가 링크를 클릭하여 비밀번호를 변경할 때,
    서버는 쿠키에 저장된 키와 쿼리 파라미터의 키를 대조하여 일치하는 경우에만 비밀번호 변경을 허용하는 방식으로 문제를 해결했습니다. 이를 통해 인증된 사용자만 비밀번호를 변경할 수 있도록 보안을 강화하였으며, 비밀번호 변경 기능을 안전하게 구현할 수 있었습니다.
    <br/>
   ![image](https://github.com/user-attachments/assets/e6e64f34-c8a2-470b-b6a3-262dcb12c05e)



<br/>
<br/>

- AWS 배포
  - RENTMON에서 AWS EC2의 Ubuntu 환경에 서버와 클라이언트를 배포하고, 이미지 자료는 S3를 통해 처리했습니다. 하지만 AWS 배포 후 구글 로그인 기능에 문제가 발생했습니다. 
    구글 로그인은 AWS에서 제공되는 기본 IP 대신 도메인과 HTTPS 인증이 필요했습니다. 이를 해결하기 위해 가비아에서 도메인을 구매하고, Let's Encrypt를 사용해 HTTPS 인증을 
    완료하여 구글 로그인 기능이 정상 작동하도록 구현했습니다.
    또한 3개의 클라이언트를 하나의 Nginx에서 관리하기 위해 nginx myapp.conf에서 경로에 따라 각각의 클라이언트로 접근하게 만들었습니다.
    <br/>
    ![image](https://github.com/user-attachments/assets/b1de0f0e-7538-44d4-b332-16c8ed922594)


<br/>
<br/>
<br/>

## 6. 프로젝트 후기

### 새로움에 두려워하지 않고 도전하는 마음
이번 프로젝트에서 새롭게 배운 프레임워크, 라이브러리, 외부 Open API를 많이 활용했습니다. 처음에는 이러한 도구들을 사용하는 것이 두려웠지만, 사용하면서 
점차 익숙해졌고, ‘이것도 가능하네!’라는 생각이 들며 다양한 시도를 할 수 있었습니다. 이를 통해 새로운 환경에서도 도전하는 자세를 기르게 되었고, 익숙하지 않은 도구를 적극적으로 탐구하며 문제를 해결하는 자신감을 얻었습니다. 앞으로도 새로운 기술에 도전하며 성장할 수 있다는 깨달음을 얻은 소중한 경험이었습니다.

<br/>

### 간편하지만 한편으로는 두려운 JPA
JPA를 처음으로 사용해보았는 데, 이는 간편하면서도 두려운 라이브러리였습니다. JPA는 SQL 없이 엔티티에서 데이터를 조인하고 필드를 수정하며, 테이블을 생성하는 등 유용한 기능을 제공했습니다. 

그러나 이는 협업 중에는 쉽게 문제 상황을 발생시켰습니다. 누군가가 수정한 엔티티가  필드를 변경하여 오류가 발생시키거나, 서로가 데이터를 쉽게 조인하기위해 
수정한 내용이 두 엔티티 간의 순환 참조 문제를 발생시켜 서버가 중단되기도 했습니다. 이 경험을 통해 초기 설정 단계에서 엔티티를 정확하고 안전하게 계획하고, 
설정 이후에는 가능한 한 수정하지 않는 것이 협업에서 문제를 방지하는 데 중요하다는 것을 깨달았습니다.

 
