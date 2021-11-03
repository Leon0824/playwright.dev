"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1343],{86224:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),s=(t(26396),t(58215),["components"]),i={id:"class-jshandle",title:"JSHandle"},o=void 0,d={unversionedId:"api/class-jshandle",id:"version-1.15/api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle(pageFunction[, arg]) method.",source:"@site/versioned_docs/version-1.15/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/docs/1.15/api/class-jshandle",tags:[],version:"1.15",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"version-1.15/api",previous:{title:"Frame",permalink:"/docs/1.15/api/class-frame"},next:{title:"Keyboard",permalink:"/docs/1.15/api/class-keyboard"}},p=[{value:"jsHandle.asElement()",id:"js-handle-as-element",children:[],level:2},{value:"jsHandle.dispose()",id:"js-handle-dispose",children:[],level:2},{value:"jsHandle.evaluate(pageFunction, arg)",id:"js-handle-evaluate",children:[],level:2},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"js-handle-evaluate-handle",children:[],level:2},{value:"jsHandle.getProperties()",id:"js-handle-get-properties",children:[],level:2},{value:"jsHandle.getProperty(propertyName)",id:"js-handle-get-property",children:[],level:2},{value:"jsHandle.jsonValue()",id:"js-handle-json-value",children:[],level:2}],c={toc:p};function h(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),(0,r.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-jshandle#js-handle-dispose"},"jsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,r.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-eval-on-selector"},"page.$eval(selector, pageFunction[, arg, options])"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-as-element"},"jsHandle.asElement()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-dispose"},"jsHandle.dispose()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-evaluate"},"jsHandle.evaluate(pageFunction[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-evaluate-handle"},"jsHandle.evaluateHandle(pageFunction[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-get-properties"},"jsHandle.getProperties()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-get-property"},"jsHandle.getProperty(propertyName)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle#js-handle-json-value"},"jsHandle.jsonValue()"))),(0,r.kt)("h2",{id:"js-handle-as-element"},"jsHandle.asElement()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-as-element-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,r.kt)("a",{href:"#js-handle-as-element-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns either ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,r.kt)("h2",{id:"js-handle-dispose"},"jsHandle.dispose()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-dispose-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,r.kt)("a",{href:"#js-handle-dispose-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,r.kt)("h2",{id:"js-handle-evaluate"},"jsHandle.evaluate(pageFunction","[, arg]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-expression"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the page context.",(0,r.kt)("a",{href:"#js-handle-evaluate-option-expression",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-arg"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,r.kt)("a",{href:"#js-handle-evaluate-option-arg",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,r.kt)("a",{href:"#js-handle-evaluate-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,"This method passes this handle as the first argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate(node => node.innerText)).toBe('10 retweets');\n")),(0,r.kt)("h2",{id:"js-handle-evaluate-handle"},"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-expression"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the page context.",(0,r.kt)("a",{href:"#js-handle-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-arg"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,r.kt)("a",{href:"#js-handle-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,r.kt)("a",{href:"#js-handle-evaluate-handle-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,r.kt)("p",null,"This method passes this handle as the first argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,"The only difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,r.kt)("p",null,"If the function passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")," for more details."),(0,r.kt)("h2",{id:"js-handle-get-properties"},"jsHandle.getProperties()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-properties-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"},"Map"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),">>",">",(0,r.kt)("a",{href:"#js-handle-get-properties-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"The method returns a map with ",(0,r.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),(0,r.kt)("h2",{id:"js-handle-get-property"},"jsHandle.getProperty(propertyName)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"propertyName"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-option-property-name"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," property to get",(0,r.kt)("a",{href:"#js-handle-get-property-option-property-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,r.kt)("a",{href:"#js-handle-get-property-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Fetches a single property from the referenced object."),(0,r.kt)("h2",{id:"js-handle-json-value"},"jsHandle.jsonValue()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-json-value-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,r.kt)("a",{href:"#js-handle-json-value-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,r.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}h.isMDXComponent=!0}}]);