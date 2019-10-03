webpackJsonp([71473981912016],{417:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/javascript-pattern/index.md absPath of file >>> MarkdownRemark",html:'<h2>Goal</h2>\n<ul>\n<li>다양한 자바스크립트 패턴을 익히고 어느 상황에서 사용되는지 파악한다.</li>\n</ul>\n<h2>Contents</h2>\n<ul>\n<li><a href="#callback">callback pattern</a></li>\n<li><a href="#promise">promise pattern</a></li>\n<li><a href="#partial">partial pattern</a></li>\n<li><a href="#memoization">memoization pattern</a></li>\n<li><a href="#singleton">singleton pattern</a></li>\n<li><a href="#factory">factory pattern</a></li>\n<li><a href="#sandbox">sandbox pattern</a></li>\n<li><a href="#decoration">decoration pattern</a></li>\n<li><a href="#strategy">strategy pattern</a></li>\n<li><a href="#proxy">proxy pattern</a></li>\n<li><a href="#chaning">chaning pattern</a></li>\n</ul>\n<h2>Pattern</h2>\n<h3><span id="callback">callback pattern</span></h3>\n<ul>\n<li>콜백은 나중에 실행할 부차 함수에 인자로 넣는 함수다. </li>\n<li>여기서 콜백이 실행될 ‘나중’시점이 부차 함수의 실행 완료 이전이면 동기, 반대로 실행 완료 이후면 비동기라고 본다.</li>\n</ul>\n<h4>시나리오</h4>\n<ul>\n<li>컨퍼런스에 attend(참가자) 등록을 하는 시스템이 있다.</li>\n<li>한명 또는 여러명을 한번에 참가 등록을 할수 있다.</li>\n<li>attend(참가자)는 또는 참가자들은 참가자 등록이 되었는지 안되었는지 확인할 수 있다.</li>\n<li>attend(참가자)는 또는 참가자들은 이름을 알 수 있다. </li>\n</ul>\n<h4>code</h4>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;</span><span class="constant other js"><span>C</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;singleton&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;</span><span class="constant other object js"><span>C</span></span><span class="meta function js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>attend</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>name</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage type var js"><span>var</span></span><span>&nbsp;fullName&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;name</span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>registry</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>isRegistry</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>getFullName</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;참가자&nbsp;한명이&nbsp;생성되었다.&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;참가자는&nbsp;참가자&nbsp;등록에&nbsp;실제&nbsp;현실에선&nbsp;수동적이지만&nbsp;oop&nbsp;에선&nbsp;능동적으로&nbsp;생각한다.</span></span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;attendee1&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="constant other object js"><span>C</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>attend</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>merlin1</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;attendee2&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="constant other object js"><span>C</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>attend</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>merlin2</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;</span><span class="constant other object js"><span>C</span></span><span class="meta function js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>attendeeCollection</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage type var js"><span>var</span></span><span>&nbsp;attendees&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span><span>]</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>contains</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attendee</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>indexOf</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>attendee</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>&gt;</span></span><span>&nbsp;</span><span class="keyword operator js"><span>-</span></span><span class="constant numeric decimal js"><span>1</span></span><span class="punctuation terminator statement js"><span>;</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;들어있니??</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>add</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attendee</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span class="keyword operator logical js"><span>!</span></span><span class="variable language js"><span>this</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>contains</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>attendee</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>push</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>attendee</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>remove</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attendee</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="storage type var js"><span>var</span></span><span>&nbsp;index&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>indexOf</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>attendee</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span>index&nbsp;</span><span class="keyword operator comparison js"><span>&gt;</span></span><span>&nbsp;</span><span class="keyword operator js"><span>-</span></span><span class="constant numeric decimal js"><span>1</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>splice</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>index</span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="constant numeric decimal js"><span>1</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>iterate</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>callback</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span>&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;반복..</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;attendees의&nbsp;각&nbsp;attendee에&nbsp;대해&nbsp;콜백을&nbsp;실행한다..</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>forEach</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>callback</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>addAttendeesToCollection</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attendeeArray</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>attendeeArray</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>forEach</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attendee</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>collection</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>add</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>attendee</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;attendees&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="variable other object js"><span>Conference</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>attendeeCollection</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="entity name function js"><span>addAttendeesToCollection</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta brace square js"><span>[</span></span><span>attendee1</span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;attendee2</span><span class="meta brace square js"><span>]</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>attendees</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>iterate</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>doCheckIn</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>attend</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;익명의&nbsp;콜백함수&nbsp;-&gt;&nbsp;디버깅&nbsp;용이함을&nbsp;위해&nbsp;이름을&nbsp;지정한다.&nbsp;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;</span><span class="variable other object js"><span>attend</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>checkIn</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div></pre>\n<h4>주의사항</h4>\n<ul>\n<li>콜백을 사용할때는 디버깅에 용이하기 위해 이름을 붙여주자.</li>\n<li>콜백 헬이 발생할때는 편 코딩으로 해결할수 있다.</li>\n<li>콜백 함수 안의 this를 주의하자.</li>\n</ul>\n<h4>정리</h4>\n<ul>\n<li>한가지 일을 여러번 수행해야 할때 함수하나를 인자로 보내(콜백 패턴) 여러번 호출을 진행할수 있다.</li>\n<li>A작업이 끝난뒤에 B작업이 수행되어지길 바랄때 콜백 패턴을 이용할 수 있다.</li>\n</ul>\n<h3><span id="callback">promise pattern</span></h3>\n<ul>\n<li>비동기 액션을 초기화하고 성공과 실패 케이스를 각각 처리할 콜백을 준다.</li>\n<li>이벤트 기반의 비동기 프로그래밍보다 훨씬 더 이해하기 쉽고 우아하며 탄탄한 코드를 작성할 수 있다.</li>\n</ul>\n<h3><span id="callback">partial pattern</span></h3>\n<h3><span id="callback">memoization pattern</span></h3>\n<h3><span id="callback">singleton pattern</span></h3>\n<h3><span id="callback">factory pattern</span></h3>\n<h3><span id="callback">sandbox pattern</span></h3>\n<h3><span id="callback">decoration pattern</span></h3>\n<ul>\n<li>단일 책임 원칙을 준수하면서 믿음성이 강화된 코드를 효과적으로 작성할 수 있다.</li>\n</ul>\n<h3><span id="callback">strategy pattern</span></h3>\n<h3><span id="callback">proxy pattern</span></h3>\n<h3><span id="callback">chaning pattern</span></h3>',frontmatter:{title:"javascript pattern",date:"August 05, 2018"}}},pathContext:{slug:"/javascript-pattern/"}}}});
//# sourceMappingURL=path---javascript-pattern-76a18b1038c2a2cc7809.js.map