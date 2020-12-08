(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{794:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),i=(a(0),a(866)),o={id:"why-playwright",title:"Why Playwright?"},l={unversionedId:"why-playwright",id:"version-1.5.2/why-playwright",isDocsHomePage:!1,title:"Why Playwright?",description:"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/versioned_docs/version-1.5.2/why-playwright.md",slug:"/why-playwright",permalink:"/playwright/docs/1.5.2/why-playwright",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.2/why-playwright.md",version:"1.5.2",sidebar:"version-1.5.2/docs",next:{title:"Getting Started",permalink:"/playwright/docs/1.5.2/intro"}},p=[{value:"Support for all browsers",id:"support-for-all-browsers",children:[]},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",children:[]},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",children:[]},{value:"Integrates with your workflow",id:"integrates-with-your-workflow",children:[]},{value:"Limitations",id:"limitations",children:[]}],b={rightToc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#support-for-all-browsers"}),"Support for all browsers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#fast-and-reliable-execution"}),"Fast and reliable execution")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#powerful-automation-capabilities"}),"Powerful automation capabilities")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#integrates-with-your-workflow"}),"Integrates with your workflow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#limitations"}),"Limitations"))),Object(i.b)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.chromium.org/"}),"Chromium"),"), Apple Safari (with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://webkit.org/"}),"WebKit"),") and Mozilla Firefox.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Test for mobile"),". Use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/emulation"}),"device emulation")," to test your responsive web apps in mobile web browsers.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Headless and headful"),". Playwright supports headless (without browser UI) and headful (with browser UI) modes for all browsers and all platforms. Headful is great for debugging, and headless is faster and suited for CI/cloud executions."))),Object(i.b)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Auto-wait APIs"),". Playwright interactions ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/actionability"}),"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Lean parallelization with browser contexts"),". Reuse a single browser instance for multiple parallelized, isolated execution environments with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/core-concepts"}),"browser contexts"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/selectors"}),"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure."))),Object(i.b)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/multi-pages"}),"multiple pages"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Powerful network control"),". Playwright introduces context-wide ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/network"}),"network interception")," to stub and mock network requests.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Modern web features"),". Playwright supports web components through ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/selectors"}),"shadow-piercing selectors"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/emulation"}),"geolocation, permissions"),", web workers and other modern web APIs. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Capabilities to cover all scenarios"),". Support for ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/network"}),"file downloads")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/input"}),"uploads"),", out-of-process iframes, native ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/input"}),"input events"),", and even ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/emulation"}),"dark mode"),"."))),Object(i.b)("h2",{id:"integrates-with-your-workflow"},"Integrates with your workflow"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"One-line installation"),". Running ",Object(i.b)("inlineCode",{parentName:"p"},"npm i playwright")," auto-downloads browser dependencies for your team to be onboarded quickly.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"TypeScript support"),". Playwright ships with built-in types for auto-completion and other benefits.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Debugging tools"),". Playwright works with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/debug"}),"editor debugger and browser developer tools")," to pause execution and inspect the web page.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Language bindings"),". Playwright is also available in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-python"}),"Python")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hardkoded/playwright-sharp"}),"C#"),". Learn about ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/languages"}),"supported languages"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Deploy tests to CI"),". First-party ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/docker/README"}),"Docker image")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"GitHub Actions")," to deploy tests to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.5.2/ci"}),"your preferred CI/CD provider"),"."))),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Legacy Edge and IE11 support"),". Playwright does not support legacy Microsoft Edge or IE11 (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"}),"deprecation notice"),"). The new Microsoft Edge (on Chromium) is supported.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Java language bindings"),": The Playwright API cannot be used in Java or Ruby today. This is a temporary limitation as Playwright is built to support bindings for any language.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Test on real mobile devices"),": Playwright uses desktop browsers to emulate mobile devices. If you are interested in running on real mobile devices, please ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"upvote this issue"),"."))))}s.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,d=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return a?n.a.createElement(d,l(l({ref:t},b),{},{components:a})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);