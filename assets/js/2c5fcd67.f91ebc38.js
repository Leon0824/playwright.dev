"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5654],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(87462),n=r(67294),s=r(72389),o=r(29366),i=r(86010),l="tabItem_LplD";function p(e){var t,r,s,p=e.lazy,c=e.block,u=e.defaultValue,m=e.values,f=e.groupId,h=e.className,d=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(s=d[0])?void 0:s.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),j=v.tabGroupChoices,y=v.setTabGroupChoices,N=(0,n.useState)(b),w=N[0],S=N[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=j[f];null!=P&&P!==w&&g.some((function(e){return e.value===P}))&&S(P)}var D=function(e){var t=e.currentTarget,r=x.indexOf(t),a=g[r].value;a!==w&&(T(t),S(a),null!=f&&y(f,a))},O=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;r=x[a]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;r=x[n]||x[x.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},g.map((function(e){var t=e.value,r=e.label,s=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:D,onClick:D},s,{className:(0,i.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),p?(0,n.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,s.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},45531:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return f}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=r(9877),i=r(58215),l=["components"],p={id:"class-testproject",title:"TestProject"},c=void 0,u={unversionedId:"api/class-testproject",id:"version-1.18/api/class-testproject",title:"TestProject",description:"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers.",source:"@site/versioned_docs/version-1.18/api/class-testproject.mdx",sourceDirName:"api",slug:"/api/class-testproject",permalink:"/docs/1.18/api/class-testproject",tags:[],version:"1.18",frontMatter:{id:"class-testproject",title:"TestProject"},sidebar:"version-1.18/api",previous:{title:"TestOptions",permalink:"/docs/1.18/api/class-testoptions"},next:{title:"TimeoutError",permalink:"/docs/1.18/api/class-timeouterror"}},m={},f=[{value:"testProject.expect",id:"test-project-expect",level:2},{value:"testProject.metadata",id:"test-project-metadata",level:2},{value:"testProject.name",id:"test-project-name",level:2},{value:"testProject.outputDir",id:"test-project-output-dir",level:2},{value:"testProject.repeatEach",id:"test-project-repeat-each",level:2},{value:"testProject.retries",id:"test-project-retries",level:2},{value:"testProject.snapshotDir",id:"test-project-snapshot-dir",level:2},{value:"testProject.testDir",id:"test-project-test-dir",level:2},{value:"testProject.testIgnore",id:"test-project-test-ignore",level:2},{value:"testProject.testMatch",id:"test-project-test-match",level:2},{value:"testProject.timeout",id:"test-project-timeout",level:2},{value:"testProject.use",id:"test-project-use",level:2}],h={toc:f};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TestProject")," encapsulates configuration specific to a single project. Projects are configured in ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-projects"},"testConfig.projects")," specified in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/test-configuration"},"configuration file"),". Note that all properties of ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testproject",title:"TestProject"},"TestProject")," are available in the top-level ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig",title:"TestConfig"},"TestConfig"),", in which case they are shared between all projects."),(0,s.kt)("p",null,"Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-expect"},"testProject.expect")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-metadata"},"testProject.metadata")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-name"},"testProject.name")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-output-dir"},"testProject.outputDir")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-repeat-each"},"testProject.repeatEach")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-retries"},"testProject.retries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-snapshot-dir"},"testProject.snapshotDir")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-test-dir"},"testProject.testDir")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-test-ignore"},"testProject.testIgnore")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-test-match"},"testProject.testMatch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-timeout"},"testProject.timeout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-testproject#test-project-use"},"testProject.use"))),(0,s.kt)("h2",{id:"test-project-expect"},"testProject.expect"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Default timeout for async expect matchers in milliseconds, defaults to 5000ms."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"toMatchSnapshot")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"threshold")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Image matching threshold between zero (strict) and one (lax).")))))),(0,s.kt)("p",null,"Configuration for the ",(0,s.kt)("inlineCode",{parentName:"p"},"expect")," assertion library."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-expect"},"testConfig.expect")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-metadata"},"testProject.metadata"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,s.kt)("p",null,"Any JSON-serializable metadata that will be put directly to the test report."),(0,s.kt)("h2",{id:"test-project-name"},"testProject.name"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Project name is visible in the report and during test execution."),(0,s.kt)("h2",{id:"test-project-output-dir"},"testProject.outputDir"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"The output directory for files created during test execution. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,s.kt)("p",null,"This directory is cleaned at the start. When running a test, a unique subdirectory inside the ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testproject#test-project-output-dir"},"testProject.outputDir")," is created, guaranteeing that test running in parallel do not conflict. This directory can be accessed by ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-output-dir"},"testInfo.outputDir")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)"),"."),(0,s.kt)("p",null,"Here is an example that uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)")," to create a temporary file."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\nimport fs from 'fs';\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\nconst fs = require('fs');\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n")))),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-output-dir"},"testConfig.outputDir")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-repeat-each"},"testProject.repeatEach"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"The number of times to repeat each test, useful for debugging flaky tests."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-repeat-each"},"testConfig.repeatEach")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-retries"},"testProject.retries"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"The maximum number of retry attempts given to failed tests. Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/test-retries#retries"},"test retries"),"."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-retries"},"testConfig.retries")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-snapshot-dir"},"testProject.snapshotDir"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"The base directory, relative to the config file, for snapshot files created with ",(0,s.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot"),". Defaults to ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testproject#test-project-test-dir"},"testProject.testDir"),"."),(0,s.kt)("p",null,"The directory for each test can be accessed by ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-snapshot-dir"},"testInfo.snapshotDir")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-snapshot-path"},"testInfo.snapshotPath(pathSegments)"),"."),(0,s.kt)("p",null,"This path will serve as the base directory for each test file snapshot directory. Setting ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshotDir")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"'snapshots'"),", the ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testinfo#test-info-snapshot-dir"},"testInfo.snapshotDir")," would resolve to ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots/a.spec.js-snapshots"),"."),(0,s.kt)("h2",{id:"test-project-test-dir"},"testProject.testDir"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Directory that will be recursively scanned for test files. Defaults to the directory of the configuration file."),(0,s.kt)("p",null,"Each project can use a different directory. Here is an example that runs smoke tests in three browsers and all other tests in stable Chrome browser."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-test-dir"},"testConfig.testDir")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-test-ignore"},"testProject.testIgnore"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,s.kt)("p",null,"Files matching one of these patterns are not executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,s.kt)("p",null,"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"'**/test-assets/**'")," will ignore any files in the ",(0,s.kt)("inlineCode",{parentName:"p"},"test-assets")," directory."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-test-ignore"},"testConfig.testIgnore")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-test-match"},"testProject.testMatch"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,s.kt)("p",null,"Only the files matching one of these patterns are executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,s.kt)("p",null,"By default, Playwright Test looks for files matching ",(0,s.kt)("inlineCode",{parentName:"p"},".*(test|spec)\\.(js|ts|mjs)"),"."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-test-match"},"testConfig.testMatch")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-timeout"},"testProject.timeout"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Timeout for each test in milliseconds. Defaults to 30 seconds."),(0,s.kt)("p",null,"This is a base timeout for all tests. In addition, each test can configure its own timeout with ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),"."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-timeout"},"testConfig.timeout")," to change this option for all projects."),(0,s.kt)("h2",{id:"test-project-use"},"testProject.use"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-fixtures",title:"Fixtures"},"Fixtures"),">")),(0,s.kt)("p",null,"Options for all tests in this project, for example ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testoptions#test-options-browser-name"},"testOptions.browserName"),". Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/test-configuration"},"configuration")," and see ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-use"},"testConfig.use")," to change this option for all projects."))}d.isMDXComponent=!0}}]);