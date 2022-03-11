"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),w=c(n),d=a,f=w["".concat(l,".").concat(d)]||w[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),o=n(2389),s=n(9366),i=n(6010),l="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,w=e.values,d=e.groupId,f=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=w?w:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=m[0])?void 0:o.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),g=y.tabGroupChoices,x=y.setTabGroupChoices,k=(0,a.useState)(h),N=k[0],C=k[1],O=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=g[d];null!=T&&T!==N&&v.some((function(e){return e.value===T}))&&C(T)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(P(t),C(r),null!=d&&x(d,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},4121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=(n(9877),n(8215),["components"]),i={id:"browser-contexts",title:"Browser Contexts"},l=void 0,c={unversionedId:"browser-contexts",id:"browser-contexts",title:"Browser Contexts",description:"- Browser context",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/dotnet/docs/next/browser-contexts",tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/dotnet/docs/next/browsers"},next:{title:"Command line tools",permalink:"/dotnet/docs/next/cli"}},u={},p=[{value:"Browser context",id:"browser-context",level:2},{value:"Multiple contexts",id:"multiple-contexts",level:2},{value:"API reference",id:"api-reference",level:3}],w={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,o.kt)("h2",{id:"browser-context"},"Browser context"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"await using var browser = playwright.Chromium.LaunchAsync();\nvar context = await browser.NewContextAsync();\nvar page = await context.NewPageAsync();\n")),(0,o.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        var options = new BrowserNewContextOptions(playwright.Devices["iPhone 11 Pro"])\n        {\n            Geolocation = new() { Longitude = 12.492507f, Latitude = 41.889938f },\n            Permissions = new[] { "geolocation" },\n            Locale = "de-DE"\n        };\n\n        await using var context = await browser.NewContextAsync(options);\n        var page = await browser.NewPageAsync();\n    }\n}\n')),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.AddCookiesAsync(cookies)"))))}d.isMDXComponent=!0}}]);