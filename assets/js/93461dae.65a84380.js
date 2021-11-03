"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8043],{99443:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return c},default:function(){return d}});var r=a(87462),l=a(63366),i=(a(67294),a(3905)),n=(a(26396),a(58215),["components"]),o={id:"class-logger",title:"Logger"},s=void 0,g={unversionedId:"api/class-logger",id:"version-1.15/api/class-logger",isDocsHomePage:!1,title:"Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/versioned_docs/version-1.15/api/class-logger.mdx",sourceDirName:"api",slug:"/api/class-logger",permalink:"/docs/1.15/api/class-logger",tags:[],version:"1.15",frontMatter:{id:"class-logger",title:"Logger"},sidebar:"version-1.15/api",previous:{title:"Locator",permalink:"/docs/1.15/api/class-locator"},next:{title:"Mouse",permalink:"/docs/1.15/api/class-mouse"}},c=[{value:"logger.isEnabled(name, severity)",id:"logger-is-enabled",children:[],level:2},{value:"logger.log(name, severity, message, args, hints)",id:"logger-log",children:[],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'browser',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  ...\n})();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-logger#logger-is-enabled"},"logger.isEnabled(name, severity)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-logger#logger-log"},"logger.log(name, severity, message, args, hints)"))),(0,i.kt)("h2",{id:"logger-is-enabled"},"logger.isEnabled(name, severity)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,i.kt)("a",{href:"#logger-is-enabled-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"severity"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,i.kt)("a",{href:"#logger-is-enabled-option-severity",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,i.kt)("a",{href:"#logger-is-enabled-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Determines whether sink is interested in the logger with the given name and severity."),(0,i.kt)("h2",{id:"logger-log"},"logger.log(name, severity, message, args, hints)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,i.kt)("a",{href:"#logger-log-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"severity"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,i.kt)("a",{href:"#logger-log-option-severity",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-message"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"),">"," log message format",(0,i.kt)("a",{href:"#logger-log-option-message",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-args"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," message arguments",(0,i.kt)("a",{href:"#logger-log-option-args",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hints"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-hints"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," optional formatting hints",(0,i.kt)("a",{href:"#logger-log-option-hints",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional preferred logger color."))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#logger-log-return",class:"list-anchor"},"#"))))}d.isMDXComponent=!0}}]);