"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3802],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,y=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5553:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e};const f={id:"class-timeouterror",title:"TimeoutError"},m=void 0,y={unversionedId:"api/class-timeouterror",id:"version-1.22/api/class-timeouterror",title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.22/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/dotnet/docs/api/class-timeouterror",tags:[],version:"1.22",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/dotnet/docs/api/class-selectors"},next:{title:"Touchscreen",permalink:"/dotnet/docs/api/class-touchscreen"}},d={},b=[],v={toc:b};function w(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=p(p({},v),u),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ","[Error]")),(0,n.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-locator#locator-wait-for"}),"Locator.WaitForAsync(options)")," or ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-browsertype#browser-type-launch"}),"BrowserType.LaunchAsync(options)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\n\nusing var playwright = await Playwright.CreateAsync();\nawait using var browser = await playwright.Chromium.LaunchAsync();\nvar page = await browser.NewPageAsync();\ntry\n{\n    await page.ClickAsync("text=Example", new() { Timeout = 100 });\n}\ncatch (TimeoutException)\n{\n    Console.WriteLine("Timeout!");\n}\n')))}w.isMDXComponent=!0}}]);