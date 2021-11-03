"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4613],{7489:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var i=t(7462),n=t(3366),l=(t(7294),t(3905)),s=(t(6396),t(8215),["components"]),o={id:"class-dialog",title:"Dialog"},r=void 0,d={unversionedId:"api/class-dialog",id:"version-1.16/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [event Page.Dialog event.",source:"@site/versioned_docs/version-1.16/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/dotnet/docs/api/class-dialog",tags:[],version:"1.16",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.16/api",previous:{title:"ConsoleMessage",permalink:"/dotnet/docs/api/class-consolemessage"},next:{title:"Download",permalink:"/dotnet/docs/api/class-download"}},p=[{value:"Dialog.AcceptAsync(promptText)",id:"dialog-accept",children:[],level:2},{value:"Dialog.DefaultValue",id:"dialog-default-value",children:[],level:2},{value:"Dialog.DismissAsync()",id:"dialog-dismiss",children:[],level:2},{value:"Dialog.Message",id:"dialog-message",children:[],level:2},{value:"Dialog.Type",id:"dialog-type",children:[],level:2}],c={toc:p};function g(e){var a=e.components,t=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-dialog"},"event Page.Dialog")," event."),(0,l.kt)("p",null,"An example of using ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass DialogExample\n{\n    public static async Task Run()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        page.Dialog += async (_, dialog) =>\n        {\n            System.Console.WriteLine(dialog.Message);\n            await dialog.DismissAsync();\n        };\n\n        await page.EvaluateAsync(\"alert('1');\");\n    }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-dialog"},"event Page.Dialog")," listener. When listener is present, it ",(0,l.kt)("strong",{parentName:"p"},"must")," either ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog#dialog-accept"},"Dialog.AcceptAsync(promptText)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog#dialog-dismiss"},"Dialog.DismissAsync()")," the dialog - otherwise the page will ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-accept"},"Dialog.AcceptAsync(promptText)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-default-value"},"Dialog.DefaultValue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-dismiss"},"Dialog.DismissAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-message"},"Dialog.Message")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-type"},"Dialog.Type"))),(0,l.kt)("h2",{id:"dialog-accept"},"Dialog.AcceptAsync(promptText)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"promptText"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,l.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,l.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns when the dialog has been accepted."),(0,l.kt)("h2",{id:"dialog-default-value"},"Dialog.DefaultValue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,l.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,l.kt)("h2",{id:"dialog-dismiss"},"Dialog.DismissAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,l.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns when the dialog has been dismissed."),(0,l.kt)("h2",{id:"dialog-message"},"Dialog.Message"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,l.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"A message displayed in the dialog."),(0,l.kt)("h2",{id:"dialog-type"},"Dialog.Type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,l.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns dialog's type, can be one of ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}g.isMDXComponent=!0}}]);