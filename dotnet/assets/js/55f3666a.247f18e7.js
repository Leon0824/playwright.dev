"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[82],{3076:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return r},toc:function(){return c},default:function(){return u}});var n=t(7462),o=t(3366),l=(t(7294),t(3905)),d=(t(6396),t(8215),["components"]),s={id:"class-download",title:"Download"},i=void 0,r={unversionedId:"api/class-download",id:"version-1.16/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [event Page.Download event.",source:"@site/versioned_docs/version-1.16/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/dotnet/docs/api/class-download",tags:[],version:"1.16",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.16/api",previous:{title:"Dialog",permalink:"/dotnet/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/dotnet/docs/api/class-elementhandle"}},c=[{value:"Download.CancelAsync()",id:"download-cancel",children:[],level:2},{value:"Download.CreateReadStreamAsync()",id:"download-create-read-stream",children:[],level:2},{value:"Download.DeleteAsync()",id:"download-delete",children:[],level:2},{value:"Download.FailureAsync()",id:"download-failure",children:[],level:2},{value:"Download.Page",id:"download-page",children:[],level:2},{value:"Download.PathAsync()",id:"download-path",children:[],level:2},{value:"Download.SaveAsAsync(path)",id:"download-save-as",children:[],level:2},{value:"Download.SuggestedFilename",id:"download-suggested-filename",children:[],level:2},{value:"Download.Url",id:"download-url",children:[],level:2}],p={toc:c};function u(e){var a=e.components,t=(0,o.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-download"},"event Page.Download")," event."),(0,l.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var download = await page.RunAndWaitForDownloadAsync(async () =>\n{\n    await page.ClickAsync("#downloadButton");\n});\nConsole.WriteLine(await download.PathAsync());\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Browser context ",(0,l.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-cancel"},"Download.CancelAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-create-read-stream"},"Download.CreateReadStreamAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-delete"},"Download.DeleteAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-failure"},"Download.FailureAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-page"},"Download.Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-path"},"Download.PathAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-save-as"},"Download.SaveAsAsync(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-suggested-filename"},"Download.SuggestedFilename")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-url"},"Download.Url"))),(0,l.kt)("h2",{id:"download-cancel"},"Download.CancelAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,l.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,l.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,l.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,l.kt)("h2",{id:"download-create-read-stream"},"Download.CreateReadStreamAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-create-read-stream-return"})," ","<","[Stream]","?",">",(0,l.kt)("a",{href:"#download-create-read-stream-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns readable stream for current download or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,l.kt)("h2",{id:"download-delete"},"Download.DeleteAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,l.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-failure"},"Download.FailureAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">",(0,l.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-page"},"Download.Page"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page",title:"Page"},"Page"),">",(0,l.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",{id:"download-path"},"Download.PathAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">",(0,l.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-download#download-suggested-filename"},"Download.SuggestedFilename")," to get suggested file name."),(0,l.kt)("h2",{id:"download-save-as"},"Download.SaveAsAsync(path)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Path where the download should be copied.",(0,l.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,l.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-suggested-filename"},"Download.SuggestedFilename"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,l.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",{id:"download-url"},"Download.Url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,l.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns downloaded url."))}u.isMDXComponent=!0}}]);