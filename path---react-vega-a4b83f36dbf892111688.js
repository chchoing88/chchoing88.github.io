webpackJsonp([94227092638417],{520:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/react-vega/index.md absPath of file >>> MarkdownRemark",html:'<h2>vega 란</h2>\n<p>공홈 : <a href="https://vega.github.io/vega/">https://vega.github.io/vega/</a></p>\n<p>JSON 방식으로 시각화 문법을 작성하여 차트를 그리는 툴 입니다.</p>\n<p>d3.js 의 복잡한 메서드나 로직을 가지고 그리는 것이 아니라 vega에서 정해진 rule대로 json 을 작성하면 해당 규칙대로 차트를 그려줍니다.</p>\n<h3>장점</h3>\n<ul>\n<li>config 처럼 셋팅만으로도 차트를 그릴 수 있습니다.</li>\n<li>온라인 툴을 제공하고 있어서 미리 셋팅된 config를 데이터 및 차트를 확인 할 수 있습니다.</li>\n<li>다양한 example을 제공하고 있습니다.</li>\n</ul>\n<h3>단점</h3>\n<ul>\n<li>d3.js를 다뤄 보지 않았다면 용어나 단어에 의해 러닝커브가 발생 됩니다.</li>\n<li>config json에 차트 관련 메서드들도 string 값으로 넘겨야 하고, 정확히 무슨 값을 넘겨야 하는지 모른다면 방대한 문서를 읽어야 합니다.</li>\n<li>온라인 툴에서 미리 확인 할 수 있는 데이터가 너무 길어질 경우에는 온라인 툴에서 확인하기가 어렵습니다. ( 개인적으로 View 메서드를 이용해서 돌려보라고 안내해줍니다. )</li>\n</ul>\n<h2>react-vega</h2>\n<p>github : <a href="https://github.com/vega/react-vega/tree/master/packages/react-vega">https://github.com/vega/react-vega/tree/master/packages/react-vega</a></p>\n<p>vega로 그려지는 차트를 컴포넌트로 만들어주는 라이브러리</p>\n<ul>\n<li>차트를 그리는 config 를 입력으로 받아 컴포넌트를 만든다.</li>\n<li>\n<p>해당 컴포넌트의 props API는 <a href="https://github.com/vega/vega-embed">https://github.com/vega/vega-embed</a> API 를 참고하면 됩니다.</p>\n<ul>\n<li>mode, theme, defaultStyle, renderer, logLovel, tooltip, loader, patch, width, height, padding, actions, scaleFactor, config, editorUrl, sourceHeader, sourceFooter, hover, i18n, downloadFileName</li>\n</ul>\n</li>\n</ul>\n<h2>사용</h2>\n<p>example code : <a href="https://github.com/vega/react-vega/tree/master/packages/react-vega#example-code">https://github.com/vega/react-vega/tree/master/packages/react-vega#example-code</a></p>\n<h3>예시 ( 트리 차트 )</h3>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>import&nbsp;{&nbsp;createClassFromSpec&nbsp;}&nbsp;from&nbsp;&quot;react-vega&quot;;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>export&nbsp;default&nbsp;createClassFromSpec({</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;mode:&nbsp;&quot;vega&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;spec:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$schema:&nbsp;&quot;</span><span class="markup underline link https hyperlink"><span>https://vega.github.io/schema/vega/v5.json</span></span><span>&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;1200,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;height:&nbsp;1500,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;padding:&nbsp;5,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;background:&nbsp;&quot;white&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;autosize:&nbsp;{&nbsp;type:&nbsp;&quot;fit-x&quot;,&nbsp;contains:&nbsp;&quot;padding&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;signals:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;대화&nbsp;형&nbsp;동작을&nbsp;유도&nbsp;할&nbsp;수있는&nbsp;동적&nbsp;변수</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;name:&nbsp;&quot;colorIn&quot;,&nbsp;value:&nbsp;&quot;firebrick&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;name:&nbsp;&quot;colorOut&quot;,&nbsp;value:&nbsp;&quot;forestgreen&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;active&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;null,&nbsp;//&nbsp;마우스&nbsp;오버에&nbsp;따라서&nbsp;active&nbsp;value에&nbsp;동적으로&nbsp;다른&nbsp;값이&nbsp;들어간다.&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;text:mouseover&quot;,&nbsp;update:&nbsp;&quot;datum.id&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;mouseover[!event.item]&quot;,&nbsp;update:&nbsp;&quot;null&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;activeNode&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;null,&nbsp;//&nbsp;마우스&nbsp;오버에&nbsp;따라서&nbsp;active&nbsp;value에&nbsp;동적으로&nbsp;다른&nbsp;값이&nbsp;들어간다.&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;text:mouseover&quot;,&nbsp;update:&nbsp;&quot;datum&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;mouseover[!event.item]&quot;,&nbsp;update:&nbsp;&quot;null&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;activeParent&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;null,&nbsp;//&nbsp;마우스&nbsp;오버에&nbsp;따라서&nbsp;active&nbsp;value에&nbsp;동적으로&nbsp;다른&nbsp;값이&nbsp;들어간다.&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;text:mouseover&quot;,&nbsp;update:&nbsp;&quot;datum.parent&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;events:&nbsp;&quot;mouseover[!event.item]&quot;,&nbsp;update:&nbsp;&quot;null&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;],</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[&nbsp;//&nbsp;데이터&nbsp;세트&nbsp;정의&nbsp;및&nbsp;변환은&nbsp;로드&nbsp;할&nbsp;데이터와&nbsp;처리&nbsp;방법을&nbsp;정의합니다.</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;tree&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;values:&nbsp;[#&nbsp;데이터가&nbsp;들어갈&nbsp;영역],</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;stratify&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key:&nbsp;&quot;id&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentKey:&nbsp;&quot;parent&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;tree&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method:&nbsp;&quot;tidy&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size:&nbsp;[{&nbsp;signal:&nbsp;&quot;height&quot;&nbsp;},&nbsp;{&nbsp;signal:&nbsp;&quot;width&quot;&nbsp;}],</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;separation:&nbsp;true,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as:&nbsp;[&quot;y&quot;,&nbsp;&quot;x&quot;,&nbsp;&quot;depth&quot;,&nbsp;&quot;children&quot;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;formula&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expr:&nbsp;&quot;slice(datum.id,&nbsp;0,&nbsp;1)&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as:&nbsp;&quot;type&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;links&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source:&nbsp;&quot;tree&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;type:&nbsp;&quot;treelinks&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;linkpath&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orient:&nbsp;&quot;horizontal&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shape:&nbsp;&quot;diagonal&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;ancestors&quot;,&nbsp;//&nbsp;기존&nbsp;tree&nbsp;데이터를&nbsp;기반으로&nbsp;ancestor를&nbsp;생성한&nbsp;파생된&nbsp;데이터를&nbsp;만든다.</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source:&nbsp;&quot;tree&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;formula&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expr:&nbsp;&quot;treeAncestors(&#39;tree&#39;,&nbsp;datum.id)&quot;,&nbsp;//&nbsp;리턴&nbsp;배열</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as:&nbsp;&quot;ancestors&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initonly:&nbsp;true</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;treeAncestorsFlatten&quot;,&nbsp;//&nbsp;ancestors&nbsp;데이터를&nbsp;기반으로&nbsp;배열값인&nbsp;ancestors&nbsp;열&nbsp;값을&nbsp;flatten&nbsp;하게&nbsp;만든다.</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source:&nbsp;&quot;ancestors&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;[{&nbsp;type:&nbsp;&quot;flatten&quot;,&nbsp;fields:&nbsp;[&quot;ancestors&quot;]&nbsp;}]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&quot;selected&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source:&nbsp;&quot;treeAncestorsFlatten&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;filter&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expr:</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;datum.id&nbsp;===&nbsp;active&nbsp;||&nbsp;datum.parent&nbsp;===&nbsp;active&nbsp;||&nbsp;datum.id&nbsp;===&nbsp;activeParent&nbsp;||&nbsp;datum.ancestors.id&nbsp;===&nbsp;active&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;],</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;marks:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;path&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;{&nbsp;data:&nbsp;&quot;links&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encode:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;update:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path:&nbsp;{&nbsp;field:&nbsp;&quot;path&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stroke:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test:</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;id&#39;,&nbsp;datum.source.id)&nbsp;&amp;&amp;&nbsp;indata(&#39;selected&#39;,&nbsp;&#39;id&#39;,&nbsp;datum.target.id)&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal:&nbsp;&quot;colorIn&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test:</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;ancestors.id&#39;,&nbsp;datum.source.id)&nbsp;&amp;&amp;&nbsp;indata(&#39;selected&#39;,&nbsp;&#39;ancestors.id&#39;,&nbsp;datum.target.id)&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal:&nbsp;&quot;colorIn&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;value:&nbsp;&quot;#ddd&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;symbol&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;{&nbsp;data:&nbsp;&quot;tree&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encode:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size:&nbsp;{&nbsp;value:&nbsp;100&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stroke:&nbsp;{&nbsp;value:&nbsp;&quot;#fff&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;update:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;{&nbsp;field:&nbsp;&quot;x&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{&nbsp;field:&nbsp;&quot;y&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;test:&nbsp;&quot;datum.id&nbsp;===&nbsp;active&quot;,&nbsp;value:&nbsp;&quot;red&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;test:&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;id&#39;,&nbsp;datum.id)&quot;,&nbsp;signal:&nbsp;&quot;colorIn&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test:&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;ancestors.id&#39;,&nbsp;datum.id)&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal:&nbsp;&quot;colorIn&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;value:&nbsp;&quot;#e4cccc&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;&quot;text&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;{&nbsp;data:&nbsp;&quot;tree&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encode:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;{&nbsp;signal:&nbsp;&quot;datum.id&nbsp;+&nbsp;&#39;&nbsp;&#39;&nbsp;+&nbsp;datum.name&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontSize:&nbsp;{&nbsp;value:&nbsp;12&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;baseline:&nbsp;{&nbsp;value:&nbsp;&quot;middle&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;update:&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;{&nbsp;field:&nbsp;&quot;x&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{&nbsp;field:&nbsp;&quot;y&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dx:&nbsp;{&nbsp;signal:&nbsp;&quot;datum.children&nbsp;?&nbsp;-7&nbsp;:&nbsp;7&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align:&nbsp;{&nbsp;signal:&nbsp;&quot;datum.children&nbsp;?&nbsp;&#39;right&#39;&nbsp;:&nbsp;&#39;left&#39;&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tooltip:&nbsp;{&nbsp;signal:&nbsp;&quot;datum.name&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill:&nbsp;[</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;test:&nbsp;&quot;datum.id&nbsp;===&nbsp;active&quot;,&nbsp;value:&nbsp;&quot;red&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;test:&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;id&#39;,&nbsp;datum.id)&quot;,&nbsp;signal:&nbsp;&quot;colorIn&quot;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test:&nbsp;&quot;indata(&#39;selected&#39;,&nbsp;&#39;ancestors.id&#39;,&nbsp;datum.id)&quot;,</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal:&nbsp;&quot;colorIn&quot;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;value:&nbsp;&quot;#333&quot;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;]</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>});</span></span></div></pre>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>//&nbsp;사용법</span></span></div><div class="line"><span class="text plain null-grammar"><span>&lt;TagTreeChart</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;data={tagChartData}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;actions={false}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;height={resultChartHeight}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;&nbsp;renderer={&quot;svg&quot;}</span></span></div><div class="line"><span class="text plain null-grammar"><span>&gt;&lt;/TagTreeChart&gt;</span></span></div></pre>',
frontmatter:{title:"react-vega",date:"March 12, 2020"}}},pathContext:{slug:"/react-vega/"}}}});
//# sourceMappingURL=path---react-vega-a4b83f36dbf892111688.js.map