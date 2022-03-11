"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2666],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(7294),l=a(2389),i=a(9366),o=a(6010),s="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,c=e.block,u=e.defaultValue,d=e.values,m=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),b=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(v),x=N[0],O=N[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=b[m];null!=D&&D!==x&&f.some((function(e){return e.value===D}))&&O(D)}var _=function(e){var t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==x&&(E(t),O(n),null!=m&&w(m,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},7057:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(9877),o=a(8215),s=["components"],p={id:"class-dialog",title:"Dialog"},c=void 0,u={unversionedId:"api/class-dialog",id:"api/class-dialog",title:"Dialog",description:'Dialog] objects are dispatched by page via the [page.on("dialog") event.',source:"@site/docs/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/python/docs/next/api/class-dialog",tags:[],version:"current",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/python/docs/next/api/class-consolemessage"},next:{title:"Download",permalink:"/python/docs/next/api/class-download"}},d={},m=[{value:"dialog.accept(**kwargs)",id:"dialog-accept",level:2},{value:"dialog.default_value",id:"dialog-default-value",level:2},{value:"dialog.dismiss()",id:"dialog-dismiss",level:2},{value:"dialog.message",id:"dialog-message",level:2},{value:"dialog.type",id:"dialog-type",level:2}],g={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-dialog"},'page.on("dialog")')," event."),(0,l.kt)("p",null,"An example of using ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,l.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef handle_dialog(dialog):\n    print(dialog.message)\n    dialog.dismiss()\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,l.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def handle_dialog(dialog):\n    print(dialog.message)\n    await dialog.dismiss()\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-dialog"},'page.on("dialog")')," listener. When listener is present, it ",(0,l.kt)("strong",{parentName:"p"},"must")," either ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")," the dialog - otherwise the page will ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-default-value"},"dialog.default_value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-message"},"dialog.message")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-type"},"dialog.type"))),(0,l.kt)("h2",{id:"dialog-accept"},"dialog.accept(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prompt_text"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,l.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns when the dialog has been accepted."),(0,l.kt)("h2",{id:"dialog-default-value"},"dialog.default_value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,l.kt)("h2",{id:"dialog-dismiss"},"dialog.dismiss()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns when the dialog has been dismissed."),(0,l.kt)("h2",{id:"dialog-message"},"dialog.message"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"A message displayed in the dialog."),(0,l.kt)("h2",{id:"dialog-type"},"dialog.type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns dialog's type, can be one of ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}h.isMDXComponent=!0}}]);