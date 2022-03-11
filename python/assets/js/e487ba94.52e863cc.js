"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return w}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),w=a,d=m["".concat(i,".").concat(w)]||m[w]||p[w]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),o=n(2389),l=n(9366),s=n(6010),i="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,m=e.values,w=e.groupId,d=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),x=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,a.useState)(b),_=k[0],T=k[1],N=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var E=x[w];null!=E&&E!==_&&h.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==_&&(O(t),T(r),null!=w&&g(w,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},d)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(y.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function u(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},4121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return w}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9877),s=n(8215),i=["components"],c={id:"browser-contexts",title:"Browser Contexts"},u=void 0,p={unversionedId:"browser-contexts",id:"browser-contexts",title:"Browser Contexts",description:"- Browser context",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/python/docs/next/browser-contexts",tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/python/docs/next/browsers"},next:{title:"Chrome Extensions",permalink:"/python/docs/next/chrome-extensions"}},m={},w=[{value:"Browser context",id:"browser-context",level:2},{value:"Multiple contexts",id:"multiple-contexts",level:2},{value:"API reference",id:"api-reference",level:3}],d={toc:w};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,o.kt)("h2",{id:"browser-context"},"Browser context"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"browser = playwright.chromium.launch()\ncontext = browser.new_context()\npage = context.new_page()\n"))),(0,o.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"browser = await playwright.chromium.launch()\ncontext = await browser.new_context()\npage = await context.new_page()\n")))),(0,o.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    iphone_11 = p.devices['iPhone 11 Pro']\n    browser = p.webkit.launch(headless=False)\n    context = browser.new_context(\n        **iphone_11,\n        locale='de-DE',\n        geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n        permissions=['geolocation']\n    )\n    page = context.new_page()\n    browser.close()\n"))),(0,o.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        iphone_11 = p.devices['iPhone 11 Pro']\n        browser = await p.chromium.launch()\n        context = await browser.new_context(\n            **iphone_11,\n            locale='de-DE',\n            geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n            permissions=['geolocation'],\n            color_scheme='dark',\n        )\n        page = await browser.new_page()\n        await browser.close()\n\nasyncio.run(main())\n")))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = browser.new_context()\n    admin_context = browser.new_context()\n\n    # create pages and interact with contexts independently\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,o.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = await browser.new_context()\n    admin_context = await browser.new_context()\n\n    # create pages and interact with contexts independently\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-add-cookies"},"browser_context.add_cookies(cookies)"))))}y.isMDXComponent=!0}}]);