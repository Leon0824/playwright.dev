"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[760],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87462),a=r(67294),o=r(72389),i=r(29366),l=r(86010),s="tabItem_LplD";function c(e){var t,r,o,c=e.lazy,u=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(b),S=w[0],O=w[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==S&&v.some((function(e){return e.value===C}))&&O(C)}var E=function(e){var t=e.currentTarget,r=x.indexOf(t),n=v[r].value;n!==S&&(j(t),O(n),null!=d&&N(d,n))},T=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=r?r:t)}))),c?(0,a.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function u(e){var t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},38453:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(9877),r(58215),["components"]),l={id:"class-selectors",title:"Selectors"},s=void 0,c={unversionedId:"api/class-selectors",id:"api/class-selectors",title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/docs/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/docs/next/api/class-selectors",tags:[],version:"current",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"api",previous:{title:"Route",permalink:"/docs/next/api/class-route"},next:{title:"Touchscreen",permalink:"/docs/next/api/class-touchscreen"}},u={},p=[{value:"selectors.register(name, script, options)",id:"selectors-register",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/selectors"},"Working with selectors")," for more information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-selectors#selectors-register"},"selectors.register(name, script[, options])"))),(0,o.kt)("h2",{id:"selectors-register"},"selectors.register(name, script","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-name"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name that is used in selectors as a prefix, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,o.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,o.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters.",(0,o.kt)("a",{href:"#selectors-register-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"script"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-script"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Script that evaluates to a selector engine instance.",(0,o.kt)("a",{href:"#selectors-register-option-script",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path to the JavaScript file. If ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory. Optional."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Raw script content. Optional."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contentScript"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-content-script"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines.",(0,o.kt)("a",{href:"#selectors-register-option-content-script",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#selectors-register-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { selectors, firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  // Must be a function that evaluates to a selector engine instance.\n  const createTagNameEngine = () => ({\n    // Returns the first element matching given selector in the root's subtree.\n    query(root, selector) {\n      return root.querySelector(selector);\n    },\n\n    // Returns all elements matching given selector in the root's subtree.\n    queryAll(root, selector) {\n      return Array.from(root.querySelectorAll(selector));\n    }\n  });\n\n  // Register the engine. Selectors will be prefixed with \"tag=\".\n  await selectors.register('tag', createTagNameEngine);\n\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.setContent(`<div><button>Click me</button></div>`);\n\n  // Use the selector prefixed with its name.\n  const button = page.locator('tag=button');\n  // Combine it with other selector engines.\n  await page.click('tag=div >> text=\"Click me\"');\n  // Can use it in any methods supporting selectors.\n  const buttonCount = await page.locator('tag=button').count();\n\n  await browser.close();\n})();\n")))}d.isMDXComponent=!0}}]);