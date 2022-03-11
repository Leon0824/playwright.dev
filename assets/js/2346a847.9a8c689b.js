"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4165],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(67294),s=a(72389),i=a(29366),l=a(86010),o="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=h[0])?void 0:s.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),v=N.tabGroupChoices,b=N.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],T=w[1],j=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=v[d];null!=P&&P!==x&&f.some((function(e){return e.value===P}))&&T(P)}var I=function(e){var t=e.currentTarget,a=j.indexOf(t),n=f[a].value;n!==x&&(C(t),T(n),null!=d&&b(d,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},g)},f.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:I,onClick:I},s,{className:(0,l.Z)("tabs__item",o,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},8755:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(9877),l=a(58215),o=["components"],p={id:"intro",title:"Getting started"},u=void 0,c={unversionedId:"intro",id:"version-1.19/intro",title:"Getting started",description:"Playwright can either be used as a part of the Playwright Test test runner (this guide), or as a Playwright Library.",source:"@site/versioned_docs/version-1.19/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",tags:[],version:"1.19",frontMatter:{id:"intro",title:"Getting started"},sidebar:"version-1.19/docs",next:{title:"Inspector",permalink:"/docs/inspector"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Using init command",id:"using-init-command",level:3},{value:"Manually",id:"manually",level:3},{value:"First test",id:"first-test",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Writing assertions",id:"writing-assertions",level:2},{value:"Using test fixtures",id:"using-test-fixtures",level:2},{value:"Using test hooks",id:"using-test-hooks",level:2},{value:"Command line",id:"command-line",level:2},{value:"Configure NPM scripts",id:"configure-npm-scripts",level:2}],g={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can either be used as a part of the Playwright Test test runner (this guide), or as a ",(0,s.kt)("a",{parentName:"p",href:"/docs/library"},"Playwright Library"),"."),(0,s.kt)("p",null,"Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run tests across all browsers."),(0,s.kt)("li",{parentName:"ul"},"Execute tests in parallel."),(0,s.kt)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),(0,s.kt)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),(0,s.kt)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),(0,s.kt)("br",null),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#first-test"},"First test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuration-file"},"Configuration file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#writing-assertions"},"Writing assertions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#using-test-fixtures"},"Using test fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#using-test-hooks"},"Using test hooks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#command-line"},"Command line")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configure-npm-scripts"},"Configure NPM scripts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/release-notes"},"Release notes"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"Playwright has its own test runner for end-to-end tests, we call it Playwright Test."),(0,s.kt)("h3",{id:"using-init-command"},"Using init command"),(0,s.kt)("p",null,"The easiest way to get started with Playwright Test is to run the init command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Run from your project's root directory\nnpm init playwright\n# Or create a new project\nnpm init playwright new-project\n")),(0,s.kt)("p",null,"This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test ",(0,s.kt)("inlineCode",{parentName:"p"},"example.spec.ts"),". You can now jump directly to ",(0,s.kt)("a",{parentName:"p",href:"#writing-assertions"},"writing assertions")," section."),(0,s.kt)("h3",{id:"manually"},"Manually"),(0,s.kt)("p",null,"Add dependency and install browsers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @playwright/test\n# install supported browsers\nnpx playwright install\n")),(0,s.kt)("p",null,"You can optionally install only selected browsers, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/cli#install-browsers"},"install browsers")," for more details. Or you can install no browsers at all and use existing ",(0,s.kt)("a",{parentName:"p",href:"/docs/browsers"},"browser channels"),"."),(0,s.kt)("h2",{id:"first-test"},"First test"),(0,s.kt)("p",null,"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/example.spec.js")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/example.spec.ts")," for TypeScript) to define your test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n")))),(0,s.kt)("p",null,"Now run your tests, assuming that test files are in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,s.kt)("p",null,"Playwright Test just ran a test using Chromium browser, in a headless manner. Let's tell it to use headed browser:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n")),(0,s.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,s.kt)("p",null,"To enjoy all the features that Playwright Test has to offer, you would want to create a configuration file ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js"),"). It allows you to run tests in multiple browsers configured as you'd like."),(0,s.kt)("p",null,'Here is an example configuration that runs every test in Chromium, Firefox and WebKit, by creating a "project" for each browser configuration. It also specifies ',(0,s.kt)("a",{parentName:"p",href:"/docs/test-retries"},"two retries")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/trace-viewer"},"tracing")," options."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  use: {\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  use: {\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Look for more options in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration section"),"."),(0,s.kt)("p",null,"Now you can run tests in multiple browsers by default."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n\nRunning 5 tests using 5 workers\n\n  \u2713 [chromium] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [webkit] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --project=firefox\n\nRunning 1 test using 1 worker\n\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,s.kt)("h2",{id:"writing-assertions"},"Writing assertions"),(0,s.kt)("p",null,"Playwright Test uses ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"expect")," library for test assertions. It extends it with the Playwright-specific matchers to achieve greater testing ergonomics."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-assertions"},"test assertions here"),"."),(0,s.kt)("p",null,"Here is a quick example of using them:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=Introduction').first()).toBeVisible();\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=Introduction').first()).toBeVisible();\n});\n")))),(0,s.kt)("h2",{id:"using-test-fixtures"},"Using test fixtures"),(0,s.kt)("p",null,"You noticed an argument ",(0,s.kt)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"test('basic test', async ({ page }) => {\n  ...\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('basic test', async ({ page }) => {\n  ...\n")))),(0,s.kt)("p",null,"We call these arguments ",(0,s.kt)("inlineCode",{parentName:"p"},"fixtures"),". Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test."),(0,s.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Fixture"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"page"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-page",title:"Page"},"Page")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated page for this test run.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"context"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated context for this test run. The ",(0,s.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/docs/test-configuration"},"configure context"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browser"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-browser",title:"Browser"},"Browser")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Browsers are shared across tests to optimize resources. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/docs/test-configuration"},"configure browser"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browserName"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the browser currently running the test. Either ",(0,s.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,s.kt)("h2",{id:"using-test-hooks"},"Using test hooks"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://playwright.dev/');\n  });\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://playwright.dev/');\n  });\n});\n")))),(0,s.kt)("h2",{id:"command-line"},"Command line"),(0,s.kt)("p",null,"Following are the usual command line patterns. Learn more about the ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-cli"},"command line"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run all the tests"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a single test file"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page.spec.ts\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a set of test files"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run files that have ",(0,s.kt)("inlineCode",{parentName:"p"},"my-spec")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"my-spec-2")," in the file name"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test my-spec my-spec-2\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run the test with the title"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx playwright test -g "add a todo item"\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in a particular configuration (project)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --project=firefox\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Disable ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelization")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Choose a ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-reporters"},"reporter")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,s.kt)("a",{parentName:"p",href:"/docs/inspector"},"Playwright Inspector")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --debug\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Ask for help"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --help\n")))),(0,s.kt)("h2",{id:"configure-npm-scripts"},"Configure NPM scripts"),(0,s.kt)("p",null,"Playwright Test will automatically pick up ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "playwright test"\n  }\n}\n')),(0,s.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,s.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "playwright test --config=tests/example.config.js"\n  }\n}\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"  To pass options through npm script, use double dashes: ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test -- --headed"),"."))))}h.isMDXComponent=!0}}]);