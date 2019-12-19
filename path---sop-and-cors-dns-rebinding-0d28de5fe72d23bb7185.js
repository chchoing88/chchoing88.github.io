webpackJsonp([0xd52256ffc143],{499:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Merlin Tec Blog",author:"merlin.ho"}},markdownRemark:{id:"/Users/merlin.ho/Documents/workspace/ho_blog/gatsby-blog/src/pages/sop-and-cors-dnsRebinding/index.md absPath of file >>> MarkdownRemark",html:'<h2>SOP</h2>\n<p>영어로 하면 same-origin policy 우리말로 하면 동일 출처 원칙 이라고 한다.\n모든 최신 브라우저에 의해 이 정책을 지원하고있다. 웹 자원들은 같은 프로토콜과 같은 도메인 그리고 같은 포트를 사용한다면 다른 컨텐츠의 자원들에 즉, 속성이나 다른 값어치 있는 것들에 도달할수 있다. 만약 그렇지 않다면 document 속성에 도달하거나 변경하는 작업은 <strong>브라우저</strong>에 의해 막히게 된다. </p>\n<p>만약 우리가 <a href="http://www.example.com/dir/test.html">http://www.example.com/dir/test.html</a> 페이지를 호스팅했다고 상상해보자 이 안에는 다른 웹페이지가 로드된 iframe이 있다고도 생각해보자.\n우리의 호스트는 www.example.com 으로 정의되어있다. 아래 테이블은 접근 가능한지 안가능한지를 나타내는 full URLs를 비교해놓았다.</p>\n<table>\n<thead>\n<tr>\n<th>URL</th>\n<th>Result</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="http://www.example.com/dir/page.htm">http://www.example.com/dir/page.htm</a></td>\n<td>Accessible</td>\n<td>Protocol, host and port match</td>\n</tr>\n<tr>\n<td><a href="http://www.example.com:81/dir/test.htm">http://www.example.com:81/dir/test.htm</a></td>\n<td>Not Accessible</td>\n<td>Same protocol and host, but port is different (81)</td>\n</tr>\n<tr>\n<td><a href="https://www.example.com/dir/test.htm">https://www.example.com/dir/test.htm</a></td>\n<td>Not Accessible</td>\n<td>Same host, but schema/protocol (https) different</td>\n</tr>\n<tr>\n<td><a href="http://demo.example.com/dir/test.htm">http://demo.example.com/dir/test.htm</a></td>\n<td>Not Accessible</td>\n<td>Schema and port are same, but host is different (demo.example.com)</td>\n</tr>\n<tr>\n<td><a href="http://example.com/dir/test.htm">http://example.com/dir/test.htm</a></td>\n<td>Not Accessible</td>\n<td>Host is different (example.com)</td>\n</tr>\n</tbody>\n</table>\n<p>모든 모던 브라우저에 의해 동일 출처 정책이 지원되기 때문에 웹 리소스는 동일한 프로토콜, 동일한 도메인, 동일한 포트를 사용하는 경우 서로의 콘텐츠, 속성에 도달할 수 있다.\n만약 그렇지가 않다면 브라우저에 의해서 문서 속성에 도달하거나 변경이 막힙니다.</p>\n<p>오늘날 Same-origin Policy는 대게 DOM에만 적용 되는지 알았지만 사실 그게 전부가 아니다 웹의 모든 자원에 대해서 Same-origin Policy의 체크 매커니즘이 적용된다.\n쿠키가 그 한 예중에 하나일것이다. 쿠키는 쿠키속성의 도메인(domain), 경로(path) 및 속성이 요청 된 도메인과 일치하는 이벤트에서만 쿠키가 전송되기 때문에 Same-origin Policy 매커니즘이 적용되는 하나의 예가 될 수 있다. 만약 쿠키가 매칭되고 expired 되지 않았다면 쿠키는 보내질 것이다. 이전에 설명했던 Same-origin Policy와 다른점이 있다면 쿠키(secure-only cookies는 제외)는 포트와 스키마는 쿠키가 보내지기 전에 체크해야하는 대상이 아니라는 점이다.</p>\n<p>대부분이 알고 있는 잘못된 사실은 Same-origin Policy는 브라우저가 다른 origin의 자원을 <em>로드</em>하는걸 금지한다는 것이다. 하지만 우리가 알고있는 CDN 생태계만 봐도 그것은 사실이 아니라는걸 알 수 있다. </p>\n<p>다른 잘못된 사실은 origin에서 다른 곳으로 자원을 <em>보낼수가 없다</em>는 사실이다. 이것또한 사실이 아니다. </p>\n<p>우리가 기억하고 있는 Same-origin Policy 정책의 정의를 보자.</p>\n<ol>\n<li>각 사이트는 자산의 리소스를 지니고있다. 쿠키, DOM 그리고 자바스크립트 네임스페이스</li>\n<li>각 페이지는 자신의 URL로 부터 origin을 갖는다. ( 대게 스키마, 도메인 그리고 포트 )</li>\n<li>스크립트는 자신이 load된 origin의 컨텍스트안에서 실행된다. 어디서 불러왔는지는 중요하지 않다. 오직 마지막에 실행된 장소가 중요하다.</li>\n<li>많은 미디어나 이미지 리소스들은 수동 리소스들이다. 그것들은 그들이 존재하는 컨텍스트의 자원이나 object에 접근 할 수가 없다.</li>\n</ol>\n<p>이런 룰을 가지고 <em>Origin A</em> 라는 사이트가 있다고 가정해보자.</p>\n<ol>\n<li>origin B 로 부터 온 스크립트를 load 할수있다. 하지만 그것은 A 컨텍스트 안에서 동작한다.</li>\n<li>스크립트의 원시 컨텐츠나 소스코드에 접근 할 수가 없다.</li>\n<li>origin B 로 부터 온 css를 load 할수 있다. </li>\n<li>origin B 에 속해있는 css의 raw text에 접근 할 수 없다. </li>\n<li>iframe을 이용해서 origin B 페이지를 load 할 수 있다. </li>\n<li>iframe 안에 있는 origin B 페이지의 DOM에 접근 할 수 없다.</li>\n<li>origin B의 이미지를 load 할 수 있다. </li>\n<li>origin B로 부터 로드된 이미지의 bits에 접근할 수 없다.</li>\n<li>origin B로 부터 온 비디오를 재생할 수 있다.</li>\n<li>origin B에서로드 한 비디오의 이미지를 캡처 할 수 없습니다.</li>\n</ol>\n<p>이런 정책들이 브라우저마다 다르게 실행된다는 점이 개발자들이 주의를 해야할 부분이다. 다른 브라우져 사이에서 쿠키, 자바스크립트, DOM 접근에 관해서 Same-origin Policy의 정의가 다르게 되어있다. </p>\n<p>예를 들면 우리가 <em><a href="http://www.example.com/test.html">http://www.example.com/test.html</a></em> 을 가지고 있다고 생각하고 이때 <em><a href="http://www.example.com:81/contact.html">http://www.example.com:81/contact.html</a></em> 에 접근하자고 생각해보자. IE의 경우 포트가 달라도 스키마와 도메인이 같기 때문에 접근이 가능하다 하지만 다른 모던 브라우저에서는 접근이 불가능 하다.</p>\n<p>때때로 이 Same-origin Policy의 엄격한 룰 때문에 베이스 도메인이 같은 사이트 사이에서 쉐어링할때 문제가 발생할 수 있다. 예를 들면  <em>login.example.com</em>, <em>games.example.com</em>, 그리고 <em>calendar.example.com</em> 이런 사이트를 지니고 있다면 어떻게 전체 도메인이 매칭이 안된 상태에서 커뮤니케이션을 할수 있을까.\n이럴때 javascript의 <em>document.domain</em> 이란 설정으로 조금 룰을 완화 시킬 수 있다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="support variable dom js"><span>document</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>domain</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>example.com</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre>\n<p>이렇게 하면 브라우저에 모든것이 <em>login.example.com</em>, <em>games.example.com</em>, 그리고 <em>calendar.example.com</em> 을 포함하여 <em>example.com</em> 으로 같은 origin으로 고려된다고 말하는것과 같다. </p>\n<p>그러나 주의해야 할 것은 <em>login.example.com</em> 이 바로 <em>example.com</em> 의 DOM에 접근할수 있지 않다는 것이다. 이 접근을 허용하려면 <em>example.com</em> 안에\n<em>document.domain</em> 을 <em>example.com</em> 으로 셋팅해주어야 한다. </p>\n<p>javascript에서 document.domain 셋팅하는 것은 Same-origin Policy의 호스트이름 정책을 완화시킬수 있다. 하지만 포트나 스키마 제한은 남아있다.\n아래 표로 예시를 나타낸다.</p>\n<table>\n<thead>\n<tr>\n<th>URL</th>\n<th>document.domain</th>\n<th>iframe URL</th>\n<th>document.domain</th>\n<th>Result</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="http://www.example.com">http://www.example.com</a></td>\n<td>example.com</td>\n<td><a href="http://login.example.com">http://login.example.com</a></td>\n<td>example.com</td>\n<td>Accessible</td>\n</tr>\n<tr>\n<td><a href="http://www.example.com">http://www.example.com</a></td>\n<td>example.com</td>\n<td><a href="https://payment.example.com">https://payment.example.com</a></td>\n<td>example.com</td>\n<td>Not Accessible, protocol mismatch</td>\n</tr>\n<tr>\n<td><a href="http://payment.example.com">http://payment.example.com</a></td>\n<td>example.com</td>\n<td><a href="http://example.com">http://example.com</a></td>\n<td>Not Set</td>\n<td>Not accessible</td>\n</tr>\n<tr>\n<td><a href="http://www.example.com">http://www.example.com</a></td>\n<td>example.com</td>\n<td><a href="http://www.example.com">http://www.example.com</a></td>\n<td>Not Set</td>\n<td>Not accessible</td>\n</tr>\n</tbody>\n</table>\n<p>여기서 중요한것은  <em>login.example.com</em> 을 <em>example2.com</em> 로 셋팅 할 수 없다는 것이다.</p>\n<h3>XmlHTTPRequest</h3>\n<p>XmlHTTPRequest 도 동일하게 Same-origin Policy의 요구사항이 적용됩니다.</p>\n<ul>\n<li>XmlHTTPRequest 호출은 다른 출처의 사이트로 보낼 수는 있지만 읽을수는 없습니다.</li>\n<li>요청 URL이 같은 출처라면 응답을 읽을 수 있습니다.</li>\n<li>사용자 정의 헤더는 동일한 출처에 대한 요청에만 추가 할 수 있다.</li>\n</ul>\n<p>조심해야하는 부분은 XmlHTTPRequest 의 호출은 다른 출처로 데이터를 보낼 수 있으므로 잠재적인 Cross Site Request Forgery 공격을 허용할 수 있다는 것이다.</p>\n<p>분명히 XmlHTTPRequest의 Same-origin 정책은 다른 출처의 리소스를 사용할 때 문제가 된다. </p>\n<h3>JSON Padding (JSONP)</h3>\n<p>XmlHTTPRequest 객체를 사용해서 다른 출처에 있는 요청을 보낼수 있지만, 응답을 읽을수가 없다. 그래서 어떻게 해야할까? 어떻게 하면 비동기적으로 여러 다양한 데이터를 받을 수 있을까? </p>\n<p>Same-origin Policy 원리 하에 우리는 스크립트가 로드된 사이트의 컨텍스트 안에서 동작하는 것을 안다. 당연히 유효한 스크립트 파일이어야 한다는 것이다. 이런 기술을 이용해서 JSONP 가 사용됩니다.</p>\n<p>이는 Same-origin Policy를 우회할 수 있습니다.</p>\n<p>여기 다음과 같은 호출이 있다고 생각합시다. <a href="http://www.example.com/getAlbums?callback=foobarbaz">http://www.example.com/getAlbums?callback=foobarbaz</a>\n응답으로는 다음과 같은 결과를 볼수 있습니다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="meta function-call js"><span class="entity name function js"><span>foobarbaz</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="meta brace square js"><span>[</span></span><span class="meta brace curly js"><span>{</span></span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>artist</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>Michael&nbsp;Jackson</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>album</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>Black&nbsp;or&nbsp;White</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta brace curly js"><span>}</span><span>{</span></span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>artist</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>Beatles,&nbsp;The</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>album</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="keyword operator assignment js"><span>:</span></span><span>&nbsp;</span><span class="string quoted double js"><span class="punctuation definition string begin js"><span>&quot;</span></span><span>Revolution</span><span class="punctuation definition string end js"><span>&quot;</span></span></span><span class="meta brace curly js"><span>}</span></span><span class="meta brace square js"><span>]</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre>\n<p>잠시 분석해보자면 </p>\n<ol>\n<li>우리는 <em><a href="http://www.example.com/getAlbums">http://www.example.com/getAlbums</a></em>의 리소스를 요청했고 그리고 callback 이름을 쿼리 스트링으로 <em>foobarbaz</em> 라고 지정했습니다.</li>\n<li>해당 리소스에서 JSON 결과가 리턴될때 그 결과를 함수 이름 <em>foobarbaz</em> 으로 감싸줘야 한다. 이는 쿼리 스트링으로 정의내린 이름이다.</li>\n</ol>\n<p>물론 이런 방법은 보안의 위험이 있고 반환 된 모든것이 신뢰할 수 있다고 가정해야 한다. 요청을 받은 사이트에서 반환되는 모든 코드가 우리의 브라우저가 띄운 우리 웹사이트의 컨텍스트에서 실행된다는 점을 잊지 말아야 한다. 또  전송시 발생할 수있는 조작을 방지하기 위해 보안 HTTPS 채널을 통해 요청하는 것도 중요하다.</p>\n<h3>XDomainRequest and JSONP vs. CORS</h3>\n<p>JSONP의 한계는 JSONP로 작성된 도메인간 요청은 읽기전용의 한방향만 사용할수 있다는 것이다. 여전히 쓰기 요청에 대한 기회는 여전히 JSONP에 적용되었던 Same-origin Policy에 막혀있다.</p>\n<p>이때 MS는 독자적으로 IE8과 IE9에서 XDomainRequest 를 만들어냈고 Chrome, Firefox 등 기타 브라우저에서는 CORS(Cross-Origin Resource Sharing)이라는 인기있는 대체기능을 구현했다. MS도 나중에 IE10에선 CORS를 채택했다. </p>\n<p>CORS는 우리가 origin A 의 사이트가 origin B 사이트에 요청을 보내려고 할때 origin A 에는 <em>Origin</em> 이라는 사용자 정의 HTTP 헤더를 설정하여 요청에서 origin을 선언해야 한다. origin B의 사이트는 CORS 요청을 허용하는 출처를 정의하는 HTTP 헤더가 포함된 응답을 반환해야 한다. 이 헤더는 <em>Access-Control-Allow-Origin</em> 헤더 이다. </p>\n<p>이것을 사용하여 서브도메인도 허용할수 있다. 예를 들면 <em>sub.example.com</em></p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>Access-Control-Allow-Origin:&nbsp;www.example.com</span></span></div></pre>\n<p>인터넷에 있는 모든 도메인에게 허락할수도 있다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>Access-Control-Allow-Origin:&nbsp;*</span></span></div></pre>\n<h2>Cross-Origin Resource Sharing (CORS) in Detail</h2>\n<p>CORS 요청은 2가지 타입이 있다. Simple Request와 Preflight 이다. 대부분의 일반 CORS 요청은 일반적인 HTTP 헤더 및 작업으로 구성된 단순 요청 범주에 속합니다. 그러나 프리 플라이트 요청은 단순 요청의 일반적인 신뢰할 수있는 범위를 벗어나는 비정형 성으로 인해 서버에 대한 추가 유효성 검사가 필요하다.</p>\n<h3>Simple Request</h3>\n<p>만약 요청 method가 GET, POST, or HEAD 그리고 <em>Content-Type</em>에 의해 셋팅된 message type이 <em>application/x-www-form-urlencoded,</em> <em>multipart/form-data</em>, <em>text/plain</em> 이라면, 이 요청은 CORS Simple 요청으로 간주된다. 그리고 다이렉트로 서버에 전송된다.\n서버는 반환 된 <em>Access-Control-Allow-Origin</em> HTTP 헤더에 의해 CORS 요청을 수락하는지 여부를 나타낸다.\n만약 서버가 승인하면, 응답이 클라이언트에 의해 처리 될것이다.\n또한 Accept (허용 할 내용 유형), Accept-Language (브라우저에서 허용하는 언어) 및 Content-Language (요청 언어)와 같이 CORS 요청에 직접 적용되는 요청에서 보낼 수있는 몇 가지 추가 HTTP 헤더가 있다.</p>\n<p>우리 페이지 <a href="http://www.acceptmeplease.com">http://www.acceptmeplease.com</a> 에서 core.example.com 으로 요청을 보내는 시도이다.\n요청 헤더에 있는 Host는 요청의 대상이 되는 서버의 호스트 명과 포트를 준다.</p>\n<p>요청</p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>GET&nbsp;/&nbsp;HTTP/1.1</span></span></div><div class="line"><span class="text plain null-grammar"><span>Host:&nbsp;cors.example.com</span></span></div><div class="line"><span class="text plain null-grammar"><span>Accept:&nbsp;text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span></div><div class="line"><span class="text plain null-grammar"><span>Accept-Language:&nbsp;en,en-US;q=0.5</span></span></div><div class="line"><span class="text plain null-grammar"><span>Origin:&nbsp;</span><span class="markup underline link http hyperlink"><span>http://www.acceptmeplease.com</span></span></span></div><div class="line"><span class="text plain null-grammar"><span>Connection:&nbsp;keep-alive</span></span></div></pre>\n<p>서버응답</p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>HTTP/1.1&nbsp;200&nbsp;OK</span></span></div><div class="line"><span class="text plain null-grammar"><span>Date:&nbsp;Sun,&nbsp;24&nbsp;Apr&nbsp;2016&nbsp;12:43:39&nbsp;GMT</span></span></div><div class="line"><span class="text plain null-grammar"><span>Server:&nbsp;Apache</span></span></div><div class="line"><span class="text plain null-grammar"><span>Access-Control-Allow-Origin:&nbsp;</span><span class="markup underline link http hyperlink"><span>http://www.acceptmeplease.com</span></span></span></div><div class="line"><span class="text plain null-grammar"><span>Keep-Alive:&nbsp;timeout=2,&nbsp;max=100</span></span></div><div class="line"><span class="text plain null-grammar"><span>Connection:&nbsp;Keep-Alive</span></span></div><div class="line"><span class="text plain null-grammar"><span>Content-Type:&nbsp;application/xml</span></span></div><div class="line"><span class="text plain null-grammar"><span>Content-Length:&nbsp;423</span></span></div><div class="line"><span class="text plain null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="text plain null-grammar"><span>&lt;?xml&nbsp;version=&quot;1.0&quot;&nbsp;encoding=&quot;UTF-8&quot;?&gt;</span></span></div><div class="line"><span class="text plain null-grammar"><span>...</span></span></div></pre>\n<p>요청시에 우리는 <a href="http://www.acceptmeplease.com">http://www.acceptmeplease.com</a> 사이트에서 cors.example.com에 대한 우리의 CORS 단순 요청을 수행하며, 또한 이를(우리의 사이트 url을) 우리의 origin 지정한다. 서버는 우리의 origin을 승인하는 것에 응답한다. 따라서 브라우저는 Same-origin Policy의 도메인 제한을 완화한 채 요청을 계속할 수 있게 된다.</p>\n<h3>Preflight Request</h3>\n<p>Simple Request에 해당되지 않는 것들에 대해서 Preflight Request를 진행한다. 이것이 의미하는 것은 <em>GET, POST, or HEAD</em> 메서드 요청이 아니고 또는 요청이 <em>POST</em> 이지만 <em>Content-type</em> 이 <em>application/x-www-form-urlencoded,</em> <em>multipart/form-data</em>, <em>text/plain</em> 이 중 하나가 아니고, 또는 만약 커스텀 HTTP 헤더에 추가가 되어있다면 이 요청은 서버에 처음으로 유효성을 받아봐야 한다.\n실제 CORS 전에 서버에게 보내지게 되며 브라우저는 <em>pre-flight check</em>을 <em>OPTIONS</em> 메서드로 요청을 보내게 된다. 이것은 Simple Request 보다 2번의 HTTP 호출을 하기 때문에 비용이 드는 행위이다. 하지만 필요한 작업이다.</p>\n<p>이해를 돕기 위한 CORS Preflight Request and server response 예제이다. POST 메서드를 사용하지만 추가적인 <em>X-Token-ID</em> 와 <em>Content-Type</em>을 <em>application/xml</em> 로 지정했다. 그래서 CORS Preflight Request을 진행할 것이다.</p>\n<p>&#x3C; 요청 헤더 ></p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>OPTIONS&nbsp;/resources/post-here/&nbsp;HTTP/1.1</span></span></div><div class="line"><span class="text plain null-grammar"><span>Host:&nbsp;cors.example.com</span></span></div><div class="line"><span class="text plain null-grammar"><span>Accept:&nbsp;text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span></div><div class="line"><span class="text plain null-grammar"><span>Accept-Language:&nbsp;en-us,en;q=0.5</span></span></div><div class="line"><span class="text plain null-grammar"><span>Connection:&nbsp;keep-alive</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Origin:&nbsp;</span><span class="markup underline link http hyperlink"><span>http://www.acceptmeplase.com</span></span><span>&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Request-Method:&nbsp;POST&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Request-Headers:&nbsp;X-TOKEN-ID&nbsp;*</span></span></div></pre>\n<p>여기서 먼저 OPTIONS 메서드로 요청을 보내게 된다. 이것은 먼저 서버에게 보내진 HTTP Header가 수용가능한지 요청을 보내는 것이다.\n다음으로는 우리의 Origin 을 설정한다.\n그리고 2가지의 헤더를 더 정의내리는데 <em>Access-Control-Request-Method</em>, <em>Access-Control-Request-Headers</em> 이다. 이것들은 브라우저의 의도를 전달하는데 중요하다. POST 메서드와 추가적인 HTTP header 가 있음을 알린다.</p>\n<p>&#x3C; OPTIONS 메서드에 대한 서버 응답 ></p>\n<pre class="editor editor-colors"><div class="line"><span class="text plain null-grammar"><span>HTTP/1.1&nbsp;200&nbsp;OKDate:&nbsp;Mon,&nbsp;01&nbsp;Dec&nbsp;2008&nbsp;01:15:39&nbsp;GMT</span></span></div><div class="line"><span class="text plain null-grammar"><span>Server:&nbsp;Apache</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Allow-Origin:&nbsp;</span><span class="markup underline link http hyperlink"><span>http://www.acceptmeplease.com</span></span><span>&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Allow-Methods:&nbsp;POST,&nbsp;GET,&nbsp;OPTIONS&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Allow-Headers:&nbsp;X-TOKEN-ID&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>*&nbsp;Access-Control-Max-Age:&nbsp;86400&nbsp;*</span></span></div><div class="line"><span class="text plain null-grammar"><span>Vary:&nbsp;Accept-Encoding,&nbsp;Origin</span></span></div><div class="line"><span class="text plain null-grammar"><span>Content-Length:&nbsp;0</span></span></div><div class="line"><span class="text plain null-grammar"><span>Keep-Alive:&nbsp;timeout=2,&nbsp;max=100</span></span></div><div class="line"><span class="text plain null-grammar"><span>Connection:&nbsp;Keep-Alive</span></span></div><div class="line"><span class="text plain null-grammar"><span>Content-Type:&nbsp;text/plain</span></span></div></pre>\n<ul>\n<li>Access-Control-Allow-Methods – 이것들은 브라우저가 보낼 수있는 허용 된 요청 방법입니다.</li>\n<li>Access-Control-Allow-Headers – 이것은 브라우저가 전송할 수있는 승인 된 추가 HTTP 헤더입니다.</li>\n<li>Access-Control-Max-Age – 이 HTTP 헤더가 응답에 설정되면 서버는 브라우저가 동일한 종류의 요청에 대해이 OPTIONS 결과를 캐시하기를 원합니다. 이를 통해 브라우저는 각각의 요청 전에 OPTIONS 요청을하지 않고도이 최대 연령 설정 내의 리소스에 비슷한 요청을 할 수 있습니다.</li>\n</ul>\n<p>주의 해야 할점은 <em>Access-Control-Max-Age</em> 이 값이 86400초 또는 24시간으로 설정되어있습니다. 하지만 각 브라우저는 이 필드의 최대 값을 정의하고 있기에\n브라우저의 최대 보존 기간을 초과하면 이 값을 무시하고 최대 허용 값을 사용하게 됩니다. 예를 들어 크롬은 최대 10분 입니다. </p>\n<h3>Cookies</h3>\n<p>우리는 지금까지 다양한 HTTP header와 함께 CORS를 보여주었다. 하지만 <em>Cookie</em> HTTP header는 공유할 수가 없다. 디폴트로 브라우저에서 사용되는 인증서 (including cookies, authentications, and certificates)들은 CORS 요청과 함께 전송되지 않는다. Simple 또는 Preflight 둘다.\nIE8 과 IE9 에서 사용하는 XDomainRequest도 마찬가지 이다. 어떤 상황에서도 이러한 자격 증명 데이터를 보낼 수 없습니다.</p>\n<p>만약 우리가 접근 가능한 origin 한에서 쿠키 데이터를 전송하고 싶다면, 우리는 간단하게 <em>Cookie</em> HTTP header를 CORS 요청에 사용함으로써 쿠키 컨텐츠를 전송할수 있다. (도메인, 만료등의 추가정보 없이) 이것을 Preflight 요청인 OPTIONS 요청에 추가할수 있다. 하지만 필수는 아니다. 응답이 왔을때 서버는 반드시 이 인증의 요청에 대한 받아드리는것과 동의하는것을 <em>Access-Control-Allow-Credentials</em> HTTP header로 알려아 한다. ‘true’ 값으로.\n만약 HTTP header에 이 값을 못받았다면 브라우저는 전체 요청을 실패로 간주하게 된다.</p>\n<h3>Implementations</h3>\n<p>클라이언트 사이드에서의 CORS 요청 실행 예제 이다.</p>\n<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;Declare&nbsp;the&nbsp;XMLHttpRequest&nbsp;object</span></span></span></div><div class="line"><span class="source js"><span class="storage type var js"><span>var</span></span><span>&nbsp;invocation&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="meta class instance constructor js"><span class="keyword operator new js"><span>new</span></span><span>&nbsp;</span><span class="entity name type instance js"><span>XMLHttpRequest</span></span></span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;We&nbsp;wish&nbsp;to&nbsp;open&nbsp;a&nbsp;POST&nbsp;method&nbsp;request</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function dom js"><span>open</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>POST</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span class="markup underline link http hyperlink"><span>http://cors.example.com/sendData</span></span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;If&nbsp;we&nbsp;set&nbsp;this&nbsp;option,&nbsp;then&nbsp;in-browser&nbsp;credentials&nbsp;(cookies,</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;authentication,&nbsp;certificates)&nbsp;will&nbsp;be&nbsp;sent&nbsp;along&nbsp;with&nbsp;the</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;request</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta delimiter property period js"><span>.</span></span><span class="variable other property js"><span>withCredentials</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;If&nbsp;we&nbsp;set&nbsp;the&nbsp;following&nbsp;two&nbsp;headers,&nbsp;as&nbsp;described&nbsp;previously,</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;this&nbsp;will&nbsp;automatically&nbsp;become&nbsp;a&nbsp;CORS&nbsp;Preflight&nbsp;Request,&nbsp;and</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;an&nbsp;OPTIONS&nbsp;method&nbsp;pre-flight&nbsp;check&nbsp;request&nbsp;will&nbsp;be&nbsp;done&nbsp;in</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;the&nbsp;background,&nbsp;unless&nbsp;a&nbsp;matching&nbsp;one&nbsp;has&nbsp;already&nbsp;been&nbsp;done</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;and&nbsp;was&nbsp;within&nbsp;the&nbsp;site&#39;s&nbsp;(and&nbsp;browser&#39;s)&nbsp;maximum&nbsp;age&nbsp;setting</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>setRequestHeader</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>X-TOKEN-ID</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>aabbccddeeff00112233</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>setRequestHeader</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>Content-Type</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>application/xml</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;When&nbsp;the&nbsp;response&nbsp;is&nbsp;returned&nbsp;from&nbsp;the&nbsp;server,&nbsp;we&nbsp;must</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;process&nbsp;it&nbsp;via&nbsp;a&nbsp;callback&nbsp;function</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta function js"><span class="meta delimiter method period js"><span>.</span></span><span class="entity name function js"><span>onreadystatechange</span></span><span>&nbsp;</span><span class="keyword operator assignment js"><span>=</span></span><span>&nbsp;</span><span class="storage type function js"><span>function</span></span><span class="meta parameters js"><span class="punctuation definition parameters begin bracket round js"><span>(</span></span><span class="punctuation definition parameters end bracket round js"><span>)</span></span></span></span><span class="punctuation definition function body begin bracket curly js"><span>{</span></span><span>&nbsp;…&nbsp;</span><span class="punctuation definition function body end bracket curly js"><span>}</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;</span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>&nbsp;Send&nbsp;the&nbsp;POST&nbsp;content&nbsp;and&nbsp;initiate&nbsp;the&nbsp;request</span></span></span></div><div class="line"><span class="source js"><span class="variable other object js"><span>invocation</span></span><span class="meta method-call js"><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>send</span></span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>…</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation definition arguments end bracket round js"><span>)</span></span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre>\n<h2>Final</h2>\n<p>동일 출신 정책은 월드 와이드 웹의 끊임없이 진화하는 구성입니다. 쿠키의 진화와 함께이를 볼 수 있습니다. 쿠키는 DOM과 JavaScript보다 먼저 만들어 졌으므로 나중에 동일한 동일 출처 정책이 적용되었습니다. 쿠키와 함께 스키마와 포트를 고려하지 않는 일반적인 Same-Origin Policy와는 대조적으로 볼 수 있습니다. JavaScript가 개발 된 후에는 쿠키가 HTTP 헤더를 통해서만 사용할 수 있고 JavaScript 네임 스페이스에서는 사용할 수 없다고 간주되는 httpOnly 플래그가 추가되었습니다. 나중에 TLS 전용 범위 내의 쿠키 문제를 해결하기 위해 추가 된 secureOnly 플래그가 있었습니다.</p>\n<p>동일 출처 정책은 클라이언트 측 웹 보안의 중심에 있지만 광범위하고 매우 다양하며 브라우저에서 브라우저로, 기술 구현간에 중요한 세부 사항이 다릅니다. 이해하는 것이 중요한 개념이지만 더 중요한 것은 차이점과 함정을 똑같이 고려해야한다는 것입니다. 개발자 (실제로 보안 엔지니어)가 자신의 요구에 맞는 Same-Origin Policy를 이해하고 적절하게 구현할 때 실제로는 더 풍부한 웹을 만듭니다.</p>\n<h2>DNS Rebinding</h2>\n<p>Same-origin Policy의 기법을 우회할수 있는 방법중 하나로 XMLHttpRequest를 통해서 localhost 또는 다른 도메인 주소의 요청을 전송할수 없으나 이 방법으로 우회할수 있다. 보통 공격해서 정보를 탈취하는데 쓰일수 있다.</p>\n<p>간단한 설명은 다음과 같다.</p>\n<ul>\n<li>공격자는 attack.com (ip: 1.1.1.1) 이라는 도메인을 등록해둔다. 그리고 그 사이트요청에 공격자가 컨트롤 가능한 DNS 서버가 응답하게 만든다.</li>\n<li>공격자는 DNS 서버의 TTL(TIME TO LIVE) 설정을 짧게 설정한다. 이것은 응답 캐싱을 막기 위해서이다. </li>\n<li>마지막으로 attack.com 서버를 시작한다.</li>\n<li>이때 일반 사용자는 본인만 접속할수 있는 custom.com (ip 2.2.2.2) 사이트가 있다고 하자.</li>\n<li>일반 사용자는 공격자가 만든 웹페이지 (attack.com)에 접속하게 된다. 해당 웹페이지에는 사용자 웹 브라우저에서 돌아가는 자바스크립트를 포함하고 있다.</li>\n<li>이 스크립트 코드는 같은 도메인인 attack.com 의 attack.com/secret.html 자원을 추가로 다운로드 하도록 만든다.</li>\n<li>이때, 브라우저는 다시 DNS에게 attack.com 도메인에 대한 요청을 보내게 된다. ( 이유는 TTL을 짧게 설정했기 때문에. )</li>\n<li>하지만 공격자의 DNS 응답은 새로운 IP를 응답해준다. 내가 탈취하고 싶은 IP가 되겠다. ( custom.com 의 IP ,localhost..등등 )</li>\n<li>그 결과로 사용자는 원하지도 않게 attack.com/secret.html 대신에 custom.com/secret.html 의 자원을 로드하게 된다. </li>\n<li>이게 바로 Same-origin Policy가 bypass 당한것이다. </li>\n</ul>\n<p>이러한 문제를 막는 방법으로는 ‘Host’ 헤더가 다른 허용하는 호스트 네임을 지니고 있는지 확인하는 것이다.\n서버는 ‘Host’ 헤더에 예기치 않은 호스트 이름이 포함되어 있다면 서버는 요청을 거부해야한다. 다른말로 말하면 ‘Host’헤더에 대해 적절한 white-listing (‘안전’이 증명된 것만을 허용)가 구현되어야합니다.</p>\n<h2>출처</h2>\n<ul>\n<li><a href="https://savni.tistory.com/entry/DNS-Rebinding%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-Transmission-%EC%B7%A8%EC%95%BD%EC%A0%90-%EB%B6%84%EC%84%9D">https://savni.tistory.com/entry/DNS-Rebinding%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-Transmission-%EC%B7%A8%EC%95%BD%EC%A0%90-%EB%B6%84%EC%84%9D</a></li>\n<li><a href="https://www.netsparker.com/whitepaper-same-origin-policy/#SameOriginPolicyinDetail">https://www.netsparker.com/whitepaper-same-origin-policy/#SameOriginPolicyinDetail</a></li>\n<li><a href="https://blog.gypsyengineer.com/en/security/examples-of-dns-rebinding-attacks.html">https://blog.gypsyengineer.com/en/security/examples-of-dns-rebinding-attacks.html</a></li>\n<li><a href="https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/">https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/</a></li>\n</ul>',
frontmatter:{title:"sop와 cors 그리고 DNS Rebinding",date:"February 27, 2019"}}},pathContext:{slug:"/sop-and-cors-dnsRebinding/"}}}});
//# sourceMappingURL=path---sop-and-cors-dns-rebinding-0d28de5fe72d23bb7185.js.map