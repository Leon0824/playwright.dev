"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3740],{26896:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var n=s(87462),a=s(63366),r=(s(67294),s(3905)),o=s(26396),l=s(58215),i=["components"],u={id:"test-fixtures",title:"Advanced: fixtures"},p=void 0,d={unversionedId:"test-fixtures",id:"version-1.16/test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/versioned_docs/version-1.16/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/docs/test-fixtures",tags:[],version:"1.16",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"},sidebar:"version-1.16/docs",previous:{title:"Advanced: configuration",permalink:"/docs/test-advanced"},next:{title:"Advanced: TypeScript",permalink:"/docs/test-typescript"}},c=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[],level:3},{value:"With fixtures",id:"with-fixtures",children:[],level:3}],level:2},{value:"Test fixtures",id:"test-fixtures",children:[],level:2},{value:"Worker fixtures",id:"worker-fixtures",children:[],level:2},{value:"Overriding fixtures",id:"overriding-fixtures",children:[],level:2}],h={toc:c};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction-to-fixtures"},"Introduction to fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-fixtures"},"Test fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#worker-fixtures"},"Worker fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overriding-fixtures"},"Overriding fixtures"))),(0,r.kt)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),(0,r.kt)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),(0,r.kt)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),(0,r.kt)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),(0,r.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),(0,r.kt)("h3",{id:"without-fixtures"},"Without fixtures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst { test } = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\ntest.describe('todo tests', () => {\n  let todoPage;\n\n  test.beforeEach(async ({ page }) => {\n    todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n  });\n\n  test.afterEach(async () => {\n    await todoPage.removeAll();\n  });\n\n  test('should add an item', async () => {\n    await todoPage.addToDo('my item');\n    // ...\n  });\n\n  test('should remove an item', async () => {\n    await todoPage.remove('item1');\n    // ...\n  });\n});\n")),(0,r.kt)("h3",{id:"with-fixtures"},"With fixtures"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Extend basic test by providing a \"table\" fixture.\nconst test = base.extend<{ todoPage: TodoPage }>({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n")))),(0,r.kt)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",(0,r.kt)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),(0,r.kt)("p",null,"There are two types of fixtures: ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),(0,r.kt)("h2",{id:"test-fixtures"},"Test fixtures"),(0,r.kt)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// hello.spec.ts\nimport test from './hello';\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// hello.spec.js\nconst test = require('./hello');\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n")))),(0,r.kt)("p",null,"It uses fixtures ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),(0,r.kt)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// hello.ts\nimport { test as base } from '@playwright/test';\n\n// Define test fixtures \"hello\" and \"helloWorld\".\ntype TestFixtures = {\n  hello: string;\n  helloWorld: string;\n};\n\n// Extend base test with our fixtures.\nconst test = base.extend<TestFixtures>({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n\n// Now, this \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexport default test;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// hello.js\nconst base = require('@playwright/test');\n\n// Extend base test with fixtures \"hello\" and \"helloWorld\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nmodule.exports = base.test.extend({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n")))),(0,r.kt)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),(0,r.kt)("h2",{id:"worker-fixtures"},"Worker fixtures"),(0,r.kt)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",(0,r.kt)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,r.kt)("p",null,"Here is how the test looks:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// express.spec.ts\nimport test from './express-test';\nimport fetch from 'node-fetch';\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// express.spec.js\nconst test = require('./express-test');\nconst fetch = require('node-fetch');\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n")))),(0,r.kt)("p",null,"And here is how fixtures are declared and defined:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// express-test.ts\nimport { test as base } from '@playwright/test';\nimport express from 'express';\nimport type { Express } from 'express';\n\n// Declare worker fixtures.\ntype ExpressWorkerFixtures = {\n  port: number;\n  express: Express;\n};\n\n// Note that we did not provide an test-scoped fixtures, so we pass {}.\nconst test = base.extend<{}, ExpressWorkerFixtures>({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n\nexport default test;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// express-test.js\nconst base = require('@playwright/test');\nconst express = require('express');\n\n// Define \"port\" and \"express\" worker fixtures.\nmodule.exports = base.test.extend({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n")))),(0,r.kt)("h2",{id:"overriding-fixtures"},"Overriding fixtures"),(0,r.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture by navigating to a specified URL:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n")))),(0,r.kt)("p",null,"Notice that in this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built in fixtures such as ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL"),". This allows us to override the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture in our tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"test.use"),"."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test.use({ baseURL: 'https://playwright.dev' })\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test.use({ baseURL: 'https://playwright.dev' })\n")))),(0,r.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,r.kt)("inlineCode",{parentName:"p"},"storageState")," fixture to provide our own data."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n")))))}f.isMDXComponent=!0}}]);