"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5446],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||n;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294);function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(87462),o=a(67294),n=a(72389),l=a(29366),i=a(86010),c="tabItem_LplD";function s(e){var t,a,n,s=e.lazy,m=e.block,p=e.defaultValue,u=e.values,f=e.groupId,d=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,L=(0,o.useState)(b),w=L[0],x=L[1],O=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==w&&k.some((function(e){return e.value===C}))&&x(C)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),r=k[a].value;r!==w&&(S(t),x(r),null!=f&&y(f,r))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;a=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;a=O[o]||O[O.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},d)},k.map((function(e){var t=e.value,a=e.label,n=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:j,onClick:j},n,{className:(0,i.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,o.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,n.Z)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}},93686:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),l=(a(9877),a(58215),["components"]),i={id:"class-framelocator",title:"FrameLocator"},c=void 0,s={unversionedId:"api/class-framelocator",id:"version-1.19/api/class-framelocator",title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either page.frameLocator(selector) or locator.frameLocator(selector) method.",source:"@site/versioned_docs/version-1.19/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/docs/api/class-framelocator",tags:[],version:"1.19",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"version-1.19/api",previous:{title:"Frame",permalink:"/docs/api/class-frame"},next:{title:"JSHandle",permalink:"/docs/api/class-jshandle"}},m={},p=[{value:"frameLocator.first()",id:"frame-locator-first",level:2},{value:"frameLocator.frameLocator(selector)",id:"frame-locator-frame-locator",level:2},{value:"frameLocator.last()",id:"frame-locator-last",level:2},{value:"frameLocator.locator(selector, options)",id:"frame-locator-locator",level:2},{value:"frameLocator.nth(index)",id:"frame-locator-nth",level:2}],u={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FrameLocator represents a view to the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-frame-locator"},"page.frameLocator(selector)")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-locator#locator-frame-locator"},"locator.frameLocator(selector)")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.frameLocator('#my-frame').locator('text=Submit');\nawait locator.click();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Strictness")),(0,n.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Throws if there are several frames in DOM:\nawait page.frameLocator('.result-frame').locator('button').click();\n\n// Works because we explicitly tell locator to pick the first frame:\nawait page.frameLocator('.result-frame').first().locator('button').click();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,n.kt)("p",null,"If you have a ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," object pointing to an ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator")," using ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"},(0,n.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const frameLocator = locator.frameLocator(':scope');\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator#frame-locator-first"},"frameLocator.first()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator#frame-locator-frame-locator"},"frameLocator.frameLocator(selector)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator#frame-locator-last"},"frameLocator.last()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator#frame-locator-locator"},"frameLocator.locator(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator#frame-locator-nth"},"frameLocator.nth(index)"))),(0,n.kt)("h2",{id:"frame-locator-first"},"frameLocator.first()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the first matching frame."),(0,n.kt)("h2",{id:"frame-locator-frame-locator"},"frameLocator.frameLocator(selector)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selector"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/selectors"},"working with selectors")," for more details.",(0,n.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,n.kt)("h2",{id:"frame-locator-last"},"frameLocator.last()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the last matching frame."),(0,n.kt)("h2",{id:"frame-locator-locator"},"frameLocator.locator(selector","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"selector"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/selectors"},"working with selectors")," for more details.",(0,n.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"options")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"has"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has"})," ","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator"),">"," Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"article")," that has ",(0,n.kt)("inlineCode",{parentName:"p"},"text=Playwright")," matches ",(0,n.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,n.kt)("a",{href:"#frame-locator-locator-option-has",class:"list-anchor"},"#")),(0,n.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),"s.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"hasText"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},'"Playwright"')," matches ",(0,n.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,n.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator"),">",(0,n.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#")))),(0,n.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,n.kt)("h2",{id:"frame-locator-nth"},"frameLocator.nth(index)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,n.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the n-th matching frame."))}f.isMDXComponent=!0}}]);