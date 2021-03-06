---
title: hello monad
date: "2018-02-13T10:00:03.284Z"
---

## Intro
---

리엑트 및 함수형 프로그래밍에 많이 나오는 모나드 패턴 알아보자.

찾아보니 너무 어렵다. 특정하게 정의를 내려가기 보단 코드를 조금씩 발전시켜 나가면서 느낌을 익혀보자는 취지로 작성한다.


## 이해해보자
---

### 즉시 실행함수로 값 두개를 더해보자.

아래 코드를 보자.
별도로 설명할건 없을꺼 같다.


```javascript
// 덧셈
(function(x){
	(function(y){ 
        console.log(x+y)
        })(2)
})(1)
```

이쁘다..(?)

딱봐도 뭔가 뎁스가 점점 깊어질꺼 같기도 하다. 느낌이 뭔가 원시적이기도 하고 그 다음에는 helper 함수를 이용해서 조금 더 깔끔하게 바꿔보자.


### bind 라는 helper

여기서 bind 는  Function에 있는 bind가 아닌 임의로 만든 helper 함수라는걸 알아두자.

```javascript

// 이걸 이쁘게..
function bind(x, fn){
	return fn(x);
}

// 컨텍스트가 있는 연속된 계산...이쁜?? 덧셈

bind(1, function(x){
 bind(2 , function(y){
 	console.log(x+y);
 })
});

```

음.. 뭔가 더 알아보기 쉬워지지 않았는가????
요느낌 그대로 모나드는 어떻게 사용하는가를 알아보자.


### Identity monad v1


조금은 어렵고 난해한 그림으로 설명하는 모나드 사이트를 소개한다.


