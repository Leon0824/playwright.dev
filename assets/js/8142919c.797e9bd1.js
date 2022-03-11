"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8120],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),o=n(72389),s=n(29366),i=n(86010),l="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(k),O=N[0],E=N[1],S=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&E(j)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==O&&(P(t),E(a),null!=m&&w(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return S.push(e)},onKeyDown:C,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},58604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=(n(9877),n(58215),["components"]),i={id:"class-cdpsession",title:"CDPSession"},l=void 0,c={unversionedId:"api/class-cdpsession",id:"version-1.18/api/class-cdpsession",title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.18/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/docs/1.18/api/class-cdpsession",tags:[],version:"1.18",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"version-1.18/api",previous:{title:"BrowserType",permalink:"/docs/1.18/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/docs/1.18/api/class-consolemessage"}},u={},p=[{value:"cdpSession.detach()",id:"cdp-session-detach",level:2},{value:"cdpSession.send(method, params)",id:"cdp-session-send",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/events.html#events_class_eventemitter",title:"EventEmitter"},"EventEmitter"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,o.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,o.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,o.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,o.kt)("p",null,"Useful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,o.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const client = await page.context().newCDPSession(page);\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-cdpsession#cdp-session-detach"},"cdpSession.detach()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-cdpsession#cdp-session-send"},"cdpSession.send(method[, params])"))),(0,o.kt)("h2",{id:"cdp-session-detach"},"cdpSession.detach()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,o.kt)("h2",{id:"cdp-session-send"},"cdpSession.send(method","[, params]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," protocol method name",(0,o.kt)("a",{href:"#cdp-session-send-option-method",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Optional method parameters",(0,o.kt)("a",{href:"#cdp-session-send-option-params",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,o.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}m.isMDXComponent=!0}}]);