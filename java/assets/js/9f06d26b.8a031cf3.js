"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7544],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(7294);function r(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},9877:function(t,e,a){a.d(e,{Z:function(){return p}});var n=a(7462),r=a(7294),i=a(2389),o=a(9366),l=a(6010),s="tabItem_LplD";function c(t){var e,a,i,c=t.lazy,p=t.block,u=t.defaultValue,h=t.values,d=t.groupId,g=t.className,m=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:m.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,o.lx)(k,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(e=null!=u?u:null==(a=m.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(i=m[0])?void 0:i.props.value;if(null!==f&&!k.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,r.useState)(f),x=y[0],j=y[1],T=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=N[d];null!=O&&O!==x&&k.some((function(t){return t.value===O}))&&j(O)}var S=function(t){var e=t.currentTarget,a=T.indexOf(e),n=k[a].value;n!==x&&(C(e),j(n),null!=d&&w(d,n))},P=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=T.indexOf(t.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;a=T[r]||T[T.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},k.map((function(t){var e=t.value,a=t.label,i=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return T.push(t)},onKeyDown:P,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===e})}),null!=a?a:e)}))),c?(0,r.cloneElement)(m.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function p(t){var e=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(e)},t))}},3889:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=(a(9877),a(8215),["components"]),l={id:"class-tracing",title:"Tracing"},s=void 0,c={unversionedId:"api/class-tracing",id:"api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/java/docs/next/api/class-tracing",tags:[],version:"current",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/java/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/java/docs/next/api/class-video"}},p={},u=[{value:"Tracing.start(options)",id:"tracing-start",level:2},{value:"Tracing.startChunk(options)",id:"tracing-start-chunk",level:2},{value:"Tracing.stop(options)",id:"tracing-stop",level:2},{value:"Tracing.stopChunk(options)",id:"tracing-stop-chunk",level:2}],h={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start"},"Tracing.start([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-stop"},"Tracing.stop([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.stopChunk([options])"))),(0,i.kt)("h2",{id:"tracing-start"},"Tracing.start(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Tracing.StartOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setName"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setScreenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setSnapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," If this option is true tracing will",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,i.kt)("li",{parentName:"ul"},"record network activity"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setSources"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to include source files for trace actions. List of the directories with source code for the application must be provided via ",(0,i.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_JAVA_SRC")," environment variable.",(0,i.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,i.kt)("h2",{id:"tracing-start-chunk"},"Tracing.startChunk(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Tracing.StartChunkOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start"},"Tracing.start([options])")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.stopChunk([options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\ncontext.tracing().startChunk();\npage.click("text=Get Started");\n// Everything between startChunk and stopChunk will be recorded in the trace.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace1.zip")));\n\ncontext.tracing().startChunk();\npage.navigate("http://example.com");\n// Save a second trace file with different actions.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace2.zip")));\n')),(0,i.kt)("h2",{id:"tracing-stop"},"Tracing.stop(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Tracing.StopOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setPath"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"Tracing.stopChunk(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Tracing.StopChunkOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setPath"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.startChunk([options])")," for more details about multiple trace chunks."))}d.isMDXComponent=!0}}]);