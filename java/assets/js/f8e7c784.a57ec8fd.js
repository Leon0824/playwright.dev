"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6127],{1544:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var l=t(7462),o=t(3366),n=(t(7294),t(3905)),d=(t(6396),t(8215),["components"]),r={id:"class-download",title:"Download"},i=void 0,s={unversionedId:"api/class-download",id:"version-1.14/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [Page.onDownload(handler) event.",source:"@site/versioned_docs/version-1.14/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/java/docs/1.14/api/class-download",tags:[],version:"1.14",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.14/api",previous:{title:"Dialog",permalink:"/java/docs/1.14/api/class-dialog"},next:{title:"ElementHandle",permalink:"/java/docs/1.14/api/class-elementhandle"}},c=[{value:"Download.cancel()",id:"download-cancel",children:[],level:2},{value:"Download.createReadStream()",id:"download-create-read-stream",children:[],level:2},{value:"Download.delete()",id:"download-delete",children:[],level:2},{value:"Download.failure()",id:"download-failure",children:[],level:2},{value:"Download.page()",id:"download-page",children:[],level:2},{value:"Download.path()",id:"download-path",children:[],level:2},{value:"Download.saveAs(path)",id:"download-save-as",children:[],level:2},{value:"Download.suggestedFilename()",id:"download-suggested-filename",children:[],level:2},{value:"Download.url()",id:"download-url",children:[],level:2}],p={toc:c};function h(a){var e=a.components,t=(0,o.Z)(a,d);return(0,n.kt)("wrapper",(0,l.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-page#page-event-download"},"Page.onDownload(handler)")," event."),(0,n.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,n.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// wait for download to start\nDownload download  = page.waitForDownload(() -> page.click("a"));\n// wait for download to complete\nPath path = download.path();\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// wait for download to start\nDownload download = page.waitForDownload(() -> {\n  page.click("a");\n});\n// wait for download to complete\nPath path = download.path();\n')),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Browser context ",(0,n.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,n.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-cancel"},"Download.cancel()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-create-read-stream"},"Download.createReadStream()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-delete"},"Download.delete()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-failure"},"Download.failure()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-page"},"Download.page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-path"},"Download.path()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-save-as"},"Download.saveAs(path)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-suggested-filename"},"Download.suggestedFilename()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-url"},"Download.url()"))),(0,n.kt)("h2",{id:"download-cancel"},"Download.cancel()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,n.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,n.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,n.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,n.kt)("h2",{id:"download-create-read-stream"},"Download.createReadStream()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-create-read-stream-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html",title:"InputStream"},"InputStream"),">",(0,n.kt)("a",{href:"#download-create-read-stream-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns readable stream for current download or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,n.kt)("h2",{id:"download-delete"},"Download.delete()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,n.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,n.kt)("h2",{id:"download-failure"},"Download.failure()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,n.kt)("h2",{id:"download-page"},"Download.page()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page",title:"Page"},"Page"),">",(0,n.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Get the page that the download belongs to."),(0,n.kt)("h2",{id:"download-path"},"Download.path()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">",(0,n.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,n.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-download#download-suggested-filename"},"Download.suggestedFilename()")," to get suggested file name."),(0,n.kt)("h2",{id:"download-save-as"},"Download.saveAs(path)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Path where the download should be copied.",(0,n.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,n.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,n.kt)("h2",{id:"download-suggested-filename"},"Download.suggestedFilename()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,n.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,n.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,n.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,n.kt)("h2",{id:"download-url"},"Download.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns downloaded url."))}h.isMDXComponent=!0}}]);