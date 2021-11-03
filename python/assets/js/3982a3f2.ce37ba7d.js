"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3699],{3109:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return y}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(6396),l=a(8215),p=["components"],u={id:"network",title:"Network"},i=void 0,c={unversionedId:"network",id:"network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/python/docs/next/network",tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/python/docs/next/navigations"},next:{title:"Page Object Models",permalink:"/python/docs/next/pom"}},d=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"HTTP Proxy",id:"http-proxy",children:[],level:2},{value:"Network events",id:"network-events",children:[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handle requests",id:"handle-requests",children:[{value:"Variations",id:"variations-1",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Modify requests",id:"modify-requests",children:[],level:2},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],m={toc:d};function y(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'context = browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = context.new_page()\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'context = await browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = await context.new_page()\nawait page.goto("https://example.com")\n')))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n')))),(0,o.kt)("p",null,"When specifying proxy for each context individually, ",(0,o.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Browser proxy option is required for Chromium on Windows.\nbrowser = chromium.launch(proxy={"server": "per-context"})\ncontext = browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Browser proxy option is required for Chromium on Windows.\nbrowser = await chromium.launch(proxy={"server": "per-context"})\ncontext = await browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n')))),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    page.goto("https://example.com")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    await page.goto("https://example.com")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a glob url pattern\nwith page.expect_response("**/api/fetch_data") as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a glob url pattern\nasync with page.expect_response("**/api/fetch_data") as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a regular expression\nwith page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n\n# Use a predicate taking a response object\nwith page.expect_response(lambda response: token in response.url) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a regular expression\nasync with page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n\n# Use a predicate taking a response object\nasync with page.expect_response(lambda response: token in response.url) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-request"},'page.on("request")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-response"},'page.on("response")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-wait-for-request"},"page.expect_request(url_or_predicate, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-wait-for-response"},"page.expect_response(url_or_predicate, **kwargs)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\nawait page.goto("https://example.com")\n')))),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\ncontext.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\nawait context.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\nawait page.goto("https://example.com")\n')))),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-unroute"},"browser_context.unroute(url, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-route"},"page.route(url, handler, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-unroute"},"page.unroute(url, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Delete header\ndef handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\npage.route("**/*", handle_route)\n\n# Continue requests as POST.\npage.route("**/*", lambda route: route.continue_(method="POST"))\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Delete header\nasync def handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\nawait page.route("**/*", handle_route)\n\n# Continue requests as POST.\nawait page.route("**/*", lambda route: route.continue_(method="POST"))\n')))),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\npage.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\nawait page.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n')))),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-route"},"page.route(url, handler, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-route#route-abort"},"route.abort(**kwargs)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-web-socket"},'page.on("websocket")')," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def on_web_socket(ws):\n    print(f"WebSocket opened: {ws.url}")\n    ws.on("framesent", lambda payload: print(payload))\n    ws.on("framereceived", lambda payload: print(payload))\n    ws.on("close", lambda payload: print("WebSocket closed"))\n\npage.on("websocket", on_web_socket)\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-web-socket"},'page.on("websocket")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-frame-sent"},'web_socket.on("framesent")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-frame-received"},'web_socket.on("framereceived")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-close"},'web_socket.on("close")'))),(0,o.kt)("br",null))}y.isMDXComponent=!0}}]);