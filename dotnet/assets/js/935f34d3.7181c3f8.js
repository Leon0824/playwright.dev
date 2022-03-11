"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6472],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294);function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),i=a(7294),o=a(2389),r=a(9366),l=a(6010),s="tabItem_LplD";function c(e){var t,a,o,c=e.lazy,p=e.block,u=e.defaultValue,d=e.values,g=e.groupId,m=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,r.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,r.UB)(),y=w.tabGroupChoices,N=w.setTabGroupChoices,b=(0,i.useState)(h),A=b[0],x=b[1],P=[],C=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var F=y[g];null!=F&&F!==A&&v.some((function(e){return e.value===F}))&&x(F)}var O=function(e){var t=e.currentTarget,a=P.indexOf(t),n=v[a].value;n!==A&&(C(t),x(n),null!=g&&N(g,n))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;a=P[n]||P[0];break;case"ArrowLeft":var i=P.indexOf(e.currentTarget)-1;a=P[i]||P[P.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},v.map((function(e){var t=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return P.push(e)},onKeyDown:L,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),c?(0,i.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function p(e){var t=(0,o.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},224:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=(a(9877),a(8215),["components"]),l={id:"navigations",title:"Navigations"},s=void 0,c={unversionedId:"navigations",id:"navigations",title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/dotnet/docs/next/navigations",tags:[],version:"current",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"docs",previous:{title:"Input",permalink:"/dotnet/docs/next/input"},next:{title:"Network",permalink:"/dotnet/docs/next/network"}},p={},u=[{value:"Navigation lifecycle",id:"navigation-lifecycle",level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",level:2},{value:"Auto-wait",id:"auto-wait",level:3},{value:"Custom wait",id:"custom-wait",level:3},{value:"Wait for element",id:"wait-for-element",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",level:2},{value:"Auto-wait",id:"auto-wait-1",level:3},{value:"Custom wait",id:"custom-wait-1",level:3},{value:"Wait for element",id:"wait-for-element-1",level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",level:3},{value:"Multiple navigations",id:"multiple-navigations",level:3},{value:"Loading a popup",id:"loading-a-popup",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"Advanced patterns",id:"advanced-patterns",level:2},{value:"API reference",id:"api-reference-2",level:3}],d={toc:u};function g(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-url"},"Page.Url")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-dom-content-loaded"},"event Page.DOMContentLoaded")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-load"},"event Page.Load")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-goto"},"Page.GotoAsync(url, options)")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate the page\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait until network is idle\nawait page.GotoAsync("https://example.com", new PageGotoOptions { WaitUntil = WaitUntilState.NetworkIdle });\n')),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait for element\nawait page.GotoAsync("https://example.com");\nawait page.Locator("text=Example Domain").WaitForAsync();\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.GotoAsync("https://example.com");\nawait page.ClickAsync("text=Example Domain");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-goto"},"Page.GotoAsync(url, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-reload"},"Page.ReloadAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-go-back"},"Page.GoBackAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-go-forward"},"Page.GoForwardAsync(options)"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for navigation to complete\nawait page.ClickAsync("text=Login");\n\n// Fill will auto-wait for element on navigated page\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," to wait for a loading event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("button"); // Click triggers navigation\nawait page.WaitForLoadStateAsync(LoadState.NetworkIdle); // This resolves after "networkidle"\n')),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for the element and trigger navigation\nawait page.ClickAsync("text=Login");\n// Wait for the element\nawait page.Locator("#username").WaitForAsync();\n\n// Click triggers navigation\nawait page.ClickAsync("text=Login");\n// Fill will auto-wait for element\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using waitForNavigation with a callback prevents a race condition\n// between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation after a timeout\n    await page.ClickAsync("div.delayed-navigation");\n});\n')),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Running action in the callback of waitForNavigation prevents a race\n// condition between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation with a script redirect.\n    await page.ClickAsync("a");\n}, new PageWaitForNavigationOptions\n{\n    UrlString = "**/login"\n});\n')),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\"); // Opens popup\n});\npopup.WaitForLoadStateAsync(LoadState.Load);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-click"},"Page.ClickAsync(selector, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.GotoAsync("http://example.com");\nawait page.WaitForFunctionAsync("() => window.amILoadedYet()");\n// Ready to take a screenshot, according to the page itself.\nawait page.ScreenshotAsync();\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))))}g.isMDXComponent=!0}}]);