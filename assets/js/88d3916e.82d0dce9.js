"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5931],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(87462),r=n(67294),o=n(72389),l=n(29366),i=n(86010),p="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,s=e.block,c=e.defaultValue,g=e.values,d=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),k=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(w),x=N[0],P=N[1],O=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==x&&v.some((function(e){return e.value===j}))&&P(j)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==x&&(E(t),P(a),null!=d&&y(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},m)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:T,onClick:T},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function s(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},58983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(9877),n(58215),["components"]),i={id:"pages",title:"Pages"},p=void 0,u={unversionedId:"pages",id:"version-1.18/pages",title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.18/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/docs/1.18/pages",tags:[],version:"1.18",frontMatter:{id:"pages",title:"Pages"},sidebar:"version-1.18/docs",previous:{title:"Network",permalink:"/docs/1.18/network"},next:{title:"Page Object Models",permalink:"/docs/1.18/pom"}},s={},c=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}],g={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pages"},"Pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,o.kt)("h2",{id:"pages"},"Pages"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," can have multiple pages. A ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.locator('#search').fill('query');\n\n// Navigate implicitly by clicking a link.\nawait page.locator('#submit').click();\n// Expect a new url.\nconsole.log(page.url());\n")),(0,o.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,o.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,o.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a browser context\nconst allPages = context.pages();\n")),(0,o.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),(0,o.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  console.log(await page.title());\n})\n")),(0,o.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,o.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,o.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,o.kt)("p",null,"This event is emitted in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the popup.\nconst [popup] = await Promise.all([\n  // It is important to call waitForEvent before click to set up waiting.\n  page.waitForEvent('popup'),\n  // Opens popup.\n  page.locator('#open').click(),\n]);\nawait popup.waitForLoadState();\nconsole.log(await popup.title());\n")),(0,o.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")))}d.isMDXComponent=!0}}]);