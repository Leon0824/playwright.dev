"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6210],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294);function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),o=a(7294),l=a(2389),r=a(9366),c=a(6010),s="tabItem_LplD";function i(e){var t,a,l,i=e.lazy,u=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,r.lx)(y,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,r.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,o.useState)(g),T=x[0],N=x[1],O=[],E=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==T&&y.some((function(e){return e.value===I}))&&N(I)}var Z=function(e){var t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==T&&(E(t),N(n),null!=d&&w(d,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;a=O[o]||O[O.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},h)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,l.Z)();return o.createElement(i,(0,n.Z)({key:String(t)},e))}},2410:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=a(9877),c=a(8215),s=["components"],i={id:"locators",title:"Locators"},u=void 0,p={unversionedId:"locators",id:"version-1.18/locators",title:"Locators",description:"Locator]s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the [page.locator(selector, kwargs) method.",source:"@site/versioned_docs/version-1.18/locators.mdx",sourceDirName:".",slug:"/locators",permalink:"/python/docs/1.18/locators",tags:[],version:"1.18",frontMatter:{id:"locators",title:"Locators"},sidebar:"version-1.18/docs",previous:{title:"Input",permalink:"/python/docs/1.18/input"},next:{title:"Navigations",permalink:"/python/docs/1.18/navigations"}},m={},d=[{value:"Strictness",id:"strictness",level:2},{value:"Lists",id:"lists",level:2},{value:"Locator vs ElementHandle",id:"locator-vs-elementhandle",level:2}],h={toc:d};function v(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator"),"s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-locator"},"page.locator(selector, **kwargs)")," method."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nlocator.click()\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nawait locator.click()\n')))),(0,l.kt)("p",null,"Every time locator is used for some action, up-to-date DOM element is located in the page. So in the snippet below, underlying DOM element is going to be located twice, prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nlocator.hover()\nlocator.click()\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nawait locator.hover()\nawait locator.click()\n')))),(0,l.kt)("h2",{id:"strictness"},"Strictness"),(0,l.kt)("p",null,"Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches given selector."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several buttons in DOM:\npage.locator('button').click()\n\n# Works because we explicitly tell locator to pick the first element:\npage.locator('button').first.click()\n\n# Works because count knows what to do with multiple matches:\npage.locator('button').count()\n"))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several buttons in DOM:\nawait page.locator('button').click()\n\n# Works because we explicitly tell locator to pick the first element:\nawait page.locator('button').first.click()\n\n# Works because count knows what to do with multiple matches:\nawait page.locator('button').count()\n")))),(0,l.kt)("h2",{id:"lists"},"Lists"),(0,l.kt)("p",null,"You can also use locators to work with the element lists."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Locate elements, this locator points to a list.\nrows = page.locator("table tr")\n\n# Pattern 1: use locator methods to calculate text on the whole list.\ntexts = rows.all_text_contents()\n\n# Pattern 2: do something with each element in the list.\ncount = rows.count()\nfor i in range(count):\n  print(rows.nth(i).text_content())\n\n# Pattern 3: resolve locator to elements on page and map them to their text content.\n# Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\ntexts = rows.evaluate_all("list => list.map(element => element.textContent)")\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Locate elements, this locator points to a list.\nrows = page.locator("table tr")\n\n# Pattern 1: use locator methods to calculate text on the whole list.\ntexts = await rows.all_text_contents()\n\n# Pattern 2: do something with each element in the list.\ncount = await rows.count()\nfor i in range(count):\n  print(await rows.nth(i).text_content())\n\n# Pattern 3: resolve locator to elements on page and map them to their text content.\n# Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\ntexts = await rows.evaluate_all("list => list.map(element => element.textContent)")\n')))),(0,l.kt)("h2",{id:"locator-vs-elementhandle"},"Locator vs ElementHandle"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We only recommend using ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead."))),(0,l.kt)("p",null,"The difference between the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator")," and ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element."),(0,l.kt)("p",null,"In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'handle = page.query_selector("text=Submit")\nhandle.hover()\nhandle.click()\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'handle = await page.query_selector("text=Submit")\nawait handle.hover()\nawait handle.click()\n')))),(0,l.kt)("p",null,"With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nlocator.hover()\nlocator.click()\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("text=Submit")\nawait locator.hover()\nawait locator.click()\n')))))}v.isMDXComponent=!0}}]);