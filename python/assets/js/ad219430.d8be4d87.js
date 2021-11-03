"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1938],{9657:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return g},default:function(){return w}});var n=t(7462),p=t(3366),l=(t(7294),t(3905)),o=t(6396),r=t(8215),i=["components"],s={id:"multi-pages",title:"Multi-page scenarios"},c=void 0,u={unversionedId:"multi-pages",id:"version-1.14/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.14/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/python/docs/1.14/multi-pages",tags:[],version:"1.14",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.14/docs",previous:{title:"Inspector",permalink:"/python/docs/1.14/inspector"},next:{title:"Navigations",permalink:"/python/docs/1.14/navigations"}},g=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2}],d={toc:g};function w(e){var a=e.components,t=(0,p.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,l.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = browser.new_context()\n    admin_context = browser.new_context()\n\n    # create pages and interact with contexts independently\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = await browser.new_context()\n    admin_context = await browser.new_context()\n\n    # create pages and interact with contexts independently\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-add-cookies"},"browser_context.add_cookies(cookies)"))),(0,l.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,l.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,l.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n")))),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-new-page"},"browser_context.new_page()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-pages"},"browser_context.pages"))),(0,l.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,l.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),(0,l.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-event-page"},'browser_context.on("page")'))),(0,l.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,l.kt)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,l.kt)("p",null,"This event is emitted in addition to the ",(0,l.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),(0,l.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-event-popup"},'page.on("popup")'))))}w.isMDXComponent=!0}}]);