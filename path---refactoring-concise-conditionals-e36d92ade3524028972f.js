webpackJsonp([0xd2eba19ff681],{468:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/refactoring/concise-conditionals.md absPath of file >>> MarkdownRemark",html:'<p>해당 글은 <code>리팩토링 (코드 품질을 개선하는 객체지향 사고법)</code> 에서 발췌 했습니다. 코드 예제는 javascript로 전환하였습니다.</p>\n<h2>조건문 쪼개기 (Decompose Conditional)</h2>\n<p>복잡한 조건문(if-then-else)이 있을땐 if, tehn, eles 부분을 각각 메서드로 빼내자.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;bad</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="variable other object js"><span>data</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>before</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="constant other js"><span>SUMMER_START</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="keyword operator logical js"><span>||</span></span><span>&nbsp;</span><span class="variable other object js"><span>data</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>after</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="constant other js"><span>SUMMER_END</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;charge&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;quantity&nbsp;</span><span class="keyword operator js"><span>*</span></span><span>&nbsp;_winterRate&nbsp;</span><span class="keyword operator js"><span>+</span></span><span>&nbsp;_winterServiceCharge</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span><span>&nbsp;</span><span class="keyword control js"><span>else</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;charge&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;quantity&nbsp;</span><span class="keyword operator js"><span>*</span></span><span>&nbsp;_summerRate</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;good</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="meta function-call js"><span class="entity name function js"><span>notSummer</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>date</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;charge&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>winterCharge</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>quantity</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span><span>&nbsp;</span><span class="keyword control js"><span>else</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;charge&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>summerCharge</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>quantity</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p>큰 덩어리의 코드를 잘게 쪼개고 각 코드 조각을 용도에 맞는 이름의 메서드 호출로 바꾸면 코드의 용도가 분명히 드러난다.\n이 과정을 조건문의 if절, then절, else절 각각에 대해 수행하면 더 큰장점을 얻을 수 있다. </p>\n<h2>중복 조건식 통합 (Consolidate Conditional Expression)</h2>\n<p>여러 조건 검사식의 결과가 같을 땐 하나의 조건문으로 합친 후 메서드로 빼내자.</p>\n<p>서로 다른 여러 개의 조건 검사식이 있는데 조건에 따른 결과가 모두 같을 때가 간혹 있다. 이럴 때는 논리 연산자 AND와 OR을 사용해서 여러 조건 검사를 하나로 합쳐야 한다.\n조건문을 합쳐야 하는 이유는 두가지 이다.\n첫째, 조건식을 합치면 여러 검사를 OR 연산자로 연결해서 실제 하나의 검사 수행을 표현해서 무엇을 검사하는지 더 확실히 이해할 수 있다.\n둘째, 이러한 조건식 통합 리팩토링 기법을 실시하면 메서드 추출을 적용할 수 있는 기반이 마련된다. </p>\n<p>조건 검사식이 독립적이고 하나의 검사로 인식되지 말아야 할 땐 이방법을 사용하지 말자. </p>\n<h3>예제: 논리합(OR) 연산자</h3>\n<pre class="editor editor-colors"></pre>\n<h2>조건문의 공통 실행 코드 뺴내기 (Consolidate Duplicate Conditional Fragments)</h2>\n<h2>제어 플래그 제거 (Remove Control Flag)</h2>\n<h2>여러 겹의 조건문을 감시 절로 전환 (Replace Nested Conditional with Guard Clauses)</h2>\n<h2>조건문을 재정의로 전환 (Replace Conditional with Polymorphism)</h2>\n<h2>Null 검사를 널 객체에 위임 (Introduce Null Object)</h2>\n<h2>어설션 넣기 (Introduce Assertion)</h2>',frontmatter:{title:"조건문 간결화",date:"April 03, 2019"}}},pathContext:{slug:"/refactoring/concise-conditionals/"}}}});
//# sourceMappingURL=path---refactoring-concise-conditionals-e36d92ade3524028972f.js.map