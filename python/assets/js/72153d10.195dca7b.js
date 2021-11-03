"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1435],{8334:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=a(6396),i=a(8215),s=["components"],u={id:"class-route",title:"Route"},p=void 0,d={unversionedId:"api/class-route",id:"version-1.14/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with page.route(url, handler) or browser_context.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.14/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/python/docs/1.14/api/class-route",tags:[],version:"1.14",frontMatter:{id:"class-route",title:"Route"},sidebar:"version-1.14/api",previous:{title:"Response",permalink:"/python/docs/1.14/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/1.14/api/class-selectors"}},c=[{value:"route.abort(**kwargs)",id:"route-abort",children:[],level:2},{value:"route.continue_(**kwargs)",id:"route-continue",children:[],level:2},{value:"route.fulfill(**kwargs)",id:"route-fulfill",children:[],level:2},{value:"route.request",id:"route-request",children:[],level:2}],h={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Whenever a network route is set up with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page#page-route"},"page.route(url, handler)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler)"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-route#route-abort"},"route.abort(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-route#route-continue"},"route.continue_(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-route#route-fulfill"},"route.fulfill(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-route#route-request"},"route.request"))),(0,l.kt)("h2",{id:"route-abort"},"route.abort(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error_code"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional error code. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,l.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Aborts the route's request."),(0,l.kt)("h2",{id:"route-continue"},"route.continue_(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,l.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"method"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set changes the request method (e.g. GET or POST)",(0,l.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"post_data"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," If set changes the post data of request",(0,l.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,l.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Continues route's request with optional overrides."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    route.continue_(headers=headers)\n}\npage.route("**/*", handle)\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    await route.continue_(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),(0,l.kt)("h2",{id:"route-fulfill"},"route.fulfill(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," Response body.",(0,l.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content_type"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set, equals to setting ",(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,l.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," Response headers. Header values will be converted to a string.",(0,l.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,l.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Response status code, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"200"),".",(0,l.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Fulfills route's request with given response."),(0,l.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n')))),(0,l.kt)("p",null,"An example of serving static file:"),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n')))),(0,l.kt)("h2",{id:"route-request"},"route.request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-request",title:"Request"},"Request"),">",(0,l.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"A request to be routed."))}k.isMDXComponent=!0}}]);