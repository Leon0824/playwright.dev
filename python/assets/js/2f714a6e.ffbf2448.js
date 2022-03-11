"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[997],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),g=n,m=h["".concat(l,".").concat(g)]||h[g]||c[g]||s;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7462),n=a(7294),s=a(2389),o=a(9366),i=a(6010),l="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,u=e.block,c=e.defaultValue,h=e.values,g=e.groupId,m=e.className,d=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(a=d.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=d[0])?void 0:s.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),_=k.tabGroupChoices,b=k.setTabGroupChoices,x=(0,n.useState)(f),N=x[0],w=x[1],T=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=_[g];null!=E&&E!==N&&y.some((function(e){return e.value===E}))&&w(E)}var O=function(e){var t=e.currentTarget,a=T.indexOf(t),r=y[a].value;r!==N&&(P(t),w(r),null!=g&&b(g,r))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},y.map((function(e){var t=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:O,onClick:O},s,{className:(0,i.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),p?(0,n.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,s.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},217:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=a(9877),i=a(8215),l=["components"],p={id:"class-pageassertions",title:"PageAssertions"},u=void 0,c={unversionedId:"api/class-pageassertions",id:"version-1.19/api/class-pageassertions",title:"PageAssertions",description:"The PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests. A new instance of [PageAssertions] is created by calling [playwright_assertions.expect(page):",source:"@site/versioned_docs/version-1.19/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/python/docs/api/class-pageassertions",tags:[],version:"1.19",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"version-1.19/api",previous:{title:"Page",permalink:"/python/docs/api/class-page"},next:{title:"PlaywrightAssertions",permalink:"/python/docs/api/class-playwrightassertions"}},h={},g=[{value:"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-title",level:2},{value:"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-url",level:2},{value:"page_assertions.to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-to-have-title",level:2},{value:"page_assertions.to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-to-have-url",level:2}],m={toc:g};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-page",title:"Page"},"Page")," state in the tests. A new instance of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," is created by calling ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-playwrightassertions#playwright-assertions-expect-page"},"playwright_assertions.expect(page)"),":"),(0,s.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import Page, expect\n\ndef test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    page.click("#login")\n    expect(page).to_have_url(re.compile(r".*/login"))\n'))),(0,s.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import Page, expect\n\nasync def test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    await page.click("#login")\n    await expect(page).to_have_url(re.compile(r".*/login"))\n')))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"))),(0,s.kt)("h2",{id:"page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),"."),(0,s.kt)("h2",{id:"page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),"."),(0,s.kt)("h2",{id:"page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page has the given title."),(0,s.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_title(re.compile(r".*checkout"))\n'))),(0,s.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_title(re.compile(r".*checkout"))\n')))),(0,s.kt)("h2",{id:"page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page is navigated to the given URL."),(0,s.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_url(re.compile(".*checkout"))\n'))),(0,s.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_url(re.compile(".*checkout"))\n')))))}d.isMDXComponent=!0}}]);