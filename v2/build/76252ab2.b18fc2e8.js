(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(866)),i={id:"environment-variables",title:"Environment Variables"},l={unversionedId:"api/environment-variables",id:"version-1.6.0/api/environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"NOTE playwright-core does not respect environment variables.",source:"@site/versioned_docs/version-1.6.0/api/environment-variables.md",slug:"/api/environment-variables",permalink:"/playwright/docs/1.6.0/api/environment-variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.0/api/environment-variables.md",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"EvaluationArgument",permalink:"/playwright/docs/1.6.0/api/evaluationargument"},next:{title:"Working with selectors",permalink:"/playwright/docs/1.6.0/api/working-with-selectors"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-core"}),"playwright-core")," ",Object(o.b)("strong",{parentName:"p"},"does not")," respect environment variables.")),Object(o.b)("p",null,"Playwright looks for certain ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment variables")," to aid its operations.\nIf Playwright doesn't find them in the environment, a lowercased variant of these variables will be used from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/config"}),"npm config"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," - overwrite URL prefix that is used to download browsers. Note: this includes protocol and might even include path prefix. By default, Playwright uses ",Object(o.b)("inlineCode",{parentName:"li"},"https://storage.googleapis.com")," to download Chromium and ",Object(o.b)("inlineCode",{parentName:"li"},"https://playwright.azureedge.net")," to download Webkit & Firefox. You can also use browser-specific download hosts that superceed the ",Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," variable:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST")," - host to specify Chromium downloads"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," - host to specify Firefox downloads"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," - host to specify Webkit downloads"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH")," - specify a shared directory that playwright will use to download browsers and to look for browsers when launching browser instances."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," - set to non-empty value to skip browser downloads altogether.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n# Install browsers to the shared location.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers npm install --save-dev playwright\n# Use shared location to find browsers.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers node playwright-script.js\n\n# Windows\n# Install browsers to the shared location.\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\playwright-browsers\n$ npm install --save-dev playwright\n# Use shared location to find browsers.\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\playwright-browsers\n$ node playwright-script.js\n")))}p.isMDXComponent=!0},866:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);