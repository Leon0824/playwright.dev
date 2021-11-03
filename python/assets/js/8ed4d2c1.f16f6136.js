"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3539],{1507:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return y}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(6396),i=t(8215),s=["components"],c={id:"emulation",title:"Emulation"},p=void 0,u={unversionedId:"emulation",id:"version-1.15/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.15/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/python/docs/1.15/emulation",tags:[],version:"1.15",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"version-1.15/docs",previous:{title:"Element selectors",permalink:"/python/docs/1.15/selectors"},next:{title:"Events",permalink:"/python/docs/1.15/events"}},m=[{value:"Devices",id:"devices",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2}],d={toc:m};function y(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,r.kt)("li",{parentName:"ul"},"locale, timezone"),(0,r.kt)("li",{parentName:"ul"},"color scheme"),(0,r.kt)("li",{parentName:"ul"},"geolocation")),(0,r.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#devices"},"Devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#user-agent"},"User agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#viewport"},"Viewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#locale--timezone"},"Locale & timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#permissions"},"Permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#geolocation"},"Geolocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#color-scheme-and-media"},"Color scheme and media"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"devices"},"Devices"),(0,r.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = playwright.webkit.launch(headless=False)\n    context = browser.new_context(\n        **pixel_2,\n    )\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = await playwright.webkit.launch(headless=False)\n    context = await browser.new_context(\n        **pixel_2,\n    )\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,r.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-playwright#playwright-devices"},"playwright.devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"user-agent"},"User agent"),(0,r.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context = browser.new_context(\n  user_agent='My user agent'\n)\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context = await browser.new_context(\n  user_agent='My user agent'\n)\n")))),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"viewport"},"Viewport"),(0,r.kt)("p",null,"Create a context with custom viewport size:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Create context with given viewport\ncontext = browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\npage.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Create context with given viewport\ncontext = await browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = await browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n")))),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-set-viewport-size"},"page.set_viewport_size(viewport_size)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"locale--timezone"},"Locale & timezone"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Emulate locale and time\ncontext = browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Emulate locale and time\ncontext = await browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n")))),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context = browser.new_context(\n  permissions=['notifications'],\n)\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context = await browser.new_context(\n  permissions=['notifications'],\n)\n")))),(0,r.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context.grant_permissions(['geolocation'])\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await context.grant_permissions(['geolocation'])\n")))),(0,r.kt)("p",null,"Grant notifications access from a specific domain:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context.grant_permissions(['notifications'], origin='https://skype.com')\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await context.grant_permissions(['notifications'], origin='https://skype.com')\n")))),(0,r.kt)("p",null,"Revoke all permissions:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"context.clear_permissions()\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await context.clear_permissions()\n")))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browsercontext#browser-context-grant-permissions"},"browser_context.grant_permissions(permissions, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browsercontext#browser-context-clear-permissions"},"browser_context.clear_permissions()"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"geolocation"},"Geolocation"),(0,r.kt)("p",null,"Create a context with ",(0,r.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = await browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n')))),(0,r.kt)("p",null,"Change the location later:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'await context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browsercontext#browser-context-set-geolocation"},"browser_context.set_geolocation(geolocation)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),(0,r.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Create context with dark mode\ncontext = browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\npage.emulate_media(color_scheme='dark')\n\n# Change media for page\npage.emulate_media(media='print')\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Create context with dark mode\ncontext = await browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = await browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\nawait page.emulate_media(color_scheme='dark')\n\n# Change media for page\nawait page.emulate_media(media='print')\n")))),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-emulate-media"},"page.emulate_media(**kwargs)"))))}y.isMDXComponent=!0}}]);