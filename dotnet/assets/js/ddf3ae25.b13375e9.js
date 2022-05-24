"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9147],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7109:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(t,n,e[n]);if(s)for(var n of s(e))p.call(e,n)&&c(t,n,e[n]);return t};const d={id:"class-apirequest",title:"APIRequest"},m=void 0,h={unversionedId:"api/class-apirequest",id:"api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. This class is used for creating APIRequestContext] instance which in turn can be used for sending web requests. An instance of this class can be obtained via [Playwright.APIRequest. For more information see [APIRequestContext].",source:"@site/docs/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/dotnet/docs/next/api/class-apirequest",tags:[],version:"current",frontMatter:{id:"class-apirequest",title:"APIRequest"}},f={},k=[{value:"ApiRequest.NewContextAsync(options)",id:"api-request-new-context",level:2}],x={toc:k};function g(t){var e,n=t,{components:i}=n,c=((t,e)=>{var n={};for(var a in t)l.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},x),c),r(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Exposes API that can be used for the Web API testing. This class is used for creating ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," instance which in turn can be used for sending web requests. An instance of this class can be obtained via ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-playwright#playwright-request"}),"Playwright.APIRequest"),". For more information see ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-apirequest#api-request-new-context"}),"ApiRequest.NewContextAsync(options)"))),(0,a.kt)("h2",u({},{id:"api-request-new-context"}),"ApiRequest.NewContextAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"ApiRequestNewContextOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BaseURL"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Methods like ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-apirequestcontext#api-request-context-get"}),"ApiRequestContext.GetAsync(url, options)")," take the base URL into consideration by using the ",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"}),(0,a.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,a.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"baseURL: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,a.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,a.kt)("li",{parentName:"ul"},"baseURL: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,a.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")),(0,a.kt)("li",{parentName:"ul"},"baseURL: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo")," (without trailing slash) and navigating to ",(0,a.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExtraHTTPHeaders"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"}),"IDictionary"),"?<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),", ",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",">"," An object containing additional HTTP headers to be sent with every request.",(0,a.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HttpCredentials"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<","HttpCredentials?",">"," Credentials for ",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",(0,a.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Username")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Password")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IgnoreHTTPSErrors"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),"?",">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".",(0,a.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Proxy"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<","Proxy?",">"," Network proxy settings.",(0,a.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,a.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bypass")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Optional comma-separated domains to bypass proxy, for example ",(0,a.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Username")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Optional username to use if HTTP proxy requires authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Password")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Optional password to use if HTTP proxy requires authentication."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StorageState"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.StorageStateAsync(options)")," or ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-apirequestcontext#api-request-context-storage-state"}),"ApiRequestContext.StorageStateAsync(options)"),". Either a path to the file with saved storage, or the value returned by one of ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.StorageStateAsync(options)")," or ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-apirequestcontext#api-request-context-storage-state"}),"ApiRequestContext.StorageStateAsync(options)")," methods.",(0,a.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StorageStatePath"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state-path"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.StorageStateAsync(options)"),". Path to the file with saved storage state.",(0,a.kt)("a",{href:"#api-request-new-context-option-storage-state-path",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,a.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UserAgent"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Specific user agent to use in this context.",(0,a.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),">",(0,a.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Creates new instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."))}g.isMDXComponent=!0}}]);