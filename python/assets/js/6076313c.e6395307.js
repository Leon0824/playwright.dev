"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7619],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294);function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),o=a(7294),l=a(2389),i=a(9366),r=a(6010),s="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,g=N.setTabGroupChoices,w=(0,o.useState)(v),x=w[0],C=w[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=b[d];null!=O&&O!==x&&f.some((function(e){return e.value===O}))&&C(O)}var D=function(e){var t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==x&&(E(t),C(n),null!=d&&g(d,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;a=T[o]||T[T.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:D,onClick:D},l,{className:(0,r.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),u?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},2687:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),i=a(9877),r=a(8215),s=["components"],u={id:"class-mouse",title:"Mouse"},c=void 0,p={unversionedId:"api/class-mouse",id:"version-1.18/api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.18/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/python/docs/1.18/api/class-mouse",tags:[],version:"1.18",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.18/api",previous:{title:"LocatorAssertions",permalink:"/python/docs/1.18/api/class-locatorassertions"},next:{title:"Page",permalink:"/python/docs/1.18/api/class-page"}},m={},d=[{value:"mouse.click(x, y, **kwargs)",id:"mouse-click",level:2},{value:"mouse.dblclick(x, y, **kwargs)",id:"mouse-dblclick",level:2},{value:"mouse.down(**kwargs)",id:"mouse-down",level:2},{value:"mouse.move(x, y, **kwargs)",id:"mouse-move",level:2},{value:"mouse.up(**kwargs)",id:"mouse-up",level:2},{value:"mouse.wheel(delta_x, delta_y)",id:"mouse-wheel",level:2}],h={toc:d};function k(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,l.kt)("p",null,"Every ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-mouse"},"page.mouse"),"."),(0,l.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse.move(0, 0)\npage.mouse.down()\npage.mouse.move(0, 100)\npage.mouse.move(100, 100)\npage.mouse.move(100, 0)\npage.mouse.move(0, 0)\npage.mouse.up()\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0)\nawait page.mouse.down()\nawait page.mouse.move(0, 100)\nawait page.mouse.move(100, 100)\nawait page.mouse.move(100, 0)\nawait page.mouse.move(0, 0)\nawait page.mouse.up()\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-click"},"mouse.click(x, y, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-dblclick"},"mouse.dblclick(x, y, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-down"},"mouse.down(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-move"},"mouse.move(x, y, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-up"},"mouse.up(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-mouse#mouse-wheel"},"mouse.wheel(delta_x, delta_y)"))),(0,l.kt)("h2",{id:"mouse-click"},"mouse.click(x, y, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),".",(0,l.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"click_count"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,l.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to wait between ",(0,l.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,l.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Shortcut for ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-move"},"mouse.move(x, y, **kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-down"},"mouse.down(**kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-up"},"mouse.up(**kwargs)"),"."),(0,l.kt)("h2",{id:"mouse-dblclick"},"mouse.dblclick(x, y, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),".",(0,l.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to wait between ",(0,l.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,l.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Shortcut for ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-move"},"mouse.move(x, y, **kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-down"},"mouse.down(**kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-up"},"mouse.up(**kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-down"},"mouse.down(**kwargs)")," and ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-mouse#mouse-up"},"mouse.up(**kwargs)"),"."),(0,l.kt)("h2",{id:"mouse-down"},"mouse.down(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),".",(0,l.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"click_count"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,l.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,l.kt)("h2",{id:"mouse-move"},"mouse.move(x, y, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">",(0,l.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," defaults to 1. Sends intermediate ",(0,l.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,l.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,l.kt)("h2",{id:"mouse-up"},"mouse.up(**kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),".",(0,l.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"click_count"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,l.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,l.kt)("h2",{id:"mouse-wheel"},"mouse.wheel(delta_x, delta_y)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delta_x"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Pixels to scroll horizontally.",(0,l.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delta_y"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Pixels to scroll vertically.",(0,l.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."))))}k.isMDXComponent=!0}}]);