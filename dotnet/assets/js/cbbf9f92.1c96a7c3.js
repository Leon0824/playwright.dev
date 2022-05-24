"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3633],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,h=d["".concat(o,".").concat(g)]||d[g]||c[g]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"test-runners",title:"Test Runners"},g=void 0,h={unversionedId:"test-runners",id:"version-1.20/test-runners",title:"Test Runners",description:"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for our tests.",source:"@site/versioned_docs/version-1.20/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/dotnet/docs/1.20/test-runners",tags:[],version:"1.20",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"docs",previous:{title:"Release notes",permalink:"/dotnet/docs/1.20/release-notes"},next:{title:"Auto-waiting",permalink:"/dotnet/docs/1.20/actionability"}},m={},f=[{value:"Creating an NUnit project",id:"creating-an-nunit-project",level:2},{value:"Running NUnit tests in Parallel",id:"running-nunit-tests-in-parallel",level:2},{value:"Using Verbose API Logs with NUnit",id:"using-verbose-api-logs-with-nunit",level:2},{value:"Using the .runsettings file",id:"using-the-runsettings-file",level:2},{value:"Base NUnit classes for Playwright",id:"base-nunit-classes-for-playwright",level:2},{value:"xUnit support",id:"xunit-support",level:2}],k={toc:f};function y(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),p),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/microsoft/playwright-dotnet/tree/main/src/Playwright.Tests"}),"our tests"),"."),(0,r.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#creating-an-nunit-project"}),"Creating an NUnit project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#running-nunit-tests-in-parallel"}),"Running NUnit tests in Parallel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#using-verbose-api-logs-with-nunit"}),"Using Verbose API Logs with NUnit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#using-the-runsettings-file"}),"Using the .runsettings file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#base-nunit-classes-for-playwright"}),"Base NUnit classes for Playwright")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#xunit-support"}),"xUnit support"))),(0,r.kt)("h2",c({},{id:"creating-an-nunit-project"}),"Creating an NUnit project"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Create a new project\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n# Add the required reference\ndotnet add package Microsoft.Playwright.NUnit\ndotnet build\n# Install the required pre-requisites\nplaywright install\n")),(0,r.kt)("p",null,"Create a PageTests.cs file."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class MyTest : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Run your tests against Chromium"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"dotnet test\n")),(0,r.kt)("p",null,"Run your tests against WebKit"),(0,r.kt)("p",null,"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"set BROWSER=webkit\ndotnet test\n")),(0,r.kt)("p",null,"Linux & Mac"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"BROWSER=webkit dotnet test\n")),(0,r.kt)("p",null,"Run your tests with GUI"),(0,r.kt)("p",null,"Window"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"set HEADED=1\ndotnet test\n")),(0,r.kt)("p",null,"Linux & Mac"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"HEADED=1 dotnet test\n")),(0,r.kt)("p",null,"You can also choose specifically which tests to run, using the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=nunit"}),"filtering capabilities"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "Name~ShouldAdd"\n')),(0,r.kt)("h2",c({},{id:"running-nunit-tests-in-parallel"}),"Running NUnit tests in Parallel"),(0,r.kt)("p",null,"By default NUnit will run all test files in parallel, while running tests inside each file sequentially. It will create as many processes as there are cores on the host system. You can adjust this behavior using the NUnit.NumberOfTestWorkers parameter."),(0,r.kt)("p",null,"For CPU-bound tests, we recommend using as many workers as there are cores on your system, divided by 2. For IO-bound tests you can use as many workers as you have cores."),(0,r.kt)("h2",c({},{id:"using-verbose-api-logs-with-nunit"}),"Using Verbose API Logs with NUnit"),(0,r.kt)("p",null,"When you have enabled the ",(0,r.kt)("a",c({parentName:"p"},{href:"/dotnet/docs/1.20/debug#verbose-api-logs"}),"verbose API log"),", via the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable, you will see the messages in the standard error stream. In NUnit, within Visual Studio, that will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tests")," pane of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," window. It will also be displayed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Log")," for each test."),(0,r.kt)("h2",c({},{id:"using-the-runsettings-file"}),"Using the .runsettings file"),(0,r.kt)("p",null,"When running tests from Visual Studio, you can take advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},".runsettings")," file."),(0,r.kt)("p",null,"For example, to specify the amount of workers (",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.NumberOfTestWorkers"),"), you can use the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <NUnit>\n    <NumberOfTestWorkers>24</NumberOfTestWorkers>\n  </NUnit>\n</RunSettings>\n')),(0,r.kt)("p",null,"If you want to enable debugging, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"pw:api")," as documented, by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <RunConfiguration>\n    <EnvironmentVariables>\n      <DEBUG>pw:api</DEBUG>\n    </EnvironmentVariables>\n  </RunConfiguration>\n</RunSettings>\n')),(0,r.kt)("h2",c({},{id:"base-nunit-classes-for-playwright"}),"Base NUnit classes for Playwright"),(0,r.kt)("p",null,"There are few base classes available to you in Microsoft.Playwright.NUnit namespace:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Test"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"PageTest"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Each test gets a fresh copy of a web ",(0,r.kt)("a",c({parentName:"td"},{href:"/dotnet/docs/1.20/api/class-page",title:"Page"}),"Page")," created in its own unique ",(0,r.kt)("a",c({parentName:"td"},{href:"/dotnet/docs/1.20/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),". Extending this class is the simplest way of writing a fully-functional Playwright test.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: You can override the ",(0,r.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,r.kt)("a",c({parentName:"td"},{href:"/dotnet/docs/1.20/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ContextTest"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Each test will get a fresh copy of a ",(0,r.kt)("a",c({parentName:"td"},{href:"/dotnet/docs/1.20/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),". You can create as many pages in this context as you'd like. Using this test is the easiest way to test multi-page scenarios where you need more than one tab.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: You can override the ",(0,r.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,r.kt)("a",c({parentName:"td"},{href:"/dotnet/docs/1.20/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"BrowserTest"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Each test will get a browser and can create as many contexts as it likes. Each test is responsible for cleaning up all the contexts it created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"PlaywrightTest"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"This gives each test a Playwright object so that the test could start and stop as many browsers as it likes.")))),(0,r.kt)("h2",c({},{id:"xunit-support"}),"xUnit support"),(0,r.kt)("p",null,"While using xUnit is also supported, we do not support running parallel tests. This is a well known problem/design limitation outlined by the maintainers across ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/xunit/xunit/issues/2003"}),"several")," ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/xunit/xunit/issues/2111#issuecomment-650004247"}),"issues"),"."))}y.isMDXComponent=!0}}]);