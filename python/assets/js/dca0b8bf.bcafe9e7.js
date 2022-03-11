"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9956],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),l=r(2389),o=r(9366),i=r(6010),s="tabItem_LplD";function u(e){var t,r,l,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),N=v.tabGroupChoices,g=v.setTabGroupChoices,w=(0,a.useState)(b),x=w[0],T=w[1],C=[],q=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=N[h];null!=O&&O!==x&&k.some((function(e){return e.value===O}))&&T(O)}var I=function(e){var t=e.currentTarget,r=C.indexOf(t),n=k[r].value;n!==x&&(q(t),T(n),null!=h&&g(h,n))},E=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;r=C[n]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;r=C[a]||C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},m)},k.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,l.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},4617:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(9877),i=r(8215),s=["components"],u={id:"class-route",title:"Route"},p=void 0,c={unversionedId:"api/class-route",id:"version-1.18/api/class-route",title:"Route",description:"Whenever a network route is set up with page.route(url, handler, kwargs) or browser_context.route(url, handler, kwargs), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.18/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/python/docs/1.18/api/class-route",tags:[],version:"1.18",frontMatter:{id:"class-route",title:"Route"},sidebar:"version-1.18/api",previous:{title:"Response",permalink:"/python/docs/1.18/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/1.18/api/class-selectors"}},d={},h=[{value:"route.abort(**kwargs)",id:"route-abort",level:2},{value:"route.continue_(**kwargs)",id:"route-continue",level:2},{value:"route.fulfill(**kwargs)",id:"route-fulfill",level:2},{value:"route.request",id:"route-request",level:2}],m={toc:h};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Whenever a network route is set up with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-route"},"page.route(url, handler, **kwargs)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler, **kwargs)"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-route#route-abort"},"route.abort(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-route#route-continue"},"route.continue_(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-route#route-fulfill"},"route.fulfill(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-route#route-request"},"route.request"))),(0,l.kt)("h2",{id:"route-abort"},"route.abort(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error_code"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional error code. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,l.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Aborts the route's request."),(0,l.kt)("h2",{id:"route-continue"},"route.continue_(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,l.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"method"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set changes the request method (e.g. GET or POST)",(0,l.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"post_data"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," If set changes the post data of request",(0,l.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,l.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Continues route's request with optional overrides."),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    route.continue_(headers=headers)\n}\npage.route("**/*", handle)\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    await route.continue_(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),(0,l.kt)("h2",{id:"route-fulfill"},"route.fulfill(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," Response body.",(0,l.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content_type"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If set, equals to setting ",(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,l.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," Response headers. Header values will be converted to a string.",(0,l.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,l.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Response status code, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"200"),".",(0,l.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Fulfills route's request with given response."),(0,l.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n')))),(0,l.kt)("p",null,"An example of serving static file:"),(0,l.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n')))),(0,l.kt)("h2",{id:"route-request"},"route.request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-request",title:"Request"},"Request"),">",(0,l.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"A request to be routed."))}f.isMDXComponent=!0}}]);