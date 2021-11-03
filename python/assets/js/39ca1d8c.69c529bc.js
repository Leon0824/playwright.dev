"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7874],{1362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return v}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(6396),l=n(8215),p=["components"],o={id:"events",title:"Events"},u=void 0,d={unversionedId:"events",id:"version-1.16/events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.16/events.mdx",sourceDirName:".",slug:"/events",permalink:"/python/docs/events",tags:[],version:"1.16",frontMatter:{id:"events",title:"Events"},sidebar:"version-1.16/docs",previous:{title:"Emulation",permalink:"/python/docs/emulation"},next:{title:"Extensibility",permalink:"/python/docs/extensibility"}},c=[{value:"Waiting for event",id:"waiting-for-event",children:[],level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[],level:2},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],g={toc:c};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-one-off-listeners"},"Adding one-off listeners"))),(0,i.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,i.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,i.kt)("p",null,"Wait for a request with the specified url:"),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_request("**/*logo*.png") as first:\n  page.goto("https://wikipedia.org")\nprint(first.value.url)\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_request("**/*logo*.png") as first:\n  await page.goto("https://wikipedia.org")\nfirst_request = await first.value\nprint(first_request.url)\n')))),(0,i.kt)("p",null,"Wait for popup window:"),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_popup() as popup:\n  page.evaluate("window.open()")\npopup.value.goto("https://wikipedia.org")\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_popup() as popup:\n  await page.evaluate("window.open()")\nchild_page = await popup.value\nawait child_page.goto("https://wikipedia.org")\n')))),(0,i.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,i.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def print_request_sent(request):\n  print("Request sent: " + request.url)\n\ndef print_request_finished(request):\n  print("Request finished: " + request.url)\n\npage.on("request", print_request_sent)\npage.on("requestfinished", print_request_finished)\npage.goto("https://wikipedia.org")\n\npage.remove_listener("requestfinished", print_request_finished)\npage.goto("https://www.openstreetmap.org/")\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def print_request_sent(request):\n  print("Request sent: " + request.url)\n\ndef print_request_finished(request):\n  print("Request finished: " + request.url)\n\npage.on("request", print_request_sent)\npage.on("requestfinished", print_request_finished)\nawait page.goto("https://wikipedia.org")\n\npage.remove_listener("requestfinished", print_request_finished)\nawait page.goto("https://www.openstreetmap.org/")\n')))),(0,i.kt)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),(0,i.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'page.once("dialog", lambda dialog: dialog.accept("2021"))\npage.evaluate("prompt(\'Enter a number:\')")\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'page.once("dialog", lambda dialog: dialog.accept("2021"))\nawait page.evaluate("prompt(\'Enter a number:\')")\n')))),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser",title:"Browser"},"Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker",title:"Worker"},"Worker"))))}v.isMDXComponent=!0}}]);