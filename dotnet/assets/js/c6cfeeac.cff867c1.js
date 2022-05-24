"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1045],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return w}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),w=a,d=m["".concat(s,".").concat(w)]||m[w]||u[w]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return g}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"emulation",title:"Emulation"},w=void 0,d={unversionedId:"emulation",id:"version-1.21/emulation",title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.21/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/dotnet/docs/1.21/emulation",tags:[],version:"1.21",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/dotnet/docs/1.21/downloads"},next:{title:"Evaluating JavaScript",permalink:"/dotnet/docs/1.21/evaluating"}},f={},g=[{value:"Devices",id:"devices",level:2},{value:"API reference",id:"api-reference",level:3},{value:"User agent",id:"user-agent",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Viewport",id:"viewport",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Locale &amp; timezone",id:"locale--timezone",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Permissions",id:"permissions",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Geolocation",id:"geolocation",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Color scheme and media",id:"color-scheme-and-media",level:2},{value:"API reference",id:"api-reference-6",level:3}],h={toc:g};function k(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,r.kt)("li",{parentName:"ul"},"locale, timezone"),(0,r.kt)("li",{parentName:"ul"},"color scheme"),(0,r.kt)("li",{parentName:"ul"},"geolocation")),(0,r.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#devices"}),"Devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#user-agent"}),"User agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#viewport"}),"Viewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#permissions"}),"Permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#geolocation"}),"Geolocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"devices"}),"Devices"),(0,r.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            Headless: False\n        });\n        var pixel2 = playwright.Devices["Pixel 2"];\n        await using var context = await browser.NewContextAsync(pixel2);\n    }\n}\n')),(0,r.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-playwright#playwright-devices"}),"Playwright.Devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"user-agent"}),"User agent"),(0,r.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var context = await browser.NewContextAsync(new BrowserNewContextOptions { UserAgent = "My User Agent" });\n')),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"viewport"}),"Viewport"),(0,r.kt)("p",null,"Create a context with custom viewport size:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Create context with given viewport\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ViewportSize = new ViewportSize() { Width = 1280, Height = 1024 }\n});\n\n// Resize viewport for individual page\nawait page.SetViewportSizeAsync(1600, 1200);\n\n// Emulate high-DPI\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ViewportSize = new ViewportSize() { Width = 2560, Height = 1440 },\n    DeviceScaleFactor = 2\n});\n")),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-set-viewport-size"}),"Page.SetViewportSizeAsync(width, height)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"locale--timezone"}),"Locale & timezone"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Locale = "de-DE",\n    TimezoneId = "Europe/Berlin"\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"permissions"}),"Permissions"),(0,r.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,r.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await context.GrantPermissionsAsync(new[] { "geolocation" });\n')),(0,r.kt)("p",null,"Grant notifications access from a specific domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await context.GrantPermissionsAsync(new[] { "notifications" }, origin: "https://skype.com");\n')),(0,r.kt)("p",null,"Revoke all permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"await context.ClearPermissionsAsync();\n")),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browsercontext#browser-context-grant-permissions"}),"BrowserContext.GrantPermissionsAsync(permissions, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browsercontext#browser-context-clear-permissions"}),"BrowserContext.ClearPermissionsAsync()"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"geolocation"}),"Geolocation"),(0,r.kt)("p",null,"Create a context with ",(0,r.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Permissions = new[] { "geolocation" },\n    Geolocation = new Geolocation() { Longitude = 48.858455f, Latitude = 2.294474f }\n});\n')),(0,r.kt)("p",null,"Change the location later:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"await context.SetGeolocationAsync(new Geolocation() { Longitude = 48.858455f, Latitude = 2.294474f });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,r.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browsercontext#browser-context-set-geolocation"}),"BrowserContext.SetGeolocationAsync(geolocation)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"color-scheme-and-media"}),"Color scheme and media"),(0,r.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Create context with dark mode\nawait using var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Create page with dark mode\nvar page = await browser.NewPageAsync(new BrowserNewPageOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Change color scheme for the page\nawait page.EmulateMediaAsync(new PageEmulateMediaOptions\n{\n    ColorScheme = ColorScheme.Dark\n});\n\n// Change media for page\nawait page.EmulateMediaAsync(new PageEmulateMediaOptions\n{\n    Media = Media.Print\n});\n")),(0,r.kt)("h3",u({},{id:"api-reference-6"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-emulate-media"}),"Page.EmulateMediaAsync(options)"))))}k.isMDXComponent=!0}}]);