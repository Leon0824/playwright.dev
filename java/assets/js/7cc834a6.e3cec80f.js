"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3852],{3905:function(e,t,s){s.d(t,{Zo:function(){return u},kt:function(){return f}});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(s),f=r,v=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return s?n.createElement(v,o(o({ref:t},u),{},{components:s})):n.createElement(v,o({ref:t},u))}));function f(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=s[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},8215:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(7294);function r(e){var t=e.children,s=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:s,className:r},t)}},9877:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(7462),r=s(7294),a=s(2389),o=s(9366),i=s(6010),l="tabItem_LplD";function p(e){var t,s,a,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,f=e.groupId,v=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(s=m.find((function(e){return e.props.default})))?void 0:s.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),g=k.tabGroupChoices,A=k.setTabGroupChoices,P=(0,r.useState)(y),w=P[0],O=P[1],j=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=g[f];null!=T&&T!==w&&h.some((function(e){return e.value===T}))&&O(T)}var I=function(e){var t=e.currentTarget,s=j.indexOf(t),n=h[s].value;n!==w&&(N(t),O(n),null!=f&&A(f,n))},E=function(e){var t,s=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;s=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;s=j[r]||j[j.length-1]}null==(t=s)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},h.map((function(e){var t=e.value,s=e.label,a=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:I,onClick:I},a,{className:(0,i.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=s?s:t)}))),p?(0,r.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,a.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},9186:function(e,t,s){s.r(t),s.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=s(7462),r=s(3366),a=(s(7294),s(3905)),o=(s(9877),s(8215),["components"]),i={id:"class-apiresponseassertions",title:"APIResponseAssertions"},l=void 0,p={unversionedId:"api/class-apiresponseassertions",id:"version-1.18/api/class-apiresponseassertions",title:"APIResponseAssertions",description:"The APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests. A new instance of [APIResponseAssertions] is created by calling [PlaywrightAssertions.assertThat(response):",source:"@site/versioned_docs/version-1.18/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/java/docs/1.18/api/class-apiresponseassertions",tags:[],version:"1.18",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"}},u={},c=[{value:"APIResponseAssertions.isOK()",id:"api-response-assertions-to-be-ok",level:2},{value:"APIResponseAssertions.not()",id:"api-response-assertions-not",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"},"APIResponse")," in the tests. A new instance of ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," is created by calling ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-api-response"},"PlaywrightAssertions.assertThat(response)"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestPage {\n  ...\n  @Test\n  void navigatesToLoginPage() {\n    ...\n    APIResponse response = page.request().get('https://playwright.dev');\n    assertThat(response).isOK();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponseassertions#api-response-assertions-to-be-ok"},"APIResponseAssertions.isOK()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponseassertions#api-response-assertions-not"},"APIResponseAssertions.not()"))),(0,a.kt)("h2",{id:"api-response-assertions-to-be-ok"},"APIResponseAssertions.isOK()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,a.kt)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Ensures the response status code is within ","[200..299]"," range."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"assertThat(response).isOK();\n")),(0,a.kt)("h2",{id:"api-response-assertions-not"},"APIResponseAssertions.not()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-not-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions"),">",(0,a.kt)("a",{href:"#api-response-assertions-not-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the response status is not successfull:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"assertThat(response).not().isOK();\n")))}f.isMDXComponent=!0}}]);