"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3254],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(u,i(i({ref:t},o),{},{components:a})):n.createElement(u,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),r=a(7294),l=a(2389),i=a(9366),c=a(6010),s="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,o=e.block,d=e.defaultValue,m=e.values,k=e.groupId,u=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(N,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!N.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,w=(0,r.useState)(b),Y=w[0],E=w[1],O=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=v[k];null!=x&&x!==Y&&N.some((function(e){return e.value===x}))&&E(x)}var T=function(e){var t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==Y&&(C(t),E(n),null!=k&&y(k,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},u)},N.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:Y===t?0:-1,"aria-selected":Y===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:T,onClick:T},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":Y===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===Y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Y})}))))}function o(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},4844:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(9877),a(8215),["components"]),c={id:"actionability",title:"Auto-waiting"},s=void 0,p={unversionedId:"actionability",id:"version-1.18/actionability",title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/versioned_docs/version-1.18/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/python/docs/1.18/actionability",tags:[],version:"1.18",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"version-1.18/docs",previous:{title:"Pytest plugin",permalink:"/python/docs/1.18/test-runners"},next:{title:"Assertions",permalink:"/python/docs/1.18/assertions"}},o={},d=[{value:"Forcing actions",id:"forcing-actions",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Attached",id:"attached",level:2},{value:"Visible",id:"visible",level:2},{value:"Stable",id:"stable",level:2},{value:"Enabled",id:"enabled",level:2},{value:"Editable",id:"editable",level:2},{value:"Receives Events",id:"receives-events",level:2}],m={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,l.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,l.kt)("p",null,"For example, for ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-click"},"page.click(selector, **kwargs)"),", Playwright will ensure that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"element is ",(0,l.kt)("a",{parentName:"li",href:"#attached",title:"Attached"},"Attached")," to the DOM"),(0,l.kt)("li",{parentName:"ul"},"element is ",(0,l.kt)("a",{parentName:"li",href:"#visible",title:"Visible"},"Visible")),(0,l.kt)("li",{parentName:"ul"},"element is ",(0,l.kt)("a",{parentName:"li",href:"#stable",title:"Stable"},"Stable"),", as in not animating or completed animation"),(0,l.kt)("li",{parentName:"ul"},"element ",(0,l.kt)("a",{parentName:"li",href:"#receives-events",title:"Receives Events"},"Receives Events"),", as in not obscured by other elements"),(0,l.kt)("li",{parentName:"ul"},"element is ",(0,l.kt)("a",{parentName:"li",href:"#enabled",title:"Enabled"},"Enabled"))),(0,l.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#attached",title:"Attached"},"Attached")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#visible",title:"Visible"},"Visible")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#stable",title:"Stable"},"Stable")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#receives-events",title:"Receives Events"},"Receives Events")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#enabled",title:"Enabled"},"Enabled")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"#editable",title:"Editable"},"Editable")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"check"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"click"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dblclick"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"setChecked"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tap"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"uncheck"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hover"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scrollIntoViewIfNeeded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"screenshot"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fill"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectText"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dispatchEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getAttribute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"innerText"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"innerHTML"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"press"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"setInputFiles"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectOption"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"forcing-actions"},"Forcing actions"),(0,l.kt)("p",null,"Some actions like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-click"},"page.click(selector, **kwargs)")," support ",(0,l.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,l.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-click"},"page.click(selector, **kwargs)")," method will not check that the target element actually receives click events."),(0,l.kt)("h2",{id:"assertions"},"Assertions"),(0,l.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-disabled"},"element_handle.is_disabled()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-editable"},"element_handle.is_editable()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-enabled"},"element_handle.is_enabled()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-hidden"},"element_handle.is_hidden()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-elementhandle#element-handle-is-visible"},"element_handle.is_visible()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-disabled"},"page.is_disabled(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-editable"},"page.is_editable(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-enabled"},"page.is_enabled(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-hidden"},"page.is_hidden(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"attached"},"Attached"),(0,l.kt)("p",null,"Element is considered attached when it is ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"},"connected")," to a Document or a ShadowRoot."),(0,l.kt)("h2",{id:"visible"},"Visible"),(0,l.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,l.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,l.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,l.kt)("h2",{id:"stable"},"Stable"),(0,l.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,l.kt)("h2",{id:"enabled"},"Enabled"),(0,l.kt)("p",null,"Element is considered enabled when it is not a ",(0,l.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,l.kt)("h2",{id:"editable"},"Editable"),(0,l.kt)("p",null,"Element is considered editable when it is ",(0,l.kt)("a",{parentName:"p",href:"#enabled",title:"Enabled"},"enabled")," and does not have ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,l.kt)("h2",{id:"receives-events"},"Receives Events"),(0,l.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,l.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,l.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,l.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-click"},"page.click(selector, **kwargs)")," call was made:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,l.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}k.isMDXComponent=!0}}]);