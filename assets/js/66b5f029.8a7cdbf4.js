"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6089],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(67294);function a(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(87462),a=t(67294),o=t(72389),l=t(29366),s=t(86010),i="tabItem_LplD";function u(e){var r,t,o,u=e.lazy,c=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),b=(0,l.lx)(h,(function(e,r){return e.value===r.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(r=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),k=y.tabGroupChoices,E=y.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],N=w[1],x=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=k[d];null!=S&&S!==O&&h.some((function(e){return e.value===S}))&&N(S)}var j=function(e){var r=e.currentTarget,t=x.indexOf(r),n=h[t].value;n!==O&&(T(r),N(n),null!=d&&E(d,n))},_=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},h.map((function(e){var r=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==O})}))))}function c(e){var r=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(r)},e))}},42293:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),l=(t(9877),t(58215),["components"]),s={id:"class-testerror",title:"TestError"},i=void 0,u={unversionedId:"api/class-testerror",id:"api/class-testerror",title:"TestError",description:"Information about an error thrown during test execution.",source:"@site/docs/api/class-testerror.mdx",sourceDirName:"api",slug:"/api/class-testerror",permalink:"/docs/next/api/class-testerror",tags:[],version:"current",frontMatter:{id:"class-testerror",title:"TestError"},sidebar:"api",previous:{title:"TestConfig",permalink:"/docs/next/api/class-testconfig"},next:{title:"TestInfo",permalink:"/docs/next/api/class-testinfo"}},c={},p=[{value:"testError.message",id:"test-error-message",level:2},{value:"testError.stack",id:"test-error-stack",level:2},{value:"testError.value",id:"test-error-value",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information about an error thrown during test execution."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror#test-error-message"},"testError.message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror#test-error-stack"},"testError.stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror#test-error-value"},"testError.value"))),(0,o.kt)("h2",{id:"test-error-message"},"testError.message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Error message. Set when ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."),(0,o.kt)("h2",{id:"test-error-stack"},"testError.stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Error stack. Set when ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."),(0,o.kt)("h2",{id:"test-error-value"},"testError.value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"The value that was thrown. Set when anything except the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."))}d.isMDXComponent=!0}}]);