[http://lazyswamp.tistory.com/entry/functorsapplicativesandmonadsinpictures](http://lazyswamp.tistory.com/entry/functorsapplicativesandmonadsinpictures)

이해가 안된다면 위 코드를 객체를 이용해서 짜본다고 생각하면 조금 더 이해하기 쉽겠다.
왜? 객체를 이용해야 하는가.. 그건 아래에서 조금 더 다뤄보자.


```javascript
// 어떠한 특정 값을 wrapping..
function Identity(value){
	this.value = value;
}

// 여기선 어떠한 값을 Identity 가 들고있기에 어떠한 함수와 결합할것지만 넘겨주면 된다.
Identity.prototype.bind = function(fn){
	return fn(this.value);
}

// 출력을 위한
Identity.prototype.toString = function(){
	return `Identity({this.value})`;
}

// Identity monad test
// 5 + 6

let result = new Identity(5).bind(
	function(x){
        return new Identity(6).bind(
            function(y){
                return (x + y);
        }
    );
  }
)

console.log(result);

```


### Identity monad v2

위에 코드도 그닥 깔끔하지 않으니 es6 를 사용해서 조금 더 깔끔하게 작성해보자.

```javascript
// 간추려 보자...

let result2 = new Identity(5).bind(x =>
	new Identity(6).bind(y =>
  	    x+y
  )
);

console.log(result2);
```

음..뭔가 더 있어보인다. 
계속 발전 시켜 나가면서 이게 왜 쓰이고 왜 좋은지 장점들을 알아보자.


### Maybe monad

위의 identity 모나드의 문제점을 한번 보자..

만약 계산중에 중간에 값이 없는 경우가 들어온다면???? 결과는 어떻게 나올까??

위의 코드에서 '6' 을 지워보고 테스트 해보자 결과는?? 

**NaN**

이럴경우에는 어떻게 처리할까.. 또 다른 코드를 보자.

우선 단순하게 Identity 라는 명칭이 Just로 바꾸었다.

```javascript 

// 어떠한 특정 값을 wrapping..
function Just(value){
	this.value = value;
}

// 여기선 어떠한 값을 Identity 가 들고있기에 어떠한 함수와 결합할것지만 넘겨주면 된다.
Just.prototype.bind = function(fn){
	return fn(this.value);
}

// 출력을 위한
Just.prototype.toString = function(){
	return `Identity(${this.value})`;
}

// 테스트를 위한 Nothing
let Nothing = {
    bind : function(){
        return this;
    },
    toString : function(){
        return `this is Nothing`;
    }
}

// 중간에 빈 Nothing이 들어온다.
let result = new Just(5).bind(x =>
    Nothing.bind(y =>
        x+y
    )
)

console.log(result); // 에러가 뜨지 않는다. 


```

위 코드는 에러가 뜨지 않는다. 어디서 잘못되었는지 알 도리가 없다.
대신 Nothing 이 반환된다.

이 코드는 간단해서 금방 어디가 잘못되었는지 알 수 있지만,

코드가 조금만 복잡해지더라도 어디서 잘못되었는지 파악하기가 힘들수 있다.

그렇담 이제부터 뭔가 null,undefined 이나 Nothing 체크가 필요해보인다. 새로운 예제를 보자.

우리는 보통 값이 있는지 없는지를 확인할때 가장 흔하게 if 문을 자주 쓴다.

```javascript

// 유저의 아바타를 가져오는 함수
// 별도의 설명은 필요 없을 듯 싶다.
function getUser(){
    return {
        getAvatar : function(){
            return null;
        }
    }
}

// if
let user = getUser();
if(user != null){
    let avatar = user.getAvatar();
    if(avatar != null){
        let skill = avatar.skill // 아바타의 스킬을 가져오기 위한 몸부림....
    }
}

```

if의 몸부림이 보인다.

이번엔 Maybe 모나드로 처리해보자. 단순히 모나드에 값이 아닌 객체를 넣는게 다르게 보일 수 있다.

방식은 비어있는 값을 만날때에는 연산이 정지하도록 만들어 보자. 

위와 동일한 예제이다. Just 객체도 위와 동일하다. Nothing도 위와 같다.

```javascript

function getUser(){
    return new Just({
        getAvatar: function(){
            return Nothing; // 값이 없는 객체이지만 모나드와 동일한 메서드 구성을 지니고 있긴하다. 
        }
    })    // 이전까지는 값을 넣었었는데 이젠 객체를 넣는다.
};

// if를 대안한 방법... 우린 스킬을 얻길 원한다!!!
let skill = getUser().bind(function(user){   // 여기서 user 는 this.value
    return user.getAvatar();
}).bind(function(avatar){  // getAvatar를 호출하고 나서 나온 객체에 대해서 다시 binding..
    return avatar.skill;
});

if(skill instanceof Just){
    console.log(`skill is : ${skill.value}`);
}else{
    console.log('skill is empty');
}

```

이 느낌은 모나드라는 인터페이스를 기준으로 모듈들을 짜야만 할것 같은 느낌이다.

값이든 , 어떠한 객체든 하나의 잘 짜여진 인터페이스로 관리를 하는것이다.



일상생활에서의 예를들면......뭐가 있을까...??


### List monad

ing......

연산작업을 일련의 과정으로. 






출처 :

- [http://www.haruair.com/blog/2986](http://www.haruair.com/blog/2986)


참고할만 자료 : 

- [http://reactivex.io/rxjs/manual/overview.html](http://reactivex.io/rxjs/manual/overview.html)
- [https://curiosity-driven.org/monads-in-javascript](https://curiosity-driven.org/monads-in-javascript)
- [https://github.com/fantasyland/fantasy-land](https://github.com/fantasyland/fantasy-land)

```html
<input type="text" id="merlin" value=""/>
<div id="screen"></div>
```

```javascript
Rx.Observable.fromEvent(document.getElementById('merlin'), 'input')
		.map((e) => e.target.value)
        .map((text) => '<h3>' + text + '<h3>')
        .subscribe((result) => {
            document.getElementById('screen').innerHTML = result
        });
```