"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4915],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),n=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function i({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(7294),n=r(4939),o=r(9670),l=r(6010),s="tabItem_LplD",c=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&d(e,r,t[r]);return e};function y(e){var t,r,n;const{lazy:c,block:u,defaultValue:m,values:f,groupId:d,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),v=(0,o.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,o.UB)(),[P,j]=(0,a.useState)(O),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=k[d];null!=e&&e!==P&&h.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,r=_.indexOf(t),a=h[r].value;a!==P&&(T(t),j(a),null!=d&&w(d,a))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=_.indexOf(e.currentTarget)+1;t=_[r]||_[0];break}case"ArrowLeft":{const r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},y)},h.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=b({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>_.push(e),onKeyDown:N,onFocus:E,onClick:E},r),o={className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":P===e})},i(n,p(o))),null!=t?t:e);var n,o}))),c?(0,a.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function g(e){const t=(0,n.Z)();return a.createElement(y,b({key:String(t)},e))}},4870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var a=r(3905),n=r(3824),o=r(3811),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&m(e,r,t[r]);return e};const d={id:"pom",title:"Page Object Models"},b=void 0,y={unversionedId:"pom",id:"version-1.22/pom",title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-1.22/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/python/docs/pom",tags:[],version:"1.22",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"docs",previous:{title:"Pages",permalink:"/python/docs/pages"},next:{title:"Screenshots",permalink:"/python/docs/screenshots"}},g={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"API reference",id:"api-reference",level:3}],v={toc:h};function O(e){var t,r=e,{components:l}=r,m=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=f(f({},v),m),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#implementation"}),"Implementation"))),(0,a.kt)("h2",f({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,a.kt)("p",null,"Page objects ",(0,a.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,a.kt)("p",null,"Page objects ",(0,a.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,a.kt)("h2",f({},{id:"implementation"}),"Implementation"),(0,a.kt)("p",null,"Page object models wrap over a Playwright ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"),"."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n        self.search_term_input = page.locator(\'[aria-label="Enter your search term"]\')\n\n    def navigate(self):\n        self.page.goto("https://bing.com")\n\n    def search(self, text):\n        self.search_term_input.fill(text)\n        self.search_term_input.press("Enter")\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n        self.search_term_input = page.locator(\'[aria-label="Enter your search term"]\')\n\n    async def navigate(self):\n        await self.page.goto("https://bing.com")\n\n    async def search(self, text):\n        await self.search_term_input.fill(text)\n        await self.search_term_input.press("Enter")\n')))),(0,a.kt)("p",null,"Page objects can then be used inside a test."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = browser.new_page()\nsearch_page = SearchPage(page)\nsearch_page.navigate()\nsearch_page.search("search query")\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = await browser.new_page()\nsearch_page = SearchPage(page)\nawait search_page.navigate()\nawait search_page.search("search query")\n')))),(0,a.kt)("h3",f({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"))))}O.isMDXComponent=!0}}]);