"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6669],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4749:function(e,a,t){t.r(a),t.d(a,{assets:function(){return k},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(l)for(var t of l(a))p.call(a,t)&&c(e,t,a[t]);return e};const d={id:"navigations",title:"Navigations"},u=void 0,m={unversionedId:"navigations",id:"version-1.21/navigations",title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.21/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/dotnet/docs/1.21/navigations",tags:[],version:"1.21",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"docs",previous:{title:"Input",permalink:"/dotnet/docs/1.21/input"},next:{title:"Network",permalink:"/dotnet/docs/1.21/network"}},k={},f=[{value:"Navigation lifecycle",id:"navigation-lifecycle",level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",level:2},{value:"Auto-wait",id:"auto-wait",level:3},{value:"Custom wait",id:"custom-wait",level:3},{value:"Wait for element",id:"wait-for-element",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",level:2},{value:"Auto-wait",id:"auto-wait-1",level:3},{value:"Custom wait",id:"custom-wait-1",level:3},{value:"Wait for element",id:"wait-for-element-1",level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",level:3},{value:"Multiple navigations",id:"multiple-navigations",level:3},{value:"Loading a popup",id:"loading-a-popup",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"Advanced patterns",id:"advanced-patterns",level:2},{value:"API reference",id:"api-reference-2",level:3}],v={toc:f};function h(e){var a,t=e,{components:i}=t,c=((e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=g(g({},v),c),o(a,r({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),(0,n.kt)("h2",g({},{id:"navigation-lifecycle"}),"Navigation lifecycle"),(0,n.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,n.kt)("strong",{parentName:"p"},"navigation")," and ",(0,n.kt)("strong",{parentName:"p"},"loading"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,n.kt)("strong",{parentName:"p"},"loading")," the document."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-url"}),"Page.Url")," is set to the new url"),(0,n.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-event-dom-content-loaded"}),"event Page.DOMContentLoaded")," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-event-load"}),"event Page.Load")," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,n.kt)("h2",g({},{id:"scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI"),(0,n.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,n.kt)("h3",g({},{id:"auto-wait"}),"Auto-wait"),(0,n.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-goto"}),"Page.GotoAsync(url, options)")," will auto-wait for the redirected page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Navigate the page\nawait page.GotoAsync("https://example.com");\n')),(0,n.kt)("h3",g({},{id:"custom-wait"}),"Custom wait"),(0,n.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,n.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Navigate and wait until network is idle\nawait page.GotoAsync("https://example.com", new PageGotoOptions { WaitUntil = WaitUntilState.NetworkIdle });\n')),(0,n.kt)("h3",g({},{id:"wait-for-element"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-wait-for"}),"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Navigate and wait for element\nawait page.GotoAsync("https://example.com");\nawait page.Locator("text=Example Domain").WaitForAsync();\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.GotoAsync("https://example.com");\nawait page.ClickAsync("text=Example Domain");\n')),(0,n.kt)("h3",g({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-goto"}),"Page.GotoAsync(url, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-reload"}),"Page.ReloadAsync(options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-go-back"}),"Page.GoBackAsync(options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-go-forward"}),"Page.GoForwardAsync(options)"))),(0,n.kt)("h2",g({},{id:"scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction"),(0,n.kt)("p",null,"In the scenarios below, ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," initiates a navigation and then waits for the navigation to complete."),(0,n.kt)("h3",g({},{id:"auto-wait-1"}),"Auto-wait"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Click will auto-wait for navigation to complete\nawait page.ClickAsync("text=Login");\n\n// Fill will auto-wait for element on navigated page\nawait page.FillAsync("#username", "John Doe");\n')),(0,n.kt)("h3",g({},{id:"custom-wait-1"}),"Custom wait"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-load-state"}),"Page.WaitForLoadStateAsync(state, options)")," to wait for a loading event."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'await page.ClickAsync("button"); // Click triggers navigation\nawait page.WaitForLoadStateAsync(LoadState.NetworkIdle); // This resolves after "networkidle"\n')),(0,n.kt)("h3",g({},{id:"wait-for-element-1"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-wait-for"}),"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Click will auto-wait for the element and trigger navigation\nawait page.ClickAsync("text=Login");\n// Wait for the element\nawait page.Locator("#username").WaitForAsync();\n\n// Click triggers navigation\nawait page.ClickAsync("text=Login");\n// Fill will auto-wait for element\nawait page.FillAsync("#username", "John Doe");\n')),(0,n.kt)("h3",g({},{id:"asynchronous-navigation"}),"Asynchronous navigation"),(0,n.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-navigation"}),"Page.RunAndWaitForNavigationAsync(action, options)"),". For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,n.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Using waitForNavigation with a callback prevents a race condition\n// between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation after a timeout\n    await page.ClickAsync("div.delayed-navigation");\n});\n')),(0,n.kt)("h3",g({},{id:"multiple-navigations"}),"Multiple navigations"),(0,n.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-navigation"}),"Page.RunAndWaitForNavigationAsync(action, options)")," to a specific url. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,n.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,n.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'// Running action in the callback of waitForNavigation prevents a race\n// condition between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation with a script redirect.\n    await page.ClickAsync("a");\n}, new PageWaitForNavigationOptions\n{\n    UrlString = "**/login"\n});\n')),(0,n.kt)("h3",g({},{id:"loading-a-popup"}),"Loading a popup"),(0,n.kt)("p",null,"When popup is opened, explicitly calling ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-load-state"}),"Page.WaitForLoadStateAsync(state, options)")," ensures that popup is loaded to the desired state."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),"var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\"); // Opens popup\n});\npopup.WaitForLoadStateAsync(LoadState.Load);\n")),(0,n.kt)("h3",g({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-load-state"}),"Page.WaitForLoadStateAsync(state, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-navigation"}),"Page.RunAndWaitForNavigationAsync(action, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-function"}),"Page.WaitForFunctionAsync(expression, arg, options)"))),(0,n.kt)("h2",g({},{id:"advanced-patterns"}),"Advanced patterns"),(0,n.kt)("p",null,"For pages that have complicated loading patterns, ",(0,n.kt)("a",g({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-function"}),"Page.WaitForFunctionAsync(expression, arg, options)")," is a powerful and extensible approach to define a custom wait criteria."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-csharp"}),'await page.GotoAsync("http://example.com");\nawait page.WaitForFunctionAsync("() => window.amILoadedYet()");\n// Ready to take a screenshot, according to the page itself.\nawait page.ScreenshotAsync();\n')),(0,n.kt)("h3",g({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-wait-for-function"}),"Page.WaitForFunctionAsync(expression, arg, options)"))))}h.isMDXComponent=!0}}]);