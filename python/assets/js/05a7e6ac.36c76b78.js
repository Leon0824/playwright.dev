"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8445],{2647:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return k},default:function(){return d}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),l=(t(6396),t(8215),["components"]),s={id:"class-worker",title:"Worker"},i=void 0,p={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/python/docs/next/api/class-worker",tags:[],version:"current",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"api",previous:{title:"WebSocket",permalink:"/python/docs/next/api/class-websocket"}},k=[{value:"worker.on(&quot;close&quot;)",id:"worker-event-close",children:[],level:2},{value:"worker.evaluate(expression, **kwargs)",id:"worker-evaluate",children:[],level:2},{value:"worker.evaluate_handle(expression, **kwargs)",id:"worker-evaluate-handle",children:[],level:2},{value:"worker.url",id:"worker-url",children:[],level:2}],u={toc:k};function d(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def handle_worker(worker):\n    print("worker created: " + worker.url)\n    worker.on("close", lambda: print("worker destroyed: " + worker.url))\n\npage.on(\'worker\', handle_worker)\n\nprint("current workers:")\nfor worker in page.workers:\n    print("    " + worker.url)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-worker#worker-event-close"},'worker.on("close")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-worker#worker-url"},"worker.url"))),(0,o.kt)("h2",{id:"worker-event-close"},'worker.on("close")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"worker.evaluate(expression, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,o.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,o.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," and ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," is that ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," returns ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"worker.url"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}d.isMDXComponent=!0}}]);