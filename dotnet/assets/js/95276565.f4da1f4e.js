"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[348],{9507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=(n(6396),n(8215),["components"]),l={id:"test-runners",title:"Test Runners"},o=void 0,u={unversionedId:"test-runners",id:"version-1.15/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for our tests.",source:"@site/versioned_docs/version-1.15/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/dotnet/docs/1.15/test-runners",tags:[],version:"1.15",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.15/docs",previous:{title:"Release notes",permalink:"/dotnet/docs/1.15/release-notes"},next:{title:"Auto-waiting",permalink:"/dotnet/docs/1.15/actionability"}},p=[{value:"Creating an NUnit project",id:"creating-an-nunit-project",children:[],level:2},{value:"Running NUnit tests in Parallel",id:"running-nunit-tests-in-parallel",children:[],level:2},{value:"Using Verbose API Logs with NUnit",id:"using-verbose-api-logs-with-nunit",children:[],level:2},{value:"Using the .runsettings file",id:"using-the-runsettings-file",children:[],level:2},{value:"Base NUnit classes for Playwright",id:"base-nunit-classes-for-playwright",children:[],level:2},{value:"xUnit support",id:"xunit-support",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-dotnet/tree/main/src/Playwright.Tests"},"our tests"),"."),(0,i.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-an-nunit-project"},"Creating an NUnit project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-verbose-api-logs-with-nunit"},"Using Verbose API Logs with NUnit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-the-runsettings-file"},"Using the .runsettings file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#xunit-support"},"xUnit support"))),(0,i.kt)("h2",{id:"creating-an-nunit-project"},"Creating an NUnit project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new project\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n# Add the required reference\ndotnet add package Microsoft.Playwright.NUnit\ndotnet build\n# Install the required pre-requisites\nplaywright install\n")),(0,i.kt)("p",null,"Create a PageTests.cs file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class MyTest : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Run your tests against Chromium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test\n")),(0,i.kt)("p",null,"Run your tests against WebKit"),(0,i.kt)("p",null,"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set BROWSER=webkit\ndotnet test\n")),(0,i.kt)("p",null,"Linux & Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BROWSER=webkit dotnet test\n")),(0,i.kt)("p",null,"Run your tests with GUI"),(0,i.kt)("p",null,"Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set HEADED=1\ndotnet test\n")),(0,i.kt)("p",null,"Linux & Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HEADED=1 dotnet test\n")),(0,i.kt)("p",null,"You can also choose specifically which tests to run, using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=nunit"},"filtering capabilities"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dotnet test --filter "Name~ShouldAdd"\n')),(0,i.kt)("h2",{id:"running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel"),(0,i.kt)("p",null,"By default NUnit will run all test files in parallel, while running tests inside each file sequentially. It will create as many processes as there are cores on the host system. You can adjust this behavior using the NUnit.NumberOfTestWorkers parameter."),(0,i.kt)("p",null,"For CPU-bound tests, we recommend using as many workers as there are cores on your system, divided by 2. For IO-bound tests you can use as many workers as you have cores."),(0,i.kt)("h2",{id:"using-verbose-api-logs-with-nunit"},"Using Verbose API Logs with NUnit"),(0,i.kt)("p",null,"When you have enabled the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.15/debug#verbose-api-logs"},"verbose API log"),", via the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable, you will see the messages in the standard error stream. In NUnit, within Visual Studio, that will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tests")," pane of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," window. It will also be displayed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Log")," for each test."),(0,i.kt)("h2",{id:"using-the-runsettings-file"},"Using the .runsettings file"),(0,i.kt)("p",null,"When running tests from Visual Studio, you can take advantage of the ",(0,i.kt)("inlineCode",{parentName:"p"},".runsettings")," file."),(0,i.kt)("p",null,"For example, to specify the amount of workers (",(0,i.kt)("inlineCode",{parentName:"p"},"NUnit.NumberOfTestWorkers"),"), you can use the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <NUnit>\n    <NumberOfTestWorkers>24</NumberOfTestWorkers>\n  </NUnit>\n</RunSettings>\n')),(0,i.kt)("p",null,"If you want to enable debugging, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"pw:api")," as documented, by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <RunConfiguration>\n    <EnvironmentVariables>\n      <DEBUG>pw:api</DEBUG>\n    </EnvironmentVariables>\n  </RunConfiguration>\n</RunSettings>\n')),(0,i.kt)("h2",{id:"base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright"),(0,i.kt)("p",null,"There are few base classes available to you in Microsoft.Playwright.NUnit namespace:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Test"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PageTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test gets a fresh copy of a web ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.15/api/class-page",title:"Page"},"Page")," created in its own unique ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.15/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". Extending this class is the simplest way of writing a fully-functional Playwright test.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: You can override the ",(0,i.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.15/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test will get a fresh copy of a ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.15/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". You can create as many pages in this context as you'd like. Using this test is the easiest way to test multi-page scenarios where you need more than one tab.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: You can override the ",(0,i.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.15/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BrowserTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test will get a browser and can create as many contexts as it likes. Each test is responsible for cleaning up all the contexts it created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PlaywrightTest"),(0,i.kt)("td",{parentName:"tr",align:null},"This gives each test a Playwright object so that the test could start and stop as many browsers as it likes.")))),(0,i.kt)("h2",{id:"xunit-support"},"xUnit support"),(0,i.kt)("p",null,"While using xUnit is also supported, we do not support running parallel tests. This is a well known problem/design limitation outlined by the maintainers across ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xunit/xunit/issues/2003"},"several")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xunit/xunit/issues/2111#issuecomment-650004247"},"issues"),"."))}d.isMDXComponent=!0}}]);