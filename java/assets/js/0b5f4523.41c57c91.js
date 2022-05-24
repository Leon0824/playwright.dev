"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3191],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||l;return a?r.createElement(g,n(n({ref:e},u),{},{components:a})):r.createElement(g,n({ref:e},u))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,n=new Array(l);n[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,n[1]=o;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6756:function(t,e,a){a.r(e),a.d(e,{assets:function(){return w},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return y}});var r=a(3905),i=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&u(t,a,e[a]);if(o)for(var a of o(e))p.call(e,a)&&u(t,a,e[a]);return t};const c={id:"showcase",title:"Community Showcase"},m=void 0,g={unversionedId:"showcase",id:"version-1.22/showcase",title:"Community Showcase",description:"Users",source:"@site/versioned_docs/version-1.22/showcase.mdx",sourceDirName:".",slug:"/showcase",permalink:"/java/docs/showcase",tags:[],version:"1.22",frontMatter:{id:"showcase",title:"Community Showcase"}},w={},y=[{value:"Users",id:"users",level:2},{value:"Unofficial language ports",id:"unofficial-language-ports",level:2},{value:"Tools",id:"tools",level:2},{value:"Frameworks",id:"frameworks",level:2},{value:"Examples",id:"examples",level:2},{value:"Guides",id:"guides",level:2},{value:"Contributing",id:"contributing",level:2}],f={toc:y};function k(t){var e,a=t,{components:i}=a,u=((t,e)=>{var a={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&p.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=h(h({},f),u),l(e,n({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"users"}),"Users"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/microsoft/vscode"}),"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/microsoft/TypeScript"}),"TypeScript"),": Playwright is used to test typescript.js across browsers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/elastic/apm-agent-rum-js"}),"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/blockstack/ux"}),"Blockstack"),": Playwright is used to run cross-browser UI tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/fredericbonnet/instakittens-react-admin"}),"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/xtermjs/xterm.js"}),"xterm.js"),": Playwright is used to run cross-browser integration tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/microsoft/accessibility-insights-web"}),"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),(0,r.kt)("h2",h({},{id:"unofficial-language-ports"}),"Unofficial language ports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playwright for Go",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/mxschmitt/playwright-go"}),"GitHub repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"}),"Documentation")))),(0,r.kt)("li",{parentName:"ul"},"Playwright for Crystal",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/naqvis/playwright-cr"}),"GitHub repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://naqvis.github.io/playwright-cr/"}),"Documentation"))))),(0,r.kt)("h2",h({},{id:"tools"}),"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://applitools.com"}),"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://www.browserstack.com/docs/automate/playwright"}),"BrowserStack"),": Run cross-browser Playwright tests in parallel on the BrowserStack cloud"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://checklyhq.com"}),"Checkly"),": Run Playwright checks on a schedule or on demand to monitor and test your web application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Codeception/CodeceptJS"}),"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Xiphe/dom-to-playwright"}),"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/elaichenkov/expected-condition-playwright"}),"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://headlesstesting.com/support/start/playwright.html"}),"Headless Testing"),": Run Playwright tests on browsers in the cloud"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Widen/lariat"}),"Lariat"),": Simplify page object construction for your Playwright tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/JakePartusch/lumberjack"}),"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/HLTech/mockiavelli"}),"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/aerokube/moon"}),"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/hugomrdias/playwright-test"}),"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/qawolf/playwright-video"}),"playwright-video"),": Capture a video while executing a Playwright script"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/qawolf/qawolf"}),"QA Wolf"),": Record and create Playwright tests and then run them in CI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/testimio/root-cause"}),"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://saucelabs.com/platform/automation-tools/playwright"}),"Sauce Labs"),": Run Playwright tests in parallel in the cloud or your own docker environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://seleniumbox.com"}),"Selenium Box - Enterprise Test Grid"),": Execute Playwright tests securely inside your firewall at scale"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Xiphe/test-real-styles"}),"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://www.testim.io/playground/"}),"Testim Playground"),": Record Playwright UI tests as code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://www.tesults.com/docs/playwright"}),"Tesults"),": Test automation reporting application and dashboard with Playwright integration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://try.playwright.tech/"}),"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser")),(0,r.kt)("h2",h({},{id:"frameworks"}),"Frameworks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Onslip/karma-playwright-launcher"}),"karma-playwright-launcher"),": Playwright powered browser support for Karma"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/Georgegriff/query-selector-shadow-dom"}),"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/hdorgeval/playwright-fluent"}),"playwright-fluent"),": Fluent API around Playwright"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://robotframework-browser.org/"}),"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),(0,r.kt)("h2",h({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"}),"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/KyleADay/react-app-playwright"}),"react-app-playwright"),": Using Playwright with a create-react-app project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/azemetre/playwright-react-typescript-jest-example"}),"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + TypeScript project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/roggerfe/playwright-mocha"}),"playwright-mocha"),": Using Playwright with Mocha and Chai"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/apeckham/playwright-cljs"}),"playwright-cljs"),": Playwright examples in ClojureScript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/arjun27/playwright-azure-functions"}),"playwright-azure-functions"),": Playwright setup on Azure Functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/austinkelleher/playwright-aws-lambda"}),"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/d-shch/playwright-jest-circus-allure"}),"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/mxschmitt/heroku-playwright-example"}),"Heroku Playwright Example"),": Example using Playwright on Heroku"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/saucelabs/saucectl-playwright-example"}),"Sauce Labs Playwright Example"),": Example using Playwright on Sauce Labs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/browserstack/playwright-browserstack"}),"BrowserStack Playwright Samples"),": Playwright sample tests to run on BrowserStack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://github.com/PauloGoncalvesBH/running-playwright-on-aws-lambda"}),"Playwright - Parallel execution on AWS Lambda"),": Running hundreds of Playwright tests in a few seconds with AWS Lambda")),(0,r.kt)("h2",h({},{id:"guides"}),"Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"https://theheadless.dev"}),"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),(0,r.kt)("h2",h({},{id:"contributing"}),"Contributing"),(0,r.kt)("p",null,"Did we miss something in this list? Send us a PR!"))}k.isMDXComponent=!0}}]);