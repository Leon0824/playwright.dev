"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6027],{2966:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=t(7462),o=t(3366),s=(t(7294),t(3905)),i=t(6396),r=t(8215),c=["components"],p={id:"chrome-extensions",title:"Chrome Extensions"},d=void 0,l={unversionedId:"chrome-extensions",id:"version-1.14/chrome-extensions",isDocsHomePage:!1,title:"Chrome Extensions",description:"Extensions only work in Chrome / Chromium in non-headless mode.",source:"@site/versioned_docs/version-1.14/chrome-extensions.mdx",sourceDirName:".",slug:"/chrome-extensions",permalink:"/python/docs/1.14/chrome-extensions",tags:[],version:"1.14",frontMatter:{id:"chrome-extensions",title:"Chrome Extensions"},sidebar:"version-1.14/docs",previous:{title:"Browsers",permalink:"/python/docs/1.14/browsers"},next:{title:"Core concepts",permalink:"/python/docs/1.14/core-concepts"}},m=[],h={toc:m};function u(n){var e=n.components,t=(0,o.Z)(n,c);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Extensions only work in Chrome / Chromium in non-headless mode."))),(0,s.kt)("p",null,"The following is code for getting a handle to the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"background page")," of an extension whose source is located in ",(0,s.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\ndef run(playwright):\n    context = playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    background_page = context.background_pages[0]\n    # Test the background page as you would any other page.\n    context.close()\n\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\nasync def run(playwright):\n    context = await playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    background_page = context.background_pages[0]\n    # Test the background page as you would any other page.\n    await context.close()\n\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\n\nasyncio.run(main())\n')))))}u.isMDXComponent=!0}}]);