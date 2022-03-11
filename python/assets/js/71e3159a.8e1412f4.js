"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7547],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=l,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(v,s(s({ref:t},c),{},{components:a})):n.createElement(v,s({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(7294),r=a(2389),s=a(9366),i=a(6010),u="tabItem_LplD";function o(e){var t,a,r,o=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,y=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),g=b.tabGroupChoices,N=b.setTabGroupChoices,x=(0,l.useState)(k),T=x[0],w=x[1],I=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=g[m];null!=A&&A!==T&&h.some((function(e){return e.value===A}))&&w(A)}var P=function(e){var t=e.currentTarget,a=I.indexOf(t),n=h[a].value;n!==T&&(_(t),w(n),null!=m&&N(m,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var l=I.indexOf(e.currentTarget)-1;a=I[l]||I[I.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:P,onClick:P},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,r.Z)();return l.createElement(o,(0,n.Z)({key:String(t)},e))}},2510:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(9877),i=a(8215),u=["components"],o={id:"assertions",title:"Assertions"},c=void 0,p={unversionedId:"assertions",id:"version-1.19/assertions",title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.19/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/python/docs/assertions",tags:[],version:"1.19",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.19/docs",previous:{title:"API testing",permalink:"/python/docs/api-testing"},next:{title:"Authentication",permalink:"/python/docs/auth"}},d={},m=[{value:"Text content",id:"text-content",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Inner text",id:"inner-text",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Attribute value",id:"attribute-value",level:2},{value:"Checkbox state",id:"checkbox-state",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"JS expression",id:"js-expression",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Inner HTML",id:"inner-html",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Visibility",id:"visibility",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Enabled state",id:"enabled-state",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Custom assertions",id:"custom-assertions",level:2}],v={toc:m};function y(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = page.text_content("nav:first-child")\nassert content == "home"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = await page.text_content("nav:first-child")\nassert content == "home"\n')))),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-text-content"},"page.text_content(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-text-content"},"element_handle.text_content()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'text = page.inner_text(".selected")\nassert text == "value"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'text = await page.inner_text(".selected")\nassert text == "value"\n')))),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-inner-text"},"page.inner_text(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-inner-text"},"element_handle.inner_text()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'alt = page.get_attribute("input", "alt")\nassert alt == "Text"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'alt = await page.get_attribute("input", "alt")\nassert alt == "Text"\n')))),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'checked = page.is_checked("input")\nassert checked\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'checked = await page.is_checked("input")\nassert checked\n')))),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()"))),(0,r.kt)("h2",{id:"js-expression"},"JS expression"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = page.locator("nav:first-child").text_content()\nassert content == "home"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = await page.locator("nav:first-child").text_content()\nassert content == "home"\n')))),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-eval-on-selector"},"page.eval_on_selector(selector, expression, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-jshandle#js-handle-evaluate"},"js_handle.evaluate(expression, **kwargs)"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'html = page.inner_html("div.result")\nassert html == "<p>Result</p>"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'html = await page.inner_html("div.result")\nassert html == "<p>Result</p>"\n')))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-inner-html"},"page.inner_html(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-inner-html"},"element_handle.inner_html()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'visible = page.is_visible("input")\nassert visible\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'visible = await page.is_visible("input")\nassert visible\n')))),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-visible"},"element_handle.is_visible()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'enabled = page.is_enabled("input")\nassert enabled\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'enabled = await page.is_enabled("input")\nassert enabled\n')))),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-enabled"},"page.is_enabled(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-enabled"},"element_handle.is_enabled()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = page.locator('li.selected').count()\nassert length == 3\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = await page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = await page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = await page.locator('li.selected').count()\nassert length == 3\n")))))}y.isMDXComponent=!0}}]);