CPU Hackathon [청소년 아이디어 코딩캠프] 공식 홈페이지 소스
=================
©2017 Shinkansan
-----------------

* CPU 해커톤의 참가 신청 사이트와 공식 홈페이지 역할을 수행할 소스입니다 [청소년 아이디어 코딩 캠프 바로가기](https://shinkansan.github.io/cpuhackathon.github.io/#)
* JS의 경우 다양한 페이지들과 오픈소스를 참고하여 제작하였습니다.
* 응답형 디자인을 채택하여 모바일 페이지와 데스크탑용 페이지를 별도로 제작하지 않았습니다.
*

## 응답형 디자인에 따른 리소스 제약사항
> * 모바일 판단 기준
> >
> 모바일 기준, 너비가 740px 이하일 경우.
>
> 웹 브라우저 Agent 값이 모바일 Agent일 경우.
>
> * 리소스 제약 사항
>
> 모바일 페이지에는 Welcome Video를 제거
>
> 모바일 페이지는 AutoScroll(JQuery.AutoScroll)를 적용하지 않습니다
>
> 이미지에 경우 모바일 해상도를 별도로 제작하여 사용하며 데스크탑에서 차이가 나는 내용은 모바일 페이지인 경우 별도로 제공되는 텍스트 기반 설명이 부가됩니다.

``` javascript
      Boolean chkmobile()
      {
        if(width<740px)
        {
          return true;
        }
      else{return false}
      }
```
