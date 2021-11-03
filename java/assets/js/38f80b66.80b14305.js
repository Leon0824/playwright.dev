"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5458],{6536:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(6396),a(8215),["components"]),o={id:"multi-pages",title:"Multi-page scenarios"},p=void 0,s={unversionedId:"multi-pages",id:"version-1.16/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.16/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/java/docs/multi-pages",tags:[],version:"1.16",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.16/docs",previous:{title:"Inspector",permalink:"/java/docs/inspector"},next:{title:"Multithreading",permalink:"/java/docs/multithreading"}},c=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,l.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/java/docs/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Create a Chromium browser instance\n      Browser browser = chromium.launch();\n      // Create two isolated browser contexts\n      BrowserContext userContext = browser.newContext();\n      BrowserContext adminContext = browser.newContext();\n      // Create pages and interact with contexts independently\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.addCookies(cookies)"))),(0,l.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,l.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,l.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Create two pages\nPage pageOne = context.newPage();\nPage pageTwo = context.newPage();\n\n// Get pages of a browser context\nList<Page> allPages = context.pages();\n")),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-new-page"},"BrowserContext.newPage()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-pages"},"BrowserContext.pages()"))),(0,l.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,l.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Get page after a specific action (e.g. clicking a link)\nPage newPage = context.waitForPage(() -> {\n  page.click(\"a[target='_blank']\"); // Opens a new tab\n});\nnewPage.waitForLoadState();\nSystem.out.println(newPage.title());\n")),(0,l.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Get all new pages (including popups) in the context\ncontext.onPage(page -> {\n  page.waitForLoadState();\n  System.out.println(page.title());\n});\n")),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-event-page"},"BrowserContext.onPage(handler)"))),(0,l.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,l.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,l.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,l.kt)("p",null,"This event is emitted in addition to the ",(0,l.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Get popup after a specific action (e.g., click)\nPage popup = page.waitForPopup(() -> {\n  page.click("#open");\n});\npopup.waitForLoadState();\nSystem.out.println(popup.title());\n')),(0,l.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Get all popups when they open\npage.onPopup(popup -> {\n  popup.waitForLoadState();\n  System.out.println(popup.title());\n});\n")),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-event-popup"},"Page.onPopup(handler)"))))}g.isMDXComponent=!0}}]);