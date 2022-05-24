"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4312],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7294),r=n(4939),o=n(9670),l=n(6010),s="tabItem_LplD",i=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&g(e,n,t[n]);return e};function h(e){var t,n,r;const{lazy:i,block:u,defaultValue:m,values:d,groupId:g,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(r=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=y[0])?void 0:n.props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,o.UB)(),[w,x]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==w&&(C(t),x(a),null!=g&&O(g,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:_,onClick:_},n),o={className:(0,l.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":w===e})},c(r,p(o))),null!=t?t:e);var r,o}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,r.Z)();return a.createElement(h,f({key:String(t)},e))}},9566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return b}});var a=n(3905),r=n(3824),o=n(3811),l=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&m(e,n,t[n]);return e};const g={id:"class-consolemessage",title:"ConsoleMessage"},f=void 0,h={unversionedId:"api/class-consolemessage",id:"version-1.22/api/class-consolemessage",title:"ConsoleMessage",description:'ConsoleMessage] objects are dispatched by page via the [page.on("console") event. For each console messages logged in the page there will be corresponding event in the Playwright context.',source:"@site/versioned_docs/version-1.22/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/python/docs/api/class-consolemessage",tags:[],version:"1.22",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"api",previous:{title:"CDPSession",permalink:"/python/docs/api/class-cdpsession"},next:{title:"Dialog",permalink:"/python/docs/api/class-dialog"}},y={},b=[{value:"console_message.args",id:"console-message-args",level:2},{value:"console_message.location",id:"console-message-location",level:2},{value:"console_message.text",id:"console-message-text",level:2},{value:"console_message.type",id:"console-message-type",level:2}],v={toc:b};function k(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),m),s(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-event-console"}),'page.on("console")')," event. For each console messages logged in the page there will be corresponding event in the Playwright context."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nwith page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = msg_info.value\n\n# Deconstruct print arguments\nmsg.args[0].json_value() # hello\nmsg.args[1].json_value() # 42\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nasync with page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    await page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = await msg_info.value\n\n# Deconstruct print arguments\nawait msg.args[0].json_value() # hello\nawait msg.args[1].json_value() # 42\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-consolemessage#console-message-args"}),"console_message.args")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-consolemessage#console-message-location"}),"console_message.location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-consolemessage#console-message-text"}),"console_message.text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-consolemessage#console-message-type"}),"console_message.type"))),(0,a.kt)("h2",d({},{id:"console-message-args"}),"console_message.args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"]",">",(0,a.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"List of arguments passed to a ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-event-console"}),'page.on("console")'),"."),(0,a.kt)("h2",d({},{id:"console-message-location"}),"console_message.location"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," URL of the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lineNumber")," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," 0-based line number in the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"columnNumber")," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," 0-based column number in the resource.")))),(0,a.kt)("h2",d({},{id:"console-message-text"}),"console_message.text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"The text of the console message."),(0,a.kt)("h2",d({},{id:"console-message-type"}),"console_message.type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"One of the following values: ",(0,a.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}k.isMDXComponent=!0}}]);