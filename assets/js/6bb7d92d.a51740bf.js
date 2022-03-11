"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8406],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),c=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?s.createElement(f,l(l({ref:t},u),{},{components:a})):s.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var s=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(87462),n=a(67294),r=a(72389),l=a(29366),i=a(86010),o="tabItem_LplD";function c(e){var t,a,r,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),y=N.tabGroupChoices,x=N.setTabGroupChoices,g=(0,n.useState)(b),C=g[0],S=g[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=y[m];null!=w&&w!==C&&k.some((function(e){return e.value===w}))&&S(w)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),s=k[a].value;s!==C&&(T(t),S(s),null!=m&&x(m,s))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var s=O.indexOf(e.currentTarget)+1;a=O[s]||O[0];break;case"ArrowLeft":var n=O.indexOf(e.currentTarget)-1;a=O[n]||O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:j,onClick:j},r,{className:(0,i.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),c?(0,n.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,r.Z)();return n.createElement(c,(0,s.Z)({key:String(t)},e))}},89694:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var s=a(87462),n=a(63366),r=(a(67294),a(3905)),l=(a(9877),a(58215),["components"]),i={id:"class-testcase",title:"TestCase"},o=void 0,c={unversionedId:"api/class-testcase",id:"api/class-testcase",title:"TestCase",description:"TestCase corresponds to every test(title, testFunction) call in a test file. When a single test(title, testFunction) is running in multiple projects or repeated multiple times, it will have multiple TestCase objects in corresponding projects' suites.",source:"@site/docs/api/class-testcase.mdx",sourceDirName:"api",slug:"/api/class-testcase",permalink:"/docs/next/api/class-testcase",tags:[],version:"current",frontMatter:{id:"class-testcase",title:"TestCase"},sidebar:"api",previous:{title:"Suite",permalink:"/docs/next/api/class-suite"},next:{title:"TestResult",permalink:"/docs/next/api/class-testresult"}},u={},p=[{value:"testCase.ok()",id:"test-case-ok",level:2},{value:"testCase.outcome()",id:"test-case-outcome",level:2},{value:"testCase.titlePath()",id:"test-case-title-path",level:2},{value:"testCase.annotations",id:"test-case-annotations",level:2},{value:"testCase.expectedStatus",id:"test-case-expected-status",level:2},{value:"testCase.location",id:"test-case-location",level:2},{value:"testCase.parent",id:"test-case-parent",level:2},{value:"testCase.repeatEachIndex",id:"test-case-repeat-each-index",level:2},{value:"testCase.results",id:"test-case-results",level:2},{value:"testCase.retries",id:"test-case-retries",level:2},{value:"testCase.timeout",id:"test-case-timeout",level:2},{value:"testCase.title",id:"test-case-title",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," corresponds to every ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call in a test file. When a single ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," is running in multiple projects or repeated multiple times, it will have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," objects in corresponding projects' suites."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-ok"},"testCase.ok()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-outcome"},"testCase.outcome()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title-path"},"testCase.titlePath()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-annotations"},"testCase.annotations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-location"},"testCase.location")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-parent"},"testCase.parent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-repeat-each-index"},"testCase.repeatEachIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-results"},"testCase.results")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-retries"},"testCase.retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-timeout"},"testCase.timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title"},"testCase.title"))),(0,r.kt)("h2",{id:"test-case-ok"},"testCase.ok()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-ok-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,r.kt)("a",{href:"#test-case-ok-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Whether the test is considered running fine. Non-ok tests fail the test run with non-zero exit code."),(0,r.kt)("h2",{id:"test-case-outcome"},"testCase.outcome()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-outcome-return"})," ","<",'"skipped"|"expected"|"unexpected"|"flaky"',">",(0,r.kt)("a",{href:"#test-case-outcome-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Testing outcome for this test. Note that outcome is not the same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test that is expected to fail and actually fails is ",(0,r.kt)("inlineCode",{parentName:"li"},"'expected'"),"."),(0,r.kt)("li",{parentName:"ul"},"Test that passes on a second retry is ",(0,r.kt)("inlineCode",{parentName:"li"},"'flaky'"),".")),(0,r.kt)("h2",{id:"test-case-title-path"},"testCase.titlePath()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-title-path-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,r.kt)("a",{href:"#test-case-title-path-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns a list of titles from the root down to this test."),(0,r.kt)("h2",{id:"test-case-annotations"},"testCase.annotations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Annotation type, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"'skip'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'fail'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional description.")))),(0,r.kt)("p",null,"The list of annotations applicable to the current test. Includes annotations from the test, annotations from all ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe"},"test.describe(title, callback)")," groups the test belongs to and file-level annotations for the test file."),(0,r.kt)("p",null,"Annotations are available during test execution through ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-annotations"},"testInfo.annotations"),"."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-annotations"},"test annotations"),"."),(0,r.kt)("h2",{id:"test-case-expected-status"},"testCase.expectedStatus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,r.kt)("p",null,"Expected test status."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tests marked as ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-skip-1"},"test.skip(title, testFunction)")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fixme-1"},"test.fixme(title, testFunction)")," are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'skipped'"),"."),(0,r.kt)("li",{parentName:"ul"},"Tests marked as ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fail"},"test.fail([condition, description])")," are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'failed'"),"."),(0,r.kt)("li",{parentName:"ul"},"Other tests are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'passed'"),".")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status")," for the actual status."),(0,r.kt)("h2",{id:"test-case-location"},"testCase.location"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-location",title:"Location"},"Location"),">")),(0,r.kt)("p",null,"Location in the source where the test is defined."),(0,r.kt)("h2",{id:"test-case-parent"},"testCase.parent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-suite",title:"Suite"},"Suite"),">")),(0,r.kt)("p",null,"Suite this test case belongs to."),(0,r.kt)("h2",{id:"test-case-repeat-each-index"},"testCase.repeatEachIndex"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,r.kt)("p",null,'Contains the repeat index when running in "repeat each" mode. This mode is enabled by passing ',(0,r.kt)("inlineCode",{parentName:"p"},"--repeat-each")," to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-cli"},"command line"),"."),(0,r.kt)("h2",{id:"test-case-results"},"testCase.results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">",">")),(0,r.kt)("p",null,"Results for each run of this test."),(0,r.kt)("h2",{id:"test-case-retries"},"testCase.retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,r.kt)("p",null,"The maximum number of retries given to this test in the configuration."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-retries#retries"},"test retries"),"."),(0,r.kt)("h2",{id:"test-case-timeout"},"testCase.timeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,r.kt)("p",null,"The timeout given to the test. Affected by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig#test-config-timeout"},"testConfig.timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-timeout"},"testProject.timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-slow"},"test.slow([condition, description])")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-set-timeout"},"testInfo.setTimeout(timeout)"),"."),(0,r.kt)("h2",{id:"test-case-title"},"testCase.title"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,r.kt)("p",null,"Test title as passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call."))}m.isMDXComponent=!0}}]);