"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[417],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7462),n=r(7294),o=r(2389),l=r(9366),i=r(6010),s="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),g=v.tabGroupChoices,k=v.setTabGroupChoices,N=(0,n.useState)(y),P=N[0],x=N[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==P&&b.some((function(e){return e.value===E}))&&x(E)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),a=b[r].value;a!==P&&(T(t),x(a),null!=m&&k(m,a))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;r=O[a]||O[0];break;case"ArrowLeft":var n=O.indexOf(e.currentTarget)-1;r=O[n]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=r?r:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},1607:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=(r(9877),r(8215),["components"]),i={id:"why-playwright",title:"Why Playwright?"},s=void 0,u={unversionedId:"why-playwright",id:"version-1.18/why-playwright",title:"Why Playwright?",description:"Playwright enables fast, reliable and capable testing and automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/versioned_docs/version-1.18/why-playwright.mdx",sourceDirName:".",slug:"/why-playwright",permalink:"/python/docs/1.18/why-playwright",tags:[],version:"1.18",frontMatter:{id:"why-playwright",title:"Why Playwright?"}},p={},c=[{value:"Support for all browsers",id:"support-for-all-browsers",level:2},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",level:2},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright enables fast, reliable and capable testing and automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-for-all-browsers"},"Support for all browsers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fast-and-reliable-execution"},"Fast and reliable execution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#powerful-automation-capabilities"},"Powerful automation capabilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/release-notes"},"Release notes"))),(0,o.kt)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",(0,o.kt)("a",{parentName:"li",href:"https://www.chromium.org/"},"Chromium"),"), Apple Safari (with ",(0,o.kt)("a",{parentName:"li",href:"https://webkit.org/"},"WebKit"),") and Mozilla Firefox."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test for mobile"),". Use ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/emulation"},"device emulation")," to test your responsive web apps in mobile web browsers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headless and headed"),". Playwright supports headless (without browser UI) and headed (with browser UI) modes for all browsers and all platforms. Headed is great for debugging, and headless is faster and suited for CI/cloud executions.")),(0,o.kt)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auto-wait APIs"),". Playwright interactions ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/actionability"},"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast isolation with browser contexts"),". Reuse a single browser instance for multiple isolated execution environments with ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/browser-contexts"},"browser contexts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/selectors"},"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure.")),(0,o.kt)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/pages"},"multiple pages"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful network control"),". Playwright introduces context-wide ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/network"},"network interception")," to stub and mock network requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modern web features"),". Playwright supports web components through ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/selectors"},"shadow-piercing selectors"),", ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/emulation"},"geolocation, permissions"),", web workers and other modern web APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capabilities to cover all scenarios"),". Support for ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/downloads"},"file downloads")," and ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/input"},"uploads"),", out-of-process iframes, native ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/input"},"input events"),", and even ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.18/emulation"},"dark mode"),".")))}m.isMDXComponent=!0}}]);