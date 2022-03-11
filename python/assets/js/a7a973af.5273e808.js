"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8724],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(a),h=l,f=c["".concat(i,".").concat(h)]||c[h]||p[h]||o;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),l=a(7294),o=a(2389),r=a(9366),d=a(6010),i="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,u=e.block,p=e.defaultValue,c=e.values,h=e.groupId,f=e.className,w=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=c?c:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,r.lx)(m,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=w[0])?void 0:o.props.value;if(null!==y&&!m.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.UB)(),g=v.tabGroupChoices,b=v.setTabGroupChoices,N=(0,l.useState)(y),x=N[0],T=N[1],O=[],D=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=g[h];null!=E&&E!==x&&m.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,a=O.indexOf(t),n=m[a].value;n!==x&&(D(t),T(n),null!=h&&b(h,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var l=O.indexOf(e.currentTarget)-1;a=O[l]||O[O.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},m.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:P,onClick:P},o,{className:(0,d.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),s?(0,l.cloneElement)(w.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,o.Z)();return l.createElement(s,(0,n.Z)({key:String(t)},e))}},5512:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),r=a(9877),d=a(8215),i=["components"],s={id:"class-download",title:"Download"},u=void 0,p={unversionedId:"api/class-download",id:"version-1.19/api/class-download",title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/versioned_docs/version-1.19/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/python/docs/api/class-download",tags:[],version:"1.19",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.19/api",previous:{title:"Dialog",permalink:"/python/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/api/class-elementhandle"}},c={},h=[{value:"download.cancel()",id:"download-cancel",level:2},{value:"download.delete()",id:"download-delete",level:2},{value:"download.failure()",id:"download-failure",level:2},{value:"download.page",id:"download-page",level:2},{value:"download.path()",id:"download-path",level:2},{value:"download.save_as(path)",id:"download-save-as",level:2},{value:"download.suggested_filename",id:"download-suggested-filename",level:2},{value:"download.url",id:"download-url",level:2}],f={toc:h};function w(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-event-download"},'page.on("download")')," event."),(0,o.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,o.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_download() as download_info:\n    page.click("a")\ndownload = download_info.value\n# wait for download to complete\npath = download.path()\n'))),(0,o.kt)(d.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_download() as download_info:\n    await page.click("a")\ndownload = await download_info.value\n# waits for download to complete\npath = await download.path()\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-cancel"},"download.cancel()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-delete"},"download.delete()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-failure"},"download.failure()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-page"},"download.page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-path"},"download.path()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-save-as"},"download.save_as(path)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-suggested-filename"},"download.suggested_filename")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-url"},"download.url"))),(0,o.kt)("h2",{id:"download-cancel"},"download.cancel()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,o.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,o.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,o.kt)("h2",{id:"download-delete"},"download.delete()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,o.kt)("h2",{id:"download-failure"},"download.failure()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,o.kt)("h2",{id:"download-page"},"download.page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page"),">",(0,o.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Get the page that the download belongs to."),(0,o.kt)("h2",{id:"download-path"},"download.path()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,o.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),">",(0,o.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,o.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-download#download-suggested-filename"},"download.suggested_filename")," to get suggested file name."),(0,o.kt)("h2",{id:"download-save-as"},"download.save_as(path)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,o.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Path where the download should be copied.",(0,o.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,o.kt)("h2",{id:"download-suggested-filename"},"download.suggested_filename"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,o.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,o.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,o.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,o.kt)("h2",{id:"download-url"},"download.url"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns downloaded url."))}w.isMDXComponent=!0}}]);