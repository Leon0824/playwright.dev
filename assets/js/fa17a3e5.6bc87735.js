"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3181,6103],{25111:function(e,t,n){n.r(t);var r=n(67294),u=n(39960),a=n(11022),o=n(80907);t.default=function(){var e=(0,o.gB)(),t=(0,o.yW)(),n=e.find((function(e){return"current"===e.name})),i=e.filter((function(e){return e!==t&&"current"!==e.name})),l=t,s="https://github.com/microsoft/playwright";return r.createElement(a.Z,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.createElement("main",{className:"container margin-vert--lg"},r.createElement("h1",null,"Versions"),l&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Latest version"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,l.name),r.createElement("td",null,r.createElement(u.Z,{to:l.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:s+"/releases/tag/v"+l.name+".0"},"Release Notes")))))),n!==t&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Next"),r.createElement("td",null,r.createElement(u.Z,{to:n.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:s},"Source Code")))))),i.length>0&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"archive"},"Past versions"),r.createElement("table",null,r.createElement("tbody",null,i.map((function(e){return r.createElement("tr",{key:e.name},r.createElement("th",null,e.label),r.createElement("td",null,r.createElement(u.Z,{to:e.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:s+"/releases/tag/v"+e.name+".0"},"Release Notes")))})))))))}},48219:function(e,t,n){n.d(t,{O:function(){return F}});var r=n(87462),u=n(63366),a=n(67294),o=n(86010),i=n(39960),l=n(44996),s=n(76775),c=n(90541),d=n(13919),h=n(89521),p=n(47412),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],m=["className","isDropdownItem"],v=["className","isDropdownItem"],D=["mobile","position"];function F(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,p=e.to,m=e.href,v=e.label,D=e.activeClassName,F=void 0===D?"":D,g=e.prependBaseUrlToHref,E=e["data-language-prefix"],A=(0,u.Z)(e,f),C=(0,l.Z)(p),k=(0,l.Z)(n),_=(0,l.Z)(m,{forcePrependBaseUrl:!0}),x=v&&m&&!(0,d.Z)(m),w="dropdown__link--active"===F,y=(0,s.TH)();if(E){m="pathname://"+E+y.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+y.hash,A.autoAddBaseUrl=!1,A.target="_self";var b=["java","dotnet","python"].some((function(e){return y.pathname.startsWith("/"+e)}));(y.pathname.startsWith(E)&&b&&E.length>1||1===E.length&&!b)&&(A.className+=" "+F)}return a.createElement(i.Z,(0,r.Z)({},m?{href:g?_:m}:Object.assign({isNavLink:!0,activeClassName:null!=(t=A.className)&&t.includes(F)?"":F,to:C},n||o?{isActive:function(e,t){return o?(0,h.Fx)(o,t.pathname):t.pathname.startsWith(k)}}:null),A),x?a.createElement("span",null,v,a.createElement(c.Z,w&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,l=(0,u.Z)(e,m),s=a.createElement(F,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},l));return i?a.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,u.Z)(e,v));return a.createElement("li",{className:"menu__list-item"},a.createElement(F,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,u.Z)(e,D)),l=o?E:g;return a.createElement(l,(0,r.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,p.E)(o)}))}},47412:function(e,t,n){n.d(t,{E:function(){return d},Z:function(){return h}});var r=n(63366),u=n(67294),a=n(48219),o=n(23154),i=n(55413),l=n(51093),s=["type"],c={default:function(){return a.Z},localeDropdown:function(){return i.Z},search:function(){return l.Z},dropdown:function(){return o.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(87548).Z}};var d=function(e){return e?"menu__link--active":"navbar__link--active"};function h(e){var t=e.type,n=(0,r.Z)(e,s),a=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(a);return u.createElement(o,n)}},11359:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),u=n(78695),a="loadingRing_3atr";function o(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(67855),u=n(15861),a=n(87757),o=n.n(a),i=n(35850),l=n.n(i),s=n(39376);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(o().mark((function e(t){var n,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:l().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(39376),u=n(67855),a=n(15861),o=n(87757),i=n.n(o),l=n(67294),s=n(78695),c=n(52263),d=n(10412),h=n(76775),p=n(3551),f=n(44241),m=n(86092),v=n(53318),D=n(85579),F="searchBar_2moK",g="dropdownMenu_17SC",E="suggestion_1kAZ",A="cursor_6rPN",C="hitTree_2sUa",k="hitIcon_3jP2",_="hitPath_3Lax",x="noResultsIcon_1rmk",w="hitFooter_1JML",y="hitWrapper_4Hzp",b="hitTitle_2AMl",Z="hitAction_2kg3",N="noResults_1vI5",B="searchBarContainer_2P1H",I="searchBarLoadingRing_1FtX",z="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",S="suggestions_1cWc",j="dataset_3Xc2",H="empty_2isC";function T(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,l=0===n,s=1===n,c=[];o?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+C+'">'+e+"</span>"})),h='<span class="'+k+'">'+(l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b+'">'+(0,v.o)(t.t,(0,D.m)(u,"t"),a)+"</span>"];return l||p.push('<span class="'+_+'">'+(0,m.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(d,[h,'<span class="'+y+'">'],p,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+N+'"><span class="'+x+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=n(11359);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var V=function(e){var t,n=e.handleSearchBarToggle,o=(0,c.Z)().siteConfig.baseUrl,m=(0,h.k6)(),v=(0,h.TH)(),D=(0,l.useRef)(null),C=(0,l.useRef)("empty"),k=(0,l.useRef)(!1),_=(0,l.useState)(!1),x=_[0],y=_[1],b=(0,l.useState)(!1),Z=b[0],N=b[1],U=(0,l.useCallback)((0,a.Z)(i().mark((function e(){var t,n,a,l,s,c,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===C.current){e.next=2;break}return e.abrupt("return");case 2:return C.current="loading",y(!0),e.next=6,Promise.all([(0,p.w)(o),W()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,l=n.zhDictionary,s=t[1],c=s(D.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:g,input:L,hint:R,suggestions:S,suggestion:E,cursor:A,dataset:j,empty:H}},[{source:(0,f.v)(a,l,r.qo),templates:{suggestion:T,empty:M,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=o+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=w,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,o=n.h,i=t.tokens,l=a;if(r.vc&&i.length>0){for(var s,c=new URLSearchParams,d=(0,u.Z)(i);!(s=d()).done;){var h=s.value;c.append(O,h)}l+="?"+c.toString()}o&&(l+=o),m.push(l)})),C.current="done",y(!1),k.current&&((d=D.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[o,m]);(0,l.useEffect)((function(){if(r.vc){var e=d.default.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var V=(0,l.useCallback)((function(){k.current=!0,U(),null==n||n(!0)}),[n,U]),Q=(0,l.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,l.useCallback)((function(){U()}),[U]),q=(0,l.useCallback)((function(e){e.target.value&&N(!0)}),[]);return l.createElement("div",{className:(0,s.Z)("navbar__search",B,(t={},t[z]=x&&Z,t))},l.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:V,onBlur:Q,onChange:q,ref:D}),l.createElement(P.Z,{className:I}))}},44241:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(67855),u=n(35850),a=n.n(u);function o(e,t){var n=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,l=function(e,t){var n=[];return function e(u,a){for(var o,i=0,l=!1,s=(0,r.Z)(t);!(o=s()).done;){var c=o.value;if(u.substr(0,c.length)===c){var d={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),d):n.push(d),l=!0}else for(var h=c.length-1;h>i;h-=1){var p=c.substr(0,h);if(u.substr(0,h)===p){i=h;var f={missed:a.missed,term:a.term.concat({value:p,trailing:!0})};u.length>h?e(u.substr(h),f):n.push(f),l=!0;break}}}l||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(o,t),s=(0,r.Z)(l);!(i=s()).done;){var c=i.value,d=a.concat.apply(a,c);e(u.slice(1),d)}else{var h=a.concat({value:o});e(u.slice(1),h)}}else n.push(a)}(e,[]),n}var i=n(39376);function l(e){return s(e).concat(s(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function s(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,s){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,i.dK);if(0!==c.length){var d=function(e,t){var n=o(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,s=(0,r.Z)(n);!(u=s()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var d,h,p=[],f=(0,r.Z)(i.dK);!(d=f()).done;){var m=d.value;if("en"===m)i._k||p.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var D=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};h=[];for(var F,g=[],E=(0,r.Z)(n);!(F=E()).done;){var A=F.value,C=D(A);h.push(C),C.length<A.length&&C.length>0&&g.push(C)}n.push.apply(n,g)}else h=n.slice();for(var k,_=[],x=(0,r.Z)(h);!(k=x()).done;){var w=k.value;if(w.length>2)for(var y=w.length-1;y>=0;y-=1)_.push(w.slice(0,y).concat(w.slice(y+1)))}return l(n).concat(l(_))}(c,t),h=[],p=function(){for(var t,u=f.value,a=u.term,o=u.tokens,i=function(){var u=t.value,i=u.documents,l=u.index,s=u.type;if(h.push.apply(h,l.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!h.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-h.length).map((function(t){var n=i.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:o,score:t.score}}))),h.length>=n)return{v:"break|search"}},l=(0,r.Z)(e);!(t=l()).done;){var s=i();if("object"==typeof s)return s.v}};e:for(var f,m=(0,r.Z)(d);!(f=m()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(h),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(h),s(h)}else s([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67855),u=n(98740);function a(e,t,n){for(var o,i=[],l=(0,r.Z)(t);!(o=l()).done;){var s=o.value,c=e.toLowerCase().indexOf(s);if(c>=0){c>0&&i.push(a(e.substr(0,c),t)),i.push("<mark>"+(0,u.X)(e.substr(c,s.length))+"</mark>");var d=c+s.length;d<e.length&&i.push(a(e.substr(d),t));break}}return 0===i.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},53318:function(e,t,n){n.d(t,{o:function(){return l}});var r=n(98740),u=n(86092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var i=n(39376);function l(e,t,n,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=s(e,t,n,0,0,u),o=a.slice(0,u.chunkIndex),l=a[u.chunkIndex],c=[l.html],d=a.slice(u.chunkIndex+1),h=l.textLength,p=0,f=0,m=!1,v=!1;h<r;)if((p<=f||0===d.length)&&o.length>0){var D=o.pop();h+D.textLength<=r?(c.unshift(D.html),p+=D.textLength,h+=D.textLength):(m=!0,o.length=0)}else{if(!(d.length>0))break;var F=d.shift();h+F.textLength<=r?(c.push(F.html),f+=F.textLength,h+=F.textLength):(v=!0,d.length=0)}return(m||o.length>0)&&c.unshift("\u2026"),(v||d.length>0)&&c.push("\u2026"),c.join("")}function s(e,t,n,a,i,l){var c=[],d=t[a],h=d[0],p=d[1];if(h<i)(a+=1)<t.length&&c.push.apply(c,s(e,t,n,a,i));else{h>i&&c.push.apply(c,o(e.substring(i,h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),l&&(l.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(h,p),n,!0),textLength:p});var f=h+p;(a+=1)<t.length?c.push.apply(c,s(e,t,n,a,f)):f<e.length&&c.push.apply(c,o(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},39376:function(e,t,n){n.d(t,{vc:function(){return i},rx:function(){return l},dK:function(){return a},_k:function(){return o},Hk:function(){return c},qo:function(){return s},Iz:function(){return d}});var r=n(35850),u=n.n(r);n(88465)(u()),n(72324).w(u()),n(93609)(u());var a=["en","zh"],o=!1,i=null,l="d4db5de5",s=8,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);