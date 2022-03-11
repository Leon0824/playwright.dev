"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[54],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,n=new Array(s);n[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var o=2;o<s;o++)n[o]=r[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(67294);function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:l},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(87462),l=r(67294),s=r(72389),n=r(29366),i=r(86010),u="tabItem_LplD";function o(e){var t,r,s,o=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,n.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(s=h[0])?void 0:s.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,n.UB)(),N=y.tabGroupChoices,g=y.setTabGroupChoices,S=(0,l.useState)(b),R=S[0],O=S[1],w=[],T=(0,n.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=N[m];null!=_&&_!==R&&v.some((function(e){return e.value===_}))&&O(_)}var j=function(e){var t=e.currentTarget,r=w.indexOf(t),a=v[r].value;a!==R&&(T(t),O(a),null!=m&&g(m,a))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;r=w[a]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.currentTarget)-1;r=w[l]||w[w.length-1]}null==(t=r)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,r=e.label,s=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:j,onClick:j},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=r?r:t)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function p(e){var t=(0,s.Z)();return l.createElement(o,(0,a.Z)({key:String(t)},e))}},38025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var a=r(87462),l=r(63366),s=(r(67294),r(3905)),n=(r(9877),r(58215),["components"]),i={id:"class-testresult",title:"TestResult"},u=void 0,o={unversionedId:"api/class-testresult",id:"version-1.19/api/class-testresult",title:"TestResult",description:"A result of a single [TestCase] run.",source:"@site/versioned_docs/version-1.19/api/class-testresult.mdx",sourceDirName:"api",slug:"/api/class-testresult",permalink:"/docs/api/class-testresult",tags:[],version:"1.19",frontMatter:{id:"class-testresult",title:"TestResult"},sidebar:"version-1.19/api",previous:{title:"TestCase",permalink:"/docs/api/class-testcase"},next:{title:"TestStep",permalink:"/docs/api/class-teststep"}},p={},c=[{value:"testResult.attachments",id:"test-result-attachments",level:2},{value:"testResult.duration",id:"test-result-duration",level:2},{value:"testResult.error",id:"test-result-error",level:2},{value:"testResult.errors",id:"test-result-errors",level:2},{value:"testResult.retry",id:"test-result-retry",level:2},{value:"testResult.startTime",id:"test-result-start-time",level:2},{value:"testResult.status",id:"test-result-status",level:2},{value:"testResult.stderr",id:"test-result-stderr",level:2},{value:"testResult.stdout",id:"test-result-stdout",level:2},{value:"testResult.steps",id:"test-result-steps",level:2},{value:"testResult.workerIndex",id:"test-result-worker-index",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,l.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A result of a single ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," run."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-attachments"},"testResult.attachments")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-duration"},"testResult.duration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-error"},"testResult.error")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-errors"},"testResult.errors")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-retry"},"testResult.retry")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-start-time"},"testResult.startTime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-status"},"testResult.status")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-stderr"},"testResult.stderr")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-stdout"},"testResult.stdout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-steps"},"testResult.steps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-worker-index"},"testResult.workerIndex"))),(0,s.kt)("h2",{id:"test-result-attachments"},"testResult.attachments"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Attachment name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"contentType")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Content type of this attachment to properly present in the report, for example ",(0,s.kt)("inlineCode",{parentName:"li"},"'application/json'")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"'image/png'"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional path on the filesystem to the attached file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"body")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Optional attachment body used instead of a file.")))),(0,s.kt)("p",null,"The list of files or buffers attached during the test execution through ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-attachments"},"testInfo.attachments"),"."),(0,s.kt)("h2",{id:"test-result-duration"},"testResult.duration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Running time in milliseconds."),(0,s.kt)("h2",{id:"test-result-error"},"testResult.error"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testerror",title:"TestError"},"TestError"),">")),(0,s.kt)("p",null,"First error thrown during test execution, if any. This is equal to the first element in ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-testresult#test-result-errors"},"testResult.errors"),"."),(0,s.kt)("h2",{id:"test-result-errors"},"testResult.errors"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testerror",title:"TestError"},"TestError"),">",">")),(0,s.kt)("p",null,"Errors thrown during the test execution."),(0,s.kt)("h2",{id:"test-result-retry"},"testResult.retry"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"When test is retries multiple times, each retry attempt is given a sequential number."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-retries#retries"},"test retries"),"."),(0,s.kt)("h2",{id:"test-result-start-time"},"testResult.startTime"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,s.kt)("p",null,"Start time of this particular test run."),(0,s.kt)("h2",{id:"test-result-status"},"testResult.status"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,s.kt)("p",null,"The status of this test result. See also ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus"),"."),(0,s.kt)("h2",{id:"test-result-stderr"},"testResult.stderr"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,s.kt)("p",null,"Anything written to the standard error during the test run."),(0,s.kt)("h2",{id:"test-result-stdout"},"testResult.stdout"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,s.kt)("p",null,"Anything written to the standard output during the test run."),(0,s.kt)("h2",{id:"test-result-steps"},"testResult.steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep",title:"TestStep"},"TestStep"),">",">")),(0,s.kt)("p",null,"List of steps inside this test run."),(0,s.kt)("h2",{id:"test-result-worker-index"},"testResult.workerIndex"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Index of the worker where the test was run."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelism and sharding")," with Playwright Test."))}m.isMDXComponent=!0}}]);