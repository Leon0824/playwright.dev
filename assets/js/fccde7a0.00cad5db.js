"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8715],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(g,l(l({ref:a},d),{},{components:t})):r.createElement(g,l({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){t.d(a,{Z:function(){return n}});var r=t(67294);function n(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(87462),n=t(67294),i=t(72389),l=t(29366),o=t(86010),s="tabItem_LplD";function c(e){var a,t,i,c=e.lazy,d=e.block,p=e.defaultValue,u=e.values,m=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,l.lx)(v,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(a=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,n.useState)(k),O=w[0],x=w[1],S=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&x(j)}var E=function(e){var a=e.currentTarget,t=S.indexOf(a),r=v[t].value;r!==O&&(D(a),x(r),null!=m&&N(m,r))},T=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break;case"ArrowLeft":var n=S.indexOf(e.currentTarget)-1;t=S[n]||S[S.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var a=e.value,t=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:function(e){return S.push(e)},onKeyDown:T,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),c?(0,n.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}function d(e){var a=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(a)},e))}},63964:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),l=(t(9877),t(58215),["components"]),o={id:"class-dialog",title:"Dialog"},s=void 0,c={unversionedId:"api/class-dialog",id:"version-1.18/api/class-dialog",title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/versioned_docs/version-1.18/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/docs/1.18/api/class-dialog",tags:[],version:"1.18",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.18/api",previous:{title:"Coverage",permalink:"/docs/1.18/api/class-coverage"},next:{title:"Download",permalink:"/docs/1.18/api/class-download"}},d={},p=[{value:"dialog.accept(promptText)",id:"dialog-accept",level:2},{value:"dialog.defaultValue()",id:"dialog-default-value",level:2},{value:"dialog.dismiss()",id:"dialog-dismiss",level:2},{value:"dialog.message()",id:"dialog-message",level:2},{value:"dialog.type()",id:"dialog-type",level:2}],u={toc:p};function m(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-event-dialog"},"page.on('dialog')")," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n  });\n  await page.evaluate(() => alert('1'));\n  await browser.close();\n})();\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-event-dialog"},"page.on('dialog')")," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog#dialog-accept"},"dialog.accept([promptText])")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-accept"},"dialog.accept([promptText])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-default-value"},"dialog.defaultValue()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-message"},"dialog.message()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-dialog#dialog-type"},"dialog.type()"))),(0,i.kt)("h2",{id:"dialog-accept"},"dialog.accept(","[promptText]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptText"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,i.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",{id:"dialog-default-value"},"dialog.defaultValue()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,i.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",{id:"dialog-dismiss"},"dialog.dismiss()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",{id:"dialog-message"},"dialog.message()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,i.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",{id:"dialog-type"},"dialog.type()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,i.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}m.isMDXComponent=!0}}]);