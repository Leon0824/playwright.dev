"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5158],{79477:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(87462),s=a(63366),l=(a(67294),a(3905)),i=a(26396),o=a(58215),r=["components"],p={id:"test-annotations",title:"Annotations"},u=void 0,c={unversionedId:"test-annotations",id:"test-annotations",isDocsHomePage:!1,title:"Annotations",description:"- Annotations",source:"@site/docs/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/docs/next/test-annotations",tags:[],version:"current",frontMatter:{id:"test-annotations",title:"Annotations"},sidebar:"docs",previous:{title:"Release notes",permalink:"/docs/next/release-notes"},next:{title:"API testing",permalink:"/docs/next/test-api-testing"}},m=[{value:"Annotations",id:"annotations",children:[],level:2},{value:"Focus a test",id:"focus-a-test",children:[],level:2},{value:"Skip a test",id:"skip-a-test",children:[],level:2},{value:"Conditionally skip a test",id:"conditionally-skip-a-test",children:[],level:2},{value:"Group tests",id:"group-tests",children:[],level:2},{value:"Tag tests",id:"tag-tests",children:[],level:2},{value:"Conditionally skip a group of tests",id:"conditionally-skip-a-group-of-tests",children:[],level:2},{value:"Use fixme in <code>beforeEach</code> hook",id:"use-fixme-in-beforeeach-hook",children:[],level:2}],k={toc:m};function d(e){var t=e.components,a=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#annotations"},"Annotations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#focus-a-test"},"Focus a test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#skip-a-test"},"Skip a test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#conditionally-skip-a-test"},"Conditionally skip a test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#group-tests"},"Group tests")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tag-tests"},"Tag tests")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,l.kt)("inlineCode",{parentName:"a"},"beforeEach")," hook"))),(0,l.kt)("h2",{id:"annotations"},"Annotations"),(0,l.kt)("p",null,"Playwright Test supports test annotations to deal with failures, flakiness, skip, focus and tag tests:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,l.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,l.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")),(0,l.kt)("p",null,"Annotations can be used on a single test or a group of tests. Annotations can be conditional, in which case they apply when the condition is truthy. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,l.kt)("h2",{id:"focus-a-test"},"Focus a test"),(0,l.kt)("p",null,"You can focus some tests. When there are focused tests, only these tests run."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n")))),(0,l.kt)("h2",{id:"skip-a-test"},"Skip a test"),(0,l.kt)("p",null,"Mark a test as skipped."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n")))),(0,l.kt)("h2",{id:"conditionally-skip-a-test"},"Conditionally skip a test"),(0,l.kt)("p",null,"You can skip certain test based on the condition."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n")))),(0,l.kt)("h2",{id:"group-tests"},"Group tests"),(0,l.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n")))),(0,l.kt)("h2",{id:"tag-tests"},"Tag tests"),(0,l.kt)("p",null,"Sometimes you want to tag your tests as ",(0,l.kt)("inlineCode",{parentName:"p"},"@fast")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@slow")," and only run the tests that have the certain tag. We recommend that you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--grep")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--grep-invert")," command line flags for that:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n")))),(0,l.kt)("p",null,"You will then be able to run only that test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep @fast\n")),(0,l.kt)("p",null,"Or if you want the opposite, you can skip the tests with a certain tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep-invert @slow\n")),(0,l.kt)("h2",{id:"conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests"),(0,l.kt)("p",null,"For example, you can run a group of tests just in Chromium by passing a callback."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n")))),(0,l.kt)("h2",{id:"use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,l.kt)("inlineCode",{parentName:"h2"},"beforeEach")," hook"),(0,l.kt)("p",null,"To avoid running ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeEach")," hooks, you can put annotations in the hook itself."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\ntest.beforeEach(async ({ page }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n\ntest.beforeEach(async ({ page, isMobile }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n")))))}d.isMDXComponent=!0}}]);