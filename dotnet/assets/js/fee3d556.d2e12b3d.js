"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5385],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15776:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var n=a(3905),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&p(e,a,t[a]);return e};const d={id:"locators",title:"Locators"},m=void 0,h={unversionedId:"locators",id:"locators",title:"Locators",description:"Locator]s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the [Page.Locator(selector, options) method.",source:"@site/docs/locators.mdx",sourceDirName:".",slug:"/locators",permalink:"/dotnet/docs/next/locators",tags:[],version:"current",frontMatter:{id:"locators",title:"Locators"},sidebar:"docs",previous:{title:"Handles",permalink:"/dotnet/docs/next/handles"},next:{title:"Input",permalink:"/dotnet/docs/next/input"}},g={},f=[{value:"Creating Locators",id:"creating-locators",level:2},{value:"Strictness",id:"strictness",level:2},{value:"Lists",id:"lists",level:2},{value:"Filtering Locators",id:"filtering-locators",level:2},{value:"Locator vs ElementHandle",id:"locator-vs-elementhandle",level:2}],y={toc:f};function w(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),r(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-locator",title:"Locator"}),"Locator"),"s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-locator"}),"Page.Locator(selector, options)")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var locator = page.Locator("text=Submit");\nawait locator.ClickAsync();\n')),(0,n.kt)("p",null,"Every time locator is used for some action, up-to-date DOM element is located in the page. So in the snippet below, underlying DOM element is going to be located twice, prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var locator = page.Locator("text=Submit");\nawait locator.HoverAsync();\nawait locator.ClickAsync();\n')),(0,n.kt)("h2",u({},{id:"creating-locators"}),"Creating Locators"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-locator"}),"Page.Locator(selector, options)")," method to create a locator. This method takes a selector that describes how to find an element in the page. Playwright supports many different selectors like ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/selectors#text-selector"}),"Text"),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/selectors#css-selector"}),"CSS"),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/selectors#xpath-selectors"}),"XPath")," and many more. Learn more about available selectors and how to pick one in this ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/selectors"}),"in-depth guide"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Find by text.\nawait page.Locator("text=Sign up").ClickAsync();\n\n// Find by CSS.\nawait page.Locator("button.sign-up").ClickAsync();\n\n// Find by test id.\nawait page.Locator("data-testid=sign-up").ClickAsync();\n')),(0,n.kt)("h2",u({},{id:"strictness"}),"Strictness"),(0,n.kt)("p",null,"Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches given selector."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Throws if there are several buttons in DOM:\nawait page.Locator("button").ClickAsync();\n\n// Works because we explicitly tell locator to pick the first element:\nawait page.Locator("button").First.ClickAsync();\n\n// Works because Count knows what to do with multiple matches:\nawait page.Locator("button").CountAsync();\n')),(0,n.kt)("h2",u({},{id:"lists"}),"Lists"),(0,n.kt)("p",null,"You can also use locators to work with the element lists."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Locate elements, this locator points to a list.\nvar rows = page.Locator("table tr");\n\n// Pattern 1: use locator methods to calculate text on the whole list.\nvar texts = await rows.AllTextContentsAsync();\n\n// Pattern 2: do something with each element in the list:\nvar count = await rows.CountAsync()\nfor (let i = 0; i < count; ++i)\n  Console.WriteLine(await rows.Nth(i).TextContentAsync());\n\n// Pattern 3: resolve locator to elements on page and map them to their text content\n// Note: the code inside evaluateAll runs in page, you can call any DOM apis there\nvar texts = await rows.EvaluateAllAsync("list => list.map(element => element.textContent)");\n')),(0,n.kt)("h2",u({},{id:"filtering-locators"}),"Filtering Locators"),(0,n.kt)("p",null,"When creating a locator, you can pass additional options to filter it."),(0,n.kt)("p",null,"Filtering by text will search for a particular string somewhere inside the element, possibly in a descendant element, case-insensitively. You can also pass a regular expression."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.Locator("button", new PageLocatorOptions { HasText = "Sign up" }).ClickAsync();\n')),(0,n.kt)("p",null,"Locators also support an option to only select elements that have a descendant matching another locator. Note that inner locator is matched starting from the outer one, not from the document root."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'page.Locator("article", new PageLocatorOptions { Has = page.Locator("button.subscribe") })\n')),(0,n.kt)("p",null,"You can also filter an existing locator with ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-locator#locator-that"}),"Locator.That(options)")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var buttonLocator = page.Locator("button");\n// ...\nawait buttonLocator.That(new LocatorThatOptions { HasText = "Sign up" }).ClickAsync();\n')),(0,n.kt)("h2",u({},{id:"locator-vs-elementhandle"}),"Locator vs ElementHandle"),(0,n.kt)("div",u({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"We only recommend using ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead."))),(0,n.kt)("p",null,"The difference between the ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-locator",title:"Locator"}),"Locator")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element."),(0,n.kt)("p",null,"In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var handle = await page.QuerySelectorAsync("text=Submit");\nawait handle.HoverAsync();\nawait handle.ClickAsync();\n')),(0,n.kt)("p",null,"With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var locator = page.Locator("text=Submit");\nawait locator.HoverAsync();\nawait locator.ClickAsync();\n')))}w.isMDXComponent=!0}}]);