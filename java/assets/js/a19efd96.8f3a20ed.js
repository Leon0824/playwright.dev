"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2480],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return w}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),w=a,d=m["".concat(s,".").concat(w)]||m[w]||u[w]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return v},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return g}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"emulation",title:"Emulation"},w=void 0,d={unversionedId:"emulation",id:"emulation",title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/docs/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/java/docs/next/emulation",tags:[],version:"current",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/java/docs/next/downloads"},next:{title:"Evaluating JavaScript",permalink:"/java/docs/next/evaluating"}},f={},g=[{value:"User agent",id:"user-agent",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Viewport",id:"viewport",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Locale &amp; timezone",id:"locale--timezone",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Permissions",id:"permissions",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Geolocation",id:"geolocation",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Color scheme and media",id:"color-scheme-and-media",level:2},{value:"API reference",id:"api-reference-5",level:3}],k={toc:g};function v(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,r.kt)("li",{parentName:"ul"},"locale, timezone"),(0,r.kt)("li",{parentName:"ul"},"color scheme"),(0,r.kt)("li",{parentName:"ul"},"geolocation")),(0,r.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#user-agent"}),"User agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#viewport"}),"Viewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#permissions"}),"Permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#geolocation"}),"Geolocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"user-agent"}),"User agent"),(0,r.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setUserAgent("My user agent"));\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"viewport"}),"Viewport"),(0,r.kt)("p",null,"Create a context with custom viewport size:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Create context with given viewport\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(1280, 1024));\n\n// Resize viewport for individual page\npage.setViewportSize(1600, 1200);\n\n// Emulate high-DPI\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(2560, 1440)\n  .setDeviceScaleFactor(2);\n")),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-set-viewport-size"}),"Page.setViewportSize(width, height)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"locale--timezone"}),"Locale & timezone"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Emulate locale and time\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setLocale("de-DE")\n  .setTimezoneId("Europe/Berlin"));\n')),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"permissions"}),"Permissions"),(0,r.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setPermissions(Arrays.asList("notifications"));\n')),(0,r.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("geolocation"));\n')),(0,r.kt)("p",null,"Grant notifications access from a specific domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("notifications"),\n  new BrowserContext.GrantPermissionsOptions().setOrigin("https://skype.com"));\n')),(0,r.kt)("p",null,"Revoke all permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),"context.clearPermissions();\n")),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-grant-permissions"}),"BrowserContext.grantPermissions(permissions[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-clear-permissions"}),"BrowserContext.clearPermissions()"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"geolocation"}),"Geolocation"),(0,r.kt)("p",null,"Create a context with ",(0,r.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setGeolocation(48.858455, 2.294474)\n  .setPermissions(Arrays.asList("geolocation")));\n')),(0,r.kt)("p",null,"Change the location later:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),"context.setGeolocation(new Geolocation(29.979097, 31.134256));\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-set-geolocation"}),"BrowserContext.setGeolocation(geolocation)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"color-scheme-and-media"}),"Color scheme and media"),(0,r.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Create context with dark mode\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Create page with dark mode\nPage page = browser.newPage(new Browser.NewPageOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Change color scheme for the page\npage.emulateMedia(new Page.EmulateMediaOptions().setColorScheme(ColorScheme.DARK));\n\n// Change media for page\npage.emulateMedia(new Page.EmulateMediaOptions().setMedia(Media.PRINT));\n')),(0,r.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-emulate-media"}),"Page.emulateMedia([options])"))))}v.isMDXComponent=!0}}]);