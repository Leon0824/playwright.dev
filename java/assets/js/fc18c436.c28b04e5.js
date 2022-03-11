"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7548],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(i,".").concat(v)]||d[v]||p[v]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),l=n(9366),u=n(6010),i="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,v=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),w=y.tabGroupChoices,k=y.setTabGroupChoices,j=(0,r.useState)(h),O=j[0],x=j[1],E=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=w[v];null!=S&&S!==O&&g.some((function(e){return e.value===S}))&&x(S)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==O&&(N(t),x(a),null!=v&&k(v,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:T,onFocus:P,onClick:P},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},6107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=(n(9877),n(8215),["components"]),u={id:"evaluating",title:"Evaluating JavaScript"},i=void 0,s={unversionedId:"evaluating",id:"version-1.18/evaluating",title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.18/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/java/docs/1.18/evaluating",tags:[],version:"1.18",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"version-1.18/docs",previous:{title:"Emulation",permalink:"/java/docs/1.18/emulation"},next:{title:"Events",permalink:"/java/docs/1.18/events"}},c={},p=[{value:"Evaluation Argument",id:"evaluation-argument",level:2}],d={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String href = (String) page.evaluate("document.location.href");\n')),(0,o.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'int status = (int) page.evaluate("async () => {\\n" +\n  "  const response = await fetch(location.href);\\n" +\n  "  return response.status;\\n" +\n  "}");\n')),(0,o.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,o.kt)("p",null,"Playwright evaluation methods like ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// A primitive value.\npage.evaluate("num => num", 42);\n\n// An array.\npage.evaluate("array => array.length", Arrays.asList(1, 2, 3));\n\n// An object.\nMap<String, Object> obj = new HashMap<>();\nobj.put("foo", "bar");\npage.evaluate("object => object.foo", obj);\n\n// A single handle.\nElementHandle button = page.evaluate("window.button");\npage.evaluate("button => button.textContent", button);\n\n// Alternative notation using elementHandle.evaluate.\nbutton.evaluate("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nElementHandle button1 = page.evaluate("window.button1");\nElementHandle button2 = page.evaluate("window.button2");\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("o => o.button1.textContent + o.button2.textContent", arg);\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("({ button1, button2 }) => button1.textContent + button2.textContent", arg);\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\npage.evaluate(\n  "([b1, b2]) => b1.textContent + b2.textContent",\n  Arrays.asList(button1, button2));\n\n// Any non-cyclic mix of serializables and handles works.\nMap<String, Object> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("list", Arrays.asList(button2));\narg.put("foo", 0);\npage.evaluate(\n  "x => x.button1.textContent + x.list[0].textContent + String(x.foo)",\n  arg);\n')),(0,o.kt)("p",null,"Right:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\n// Pass |data| as a parameter.\nObject result = page.evaluate("data => {\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}", data);\n')),(0,o.kt)("p",null,"Wrong:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\nObject result = page.evaluate("() => {\\n" +\n  "  // There is no |data| in the web page.\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}");\n')))}v.isMDXComponent=!0}}]);