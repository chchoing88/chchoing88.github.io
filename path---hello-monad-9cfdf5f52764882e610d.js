webpackJsonp([67469829867878],{519:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/hello-monad/index.md absPath of file >>> MarkdownRemark",html:'<h2>Intro</h2>\n<hr>\n<p>리엑트 및 함수형 프로그래밍에 많이 나오는 모나드 패턴 알아보자.</p>\n<p>찾아보니 너무 어렵다. 특정하게 정의를 내려가기 보단 코드를 조금씩 발전시켜 나가면서 느낌을 익혀보자는 취지로 작성한다.</p>\n<h2>이해해보자</h2>\n<hr>\n<h3>즉시 실행함수로 값 두개를 더해보자.</h3>\n<p>아래 코드를 보자.\n별도로 설명할건 없을꺼 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 덧셈</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span> \n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token operator">+</span>y<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>이쁘다..(?)</p>\n<p>딱봐도 뭔가 뎁스가 점점 깊어질꺼 같기도 하다. 느낌이 뭔가 원시적이기도 하고 그 다음에는 helper 함수를 이용해서 조금 더 깔끔하게 바꿔보자.</p>\n<h3>bind 라는 helper</h3>\n<p>여기서 bind 는  Function에 있는 bind가 아닌 임의로 만든 helper 함수라는걸 알아두자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 이걸 이쁘게..</span>\n<span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 컨텍스트가 있는 연속된 계산...이쁜?? 덧셈</span>\n\n<span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n \tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token operator">+</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>음.. 뭔가 더 알아보기 쉬워지지 않았는가????\n요느낌 그대로 모나드는 어떻게 사용하는가를 알아보자.</p>\n<h3>Identity monad v1</h3>\n<p>조금은 어렵고 난해한 그림으로 설명하는 모나드 사이트를 소개한다.</p>\n<p><a href="http://lazyswamp.tistory.com/entry/functorsapplicativesandmonadsinpictures">http://lazyswamp.tistory.com/entry/functorsapplicativesandmonadsinpictures</a></p>\n<p>이해가 안된다면 위 코드를 객체를 이용해서 짜본다고 생각하면 조금 더 이해하기 쉽겠다.\n왜? 객체를 이용해야 하는가.. 그건 아래에서 조금 더 다뤄보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 어떠한 특정 값을 wrapping..</span>\n<span class="token keyword">function</span> <span class="token function">Identity</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 여기선 어떠한 값을 Identity 가 들고있기에 어떠한 함수와 결합할것지만 넘겨주면 된다.</span>\nIdentity<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 출력을 위한</span>\nIdentity<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Identity({this.value})`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Identity monad test</span>\n<span class="token comment">// 5 + 6</span>\n\n<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Identity</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>\n\t<span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Identity</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>\n            <span class="token keyword">function</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Identity monad v2</h3>\n<p>위에 코드도 그닥 깔끔하지 않으니 es6 를 사용해서 조금 더 깔끔하게 작성해보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 간추려 보자...</span>\n\n<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Identity</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>x <span class="token operator">=></span>\n\t<span class="token keyword">new</span> <span class="token class-name">Identity</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>y <span class="token operator">=></span>\n  \t    x<span class="token operator">+</span>y\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>음..뭔가 더 있어보인다.\n계속 발전 시켜 나가면서 이게 왜 쓰이고 왜 좋은지 장점들을 알아보자.</p>\n<h3>Maybe monad</h3>\n<p>위의 identity 모나드의 문제점을 한번 보자..</p>\n<p>만약 계산중에 중간에 값이 없는 경우가 들어온다면???? 결과는 어떻게 나올까??</p>\n<p>위의 코드에서 ‘6’ 을 지워보고 테스트 해보자 결과는?? </p>\n<p><strong>NaN</strong></p>\n<p>이럴경우에는 어떻게 처리할까.. 또 다른 코드를 보자.</p>\n<p>우선 단순하게 Identity 라는 명칭이 Just로 바꾸었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 어떠한 특정 값을 wrapping..</span>\n<span class="token keyword">function</span> <span class="token function">Just</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 여기선 어떠한 값을 Identity 가 들고있기에 어떠한 함수와 결합할것지만 넘겨주면 된다.</span>\nJust<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 출력을 위한</span>\nJust<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Identity(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 테스트를 위한 Nothing</span>\n<span class="token keyword">let</span> Nothing <span class="token operator">=</span> <span class="token punctuation">{</span>\n    bind <span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    toString <span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`this is Nothing`</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 중간에 빈 Nothing이 들어온다.</span>\n<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Just</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>x <span class="token operator">=></span>\n    Nothing<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>y <span class="token operator">=></span>\n        x<span class="token operator">+</span>y\n    <span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 에러가 뜨지 않는다. </span>\n</code></pre>\n      </div>\n<p>위 코드는 에러가 뜨지 않는다. 어디서 잘못되었는지 알 도리가 없다.\n대신 Nothing 이 반환된다.</p>\n<p>이 코드는 간단해서 금방 어디가 잘못되었는지 알 수 있지만,</p>\n<p>코드가 조금만 복잡해지더라도 어디서 잘못되었는지 파악하기가 힘들수 있다.</p>\n<p>그렇담 이제부터 뭔가 null,undefined 이나 Nothing 체크가 필요해보인다. 새로운 예제를 보자.</p>\n<p>우리는 보통 값이 있는지 없는지를 확인할때 가장 흔하게 if 문을 자주 쓴다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 유저의 아바타를 가져오는 함수</span>\n<span class="token comment">// 별도의 설명은 필요 없을 듯 싶다.</span>\n<span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        getAvatar <span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// if</span>\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> avatar <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>avatar <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">let</span> skill <span class="token operator">=</span> avatar<span class="token punctuation">.</span>skill <span class="token comment">// 아바타의 스킬을 가져오기 위한 몸부림....</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>if의 몸부림이 보인다.</p>\n<p>이번엔 Maybe 모나드로 처리해보자. 단순히 모나드에 값이 아닌 객체를 넣는게 다르게 보일 수 있다.</p>\n<p>방식은 비어있는 값을 만날때에는 연산이 정지하도록 만들어 보자. </p>\n<p>위와 동일한 예제이다. Just 객체도 위와 동일하다. Nothing도 위와 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Just</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        getAvatar<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> Nothing<span class="token punctuation">;</span> <span class="token comment">// 값이 없는 객체이지만 모나드와 동일한 메서드 구성을 지니고 있긴하다. </span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>    <span class="token comment">// 이전까지는 값을 넣었었는데 이젠 객체를 넣는다.</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// if를 대안한 방법... 우린 스킬을 얻길 원한다!!!</span>\n<span class="token keyword">let</span> skill <span class="token operator">=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">// 여기서 user 는 this.value</span>\n    <span class="token keyword">return</span> user<span class="token punctuation">.</span><span class="token function">getAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>avatar<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// getAvatar를 호출하고 나서 나온 객체에 대해서 다시 binding..</span>\n    <span class="token keyword">return</span> avatar<span class="token punctuation">.</span>skill<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span>skill <span class="token keyword">instanceof</span> <span class="token class-name">Just</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`skill is : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>skill<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'skill is empty\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>이 느낌은 모나드라는 인터페이스를 기준으로 모듈들을 짜야만 할것 같은 느낌이다.</p>\n<p>값이든 , 어떠한 객체든 하나의 잘 짜여진 인터페이스로 관리를 하는것이다.</p>\n<p>일상생활에서의 예를들면…뭐가 있을까…??</p>\n<h3>List monad</h3>\n<p>ing…</p>\n<p>연산작업을 일련의 과정으로. </p>\n<p>출처 :</p>\n<ul>\n<li><a href="http://www.haruair.com/blog/2986">http://www.haruair.com/blog/2986</a></li>\n</ul>\n<p>참고할만 자료 : </p>\n<ul>\n<li><a href="http://reactivex.io/rxjs/manual/overview.html">http://reactivex.io/rxjs/manual/overview.html</a></li>\n<li><a href="https://curiosity-driven.org/monads-in-javascript">https://curiosity-driven.org/monads-in-javascript</a></li>\n<li><a href="https://github.com/fantasyland/fantasy-land">https://github.com/fantasyland/fantasy-land</a></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>merlin<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>screen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'merlin\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'&lt;h3>\'</span> <span class="token operator">+</span> text <span class="token operator">+</span> <span class="token string">\'&lt;h3>\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'screen\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> result\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"hello monad",date:"February 13, 2018"}}},pathContext:{slug:"/hello-monad/"}}}});
//# sourceMappingURL=path---hello-monad-9cfdf5f52764882e610d.js.map