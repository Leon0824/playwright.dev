"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5449],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var i=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(87462),n=a(67294),r=a(72389),l=a(29366),o=a(86010),s="tabItem_LplD";function c(e){var t,a,r,c=e.lazy,p=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,S=(0,n.useState)(k),_=S[0],w=S[1],C=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var W=y[m];null!=W&&W!==_&&b.some((function(e){return e.value===W}))&&w(W)}var D=function(e){var t=e.currentTarget,a=C.indexOf(t),i=b[a].value;i!==_&&(O(t),w(i),null!=m&&N(m,i))},z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.currentTarget)+1;a=C[i]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return C.push(e)},onKeyDown:z,onFocus:D,onClick:D},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),c?(0,n.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function p(e){var t=(0,r.Z)();return n.createElement(c,(0,i.Z)({key:String(t)},e))}},12326:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=(a(9877),a(58215),["components"]),o={id:"class-accessibility",title:"Accessibility"},s=void 0,c={unversionedId:"api/class-accessibility",id:"version-1.19/api/class-accessibility",title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.19/api/class-accessibility.mdx",sourceDirName:"api",slug:"/api/class-accessibility",permalink:"/docs/api/class-accessibility",tags:[],version:"1.19",frontMatter:{id:"class-accessibility",title:"Accessibility"}},p={},u=[{value:"accessibility.snapshot(options)",id:"accessibility-snapshot",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),(0,r.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,r.kt)("p",null,'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),(0,r.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/class-accessibility#accessibility-snapshot"},"accessibility.snapshot([options])"))),(0,r.kt)("h2",{id:"accessibility-snapshot"},"accessibility.snapshot(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interestingOnly"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-interesting-only"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Prune uninteresting nodes from the tree. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".",(0,r.kt)("a",{href:"#accessibility-snapshot-option-interesting-only",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-root"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">"," The root DOM element for the snapshot. Defaults to the whole page.",(0,r.kt)("a",{href:"#accessibility-snapshot-option-root",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,r.kt)("a",{href:"#accessibility-snapshot-return",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," The ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#usage_intro"},"role"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A human readable name for the node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The current value of the node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," An additional human readable description of the node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyshortcuts")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Keyboard shortcuts associated with this node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roledescription")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A human readable alternative to the role, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valuetext")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A description of the current value, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disabled")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is disabled, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expanded")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is expanded or collapsed, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"focused")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is focused, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modal")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Modal_window"},"modal"),", if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multiline")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node text input supports multiline, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multiselectable")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether more than one child can be selected, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"readonly")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is read only, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"required")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is required, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selected")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is selected in its parent node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"checked")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),'|"mixed"',">",' Whether the checkbox is checked, or "mixed", if applicable.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressed")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),'|"mixed"',">",' Whether the toggle button is checked, or "mixed", if applicable.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"level")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The level of a heading, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valuemin")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The minimum value in a node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valuemax")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The maximum value in a node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"autocomplete")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," What kind of autocomplete is supported by a control, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"haspopup")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," What kind of popup is currently being shown for a node, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"invalid")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Whether and in what way this node's value is invalid, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"orientation")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Whether the node is oriented horizontally or vertically, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," Child nodes, if any, if applicable.")))),(0,r.kt)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",(0,r.kt)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,r.kt)("p",null,"An example of dumping the entire accessibility tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),(0,r.kt)("p",null,"An example of logging the focused node's name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}m.isMDXComponent=!0}}]);