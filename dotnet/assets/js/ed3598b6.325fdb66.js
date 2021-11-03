"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7447],{2188:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return k},default:function(){return c}});var t=a(7462),n=a(3366),o=(a(7294),a(3905)),l=(a(6396),a(8215),["components"]),i={id:"class-worker",title:"Worker"},s=void 0,p={unversionedId:"api/class-worker",id:"version-1.14/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.14/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/dotnet/docs/1.14/api/class-worker",tags:[],version:"1.14",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.14/api",previous:{title:"WebSocketFrame",permalink:"/dotnet/docs/1.14/api/class-websocketframe"}},k=[{value:"event Worker.Close",id:"worker-event-close",children:[],level:2},{value:"Worker.EvaluateAsync(expression, arg)",id:"worker-evaluate",children:[],level:2},{value:"Worker.EvaluateHandleAsync(expression, arg)",id:"worker-evaluate-handle",children:[],level:2},{value:"Worker.Url",id:"worker-url",children:[],level:2}],d={toc:k};function c(e){var r=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Worker += (_, worker) =>\n{\n    Console.WriteLine($"Worker created: {worker.Url}");\n    worker.Close += (_, _) => Console.WriteLine($"Worker closed {worker.Url}");\n};\n\nConsole.WriteLine("Current Workers:");\nforeach(var pageWorker in page.Workers)\n{\n    Console.WriteLine($"\\tWorker: {pageWorker.Url}");\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-worker#worker-event-close"},"event Worker.Close")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-worker#worker-url"},"Worker.Url"))),(0,o.kt)("h2",{id:"worker-event-close"},"event Worker.Close"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"Worker.EvaluateAsync(expression, arg)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"?",">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"object"),">",(0,o.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"?",">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,o.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate"},"Worker.EvaluateAsync(expression, arg)")," and ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)")," is that ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)")," returns ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-worker#worker-evaluate-handle"},"Worker.EvaluateHandleAsync(expression, arg)")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"Worker.Url"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,o.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}c.isMDXComponent=!0}}]);