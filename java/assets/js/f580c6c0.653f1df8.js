"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9213],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),o=n(2389),i=n(9366),s=n(6010),l="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,h=e.groupId,m=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!f.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),k=b.tabGroupChoices,y=b.setTabGroupChoices,x=(0,r.useState)(w),N=x[0],S=x[1],P=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=k[h];null!=j&&j!==N&&f.some((function(e){return e.value===j}))&&S(j)}var O=function(e){var t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==N&&(T(t),S(a),null!=h&&y(h,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),s={id:"auth",title:"Authentication"},l=void 0,c={unversionedId:"auth",id:"version-1.19/auth",title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.19/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/java/docs/auth",tags:[],version:"1.19",frontMatter:{id:"auth",title:"Authentication"},sidebar:"version-1.19/docs",previous:{title:"Assertions",permalink:"/java/docs/assertions"},next:{title:"Browsers",permalink:"/java/docs/browsers"}},u={},p=[{value:"Automate logging in",id:"automate-logging-in",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Session storage",id:"session-storage",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:2},{value:"Persistent authentication",id:"persistent-authentication",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"API reference",id:"api-reference-2",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,o.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,o.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,o.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/input"},"Input guide")," for more details."),(0,o.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Page page = context.newPage();\npage.navigate("https://github.com/login");\n// Interact with login form\npage.click("text=Login");\npage.fill("input[name=\'login\']", USERNAME);\npage.fill("input[name=\'password\']", PASSWORD);\npage.click("text=Submit");\n// Verify app is logged in\n')),(0,o.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,o.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,o.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,o.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,o.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Save storage state into the file.\ncontext.storageState(new BrowserContext.StorageStateOptions().setPath(Paths.get("state.json")));\n\n// Create a new context with the saved storage state.\nBrowserContext context = browser.newContext(\n  new Browser.NewContextOptions().setStorageStatePath(Paths.get("state.json")));\n')),(0,o.kt)("h3",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,o.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,o.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,o.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,o.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,o.kt)("p",null,"This approach will also ",(0,o.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("h2",{id:"session-storage"},"Session storage"),(0,o.kt)("p",null,"Rarely, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Get session storage and store as env variable\nString sessionStorage = (String) page.evaluate("JSON.stringify(sessionStorage)");\nSystem.getenv().put("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nString sessionStorage = System.getenv("SESSION_STORAGE");\ncontext.addInitScript("(storage => {\\n" +\n  "  if (window.location.hostname === \'example.com\') {\\n" +\n  "    const entries = JSON.parse(storage);\\n" +\n  "     for (const [key, value] of Object.entries(entries)) {\\n" +\n  "      window.sessionStorage.setItem(key, value);\\n" +\n  "    };\\n" +\n  "  }\\n" +\n  "})(\'" + sessionStorage + "\')");\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-add-init-script"},"BrowserContext.addInitScript(script)"))),(0,o.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,o.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,o.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,o.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,o.kt)("p",null,"User data directories can be used with the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.launchPersistentContext(userDataDir[, options])")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Path userDataDir = Paths.get("/path/to/directory");\n      BrowserContext context = chromium.launchPersistentContext(userDataDir,\n        new BrowserType.LaunchPersistentContextOptions().setHeadless(false));\n      // Execute login steps manually in the browser window\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a user data directory on disk."),(0,o.kt)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),(0,o.kt)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.launchPersistentContext(userDataDir[, options])"))))}h.isMDXComponent=!0}}]);