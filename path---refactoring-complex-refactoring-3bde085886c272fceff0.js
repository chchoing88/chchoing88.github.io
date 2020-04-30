webpackJsonp([0xc805b727d030],{550:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/refactoring/complex-refactoring.md absPath of file >>> MarkdownRemark",html:'<p>해당 글은 <code>리팩토링 (코드 품질을 개선하는 객체지향 사고법)</code> 에서 발췌 했습니다. 코드 예제는 javascript 로 전환하였습니다.</p>\n<h1>상속 구조 정리</h1>\n<p>하나의 상속 계층이 두 작업을 동시에 수행할 땐 상속 계층을 하나 더 만들어서 위임을 통해 다른 계층을 호출하자.</p>\n<p>상속구조로 만들면 하위클래스 안에 작성할 코드가 상당히 줄어든다.\n메서드 하나는 비록 크기는 작지만 상속 계층에 들어 있다는 것만으로 상당히 중요하다.</p>\n<p>이것을 오용하게 되면 모르는 사이 쌓여간다. 사소한 기능의 작은 하위클래스를 하나 추가하고, 다음 날은 계층구조의 다른 부분을 같은 기능의 다른 하위클래스를 몇 개 추가하는 식으로 하다가, 나중에는 상속 구조를 풀기 힘들 정도로 복잡하게 얽힌다.</p>\n<p>개발자는 “이 계층구조가 여기서 결과를 산출한다” 라고 추상적으로 말해선 안 되고, “이 계층구조가 결과를 산출하고, 표 형태로 출력하는 하위클래스들이 있고, 그 하위엔 국가를 구별하는 하위클래스가 있다.” 라고 섬세하게 이야기 해야한다.</p>\n<p>계층구조의 특정 계층에 있는 모든 클래스의 하위클래스들이 이름 앞에 같은 형용사가 붙어 있다면 한 계층으로 두 개능을 수행하는 것이다.</p>\n<h3>예제</h3>\n<p>복잡하게 얽힌 계층 구조 예제는 다음과 같다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;거래유형</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>ActiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>PassiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;표현&nbsp;스타일</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>TabularActiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>ActiveDeal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;각각의&nbsp;거래를&nbsp;표로&nbsp;표현</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>TabularPassiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>PassiveDeal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div></pre>\n<p>이 계층구조는 Deal 이 원래 하나의 거래를 표시하는 용도로만 사용되다 보니 이렇게 된것이다.\n이후에 누군가가 <em>여러 개의 거래</em>를 <em>하나의 표</em>로 표시하면 좋겠다는 아이디어를 떠올려서 작성한 구조이다.</p>\n<p>간단한 하위클래스 <code>ActiveDeal</code>을 작성해서 실험해보면 정말 사소한 작업으로 표 형식을 표시할 수 있음을 알게 된다.\n<code>PassiveDeal</code>의 표를 표시하는 것도 문제 없다. 작은 하위클래스를 하나 더 작성하면 된다.</p>\n<p>이렇게 작성하다 표현 스타일에서 중복코드가 생겨서 문제가 생겨 복잡하다.\n두달 후 표 코드는 복잡해졌지만, 늘 그렇듯이 그 코드를 간단히 넣을 곳이 없고 시간은 촉박하다. 표현 로직과 엉켜서 이제 새로운 종류의 Deal 을 추가하기가 어려워졌다.</p>\n<p>이 문제를 해결하기 위해선 이 상황에서 우선 상속 계층에 의해 처리되는 기능들을 확인하자.\n첫번째 기능은 거래 유형에 따른 변화를 감지하는 것이고, 두번째 기능은 표현 스타일에 따른 변화를 감지하는 것이다.</p>\n<table>\n<thead>\n<tr>\n<th>Deal</th>\n<th>Active Deal</th>\n<th>Passive Deal</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Tabular Deal</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>물건 거래가 표현 스타일보다 훨씬 중요하므로 Deal 만 남겨두고 표현 스타일을 별도의 상속 계층으로 빼낸다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;거래유형</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>ActiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>PassiveDeal</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>Deal</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;별도의&nbsp;표현&nbsp;클래스</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>PresentationStyle</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;표현의&nbsp;차이는&nbsp;몇개의&nbsp;변수로&nbsp;처리도&nbsp;가능하다.&nbsp;하여&nbsp;밑에&nbsp;있는&nbsp;하위클래스&nbsp;계층을&nbsp;제거해도&nbsp;된다.&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>TabularPresntationStyle</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>PresentationStyle</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>SinglePresntationStyle</span></span><span>&nbsp;</span><span class="storage modifier js"><span>extends</span></span><span>&nbsp;</span><span class="entity other inherited-class js"><span>PresentationStyle</span></span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span></span></div></pre>\n<p>메서드 이동과 필드 이동을 실시해서 Deal 하위클래스에 들어있는 표현 관련 메서드와 변수를표현 스타일 클래스로 옮기자.\nDeal 클래스에서 PresentationStyle의 인스턴스를 포함하고 있거나 참조하고 있으면 되겠다. </p>\n<h2>절차 코드를 객체로 전환</h2>\n<p>코드가 절차식으로 작성되어 있을 땐 데이터 레코드를 객체로 바꾸고, 기능을 쪼개서 각각의 객체로 옮기자.</p>\n<p>각 레코드 타입을 읽기/쓰기 메서드만 있는 더미 데이터 객체로 바꾸자.\n모든 절차 코드를 하나의 클래스에 넣자.\n긴 프로시저(그냥 리턴 값이 없는 함수라고 생각하자) 대상으로 메서드 추출과 관련된 래픽토링 기법을 실시해서 쪼개자.\n프로시저를 쪼개면서 메서드 이동을 적용해서 각각을 적절한 더미 데이터 클래스로 옮기자. </p>\n<h2>도메인 로직을 표현과 분리</h2>\n<p>도메인 로직이 들어있는 GUI 클래스가 있을 땐 도메인 로직을 별도의 도메인 클래스로 떼어내자.</p>\n<p>MVC 패턴의 핵심은 사용자 인터페이스 코드(뷰, 표현)와 도메인 로직(모델)을 분리하는 것이다. 표현 클래스에는 사용자 인터페이스 처리에 필요한 로직만 들어간다.\n도메인 객체에는 표현이나 시각적 코드는 전혀 들어가지 않고 비즈니스 로직만 들어간다. </p>\n<p>이렇게 하면 프로그램의 복잡한 두 부분이 수정하기 쉬운 조각으로 분리되며, 하나의 미즈니스 로직에 여러 개의 표현을 구현할 수도 있다. </p>\n<h2>계층구조 추출</h2>\n<p>한 클래스에 기능이 너무 많고 일부분에라도 조건문이 많을 땐 각 조건에 해당하는 하위클래스를 작성해서 계층 구조를 만들자. </p>\n<p>캔을 따는 기능에서 시작하여 작은 나뭇가지를 자르는 기능과 프레젠테이션 항목에 레이저로 포인팅하는 기능까지 추가된 맥가이버칼 클래스가 있다면, 어떤식으로든 그 세 가지 기능을 따로따로 분리해야 한다. 그렇게 하는 방법은 조건문이 객체의 수명 동안 지속될 때만 효력이 있다. 그렇지 않으면 아마 각 기능을 분리하기 전에 클래스 추출을 실시해야 할 수도 있다. </p>\n<h3>예제</h3>\n<p>전기요금을 계산하는 프로그램부터 살펴보자. </p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>Customer</span></span></span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta function js"><span class="entity name function constructor js"><span>constructor</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable language js"><span>this</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>bill</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta class instance constructor js"><span class="keyword operator new js"><span>new</span></span><span>&nbsp;</span><span class="entity name type instance js"><span>BillingScheme</span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta class js"><span class="storage type class js"><span>class</span></span><span>&nbsp;</span><span class="entity name type class js"><span>BillingScheme</span></span></span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta function method definition js"><span class="entity name function js"><span>createBill</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>customer</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p>전기요금 계산 클래스엔 다양한 상황별 요금 계산을 위한 수많은 조건문이 있다. 이렇듯 로직이 복잡하다 보니 <code>BillingScheme</code> 클래스가 복잡해지는게 당연하다.</p>\n<p>우선 조건문에서 차이 나는 부분을 골라야 한다. 차이 나는 부분은 어쩌면 소비자가 장애인 요금을 적용받고 있는지에 따른 다양한 조건일 수 있다.\n이런 차이 나는 부분을 빼낼 하위클래스를 작성하자. 따라서 <code>BillingScheme</code>의 생성자를 팩토리 메서드로 전환을 실시한 후 해당되는 경우에 장애인 요금을 반환하는 절을 작성하자. </p>\n<p><code>BillingScheme</code> 클래스에 있는 각종 메서드를 살피면서 장애인 요금 기준에 따라 다른 코드를 실행하는 조건문이 들어 있는 메서드를 찾자.\n<code>createBill</code> 메서드도 조건문이 들어 있으니 하위클래스로 복사하자.</p>\n<p>그럼 <code>createBill</code> 메서드는 이렇게 변경 될 수 있다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;As-is</span></span></span></div><div class="line"><span class="source js"><span class="meta function method definition js"><span class="entity name function js"><span>createBill</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>customer</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>if</span></span><span class="meta brace round js"><span>(</span></span><span class="meta function-call js"><span class="entity name function js"><span>disabilityScheme</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;doSomthing</span><span class="keyword operator spread js"><span>...</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;To-be</span></span></span></div><div class="line"><span class="source js"><span class="meta function method definition js"><span class="entity name function js"><span>createBill</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>customer</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;doSomthing</span><span class="keyword operator spread js"><span>...</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div></pre>\n<p>목적은 같되 다른 기능의 메서드 호출을 넣을 수 있는 상황은 구분해야한다. 두 경우의 세금 계산법도 달라질 수 있다.\n이때 메서드 일부 코드만 다를 땐 다른 부분에만 메서드 추출을 적용해서 메서드로 빼내자.\n다른 기능 부분을 더 많이 메서드로 빼낼수록, 비슷한 메서드와 다른 메서드가 안정화 되며 나중에 차이 나는 기능을 새로 넣기도 더 쉽다.</p>',frontmatter:{title:"(리팩토링) 복합 리팩토링",date:"April 28, 2019"}}},pathContext:{slug:"/refactoring/complex-refactoring/"}}}});
//# sourceMappingURL=path---refactoring-complex-refactoring-3bde085886c272fceff0.js.map