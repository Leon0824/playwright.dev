"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[454],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),m=i,g=h["".concat(s,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294);function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7462),i=a(7294),n=a(2389),l=a(9366),o=a(6010),s="tabItem_LplD";function u(e){var t,a,n,u=e.lazy,p=e.block,c=e.defaultValue,h=e.values,m=e.groupId,g=e.className,d=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=d.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=d[0])?void 0:n.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),b=k.tabGroupChoices,v=k.setTabGroupChoices,N=(0,i.useState)(y),P=N[0],x=N[1],j=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=b[m];null!=E&&E!==P&&f.some((function(e){return e.value===E}))&&x(E)}var O=function(e){var t=e.currentTarget,a=j.indexOf(t),r=f[a].value;r!==P&&(S(t),x(r),null!=m&&v(m,r))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;a=j[r]||j[0];break;case"ArrowLeft":var i=j.indexOf(e.currentTarget)-1;a=j[i]||j[j.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},f.map((function(e){var t=e.value,a=e.label,n=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:O,onClick:O},n,{className:(0,o.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),u?(0,i.cloneElement)(d.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,n.Z)();return i.createElement(u,(0,r.Z)({key:String(t)},e))}},6137:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),l=(a(9877),a(8215),["components"]),o={id:"showcase",title:"Community Showcase"},s=void 0,u={unversionedId:"showcase",id:"showcase",title:"Community Showcase",description:"Users",source:"@site/docs/showcase.mdx",sourceDirName:".",slug:"/showcase",permalink:"/dotnet/docs/next/showcase",tags:[],version:"current",frontMatter:{id:"showcase",title:"Community Showcase"}},p={},c=[{value:"Users",id:"users",level:2},{value:"Unofficial language ports",id:"unofficial-language-ports",level:2},{value:"Tools",id:"tools",level:2},{value:"Frameworks",id:"frameworks",level:2},{value:"Examples",id:"examples",level:2},{value:"Guides",id:"guides",level:2},{value:"Contributing",id:"contributing",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode"},"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"TypeScript"),": Playwright is used to test typescript.js across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elastic/apm-agent-rum-js"},"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blockstack/ux"},"Blockstack"),": Playwright is used to run cross-browser UI tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fredericbonnet/instakittens-react-admin"},"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xtermjs/xterm.js"},"xterm.js"),": Playwright is used to run cross-browser integration tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/accessibility-insights-web"},"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),(0,n.kt)("h2",{id:"unofficial-language-ports"},"Unofficial language ports"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Playwright for Go",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/playwright-go"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"},"Documentation")))),(0,n.kt)("li",{parentName:"ul"},"Playwright for Crystal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naqvis/playwright-cr"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://naqvis.github.io/playwright-cr/"},"Documentation"))))),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://applitools.com"},"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.browserstack.com/docs/automate/playwright"},"BrowserStack"),": Run cross-browser Playwright tests in parallel on the BrowserStack cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://checklyhq.com"},"Checkly"),": Run Playwright checks on a schedule or on demand to monitor and test your web application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Codeception/CodeceptJS"},"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/dom-to-playwright"},"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elaichenkov/expected-condition-playwright"},"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://headlesstesting.com/support/start/playwright.html"},"Headless Testing"),": Run Playwright tests on browsers in the cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Widen/lariat"},"Lariat"),": Simplify page object construction for your Playwright tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JakePartusch/lumberjack"},"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HLTech/mockiavelli"},"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aerokube/moon"},"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hugomrdias/playwright-test"},"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/playwright-video"},"playwright-video"),": Capture a video while executing a Playwright script"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/qawolf"},"QA Wolf"),": Record and create Playwright tests and then run them in CI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/testimio/root-cause"},"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://saucelabs.com/platform/automation-tools/playwright"},"Sauce Labs"),": Run Playwright tests in parallel in the cloud or your own docker environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seleniumbox.com"},"Selenium Box - Enterprise Test Grid"),": Execute Playwright tests securely inside your firewall at scale"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/test-real-styles"},"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testim.io/playground/"},"Testim Playground"),": Record Playwright UI tests as code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://try.playwright.tech/"},"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser")),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Onslip/karma-playwright-launcher"},"karma-playwright-launcher"),": Playwright powered browser support for Karma"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Georgegriff/query-selector-shadow-dom"},"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hdorgeval/playwright-fluent"},"playwright-fluent"),": Fluent API around Playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework-browser.org/"},"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"},"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KyleADay/react-app-playwright"},"react-app-playwright"),": Using Playwright with a create-react-app project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/azemetre/playwright-react-typescript-jest-example"},"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + TypeScript project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/roggerfe/playwright-mocha"},"playwright-mocha"),": Using Playwright with Mocha and Chai"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apeckham/playwright-cljs"},"playwright-cljs"),": Playwright examples in ClojureScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arjun27/playwright-azure-functions"},"playwright-azure-functions"),": Playwright setup on Azure Functions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/austinkelleher/playwright-aws-lambda"},"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/d-shch/playwright-jest-circus-allure"},"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/heroku-playwright-example"},"Heroku Playwright Example"),": Example using Playwright on Heroku"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/saucelabs/saucectl-playwright-example"},"Sauce Labs Playwright Example"),": Example using Playwright on Sauce Labs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/browserstack/playwright-browserstack"},"BrowserStack Playwright Samples"),": Playwright sample tests to run on BrowserStack"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PauloGoncalvesBH/running-playwright-on-aws-lambda"},"Playwright - Parallel execution on AWS Lambda"),": Running hundreds of Playwright tests in a few seconds with AWS Lambda")),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://theheadless.dev"},"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"Did we miss something in this list? Send us a PR!"))}m.isMDXComponent=!0}}]);