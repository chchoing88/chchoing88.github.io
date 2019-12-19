webpackJsonp([0x90edf8c418c7],{503:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/preact-configuration/index.md absPath of file >>> MarkdownRemark",html:'<h1>preact, rollup, babel 구성기</h1>\n<p>react의 경량화 버젼인 preact를 rollup과 babel로 환경 셋팅한 경험기 입니다.\n<code>preact-cli</code> 가 존재하지만 각 설정들이 숨겨져 있고 <code>eject</code> 시키기가 어려워서 새롭게 구성했습니다.</p>\n<h2>preact</h2>\n<ul>\n<li>3kb 용량의 경량화 된 react 입니다.</li>\n<li>약간의 설정으로 react 문법과 동일하게 사용할 수 있습니다.</li>\n<li><code>preact</code>는 별도의 빌드 툴이 없어도 브라우저에서 사용할 수 있도록 제작이 되어있습니다. </li>\n<li>Hooks 도 지원을 하고 있습니다.</li>\n<li>기존 react의 이벤트 시스템을 가지고 있지 않아서 가볍습니다.</li>\n<li><code>className</code> 대신 <code>class</code>를 사용하기 때문에 기존 마크업 된 결과물을 쉽게 가져다 넣을 수 있습니다. </li>\n<li><code>Component.render()</code> 메서드에 인자로 <code>this.props</code> 와 <code>this.state</code> 값을 순차적으로 받아 올 수 있습니다.</li>\n<li><code>preact</code>의 <code>h()</code> 함수는 <code>react</code>에 <code>createElement</code>와 매칭이 됩니다.</li>\n<li><code>preact</code>에선 <code>onChange</code> 대신에 <code>onInput</code>을 사용합니다.</li>\n</ul>\n<h2>preact &#x26; babel</h2>\n<ul>\n<li><code>preact</code> 에서 JSX를 사용하기 위해선 별도의 babel 셋팅이 필요합니다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>plugins</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace square js"><span>[</span></span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>@babel/plugin-transform-react-jsx</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>pragma</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>h</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>pragmaFrag</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>Fragment</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="meta brace square js"><span>]</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace square js"><span>]</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<ul>\n<li>폭 넓은 브라우저 대응을 위한 babel 을 셋팅합니다.</li>\n<li>polyfill을 대신할 <code>core-js</code> 와 <code>regenerator-runtime</code> 을 설치 해줍니다. </li>\n<li><code>"useBuiltIns": "usage"</code> 설정은 각 파일에서 사용될 폴리 필에 대한 것만 가져옵니다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>presets</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span><span>[</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>@babel/preset-env</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>targets</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="punctuation section scope begin js"><span>{</span></span><span class="punctuation section scope end js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>useBuiltIns</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>usage</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>corejs</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="constant numeric decimal js"><span>3</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace square js"><span>]</span><span>]</span></span></span></div></pre>\n<h2>preact &#x26; rollup</h2>\n<ul>\n<li>axios를 번들에 넣고 싶을 때 <code>resolve({ browser: true,})</code> 를 넣어주어야 합니다. 왜냐하면 axios 모듈은 유니버셜 코드 (서버 와 브라우저 환경에서 모두 작동) 이기 때문에 브라우저에서만 작동되는 스크립트를 번들 하기 위해선 브라우저 에서 작동할 번들이라고 알려주어야 합니다. (모듈의 package.json 의 browser 키 값을 보고 필요한 것만 번들해 옵니다.)</li>\n<li>plugin 순서는 <code>babel</code>, <code>resolve</code>, <code>commonjs</code> 를 지켜주도록 합니다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;rollup.config.js</span></span></span></div><div class="line"><span class="source js"><span class="meta import js"><span class="keyword control js"><span>import</span></span><span>&nbsp;</span><span class="variable other module js"><span>resolve</span></span><span>&nbsp;</span><span class="keyword control js"><span>from</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>rollup-plugin-node-resolve</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta import js"><span class="keyword control js"><span>import</span></span><span>&nbsp;</span><span class="variable other module js"><span>commonjs</span></span><span>&nbsp;</span><span class="keyword control js"><span>from</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>rollup-plugin-commonjs</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta import js"><span class="keyword control js"><span>import</span></span><span>&nbsp;</span><span class="variable other module js"><span>babel</span></span><span>&nbsp;</span><span class="keyword control js"><span>from</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>rollup-plugin-babel</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta import js"><span class="keyword control js"><span>import</span></span><span>&nbsp;</span><span class="variable other module js"><span>postcss</span></span><span>&nbsp;</span><span class="keyword control js"><span>from</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>rollup-plugin-postcss</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta import js"><span class="keyword control js"><span>import</span></span><span>&nbsp;</span><span class="punctuation definition modules begin js"><span>{</span></span><span>&nbsp;</span><span class="variable other module js"><span>uglify</span></span><span>&nbsp;</span><span class="punctuation definition modules end js"><span>}</span></span><span>&nbsp;</span><span class="keyword control js"><span>from</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>rollup-plugin-uglify</span><span class="punctuation definition string end js"><span>&#39;</span></span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta export js"><span class="keyword control js"><span>export</span></span><span>&nbsp;</span></span><span class="storage type const js"><span>const</span></span><span>&nbsp;</span><span class="constant other js"><span>context</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="support variable js"><span>process</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other object property js"><span>env</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>npm_config_context</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>if</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span class="keyword operator logical js"><span>!</span></span><span>context</span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>throw</span></span><span>&nbsp;</span><span class="meta class instance constructor js"><span class="keyword operator new js"><span>new</span></span><span>&nbsp;</span><span class="entity name type instance js"><span>Error</span></span></span><span class="meta brace round js"><span>(</span></span><span class="string quoted template js"><span class="punctuation definition string begin js"><span>`</span></span><span>please&nbsp;insert&nbsp;npm&nbsp;command&nbsp;line&nbsp;&#39;--context={pageName}&#39;</span><span class="punctuation definition string end js"><span>`</span></span></span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta export js"><span class="keyword control js"><span>export</span></span><span>&nbsp;</span><span class="variable language default js"><span>default</span></span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;input</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted template js"><span class="punctuation definition string begin js"><span>`</span></span><span>src/page/</span><span class="source js embedded source"><span class="punctuation section embedded js"><span>${</span></span><span>context</span><span class="punctuation section embedded js"><span>}</span></span></span><span>.js</span><span class="punctuation definition string end js"><span>`</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;output</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;file</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted template js"><span class="punctuation definition string begin js"><span>`</span></span><span>dist/</span><span class="source js embedded source"><span class="punctuation section embedded js"><span>${</span></span><span>context</span><span class="punctuation section embedded js"><span>}</span></span></span><span>/bundle_</span><span class="source js embedded source"><span class="punctuation section embedded js"><span>${</span></span><span>context</span><span class="punctuation section embedded js"><span>}</span></span></span><span>.js</span><span class="punctuation definition string end js"><span>`</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;format</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>iife</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;plugins</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>babel</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta brace curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exclude</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>node_modules/**</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;only&nbsp;transpile&nbsp;our&nbsp;source&nbsp;code</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>resolve</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta brace curly js"><span>{</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;browser</span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></span></span></div><div class="line"><span class="source js"><span class="meta function-call js"><span class="meta arguments js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>commonjs</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>postcss</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta function-call js"><span class="entity name function js"><span>uglify</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace square js"><span>]</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<h2>github</h2>\n<p><a href="https://github.com/chchoing88/preact-practice">github</a></p>\n<blockquote>\n<p>예외사항으로 페이지 마다 번들된 JS를 만들기 위해서 <code>rollup</code> 셋팅을 조금 바꿔두었습니다. 필요시 적절하게 수정해야 합니다.</p>\n</blockquote>',frontmatter:{title:"preact 구성기",date:"December 19, 2019"}}},pathContext:{slug:"/preact-configuration/"}}}});
//# sourceMappingURL=path---preact-configuration-5a717117ab8c4309d68b.js.map