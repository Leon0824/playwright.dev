"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6200],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7462),n=a(7294),l=a(2389),i=a(9366),o=a(6010),u="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,s=e.block,c=e.defaultValue,h=e.values,m=e.groupId,d=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),b=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,n.useState)(y),P=N[0],j=N[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=b[m];null!=E&&E!==P&&v.some((function(e){return e.value===E}))&&j(E)}var D=function(e){var t=e.currentTarget,a=O.indexOf(t),r=v[a].value;r!==P&&(T(t),j(r),null!=m&&w(m,r))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;a=O[r]||O[0];break;case"ArrowLeft":var n=O.indexOf(e.currentTarget)-1;a=O[n]||O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},d)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),p?(0,n.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function s(e){var t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},5624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=(a(9877),a(8215),["components"]),o={id:"languages",title:"Supported languages"},u=void 0,p={unversionedId:"languages",id:"version-1.18/languages",title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/versioned_docs/version-1.18/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/dotnet/docs/1.18/languages",tags:[],version:"1.18",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"version-1.18/docs",previous:{title:"Selenium Grid",permalink:"/dotnet/docs/1.18/selenium-grid"}},s={},c=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",level:2},{value:"Python",id:"python",level:2},{value:"Java",id:"java",level:2},{value:".NET",id:"net",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Playwright API is available in multiple languages."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#java"},"Java")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#net"},".NET"))),(0,l.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro/"},"Playwright for Node.js")," is available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"NPM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/intro/"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-playwright"},"API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/intro/"},"Playwright for Python")," is available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/intro/"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,l.kt)("h2",{id:"java"},"Java"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/intro/"},"Playwright for Java")," is available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/intro/"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/api/class-playwright"},"API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"GitHub repo"))),(0,l.kt)("h2",{id:"net"},".NET"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/intro/"},"Playwright for .NET")," is available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/intro/"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/api/class-playwright"},"API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},"GitHub repo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.Playwright"},"Playwright on NuGet"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.Playwright\n")))}m.isMDXComponent=!0}}]);