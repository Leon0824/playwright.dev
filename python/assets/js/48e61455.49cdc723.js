"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1801],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function i({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))c.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),o=a(4939),r=a(9670),l=a(6010),c="tabItem_LplD",s=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&h(e,a,t[a]);return e};function v(e){var t,a,o;const{lazy:s,block:p,defaultValue:m,values:d,groupId:h,className:v}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,r.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(o=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(a=b[0])?void 0:a.props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,r.UB)(),[x,T]=(0,n.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,r.o5)();if(null!=h){const e=k[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=N.indexOf(t),n=f[a].value;n!==x&&(P(t),T(n),null!=h&&O(h,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=y({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>N.push(e),onKeyDown:E,onFocus:j,onClick:j},a),r={className:(0,l.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":x===e})},i(o,u(r))),null!=t?t:e);var o,r}))),s?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,o.Z)();return n.createElement(v,y({key:String(t)},e))}},5617:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return f}});var n=a(3905),o=a(3824),r=a(3811),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={id:"locators",title:"Locators"},y=void 0,v={unversionedId:"locators",id:"version-1.21/locators",title:"Locators",description:"Locator]s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the [page.locator(selector, kwargs) method.",source:"@site/versioned_docs/version-1.21/locators.mdx",sourceDirName:".",slug:"/locators",permalink:"/python/docs/1.21/locators",tags:[],version:"1.21",frontMatter:{id:"locators",title:"Locators"},sidebar:"docs",previous:{title:"Input",permalink:"/python/docs/1.21/input"},next:{title:"Navigations",permalink:"/python/docs/1.21/navigations"}},b={},f=[{value:"Strictness",id:"strictness",level:2},{value:"Lists",id:"lists",level:2},{value:"Locator vs ElementHandle",id:"locator-vs-elementhandle",level:2}],g={toc:f};function w(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),m),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.21/api/class-locator",title:"Locator"}),"Locator"),"s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.21/api/class-page#page-locator"}),"page.locator(selector, **kwargs)")," method."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nlocator.click()\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nawait locator.click()\n')))),(0,n.kt)("p",null,"Every time locator is used for some action, up-to-date DOM element is located in the page. So in the snippet below, underlying DOM element is going to be located twice, prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nlocator.hover()\nlocator.click()\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nawait locator.hover()\nawait locator.click()\n')))),(0,n.kt)("h2",d({},{id:"strictness"}),"Strictness"),(0,n.kt)("p",null,"Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches given selector."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Throws if there are several buttons in DOM:\npage.locator('button').click()\n\n# Works because we explicitly tell locator to pick the first element:\npage.locator('button').first.click()\n\n# Works because count knows what to do with multiple matches:\npage.locator('button').count()\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Throws if there are several buttons in DOM:\nawait page.locator('button').click()\n\n# Works because we explicitly tell locator to pick the first element:\nawait page.locator('button').first.click()\n\n# Works because count knows what to do with multiple matches:\nawait page.locator('button').count()\n")))),(0,n.kt)("h2",d({},{id:"lists"}),"Lists"),(0,n.kt)("p",null,"You can also use locators to work with the element lists."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Locate elements, this locator points to a list.\nrows = page.locator("table tr")\n\n# Pattern 1: use locator methods to calculate text on the whole list.\ntexts = rows.all_text_contents()\n\n# Pattern 2: do something with each element in the list.\ncount = rows.count()\nfor i in range(count):\n  print(rows.nth(i).text_content())\n\n# Pattern 3: resolve locator to elements on page and map them to their text content.\n# Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\ntexts = rows.evaluate_all("list => list.map(element => element.textContent)")\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Locate elements, this locator points to a list.\nrows = page.locator("table tr")\n\n# Pattern 1: use locator methods to calculate text on the whole list.\ntexts = await rows.all_text_contents()\n\n# Pattern 2: do something with each element in the list.\ncount = await rows.count()\nfor i in range(count):\n  print(await rows.nth(i).text_content())\n\n# Pattern 3: resolve locator to elements on page and map them to their text content.\n# Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\ntexts = await rows.evaluate_all("list => list.map(element => element.textContent)")\n')))),(0,n.kt)("h2",d({},{id:"locator-vs-elementhandle"}),"Locator vs ElementHandle"),(0,n.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"We only recommend using ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.21/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead."))),(0,n.kt)("p",null,"The difference between the ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.21/api/class-locator",title:"Locator"}),"Locator")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.21/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element."),(0,n.kt)("p",null,"In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'handle = page.query_selector("text=Submit")\nhandle.hover()\nhandle.click()\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'handle = await page.query_selector("text=Submit")\nawait handle.hover()\nawait handle.click()\n')))),(0,n.kt)("p",null,"With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nlocator.hover()\nlocator.click()\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'locator = page.locator("text=Submit")\nawait locator.hover()\nawait locator.click()\n')))))}w.isMDXComponent=!0}}]);