"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1143],{14729:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),o={id:"class-tracing",title:"Tracing"},l=void 0,c={unversionedId:"api/class-tracing",id:"version-1.14/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.14/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/docs/1.14/api/class-tracing",tags:[],version:"1.14",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.14/api",previous:{title:"Touchscreen",permalink:"/docs/1.14/api/class-touchscreen"},next:{title:"Video",permalink:"/docs/1.14/api/class-video"}},p=[{value:"tracing.start(options)",id:"tracing-start",children:[],level:2},{value:"tracing.stop(options)",id:"tracing-stop",children:[],level:2}],d={toc:p};function h(t){var e=t.components,a=(0,i.Z)(t,s);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,n.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\nawait context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-tracing#tracing-start"},"tracing.start([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-tracing#tracing-stop"},"tracing.stop([options])"))),(0,n.kt)("h2",{id:"tracing-start"},"tracing.start(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),".",(0,n.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,n.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to capture DOM snapshot on every action.",(0,n.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,n.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Start tracing."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,n.kt)("h2",{id:"tracing-stop"},"tracing.stop(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Export trace into the file with the given name.",(0,n.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,n.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Stop tracing."))}h.isMDXComponent=!0}}]);