"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1169],{38055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=n(26396),l=n(58215),o=["components"],p={id:"test-advanced",title:"Advanced: configuration"},u=void 0,m={unversionedId:"test-advanced",id:"version-1.14/test-advanced",isDocsHomePage:!1,title:"Advanced: configuration",description:"- Configuration object",source:"@site/versioned_docs/version-1.14/test-advanced.mdx",sourceDirName:".",slug:"/test-advanced",permalink:"/docs/1.14/test-advanced",tags:[],version:"1.14",frontMatter:{id:"test-advanced",title:"Advanced: configuration"},sidebar:"version-1.14/docs",previous:{title:"Visual comparisons",permalink:"/docs/1.14/test-snapshots"},next:{title:"Advanced: fixtures",permalink:"/docs/1.14/test-fixtures"}},c=[{value:"Configuration object",id:"configuration-object",children:[{value:"Test suite options",id:"test-suite-options",children:[],level:3},{value:"Test run options",id:"test-run-options",children:[],level:3}],level:2},{value:"workerInfo object",id:"workerinfo-object",children:[],level:2},{value:"testInfo object",id:"testinfo-object",children:[],level:2},{value:"Launching a development web server during the tests",id:"launching-a-development-web-server-during-the-tests",children:[],level:2},{value:"Global setup and teardown",id:"global-setup-and-teardown",children:[],level:2},{value:"Projects",id:"projects",children:[],level:2},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",children:[],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#workerinfo-object"},"workerInfo object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#testinfo-object"},"testInfo object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#launching-a-development-web-server-during-the-tests"},"Launching a development web server during the tests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"Global setup and teardown")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#projects"},"Projects")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"))),(0,s.kt)("h2",{id:"configuration-object"},"Configuration object"),(0,s.kt)("p",null,"Configuration file exports a single object."),(0,s.kt)("h3",{id:"test-suite-options"},"Test suite options"),(0,s.kt)("p",null,"These options define your test suite:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metadata: any")," - Any JSON-serializable metadata that will be put directly to the test report."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name: string")," - Project name, useful when defining multiple ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"test projects"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Output directory for files created during the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repeatEach: number")," - The number of times to repeat each test, useful for debugging flaky tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retries: number")," - The maximum number of retry attempts given to failed tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testDir: string")," - Directory that will be recursively scanned for test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testIgnore: string | RegExp | (string | RegExp)[]")," - Files matching one of these patterns are not considered test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testMatch: string | RegExp | (string | RegExp)[]")," - Only the files matching one of these patterns are considered test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Timeout for each test in milliseconds."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"use")," - An object defining fixture options.")),(0,s.kt)("h3",{id:"test-run-options"},"Test run options"),(0,s.kt)("p",null,"These options would be typically different between local development and CI operation:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"forbidOnly: boolean")," - Whether to exit with an error if any tests are marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalSetup: string")," - Path to the ",(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global setup")," file. This file will be required and run before all the tests. It must export a single function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalTeardown: string")," - Path to the ",(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global teardown")," file. This file will be required and run after all the tests. It must export a single function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalTimeout: number")," - Total timeout in milliseconds for the whole test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"grep: RegExp | RegExp[]")," - Patterns to filter tests based on their title."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"maxFailures: number")," - The maximum number of test failures for this test run. After reaching this number, testing will stop and exit with an error. Setting to zero (default) disables this behavior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"preserveOutput: 'always' | 'never' | 'failures-only'")," - Whether to preserve test output in the ",(0,s.kt)("inlineCode",{parentName:"li"},"outputDir"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'always'")," - preserve output for all tests;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'never'")," - do not preserve output for any tests;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'failures-only'")," - only preserve output for failed tests."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"projects: Project[]")," - Multiple ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"projects")," configuration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quiet: boolean")," - Whether to suppress stdout and stderr from the tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"reporter: 'list' | 'line' | 'dot' | 'json' | 'junit'")," - The reporter to use. See ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.14/test-reporters"},"reporters")," for details."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"reportSlowTests: { max: number, threshold: number } | null")," - Whether to report slow tests. When ",(0,s.kt)("inlineCode",{parentName:"li"},"null"),", slow tests are not reported. Otherwise, tests that took more than ",(0,s.kt)("inlineCode",{parentName:"li"},"threshold")," milliseconds are reported as slow, but no more than ",(0,s.kt)("inlineCode",{parentName:"li"},"max")," number of them. Passing zero as ",(0,s.kt)("inlineCode",{parentName:"li"},"max")," reports all slow tests that exceed the threshold."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"shard: { total: number, current: number } | null")," - ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.14/test-parallel#shard-tests-between-multiple-machines"},"Shard")," information."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"updateSnapshots: boolean")," - Whether to update expected snapshots with the actual results produced by the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"workers: number")," - The maximum number of concurrent worker processes to use for parallelizing tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"webServer: { command: string, port: number, timeout?: number, reuseExistingServer?: boolean, cwd?: string, env?: object }")," - Launch a process and wait that it's ready before the tests will start. See ",(0,s.kt)("a",{parentName:"li",href:"#launching-a-development-web-server-during-the-tests"},"launch web server")," configuration for examples.")),(0,s.kt)("p",null,"Note that each ",(0,s.kt)("a",{parentName:"p",href:"#projects"},"test project")," can provide its own test suite options, for example two projects can run different tests by providing different ",(0,s.kt)("inlineCode",{parentName:"p"},"testDir"),"s. However, test run options are shared between all projects."),(0,s.kt)("h2",{id:"workerinfo-object"},"workerInfo object"),(0,s.kt)("p",null,"Depending on the configuration and failures, Playwright Test might use different number of worker processes to run all the tests. For example, Playwright Test will always start a new worker process after a failing test."),(0,s.kt)("p",null,"Worker-scoped fixtures and ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks receive ",(0,s.kt)("inlineCode",{parentName:"p"},"workerInfo")," parameter. The following information is accessible from the ",(0,s.kt)("inlineCode",{parentName:"p"},"workerInfo"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"config")," - ",(0,s.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"project")," - Specific ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"project")," configuration for this worker. Different projects are always run in separate processes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"workerIndex: number")," - A unique sequential index assigned to the worker process.")),(0,s.kt)("p",null,"Consider an example where we run a new http server per worker process, and use ",(0,s.kt)("inlineCode",{parentName:"p"},"workerIndex")," to produce a unique port number:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport * as http from 'http';\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexport const test = base.extend<{}, { server: http.Server }>({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst http = require('http');\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexports.test = base.test.extend({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n")))),(0,s.kt)("h2",{id:"testinfo-object"},"testInfo object"),(0,s.kt)("p",null,"Test fixtures and ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks receive ",(0,s.kt)("inlineCode",{parentName:"p"},"testInfo")," parameter. It is also available to the test function as a second parameter."),(0,s.kt)("p",null,"In addition to everything from the ",(0,s.kt)("a",{parentName:"p",href:"#workerinfo"},(0,s.kt)("inlineCode",{parentName:"a"},"workerInfo")),", the following information is accessible before and during the test:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title: string")," - Test title."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"file: string")," - Full path to the test file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"line: number")," - Line number of the test declaration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"column: number")," - Column number of the test declaration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"fn: Function")," - Test body function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repeatEachIndex: number")," - The sequential repeat index."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retry: number")," - The sequential number of the test retry (zero means first run)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expectedStatus: 'passed' | 'failed' | 'timedOut'")," - Whether this test is expected to pass, fail or timeout."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Test timeout."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"annotations")," - ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.14/test-annotations"},"Annotations")," that were added to the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snapshotSuffix: string")," - Suffix used to locate snapshots for the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snapshotPath(snapshotName: string)")," - Function that returns the full path to a particular snapshot for the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Path to the output directory for this test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputPath(...pathSegments: string[])")," - Function that returns the full path to a particular output artifact for the test.")),(0,s.kt)("p",null,"The following information is accessible after the test body has finished, in fixture teardown:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"duration: number")," - test running time in milliseconds."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"status: 'passed' | 'failed' | 'timedOut'")," - the actual test result."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"error")," - any error thrown by the test body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"stdout: (string | Buffer)[]")," - array of stdout chunks collected during the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"stderr: (string | Buffer)[]")," - array of stderr chunks collected during the test run.")),(0,s.kt)("p",null,"Here is an example test that saves some information:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test } from '@playwright/test';\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('@playwright/test');\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n")))),(0,s.kt)("p",null,"Here is an example fixture that automatically saves debug logs when the test fails:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexports.test = base.test.extend({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n")))),(0,s.kt)("h2",{id:"launching-a-development-web-server-during-the-tests"},"Launching a development web server during the tests"),(0,s.kt)("p",null,"To launch a server during the tests, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"webServer")," option in the ",(0,s.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),"."),(0,s.kt)("p",null,"You can specify a port via ",(0,s.kt)("inlineCode",{parentName:"p"},"port")," or additional environment variables, see ",(0,s.kt)("a",{parentName:"p",href:"#configuration-object"},"here"),". The server will wait for it to be available before running the tests. For continuous integration, you may want to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"reuseExistingServer: !process.env.CI")," option which does not use an existing server on the CI."),(0,s.kt)("p",null,"The port gets then passed over to Playwright as a ",(0,s.kt)("inlineCode",{parentName:"p"},"baseURL")," when creating the context ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-browser#browser-new-context"},"browser.newContext([options])"),"."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Now you can use a relative path when navigating the page, or use ",(0,s.kt)("inlineCode",{parentName:"p"},"baseURL")," fixture:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.spec.ts\nimport { test } = from '@playwright/test';\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.spec.js\nconst { test } = require('@playwright/test');\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n")))),(0,s.kt)("h2",{id:"global-setup-and-teardown"},"Global setup and teardown"),(0,s.kt)("p",null,"To set something up once before running all tests, use ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," option in the ",(0,s.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),"."),(0,s.kt)("p",null,"Similarly, use ",(0,s.kt)("inlineCode",{parentName:"p"},"globalTeardown")," to run something once after all the tests. Alternatively, let ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," return a function that will be used as a global teardown. You can pass data such as port number, authentication tokens, etc. from your global setup to your tests using environment."),(0,s.kt)("p",null,"Here is a global setup example that runs an app."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.ts\nimport app from './my-app';\nimport * as http from 'http';\n\nasync function globalSetup() {\n  const server = http.createServer(app);\n  await new Promise(done => server.listen(done));\n\n  // Expose port to the tests.\n  process.env.SERVER_PORT = String(server.address().port);\n\n  // Return the teardown function.\n  return async () => {\n    await new Promise(done => server.close(done));\n  };\n}\nexport default globalSetup;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst app = require('./my-app');\n\nmodule.exports = async () => {\n  const server = require('http').createServer(app);\n  await new Promise(done => server.listen(done));\n\n  // Expose port to the tests.\n  process.env.SERVER_PORT = String(server.address().port);\n\n  // Return the teardown function.\n  return async () => {\n    await new Promise(done => server.close(done));\n  };\n};\n")))),(0,s.kt)("p",null,"Now add ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," option to the configuration file."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n};\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Tests will now run after the global setup is done and will have access to the data created in the global setup:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.spec.ts\nimport { test } = from '@playwright/test';\n\ntest('test', async ({ }) => {\n  console.log(process.env.SERVER_PORT);\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.spec.js\nconst { test } = require('@playwright/test');\n\ntest('test', async ({ }) => {\n  console.log(process.env.SERVER_PORT);\n});\n")))),(0,s.kt)("h2",{id:"projects"},"Projects"),(0,s.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running the same tests in multiple configurations. For example, consider running tests against multiple versions of some REST backend."),(0,s.kt)("p",null,'To make use of this feature, we will declare an "option fixture" for the backend version, and use it in the tests.'),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { startBackend } from './my-backend';\n\nexport type TestOptions = {\n  version: string;\n  backendURL: string;\n};\n\nexport const test = base.extend<TestOptions>({\n  // Default value for the version.\n  version: '1.0',\n\n  // Use version when starting the backend.\n  backendURL: async ({ version }, use) => {\n    const app = await startBackend(version);\n    await use(app.baseUrl());\n    await app.close();\n  },\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst { startBackend } = require('./my-backend');\n\nexports.test = base.test.extend({\n  // Default value for the version.\n  version: '1.0',\n\n  // Use version when starting the backend.\n  backendURL: async ({ version }, use) => {\n    const app = await startBackend(version);\n    await use(app.baseUrl());\n    await app.close();\n  },\n});\n")))),(0,s.kt)("p",null,"We can use our fixtures in the test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test } from './my-test';\n\ntest('test 1', async ({ page, backendURL }) => {\n  await page.goto(`${backendURL}/index.html`);\n  // ...\n});\n\ntest('test 2', async ({ version, page, backendURL }) => {\n  test.fixme(version === '2.0', 'This feature is not implemented in 2.0 yet');\n\n  await page.goto(`${backendURL}/index.html`);\n  // ...\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('./my-test');\n\ntest('test 1', async ({ page, backendURL }) => {\n  await page.goto(`${backendURL}/index.html`);\n  // ...\n});\n\ntest('test 2', async ({ version, page, backendURL }) => {\n  test.fixme(version === '2.0', 'This feature is not implemented in 2.0 yet');\n\n  await page.goto(`${backendURL}/index.html`);\n  // ...\n});\n")))),(0,s.kt)("p",null,"Now, we can run test in multiple configurations by using projects."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { TestOptions } from './my-test';\n\nconst config: PlaywrightTestConfig<TestOptions> = {\n  timeout: 20000,\n  projects: [\n    {\n      name: 'v1',\n      use: { version: '1.0' },\n    },\n    {\n      name: 'v2',\n      use: { version: '2.0' },\n    },\n  ]\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig<{ version: string }>} */\nconst config = {\n  timeout: 20000,\n  projects: [\n    {\n      name: 'v1',\n      use: { version: '1.0' },\n    },\n    {\n      name: 'v2',\n      use: { version: '2.0' },\n    },\n  ]\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Each project can be configured separately, and run different set of tests with different parameters. See ",(0,s.kt)("a",{parentName:"p",href:"#test-suite-options"},"test suite options")," for the list of options available to each project."),(0,s.kt)("p",null,"You can run all projects or just a single one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Run both projects - each test will be run twice\nnpx playwright test\n\n# Run a single project - each test will be run once\nnpx playwright test --project=v2\n")),(0,s.kt)("h2",{id:"add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"),(0,s.kt)("p",null,"Playwright Test uses ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},(0,s.kt)("inlineCode",{parentName:"a"},"expect")," library")," under the hood which has the functionality to extend it with ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect#expectextendmatchers"},"custom matchers"),"."),(0,s.kt)("p",null,"In this example we add a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," function in the configuration file."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { expect, PlaywrightTestConfig } from '@playwright/test';\n\nexpect.extend({\n  toBeWithinRange(received: number, floor: number, ceiling: number) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nconst config: PlaywrightTestConfig = {};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nconst { expect } = require('@playwright/test');\n\nexpect.extend({\n  toBeWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nmodule.exports = {};\n")))),(0,s.kt)("p",null,"Now we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," in the test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n")))),(0,s.kt)("p",null,"For TypeScript, also add the following to ",(0,s.kt)("inlineCode",{parentName:"p"},"global.d.ts"),". You don't need it for JavaScript."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global.d.ts\ndeclare namespace PlaywrightTest {\n  interface Matchers<R> {\n    toBeWithinRange(a: number, b: number): R;\n  }\n}\n")))}h.isMDXComponent=!0}}]);