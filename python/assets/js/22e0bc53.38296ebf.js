"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5127],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7462),n=a(7294),s=a(2389),o=a(9366),i=a(6010),l="tabItem_LplD";function c(e){var t,a,s,c=e.lazy,p=e.block,u=e.defaultValue,h=e.values,d=e.groupId,f=e.className,m=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=m.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=m[0])?void 0:s.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),w=b.tabGroupChoices,k=b.setTabGroupChoices,x=(0,n.useState)(v),N=x[0],P=x[1],O=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=w[d];null!=_&&_!==N&&g.some((function(e){return e.value===_}))&&P(_)}var E=function(e){var t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==N&&(T(t),P(r),null!=d&&k(d,r))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;a=O[r]||O[0];break;case"ArrowLeft":var n=O.indexOf(e.currentTarget)-1;a=O[n]||O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),c?(0,n.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,s.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},6678:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=a(9877),i=a(8215),l=["components"],c={id:"class-playwrightassertions",title:"PlaywrightAssertions"},p=void 0,u={unversionedId:"api/class-playwrightassertions",id:"version-1.18/api/class-playwrightassertions",title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/versioned_docs/version-1.18/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/python/docs/1.18/api/class-playwrightassertions",tags:[],version:"1.18",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"version-1.18/api",previous:{title:"PageAssertions",permalink:"/python/docs/1.18/api/class-pageassertions"},next:{title:"Request",permalink:"/python/docs/1.18/api/class-request"}},h={},d=[{value:"playwright_assertions.expect(locator)",id:"playwright-assertions-expect-locator",level:2},{value:"playwright_assertions.expect(page)",id:"playwright-assertions-expect-page",level:2}],f={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-playwrightassertions",title:"PlaywrightAssertions"},"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,s.kt)("p",null,"Consider the following example:"),(0,s.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import Page, expect\n\ndef test_status_becomes_submitted(page: Page) -> None:\n    # ..\n    page.click("#submit-button")\n    expect(page.locator(".status")).to_have_text("Submitted")\n'))),(0,s.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.async_api import Page, expect\n\nasync def test_status_becomes_submitted(page: Page) -> None:\n    # ..\n    await page.click("#submit-button")\n    await expect(page.locator(".status")).to_have_text("Submitted")\n')))),(0,s.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,s.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,s.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,s.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-locator"},"playwright_assertions.expect(locator)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-page"},"playwright_assertions.expect(page)"))),(0,s.kt)("h2",{id:"playwright-assertions-expect-locator"},"playwright_assertions.expect(locator)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"locator"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-option-locator"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator"),">"," ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-expect-locator-option-locator",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-expect-locator-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," object for the given ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator"),"."),(0,s.kt)("h2",{id:"playwright-assertions-expect-page"},"playwright_assertions.expect(page)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"page"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-option-page"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page",title:"Page"},"Page"),">"," ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page",title:"Page"},"Page")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-expect-page-option-page",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-expect-page-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," object for the given ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page",title:"Page"},"Page"),"."))}m.isMDXComponent=!0}}]);