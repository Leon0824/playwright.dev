(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4321],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(944),l=a(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=(0,r.Z)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,n.useState)(c),k=v[0],b=v[1],j=n.Children.toArray(e.children),N=[];if(null!=u){var S=f[u];null!=S&&S!==k&&d.some((function(e){return e.value===S}))&&b(S)}var y=function(e){var t=e.currentTarget,a=N.indexOf(t),n=d[a].value;b(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,l,i,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},H=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:H,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(j.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8436:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=(a(1395),a(8215),{id:"class-jshandle",title:"JSHandle"}),o={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle(pageFunction[, arg]) method.",source:"@site/docs/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/docs/next/api/class-jshandle",version:"current",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"api",previous:{title:"Frame",permalink:"/docs/next/api/class-frame"},next:{title:"Keyboard",permalink:"/docs/next/api/class-keyboard"}},s=[{value:"jsHandle.asElement()",id:"js-handle-as-element",children:[]},{value:"jsHandle.dispose()",id:"js-handle-dispose",children:[]},{value:"jsHandle.evaluate(pageFunction, arg)",id:"js-handle-evaluate",children:[]},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"js-handle-evaluate-handle",children:[]},{value:"jsHandle.getProperties()",id:"js-handle-get-properties",children:[]},{value:"jsHandle.getProperty(propertyName)",id:"js-handle-get-property",children:[]},{value:"jsHandle.jsonValue()",id:"js-handle-json-value",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),(0,l.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle#js-handle-dispose"},"jsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,l.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-eval-on-selector"},"page.$eval(selector, pageFunction[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-as-element"},"jsHandle.asElement()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-dispose"},"jsHandle.dispose()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-evaluate"},"jsHandle.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-evaluate-handle"},"jsHandle.evaluateHandle(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-get-properties"},"jsHandle.getProperties()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-get-property"},"jsHandle.getProperty(propertyName)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-json-value"},"jsHandle.jsonValue()"))),(0,l.kt)("h2",{id:"js-handle-as-element"},"jsHandle.asElement()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,l.kt)("p",null,"Returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,l.kt)("h2",{id:"js-handle-dispose"},"jsHandle.dispose()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,l.kt)("h2",{id:"js-handle-evaluate"},"jsHandle.evaluate(pageFunction","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction")," \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the page context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," \\<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate(node => node.innerText)).toBe('10 retweets');\n")),(0,l.kt)("h2",{id:"js-handle-evaluate-handle"},"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction")," \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the page context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," \\<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," for more details."),(0,l.kt)("h2",{id:"js-handle-get-properties"},"jsHandle.getProperties()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"},"Map"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">>",">")),(0,l.kt)("p",null,"The method returns a map with ",(0,l.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),(0,l.kt)("h2",{id:"js-handle-get-property"},"jsHandle.getProperty(propertyName)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propertyName")," \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," property to get"),(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">")),(0,l.kt)("p",null,"Fetches a single property from the referenced object."),(0,l.kt)("h2",{id:"js-handle-json-value"},"jsHandle.jsonValue()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: \\<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">")),(0,l.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,l.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,l.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}c.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);