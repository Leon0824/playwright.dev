"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5662],{83471:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=r(87462),s=r(63366),n=(r(67294),r(3905)),i=r(26396),o=r(58215),l=["components"],p={id:"class-testproject",title:"TestProject"},c=void 0,u={unversionedId:"api/class-testproject",id:"version-1.16/api/class-testproject",isDocsHomePage:!1,title:"TestProject",description:"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers.",source:"@site/versioned_docs/version-1.16/api/class-testproject.mdx",sourceDirName:"api",slug:"/api/class-testproject",permalink:"/docs/api/class-testproject",tags:[],version:"1.16",frontMatter:{id:"class-testproject",title:"TestProject"},sidebar:"version-1.16/api",previous:{title:"TestOptions",permalink:"/docs/api/class-testoptions"},next:{title:"TimeoutError",permalink:"/docs/api/class-timeouterror"}},m=[{value:"testProject.expect",id:"test-project-expect",children:[],level:2},{value:"testProject.metadata",id:"test-project-metadata",children:[],level:2},{value:"testProject.name",id:"test-project-name",children:[],level:2},{value:"testProject.outputDir",id:"test-project-output-dir",children:[],level:2},{value:"testProject.repeatEach",id:"test-project-repeat-each",children:[],level:2},{value:"testProject.retries",id:"test-project-retries",children:[],level:2},{value:"testProject.testDir",id:"test-project-test-dir",children:[],level:2},{value:"testProject.testIgnore",id:"test-project-test-ignore",children:[],level:2},{value:"testProject.testMatch",id:"test-project-test-match",children:[],level:2},{value:"testProject.timeout",id:"test-project-timeout",children:[],level:2},{value:"testProject.use",id:"test-project-use",children:[],level:2}],h={toc:m};function d(e){var t=e.components,r=(0,s.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TestProject")," encapsulates configuration specific to a single project. Projects are configured in ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testconfig#test-config-projects"},"testConfig.projects")," specified in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),". Note that all properties of ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject")," are available in the top-level ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testconfig",title:"TestConfig"},"TestConfig"),", in which case they are shared between all projects."),(0,n.kt)("p",null,"Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\nexport default config;\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-metadata"},"testProject.metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-name"},"testProject.name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-output-dir"},"testProject.outputDir")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-repeat-each"},"testProject.repeatEach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-retries"},"testProject.retries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-test-dir"},"testProject.testDir")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-test-ignore"},"testProject.testIgnore")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-test-match"},"testProject.testMatch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-timeout"},"testProject.timeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-use"},"testProject.use"))),(0,n.kt)("h2",{id:"test-project-expect"},"testProject.expect"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Default timeout for async expect matchers in milliseconds, defaults to 5000ms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"toMatchSnapshot")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"threshold")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Image matching threshold between zero (strict) and one (lax).")))))),(0,n.kt)("p",null,"Configuration for the ",(0,n.kt)("inlineCode",{parentName:"p"},"expect")," assertion library."),(0,n.kt)("h2",{id:"test-project-metadata"},"testProject.metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,n.kt)("p",null,"Any JSON-serializable metadata that will be put directly to the test report."),(0,n.kt)("h2",{id:"test-project-name"},"testProject.name"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"Project name is visible in the report and during test execution."),(0,n.kt)("h2",{id:"test-project-output-dir"},"testProject.outputDir"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"The output directory for files created during test execution. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,n.kt)("p",null,"This directory is cleaned at the start. When running a test, a unique subdirectory inside the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testproject#test-project-output-dir"},"testProject.outputDir")," is created, guaranteeing that test running in parallel do not conflict. This directory can be accessed by ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-output-dir"},"testInfo.outputDir")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)"),"."),(0,n.kt)("p",null,"Here is an example that uses ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)")," to create a temporary file."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\nimport fs from 'fs';\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\nconst fs = require('fs');\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n")))),(0,n.kt)("h2",{id:"test-project-repeat-each"},"testProject.repeatEach"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"The number of times to repeat each test, useful for debugging flaky tests."),(0,n.kt)("h2",{id:"test-project-retries"},"testProject.retries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"The maximum number of retry attempts given to failed tests. Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/test-retries#retries"},"test retries"),"."),(0,n.kt)("h2",{id:"test-project-test-dir"},"testProject.testDir"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"Directory that will be recursively scanned for test files. Defaults to the directory of the configuration file."),(0,n.kt)("p",null,"Each project can use a different directory. Here is an example that runs smoke tests in three browsers and all other tests in stable Chrome browser."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\nexport default config;\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("h2",{id:"test-project-test-ignore"},"testProject.testIgnore"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,n.kt)("p",null,"Files matching one of these patterns are not executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,n.kt)("p",null,"For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"'**/test-assets/**'")," will ignore any files in the ",(0,n.kt)("inlineCode",{parentName:"p"},"test-assets")," directory."),(0,n.kt)("h2",{id:"test-project-test-match"},"testProject.testMatch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,n.kt)("p",null,"Only the files matching one of these patterns are executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,n.kt)("p",null,"By default, Playwright Test looks for files matching ",(0,n.kt)("inlineCode",{parentName:"p"},".*(test|spec)\\.(js|ts|mjs)"),"."),(0,n.kt)("h2",{id:"test-project-timeout"},"testProject.timeout"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"Timeout for each test in milliseconds. Defaults to 30 seconds."),(0,n.kt)("p",null,"This is a base timeout for all tests. In addition, each test can configure its own timeout with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),"."),(0,n.kt)("h2",{id:"test-project-use"},"testProject.use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-fixtures",title:"Fixtures"},"Fixtures"),">")),(0,n.kt)("p",null,"Options for all tests in this project, for example ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testoptions#test-options-browser-name"},"testOptions.browserName"),". Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration")," and see ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\nexport default config;\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))))}d.isMDXComponent=!0}}]);