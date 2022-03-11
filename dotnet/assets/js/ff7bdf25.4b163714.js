"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5841],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(2389),s=n(9366),i=n(6010),l="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),g=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,r.useState)(w),x=N[0],P=N[1],A=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=g[m];null!=R&&R!==x&&h.some((function(e){return e.value===R}))&&P(R)}var q=function(e){var t=e.currentTarget,n=A.indexOf(t),a=h[n].value;a!==x&&(T(t),P(a),null!=m&&b(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:C,onFocus:q,onClick:q},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},4051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=(n(9877),n(8215),["components"]),i={id:"network",title:"Network"},l=void 0,u={unversionedId:"network",id:"version-1.19/network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.19/network.mdx",sourceDirName:".",slug:"/network",permalink:"/dotnet/docs/network",tags:[],version:"1.19",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.19/docs",previous:{title:"Navigations",permalink:"/dotnet/docs/navigations"},next:{title:"Pages",permalink:"/dotnet/docs/pages"}},p={},c=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-4",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    HttpCredentials = new HttpCredentials\n    {\n        Username = "bill",\n        Password = "pa55w0rd"\n    },\n});\nvar page = await context.NewPageAsync();\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy\n{\n    Server = "http://myproxy.com:3128",\n    Username = "user",\n    Password = "pwd"\n};\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\n')),(0,o.kt)("p",null,"When specifying proxy for each context individually, ",(0,o.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy { Server = "per-context" };\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    // Browser proxy option is required for Chromium on Windows.\n    Proxy = proxy\n});\nusing var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Proxy = new Proxy { Server = "http://myproxy.com:3128" })\n});\n')),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        page.Request += (_, request) => Console.WriteLine(">> " + request.Method + " " + request.Url);\n        page.Response += (_, response) => Console.WriteLine("<< " + response.Status + " " + response.Url);\n        await page.GotoAsync("https://example.com");\n    }\n}\n')),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a glob URL pattern\nvar waitForResponseTask = page.WaitForResponseAsync("**/api/fetch_data");\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a regular expression\nvar waitForResponseTask = page.WaitForResponseAsync(new Regex("\\\\.jpeg$"));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n\n// Use a predicate taking a Response object\nvar waitForResponseTask = page.WaitForResponseAsync(r => r.Url.Contains(token));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-request"},"event Page.Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-response"},"event Page.Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-request"},"Page.RunAndWaitForRequestAsync(action, urlOrPredicate, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-response"},"Page.RunAndWaitForResponseAsync(action, urlOrPredicate, options)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/api/fetch_data", async route => {\n  await route.FulfillAsync(status: 200, body: testData);\n});\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsercontext#browser-context-unroute"},"BrowserContext.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-route"},"Page.RouteAsync(url, handler, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-unroute"},"Page.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Delete header\nawait page.RouteAsync("**/*", async route => {\n    var headers = new Dictionary<string, string>(route.Request.Headers.ToDictionary(x => x.Key, x => x.Value));\n    headers.Remove("X-Secret");\n    await route.ContinueAsync(new RouteContinueOptions { Headers = headers });\n});\n\n// Continue requests as POST.\nawait page.RouteAsync("**/*", async route => await route.ContinueAsync(method: "POST"));\n')),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/*.{png,jpg,jpeg}", route => route.AbortAsync());\n\n// Abort based on the request type\nawait page.RouteAsync("**/*", async route => {\nif ("image".Equals(route.Request.ResourceType))\n    await route.AbortAsync();\nelse\n    await route.ContinueAsync();\n});\n')),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-route"},"Page.RouteAsync(url, handler, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-route#route-abort"},"Route.AbortAsync(errorCode)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-web-socket"},"event Page.WebSocket")," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'page.WebSocket += (_, ws) =>\n{\n    Console.WriteLine("WebSocket opened: " + ws.Url);\n    ws.FrameSent += (_, f) => Console.WriteLine(f.Text);\n    ws.FrameReceived += (_, f) => Console.WriteLine(f.Text);\n    ws.Close += (_, ws1) => Console.WriteLine("WebSocket closed");\n};\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-web-socket"},"event Page.WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-sent"},"event WebSocket.FrameSent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-received"},"event WebSocket.FrameReceived")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-close"},"event WebSocket.Close"))),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);