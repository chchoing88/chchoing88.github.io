webpackJsonp([0x6ef35ee6d827],{557:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/virualDom-overhead/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead">이글</a>은 다음글을 보고 번역한 것입니다.</p>\n<p>만약 지난 몇년 동안 자바스크립트 프레임워크를 사용했다면 아마 ‘virtual DOM은 빠르다’는 말을 들었을 것입니다. 또한 종종 <em>real DOM</em> 보다 더 빠르다는 의미로 사용되어져 왔습니다. 이런 생각들은 놀랍게도 인터넷을 통해 사람에서 사람 사이에 전파 되었습니다. 예를 들면 사람들은 어떻게 Selte가 virtual DOM 을 사용하지 않고도 빠를 수 있냐고 물어오곤 합니다.</p>\n<p>좀 더 자세히 살펴 봅시다.</p>\n<h2>What is the virtual DOM?</h2>\n<p><code>render()</code> 함수로 생성되는 app을 빌드 하는 많은 프레임워크에서 React component를 봅시다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>HelloMessage</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>props</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>div&nbsp;className</span><span class="keyword operator assignment js"><span>=</span></span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>greeting</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator comparison js"><span>&gt;</span></span><span>Hello&nbsp;</span><span class="meta brace curly js"><span>{</span></span><span class="variable other object js"><span>props</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>name</span></span><span class="meta brace curly js"><span>}</span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>div</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div></pre>\n<p>JSX가 없는 버젼은 다음과 같을 것입니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>HelloMessage</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>props</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="variable other object js"><span>React</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>createElement</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>div</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>{</span></span><span>&nbsp;className</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>greeting</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span>&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>Hello&nbsp;</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="variable other object js"><span>props</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>name</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div></pre>\n<p>하지만 결과는 같을 것입니다. - 객체는 어떻게 페이지를 보여주어야 할지를 표현하는 수단입니다. 여기 이 객체가 virtual DOM 입니다. 매 시간 당신의 app의 state가 업데이트(예를 들면 <code>name</code> 이라는 prop가 변경될때) 되고 새로운게 생성됩니다. 프레임워크의 작업은 예전꺼에 맞서 새로운거와 함께 비교(<code>reconcile</code>)을 하는 것입니다. 그리고 무엇이 변화가 필요한지 그것들을 real DOM에 적용을 할지 파악해 갑니다.</p>\n<h2>How did the meme start?</h2>\n<p>가상 DOM 성능에 대한 주장은 React의 시작으로 잘못 이해되었습니다. 전 React 핵심 팀 멤버 인 Pete Hunt의 2013 년 <a href="https://www.youtube.com/watch?v=x7cQ3mrcKaY">이야기</a>에서 우리는 다음을 배웠습니다.</p>\n<blockquote>\n<p>이것은 실제로 정말 빠릅니다. 우선적으로 대부분의 DOM 작업들이 느린 경향이 있습니다. DOM에 대한 성능 연구가 많이 있었지만 대부분의 돔 조작은 프레임 drop 하는 경향이 있습니다.</p>\n</blockquote>\n<p>그러나 잠시만 생각해봅시다! 가상 DOM 조작은 결국 실제 DOM 에서의 조작에 추가되는 작업입니다. 더 빠를 수있는 유일한 방법은 우리가 덜 효율적인 프레임 워크와 비교하거나 (2013년에는 비교해봐야 할게 많았습니다.) 반대의견의 사람과 논쟁하는 것이었습니다. - 대안은 실제로 아무도하지 않는 일을하는 것입니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function-call js"><span class="entity name function js"><span>onEveryStateChange</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;</span><span class="support variable dom js"><span>document</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>body</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>innerHTML</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>renderMyApp</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div></pre>\n<p>피트는 곧 …</p>\n<blockquote>\n<p>React는 매직이 아닙니다. C를 사용하여 어셈블러를 사용하고 C 컴파일러를 이길 수있는 것처럼 원시 DOM 작업과 DOM API 호출을 사용하고 원하는 경우 React를 이길 수 있습니다. 그러나 C와 JAVA 또는 Javascript를 사용하는 것은 성능이 크게 향상이 됩니다. 왜냐하면 구체적인 플랫폼에 대해서 걱정할 필요가 없기 때문입니다. React를 사용하면 성능에 대해 생각하지 않고도 애플리케이션을 빌드 할 수 있으며 기본 상태는 빠릅니다.</p>\n</blockquote>\n<h2>So.. is the virtual DOM slow?</h2>\n<p>정확히 아닙니다. ‘가상 DOM은 일반적으로 충분히 빠르다’와 비슷하지만 특정주의 사항이 있습니다.</p>\n<p>React의 원래 약속은 성능에 대한 걱정없이 모든 단일 상태 변경에서 전체 앱을 다시 렌더링 할 수 있다는 것입니다. 실제로, 나는 그것이 정확하다고 생각하지 않습니다. 만약 그렇다면, 컴포넌트를 안전하게 건너 뛸 수있을 때 React에 알리는 방법 인 <code>shouldComponentUpdate</code> 와 같은 최적화가 필요하지 않습니다.</p>\n<p><code>shouldComponentUpdate</code>를 사용하더라도 전체 앱의 가상 DOM을 한 번에 업데이트하는 것은 많은 작업입니다. 얼마 전 React 팀은 업데이트를 더 작은 청크로 나눌 수있는 React Fiber를 도입했습니다. 이는 업데이트가 총 작업량이나 업데이트 소요 시간을 줄이지 않지만 오랜 시간 동안 메인 스레드를 차단하지 않는다는 것을 의미합니다.</p>\n<h2>Where does the overhead come from?</h2>\n<p>가장 분명한 것은. <a href="https://twitter.com/pcwalton/status/1015694528857047040"><code>diffing isn\'t free</code></a> 먼저 새로운 가상 DOM을 이전 스냅 샷과 비교하지 않으면 실제 DOM에 변경 사항을 적용 할 수 없습니다. 이전 <code>HelloMessage</code> 예제를 가져 오려면 <code>name</code> prop가 ‘world’에서 ‘everybody’로 변경되었다고 가정하십시오.</p>\n<ol>\n<li>두 스냅 샷 모두 단일 엘리먼트를 포함합니다. 두 경우 모두 <code>&#x3C;div></code>이므로 동일한 DOM 노드를 유지할 수 있습니다.</li>\n<li>이전 <code>&#x3C;div></code> 및 새 <code>&#x3C;div></code>의 모든 속성을 열거하여 변경, 추가 또는 제거해야하는지 확인합니다. 두 경우 모두 “greeting”값을 가진 className이라는 단일 속성이 있습니다.</li>\n<li>요소로 내려 가면 텍스트가 변경되었음을 알 수 있으므로 실제 DOM을 업데이트 해야합니다.</li>\n</ol>\n<p>이 세 단계 중 대부분은 업데이트의 경우와 마찬가지로 앱의 기본 구조가 변경되지 않았으므로이 경우에는 세 번째 단계 만 가치가 있습니다. 3 단계로 바로 건너 뛸 수 있다면 훨씬 더 효율적일 것입니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span class="variable other object js"><span>changed</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>name</span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="variable other object js"><span>text</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>data</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;name</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<p>(이것은 거의 정확하게 Svelte가 생성하는 업데이트 코드입니다. 기존 UI 프레임 워크와 달리 Svelte는 런타임에 작업을 기다리지 않고 빌드 시간에 앱에서 변경 사항이 어떻게 발생하는지 알고있는 컴파일러입니다.)</p>\n<h2>It’s not just the diffing though</h2>\n<p>React 및 기타 가상 DOM 프레임 워크에서 사용하는 diffing 알고리즘은 빠릅니다. 틀림없이 컴포넌트 자체에 더 많은 오버 헤드가 있을 수 있습니다. 이런 코드를 쓰지 않을 것입니다…</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>StrawManComponent</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>props</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>value</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>expensivelyCalculateValue</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="variable other object js"><span>props</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>foo</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>p</span><span class="keyword operator comparison js"><span>&gt;</span></span><span>the&nbsp;value&nbsp;is&nbsp;</span><span class="meta brace curly js"><span>{</span></span><span>value</span><span class="meta brace curly js"><span>}</span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>p</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div></pre>\n<p>왜냐하면 <code>props.foo</code>가 변경되었는지 여부에 관계없이 모든 업데이트에서 부주의하게 값을 다시 계산하기 때문입니다. 그러나 훨씬 더 평범하게 보이는 방식으로 불필요한 계산 및 할당을 수행하는 것이 매우 일반적입니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function js"><span class="storage type function js"><span>function</span></span><span>&nbsp;</span><span class="entity name function js"><span>MoreRealisticComponent</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="variable parameter function js"><span>props</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span>&nbsp;</span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span></span><span class="constant other js"><span>selected</span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="constant other js"><span>setSelected</span></span><span class="meta brace square js"><span>]</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>useState</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="constant language null js"><span>null</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>div</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>p</span><span class="keyword operator comparison js"><span>&gt;</span></span><span>Selected&nbsp;</span><span class="meta brace curly js"><span>{</span></span><span>selected&nbsp;</span><span class="keyword operator ternary js"><span>?</span></span><span>&nbsp;</span><span class="variable other object js"><span>selected</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>name</span></span><span>&nbsp;</span><span class="keyword operator ternary js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>nothing</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta brace curly js"><span>}</span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>p</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>ul</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>{</span></span><span class="variable other object js"><span>props</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other object property js"><span>items</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>map</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="variable parameter function js"><span>item</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>li</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span>button&nbsp;onClick</span><span class="keyword operator assignment js"><span>=</span></span><span class="meta brace curly js"><span>{</span></span><span class="meta function arrow js"><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span><span>&nbsp;</span><span class="storage type function arrow js"><span>=&gt;</span></span></span><span>&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>setSelected</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span>item</span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace curly js"><span>}</span></span><span class="keyword operator comparison js"><span>&gt;</span></span><span class="meta brace curly js"><span>{</span></span><span class="variable other object js"><span>item</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="support variable property dom js"><span>name</span></span><span class="meta brace curly js"><span>}</span></span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>button</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>li</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta method-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace round js"><span>)</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>ul</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="keyword operator comparison js"><span>&lt;</span></span><span class="keyword operator js"><span>/</span></span><span>div</span><span class="keyword operator comparison js"><span>&gt;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span class="punctuation definition function body end bracket curly js"><span>}</span></span></span></div></pre>\n<p>여기에서는 <code>props.items</code>의 변경 여부에 관계없이 모든 상태 변경 시마다 각각의 자체 인라인 이벤트 핸들러가있는 새로운 가상 <code>&#x3C;li></code> 요소 배열을 생성합니다. 성능에 집착하지 않는 한 이를 최적화하지는 않을 것입니다. 아무 소용이 없습니다. 그래도 충분히 빠릅니다. 그러나 더 빠른 것이 무엇인지 아십니까? 이렇게 하지 않는 것입니다.</p>\n<p>불필요하게 작업을 하지 않아도 불필요하게 작업을 수행하는 데 따르는 위험은 앱이 결국에는 최적화할 때라는 명확한 증상이 없을때 ‘death by a thousand cuts(작은 문제가 모여 실패하는 뜻)‘와 같이 실패 할 수 있다는 것입니다.</p>\n<p>Svelte는 명시 적으로 해당 상황에서 끝나지 않도록 설계되었습니다.</p>\n<h2>Why do frameworks use the virtual DOM then?</h2>\n<p>가상 DOM은 기능이 아니라는 점을 이해해야합니다. 이는 목적을 위한 수단이며, 목적은 선언적이고 상태 중심의 UI 개발입니다. Virtual DOM은 일반적으로 충분한 성능으로 상태 변화에 대해 생각하지 않고도 앱을 빌드 할 수 있기 때문에 유용합니다. 이는 버그가 적고 지루한 작업 대신 창의적인 작업에 더 많은 시간을 소비한다는 것을 의미합니다.</p>\n<p>그러나 가상 DOM을 사용하지 않고도 유사한 프로그래밍 모델을 얻을 수 있다는 것이 밝혀졌습니다. 바로 여기가 Svelte입니다.</p>',frontmatter:{title:"Virtual DOM is pure overhead",date:"October 12, 2019"}}},pathContext:{slug:"/virualDom-overhead/"}}}});
//# sourceMappingURL=path---virual-dom-overhead-598236fff14ec4f9f446.js.map