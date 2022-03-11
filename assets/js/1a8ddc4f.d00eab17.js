"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7343],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return k}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),k=n,v=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return t?a.createElement(v,l(l({ref:r},c),{},{components:t})):a.createElement(v,l({ref:r},c))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(67294);function n(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(87462),n=t(67294),o=t(72389),l=t(29366),i=t(86010),s="tabItem_LplD";function u(e){var r,t,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,k=e.groupId,v=e.className,m=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:m.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),h=(0,l.lx)(f,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(r=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(o=m[0])?void 0:o.props.value;if(null!==w&&!f.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),b=g.tabGroupChoices,N=g.setTabGroupChoices,y=(0,n.useState)(w),S=y[0],O=y[1],j=[],W=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=b[k];null!=x&&x!==S&&f.some((function(e){return e.value===x}))&&O(x)}var P=function(e){var r=e.currentTarget,t=j.indexOf(r),a=f[t].value;a!==S&&(W(r),O(a),null!=k&&N(k,a))},F=function(e){var r,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var r=e.value,t=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===r?0:-1,"aria-selected":S===r,key:r,ref:function(e){return j.push(e)},onKeyDown:F,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":S===r})}),null!=t?t:r)}))),u?(0,n.cloneElement)(m.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==S})}))))}function c(e){var r=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(r)},e))}},22271:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),l=(t(9877),t(58215),["components"]),i={id:"class-worker",title:"Worker"},s=void 0,u={unversionedId:"api/class-worker",id:"version-1.18/api/class-worker",title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.18/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/docs/1.18/api/class-worker",tags:[],version:"1.18",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.18/api",previous:{title:"WebSocket",permalink:"/docs/1.18/api/class-websocket"},next:{title:"Fixtures",permalink:"/docs/1.18/api/class-fixtures"}},c={},p=[{value:"worker.on(&#39;close&#39;)",id:"worker-event-close",level:2},{value:"worker.evaluate(pageFunction, arg)",id:"worker-evaluate",level:2},{value:"worker.evaluateHandle(pageFunction, arg)",id:"worker-evaluate-handle",level:2},{value:"worker.url()",id:"worker-url",level:2}],d={toc:p};function k(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-worker#worker-event-close"},"worker.on('close')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-worker#worker-evaluate-handle"},"worker.evaluateHandle(pageFunction[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-worker#worker-url"},"worker.url()"))),(0,o.kt)("h2",{id:"worker-event-close"},"worker.on('close')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"worker.evaluate(pageFunction","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the worker context.",(0,o.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,o.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,o.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"worker.evaluateHandle(pageFunction","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Function to be evaluated in the worker context.",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,o.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate"},"worker.evaluate(pageFunction[, arg])")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate-handle"},"worker.evaluateHandle(pageFunction[, arg])")," is that ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate-handle"},"worker.evaluateHandle(pageFunction[, arg])")," returns ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate-handle"},"worker.evaluateHandle(pageFunction[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-worker#worker-evaluate-handle"},"worker.evaluateHandle(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"worker.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,o.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}k.isMDXComponent=!0}}]);