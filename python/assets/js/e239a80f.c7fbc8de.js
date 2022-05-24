"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5792],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(y,o(o({ref:t},i),{},{components:r})):n.createElement(y,o({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7294),a=r(4939),l=r(9670),o=r(6010),s="tabItem_LplD",c=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&y(e,r,t[r]);return e};function b(e){var t,r,a;const{lazy:c,block:p,defaultValue:f,values:m,groupId:y,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),g=(0,l.lx)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===f?f:null!=(a=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,l.UB)(),[T,N]=(0,n.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=y){const e=O[y];null!=e&&e!==T&&v.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,r=j.indexOf(t),n=v[r].value;n!==T&&(x(t),N(n),null!=y&&w(y,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break}case"ArrowLeft":{const r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},v.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=d({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:E,onClick:E},r),l={className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":T===e})},u(a,i(l))),null!=t?t:e);var a,l}))),c?(0,n.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,a.Z)();return n.createElement(b,d({key:String(t)},e))}},3907:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return v}});var n=r(3905),a=r(3824),l=r(3811),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&f(e,r,t[r]);return e};const y={id:"screenshots",title:"Screenshots"},d=void 0,b={unversionedId:"screenshots",id:"version-1.21/screenshots",title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.21/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/python/docs/1.21/screenshots",tags:[],version:"1.21",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/python/docs/1.21/pom"},next:{title:"Selectors",permalink:"/python/docs/1.21/selectors"}},h={},v=[{value:"Full page screenshots",id:"full-page-screenshots",level:2},{value:"Capture into buffer",id:"capture-into-buffer",level:2},{value:"Element screenshot",id:"element-screenshot",level:2}],g={toc:v};function k(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),f),s(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.screenshot(path="screenshot.png")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.screenshot(path="screenshot.png")\n')))),(0,n.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#full-page-screenshots"}),"Full page screenshots")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#capture-into-buffer"}),"Capture into buffer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#element-screenshot"}),"Element screenshot"))),(0,n.kt)("h2",m({},{id:"full-page-screenshots"}),"Full page screenshots"),(0,n.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.screenshot(path="screenshot.png", full_page=True)\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.screenshot(path="screenshot.png", full_page=True)\n')))),(0,n.kt)("h2",m({},{id:"capture-into-buffer"}),"Capture into buffer"),(0,n.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"screenshot_bytes = page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"# Capture into Image\nscreenshot_bytes = await page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n")))),(0,n.kt)("h2",m({},{id:"element-screenshot"}),"Element screenshot"),(0,n.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.locator(".header").screenshot(path="screenshot.png")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.locator(".header").screenshot(path="screenshot.png")\n')))))}k.isMDXComponent=!0}}]);