"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7158],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7294),r=n(4939),o=n(9670),s=n(6010),l="tabItem_LplD",i=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&b(e,n,t[n]);return e};function f(e){var t,n,r;const{lazy:i,block:u,defaultValue:d,values:m,groupId:b,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:null!=(r=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=y[0])?void 0:n.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.UB)(),[N,P]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=b){const e=w[b];null!=e&&e!==N&&v.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==N&&(x(t),P(a),null!=b&&O(b,a))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]||E[E.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},f)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>E.push(e),onKeyDown:j,onFocus:D,onClick:D},n),o={className:(0,s.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":N===e})},c(r,p(o))),null!=t?t:e);var r,o}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,r.Z)();return a.createElement(f,h({key:String(t)},e))}},1787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return v}});var a=n(3905),r=n(3824),o=n(3811),s=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const b={id:"class-cdpsession",title:"CDPSession"},h=void 0,f={unversionedId:"api/class-cdpsession",id:"api/class-cdpsession",title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/docs/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/python/docs/next/api/class-cdpsession",tags:[],version:"current",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"api",previous:{title:"BrowserType",permalink:"/python/docs/next/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/python/docs/next/api/class-consolemessage"}},y={},v=[{value:"cdp_session.detach()",id:"cdp-session-detach",level:2},{value:"cdp_session.send(method, **kwargs)",id:"cdp-session-send",level:2}],k={toc:v};function g(e){var t,n=e,{components:s}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),d),l(t,i({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"}),"EventEmitter"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,a.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,a.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,a.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,a.kt)("p",null,"Useful links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol Viewer"),"."),(0,a.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"}),"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'client = page.context.new_cdp_session(page)\nclient.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nclient.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'client = await page.context.new_cdp_session(page)\nawait client.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = await client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nawait client.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-cdpsession#cdp-session-detach"}),"cdp_session.detach()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-cdpsession#cdp-session-send"}),"cdp_session.send(method, **kwargs)"))),(0,a.kt)("h2",m({},{id:"cdp-session-detach"}),"cdp_session.detach()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,a.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,a.kt)("h2",m({},{id:"cdp-session-send"}),"cdp_session.send(method, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Protocol method name.",(0,a.kt)("a",{href:"#cdp-session-send-option-method",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">"," Optional method parameters.",(0,a.kt)("a",{href:"#cdp-session-send-option-params",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}g.isMDXComponent=!0}}]);