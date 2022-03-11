"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2106],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),i=r(72389),o=r(29366),l=r(86010),s="tabItem_LplD";function u(e){var t,r,i,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),w=b.tabGroupChoices,k=b.setTabGroupChoices,N=(0,a.useState)(g),x=N[0],T=N[1],P=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==x&&y.some((function(e){return e.value===S}))&&T(S)}var j=function(e){var t=e.currentTarget,r=P.indexOf(t),n=y[r].value;n!==x&&(O(t),T(n),null!=m&&k(m,n))},E=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;r=P[n]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;r=P[a]||P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},y.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},866:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(9877),r(58215),["components"]),l={id:"library",title:"Library"},s=void 0,u={unversionedId:"library",id:"library",title:"Library",description:"Playwright can either be used as a part of the Playwright Test, or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on.",source:"@site/docs/library.mdx",sourceDirName:".",slug:"/library",permalink:"/docs/next/library",tags:[],version:"current",frontMatter:{id:"library",title:"Library"},sidebar:"docs",previous:{title:"Advanced: TypeScript",permalink:"/docs/next/test-typescript"},next:{title:"Auto-waiting",permalink:"/docs/next/actionability"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"First script",id:"first-script",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"In JavaScript",id:"in-javascript",level:3},{value:"In TypeScript",id:"in-typescript",level:3},{value:"System requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can either be used as a part of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/intro"},"Playwright Test"),", or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#typescript-support"},"TypeScript support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use npm or Yarn to install Playwright library in your Node.js project. See ",(0,i.kt)("a",{parentName:"p",href:"#system-requirements"},"system requirements"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D playwright\n")),(0,i.kt)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/browsers#managing-browser-binaries"},"managing browsers"),"."),(0,i.kt)("p",null,"Once installed, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",(0,i.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"},"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"firefox.launch({ headless: false, slowMo: 50 });\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/cli"},"Command line tools")," can be used to record user interactions and generate JavaScript code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright codegen wikipedia.org\n")),(0,i.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,i.kt)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),(0,i.kt)("h3",{id:"in-javascript"},"In JavaScript"),(0,i.kt)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//@ts-check\n// ...\n")),(0,i.kt)("p",null,"Alternatively, you can use JSDoc to set types for variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('playwright').Page} */\nlet page;\n")),(0,i.kt)("h3",{id:"in-typescript"},"In TypeScript"),(0,i.kt)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let page: import('playwright').Page;\n")),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires Node.js version 12 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}m.isMDXComponent=!0}}]);