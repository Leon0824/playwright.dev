"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7544],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(a),d=n,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(g,o(o({ref:e},p),{},{components:a})):r.createElement(g,o({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58215:function(t,e,a){a.d(e,{Z:function(){return n}});var r=a(67294);function n(t){var e=t.children,a=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},9877:function(t,e,a){a.d(e,{Z:function(){return p}});var r=a(87462),n=a(67294),i=a(72389),o=a(29366),l=a(86010),s="tabItem_LplD";function c(t){var e,a,i,c=t.lazy,p=t.block,u=t.defaultValue,h=t.values,d=t.groupId,g=t.className,m=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:m.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.lx)(k,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(e=null!=u?u:null==(a=m.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(i=m[0])?void 0:i.props.value;if(null!==v&&!k.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,n.useState)(v),x=y[0],S=y[1],O=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=N[d];null!=C&&C!==x&&k.some((function(t){return t.value===C}))&&S(C)}var P=function(t){var e=t.currentTarget,a=O.indexOf(e),r=k[a].value;r!==x&&(j(e),S(r),null!=d&&w(d,r))},_=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r=O.indexOf(t.currentTarget)+1;a=O[r]||O[0];break;case"ArrowLeft":var n=O.indexOf(t.currentTarget)-1;a=O[n]||O[O.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},k.map((function(t){var e=t.value,a=t.label,i=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return O.push(t)},onKeyDown:_,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===e})}),null!=a?a:e)}))),c?(0,n.cloneElement)(m.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function p(t){var e=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(e)},t))}},13889:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=(a(9877),a(58215),["components"]),l={id:"class-tracing",title:"Tracing"},s=void 0,c={unversionedId:"api/class-tracing",id:"api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/docs/next/api/class-tracing",tags:[],version:"current",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/docs/next/api/class-video"}},p={},u=[{value:"tracing.start(options)",id:"tracing-start",level:2},{value:"tracing.startChunk(options)",id:"tracing-start-chunk",level:2},{value:"tracing.stop(options)",id:"tracing-stop",level:2},{value:"tracing.stopChunk(options)",id:"tracing-stop-chunk",level:2}],h={toc:u};function d(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\nawait context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-tracing#tracing-start"},"tracing.start([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.startChunk([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-tracing#tracing-stop"},"tracing.stop([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stopChunk([options])"))),(0,i.kt)("h2",{id:"tracing-start"},"tracing.start(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," If this option is true tracing will",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,i.kt)("li",{parentName:"ul"},"record network activity"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sources"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to include source files for trace actions.",(0,i.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,i.kt)("h2",{id:"tracing-start-chunk"},"tracing.startChunk(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-tracing#tracing-start"},"tracing.start([options])")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.startChunk([options])")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stopChunk([options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\n\nawait context.tracing.startChunk();\nawait page.click('text=Get Started');\n// Everything between startChunk and stopChunk will be recorded in the trace.\nawait context.tracing.stopChunk({ path: 'trace1.zip' });\n\nawait context.tracing.startChunk();\nawait page.goto('http://example.com');\n// Save a second trace file with different actions.\nawait context.tracing.stopChunk({ path: 'trace2.zip' });\n")),(0,i.kt)("h2",{id:"tracing-stop"},"tracing.stop(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"tracing.stopChunk(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.startChunk([options])")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.startChunk([options])")," for more details about multiple trace chunks."))}d.isMDXComponent=!0}}]);