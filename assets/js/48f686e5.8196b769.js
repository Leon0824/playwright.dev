"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1900],{98425:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),o={id:"class-tracing",title:"Tracing"},c=void 0,l={unversionedId:"api/class-tracing",id:"version-1.15/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.15/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/docs/1.15/api/class-tracing",tags:[],version:"1.15",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.15/api",previous:{title:"Touchscreen",permalink:"/docs/1.15/api/class-touchscreen"},next:{title:"Video",permalink:"/docs/1.15/api/class-video"}},p=[{value:"tracing.start(options)",id:"tracing-start",children:[],level:2},{value:"tracing.startChunk()",id:"tracing-start-chunk",children:[],level:2},{value:"tracing.stop(options)",id:"tracing-stop",children:[],level:2},{value:"tracing.stopChunk(options)",id:"tracing-stop-chunk",children:[],level:2}],h={toc:p};function d(t){var e=t.components,a=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\nawait context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-tracing#tracing-start"},"tracing.start([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-tracing#tracing-start-chunk"},"tracing.startChunk()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-tracing#tracing-stop"},"tracing.stop([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-tracing#tracing-stop-chunk"},"tracing.stopChunk([options])"))),(0,i.kt)("h2",{id:"tracing-start"},"tracing.start(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to capture DOM snapshot on every action.",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,i.kt)("h2",{id:"tracing-start-chunk"},"tracing.startChunk()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-tracing#tracing-start"},"tracing.start([options])")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-tracing#tracing-start-chunk"},"tracing.startChunk()")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-tracing#tracing-stop-chunk"},"tracing.stopChunk([options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\n\nawait context.tracing.startChunk();\nawait page.click('text=Get Started');\n// Everything between startChunk and stopChunk will be recorded in the trace.\nawait context.tracing.stopChunk({ path: 'trace1.zip' });\n\nawait context.tracing.startChunk();\nawait page.goto('http://example.com');\n// Save a second trace file with different actions.\nawait context.tracing.stopChunk({ path: 'trace2.zip' });\n")),(0,i.kt)("h2",{id:"tracing-stop"},"tracing.stop(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"tracing.stopChunk(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-tracing#tracing-start-chunk"},"tracing.startChunk()")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-tracing#tracing-start-chunk"},"tracing.startChunk()")," for more details about multiple trace chunks."))}d.isMDXComponent=!0}}]);