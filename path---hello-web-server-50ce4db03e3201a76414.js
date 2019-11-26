webpackJsonp([0x945badf6b65d],{491:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/hello-webServer/index.md absPath of file >>> MarkdownRemark",html:'<h2>web Server</h2>\n<hr>\n<ul>\n<li>web server 는 요청 과 응답의 연속이다.</li>\n<li>web browser에 web page주소를 입력(요청) 하면 입력한 주소에 맞는 웹 페이지(응답) 을 제공한다. </li>\n<li>요청은 요청하는 url , 요청하는 방식 (ex. get,post..) , 요청하는 agent , 요청자가 받을 수 있는 형식이나 charter-set , encoding , language  등등을 함께 실어서 보낸다.</li>\n<li>응답은 응답에 상태 ( ex. 200 , 404 error) , 응답하는 data를 전달한다.</li>\n</ul>\n<p>여기서 nodeJs는 이 웹서버와 관련된 모든 기능들을 http 모듈에 담았다.</p>\n<p>따라서 우리는 앞으로 http 모듈에 대해서 가볍게 다뤄 보겠다.</p>\n<h3>http 모듈</h3>\n<ul>\n<li>http 모듈은 createServer()로 server라는 객체를 생성한다.</li>\n<li>listen(port[, callback])은 서버를 실행한다.</li>\n<li>stop([callback])은 서버를 종료한다.</li>\n</ul>\n<h3>server 객체</h3>\n<ul>\n<li>server 객체는 EventEmitter 객체를 기반으로 만들어졌으므로 이벤트를 연결 시킬수 있다.</li>\n<li>server.on({eventName},{eventHandler})</li>\n<li>예를 들면 내부적으로 connection이 발생하면 server.emit(‘connection’); 이라고 발생을 시키면 외부에서 우린 on 메서드로 그 이벤트를 감지해서 해당 후속 작업을 이어 나갈 수 있다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="variable other object js"><span>server</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>on</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>connection</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>code</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>Connection&nbsp;ON</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div></pre>\n<ul>\n<li>“request” 라는 이벤트도 존재하는데 이 이벤트는 예외적으로 on 메서드를 사용해서 지정할 필요가 없고 createServer시 매개변수로 콜백(request 가 발생 했을시 이벤트 핸들러 ) 함수를 넘겨 놓으면 이벤트 핸들러(이벤트 리스너) 처럼 사용 할 수 있다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="variable other object js"><span>http</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>createServer</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>request</span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="variable parameter function js"><span>response</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;응답헤더</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>response</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>writeHead</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="constant numeric decimal js"><span>200</span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>Content-Type</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>text/html</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>Set-Cookie</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span class="meta brace square js"><span>[</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>breakfase&nbsp;=&nbsp;toast</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span><span>Expire&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span class="invalid illegal string js"><span>&nbsp;+&nbsp;date.toUTCString(),</span></span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span class="string quoted single js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span>dinner&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;chicken</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span class="invalid illegal string js"><span>]</span></span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span class="string quoted single js"><span class="invalid illegal string js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span class="string quoted single js"><span class="invalid illegal string js"><span>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;응답본문</span></span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span class="string quoted single js"><span>&nbsp;&nbsp;&nbsp;&nbsp;response.end(</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span>h1</span><span class="keyword operator comparison js"><span>&gt;</span></span><span>블라블라</span><span class="keyword operator bitwise js"><span>~</span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>h1</span><span class="keyword operator comparison js"><span>&gt;</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span class="invalid illegal string js"><span>);</span></span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span class="string quoted single js"><span class="invalid illegal string js"><span>});</span></span></span></span></span></span></span></span></div></pre>\n<h3>response 객체</h3>\n<ul>\n<li>클라이언트에 웹 페이지를 제공하려면 응답 메세지가 필요하다.</li>\n<li>request 이벤트가 발생되면 핸들러(리스너)의 두번째 매개변수로 전달되는 response 객체를 사용해서 사용자에게 응답을 전달한다.</li>\n<li>응답 메시지의 ‘Content-Type’ 는 전달할 데이터 속성을 뜻한다.</li>\n<li>response 객체를 사용하면 클라이언트에 쿠키를 할당할 수 있다. 응답헤더에 ‘Set-Cookie’ 라는 키 값으로 셋팅 해준다.</li>\n<li>쿠키를 출력할 때에는 request.headers.cookie 라는 값으로 참조 한다. </li>\n</ul>\n<h3>request 객체</h3>\n<ul>\n<li>server의 request 이벤트가 발생했을 때 이벤트 리스너의 첫 번째 매개변수에는 request 객체가 들어갑니다.</li>\n<li>method , url , headers, trailers, httpVersion 등, 속성들이 존재한다.</li>\n<li>이런 속성들을 사용하면 요청한 페이지를 적절하게 제공하는 것은 물론 요청 방식에 따라 페이지를 구분할 수 있다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="variable other object js"><span>http</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>createServer</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>request</span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="variable parameter function js"><span>response</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;그냥&nbsp;요청자의&nbsp;pathname을&nbsp;구한다고&nbsp;보면&nbsp;된다.</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>pathname</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>url</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>arse</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="variable other object js"><span>request</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>url</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>pathname</span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span>pathname&nbsp;</span><span class="keyword operator comparison js"><span>==</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>/</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta brace round js"><span>)</span></span><span class="meta brace curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>or</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="variable other object js"><span>request</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>method</span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>==</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>GET</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta brace round js"><span>)</span></span><span class="meta brace curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>or&nbsp;(&nbsp;GET&nbsp;요청&nbsp;방식에서의&nbsp;매개변수&nbsp;추출&nbsp;)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;</span><span class="markup underline link http hyperlink"><span>http://localhost/?name=hoho&amp;region=suwon</span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>query</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>url</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>parse</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="variable other object js"><span>request</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>url</span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;ture</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>query</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>response</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>end</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="support class js"><span>JSON</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>stringify</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>query</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;{&quot;name&quot;:&quot;hoho&quot;,&quot;region&quot;:&quot;suwon&quot;}</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>or&nbsp;(&nbsp;POST&nbsp;요청&nbsp;방식에서의&nbsp;매개변수&nbsp;추출&nbsp;)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;request&nbsp;이벤트가&nbsp;발생한&nbsp;후&nbsp;request&nbsp;객체의&nbsp;data의&nbsp;이벤트로&nbsp;데이터가&nbsp;전달&nbsp;된다.</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>request</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>on</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>data</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>data</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>POST&nbsp;Data:</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;data</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>or&nbsp;쿠키&nbsp;추출</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>cookie1</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>request</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>headers</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>cookie</span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;return&nbsp;값은&nbsp;문자열이다.</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>cookie2</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>request</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>headers</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>cookie</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>split</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>;</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>map</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>cookieItem</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type var js"><span>let</span></span><span>&nbsp;arrCookieItem&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>cookieItem</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>split</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>=</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;arrCookieItem</span><span class="meta brace square js"><span>[</span></span><span class="constant numeric decimal js"><span>0</span></span><span class="meta brace square js"><span>]</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;arrCookieItem</span><span class="meta brace square js"><span>[</span></span><span class="constant numeric decimal js"><span>1</span></span><span class="meta brace square js"><span>]</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;return&nbsp;은&nbsp;객체</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div></pre>',
frontmatter:{title:"hello-webServer",date:"March 15, 2018"}}},pathContext:{slug:"/hello-webServer/"}}}});
//# sourceMappingURL=path---hello-web-server-50ce4db03e3201a76414.js.map