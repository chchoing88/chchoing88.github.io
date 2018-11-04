webpackJsonp([0x60439937a340],{406:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/experience-monorepo/index.md absPath of file >>> MarkdownRemark",html:'<h2>intro</h2>\n<ul>\n<li>공통모듈을 한 repo 에서 관리 하는 시도를 해보자.</li>\n<li>여러 npm 패키지를 하나의 github repo 에서 관리하자.</li>\n<li>즉, monorepo 를 구축해서 공통모듈을 관리하는 환경을 만들자.</li>\n</ul>\n<h2>monorepo 의 이점</h2>\n<ul>\n<li>lint 나 build, test, release 프로세스를 한가지로 가져갈수 있다.</li>\n<li>개발 환경을 따로 구축할 수고를 덜어준다.</li>\n<li>devDependency 를 한곳에서 관리 할 수 있다.</li>\n<li>여러 이슈를 중앙에서 관리할 수 있다.</li>\n</ul>\n<h2>monorepo 의 단점</h2>\n<ul>\n<li>한 repo 가 커질 수 있다.</li>\n</ul>\n<h2>monorepo 를 사용하고 있는 곳</h2>\n<ul>\n<li>babel</li>\n<li>react</li>\n<li>etc..</li>\n</ul>\n<h2>monorepo 를 사용할 수 있는 수단.</h2>\n<ul>\n<li>lerna <a href="https://lernajs.io/">https://lernajs.io/</a></li>\n<li>yarn workspace <a href="https://yarnpkg.com/lang/en/docs/workspaces/">https://yarnpkg.com/lang/en/docs/workspaces/</a></li>\n<li>git sub-modules</li>\n</ul>\n<h2>lerna</h2>\n<p>각각의 독립적인 버젼을 가지고 있는 큰 코드베이스 분리는 코드 공유에 큰 이점을 가진다.\n하지만 많이 얽혀져있는 repositories 는 추적하기도 어렵고 지저분합니다. 그리고 테스팅도 복잡해집니다.</p>\n<p>이 문제를 해결하기 위해 몇몇 프로젝트는 multi-package repositories 를 설계하고(monorepos 라고 불리움) Babel, React, Angular, Ember, Meteor, Jest 프로젝트들이 싱글 repository 안에 그들의 모든 패키지들을 관리합니다.</p>\n<p>lerna 툴은 git 및 npm 을 사용하여 multi-package repositories 를 관리하는 작업을 최적화 하는 도구이다.</p>\n<p>Lerna 는 또한 개발 및 빌드 환경에서 패키지의 수많은 복사본에 대한 시간과 공간을 줄여줍니다.</p>\n<h3>lerna 명령어 사용법</h3>\n<ul>\n<li>lerna 초기화 및 independent 모드로 실행</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;init&nbsp;-i</span></span></div></pre>\n<ul>\n<li>각 패키지 안에 들어있는 모듈의 npm install 을 실행</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;bootstrap</span></span></div></pre>\n<ul>\n<li>각 패키지들이 마지막 릴리즈 이후에 변화가 있었는지 체크</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;updated</span></span></div></pre>\n<ul>\n<li>각 패키지 안에 있는 npm script 를 한번에 run 시켜줌.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;run&nbsp;[script]</span></span></div></pre>\n<ul>\n<li>각 패키지 안에서 쉘 스크립트를 실행할수 있다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;</span><span class="support function builtin shell"><span>exec</span></span><span>&nbsp;[</span><span class="support function builtin shell"><span>command</span></span><span>]</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;ex)&nbsp;lerna&nbsp;exec&nbsp;rm&nbsp;-rf&nbsp;./node_modules</span></span></span></div></pre>\n<ul>\n<li>모듈간의 의존성 추가</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;moduleb&nbsp;의&nbsp;package.json에&nbsp;dependency에&nbsp;modulea&nbsp;추가</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;add&nbsp;modulea&nbsp;--scope=moduleb</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;moduleb&nbsp;의&nbsp;package.json에&nbsp;devDependency에&nbsp;modulea&nbsp;추가</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;add&nbsp;modulea&nbsp;--scope=moduleb&nbsp;--dev</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;모든&nbsp;모듈&nbsp;package.json에&nbsp;devDependency에&nbsp;moduleb&nbsp;추가</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;add&nbsp;modulea</span></span></div></pre>\n<ul>\n<li>버젼을 수정합니다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;version&nbsp;1.0.1&nbsp;</span><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>&nbsp;explicit</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;version&nbsp;patch&nbsp;</span><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>&nbsp;semver&nbsp;keyword</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>&nbsp;select&nbsp;from&nbsp;prompt(s)</span></span></span></div></pre>\n<p>해당 버젼을 수행하면 다음과 같은 일이 일어난다.</p>\n<ol>\n<li>\n<p>이전 태그 릴리즈 이전으로 변경사항을 확인한다.</p>\n</li>\n<li>\n<p>새로운 버젼에 대한 프롬프트 안내를 한다.</p>\n</li>\n<li>\n<p>새로운 릴리즈 정보를 반영한 패키지를 수정한다.</p>\n</li>\n<li>\n<p>커밋과 태그를 커밋한다. </p>\n</li>\n<li>\n<p>git remote에 push한다.</p>\n</li>\n<li>\n<p>배포 ( git 및 npm )</p>\n</li>\n</ol>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;git&nbsp;뿐만&nbsp;아니라&nbsp;npmjs&nbsp;에도&nbsp;배포&nbsp;(&nbsp;npm&nbsp;publish&nbsp;)</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;publish</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;npm&nbsp;생략&nbsp;(&nbsp;대신&nbsp;git&nbsp;에도&nbsp;올라가지&nbsp;않음&nbsp;)</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;publish&nbsp;--skip-npm</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;이렇게&nbsp;publish&nbsp;하면&nbsp;package.json&nbsp;의&nbsp;버전이&nbsp;업데이트가&nbsp;되고</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;그에&nbsp;관련된&nbsp;의존성있던&nbsp;모듈들의&nbsp;package.json의&nbsp;devDependency&nbsp;나&nbsp;dependency의&nbsp;해당&nbsp;모듈의&nbsp;버젼도&nbsp;업데이트&nbsp;시켜준다.</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span>$&nbsp;lerna&nbsp;publish&nbsp;from-git&nbsp;</span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;explicitly&nbsp;publish&nbsp;packages&nbsp;tagged&nbsp;in&nbsp;current&nbsp;commit</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell"><span>#</span></span><span>#&nbsp;lerna&nbsp;version을&nbsp;별도로&nbsp;수행하지&nbsp;않고&nbsp;현재&nbsp;있는&nbsp;태그로&nbsp;publish를&nbsp;도와준다.&nbsp;</span></span></span></div></pre>\n<ul>\n<li>자세한건 lerna 공식 홈페이지 참조.\n<a href="https://lernajs.io/">https://lernajs.io/</a></li>\n</ul>\n<h3>lerna json 셋팅</h3>\n<ul>\n<li>version: 현재 repository 버젼</li>\n<li>packages: packages 경로, 배열과 glob 사용.</li>\n<li>command.publish.ignoreChanges: <code>lerna changed/puslish</code> 할때 포함시키지 않을 파일</li>\n<li>command.bootstrap.ignore: <code>lerna bootstrap</code> 명령어 사용할시 bootstrap 안할 리스트 , 배열과 glob 사용</li>\n<li>command.bootstrap.scope: <code>lerna bootstrap</code> 명령어 사용할시 packages 들의 영역을 지정한다. 배열과 glob 사용.</li>\n</ul>\n<h3>lerna 장점</h3>\n<ul>\n<li>\n<p>공통의 devDependencies 를 가질수 있다.</p>\n<ul>\n<li>대부분의 devDependencies 를 root repo 에서 당겨 받을수 있다.</li>\n<li>모든 패키지들은 같은 버젼의 dependency 로 사용할 수 있다.</li>\n<li>스토리지를 적게 들수있다.</li>\n</ul>\n</li>\n</ul>\n<h2>yarn Workspaces</h2>\n<p>Yarn Workspaces 는 단일 루트 package.json 파일의 하위 폴더에있는 여러 package.json 파일의 종속성을 모두 한 번에 설치할 수있는 기능입니다.</p>\n<p>또한 워크스페이스들 간의 중복된 package 를 막아주므로써 가볍고, Yarn 은 서로 의존하는 Workspace 간에 심볼릭 링크를 만들 수 있으며 모든 디렉토리의 일관성과 정확성을 보장합니다.</p>\n<p>Yarn Workspaces 는 lerna 툴 처럼 사용할 수 있는 low-level 의 primitives 이다.\nlerna 가 제공하는 high-level 의 특징들을 제공하진 않지만, 코어로직의 실행과 linking steps 로 더 향상된 퍼포먼스를 제공할 수 있다.</p>\n<h3>yarn Workspaces setting</h3>\n<ul>\n<li>root 에 있는 package.json 에 아래와 같이 셋팅한다.</li>\n</ul>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>private</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspaces</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace square js"><span>[</span></span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspace-a</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspace-b</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta brace square js"><span>]</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<ul>\n<li>각 워크스페이스의 package.json 은 아래와 같이 셋팅한다.</li>\n</ul>\n<p>아래 보면 줄일 수 third-party dependecies 들이 보인다.\nWorkspaces 를 활성화 시키면 yarn 은 dependency 구조를 좀더 최적화 시켜준다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;workspace-a/package.json:</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>name</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspace-a</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>version</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>1.0.0</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>dependencies</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>cross-env</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>5.0.5</span><span class="punctuation definition string end js"><span>&quot;</span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;workspace-b/package.json:</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>name</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspace-b</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>version</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>1.0.0</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>dependencies</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>cross-env</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>5.0.5</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>workspace-a</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>1.0.0</span><span class="punctuation definition string end js"><span>&quot;</span></span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<ul>\n<li>마지막으로 <code>yarn install</code>을 진행하면 아래와 같은 계층을 얻을수 있다.</li>\n</ul>\n<p><code>yarn install</code>시 패키지들의 있는 모듈들을 root 디렉토리쪽으로 hoisted 시켜준다.\n대신 버젼이 다른 dependency 에 한해서는 hoisted 시켜주지 않는다.</p>\n<p>이것은 lerna 의 bootstrapping 의 <code>--hoint</code> flag 효과와 같다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source shell"><span>/package.json</span></span></div><div class="line"><span class="source shell"><span>/yarn.lock</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span>/node_modules</span></span></div><div class="line"><span class="source shell"><span>/node_modules/cross-env</span></span></div><div class="line"><span class="source shell"><span>/node_modules/workspace-a&nbsp;-</span><span class="keyword operator redirect shell"><span>&gt;</span></span><span>&nbsp;/workspace-a</span></span></div><div class="line"><span class="source shell"><span>&nbsp;</span></span></div><div class="line"><span class="source shell"><span>/workspace-a/package.json</span></span></div><div class="line"><span class="source shell"><span>/workspace-b/package.json</span></span></div></pre>\n<ul>\n<li>\n<p>위 처럼 적용이 될때 workspace-b 에있는 파일에서 workspace-a 를 요구하면 현재 Github 에 게시 된 코드가 아니라 프로젝트 내부에있는 정확한 코드가 사용되며 cross-env 패키지가 올바르게 중복 제거되어 프로젝트의 루트에 놓입니다.</p>\n</li>\n<li>\n<p>lerna 2.0.0 에선 lerna 커맨드 이용시 <code>--use-workspace</code> flag 를 사용하면 프로젝트의 bootstrap 을 Yarn 을 사용하게 된다. 이렇게 되면 root-level의 <code>packages.json/workspaces</code> 필드의 값이 <code>lerna.json/packages</code> 값을 재정의 한다.</p>\n</li>\n</ul>\n<p>lerna.json 파일로 설정하는 방법은 아래와 같다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword operator spread js"><span>...</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>npmClient</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>yarn</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>useWorkspaces</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span></span></div></pre>\n<h2>결론</h2>\n<ul>\n<li>lerna 와 yarn workspace 를 사용하면 중복되는 dependency 에 관해서 관리를 할 수 있다.</li>\n<li>yarn workspace 와 lerna 는 쉽게 통합될수 있다.</li>\n<li>lerna 를 이용하면 yarn workspace 에서 할수 없는 다양한 기능들을 사용할 수 있다. ( testing, 배포 , 버젼관리 , 패키지별 scripting 명령)</li>\n<li>같은 환경속에서 여러가지 dependency 를 가지고 여러 패키지들을 다룬다면 monorepo 를 사용할만 할것 같다.</li>\n</ul>',frontmatter:{title:"experience monorepo",date:"July 13, 2018"}}},pathContext:{slug:"/experience-monorepo/"}}}});
//# sourceMappingURL=path---experience-monorepo-e55181e10d267df34877.js.map