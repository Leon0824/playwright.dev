(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5158],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=u(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(t,e,n){"use strict";var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},1395:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(t){var e=t.lazy,n=t.block,c=t.defaultValue,p=t.values,f=t.groupId,m=t.className,d=(0,r.Z)(),h=d.tabGroupChoices,k=d.setTabGroupChoices,g=(0,a.useState)(c),y=g[0],v=g[1],w=a.Children.toArray(t.children),b=[];if(null!=f){var N=h[f];null!=N&&N!==y&&p.some((function(t){return t.value===N}))&&v(N)}var C=function(t){var e=t.currentTarget,n=b.indexOf(e),a=p[n].value;v(a),null!=f&&(k(f,a),setTimeout((function(){var t,n,a,r,i,o,l,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},O=function(t){var e,n;switch(t.keyCode){case u:var a=b.indexOf(t.target)+1;n=b[a]||b[0];break;case l:var r=b.indexOf(t.target)-1;n=b[r]||b[b.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return b.push(t)},onKeyDown:O,onFocus:C,onClick:C},n)}))),e?(0,a.cloneElement)(w.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},9443:function(t,e,n){"use strict";var a=(0,n(7294).createContext)(void 0);e.Z=a},944:function(t,e,n){"use strict";var a=n(7294),r=n(9443);e.Z=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},1843:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"test-annotations",title:"Annotations"}),s={unversionedId:"test-annotations",id:"test-annotations",isDocsHomePage:!1,title:"Annotations",description:"- Annotations",source:"@site/docs/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/python/docs/next/test-annotations",version:"current",frontMatter:{id:"test-annotations",title:"Annotations"}},l=[{value:"Annotations",id:"annotations",children:[]},{value:"Focus a test",id:"focus-a-test",children:[]},{value:"Skip a test",id:"skip-a-test",children:[]},{value:"Group tests",id:"group-tests",children:[]},{value:"Tag tests",id:"tag-tests",children:[]}],u={toc:l};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#annotations"},"Annotations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#focus-a-test"},"Focus a test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#skip-a-test"},"Skip a test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#group-tests"},"Group tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tag-tests"},"Tag tests"))),(0,i.kt)("h2",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Playwright Test supports test annotations to deal with failures, flakiness, skip, focus and tag tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,i.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")),(0,i.kt)("h2",{id:"focus-a-test"},"Focus a test"),(0,i.kt)("p",null,"You can focus some tests. When there are focused tests, only these tests run."),(0,i.kt)("h2",{id:"skip-a-test"},"Skip a test"),(0,i.kt)("p",null,"You can skip certain tests based on the condition."),(0,i.kt)("h2",{id:"group-tests"},"Group tests"),(0,i.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,i.kt)("p",null,"Annotations apply when the condition is truthy, or always when no condition is passed, and may include a description. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,i.kt)("p",null,"Available annotations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,i.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")),(0,i.kt)("h2",{id:"tag-tests"},"Tag tests"),(0,i.kt)("p",null,"Sometimes you want to tag your tests as ",(0,i.kt)("inlineCode",{parentName:"p"},"@fast")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@slow")," and only run the tests that have the certain tag. We recommend that you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--grep")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--grep-invert")," command line flags for that:"),(0,i.kt)("p",null,"You will then be able to run only that test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep @fast\n")),(0,i.kt)("p",null,"Or if you want the opposite, you can skip the tests with a certain tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep-invert @slow\n")))}c.isMDXComponent=!0},6010:function(t,e,n){"use strict";function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);