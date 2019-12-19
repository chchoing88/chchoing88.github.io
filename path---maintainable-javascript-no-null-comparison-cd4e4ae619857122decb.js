webpackJsonp([0x94c91ddd445b],{499:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/maintainable-javascript/no-null-comparison.md absPath of file >>> MarkdownRemark",html:'<p>변수에 필요한 값이 할당되었는지 확인할 때 <code>null</code>과 비교하는 방법은 흔히 잘못 사용하는 패턴이다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;Controller&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta function json js"><span class="entity name function js"><span>process</span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>items</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span>items&nbsp;</span><span class="keyword operator comparison js"><span>!==</span></span><span>&nbsp;</span><span class="constant language null js"><span>null</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>items</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>sort</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>items</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>forEach</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>itme</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;do&nbsp;Something...</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p>위 코드는 items 변수에 sort() 와 forEach() 를 사용하는 것을 보아 items 변수가 배열이라는 전제하에 작성한 코드인 듯합니다.\n코드 의도는 명확하지만, items 변수가 배열이 아니면 로직을 수행할 수 없습니다. </p>\n<p>변수를 단순히 null과 비교하면 변수 값에 대한 정보가 부족해 로직을 계속 진행해도 안전한지 알 수 없습니다. 다행이 자바스크립트는 변수에 원하는 값이 할당되었는지 확인하는 방법을 다양하게 제공합니다.</p>\n<h2>기본 데이터 타입 알아내기</h2>\n<ul>\n<li>typeof를 문자열에 사용하면 ‘string’을 반환합니다.</li>\n<li>typeof를 숫자에 사용하면 ‘number’을 반환합니다.</li>\n<li>typeof를 불린에 사용하면 ‘boolean’을 반환합니다.</li>\n<li>typeof를 undefined에 사용하면 ‘undefined’을 반환합니다.</li>\n</ul>\n<p>typeof 연산자는 선언되지 않은 변수에 사용해도 에러가 발생하지 않습니다. 선언한 변수이든, 선언하지 않은 변수이든 값이 undefined이면 둘다 ‘undefined’로 반환합니다.</p>\n<p>null은 변수에 값이 할당되었는지 확인할 때 사용하면 안됩니다. 단순히 변수를 null 값으로만 비교하면 무슨 값을 원하는지 알 수 없습니다.\n단, null 비교가 허용되는 예외 사항이 있는데 기대 하는 값이 정말 null 이라면 null을 직접 사용해도 됩니다. 여기서 null 값과 비교할 때는 반드시 비교 연산자로 === 또는 !== 을 사용해야 합니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;element&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="support variable dom js"><span>document</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>getElementyById</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>my-div</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span>&nbsp;element&nbsp;</span><span class="keyword operator comparison js"><span>!==</span></span><span>&nbsp;</span><span class="constant language null js"><span>null</span></span><span>&nbsp;</span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="variable other object js"><span>element</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>className</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>found</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p>위 코드에서는 조건에 맞는 DOM 요소가 없으면 document.getElementById() 메서드는 실제로 null을 반환합니다. 이 메서드는 확실히 null을 반환하거나 요소를 반환합니다.\nnull은 기대하던 값중 하나이므로 !== 연산자를 사용해 null 과 비교해도 됩니다. </p>\n<h2>객체 참조 타입 알아내기</h2>\n<p>참조 타입이 무엇인지 판단하려면 <code>instanceof</code> 연산자를 사용합니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span>값&nbsp;</span><span class="keyword operator instanceof js"><span>instanceof</span></span><span>&nbsp;todtjdwkaud</span></span></div></pre>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;Date&nbsp;객체인지&nbsp;확인</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span>value&nbsp;</span><span class="keyword operator instanceof js"><span>instanceof</span></span><span>&nbsp;</span><span class="support class js"><span>Date</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="variable other object js"><span>value</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>getFullYear</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span>value&nbsp;</span><span class="keyword operator instanceof js"><span>instanceof</span></span><span>&nbsp;</span><span class="support class js"><span>Error</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>throw</span></span><span>&nbsp;valeu</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p><code>instanceof</code> 연산자는 객체를 생성할 때 사용한 생성자뿐만 아니라 프로토타입 체인도 같이 검사를 합니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;now&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta class instance constructor js"><span class="keyword operator new js"><span>new</span></span><span>&nbsp;</span><span class="entity name type instance js"><span>Date</span></span></span><span class="meta brace round js"><span>(</span><span>)</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>now&nbsp;</span><span class="keyword operator instanceof js"><span>instanceof</span></span><span>&nbsp;</span><span class="support class js"><span>Object</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;true</span></span></span></div><div class="line"><span class="source js"><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>now&nbsp;</span><span class="keyword operator instanceof js"><span>instanceof</span></span><span>&nbsp;</span><span class="support class js"><span>Date</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;true</span></span></span></div></pre>\n<h3>함수 알아내기</h3>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>myFunc</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;권장</span></span></span></div><div class="line"><span class="source js"><span class="entity name type object console js"><span>console</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function console js"><span>log</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="keyword operator typeof js"><span>typeof</span></span><span>&nbsp;myFunc&nbsp;</span><span class="keyword operator comparison js"><span>===</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>function</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;true</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;IE&nbsp;하위에는&nbsp;querySelectorAll&nbsp;typeof로&nbsp;확인시&nbsp;&#39;object&#39;로&nbsp;뜸</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;DOM&nbsp;메서드&nbsp;인지&nbsp;확인</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>querySelectorAll</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span>&nbsp;</span><span class="keyword operator in js"><span>in</span></span><span>&nbsp;</span><span class="support variable dom js"><span>document</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;images&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="support variable dom js"><span>document</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>querySelectorAll</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>img</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<h3>배열 알아내기</h3>\n<p>프레임 간 배열을 전달할 때 instanceof Array를 사용하면 결과 값이 잘못 나온다. 각 프레임이 각각 Array 생성자를 가지고 있고 한 프레임의 인스턴스는 다른 프레임에서 인식할 수 없기 때문이다.\n그래서 더글라스 크락포드는 덕 타이핑을 권장했는데, 이는 sort() 메서드가 있는지만 확인하는 방법이다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;arrays&nbsp;덕&nbsp;타이핑</span></span></span></div><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>isArray</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>value</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="keyword operator typeof js"><span>typeof</span></span><span>&nbsp;</span><span class="variable other object js"><span>value</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>sort</span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>===</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>function</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span>)</span></span></div></pre>\n<p>배열 타입인지 정확하게 알아내기 위해서는 수많은 검사를 해야하지만 Kangax라고 알려진 유리 자이체프는 다음과 같은 명쾌한 해결책을 내놨다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>isArray</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>value</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="support class js"><span>Object</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property js"><span>prototype</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other object property js"><span>toString</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>call</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>value</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>===</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>[object&nbsp;Array]</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span>)</span></span></div></pre>\n<h3>프로퍼티 알아내기</h3>\n<p>객체에 프로퍼티가 있는지 확인할 때 보통 null이나 undefined를 자주 사용한다.\n하지만 이는 버그를 유발 할 수 있다.</p>\n<p>프로퍼티가 존재하는지 확인할 때는 in 연산자를 사용하는 것이 가장 좋다.\n상속받는 프로퍼티는 제외하고 객체 인스턴스에 프로퍼티가 있는지 검사하려면 hasOwnProperty() 메서드를 사용한다.\n참고로 IE8 이하 버전의 DOM 객체는 Object를 상속받지 않아 hasOwnProperty() 메서드가 없다. </p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>related</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span>&nbsp;</span><span class="keyword operator in js"><span>in</span></span><span>&nbsp;object</span><span class="meta brace round js"><span>)</span></span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="variable other object js"><span>object</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>hasOwnProperty</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>related</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;do&nbsp;Something..</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>',frontmatter:{title:"(읽기 쉬운 자바스크립트) null 비교 금지",date:"May 02, 2019"}}},pathContext:{slug:"/maintainable-javascript/no-null-comparison/"}}}});
//# sourceMappingURL=path---maintainable-javascript-no-null-comparison-cd4e4ae619857122decb.js.map