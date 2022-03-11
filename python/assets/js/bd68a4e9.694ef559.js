"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9249],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(d,o(o({ref:e},c),{},{components:a})):r.createElement(d,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(t,e,a){a.d(e,{Z:function(){return n}});var r=a(7294);function n(t){var e=t.children,a=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},9877:function(t,e,a){a.d(e,{Z:function(){return c}});var r=a(7462),n=a(7294),i=a(2389),o=a(9366),l=a(6010),s="tabItem_LplD";function p(t){var e,a,i,p=t.lazy,c=t.block,u=t.defaultValue,h=t.values,m=t.groupId,d=t.className,y=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:y.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.lx)(k,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(e=null!=u?u:null==(a=y.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(i=y[0])?void 0:i.props.value;if(null!==b&&!k.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,x=g.setTabGroupChoices,v=(0,n.useState)(b),w=v[0],q=v[1],C=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=N[m];null!=D&&D!==w&&k.some((function(t){return t.value===D}))&&q(D)}var T=function(t){var e=t.currentTarget,a=C.indexOf(e),r=k[a].value;r!==w&&(P(e),q(r),null!=m&&x(m,r))},O=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r=C.indexOf(t.currentTarget)+1;a=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(t.currentTarget)-1;a=C[n]||C[C.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},d)},k.map((function(t){var e=t.value,a=t.label,i=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return C.push(t)},onKeyDown:O,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===e})}),null!=a?a:e)}))),p?(0,n.cloneElement)(y.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function c(t){var e=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(e)},t))}},5312:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=(a(9877),a(8215),["components"]),l={id:"class-apirequest",title:"APIRequest"},s=void 0,p={unversionedId:"api/class-apirequest",id:"version-1.18/api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see here.",source:"@site/versioned_docs/version-1.18/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/python/docs/1.18/api/class-apirequest",tags:[],version:"1.18",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"version-1.18/api",previous:{title:"Playwright",permalink:"/python/docs/1.18/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/python/docs/1.18/api/class-apirequestcontext"}},c={},u=[{value:"api_request.new_context(**kwargs)",id:"api-request-new-context",level:2}],h={toc:u};function m(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see ",(0,i.kt)("a",{parentName:"p",href:"./class-apirequestcontext"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-apirequest#api-request-new-context"},"api_request.new_context(**kwargs)"))),(0,i.kt)("h2",{id:"api-request-new-context"},"api_request.new_context(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_url"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Methods like ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-apirequestcontext#api-request-context-get"},"api_request_context.get(url, **kwargs)")," take the base URL into consideration by using the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,i.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,i.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"baseURL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,i.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,i.kt)("li",{parentName:"ul"},"baseURL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,i.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")),(0,i.kt)("li",{parentName:"ul"},"baseURL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo")," (without trailing slash) and navigating to ",(0,i.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_http_headers"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," An object containing additional HTTP headers to be sent with every request.",(0,i.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_credentials"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Credentials for ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,i.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ignore_https_errors"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proxy"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Network proxy settings.",(0,i.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,i.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,i.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional username to use if HTTP proxy requires authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage_state"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","|",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)"),". Either a path to the file with saved storage, or the value returned by one of ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)")," methods.",(0,i.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cookies")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expires")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Unix time in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpOnly")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sameSite")," ","<",'"Strict"|"Lax"|"None"',">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origins")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"localStorage")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,i.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_agent"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Specific user agent to use in this context.",(0,i.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),">",(0,i.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Creates new instances of ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."))}m.isMDXComponent=!0}}]);