"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7286],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(7294),r=a(2389),i=a(9366),o=a(6010),s="tabItem_LplD";function p(e){var t,a,r,p=e.lazy,c=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),y=N.tabGroupChoices,b=N.setTabGroupChoices,w=(0,l.useState)(g),j=w[0],C=w[1],P=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==j&&f.some((function(e){return e.value===E}))&&C(E)}var I=function(e){var t=e.currentTarget,a=P.indexOf(t),n=f[a].value;n!==j&&(x(t),C(n),null!=m&&b(m,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;a=P[n]||P[0];break;case"ArrowLeft":var l=P.indexOf(e.currentTarget)-1;a=P[l]||P[P.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:I,onClick:I},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),p?(0,l.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},3841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=(a(9877),a(8215),["components"]),o={id:"input",title:"Input"},s=void 0,p={unversionedId:"input",id:"version-1.18/input",title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.18/input.mdx",sourceDirName:".",slug:"/input",permalink:"/java/docs/1.18/input",tags:[],version:"1.18",frontMatter:{id:"input",title:"Input"},sidebar:"version-1.18/docs",previous:{title:"Handles",permalink:"/java/docs/1.18/handles"},next:{title:"Locators",permalink:"/java/docs/1.18/locators"}},c={},u=[{value:"Text input",id:"text-input",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Select options",id:"select-options",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Mouse click",id:"mouse-click",level:2},{value:"Forcing the click",id:"forcing-the-click",level:4},{value:"Programmatic click",id:"programmatic-click",level:4},{value:"API reference",id:"api-reference-3",level:3},{value:"Type characters",id:"type-characters",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Keys and shortcuts",id:"keys-and-shortcuts",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Upload files",id:"upload-files",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Focus element",id:"focus-element",level:2},{value:"API reference",id:"api-reference-7",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-input"},"Text input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkboxes-and-radio-buttons"},"Checkboxes and radio buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#select-options"},"Select options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mouse-click"},"Mouse click")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#type-characters"},"Type characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#keys-and-shortcuts"},"Keys and shortcuts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-files"},"Upload files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focus-element"},"Focus element"))),(0,r.kt)("h2",{id:"text-input"},"Text input"),(0,r.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Text input\npage.fill("#name", "Peter");\n\n// Date input\npage.fill("#date", "2020-02-02");\n\n// Time input\npage.fill("#time", "13-15");\n\n// Local datetime input\npage.fill("#local", "2020-03-02T05:15");\n\n// Input through label\npage.fill("text=First Name", "Peter");\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-fill"},"Page.fill(selector, value[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-fill"},"Frame.fill(selector, value[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-fill"},"ElementHandle.fill(value[, options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),(0,r.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Check the checkbox\npage.check("#agree");\n\n// Assert the checked state\nassertTrue(page.isChecked("#agree"));\n\n// Uncheck by input <label>.\npage.uncheck("#subscribe-label");\n\n// Select the radio button\npage.check("text=XL");\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-check"},"Page.check(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-is-checked"},"Page.isChecked(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-uncheck"},"Page.uncheck(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-check"},"ElementHandle.check([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.isChecked()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-uncheck"},"ElementHandle.uncheck([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"select-options"},"Select options"),(0,r.kt)("p",null,"Selects one or multiple options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Single selection matching the value\npage.selectOption("select#colors", "blue");\n\n// Single selection matching the label\npage.selectOption("select#colors", new SelectOption().setLabel("Blue"));\n\n// Multiple selected items\npage.selectOption("select#colors", new String[] {"red", "green", "blue"});\n\n// Select the option via element handle\nElementHandle option = page.querySelector("#best-option");\npage.selectOption("select#colors", option);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-select-option"},"Page.selectOption(selector, values[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-select-option"},"Frame.selectOption(selector, values[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-select-option"},"ElementHandle.selectOption(values[, options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"mouse-click"},"Mouse click"),(0,r.kt)("p",null,"Performs a simple human click."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Generic click\npage.click("button#submit");\n\n// Double click\npage.dblclick("#item");\n\n// Right click\npage.click("#item", new Page.ClickOptions().setButton(MouseButton.RIGHT));\n\n// Shift + click\npage.click("#item", new Page.ClickOptions().setModifiers(Arrays.asList(KeyboardModifier.SHIFT)));\n\n// Hover over element\npage.hover("#item");\n\n// Click the top left corner\npage.click("#item", new Page.ClickOptions().setPosition(0, 0));\n')),(0,r.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,r.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,r.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,r.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,r.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,r.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,r.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,r.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,r.kt)("h4",{id:"forcing-the-click"},"Forcing the click"),(0,r.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/actionability"},"actionability")," checks and force the click:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.click("button#submit", new Page.ClickOptions().setForce(true));\n')),(0,r.kt)("h4",{id:"programmatic-click"},"Programmatic click"),(0,r.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"},(0,r.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.dispatchEvent("button#submit", "click");\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-click"},"Page.click(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-click"},"Frame.click(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-click"},"ElementHandle.click([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-dblclick"},"Page.dblclick(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-dblclick"},"Frame.dblclick(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-dblclick"},"ElementHandle.dblclick([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-hover"},"Page.hover(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-hover"},"Frame.hover(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-hover"},"ElementHandle.hover([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-dispatch-event"},"Page.dispatchEvent(selector, type[, eventInit, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-dispatch-event"},"Frame.dispatchEvent(selector, type[, eventInit, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-dispatch-event"},"ElementHandle.dispatchEvent(type[, eventInit])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"type-characters"},"Type characters"),(0,r.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Type character by character\npage.type("#area", "Hello World!");\n')),(0,r.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,r.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Most of the time, ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-fill"},"Page.fill(selector, value[, options])")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-type"},"Page.type(selector, text[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-type"},"Frame.type(selector, text[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-type"},"ElementHandle.type(text[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-keyboard#keyboard-type"},"Keyboard.type(text[, options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Hit Enter\npage.press("#submit", "Enter");\n\n// Dispatch Control+Right\npage.press("#name", "Control+ArrowRight");\n\n// Press $ sign on keyboard\npage.press("#value", "$");\n')),(0,r.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," property of the keyboard events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,r.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,r.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,r.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// <input id=name>\npage.press("#name", "Shift+A");\n\n// <input id=name>\npage.press("#name", "Shift+ArrowLeft");\n')),(0,r.kt)("p",null,"Shortcuts such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,r.kt)("p",null,"Note that you still need to specify the capital ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,r.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-press"},"Page.press(selector, key[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-press"},"Frame.press(selector, key[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-press"},"ElementHandle.press(key[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-keyboard#keyboard-press"},"Keyboard.press(key[, options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"upload-files"},"Upload files"),(0,r.kt)("p",null,"You can select input files for upload using the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-set-input-files"},"Page.setInputFiles(selector, files[, options])")," method. It expects first argument to point to an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element")," with the type ",(0,r.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Select one file\npage.setInputFiles("input#upload", Paths.get("myfile.pdf"));\n\n// Select multiple files\npage.setInputFiles("input#upload", new Path[] {Paths.get("file1.txt"), Paths.get("file2.txt")});\n\n// Remove all the selected files\npage.setInputFiles("input#upload", new Path[0]);\n\n// Upload buffer from memory\npage.setInputFiles("input#upload", new FilePayload(\n  "file.txt", "text/plain", "this is test".getBytes(StandardCharsets.UTF_8)));\n')),(0,r.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-event-file-chooser"},"Page.onFileChooser(handler)")," event or use a corresponding waiting method upon your action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'FileChooser fileChooser = page.waitForFileChooser(() -> {\n  page.click("upload");\n});\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-filechooser",title:"FileChooser"},"FileChooser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-set-input-files"},"Page.setInputFiles(selector, files[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-set-input-files"},"Frame.setInputFiles(selector, files[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-set-input-files"},"ElementHandle.setInputFiles(files[, options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"focus-element"},"Focus element"),(0,r.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.focus("input#name");\n')),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-focus"},"Page.focus(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-frame#frame-focus"},"Frame.focus(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-elementhandle#element-handle-focus"},"ElementHandle.focus()"))),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);