(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{565:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),i=a(6),n=(a(0),a(866)),l={id:"class-dialog",title:"class: Dialog"},o={unversionedId:"api/class-dialog",id:"api/class-dialog",isDocsHomePage:!1,title:"class: Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/docs/api/class-dialog.md",slug:"/api/class-dialog",permalink:"/playwright/docs/next/api/class-dialog",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-dialog.md",version:"current",sidebar:"api",previous:{title:"class: ConsoleMessage",permalink:"/playwright/docs/next/api/class-consolemessage"},next:{title:"class: Download",permalink:"/playwright/docs/next/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-dialog#class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-page#pageondialog"}),"page.on('dialog')")," event."),Object(n.b)("p",null,"An example of using ",Object(n.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-dialog#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-dialog#dialogmessage"}),"dialog.message()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-dialog#dialogtype"}),"dialog.type()"))),Object(n.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(n.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Returns when the dialog has been accepted."),Object(n.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(n.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Returns when the dialog has been dismissed."),Object(n.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"A message displayed in the dialog."),Object(n.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Returns dialog's type, can be one of ",Object(n.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(n.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(n.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(n.b)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,g=b["".concat(l,".").concat(u)]||b[u]||d[u]||n;return a?i.a.createElement(g,o(o({ref:t},s),{},{components:a})):i.a.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);