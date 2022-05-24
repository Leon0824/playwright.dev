"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5233],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7294),o=n(4939),r=n(9670),l=n(6010),i="tabItem_LplD",s=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&f(e,n,t[n]);return e};function v(e){var t,n,o;const{lazy:s,block:p,defaultValue:u,values:m,groupId:f,className:v}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,r.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:null!=(o=null!=u?u:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(n=w[0])?void 0:n.props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,r.UB)(),[N,x]=(0,a.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,r.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==N&&(T(t),x(a),null!=f&&O(f,a))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=h({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>j.push(e),onKeyDown:E,onFocus:P,onClick:P},n),r={className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":N===e})},d(o,c(r))),null!=t?t:e);var o,r}))),s?(0,a.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function w(e){const t=(0,o.Z)();return a.createElement(v,h({key:String(t)},e))}},5425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var a=n(3905),o=n(3824),r=n(3811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={id:"downloads",title:"Downloads"},h=void 0,v={unversionedId:"downloads",id:"downloads",title:"Downloads",description:"For uploading files, see the uploading files section.",source:"@site/docs/downloads.mdx",sourceDirName:".",slug:"/downloads",permalink:"/python/docs/next/downloads",tags:[],version:"current",frontMatter:{id:"downloads",title:"Downloads"},sidebar:"docs",previous:{title:"Dialogs",permalink:"/python/docs/next/dialogs"},next:{title:"Emulation",permalink:"/python/docs/next/emulation"}},w={},y=[{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference",level:3}],b={toc:y};function g(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),u),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"For uploading files, see the ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/input#upload-files"}),"uploading files")," section."))),(0,a.kt)("p",null,"For every attachment downloaded by the page, ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-download"}),'page.on("download")')," event is emitted. All these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-download",title:"Download"}),"Download")," object from the event."),(0,a.kt)("p",null,"You can specify where to persist downloaded files using the ",(0,a.kt)("inlineCode",{parentName:"p"},"downloads_path")," option in ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browsertype#browser-type-launch"}),"browser_type.launch(**kwargs)"),"."),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Downloaded files are deleted when the browser context that produced them is closed."))),(0,a.kt)("p",null,"Here is the simplest way to handle the file download:"),(0,a.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Start waiting for the download\nwith page.expect_download() as download_info:\n    # Perform the action that initiates download\n    page.click("button#delayed-download")\ndownload = download_info.value\n# Wait for the download process to complete\npath = download.path()\n'))),(0,a.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Start waiting for the download\nasync with page.expect_download() as download_info:\n    # Perform the action that initiates download\n    await page.click("button#delayed-download")\ndownload = await download_info.value\n# Wait for the download process to complete\npath = await download.path()\n')))),(0,a.kt)("h4",m({},{id:"variations"}),"Variations"),(0,a.kt)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),(0,a.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.on("download", lambda download: print(download.path()))\n'))),(0,a.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'async def handle_download(download):\n    print(await download.path())\npage.on("download", handle_download)\n')))),(0,a.kt)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),(0,a.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-download",title:"Download"}),"Download")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-download"}),'page.on("download")'))))}g.isMDXComponent=!0}}]);