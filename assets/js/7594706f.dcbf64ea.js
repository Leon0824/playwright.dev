"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2987],{73010:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),s={id:"class-timeouterror",title:"TimeoutError"},c=void 0,l={unversionedId:"api/class-timeouterror",id:"version-1.14/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.14/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/docs/1.14/api/class-timeouterror",tags:[],version:"1.14",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.14/api",previous:{title:"TestProject",permalink:"/docs/1.14/api/class-testproject"},next:{title:"Location",permalink:"/docs/1.14/api/class-location"}},p=[],u={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"))),(0,a.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const playwright = require(\'playwright\');\n\n(async () => {\n  const browser = await playwright.chromium.launch();\n  const context = await browser.newContext();\n  const page = await context.newPage();\n  try {\n    await page.click("text=Foo", {\n      timeout: 100,\n    })\n  } catch (error) {\n    if (error instanceof playwright.errors.TimeoutError)\n      console.log("Timeout!")\n  }\n  await browser.close();\n})();\n')))}m.isMDXComponent=!0}}]);