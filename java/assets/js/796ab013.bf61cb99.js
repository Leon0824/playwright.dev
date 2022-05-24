"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[168],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,y=c["".concat(l,".").concat(m)]||c[m]||k[m]||i;return t?n.createElement(y,o(o({ref:a},d),{},{components:t})):n.createElement(y,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4428:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return c},metadata:function(){return y},toc:function(){return u}});var n=t(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&d(e,t,a[t]);if(p)for(var t of p(a))s.call(a,t)&&d(e,t,a[t]);return e};const c={id:"class-keyboard",title:"Keyboard"},m=void 0,y={unversionedId:"api/class-keyboard",id:"version-1.22/api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(text[, options]), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.22/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/java/docs/api/class-keyboard",tags:[],version:"1.22",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/java/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/java/docs/api/class-locator"}},h={},u=[{value:"Keyboard.down(key)",id:"keyboard-down",level:2},{value:"Keyboard.insertText(text)",id:"keyboard-insert-text",level:2},{value:"Keyboard.press(key, options)",id:"keyboard-press",level:2},{value:"Keyboard.type(text, options)",id:"keyboard-type",level:2},{value:"Keyboard.up(key)",id:"keyboard-up",level:2}],N={toc:u};function b(e){var a,t=e,{components:r}=t,d=((e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=k(k({},N),d),i(a,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-type"}),"Keyboard.type(text[, options])"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,n.kt)("p",null,"For finer control, you can use ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-down"}),"Keyboard.down(key)"),", ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-up"}),"Keyboard.up(key)"),", and ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-insert-text"}),"Keyboard.insertText(text)")," to manually fire events as if they were generated from a real keyboard."),(0,n.kt)("p",null,"An example of holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'page.keyboard().type("Hello World!");\npage.keyboard().press("ArrowLeft");\npage.keyboard().down("Shift");\nfor (int i = 0; i < " World".length(); i++)\n  page.keyboard().press("ArrowLeft");\npage.keyboard().up("Shift");\npage.keyboard().press("Backspace");\n// Result text will end up saying "Hello!"\n')),(0,n.kt)("p",null,"An example of pressing uppercase ",(0,n.kt)("inlineCode",{parentName:"p"},"A")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'page.keyboard().press("Shift+KeyA");\n// or\npage.keyboard().press("Shift+A");\n')),(0,n.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'// on Windows and Linux\npage.keyboard().press("Control+A");\n// on macOS\npage.keyboard().press("Meta+A");\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboard-down"}),"Keyboard.down(key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboard-insert-text"}),"Keyboard.insertText(text)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboard-press"}),"Keyboard.press(key[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboard-type"}),"Keyboard.type(text[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboard-up"}),"Keyboard.up(key)"))),(0,n.kt)("h2",k({},{id:"keyboard-down"}),"Keyboard.down(key)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-up"}),"Keyboard.up(key)"),"."),(0,n.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-down"}),"Keyboard.down(key)")," will have ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-up"}),"Keyboard.up(key)"),"."),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO influence ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),(0,n.kt)("h2",k({},{id:"keyboard-insert-text"}),"Keyboard.insertText(text)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Sets input to the specified text value.",(0,n.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches only ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'page.keyboard().insertText("\u55e8");\n')),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("h2",k({},{id:"keyboard-press"}),"Keyboard.press(key","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Keyboard.PressOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'Page page = browser.newPage();\npage.navigate("https://keycode.info");\npage.keyboard().press("A");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("A.png"));\npage.keyboard().press("ArrowLeft");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("ArrowLeft.png")));\npage.keyboard().press("Shift+O");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("O.png")));\nbrowser.close();\n')),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-down"}),"Keyboard.down(key)")," and ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-up"}),"Keyboard.up(key)"),"."),(0,n.kt)("h2",k({},{id:"keyboard-type"}),"Keyboard.type(text","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," A text to type into a focused element.",(0,n.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Keyboard.TypeOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",k({parentName:"p"},{href:"/java/docs/api/class-keyboard#keyboard-press"}),"Keyboard.press(key[, options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-java"}),'// Types instantly\npage.keyboard().type("Hello");\n// Types slower, like a user\npage.keyboard().type("World", new Keyboard.TypeOptions().setDelay(100));\n')),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"For characters that are not on a US keyboard, only an ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event will be sent."))),(0,n.kt)("h2",k({},{id:"keyboard-up"}),"Keyboard.up(key)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}b.isMDXComponent=!0}}]);