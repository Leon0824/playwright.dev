"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9613],{9354:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return u},default:function(){return g}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(6396),s=a(8215),l=["components"],c={id:"trace-viewer",title:"Trace Viewer"},p=void 0,h={unversionedId:"trace-viewer",id:"version-1.16/trace-viewer",isDocsHomePage:!1,title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran.",source:"@site/versioned_docs/version-1.16/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/python/docs/trace-viewer",tags:[],version:"1.16",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"version-1.16/docs",previous:{title:"Screenshots",permalink:"/python/docs/screenshots"},next:{title:"Verification",permalink:"/python/docs/verification"}},u=[{value:"Recording a trace",id:"recording-a-trace",children:[],level:2},{value:"Viewing the trace",id:"viewing-the-trace",children:[],level:2},{value:"Actions",id:"actions",children:[],level:2},{value:"Screenshots",id:"screenshots",children:[],level:2},{value:"Snapshots",id:"snapshots",children:[],level:2},{value:"Viewing remote Traces",id:"viewing-remote-traces",children:[],level:2}],d={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran."),(0,i.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recording-a-trace"},"Recording a trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#viewing-the-trace"},"Viewing the trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#actions"},"Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#screenshots"},"Screenshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#snapshots"},"Snapshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#viewing-remote-traces"},"Viewing remote Traces"))),(0,i.kt)("h2",{id:"recording-a-trace"},"Recording a trace"),(0,i.kt)("p",null,"Traces can be recorded using the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API as follows:"),(0,i.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True)\n\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\n\n# Start tracing before creating / navigating a page.\nawait context.tracing.start(screenshots=True, snapshots=True)\n\nawait page.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("p",null,"This will record the trace and place it into the file named ",(0,i.kt)("inlineCode",{parentName:"p"},"trace.zip"),"."),(0,i.kt)("h2",{id:"viewing-the-trace"},"Viewing the trace"),(0,i.kt)("p",null,"You can open the saved trace using Playwright CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright show-trace trace.zip\n")),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,i.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,i.kt)("p",null,"Selecting each action reveals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"action snapshots,"),(0,i.kt)("li",{parentName:"ul"},"action log,"),(0,i.kt)("li",{parentName:"ul"},"source code location,"),(0,i.kt)("li",{parentName:"ul"},"network log for this action")),(0,i.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,i.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,i.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,i.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,i.kt)("p",null,"That helps locating the action of interest very quickly."),(0,i.kt)("h2",{id:"snapshots"},"Snapshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Before"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the time action is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"After"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot after the action.")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,i.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,i.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."),(0,i.kt)("h2",{id:"viewing-remote-traces"},"Viewing remote Traces"),(0,i.kt)("p",null,"You can open remote traces using it's URL. They could be generated in a CI run and makes it easy to view the remote trace without having to manually download the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright show-trace https://example.com/trace.zip\n")))}g.isMDXComponent=!0}}]);