"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5373],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(67294),s=a(72389),l=a(29366),i=a(86010),o="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=k[0])?void 0:s.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),N=v.tabGroupChoices,b=v.setTabGroupChoices,w=(0,r.useState)(y),T=w[0],x=w[1],C=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&x(O)}var I=function(e){var t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==T&&(j(t),x(n),null!=m&&b(m,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:I,onClick:I},s,{className:(0,i.Z)("tabs__item",o,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},13181:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=a(9877),i=a(58215),o=["components"],p={id:"test-retries",title:"Test retry"},u=void 0,c={unversionedId:"test-retries",id:"test-retries",title:"Test retry",description:"- Failures",source:"@site/docs/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/docs/next/test-retries",tags:[],version:"current",frontMatter:{id:"test-retries",title:"Test retry"},sidebar:"docs",previous:{title:"Reporters",permalink:"/docs/next/test-reporters"},next:{title:"Timeouts",permalink:"/docs/next/test-timeouts"}},d={},m=[{value:"Failures",id:"failures",level:2},{value:"Retries",id:"retries",level:2},{value:"Serial mode",id:"serial-mode",level:2},{value:"Reuse single page between tests",id:"reuse-single-page-between-tests",level:2}],f={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#failures"},"Failures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#retries"},"Retries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#serial-mode"},"Serial mode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#reuse-single-page-between-tests"},"Reuse single page between tests"))),(0,s.kt)("h2",{id:"failures"},"Failures"),(0,s.kt)("p",null,"Playwright Test runs tests in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,s.kt)("p",null,"Consider the following snippet:"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,s.kt)("p",null,"When ",(0,s.kt)("strong",{parentName:"p"},"all tests pass"),", they will run in order in the same worker process."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"Should ",(0,s.kt)("strong",{parentName:"p"},"any test fail"),", Playwright Test will discard the entire worker process along with the browser and will start a new one. Testing will continue in the new worker process starting with the next test."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"If you ",(0,s.kt)("strong",{parentName:"p"},"enable ",(0,s.kt)("a",{parentName:"strong",href:"#retries"},"retries")),", second worker process will start by retrying the failed test and continue from there."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," is retried and passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"This scheme works perfectly for independent tests and guarantees that failing tests can't affect healthy ones."),(0,s.kt)("h2",{id:"retries"},"Retries"),(0,s.kt)("p",null,"Playwright Test supports ",(0,s.kt)("strong",{parentName:"p"},"test retries"),". When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default failing tests are not retried."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Give failing tests 3 retry attempts\nnpx playwright test --retries=3\n")),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Playwright Test will categorize tests as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"passed" - tests that passed on the first run;'),(0,s.kt)("li",{parentName:"ul"},'"flaky" - tests that failed on the first run, but passed when retried;'),(0,s.kt)("li",{parentName:"ul"},'"failed" - tests that failed on the first run and failed all retries.')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Running 3 tests using 1 worker\n\n  \u2713 example.spec.ts:4:2 \u203a first passes (438ms)\n  x example.spec.ts:5:2 \u203a second flaky (691ms)\n  \u2713 example.spec.ts:5:2 \u203a second flaky (522ms)\n  \u2713 example.spec.ts:6:2 \u203a third passes (932ms)\n\n  1 flaky\n    example.spec.ts:5:2 \u203a second flaky\n  2 passed (4s)\n")),(0,s.kt)("p",null,"You can detect retries at runtime with ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-retry"},"testInfo.retry"),", which is accessible to any test, hook or fixture. Here is an example that clears some server-side state before a retry."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n")))),(0,s.kt)("h2",{id:"serial-mode"},"Serial mode"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe-serial"},"test.describe.serial(title, callback)")," to group dependent tests to ensure they will always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together."),(0,s.kt)("p",null,"Consider the following snippet that uses ",(0,s.kt)("inlineCode",{parentName:"p"},"test.describe.serial"),":"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\ntest.beforeAll(async () => { /* ... */ });\ntest('first good', async ({ page }) => { /* ... */ });\ntest('second flaky', async ({ page }) => { /* ... */ });\ntest('third good', async ({ page }) => { /* ... */ });\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\ntest.beforeAll(async () => { /* ... */ });\ntest('first good', async ({ page }) => { /* ... */ });\ntest('second flaky', async ({ page }) => { /* ... */ });\ntest('third good', async ({ page }) => { /* ... */ });\n")))),(0,s.kt)("p",null,"When running without ",(0,s.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests after the failure are skipped:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," is skipped entirely")))),(0,s.kt)("p",null,"When running with ",(0,s.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests are retried together:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," is skipped"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is usually better to make your tests isolated, so they can be efficiently run and retried independently."))),(0,s.kt)("h2",{id:"reuse-single-page-between-tests"},"Reuse single page between tests"),(0,s.kt)("p",null,"Playwright Test creates an isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object for each test. However, if you'd like to reuse a single ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object between multiple tests, you can create your own in ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and close it in ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-after-all"},"test.afterAll(hookFunction)"),"."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n")))))}k.isMDXComponent=!0}}]);