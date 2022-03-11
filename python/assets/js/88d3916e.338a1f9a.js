"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5931],{3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),u=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=l,m=g["".concat(i,".").concat(d)]||g[d]||c[d]||p;return n?t.createElement(m,r(r({ref:a},s),{},{components:n})):t.createElement(m,r({ref:a},s))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=g;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<p;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,a,n){n.d(a,{Z:function(){return l}});var t=n(7294);function l(e){var a=e.children,n=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:l},a)}},9877:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7462),l=n(7294),p=n(2389),r=n(9366),o=n(6010),i="tabItem_LplD";function u(e){var a,n,p,u=e.lazy,s=e.block,c=e.defaultValue,g=e.values,d=e.groupId,m=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,r.lx)(y,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(a=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(p=f[0])?void 0:p.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,r.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,_=(0,l.useState)(h),x=_[0],N=_[1],T=[],O=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==x&&y.some((function(e){return e.value===I}))&&N(I)}var E=function(e){var a=e.currentTarget,n=T.indexOf(a),t=y[n].value;t!==x&&(O(a),N(t),null!=d&&w(d,t))},Z=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;n=T[l]||T[T.length-1]}null==(a=n)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},m)},y.map((function(e){var a=e.value,n=e.label,p=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:function(e){return T.push(e)},onKeyDown:Z,onFocus:E,onClick:E},p,{className:(0,o.Z)("tabs__item",i,null==p?void 0:p.className,{"tabs__item--active":x===a})}),null!=n?n:a)}))),u?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})}))))}function s(e){var a=(0,p.Z)();return l.createElement(u,(0,t.Z)({key:String(a)},e))}},8983:function(e,a,n){n.r(a),n.d(a,{assets:function(){return g},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var t=n(7462),l=n(3366),p=(n(7294),n(3905)),r=n(9877),o=n(8215),i=["components"],u={id:"pages",title:"Pages"},s=void 0,c={unversionedId:"pages",id:"version-1.18/pages",title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.18/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/python/docs/1.18/pages",tags:[],version:"1.18",frontMatter:{id:"pages",title:"Pages"},sidebar:"version-1.18/docs",previous:{title:"Network",permalink:"/python/docs/1.18/network"},next:{title:"Page Object Models",permalink:"/python/docs/1.18/pom"}},g={},d=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}],m={toc:d};function f(e){var a=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#pages"},"Pages")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,p.kt)("h2",{id:"pages"},"Pages"),(0,p.kt)("p",null,"Each ",(0,p.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," can have multiple pages. A ",(0,p.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\npage.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n"))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\nawait page.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n")))),(0,p.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,p.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,p.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n"))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n")))),(0,p.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,p.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),(0,p.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),(0,p.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,p.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,p.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,p.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,p.kt)("p",null,"This event is emitted in addition to the ",(0,p.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),(0,p.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,p.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),(0,p.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))))}f.isMDXComponent=!0}}]);