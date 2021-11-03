"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5205],{12202:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(26396),a(58215),["components"]),l={id:"core-concepts",title:"Core concepts"},s=void 0,c={unversionedId:"core-concepts",id:"version-1.14/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.14/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/1.14/core-concepts",tags:[],version:"1.14",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"version-1.14/docs",previous:{title:"Chrome Extensions",permalink:"/docs/1.14/chrome-extensions"},next:{title:"Dialogs",permalink:"/docs/1.14/dialogs"}},p=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Selectors",id:"selectors",children:[],level:2},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[],level:2},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),(0,i.kt)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser-contexts"},"Browser contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pages-and-frames"},"Pages and frames")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#auto-waiting"},"Auto-waiting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#evaluation-argument"},"Evaluation Argument"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"browser"},"Browser"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-browser",title:"Browser"},"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\nconst browser = await chromium.launch({ headless: false });\nawait browser.close();\n")),(0,i.kt)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browser",title:"Browser"},"Browser"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"browser-contexts"},"Browser contexts"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\n")),(0,i.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\n")),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"pages-and-frames"},"Pages and frames"),(0,i.kt)("p",null,"A Browser context can have multiple pages. A ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.fill('#search', 'query');\n\n// Navigate implicitly by clicking a link.\nawait page.click('#submit');\n// Expect a new url.\nconsole.log(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\nwindow.location.href = 'https://example.com';\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Read more on ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/navigations"},"page navigation and loading"),".")),(0,i.kt)("p",null,"A page can have one or more ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,i.kt)("p",null,"A page can have additional frames attached with the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Get frame using any other selector\nconst frameElementHandle = await page.$('.frame-class');\nconst frame = await frameElementHandle.contentFrame();\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page",title:"Page"},"Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-frame",title:"Frame"},"Frame")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-frame"},"page.frame(frameSelector)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"selectors"},"Selectors"),(0,i.kt)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),(0,i.kt)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),(0,i.kt)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),(0,i.kt)("p",null,"Learn more about selectors and selector engines ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/selectors"},"here"),"."),(0,i.kt)("p",null,"Some examples below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Using data-test-id= selector engine\nawait page.click('data-test-id=foo');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// CSS and XPath selector engines are automatically detected\nawait page.click('div');\nawait page.click('//html/body/div');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Find node by text substring\nawait page.click('text=Hello w');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Explicit CSS and XPath notation\nawait page.click('css=div');\nawait page.click('xpath=//html/body/div');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div');\n")),(0,i.kt)("p",null,"Selectors using the same or different engines can be combined using the ",(0,i.kt)("inlineCode",{parentName:"p"},">>")," separator. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Capture textContent of a section that contains an element with text 'Selectors'.\nconst sectionText = await page.$eval('*css=section >> text=Selectors', e => e.textContent);\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"auto-waiting"},"Auto-waiting"),(0,i.kt)("p",null,"Actions like ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-click"},"page.click(selector[, options])")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-fill"},"page.fill(selector, value[, options])")," auto-wait for the element to be visible and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/actionability"},"actionable"),". For example, click will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),(0,i.kt)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",(0,i.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,i.kt)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),(0,i.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,i.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Playwright waits for element to stop animating\n// and accept clicks.\nawait page.click('#search');\n")),(0,i.kt)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Wait for #search to appear in the DOM.\nawait page.waitForSelector('#search', { state: 'attached' });\n// Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.waitForSelector('#promo');\n")),(0,i.kt)("p",null,"... or to become hidden or detached"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Wait for #details to become hidden, for example with `display:none`.\nawait page.waitForSelector('#details', { state: 'hidden' });\n// Wait for #promo to be removed from the DOM.\nawait page.waitForSelector('#promo', { state: 'detached' });\n")),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-click"},"page.click(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-fill"},"page.fill(selector, value[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),(0,i.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const href = await page.evaluate(() => document.location.href);\n")),(0,i.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),(0,i.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,i.kt)("p",null,"Playwright evaluation methods like ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," take a single optional argument. This argument can be a mix of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// A primitive value.\nawait page.evaluate(num => num, 42);\n\n// An array.\nawait page.evaluate(array => array.length, [1, 2, 3]);\n\n// An object.\nawait page.evaluate(object => object.foo, { foo: 'bar' });\n\n// A single handle.\nconst button = await page.$('button');\nawait page.evaluate(button => button.textContent, button);\n\n// Alternative notation using elementHandle.evaluate.\nawait button.evaluate((button, from) => button.textContent.substring(from), 5);\n\n// Object with multiple handles.\nconst button1 = await page.$('.button1');\nconst button2 = await page.$('.button2');\nawait page.evaluate(\n    o => o.button1.textContent + o.button2.textContent,\n    { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.evaluate(\n    ({ button1, button2 }) => button1.textContent + button2.textContent,\n    { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.evaluate(\n    ([b1, b2]) => b1.textContent + b2.textContent,\n    [button1, button2]);\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo),\n    { button1, list: [button2], foo: null });\n")),(0,i.kt)("p",null,"Right:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n")),(0,i.kt)("p",null,"Wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\nconst result = await page.evaluate(() => {\n  // There is no |data| in the web page.\n  window.myApp.use(data);\n});\n")),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-frame#frame-evaluate"},"frame.evaluate(pageFunction[, arg])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.14/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);