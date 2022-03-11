"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2358],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,k=c["".concat(i,".").concat(h)]||c[h]||d[h]||s;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87462),a=r(67294),s=r(72389),o=r(29366),l=r(86010),i="tabItem_LplD";function p(e){var t,r,s,p=e.lazy,u=e.block,d=e.defaultValue,c=e.values,h=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(m,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(s=f[0])?void 0:s.props.value;if(null!==g&&!m.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),N=v.tabGroupChoices,x=v.setTabGroupChoices,T=(0,a.useState)(g),y=T[0],w=T[1],S=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=N[h];null!=j&&j!==y&&m.some((function(e){return e.value===j}))&&w(j)}var O=function(e){var t=e.currentTarget,r=S.indexOf(t),n=m[r].value;n!==y&&(C(t),w(n),null!=h&&x(h,n))},R=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;r=S[n]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;r=S[a]||S[S.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},k)},m.map((function(e){var t=e.value,r=e.label,s=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:O,onClick:O},s,{className:(0,l.Z)("tabs__item",i,null==s?void 0:s.className,{"tabs__item--active":y===t})}),null!=r?r:t)}))),p?(0,a.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function u(e){var t=(0,s.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},98928:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=r(9877),l=r(58215),i=["components"],p={id:"class-reporter",title:"Reporter"},u=void 0,d={unversionedId:"api/class-reporter",id:"api/class-reporter",title:"Reporter",description:"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional.",source:"@site/docs/api/class-reporter.mdx",sourceDirName:"api",slug:"/api/class-reporter",permalink:"/docs/next/api/class-reporter",tags:[],version:"current",frontMatter:{id:"class-reporter",title:"Reporter"},sidebar:"api",previous:{title:"Location",permalink:"/docs/next/api/class-location"},next:{title:"Suite",permalink:"/docs/next/api/class-suite"}},c={},h=[{value:"reporter.onBegin(config, suite)",id:"reporter-on-begin",level:2},{value:"reporter.onEnd(result)",id:"reporter-on-end",level:2},{value:"reporter.onError(error)",id:"reporter-on-error",level:2},{value:"reporter.onStdErr(chunk, test, result)",id:"reporter-on-std-err",level:2},{value:"reporter.onStdOut(chunk, test, result)",id:"reporter-on-std-out",level:2},{value:"reporter.onStepBegin(test, result, step)",id:"reporter-on-step-begin",level:2},{value:"reporter.onStepEnd(test, result, step)",id:"reporter-on-step-end",level:2},{value:"reporter.onTestBegin(test, result)",id:"reporter-on-test-begin",level:2},{value:"reporter.onTestEnd(test, result)",id:"reporter-on-test-end",level:2},{value:"reporter.printsToStdio()",id:"reporter-prints-to-stdio",level:2}],k={toc:h};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional."),(0,s.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Make sure to export this class as default."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// my-awesome-reporter.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,s.kt)("p",null,"Now use this reporter with ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig#test-config-reporter"},"testConfig.reporter"),". Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-reporters"},"using reporters"),"."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Here is a typical order of reporter calls:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")," is called once with a root suite that contains all other suites and tests. Learn more about ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-suite",title:"Suite"},"suites hierarchy"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-test-begin"},"reporter.onTestBegin(test, result)")," is called for each test run. It is given a ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase")," that is executed, and a ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult")," that is almost empty. Test result will be populated while the test runs (for example, with steps and stdio) and will get final ",(0,s.kt)("inlineCode",{parentName:"li"},"status")," once the test finishes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-step-end"},"reporter.onStepEnd(test, result, step)")," are called for each executed step inside the test. When steps are executed, test run has not finished yet."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-test-end"},"reporter.onTestEnd(test, result)")," is called when test run has finished. By this time, ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult")," is complete and you can use ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status"),", ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-error"},"testResult.error")," and more."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-end"},"reporter.onEnd(result)")," is called once after all tests that should run had finished.")),(0,s.kt)("p",null,"Additionally, ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-reporter#reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-reporter#reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)")," are called when standard output is produced in the worker process, possibly during a test execution, and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-reporter#reporter-on-error"},"reporter.onError(error)")," is called when something went wrong outside of the test execution."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-end"},"reporter.onEnd(result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-error"},"reporter.onError(error)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-step-end"},"reporter.onStepEnd(test, result, step)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-test-begin"},"reporter.onTestBegin(test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-on-test-end"},"reporter.onTestEnd(test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-reporter#reporter-prints-to-stdio"},"reporter.printsToStdio()"))),(0,s.kt)("h2",{id:"reporter-on-begin"},"reporter.onBegin(config, suite)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"config"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-config"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testconfig",title:"TestConfig"},"TestConfig"),">"," Resolved configuration.",(0,s.kt)("a",{href:"#reporter-on-begin-option-config",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"suite"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-suite"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-suite",title:"Suite"},"Suite"),">"," The root suite that contains all projects, files and test cases.",(0,s.kt)("a",{href:"#reporter-on-begin-option-suite",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called once before running tests. All tests have been already discovered and put into a hierarchy of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-suite",title:"Suite"},"Suite"),"s."),(0,s.kt)("h2",{id:"reporter-on-end"},"reporter.onEnd(result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Result of the full test run.",(0,s.kt)("a",{href:"#reporter-on-end-option-result",class:"list-anchor"},"#")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"status")," ","<",'"passed"|"failed"|"timedout"|"interrupted"',">")),(0,s.kt)("br",null),"* `'passed'` - Everything went as expected. * `'failed'` - Any test has failed. * `'timedout'` - The [testConfig.globalTimeout](/docs/next/api/class-testconfig#test-config-global-timeout) has been reached. * `'interrupted'` - Interrupted by the user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-return"})," ","<",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#reporter-on-end-return",class:"list-anchor"},"#")))),(0,s.kt)("p",null,"Called after all tests has been run, or testing has been interrupted. Note that this method may return a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise")," and Playwright Test will await it."),(0,s.kt)("h2",{id:"reporter-on-error"},"reporter.onError(error)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"error"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-option-error"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror",title:"TestError"},"TestError"),">"," The error.",(0,s.kt)("a",{href:"#reporter-on-error-option-error",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-error-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called on some global error, for example unhandled exception in the worker process."),(0,s.kt)("h2",{id:"reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chunk"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-chunk"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Output chunk.",(0,s.kt)("a",{href:"#reporter-on-std-err-option-chunk",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that was running. Note that output may happen when no test is running, in which case this will be ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),".",(0,s.kt)("a",{href:"#reporter-on-std-err-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-std-err-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-std-err-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when something has been written to the standard error in the worker process."),(0,s.kt)("h2",{id:"reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chunk"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-chunk"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Output chunk.",(0,s.kt)("a",{href:"#reporter-on-std-out-option-chunk",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that was running. Note that output may happen when no test is running, in which case this will be ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),".",(0,s.kt)("a",{href:"#reporter-on-std-out-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-std-out-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-std-out-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when something has been written to the standard output in the worker process."),(0,s.kt)("h2",{id:"reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that the step belongs to.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"step"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-step"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep",title:"TestStep"},"TestStep"),">"," Test step instance that has started.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-step",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-step-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when a test step started in the worker process."),(0,s.kt)("h2",{id:"reporter-on-step-end"},"reporter.onStepEnd(test, result, step)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that the step belongs to.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"step"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-step"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep",title:"TestStep"},"TestStep"),">"," Test step instance that has finished.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-step",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-step-end-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when a test step finished in the worker process."),(0,s.kt)("h2",{id:"reporter-on-test-begin"},"reporter.onTestBegin(test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been started.",(0,s.kt)("a",{href:"#reporter-on-test-begin-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-test-begin-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-test-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called after a test has been started in the worker process."),(0,s.kt)("h2",{id:"reporter-on-test-end"},"reporter.onTestEnd(test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been finished.",(0,s.kt)("a",{href:"#reporter-on-test-end-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run.",(0,s.kt)("a",{href:"#reporter-on-test-end-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-test-end-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called after a test has been finished in the worker process."),(0,s.kt)("h2",{id:"reporter-prints-to-stdio"},"reporter.printsToStdio()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-prints-to-stdio-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,s.kt)("a",{href:"#reporter-prints-to-stdio-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether this reporter uses stdio for reporting. When it does not, Playwright Test could add some output to enhance user experience."))}f.isMDXComponent=!0}}]);