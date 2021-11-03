"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3766],{8932:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=(n(6396),n(8215),["components"]),s={id:"auth",title:"Authentication"},l=void 0,c={unversionedId:"auth",id:"version-1.14/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.14/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/dotnet/docs/1.14/auth",tags:[],version:"1.14",frontMatter:{id:"auth",title:"Authentication"},sidebar:"version-1.14/docs",previous:{title:"Assertions",permalink:"/dotnet/docs/1.14/assertions"},next:{title:"Browsers",permalink:"/dotnet/docs/1.14/browsers"}},p=[{value:"Automate logging in",id:"automate-logging-in",children:[],level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Code generation",id:"code-generation",children:[],level:3},{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[],level:3},{value:"Lifecycle",id:"lifecycle",children:[],level:3},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,i.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/core-concepts#browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,i.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,i.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/input"},"Input guide")," for more details."),(0,i.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var page = await context.NewPageAsync();\nawait page.NavigateAsync("https://github.com/login");\n// Interact with login form\nawait page.ClickAsync("text=Login");\nawait page.FillAsync("input[name=\'login\']", USERNAME);\nawait page.FillAsync("input[name=\'password\']", PASSWORD);\nawait page.ClickAsync("text=Submit");\n// Verify app is logged in\n')),(0,i.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,i.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,i.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.StorageStateAsync(options)")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,i.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,i.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Save storage state into the file.\nawait context.StorageStateAsync(new BrowserContextStorageStateOptions\n{\n    Path = "state.json"\n});\n\n// Create a new context with the saved storage state.\nvar context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    StorageStatePath = "state.json"\n});\n')),(0,i.kt)("h3",{id:"code-generation"},"Code generation"),(0,i.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,i.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,i.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,i.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,i.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,i.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,i.kt)("p",null,"This approach will also ",(0,i.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.StorageStateAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,i.kt)("h2",{id:"session-storage"},"Session storage"),(0,i.kt)("p",null,"Rarely, ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get session storage and store as env variable\nvar sessionStorage = await page.EvaluateAsync<string>("() => JSON.stringify(sessionStorage");\nEnvironment.SetEnvironmentVariable("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nvar loadedSessionStorage = Environment.GetEnvironmentVariable("SESSION_STORAGE");\nawait context.AddInitScriptAsync(@"(storage => {\n    if (window.location.hostname === \'example.com\') {\n      const entries = JSON.parse(storage);\n      Object.keys(entries).forEach(key => {\n        window.sessionStorage.setItem(key, entries[key]);\n      });\n    }\n  })(" + loadedSessionStorage + ")");\n')),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.StorageStateAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-add-init-script"},"BrowserContext.AddInitScriptAsync(script)"))),(0,i.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,i.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,i.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,i.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,i.kt)("p",null,"User data directories can be used with the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.LaunchPersistentContextAsync(userDataDir, options)")," API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        var context = chromium.LaunchPersistentContextAsync(@"C:\\path\\to\\directory\\", new BrowserTypeLaunchPersistentContextOptions\n        {\n            Headless = false\n        });\n    }\n}\n')),(0,i.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.LaunchPersistentContextAsync(userDataDir, options)"))))}d.isMDXComponent=!0}}]);