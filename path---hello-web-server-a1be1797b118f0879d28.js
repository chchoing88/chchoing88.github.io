webpackJsonp([0x945badf6b65d],{517:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/hello-webServer/index.md absPath of file >>> MarkdownRemark",html:'<h2>web Server</h2>\n<hr>\n<ul>\n<li>web server 는 요청 과 응답의 연속이다.</li>\n<li>web browser에 web page주소를 입력(요청) 하면 입력한 주소에 맞는 웹 페이지(응답) 을 제공한다. </li>\n<li>요청은 요청하는 url , 요청하는 방식 (ex. get,post..) , 요청하는 agent , 요청자가 받을 수 있는 형식이나 charter-set , encoding , language  등등을 함께 실어서 보낸다.</li>\n<li>응답은 응답에 상태 ( ex. 200 , 404 error) , 응답하는 data를 전달한다.</li>\n</ul>\n<p>여기서 nodeJs는 이 웹서버와 관련된 모든 기능들을 http 모듈에 담았다.</p>\n<p>따라서 우리는 앞으로 http 모듈에 대해서 다룰것이고</p>\n<p>이 모듈을 조금 더 편리하고 다양한 기능을 다룰 수 있게끔 만든 express 모듈을 알아볼 것이다.\nexpress 모듈은 http 모듈에 여러 기능을 추가해 쉽게 사용할 수 있게 만든 모듈이다.</p>\n<h3>http 모듈</h3>\n<ul>\n<li>http 모듈은 createServer()로 server라는 객체를 생성한다.</li>\n<li>listen(port[, callback])은 서버를 실행한다.</li>\n<li>stop([callback])은 서버를 종료한다.</li>\n</ul>\n<h3>server 객체</h3>\n<ul>\n<li>server 객체는 EventEmitter 객체를 기반으로 만들어졌으므로 이벤트를 연결 시킬수 있다.</li>\n<li>server.on({eventName},{eventHandler})</li>\n<li>예를 들면 내부적으로 connection이 발생하면 server.emit(‘connection’); 이라고 발생을 시키면 외부에서 우린 on 메서드로 그 이벤트를 감지해서 해당 후속 작업을 이어 나갈 수 있다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'connection\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Connection ON\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<ul>\n<li>“request” 라는 이벤트도 존재하는데 이 이벤트는 예외적으로 on 메서드를 사용해서 지정할 필요가 없고 createServer시 매개변수로 콜백(request 가 발생 했을시 이벤트 핸들러 ) 함수를 넘겨 놓으면 이벤트 핸들러(이벤트 리스너) 처럼 사용 할 수 있다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 응답헤더</span>\n    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token string">\'Content-Type\'</span> <span class="token punctuation">:</span> <span class="token string">\'text/html\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'Set-Cookie\'</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">\'breakfase = toast\'</span><span class="token punctuation">;</span>Expire <span class="token operator">=</span> \' <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">\'dinner = chicken\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 응답본문</span>\n    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'&lt;h1>블라블라~&lt;/h1>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>response 객체</h3>\n<ul>\n<li>클라이언트에 웹 페이지를 제공하려면 응답 메세지가 필요하다.</li>\n<li>request 이벤트가 발생되면 핸들러(리스너)의 두번째 매개변수로 전달되는 response 객체를 사용해서 사용자에게 응답을 전달한다.</li>\n<li>응답 메시지의 ‘Content-Type’ 는 전달할 데이터 속성을 뜻한다.</li>\n<li>response 객체를 사용하면 클라이언트에 쿠키를 할당할 수 있다. 응답헤더에 ‘Set-Cookie’ 라는 키 값으로 셋팅 해준다.</li>\n<li>쿠키를 출력할 때에는 request.headers.cookie 라는 값으로 참조 한다. </li>\n</ul>\n<h3>request 객체</h3>\n<ul>\n<li>server의 request 이벤트가 발생했을 때 이벤트 리스너의 첫 번째 매개변수에는 request 객체가 들어갑니다.</li>\n<li>method , url , headers, trailers, httpVersion 등, 속성들이 존재한다.</li>\n<li>이런 속성들을 사용하면 요청한 페이지를 적절하게 제공하는 것은 물론 요청 방식에 따라 페이지를 구분할 수 있다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 그냥 요청자의 pathname을 구한다고 보면 된다.</span>\n    <span class="token keyword">const</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">arse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname<span class="token punctuation">;</span> \n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>pathname <span class="token operator">==</span> <span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//or</span>\n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">\'GET\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//or ( GET 요청 방식에서의 매개변수 추출 )</span>\n    <span class="token comment">// http://localhost/?name=hoho&amp;region=suwon</span>\n    <span class="token keyword">const</span> query <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> ture<span class="token punctuation">)</span><span class="token punctuation">.</span>query<span class="token punctuation">;</span>\n    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// {"name":"hoho","region":"suwon"}</span>\n\n    <span class="token comment">//or ( POST 요청 방식에서의 매개변수 추출 )</span>\n    <span class="token comment">// request 이벤트가 발생한 후 request 객체의 data의 이벤트로 데이터가 전달 된다.</span>\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'POST Data:\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">//or 쿠키 추출</span>\n    <span class="token keyword">const</span> cookie1 <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span> <span class="token comment">// return 값은 문자열이다.</span>\n    <span class="token keyword">const</span> cookie2 <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\';\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cookieItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> arrCookieItem <span class="token operator">=</span> cookieItem<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'=\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            key<span class="token punctuation">:</span> arrCookieItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> arrCookieItem<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 은 객체</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{title:"hello-webServer",date:"March 15, 2018"}}},pathContext:{slug:"/hello-webServer/"}}}});
//# sourceMappingURL=path---hello-web-server-a1be1797b118f0879d28.js.map