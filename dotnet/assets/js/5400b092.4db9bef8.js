"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),l=n(2389),i=n(9366),o=n(6010),s="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,y=N.setTabGroupChoices,x=(0,r.useState)(k),A=x[0],w=x[1],P=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=b[m];null!=I&&I!==A&&f.some((function(e){return e.value===I}))&&w(I)}var T=function(e){var t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==A&&(E(t),w(a),null!=m&&y(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function u(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),o={id:"verification",title:"Verification"},s=void 0,c={unversionedId:"verification",id:"verification",title:"Verification",description:"We recommend Web-First Assertions that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests.",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/dotnet/docs/next/verification",tags:[],version:"current",frontMatter:{id:"verification",title:"Verification"}},u={},p=[{value:"Text content",id:"text-content",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Inner text",id:"inner-text",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Attribute value",id:"attribute-value",level:2},{value:"Checkbox state",id:"checkbox-state",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Text content",id:"text-content-1",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Inner HTML",id:"inner-html",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Visibility",id:"visibility",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Enabled state",id:"enabled-state",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Custom assertions",id:"custom-assertions",level:2},{value:"Console logs",id:"console-logs",level:2},{value:"API reference",id:"api-reference-7",level:3},{value:"Page errors",id:"page-errors",level:2},{value:"API reference",id:"api-reference-8",level:3},{value:"Page events",id:"page-events",level:2},{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",level:4},{value:"API reference",id:"api-reference-9",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We recommend ",(0,l.kt)("a",{parentName:"p",href:"./test-assertions"},"Web-First Assertions")," that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,l.kt)("h2",{id:"text-content"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.Locator("nav:first-child").TextContentAsync();\nAssert.AreEqual("home", content);\n')),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-text-content"},"Page.TextContentAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()"))),(0,l.kt)("h2",{id:"inner-text"},"Inner text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.Locator(".selected").InnerTextAsync();\nAssert.AreEqual("value", content);\n')),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-text"},"Page.InnerTextAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()"))),(0,l.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var value = await page.Locator("input").GetAttributeAsync("alt");\nAssert.AreEqual("Text", value);\n')),(0,l.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var checked = await page.Locator("input").IsCheckedAsync();\nAssert.True(checked);\n')),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-checked"},"Page.IsCheckedAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.IsCheckedAsync()"))),(0,l.kt)("h2",{id:"text-content-1"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.locator("nav:first-child").TextContentAsync();\nAssert.AreEqual("home", content);\n')),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-eval-on-selector"},"Page.EvalOnSelectorAsync(selector, expression, arg, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)"))),(0,l.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var html = await page.Locator("div.result").InnerHTMLAsync();\nAssert.AreEqual("<p>Result</p>", html);\n')),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-html"},"Page.InnerHTMLAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()"))),(0,l.kt)("h2",{id:"visibility"},"Visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var visibility = await page.Locator("input").IsVisibleAsync();\nAssert.True(visibility);\n')),(0,l.kt)("h3",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-visible"},"Page.IsVisibleAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.IsVisibleAsync()"))),(0,l.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var enabled = await page.Locator("input").IsEnabledAsync();\nAssert.True(enabled);\n')),(0,l.kt)("h3",{id:"api-reference-6"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-enabled"},"Page.IsEnabledAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.IsEnabledAsync()"))),(0,l.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,l.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert local storage value\nvar userId = await page.EvaluateAsync<string>("() => window.localStorage.getItem(\'userId\')");\nAssert.NotNull(userId);\n\n// Assert value for input element\nvar value = await page.Locator("#search").InputValueAsync();\nAssert.AreEqual("query", value);\n\n// Assert computed style\nvar fontSize = await page.Locator("div").EvalOnSelectorAsync<string>("el => window.getComputedStyle(el).fontSize");\nAssert.AreEqual("16px", fontSize);\n\n// Assert list length\nvar length = await page.Locator("li.selected").CountAsync();\nAssert.AreEqual(3, length);\n')),(0,l.kt)("h2",{id:"console-logs"},"Console logs"),(0,l.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Listen for all System.out.printlns\npage.Console += (_, msg) => Console.WriteLine(msg.Text);\n\n// Listen for all console events and handle errors\npage.Console += (_, msg) =>\n{\n    if ("error".Equals(msg.Type))\n        Console.WriteLine("Error text: " + msg.Text);\n};\n\n// Get the next System.out.println\nvar waitForMessageTask = page.WaitForConsoleMessageAsync();\nawait page.EvaluateAsync("console.log(\'hello\', 42, { foo: \'bar\' });");\nvar message = await waitForMessageTask;\n// Deconstruct console.log arguments\nawait message.Args.ElementAt(0).JsonValueAsync<string>(); // hello\nawait message.Args.ElementAt(1).JsonValueAsync<int>(); // 42\n')),(0,l.kt)("h3",{id:"api-reference-7"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-console"},"event Page.Console"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-errors"},"Page errors"),(0,l.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Log all uncaught errors to the terminal\npage.PageError += (_, exception) =>\n{\n  Console.WriteLine("Uncaught exception: " + exception);\n};\n')),(0,l.kt)("h3",{id:"api-reference-8"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-page-error"},"event Page.PageError"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-events"},"Page events"),(0,l.kt)("h4",{id:"requestfailed"},(0,l.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,l.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,l.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Url + " " + request.Failure);\n};\n')),(0,l.kt)("h4",{id:"popup---handle-popup-windows"},(0,l.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\n')),(0,l.kt)("h3",{id:"api-reference-9"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-request-failed"},"event Page.RequestFailed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-dialog"},"event Page.Dialog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-popup"},"event Page.Popup"))))}m.isMDXComponent=!0}}]);