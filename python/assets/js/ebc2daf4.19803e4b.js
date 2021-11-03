"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1349],{4101:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return y}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(6396),s=t(8215),i=["components"],p={id:"core-concepts",title:"Core concepts"},c=void 0,u={unversionedId:"core-concepts",id:"version-1.15/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.15/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/python/docs/1.15/core-concepts",tags:[],version:"1.15",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"version-1.15/docs",previous:{title:"Chrome Extensions",permalink:"/python/docs/1.15/chrome-extensions"},next:{title:"Dialogs",permalink:"/python/docs/1.15/dialogs"}},m=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Selectors",id:"selectors",children:[],level:2},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[],level:2},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],d={toc:m};function y(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),(0,r.kt)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#browser-contexts"},"Browser contexts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pages-and-frames"},"Pages and frames")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectors"},"Selectors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#auto-waiting"},"Auto-waiting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#evaluation-argument"},"Evaluation Argument"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"browser"},"Browser"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-browser",title:"Browser"},"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False)\n    browser.close()\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch(headless=False)\n        await browser.close()\n\nasyncio.run(main())\n")))),(0,r.kt)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser",title:"Browser"},"Browser"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"browser-contexts"},"Browser contexts"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"browser = playwright.chromium.launch()\ncontext = browser.new_context()\npage = context.new_page()\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"browser = await playwright.chromium.launch()\ncontext = await browser.new_context()\npage = await context.new_page()\n")))),(0,r.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    iphone_11 = p.devices['iPhone 11 Pro']\n    browser = p.webkit.launch(headless=False)\n    context = browser.new_context(\n        **iphone_11,\n        locale='de-DE',\n        geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n        permissions=['geolocation']\n    )\n    page = context.new_page()\n    browser.close()\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        iphone_11 = p.devices['iPhone 11 Pro']\n        browser = await p.chromium.launch()\n        context = await browser.new_context(\n            **iphone_11,\n            locale='de-DE',\n            geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n            permissions=['geolocation'],\n            color_scheme='dark',\n        )\n        page = await browser.new_page()\n        await browser.close()\n\nasyncio.run(main())\n")))),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browsercontext#browser-context-new-page"},"browser_context.new_page()"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"pages-and-frames"},"Pages and frames"),(0,r.kt)("p",null,"A Browser context can have multiple pages. A ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.fill('#search', 'query')\n\n# Navigate implicitly by clicking a link.\npage.click('#submit')\n# Expect a new url.\nprint(page.url)\n\n# Page can navigate from the script - this will be picked up by Playwright.\n# window.location.href = 'https://example.com'\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.fill('#search', 'query')\n\n# Navigate implicitly by clicking a link.\nawait page.click('#submit')\n# Expect a new url.\nprint(page.url)\n\n# Page can navigate from the script - this will be picked up by Playwright.\n# window.location.href = 'https://example.com'\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more on ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/navigations"},"page navigation and loading"),".")),(0,r.kt)("p",null,"A page can have one or more ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,r.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,r.kt)("p",null,"A page can have additional frames attached with the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Get frame using any other selector\nframe_element_handle = page.query_selector('.frame-class')\nframe = frame_element_handle.content_frame()\n\n# Interact with the frame\nframe.fill('#username-input', 'John')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Get frame using any other selector\nframe_element_handle = await page.query_selector('.frame-class')\nframe = await frame_element_handle.content_frame()\n\n# Interact with the frame\nawait frame.fill('#username-input', 'John')\n")))),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-frame",title:"Frame"},"Frame")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-frame"},"page.frame(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"selectors"},"Selectors"),(0,r.kt)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),(0,r.kt)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),(0,r.kt)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),(0,r.kt)("p",null,"Learn more about selectors and selector engines ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/selectors"},"here"),"."),(0,r.kt)("p",null,"Some examples below:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Using data-test-id= selector engine\npage.click('data-test-id=foo')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Using data-test-id= selector engine\nawait page.click('data-test-id=foo')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# CSS and XPath selector engines are automatically detected\npage.click('div')\npage.click('//html/body/div')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# CSS and XPath selector engines are automatically detected\nawait page.click('div')\nawait page.click('//html/body/div')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Find node by text substring\npage.click('text=Hello w')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Find node by text substring\nawait page.click('text=Hello w')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Explicit CSS and XPath notation\npage.click('css=div')\npage.click('xpath=//html/body/div')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Explicit CSS and XPath notation\nawait page.click('css=div')\nawait page.click('xpath=//html/body/div')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Only search light DOM, outside WebComponent shadow DOM:\npage.click('css:light=div')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div')\n")))),(0,r.kt)("p",null,"Selectors using the same or different engines can be combined using the ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," separator. For example,"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Click an element with text 'Sign Up' inside of a #free-month-promo.\npage.click('#free-month-promo >> text=Sign Up')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Capture textContent of a section that contains an element with text 'Selectors'.\nsection_text = page.eval_on_selector('*css=section >> text=Selectors', 'e => e.textContent')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Capture textContent of a section that contains an element with text 'Selectors'.\nsection_text = await page.eval_on_selector('*css=section >> text=Selectors', 'e => e.textContent')\n")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"auto-waiting"},"Auto-waiting"),(0,r.kt)("p",null,"Actions like ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-click"},"page.click(selector, **kwargs)")," and ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)")," auto-wait for the element to be visible and ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/actionability"},"actionable"),". For example, click will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),(0,r.kt)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",(0,r.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,r.kt)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),(0,r.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,r.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),(0,r.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Playwright waits for #search element to be in the DOM\npage.fill('#search', 'query')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query')\n")))),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Playwright waits for element to stop animating\n# and accept clicks.\npage.click('#search')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Playwright waits for element to stop animating\n# and accept clicks.\nawait page.click('#search')\n")))),(0,r.kt)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Wait for #search to appear in the DOM.\npage.wait_for_selector('#search', state='attached')\n# Wait for #promo to become visible, for example with `visibility:visible`.\npage.wait_for_selector('#promo')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Wait for #search to appear in the DOM.\nawait page.wait_for_selector('#search', state='attached')\n# Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.wait_for_selector('#promo')\n")))),(0,r.kt)("p",null,"... or to become hidden or detached"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Wait for #details to become hidden, for example with `display:none`.\npage.wait_for_selector('#details', state='hidden')\n# Wait for #promo to be removed from the DOM.\npage.wait_for_selector('#promo', state='detached')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Wait for #details to become hidden, for example with `display:none`.\nawait page.wait_for_selector('#details', state='hidden')\n# Wait for #promo to be removed from the DOM.\nawait page.wait_for_selector('#promo', state='detached')\n")))),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-click"},"page.click(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),(0,r.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"href = page.evaluate('() => document.location.href')\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"href = await page.evaluate('() => document.location.href')\n")))),(0,r.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'status = page.evaluate("""async () => {\n  response = fetch(location.href)\n  return response.status\n}""")\n'))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'status = await page.evaluate("""async () => {\n  response = await fetch(location.href)\n  return response.status\n}""")\n')))),(0,r.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,r.kt)("p",null,"Playwright evaluation methods like ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," take a single optional argument. This argument can be a mix of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# A primitive value.\npage.evaluate('num => num', 42)\n\n# An array.\npage.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\npage.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = page.query_selector('button')\npage.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nbutton.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = page.query_selector('.button1')\nbutton2 = page.query_selector('.button2')\npage.evaluate(\"\"\"o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\npage.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\npage.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\npage.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# A primitive value.\nawait page.evaluate('num => num', 42)\n\n# An array.\nawait page.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\nawait page.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = await page.query_selctor('button')\nawait page.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nawait button.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = await page.query_selector('.button1')\nbutton2 = await page.query_selector('.button2')\nawait page.evaluate(\"\"\"\n    o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n")))),(0,r.kt)("p",null,"Right:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = await page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n")))),(0,r.kt)("p",null,"Wrong:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\nresult = page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n"))),(0,r.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\nresult = await page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n")))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-frame#frame-evaluate"},"frame.evaluate(expression, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))),(0,r.kt)("br",null))}y.isMDXComponent=!0}}]);