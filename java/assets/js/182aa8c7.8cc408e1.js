"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6886],{1958:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=(r(6396),r(8215),["components"]),s={id:"class-timeouterror",title:"TimeoutError"},c=void 0,l={unversionedId:"api/class-timeouterror",id:"api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [PlaywrightException]",source:"@site/docs/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/java/docs/next/api/class-timeouterror",tags:[],version:"current",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/java/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/java/docs/next/api/class-touchscreen"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-playwrightexception",title:"PlaywrightException"},"PlaywrightException"))),(0,n.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-wait-for-selector"},"Page.waitForSelector(selector[, options])")," or ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class TimeoutErrorExample {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.firefox().launch();\n      BrowserContext context = browser.newContext();\n      Page page = context.newPage();\n      try {\n        page.click("text=Example", new Page.ClickOptions().setTimeout(100));\n      } catch (TimeoutError e) {\n        System.out.println("Timeout!");\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);