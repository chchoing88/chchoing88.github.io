webpackJsonp([55049869895717],{513:function(n,e){n.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/hello-docker/index.md absPath of file >>> MarkdownRemark",html:'<h2>Docker term</h2>\n<h3>What is Docker?</h3>\n<ul>\n<li>소프트웨어를 containerization(컨테이너화) 한 플랫폼. ( 웹서비스 컨테이너 , 디비 컨테이너 따로 담는다고 하면 서로 isolation 화 할수 있고 서로 독립적인 공간을 가질수 있다. 서로에게 영향을 주지 않을수 있다. )</li>\n<li>containerization 란 컨테이너를 매체로 한 수송체계, 즉. 컨테이너 규격을 맞춰 놓으면 차 , 배 , 비행기등 더 쉽고 빠르게 대량 수송과 시간을 단축 시킬수 있다. 라는 장점을 지니고 있음.</li>\n<li>이걸로 유추해볼 때 도커는 다양한 SW들을 컨테이너에 담아 이동하기가 쉽게하고 포터블하게 만들수있는 플랫폼.</li>\n<li>리눅스의 응용프로그램들을 소프트웨어 컨테이너 안에 배치시키는 일을 자동화 하는 오픈소스</li>\n</ul>\n<h3>What is Container?</h3>\n<ul>\n<li>개발 , 배포 , 운용 등을 위해 표준화된 단위로 구성된 소프트웨어 패키지화 </li>\n<li>호스트 pc의 커널을 공유하면서 SW가 돌아갈수 있는 모든 구성들이 들어가있다. 대신, 불필요한 것들은 들어있지 않다.</li>\n<li>해당 도커 이미지를 run 시키면 해당 SW가 돌아가는데 그 상태를 컨테이너 라고 한다.\n일종의 프로세스와 유사한 개념이다.</li>\n<li>이 해당 컨테이너 내부 환경을 정의하는 파일은 dockerfile 이다.</li>\n<li>나머지 시스템으로 부터 완전히 독립된 공간을 갖는다. 그래서 밖으로 통신하기 위해선 포트를 맵핑해야 한다.</li>\n</ul>\n<h3>What is Service?</h3>\n<ul>\n<li>서비스는 app의 한 부분이다. 예를 들어 비디오를 공유하는 사이트는 데이타 베이스에 app data를 저장하는 서비스, 비디오 업로드 후 transcoding 하는 서비스 등등..</li>\n<li>서비스들은 실제로 production의 컨테이너들로 구성된다.</li>\n<li>하나의 서비스는 하나의 이미지만 실행하지만 그 이미지를 실행하는 방법을 쳬계화 할 수 있습니다. 그 체계화는 docker-compose.yml 파일에서 설정 할 수 있다. </li>\n<li>docker-compose.yml 파일에서는 어떤 포트를 사용해야하는지, 서비스가 가져가야 할 필요한 용량에 따라 얼마나 많은 복제 컨테이너를 실행시켜야 하는지, 서비스를 위해 얼마나 컴퓨팅 리소스를 할당할지를 설정 할 수 있다.</li>\n<li>docker-compose.yml 을 이용 하면 이미지를 일일이 다 run 시키지 않아도 된다. </li>\n</ul>\n<h3>What is Image?</h3>\n<ul>\n<li>도커 이미지란 서비스의 필요한 프로그램 , 라이브러리, 소스등을 설치한 뒤에 이를 파일로 만든 것이다. 쉽게 실행파일이라고 생각하면 된다.</li>\n<li>이미지를 만들기위해 dockerfile에 필요한 명령들을 설정해 놓는다.</li>\n<li>이미지는 base image 와 parent image 로 나뉜다.</li>\n<li>base image 는 parent image가 없는 이미지를 말한다.</li>\n<li>parent image 는 사용하는 이미지의 Dockerfile 내에 FROM 으로 지시되는 이미지이다. 만약 Dockerfile 내에 FROM 이 지시되어있지 않다면 부모 이미지가 없는것이고 이는 곧 base image 가 된다.</li>\n<li>Dockerfile로 이미지를 만들때는 전에 만들었던 이미지 캐시를 잘 이용해야 한다. 기존 방식은 한줄 한줄 실행하면서 <br><b>임시 컨테이너 생성 > 명령어 수행 > 이미지 저장 > 임시 컨테이너 삭제 > 새로 만든 이미지 기반 임시 컨테이너 생성 > 명령어 수행 > 이미지로 저장 > 임시 컨테이너 삭제…</b> 이런식으로 수행…</li>\n</ul>\n<p>----> {해쉬아이디} : 이미지 저장 <br>\n----> Running in {해쉬아이디} : 명령어를 수행하기 위해 그 전 이미지 기반으로 임시 컨테이너 생성</p>\n<p>&#x3C; 처음 Dockerfile 돌렸을때 ></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_build_init-746f6243da40bcdfd0dea81cd38cb1fe-3aa92.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 461px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 108.45986984815619%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAADmElEQVQ4y51VaXPaSBAV2By2wdwgkJCEbiSBOEJMwjr7Zf//X3r73hBXbVWq4tR+mBIj9fR0v6OxJqcZBtshlv+4sH8sMb/ZGAbcrwJswhBRHGM6nSDYRIiTFC/PT1guV1i7LuI0RxyHWNpLTMZjNJtNWHmrgX27gcvXNxwPNdZrD0mSmAA95wyuqgJj7uMkQ55nyLIcge/zkhCO45h9wuS2bcMqBj2cR30mvOJ0OpmgqizNrfW+huv5yNIEq5XDxDucjkfs+T5JYqRpxgLWZn88nuGyaqsoK5RcWV6YW6M4wX63Q304YV/XvGCDINhgvlhgxWrGkzHXxMROpjN0ul0MBkPT2XAwgPX6OsBiYZsXURSjrg+4XL6irPamvZeXHnF7RqvVgmVZny9PVYURFux/NpthNBpju825tqb1lPiEJGe5XBKnDMPhEAW/q72SENT7vSFMxAlz6+HhAd2nJ7ZkIyR+Ouw4rmkv5EXCTYH6LWhaj4+/rzCMEnNAODnOijJIDNBFUXJtze8VL/BIjr75nmcurJhcFWdZap793ss9Yb//il6/jzUPnI4nnM9fcH27YsuEq9UKj8ROXXQ6HXTanc8xXJA9kSE2fT8wlVRkWZKIKerb+w+Ss8Xb9Rtu329otz5p2XHXBHTKttgmDyZpygQ58dohjOgOXibwVfF2W0DxHgm5Q+SSxJF5twkCin8Ca8MDNkXs8qXYjiISw2rlCiVX1ZKQupC0iqIwzlDV+hb8jN0Edw1ba8rGVEgneDwgEjwC7/sbE2wbueTc+0ZaH4xr6cyasXKXK1VESkjMppOpqfKe0P3fCRVnyXIpW9sWlfFvVVVG0NP5AjklIQGL4UajYZaAb3CqPFG7j9Rku91Gl/ZrNJp3UqRyMZoT8LIscP323aj//f1vPndmmkiHwk9VSYdTOkrCj6LEGCEIQjzzgrv1GOARXLWeZxl8sne7/cVZSIJkObb12u/RlnPTVrfbQZ+6HZJdSe4X2cibU04NHUx/MqvBqmFaUirlrsaZY80MDc5MJdegUKvPHBq/JMxIvzAUlsJQQ+HAsSUMY0rI4UXC8I8mzYeXxaAqk9U0LGMyKSFLe8PhyOw77dZ9xH+WMM3uFe7Y0nIxNy6ZcICGcUoMN8Yd+j4mZmrz46AYV+v/Zb9Jz1tztiYm1aoc8OVyQUIPa8judhUKWrCkOzzq8nQ8mOFx/1+hO6g/nZEC9lSGGP8XTiU/Xd8vr64AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="처음 Dockerfile 돌렸을때"\n        title=""\n        src="/ho_blog/static/img_build_init-746f6243da40bcdfd0dea81cd38cb1fe-3aa92.png"\n        srcset="/ho_blog/static/img_build_init-746f6243da40bcdfd0dea81cd38cb1fe-999a6.png 148w,\n/ho_blog/static/img_build_init-746f6243da40bcdfd0dea81cd38cb1fe-a24ab.png 295w,\n/ho_blog/static/img_build_init-746f6243da40bcdfd0dea81cd38cb1fe-3aa92.png 461w"\n        sizes="(max-width: 461px) 100vw, 461px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>&#x3C; 기존 Dockerfile을 2번째 돌렸을때 ></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_build_before-7f2e4d4e319728eb8656bacb2419016f-3aa92.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 461px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100.43383947939262%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACsklEQVQ4y61VW28SQRhdkEJLud8X2PsF2GVhaaFg8EV/gImtSZ+sFltSq9XYGv35xzPTNDExFtv0YbLLzOz5zvnOmUH59PMSnXkX5isL9msP5ksL6qSDfj9CEEbwez1YlsVnH3EcI5VKQet20W53YHJe13U0Gk0UiwUoigLly/t3iNIJBKaBYTRCk4ue56Feq0HlR2qrBcdxUK5UYNsOXNeD57rQDFOu6bpBYJsEBgRuQPm2+iABh46FaDSG2mxhMBhIwHanC1UloOugWq0R2JWAPd9HV9MloGlaMEyTgH006nUo1zc/KGWCMAhlFSFvPI75HmI6m5GtK5l1KNNxbDRZ0DAMubdC1rV6Q86NxmM8SyagnJ+voWkaWi3BLOBmE4vnS4zINhqNUCqVUMgXkE6nb3u0aVxdfaUMF61mExobnM1mEU/2KMtDxJ4K+YKRKCh6W65UYVGizrmYSlzOtdtt2R5hlnL45ojVM8jlcjAprU9XhQyLjS4UCv/H6s9xerrC9vY2pRUxZi8Dyp7ODiTrrqjITYlEAslkUj43Aq7Xa/ieL+l6fo+xabB3MQZsujBEOFur1eFzzWV8NgIeHx/LvlXKZTKb48VyKRnu7e3TXevhku9MEaFsdzrY2kox4GOaxHjQJMFQrGmaQYY28vk8SsUijbLIvPY34NHh26c1ZbVaIZ/Ly5CKuIjEHyyWGIYhgiBgsa2HAV5cXMjjpDPc4gJQVRV9Oi1Ojzj4ZQb7QYAnJydSspAnzFjM59ifHmBCtrZtP94UmXYOcT0F4VCeVfHbtqzHMXwyUz6enfHDogz0/nSGCS/R4TDiOY7QI3h2dxdlZlRk9W7cC/j9+kbeg5PJ7RUmQMQdJ+YGdFnIj2PxHspi1Wr1fsDLX5//+Rcwny9kT0U7MpkMdnZ2Nkr+Daej+2K+0xoXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="기존 Dockerfile을 2번째 돌렸을때"\n        title=""\n        src="/ho_blog/static/img_build_before-7f2e4d4e319728eb8656bacb2419016f-3aa92.png"\n        srcset="/ho_blog/static/img_build_before-7f2e4d4e319728eb8656bacb2419016f-999a6.png 148w,\n/ho_blog/static/img_build_before-7f2e4d4e319728eb8656bacb2419016f-a24ab.png 295w,\n/ho_blog/static/img_build_before-7f2e4d4e319728eb8656bacb2419016f-3aa92.png 461w"\n        sizes="(max-width: 461px) 100vw, 461px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>&#x3C; 기존 Dockerfile 에서 EXPOSE 80 에서 EXPOSE 81로 변경했을 때 ></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_build_after-8a6555902ada49113c4af2e4c616e516-ab65c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 455px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 110.76923076923077%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAADNUlEQVQ4y51V21LjVhB0wA6GxWDJkizLuliyJdmW5CvYgc3DpipsNpUCL/sCm+Ih//8TnZ7ZkCKVCpc8uDBHOj3d09Pj2u6PHcylBXvrwP9tAOfShVGZ6HkDuL0e8jxHFIVw3R7iJEanY8E0TeRZhr4f6rMoGqDvedjb20Pt7uPPWH7/HcphgtlsAb/fx2iUokewTqeDNE3h8SwIAp55yMcTDIcjhGHIAkMYbYP3ZkiSBIM4Qe3+00cFnGcp5oslAj/AmJcE0CKblOd9AoZhpICTyVQLRk8AF4sFC/oY8rz28PCAxXKNoiiQ5WN9uSwr/S6XV+s1vJ4LPwjJNtNLlmXx2QRZmqPRqCt7YZjzTu329rNKcF1XAYTNcnWGNYHKqoLjOLBtG0dHR6jVai9/7u7ulJXX9ygv1+rn5xtsNxtKWWK5XLGvHoIoxvAvU6YsLC2R90sqE+NM08CQCmpXV1es/g6t1jESMp0WFR92kPFl27ZeZLS/X//nmQA2m00FLMoZHZtrP6VHcRy/TubTz/X1jmzGbHwPPh1uNBoYk6Xv0zU2Wlh3OHdZPmGRMdrt9vOAjwxPTk7IsMLF+x9pjI+zs3Mdhf/B8FoBut2uyo3CAJsfLjk6JZs/YaFTvKPDBlmahqGtOTg4wOHhoSZmX9LxFPDXT78ooIzNYwoiTnxVzZCOKJeuN5sHOD1ta3JarZaOUL3egEMS/ylZKi9Wa2y2W0ynpTIUY94s+fb2yzdTGO5vptTJdKqAwjoeDN4G+OHDT38zFCDJp8i2nS5z2ta4ZVwQRVHStJLST58H/Pr1d0osNIvyNxrEOvkVYyeS5bvF3g1HGUbcSHEy0tEJwgHfn2pBiWj3sZ83Nzf8x2WUXKxWa2Vydr7Fe47PbFahbZg0YP/1kne7G12Q0kNJijg+IahsFdl5FxeXmhjZdbIbxeVXS5ZtI5JErszklBFck7XsvqKaY07GIt3mKMkdiWjKzS0LpNt1/j02Yoa8OOL8SWrKsnj72Nzf3yMmkMgRlomsKMum47n+TnQsRwvI0hWDSjJtHR8/D5gQLJ/QxXGqgAYjJhdlyeqSIGDAnwDZ3C8thz8BuG81WDkO4l0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="기존 Dockerfile 에서 EXPOSE 80 에서 EXPOSE 81로 변경했을 때"\n        title=""\n        src="/ho_blog/static/img_build_after-8a6555902ada49113c4af2e4c616e516-ab65c.png"\n        srcset="/ho_blog/static/img_build_after-8a6555902ada49113c4af2e4c616e516-a99df.png 148w,\n/ho_blog/static/img_build_after-8a6555902ada49113c4af2e4c616e516-caa51.png 295w,\n/ho_blog/static/img_build_after-8a6555902ada49113c4af2e4c616e516-ab65c.png 455w"\n        sizes="(max-width: 455px) 100vw, 455px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>이미지 생성시 FROM에 적어둔 parent image기반으로 변경사항만 따로 저장되는게 장점. vm 처럼 용량을 많이 먹지 않음. <br>\n따라서 parent image 기반으로 새로운 이미지를 만들고 parent image 를 삭제하려고 했을때 에러 뜸.</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-efba4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 11.587301587301587%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfklEQVQI1x3NvRLCIBAE4DQhAYZYOHECnPKXASfYWPr+D7YC1e5t8d10zzv2+oD9PWG+FpoIL+cRY4C1BH0ckFKCc455ZqMvjLVbjG1ZVyilsG03CCEwGUMIIcI1JKWzYQ5EfQu4rjrS+YBS3vAtcy7QxqDWD86UBtyxjvZnf90IMyP/1DdwAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="error"\n        title=""\n        src="/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-fb8a0.png"\n        srcset="/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-1a291.png 148w,\n/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-2bc4a.png 295w,\n/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-fb8a0.png 590w,\n/ho_blog/static/img_parent_error-62aa45154c39e50055992029e5ace308-efba4.png 630w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>What is Stack?</h3>\n<hr>\n<h2>Docker Structure</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-07c6b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.41013824884792%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAADHklEQVQozzWSWU9bVxSF/W+q/oCqFXnKQ6V0UpI+dExV9SlSn5pUeUiEgDSdkkJDCIkQg8NwDRGEBExsg7EdjONgxxMGbLiejX2vbfBsJ5GqRl/PNerD0j4652itvdbeupdr++y4kqT3MjSfD/ImYeNtzsum7GTQ/5jR8Ar2VIDsscq/r9rY01XOWVW+cRT5wlbkW1E/sqi8M5/l3YVDdKlInsyBSilXopnYpKVGqRQSBLMylsQ2a8kw9rCXiBzln3YTmyA8Y1E4v17grLXAp6sqHwvCz9ZUca+iW09VsIpPD1YiFEsVsuUGP7qKnH6q0GVUOGPK0b24iWXzBXKxSlCt8yRewSjwJFamP3jE38ESQ+481t0Cuh+cJc4Lle9Hghh8Cvv5CkOhCoOmbaaXXEgrbiSzB8nkwWB8jn5li/6NOGP7ddZFI185SlywF7i4mGDRLSz3Bar0+Cv0inrNV8WdznInFGdo2cmjORPGhTWMSw4BO0uzRqS5pwzadpjey+FL57jkqfClvcgVb5nLW2V0P40t8vnXF/jk7DkuW2V8hRbGdBMp3mI20WJOYOygwbjcZDpSRr9dQEq0WU5W2UorfLdxxCljng/Nimiogu7inWnee/8DTnV1cWk1ysujN2y4QzjujeAcGGDj7jCS9QUjkWMke4oHs3tMraawHDbwZpSOqxvBKr+FTpzq+rYUep/F6HHEuOo9xldsM28PcvOPUW51D9B/Y5i75gCG5GsePsuiN+wy48xhPqzjz+TodWa4PhHmuhShR8TWyfAXodDJwFPGqwrL3gDjhnH0+ttMztxnzBVkRn7Fgkdl1pZhzn+EOVPDL/LucR3SZ4jSNy+fEGoL2rWcF3tU4GeNUGnjTwSQwxPE/cPEQ6OYokH0uy0MliQTUyERQQxrpoQ3W+pY1hr6f7C6P7dr3ArX+FVkcFWE6lPqPE420YshTMVOcD/a6GBSnDVMHDR5lKh3/o5EqhSqDfaKdW7vCEKN/aYg1Wq3UAmIxR2N1vhd3A3s1DpvWujauyb+lyYuzpP7tc6S94erTB3UkORaZzD/AQnsBxGkBy8UAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Docker Structure"\n        title=""\n        src="/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-fb8a0.png"\n        srcset="/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-1a291.png 148w,\n/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-2bc4a.png 295w,\n/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-fb8a0.png 590w,\n/ho_blog/static/img_structure-d38f16b7e2191f33734175d73efd4938-07c6b.png 868w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>출처 : <a href="http://www.leafcats.com/146">http://www.leafcats.com/146</a></em></p>\n<hr>\n<h2>Docker Install</h2>\n<p><a href="https://docs.docker.com/engine/installation/">공식 홈페이지 참조</a></p>\n<hr>\n<h2>Docker use</h2>\n<p>도커 허브에서 원하는 이미지를 다운 받을 수 있다.\n<a href="https://hub.docker.com/">도커 허브</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker --help</code></pre>\n      </div>\n<p>도커의 명령어를 살펴볼 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker pull nginx:latest\nor\n$ docker run -d -it \\\n--name merlin-nginx \\ \n-p 8080:80 \\\nnginx:latest</code></pre>\n      </div>\n<p>pull을 하면 해당 이미지만 받는것이다 <br>\nrun을 실행하게 되면 local에 nginx:latest 라는 이미지가 없으면 자동으로 hub에서 다운받아서 run 을 시킨다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker images\n$ docker ps\n$ docker ps [-a] [-l] [-n number]</code></pre>\n      </div>\n<p>images 는 도커 이미지 리스트를 살펴볼 수 있다. <br>\nps 는 실행중인 컨테이너 리스트를 볼 수 있다. <br>\n-a 옵션을 붙이면 종료된 목록까지 볼 수 있다.<br>\n-l 옵션은 마지막 실행했던 목록 , -n 은 리눅스의 tail 명령어와 동일하다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker commit -a "merlin <merlin@kakaocrop.com>" -m olympic-search-pc naughty_torvalds search.daum.pc:olypic</code></pre>\n      </div>\n<p>현재 돌아가고 있는 컨테이너를 이미지로 만들 수 있다.<br>\n-a 옵션 : author , -m : 커밋 메세지 , &#x3C;naughty_torvalds> 들어가는 부분 : 지금 동작하고 있는 컨테이너 이름 , &#x3C;search.daum.pc:olypic> 새로운 이미지 네임과 태그</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker rm <컨테이너 이름>\n$ docker rmi <이미지>\n# 한번에 처리.\n$ docker rm $(docker ps -a -q)</code></pre>\n      </div>\n<p>도커 이미지와 컨테이너 삭제</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker start <컨테이너 이름>\n$ docker stop  <컨테이너 이름>\n$ docker restart <컨테이너 이름></code></pre>\n      </div>\n<p>도커 컨테이너 실행 , 중지 , 재부팅</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker attach <실행중인 컨테이너 이름> \n$ docker exec -it <실행중인 컨테이너 이름> <컨테이너 안에서 실행할 명령>\n$ docker exec -it merlin-nginx /bin/bash</code></pre>\n      </div>\n<p>attach는 실행중인 도커 컨테이너에 접속한다. 단, ps 쳤을때 command 에 /bin/bash 라고 쳐져있어야 자유롭게 입력할 수 있다. 그렇지 않으면 입력은 할 수 없고 출력만 보인다. <br>\nexec는 컨테이너 안에서 수행할 명령을 날려줍니다. -it 옵션을 주면 실행된 bash 쉘에서 입력 및 출력을 할 수가 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker inspect <컨테이너 이름 or 이미지:태그></code></pre>\n      </div>\n<p>이미지 또는 컨테이너의 세부정보를 출력합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker history <이미지:태그></code></pre>\n      </div>\n<p>이미지의 히스토리를 조회</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker diff <실행중인 컨테이너 이름></code></pre>\n      </div>\n<p>컨테이너가 실행되면서 변경된 파일 목록을 출력합니다. 비교 기준은 컨테이너를 생성한 이미지 내용입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker cp <컨테이너 이름>:<경로> <호스트 경로></code></pre>\n      </div>\n<p>컨테이너에서 파일을 꺼내기.</p>\n<hr>\n<h2>Docker build</h2>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker [OPTIONS] PATH | URL | -\n$ docker build -t app .</code></pre>\n      </div>\n<p>-t 옵션은 생성할 이미지 이름을 지정합니다.  <br>\n-f 옵션은 파일명을 custom 하게 지었을때 사용하거나 Dockerfile 경로가 루트에 없을때 이용. <br>\nPATH 는 도커 이미지 빌드 할때 전송되는 context를 가리킨다. <br></p>\n<h3>Dockerfile</h3>\n<div class="gatsby-highlight">\n      <pre class="language-dockerfile"><code># 어떤 이미지로부터 새로운 이미지를 생성할지를 작성\n# 베이스를 지정\nFROM node:argon\n\n# Dockerfile 을 관리하는 사람의 이름 \nMAINTAINER < merlin.ho > merlin@merlin.com\n# /app directory 생성\nRUN mkdir /app\n\n# /app directory를 WORKDIR로 설정\nWORKDIR /app\n\n# 현재 경로에 있는 package.json을 /app에 복사\nCOPY package.json /app\n\n# src에 파일 대신 url을 입력할수 있고 압축 파일의 경우 압축을 해제하면서 복사\nADD < src > < dest >\nADD . /usr/src/app\n\n# 내부적으로 /bin/sh -c 실행 뒤 npm install 을 실행\nRUN npm install\n\n# 현재 Dockerfile 이 있는 경로의 모든 파일을 /app 에 복사함\nCOPY . /app\n\n# 가상머신에 오픈할 포트넘버\nEXPOSE 3000\n\n# 도커 컨테이너가 실행 되었을때 실행되는 명령 지정, 빌드할때는 실행되지 않으며 여러개의 CMD가 존재할 경우 가장 마지막 것만 실행 됩니다.\n# 한꺼번에 여러 개의 프로그램을 실행하고 싶은 경우에는 run.sh파일을 작성하여 데몬으로 실행하거나 supervisord나 forego와 같은 여러 개의 프로그램을 실행하는 프로그램을 사용합니다.\nCMD ["npm", "start"]</code></pre>\n      </div>\n<h3>recommendation Dockerfile</h3>\n<ol>\n<li>\n<p>Containers should be ephemeral</p>\n<ul>\n<li>Ephemeral environments are also sometimes called “Dynamic environments”, “Temporary environments”, “on-demand environments” or “short-lived environments”.</li>\n<li>static environments와 반대되는 개념이다.</li>\n<li>이것이 의미하는 바는 이 컨테이너를 우리가 stop and destroy 할 수 있고 새롭게 built 할 수 있으며 최소한의 셋팅과 설정으로 원하는 장소에 올려 놓을수 있다 라는것을 뜻함.</li>\n<li>그래서 항상 production 환경과 같은 환경에서 test를 진행할 수 있다. test도 하나의 이미지를 공유 함으로써 병렬로 진행 할 수 있다.</li>\n</ul>\n</li>\n<li>\n<p>Use a .dockerignore file</p>\n<ul>\n<li>우리는 docker build 커멘드를 치는 장소를 build context 라고 부른다. </li>\n<li>디폴트로 현재 디렉토리라고 가정하지만 구체적인 다른 디렉토리를 가리키려면 -f flag를 사용해야한다.</li>\n<li>현재 디렉토리의 파일과 여러 디렉토리들을 docker deamon 에게 build context로 보내지게 되는데 이 이것은 무심코 이미지 결과로 보내지게 되어 이미지 파일이 커지게 된다.</li>\n<li>따라서 .gitignore와 비슷하게 .dockerignore 파일을 사용해서 관계없는 파일들을 exclude 시킬수 있다.</li>\n</ul>\n</li>\n<li>\n<p>Use multi-stage builds</p>\n<ul>\n<li>Docker 17.05 버전 이상에서는 multi-stage builds 로 최종 이미지 사이즈를 줄일 수 있다.</li>\n<li>multi-stage builds 란 Dockerfile 안에서 multiple FROM 구문을 사용하면 각각의 새로운 stage가 빌드 되고 한 stage에서 나온 결과 산출물을 또다른 stage로 카피를 할 수 있다. 따라서 중간 산출물을 위해 Dockerfile을 여러개 만들어서 중간 이미지를 만들고 하는 복잡한 과정을 거치지 않아도 된다.</li>\n<li>dockerfile을 작성할때 자주 바뀌지 않은 것부터 자주 바뀌는 순으로 작성을 한다.</li>\n</ul>\n</li>\n<li>\n<p>Avoid installing unnecessary packages</p>\n<ul>\n<li>불필요한 패키지는 인스톨을 피해라.</li>\n<li>예를 들면 데이타베이스 이미지에 text editor 를 추가시킬 필요는 없다.</li>\n</ul>\n</li>\n<li>\n<p>Each container should have only one concern</p>\n<ul>\n<li>하나의 컨테이너는 오직 하나의 일만하게 시켜라.</li>\n<li>응용 프로그램을 여러 컨테이너로 분리하면 가로로 확장하고 컨테이너를 다시 사용하는 것이 훨씬 쉬워집니다. </li>\n<li>컨테이너를 깨끗하고 가능한 모듈화 시킬 수 있는 최고의 판단을 해라.</li>\n<li>만약 컨테이너 각각이 의존성을 띄고 있다면 Docker network를 사용하면 컨테이너끼리의 커뮤니케이션을 할 수 있다.</li>\n</ul>\n</li>\n<li>\n<p>Minimize the number of layers</p>\n</li>\n<li>\n<p>Sort multi-line arguments</p>\n</li>\n<li>\n<p>Build cache</p>\n</li>\n</ol>\n<hr>\n<h2>10 things to avoid in docker containers</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1. Don’t store data in containers\n2. Don’t ship your application in two pieces\n3. Don’t create large images\n4. Don’t use a single layer image\n5. Don’t create images from running containers\n6. Don’t use only the “latest” tag\n7. Don’t run more than one process in a single container \n8. Don’t store credentials in the image. Use environment variables\n9. Don’t run processes as a root user \n10. Don’t rely on IP addresses </code></pre>\n      </div>\n<p><em>출처 : <a href="https://developers.redhat.com/blog/2016/02/24/10-things-to-avoid-in-docker-containers/">https://developers.redhat.com/blog/2016/02/24/10-things-to-avoid-in-docker-containers/</a></em></p>\n<hr>\n<h2>Docker app data 관리법</h2>\n<h3>호스트의 지정된 폴더를 컨테이너에 다이렉트로 마운트</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker run --name merlin_ubuntu -d -v <호스트 폴더경로>:<마운트될 컨테이너 폴더경로> -it ubuntu:14.04</code></pre>\n      </div>\n<h3>volume container 사용</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code># 볼륨 컨테이너를 만든다. busybox 기반 정말 리눅스의 최소 기반만 가지고 있다. 1.14MB\n$ docker run -v /dbdata --name dbdata busybox\n\n# 볼륨 컨테이너를 우분투 컨테이너에 연결\n$ docker run --volumes-from=dbdata -it ubuntu:14.04 /bin/bash\n\n# 빽업도 진행할 수 있다.\n$ docker run —volumes-from dbdata -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata</code></pre>\n      </div>\n<h3>volume 으로 사용</h3>\n<ul>\n<li>보통 standalone 컨테이너에는 -v 또는 —volume 옵션을 사용했고, swarm service 에는 —mount 옵션을 사용해 왔지만 17.06 이후 버젼부터는 standalone 컨테이너에서 모두 사용이 가능하다.</li>\n<li>만약 볼륨드라이버의 구체적인 옵션을 셋팅해야 한다면 —mount 옵션을 사용해라.</li>\n<li>-v 또는 —volume 옵션은 도커 호스트에 파일 또는 디렉토리가 없을 경우 자동으로 생성해주지만 —mount 옵션은 자동으로 생성해주지 않는다 대신 에러를 뿜는다.</li>\n<li>-v 또는 —volume 은 세가지 field 를 가질수 있다 첫번째는 호스트 머신의 볼륨 이름이고 랜덤한 볼륨을 생성하고 싶다면 생략해도 된다. 두번째는 컨테이너 안에 생성될 디렉토리 또는 파일 path이다. 세번째는 옵션으로 콤마(:)로 옵션을 나열할 수 있다. 예를 들면 ro(readonly) 옵션등이 있다.</li>\n<li>—mount 는 key=value 로 구성을 하고 key 에는 type, src or source , dst or target , volume-opt 등이 있다.</li>\n<li>type의 경우에는 bind , volume , tmpfs 가 있다. 올바른 타입으로 선택하자.</li>\n<li>Voloumn 타입, volumn은 도커에 의해 관리되는 host쪽에 있는 파일시스템으로 저장이 된다. 여기서 volumn은 ”~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty” 해당 경로에 있는 리눅스 안에 “/var/lib/docker/volumes/” 쪽에 저장이 된다. 도커가 아닌 프로세스가 이 파일은 수정하지 못하고 volumnes는 도커 안에서 데이터를 유지하기 최고의 방법이다. </li>\n<li>bind 타입, 이 bind 타입은 host 어디에나 저장이 될 수 있다. 여기서 중요한 시스템 파일이나 디렉토리들에 사용이 될수있고 언제든지 도커가 아닌 프로세스나 도커 컨테이너에서 수정될수 있다.</li>\n<li>tmpfs 타입, 이 타입은 hosts의 메모리에 저장이 된다. 그리고 host 파일시스템에 쓸수가 없다. 휘발성이 강하다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker volume create my-vol\n$ docker volume ls\n## Remove a volume:\n$ docker volume rm my-vol</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>## 컨테이너 연결 \n## mount 방법\n$ docker run -d \\\n  -it \\\n  --name devtest \\\n  --mount source=myvol2,target=/app \\\n  nginx:latest\n\n  $ docker run -d \\\n  -it \\\n  --name=nginxtest \\\n  --mount source=nginx-vol,destination=/usr/share/nginx/html \\\n  nginx:latest\n\n# -v 방법 \n $ docker run -d \\\n  -it \\\n  --name devtest \\\n  -v myvol2:/app \\\n  nginx:latest \n\n\n  $ docker run -d \\\n  -it \\\n  --name=nginxtest \\\n  -v nginx-vol:/usr/share/nginx/html \\\n  nginx:latest</code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-a6c62.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 3.985932004689331%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAANklEQVQI12NgYGD4j4xFRcX+S0pIoIjx8Qv8V1fX+K+lrf1fWVkFLq6iovJfXl7hv5ycHFwMAHNCFyf4cwT0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="img_busybox 용량"\n        title=""\n        src="/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-fb8a0.png"\n        srcset="/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-1a291.png 148w,\n/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-2bc4a.png 295w,\n/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-fb8a0.png 590w,\n/ho_blog/static/img_busybox-4a20af0d205541a77e55e0cf58b015dc-a6c62.png 853w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>마운트 된 경로는 inspect 명령어로 알아 볼 수 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-7208f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 22.55358807082945%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgklEQVQY062POxLDIAwFYfg1UFAaCGCnirn/+V4kJYVTO8XOQ0KzI6mcM6w1UEr9C4XzXCilYq2FPgZ672ityXt867nvlANzTsltK0gpCTFGIYTwER7HE7VWoRA85L3/hYY53aXnnKPrnIistdIT4Ys2fNAW/KG1vneyMQYM22/LiDfiGm0+Cgl6tAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="마운트 경로"\n        title=""\n        src="/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-fb8a0.png"\n        srcset="/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-1a291.png 148w,\n/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-2bc4a.png 295w,\n/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-fb8a0.png 590w,\n/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-526de.png 885w,\n/ho_blog/static/img_mount-832c2b5fee3133b85cfa73b7f72f28a6-7208f.png 1073w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>결론은 어찌되었건 호스트에 데이타를 연동 시킨다. <br>\nvolume container 를 사용했을 떄 데이터도 컨테이너로 관리를 할 수 있다. 그럼..컨테이너의 장점을 다 이용할 수 있지 않을까…</p>\n<hr>\n<h2>Docker compose</h2>\n<p>docker compose install\n<a href="https://docs.docker.com/compose/install/#install-compose">docker compose install</a></p>\n<p>공식문서 <a href="https://docs.docker.com/compose/compose-file/">https://docs.docker.com/compose/compose-file/</a></p>\n<p>version 3 </p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code># compose 버젼 3을 이용하겠다. 대소문자 주의\nversion: \'3\'\n\nservices: \n    webapp:\n        build: ./dir # 구체적인 빌드 컨텍스트의 경로를 지정할 수 있다. 도커 파일을 포함하는 디렉토리나 깃 레파지토리 url, \n        build: # 또는 구체적인 옵션들을 설정할 수 있다. \n            context: ./dir\n            dockerfile: Dockerfile-alternate\n            args: # 빌드 프로세스 진행중에 사용할 환경 변수들을 지정할 수 있다.\n                buildno: 1\n            cache_from: # v3.2지원 엔진이 캐시로 사용할 이미지들\n                - alpine:latest\n                - corp/web_app:3.14\n        command: bundle exec thin -p 3000  # 디폴트 커멘드를 오버라이딩\n        container_name: my-web-container # 컨테이너 이름\n        # 버전 3부터는 depend_on 안에 condition은 지원하지 않는다.\n        depends_on: # 서비스들 간에 의존성을 표현, 이것은 db, redis 이후에 webapp 이 실행하게 된다.(compose up시)\n            - db\n            - redis\n        tmpfs: /run # 컨테이너에 임시 파일 시스템을 마운트 , 리스트로 작성해도 된다. \n        entrypoint: /code/entrypoint.sh # 도커 파일의 엔트리 포인트를 오버라이딩 , 리스트로 작성해도 된다. \n        env_file:  # 환경변수들을 파일로 받는다. 이 환경 변수 파일들은 각각 라인마다 VAR=VAL 포멧으로 작성한다. #은 주석\n            - ./common.env\n            - ./apps/web.env\n            - /opt/secrets.env\n        environment: # 환경변수 추가. 어떤 boolen 값들은 quotes로 감싼다.\n            RACK_ENV: development\n            SHOW: \'true\'\n            SESSION_SECRET:\n        expose: # 포트 노출 \n            - "3000"\n            - "8000"\n        external_links: # 링크 컨테이너 docker-compose.yml 외부에 있는 컨테이너 , CONTAINER:ALIAS \n            - redis_1\n            - project_db_1:mysql\n            - project_db_1:postgresql\n        extra_hosts: # /etc/hosts 에 추가 \n            - "somehost:162.242.195.82"\n            - "otherhost:50.31.209.229"\n        image: redis # 특별한 이미지로 부터 런 , 이미지가 없으면 pull 한다.\n        healthcheck: # 이 서비스를 위해 건강한지 체크 , 이미지로 부터 어떤 디폴트 헬스체크를 disable 하려면 disable: true 추가 \n            test: ["CMD", "curl", "-f", "http://localhost"]\n            interval: 1m30s\n            timeout: 10s\n            retries: 3\n        labels: # 라벨 추가. \n            com.example.description: "Accounting webapp"\n            com.example.department: "Finance"\n            com.example.label-with-empty-value: ""\n        links: # 다른 서비스들의 컨테이너 들과 연결고리를 형성, SERVICE:ALIAS , 주의!! --links 플래그는 레거시 이다. --links 사용을 대신해서 사용자가 정의하는 네트워크 설정을 이용하길 권장한다.\n            - db\n            - db:database\n            - redis\n        logging: # 서비스의 로깅 config\n            driver: syslog # json-file , syslog , none\n            options:\n                syslog-address: "tcp://192.168.0.42:123",\n                max-size: "200k" # json-file 의 경우 로그 저장을 제한할 수 있다. 오래된 파일은 지워진다. \n                max-file: "10"\n        network_mode: bridge # 네트워크 모드 설정 , host , none , service:[service name] , container:[container name/id] //// host 모드는 links랑 같이 사용할 수 없다. \n        networks: # top level 에서 지정한 네트워크 설정 , 알리아스를 사용할 수 도 있다. 이 알리아스 네임으로 서비스를 연결 할 수 있다.\n            - some-network\n            - other-network\n            new: \n                aliases:\n                    - database\n        ports: # HOST:CONTAINER\n            - "8000:8000"\n        volumes: # 호스트 경로 또는 생성된 볼륨을 마운트 시킨다. \n            - type: volume\n            source: mydata\n            target: /data\n            volume:\n                nocopy: true\n            - type: bind\n            source: ./static\n            target: /opt/app/static\n        \n\nvolumes:\n  mydata:\n    external : true # 컴포즈 밖에 volume이 존재했을때, 없으면 \'docker volume create --name=\' 으로 만들라고 에러뜸.\n    name : actual-name-of-volume # 이름을 지정할 수도 있다.\n  dbdata:\n\nnetworks: </code></pre>\n      </div>\n<hr>\n<h2>Docker network</h2>\n<p>출처 : <a href="http://bluese05.tistory.com/15">http://bluese05.tistory.com/15</a></p>\n<h3>network 구성</h3>\n<ul>\n<li>도커를 설치 하면 docker host 쪽에 보면 <strong>docker0</strong> 이라는 virtual ethernet bridge를 확인할 수 있다. ( $ ifconfig 로 확인가능, 난 172.17.0.1 로 셋팅되어 있다.)</li>\n<li>docker0는 container가 통신하기 위한 가상 linux bridge 이다. bridge는 기본적으로 L2 통신 기반이다.</li>\n<li>컨테이너가 하나씩 생성되면 이 bridge에 하나씩 바인딩 된다. ( $ brctl show docker0 )</li>\n<li>이렇게 연결된 컨테이너와 host는 케이블로 연결한 두대의 pc라고 보면 된다.</li>\n<li>컨테이너 내부의 eth0 인터페이스는 내부로 격리되어있어서 이 내부와 host를 이어줄 vethxxxx 형태의 인터페이스가 하나 더 존재한다. 이 인터페이스가 host와 컨테이너 사이를 연결해준다. </li>\n<li>컨테이너 내부의 아이피를 확인하려면 ifconfig eth0 라고 치면 되는데 ifconfig 가 잘 안먹는다. 그럴땐 도커 inspect로 확인하자.</li>\n</ul>\n<h3>network 확인</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ ip addr show \nor\n$ ifconfig</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ docker attach nonenetcontainer\n# 접속후 \n$ cat /etc/hosts\n$ ip -4 addr</code></pre>\n      </div>\n<p>attach 했던걸 detach 하기 위해선 CTRL-p CTRL-q 를 입력하면 된다.</p>\n<h3>network 방식</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code># 네트워크 방식 확인하기 ( 드라이버 ) bridge , host , none ( 네임 기준 )\n$ docker network ls</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code># 기본 네트워크는 bridge 방식이다.\n# 다른방식으로 컨테이너를 생성하고 싶다면\n$ docker run --new={네트워크 타입}</code></pre>\n      </div>\n<ol>\n<li>\n<p>birdge</p>\n<ul>\n<li>네트워크에서 브릿지란 호스트 서버의 네트워크를 연결하여 가상화된 머신들도 동일한 네트워크를 사용하도록 하는 것이다.</li>\n<li>docker network inspect bridge 로 브릿지 모드의 자세한 내용을 확인 할 수 있다.</li>\n</ul>\n</li>\n<li>\n<p>host </p>\n<ul>\n<li>이 방식은 컨테이너가 독립적인 네트워크 영역을 갖지 않고 host와 네트워크를 함께 사용한다.</li>\n<li>따라서 해당 컨테이너는 host의 네트워크 정보와 동일시 하게 가져가게 된다.</li>\n<li>따라서 docker0 에 바인딩 되지 않는다. </li>\n</ul>\n</li>\n<li>\n<p>container </p>\n<ul>\n<li>다른 컨테이너의 네트워크 환경을 가져온다. 즉, ip와 mac 주소를 동일시 하게 구성한다.</li>\n<li>docker run —name web03 —net=container:{컨테이너 id} -d nginx:alpine</li>\n</ul>\n</li>\n<li>\n<p>none</p>\n<ul>\n<li>이 옵션은 격리된 네트워크 환경은 갖지만, 인터페이스가 없는 상태로 컨테이너를 생성하게 된다.</li>\n</ul>\n</li>\n</ol>\n<h3>container 외부 통신</h3>\n<ul>\n<li>각 컨테이너는 격리된 환경에서 각각의 mac 주소와 ip 주소를 부여 받는다. </li>\n<li>각 컨테이너들은 host와 통신하기 위해 bridge 방식으로 바인딩 되어있는데 각 부여받은 ip로 자유롭게 통신 가능.</li>\n<li>예를 들면 web 서비스를 하는 container 는 80번 포트에서 리스닝을 하고있다. 이 포트는 외부와 통신이 되어야 하는데 이때 포트를 외부로 지정한다. -p 8080:80 으로 옵션을 주게 되면 docker host의 8080 포트로 요청이 들어오면 컨테이너의 80 포트로 해당 요청을 forwarding 하겠다는 의미이다.</li>\n<li>docker ps -a or netstat -nlp | grep 8080 로 확인</li>\n</ul>\n<h3>link 방식의 한계</h3>\n<ul>\n<li>link 방식은 하나의 호스트 사이에서 실행되는 컨테이너 사이에서만 연결이 가능하다.</li>\n<li>다수의 host가 존재했을때, 다른 host의 컨테이너에는 접근할 수가 없다.</li>\n<li>이 경우 docker swarm 같은 orchestration 툴을 사용하거나 dynamic DNS를 구축해야한다.</li>\n</ul>\n<blockquote>\n<p>Warning: >The —link flag is a legacy feature of Docker. It may eventually be removed. Unless you absolutely need to continue using it, we recommend that you use user-defined networks to facilitate communication between two containers instead of using —link. One feature that user-defined networks do not support that you can do with —link is sharing environmental variables between containers. However, you can use other mechanisms such as volumes to share environment variables between containers in a more controlled way.</p>\n</blockquote>\n<p>** dynamic DNS 란?\n- 간단하게 ip 가 바뀌면 그걸 알아채서 외부 DNS 서버에 알려준다. 그러면 ip가 동적으로 바뀌는 환경에서도 사용자는 바뀐 ip를 알 필요 없이 domain name 만 알면 동일하게 접속 할 수 있다.</p>',
frontmatter:{title:"Hello Docker",date:"January 09, 2018"}}},pathContext:{slug:"/hello-docker/"}}}});
//# sourceMappingURL=path---hello-docker-a12cbf74061cff05eb25.js.map