(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{422:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return n})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var a=t(2),o=t(6),i=(t(0),t(866)),n={id:"class-chromiumbrowser",title:"class: ChromiumBrowser"},c={unversionedId:"api/class-chromiumbrowser",id:"version-1.2.0/api/class-chromiumbrowser",isDocsHomePage:!1,title:"class: ChromiumBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.2.0/api/class-chromiumbrowser.md",slug:"/api/class-chromiumbrowser",permalink:"/playwright/docs/1.2.0/api/class-chromiumbrowser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/api/class-chromiumbrowser.md",version:"1.2.0",sidebar:"version-1.2.0/api",previous:{title:"class: Logger",permalink:"/playwright/docs/1.2.0/api/class-logger"},next:{title:"class: ChromiumBrowserContext",permalink:"/playwright/docs/1.2.0/api/class-chromiumbrowsercontext"}},s=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={rightToc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"extends: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#class-browser",title:"Browser"}),"Browser"))),Object(i.b)("p",null,"Chromium-specific features including Tracing, service worker support, etc.\nYou can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/1.2.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"}),Object(i.b)("inlineCode",{parentName:"a"},"chromiumBrowser.startTracing"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/1.2.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),Object(i.b)("inlineCode",{parentName:"a"},"chromiumBrowser.stopTracing"))," to create a trace file which can be opened in Chrome DevTools or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"}),"chromiumBrowser.newBrowserCDPSession()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#event-disconnected"}),"event: 'disconnected'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#browserclose"}),"browser.close()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])"))),Object(i.b)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-cdpsession#class-cdpsession",title:"CDPSession"}),"CDPSession"),">> Promise that resolves to the newly created browser\nsession.")),Object(i.b)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api/class-page#class-page",title:"Page"}),"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A path to write the trace file to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> captures screenshots in the trace."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"categories")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> specify custom categories to use instead of default."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(i.b)("p",null,"Only one trace can be active at a time per browser."),Object(i.b)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),">> Promise which resolves to buffer with trace data.")))}b.isMDXComponent=!0},866:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return h}));var a=t(0),o=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,n=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,h=p["".concat(n,".").concat(u)]||p[u]||m[u]||i;return t?o.a.createElement(h,c(c({ref:r},l),{},{components:t})):o.a.createElement(h,c({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,n=new Array(i);n[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var l=2;l<i;l++)n[l]=t[l];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);