"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9629],{4339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),l=(n(6396),n(8215),["components"]),o={id:"screenshots",title:"Screenshots"},i=void 0,c={unversionedId:"screenshots",id:"version-1.16/screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.16/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/dotnet/docs/screenshots",tags:[],version:"1.16",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"version-1.16/docs",previous:{title:"Page Object Models",permalink:"/dotnet/docs/pom"},next:{title:"Verification",permalink:"/dotnet/docs/verification"}},u=[{value:"Full page screenshots",id:"full-page-screenshots",children:[],level:2},{value:"Capture into buffer",id:"capture-into-buffer",children:[],level:2},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,r.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,r.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,r.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,r.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,r.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var bytes = await page.ScreenshotAsync();\n")),(0,r.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,r.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var elementHandle = await page.QuerySelectorAsync(".header")\nawait elementHandle.ScreenshotAsync(new ElementHandleScreenshotOptions { Path = "screenshot.png" });\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-screenshot"},"Page.ScreenshotAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-screenshot"},"ElementHandle.ScreenshotAsync(options)"))))}h.isMDXComponent=!0}}]);