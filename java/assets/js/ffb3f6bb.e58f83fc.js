"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1933],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),o=n(9366),l=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,p=e.defaultValue,h=e.values,d=e.groupId,f=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=m[0])?void 0:i.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,k=b.setTabGroupChoices,j=(0,a.useState)(v),x=j[0],T=j[1],P=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==x&&g.some((function(e){return e.value===C}))&&T(C)}var B=function(e){var t=e.currentTarget,n=P.indexOf(t),r=g[n].value;r!==x&&(E(t),T(r),null!=d&&k(d,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:N,onFocus:B,onClick:B},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(m.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},3848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(9877),n(8215),["components"]),l={id:"test-runners",title:"Test Runners"},s=void 0,u={unversionedId:"test-runners",id:"version-1.18/test-runners",title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite Java test runner.",source:"@site/versioned_docs/version-1.18/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/java/docs/1.18/test-runners",tags:[],version:"1.18",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.18/docs",previous:{title:"Release notes",permalink:"/java/docs/1.18/release-notes"},next:{title:"Auto-waiting",permalink:"/java/docs/1.18/actionability"}},c={},p=[{value:"JUnit",id:"junit",level:2},{value:"Running Tests in Parallel",id:"running-tests-in-parallel",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite Java test runner."),(0,i.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#junit"},"JUnit"))),(0,i.kt)("h2",{id:"junit"},"JUnit"),(0,i.kt)("p",null,"In JUnit you can initialize ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-browser",title:"Browser"},"Browser")," in ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html"},"@BeforeAll")," method and destroy them in ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html"},"@AfterAll"),". In the example below all three test methods use the same ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-browser",title:"Browser"},"Browser"),". Each test uses its own ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page",title:"Page"},"Page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n')),(0,i.kt)("h3",{id:"running-tests-in-parallel"},"Running Tests in Parallel"),(0,i.kt)("p",null,"By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution"},"this page"),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/TestInstance.html"},(0,i.kt)("inlineCode",{parentName:"a"},"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"))," annotation to make JUnit create one instance of a class for all test methods within that class (by default each JUnit will create a new instance of the class for each test method). Store ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-browser",title:"Browser"},"Browser")," objects in instance fields. They will be shared between tests. Each instace of the class will use its own copy of Playwright."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Subclasses will inherit PER_CLASS behavior.\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass TestFixtures {\n  // Shared between all tests in the class.\n  Playwright playwright;\n  Browser browser;\n\n  @BeforeAll\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n}\n\nclass Test1 extends TestFixtures {\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n\nclass Test2 extends TestFixtures {\n  @Test\n  void shouldReturnInnerHTML() {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton() {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n')),(0,i.kt)("p",null,"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n")))}d.isMDXComponent=!0}}]);