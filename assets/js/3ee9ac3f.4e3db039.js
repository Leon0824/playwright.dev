"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9122],{63813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),s={id:"events",title:"Events"},l=void 0,p={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/docs/events.mdx",sourceDirName:".",slug:"/events",permalink:"/docs/next/events",tags:[],version:"current",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Emulation",permalink:"/docs/next/emulation"},next:{title:"Extensibility",permalink:"/docs/next/extensibility"}},d=[{value:"Waiting for event",id:"waiting-for-event",children:[],level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[],level:2},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-one-off-listeners"},"Adding one-off listeners"))),(0,r.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,r.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,r.kt)("p",null,"Wait for a request with the specified url:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the request.\nconst [request] = await Promise.all([\n  page.waitForRequest('**/*logo*.png'),\n  // This action triggers the request\n  page.goto('https://wikipedia.org')\n]);\nconsole.log(request.url());\n")),(0,r.kt)("p",null,"Wait for popup window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the popup.\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  // This action triggers the popup\n  page.evaluate('window.open()')\n]);\nawait popup.goto('https://wikipedia.org');\n")),(0,r.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,r.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"page.on('request', request => console.log(`Request sent: ${request.url()}`));\nconst listener = request => console.log(`Request finished: ${request.url()}`);\npage.on('requestfinished', listener);\nawait page.goto('https://wikipedia.org');\n\npage.off('requestfinished', listener);\nawait page.goto('https://www.openstreetmap.org/');\n")),(0,r.kt)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),(0,r.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"page.once('dialog', dialog => dialog.accept(\"2021\"));\nawait page.evaluate(\"prompt('Enter a number:')\");\n")),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker",title:"Worker"},"Worker"))))}c.isMDXComponent=!0}}]);