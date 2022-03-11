"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3505],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,v=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return a?n.createElement(v,l(l({ref:t},u),{},{components:a})):n.createElement(v,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(67294),s=a(72389),l=a(29366),o=a(86010),i="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=f[0])?void 0:s.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),k=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],N=w[1],j=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&N(I)}var P=function(e){var t=e.currentTarget,a=j.indexOf(t),n=g[a].value;n!==x&&(S(t),N(n),null!=d&&T(d,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",i,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},300:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=a(9877),o=a(58215),i=["components"],p={id:"test-parameterize",title:"Parametrize tests"},u=void 0,c={unversionedId:"test-parameterize",id:"test-parameterize",title:"Parametrize tests",description:"You can either parametrize tests on a test level or on a project level.",source:"@site/docs/test-parameterize.mdx",sourceDirName:".",slug:"/test-parameterize",permalink:"/docs/next/test-parameterize",tags:[],version:"current",frontMatter:{id:"test-parameterize",title:"Parametrize tests"},sidebar:"docs",previous:{title:"Parallelism and sharding",permalink:"/docs/next/test-parallel"},next:{title:"Reporters",permalink:"/docs/next/test-reporters"}},m={},d=[{value:"Parameterized Tests",id:"parameterized-tests",level:2},{value:"Parameterized Projects",id:"parameterized-projects",level:2},{value:"Passing Environment Variables",id:"passing-environment-variables",level:2},{value:".env files",id:"env-files",level:3},{value:"Create tests via a CSV file",id:"create-tests-via-a-csv-file",level:2}],v={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can either parametrize tests on a test level or on a project level."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#parameterized-tests"},"Parameterized Tests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#parameterized-projects"},"Parameterized Projects")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#passing-environment-variables"},"Passing Environment Variables")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-tests-via-a-csv-file"},"Create tests via a CSV file"))),(0,s.kt)("h2",{id:"parameterized-tests"},"Parameterized Tests"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nconst people = ['Alice', 'Bob'];\nfor (const name of people) {\n  test(`testing with ${name}`, async () => {\n    // ...\n  });\n  // You can also do it with test.describe() or with multiple tests as long the test name is unique.\n}\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst people = ['Alice', 'Bob'];\nfor (const name of people) {\n  test(`testing with ${name}`, async () => {\n    // ...\n  });\n  // You can also do it with test.describe() or with multiple tests as long the test name is unique.\n}\n")))),(0,s.kt)("h2",{id:"parameterized-projects"},"Parameterized Projects"),(0,s.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. In the following example, we'll run two projects with different options."),(0,s.kt)("p",null,"We declare the option ",(0,s.kt)("inlineCode",{parentName:"p"},"person")," and set the value in the config. The first project runs with the value ",(0,s.kt)("inlineCode",{parentName:"p"},"Alice")," and the second with the value ",(0,s.kt)("inlineCode",{parentName:"p"},"Bob"),"."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\n\nexport type TestOptions = {\n  person: string;\n};\n\nexport const test = base.extend<TestOptions>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n});\n")))),(0,s.kt)("p",null,"We can use this option in the test, similarly to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-fixtures"},"fixtures"),"."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test } from './my-test';\n\ntest('test 1', async ({ page, person }) => {\n  await page.goto(`/index.html`);\n  await expect(page.locator('#node')).toContainText(person);\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('./my-test');\n\ntest('test 1', async ({ page, person }) => {\n  await page.goto(`/index.html`);\n  await expect(page.locator('#node')).toContainText(person);\n  // ...\n});\n")))),(0,s.kt)("p",null,"Now, we can run tests in multiple configurations by using projects."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { TestOptions } from './my-test';\n\nconst config: PlaywrightTestConfig<TestOptions> = {\n  projects: [\n    {\n      name: 'alice',\n      use: { person: 'Alice' },\n    },\n    {\n      name: 'bob',\n      use: { person: 'Bob' },\n    },\n  ]\n};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig<{ person: string }>} */\nconst config = {\n  projects: [\n    {\n      name: 'alice',\n      use: { person: 'Alice' },\n    },\n    {\n      name: 'bob',\n      use: { person: 'Bob' },\n    },\n  ]\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"We can also use the option in a fixture. Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-fixtures"},"fixtures"),"."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\n\nexport type TestOptions = {\n  person: string;\n};\n\nexport const test = base.test.extend<TestOptions>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n\n  // Override default \"page\" fixture.\n  page: async ({ page, person }, use) => {\n    await page.goto('/chat');\n    // We use \"person\" parameter as a \"name\" for the chat room.\n    await page.locator('#name').fill(person);\n    await page.click('text=Enter chat room');\n    // Each test will get a \"page\" that already has the person name.\n    await use(page);\n  },\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n\n  // Override default \"page\" fixture.\n  page: async ({ page, person }, use) => {\n    await page.goto('/chat');\n    // We use \"person\" parameter as a \"name\" for the chat room.\n    await page.locator('#name').fill(person);\n    await page.click('text=Enter chat room');\n    // Each test will get a \"page\" that already has the person name.\n    await use(page);\n  },\n});\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Parametrized projects behavior has changed in version 1.18. ",(0,s.kt)("a",{parentName:"p",href:"./release-notes#breaking-change-custom-config-options"},"Learn more"),"."))),(0,s.kt)("h2",{id:"passing-environment-variables"},"Passing Environment Variables"),(0,s.kt)("p",null,"You can use environment variables to configure tests from the command line."),(0,s.kt)("p",null,"For example, consider the following test file that needs a username and a password. It is usually a good idea not to store your secrets in the source code, so we'll need a way to pass secrets from outside."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\ntest(`example test`, async ({ page }) => {\n  // ...\n  await page.locator('#username').fill(process.env.USERNAME);\n  await page.locator('#password').fill(process.env.PASSWORD);\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\ntest(`example test`, async ({ page }) => {\n  // ...\n  await page.locator('#username').fill(process.env.USERNAME);\n  await page.locator('#password').fill(process.env.PASSWORD);\n});\n")))),(0,s.kt)("p",null,"You can run this test with your secrect username and password set in the command line."),(0,s.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"USERNAME=me PASSWORD=secret npx playwright test\n"))),(0,s.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:USERNAME=me\n$env:PASSWORD=secret\nnpx playwright test\n"))),(0,s.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-batch"},"set USERNAME=me\nset PASSWORD=secret\nnpx playwright test\n")))),(0,s.kt)("p",null,"Similarly, configuration file can also read environment variables passed throught the command line."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Now, you can run tests against a staging or a production environment:"),(0,s.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"STAGING=1 npx playwright test\n"))),(0,s.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:STAGING=1\nnpx playwright test\n"))),(0,s.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-batch"},"set STAGING=1\nnpx playwright test\n")))),(0,s.kt)("h3",{id:"env-files"},".env files"),(0,s.kt)("p",null,"To make environment variables easier to manage, consider something like ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," files. Here is an example that uses ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},(0,s.kt)("inlineCode",{parentName:"a"},"dotenv"))," package to read environment variables directly in the configuration file."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport dotenv from 'dotenv';\nimport path from 'path';\n\n// Read from default \".env\" file.\ndotenv.config();\n\n// Alternatively, read from \"../my.env\" file.\ndotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n// Read from default \".env\" file.\nrequire('dotenv').config();\n\n// Alternatively, read from \"../my.env\" file.\nrequire('dotenv').config({ path: path.resolve(__dirname, '..', 'my.env') });\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Now, you can just edit ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file to set any variables you'd like."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# .env file\nSTAGING=0\nUSERNAME=me\nPASSWORD=secret\n")),(0,s.kt)("p",null,"Run tests as usual, your environment variables should be picked up."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,s.kt)("h2",{id:"create-tests-via-a-csv-file"},"Create tests via a CSV file"),(0,s.kt)("p",null,"The Playwright test-runner runs in Node.js, this means you can directly read files from the file system and parse them with your preferred CSV library."),(0,s.kt)("p",null,"See for example this CSV file, in our example ",(0,s.kt)("inlineCode",{parentName:"p"},"input.csv"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},'"test_case","some_value","some_other_value"\n"value 1","value 11","foobar1"\n"value 2","value 22","foobar21"\n"value 3","value 33","foobar321"\n"value 4","value 44","foobar4321"\n')),(0,s.kt)("p",null,"Based on this we'll generate some tests by using the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/csv-parse"},"csv-parse")," library from NPM:"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.spec.ts\nimport fs from 'fs';\nimport path from 'path';\nimport { test } from '@playwright/test';\nimport { parse } from 'csv-parse/sync';\n\nconst records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {\n  columns: true,\n  skip_empty_lines: true\n});\n\nfor (const record of records) {\n  test(`fooo: ${record.test_case}`, async ({ page }) => {\n    console.log(record.test_case, record.some_value, record.some_other_value);\n  });\n}\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// foo.spec.js\nconst fs = require('fs');\nconst path = require('path');\nconst { test } = require('@playwright/test');\nconst { parse } = require('csv-parse/sync');\n\nconst records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {\n  columns: true,\n  skip_empty_lines: true\n});\n\nfor (const record of records) {\n  test(`fooo: ${record.test_case}`, async ({ page }) => {\n    console.log(record.test_case, record.some_value, record.some_other_value);\n  });\n}\n")))))}f.isMDXComponent=!0}}]);