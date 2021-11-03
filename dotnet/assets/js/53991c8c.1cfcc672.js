"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3768],{4676:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var s=n(7462),r=n(3366),i=(n(7294),n(3905)),a=(n(6396),n(8215),["components"]),o={id:"class-selectors",title:"Selectors"},l=void 0,c={unversionedId:"api/class-selectors",id:"version-1.16/api/class-selectors",isDocsHomePage:!1,title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/versioned_docs/version-1.16/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/dotnet/docs/api/class-selectors",tags:[],version:"1.16",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"version-1.16/api",previous:{title:"Route",permalink:"/dotnet/docs/api/class-route"},next:{title:"TimeoutError",permalink:"/dotnet/docs/api/class-timeouterror"}},p=[{value:"Selectors.RegisterAsync(name, options)",id:"selectors-register",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/selectors"},"Working with selectors")," for more information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-selectors#selectors-register"},"Selectors.RegisterAsync(name, options)"))),(0,i.kt)("h2",{id:"selectors-register"},"Selectors.RegisterAsync(name, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Name that is used in selectors as a prefix, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,i.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters.",(0,i.kt)("a",{href:"#selectors-register-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"SelectorsRegisterOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContentScript"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-content-script"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines.",(0,i.kt)("a",{href:"#selectors-register-option-content-script",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Script that evaluates to a selector engine instance.",(0,i.kt)("a",{href:"#selectors-register-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Script"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-script"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Script that evaluates to a selector engine instance.",(0,i.kt)("a",{href:"#selectors-register-option-script",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,i.kt)("a",{href:"#selectors-register-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using var playwright = await Playwright.CreateAsync();\n// Script that evaluates to a selector engine instance.\nawait playwright.Selectors.RegisterAsync("tag", @"{\n// Returns the first element matching given selector in the root\'s subtree.\nquery(root, selector) {\n    return root.querySelector(selector);\n  },\n  // Returns all elements matching given selector in the root\'s subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n}");\n\nawait using var browser = await playwright.Chromium.LaunchAsync();\nvar page = await browser.NewPageAsync();\nawait page.SetContentAsync("<div><button>Click me</button></div>");\n// Use the selector prefixed with its name.\nvar button = await page.QuerySelectorAsync("tag=button");\n// Combine it with other selector engines.\nawait page.ClickAsync("tag=div >> text=\\"Click me\\"");\n// Can use it in any methods supporting selectors.\nint buttonCount = await page.EvalOnSelectorAllAsync<int>("tag=button", "buttons => buttons.length");\n')))}m.isMDXComponent=!0}}]);