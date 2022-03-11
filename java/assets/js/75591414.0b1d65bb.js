"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[32],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(h,s(s({ref:a},d),{},{components:t})):n.createElement(h,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(7294);function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7462),r=t(7294),l=t(2389),s=t(9366),i=t(6010),o="tabItem_LplD";function c(e){var a,t,l,c=e.lazy,d=e.block,p=e.defaultValue,u=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,s.lx)(f,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(a=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),k=b.tabGroupChoices,j=b.setTabGroupChoices,N=(0,r.useState)(y),w=N[0],H=N[1],E=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&H(x)}var O=function(e){var a=e.currentTarget,t=E.indexOf(a),n=f[t].value;n!==w&&(S(a),H(n),null!=m&&j(m,n))},P=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var a=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function d(e){var a=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(a)},e))}},2332:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=t(7462),r=t(3366),l=(t(7294),t(3905)),s=(t(9877),t(8215),["components"]),i={id:"handles",title:"Handles"},o=void 0,c={unversionedId:"handles",id:"version-1.19/handles",title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.19/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/java/docs/handles",tags:[],version:"1.19",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.19/docs",previous:{title:"Frames",permalink:"/java/docs/frames"},next:{title:"Input",permalink:"/java/docs/input"}},d={},p=[{value:"API reference",id:"api-reference",level:3},{value:"Element Handles",id:"element-handles",level:2},{value:"Handles as parameters",id:"handles-as-parameters",level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",level:2},{value:"API reference",id:"api-reference-1",level:3}],u={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,l.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,l.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,l.kt)("p",null,"Here is the easiest way to obtain a ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSHandle jsHandle = page.evaluateHandle("window");\n//  Use jsHandle for evaluations.\n')),(0,l.kt)("h2",{id:"element-handles"},"Element Handles"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Discouraged")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The use of ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is discouraged, use ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator",title:"Locator"},"Locator")," objects and web-first assertions instead."))),(0,l.kt)("p",null,"When ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-wait-for-selector"},"Page.waitForSelector(selector[, options])")," or ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-frame#frame-wait-for-selector"},"Frame.waitForSelector(selector[, options])")," methods. These APIs wait for the element to be attached and visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Get the element handle\nJSHandle jsHandle = page.waitForSelector("#box");\nElementHandle elementHandle = jsHandle.asElement();\n\n// Assert bounding box for the element\nBoundingBox boundingBox = elementHandle.boundingBox();\nassertEquals(100, boundingBox.width);\n\n// Assert attribute for the element\nString classNames = elementHandle.getAttribute("class");\nassertTrue(classNames.contains("highlighted"));\n')),(0,l.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,l.kt)("p",null,"Handles can be passed into the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Create new array in page.\nJSHandle myArrayHandle = page.evaluateHandle("() => {\\n" +\n  "  window.myArray = [1];\\n" +\n  "  return myArray;\\n" +\n  "}");\n\n// Get the length of the array.\nint length = (int) page.evaluate("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nMap<String, Object> arg = new HashMap<>();\narg.put("myArray", myArrayHandle);\narg.put("newElement", 2);\npage.evaluate("arg => arg.myArray.add(arg.newElement)", arg);\n\n// Release the object when it is no longer needed.\nmyArrayHandle.dispose();\n')),(0,l.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,l.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-evaluate-handle"},"Page.evaluateHandle(expression[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-query-selector"},"Page.querySelector(selector[, options])")," or ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-query-selector-all"},"Page.querySelectorAll(selector)")," or their frame counterparts ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-frame#frame-evaluate-handle"},"Frame.evaluateHandle(expression[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-frame#frame-query-selector"},"Frame.querySelector(selector[, options])")," or ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-frame#frame-query-selector-all"},"Frame.querySelectorAll(selector)"),". Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-jshandle#js-handle-dispose"},"JSHandle.dispose()")," method."),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-bounding-box"},"ElementHandle.boundingBox()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-get-attribute"},"ElementHandle.getAttribute(name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.innerText()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.innerHTML()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-text-content"},"ElementHandle.textContent()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-jshandle#js-handle-evaluate"},"JSHandle.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-evaluate-handle"},"Page.evaluateHandle(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-query-selector"},"Page.querySelector(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-query-selector-all"},"Page.querySelectorAll(selector)"))))}m.isMDXComponent=!0}}]);