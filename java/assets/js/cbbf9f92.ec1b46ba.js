"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const h={id:"test-runners",title:"Test Runners"},d=void 0,g={unversionedId:"test-runners",id:"version-1.20/test-runners",title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite Java test runner.",source:"@site/versioned_docs/version-1.20/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/java/docs/1.20/test-runners",tags:[],version:"1.20",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"docs",previous:{title:"Release notes",permalink:"/java/docs/1.20/release-notes"},next:{title:"Auto-waiting",permalink:"/java/docs/1.20/actionability"}},w={},f=[{value:"JUnit",id:"junit",level:2},{value:"Running Tests in Parallel",id:"running-tests-in-parallel",level:3}],m={toc:f};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},m),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite Java test runner."),(0,r.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#junit"}),"JUnit"))),(0,r.kt)("h2",p({},{id:"junit"}),"JUnit"),(0,r.kt)("p",null,"In JUnit you can initialize ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-playwright",title:"Playwright"}),"Playwright")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-browser",title:"Browser"}),"Browser")," in ",(0,r.kt)("a",p({parentName:"p"},{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html"}),"@BeforeAll")," method and destroy them in ",(0,r.kt)("a",p({parentName:"p"},{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html"}),"@AfterAll"),". In the example below all three test methods use the same ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-browser",title:"Browser"}),"Browser"),". Each test uses its own ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-page",title:"Page"}),"Page"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n')),(0,r.kt)("h3",p({},{id:"running-tests-in-parallel"}),"Running Tests in Parallel"),(0,r.kt)("p",null,"By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,r.kt)("a",p({parentName:"p"},{href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution"}),"this page"),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",p({parentName:"p"},{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/TestInstance.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"))," annotation to make JUnit create one instance of a class for all test methods within that class (by default each JUnit will create a new instance of the class for each test method). Store ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-playwright",title:"Playwright"}),"Playwright")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-browser",title:"Browser"}),"Browser")," objects in instance fields. They will be shared between tests. Each instace of the class will use its own copy of Playwright."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'// Subclasses will inherit PER_CLASS behavior.\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass TestFixtures {\n  // Shared between all tests in the class.\n  Playwright playwright;\n  Browser browser;\n\n  @BeforeAll\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n}\n\nclass Test1 extends TestFixtures {\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n\nclass Test2 extends TestFixtures {\n  @Test\n  void shouldReturnInnerHTML() {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton() {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n')),(0,r.kt)("p",null,"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n")))}y.isMDXComponent=!0}}]);