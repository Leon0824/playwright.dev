"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6103],{8219:function(e,n,t){t.r(n),t.d(n,{NavLink:function(){return F}});var r=t(7462),u=t(3366),a=t(7294),o=t(6010),i=t(9960),s=t(4996),c=t(6775),l=t(541),h=t(3919),p=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"],D=t(1470).getInfimaActiveClassName;function F(e){var n,t=e.activeBasePath,o=e.activeBaseRegex,d=e.to,f=e.href,v=e.label,D=e.activeClassName,F=void 0===D?"":D,m=e.prependBaseUrlToHref,g=e["data-language-prefix"],A=(0,u.Z)(e,p),C=(0,s.Z)(d),k=(0,s.Z)(t),E=(0,s.Z)(f,{forcePrependBaseUrl:!0}),_=v&&f&&!(0,h.Z)(f),x="dropdown__link--active"===F,w=(0,c.TH)();if(g){f="pathname://"+g+w.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+w.hash,A.autoAddBaseUrl=!1,A.target="_self";var y=["java","dotnet","python"].some((function(e){return w.pathname.startsWith("/"+e)}));(w.pathname.startsWith(g)&&y&&g.length>1||1===g.length&&!y)&&(A.className+=" "+F)}return a.createElement(i.Z,(0,r.Z)({},f?{href:m?E:f}:Object.assign({isNavLink:!0,activeClassName:null!=(n=A.className)&&n.includes(F)?"":F,to:C},t||o?{isActive:function(e,n){return o?new RegExp(o).test(n.pathname):n.pathname.startsWith(k)}}:null),A),_?a.createElement("span",null,v,a.createElement(l.Z,x&&{width:12,height:12})):v)}function m(e){var n=e.className,t=e.isDropdownItem,i=void 0!==t&&t,s=(0,u.Z)(e,d),c=a.createElement(F,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",n)},s));return i?a.createElement("li",null,c):c}function g(e){var n=e.className,t=(e.isDropdownItem,(0,u.Z)(e,f));return a.createElement("li",{className:"menu__list-item"},a.createElement(F,(0,r.Z)({className:(0,o.Z)("menu__link",n)},t)))}n.default=function(e){var n,t=e.mobile,o=void 0!==t&&t,i=(e.position,(0,u.Z)(e,v)),s=o?g:m;return a.createElement(s,(0,r.Z)({},i,{activeClassName:null!=(n=i.activeClassName)?n:D(o)}))}},1359:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),u=t(8695),a="loadingRing_3atr";function o(e){var n=e.className;return r.createElement("div",{className:(0,u.Z)(a,n)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,n,t){t.d(n,{w:function(){return l}});var r=t(7855),u=t(5861),a=t(7757),o=t.n(a),i=t(5850),s=t.n(i),c=t(9376);function l(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(o().mark((function e(n){var t,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(n+"search-index.json?_="+c.rx);case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,u=t.map((function(e,n){var t=e.documents,r=e.index;return{type:n,documents:t,index:s().Index.load(r)}})),a=t.reduce((function(e,n){for(var t,u=(0,r.Z)(n.index.invertedIndex);!(t=u()).done;){var a=t.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5779:function(e,n,t){t.d(n,{Z:function(){return Q}});var r=t(9376),u=t(7855),a=t(5861),o=t(7757),i=t.n(o),s=t(7294),c=t(8695),l=t(2263),h=t(412),p=t(6775),d=t(3551),f=t(4241),v=t(6092),D=t(3318),F=t(5579),m="searchBar_2moK",g="dropdownMenu_17SC",A="suggestion_1kAZ",C="cursor_6rPN",k="hitTree_2sUa",E="hitIcon_3jP2",_="hitPath_3Lax",x="noResultsIcon_1rmk",w="hitFooter_1JML",y="hitWrapper_4Hzp",b="hitTitle_2AMl",Z="hitAction_2kg3",I="noResults_1vI5",B="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",N="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",j="suggestions_1cWc",S="dataset_3Xc2",H="empty_2isC";function T(e){var n=e.document,t=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,s=0===t,c=1===t,l=[];o?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+k+'">'+e+"</span>"})),p='<span class="'+E+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':c?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",d=['<span class="'+b+'">'+(0,D.o)(n.t,(0,F.m)(u,"t"),a)+"</span>"];return s||d.push('<span class="'+_+'">'+(0,v.C)(r.t||(n.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[p,'<span class="'+y+'">'],d,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+I+'"><span class="'+x+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=t(1359);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4485),t.e(213)]).then(t.t.bind(t,4485,23));case 2:return n=e.sent,(r=n.default).noConflict?r.noConflict():n.noConflict&&n.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var Q=function(e){var n,t=e.handleSearchBarToggle,o=(0,l.Z)().siteConfig.baseUrl,v=(0,p.k6)(),D=(0,p.TH)(),F=(0,s.useRef)(null),k=(0,s.useRef)("empty"),E=(0,s.useRef)(!1),_=(0,s.useState)(!1),x=_[0],y=_[1],b=(0,s.useState)(!1),Z=b[0],I=b[1],U=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var n,t,a,s,c,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===k.current){e.next=2;break}return e.abrupt("return");case 2:return k.current="loading",y(!0),e.next=6,Promise.all([(0,d.w)(o),W()]);case 6:n=e.sent,t=n[0],a=t.wrappedIndexes,s=t.zhDictionary,c=n[1],l=c(F.current,{hint:!1,autoselect:!0,cssClasses:{root:m,noPrefix:!0,dropdownMenu:g,input:L,hint:R,suggestions:j,suggestion:A,cursor:C,dataset:S,empty:H}},[{source:(0,f.v)(a,s,r.qo),templates:{suggestion:T,empty:M,footer:function(e){var n=e.query;if(!e.isEmpty){var t=document.createElement("a"),u=o+"search?q="+encodeURIComponent(n);t.href=u,t.textContent=r.Iz.see_all_results,t.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(u))}));var a=document.createElement("div");return a.className=w,a.appendChild(t),a}}}}]).on("autocomplete:selected",(function(e,n){var t=n.document,a=t.u,o=t.h,i=n.tokens,s=a;if(r.vc&&i.length>0){for(var c,l=new URLSearchParams,h=(0,u.Z)(i);!(c=h()).done;){var p=c.value;l.append(O,p)}s+="?"+l.toString()}o&&(s+=o),v.push(s)})),k.current="done",y(!1),E.current&&((h=F.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[o,v]);(0,s.useEffect)((function(){if(r.vc){var e=h.Z.canUseDOM?new URLSearchParams(D.search).getAll(O):[];0!==e.length&&setTimeout((function(){var n=document.querySelector("article");if(n){var t=new r.vc(n);t.unmark(),t.mark(e)}}))}}),[D.search]);var Q=(0,s.useCallback)((function(){E.current=!0,U(),null==t||t(!0)}),[t,U]),X=(0,s.useCallback)((function(){null==t||t(!1)}),[t]),q=(0,s.useCallback)((function(){U()}),[U]),K=(0,s.useCallback)((function(e){e.target.value&&I(!0)}),[]);return s.createElement("div",{className:(0,c.Z)("navbar__search",B,(n={},n[N]=x&&Z,n))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:q,onFocus:Q,onBlur:X,onChange:K,ref:F}),s.createElement(P.Z,{className:z}))}},4241:function(e,n,t){t.d(n,{v:function(){return l}});var r=t(7855),u=t(5850),a=t.n(u);function o(e,n){var t=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,s=function(e,n){var t=[];return function e(u,a){for(var o,i=0,s=!1,c=(0,r.Z)(n);!(o=c()).done;){var l=o.value;if(u.substr(0,l.length)===l){var h={missed:a.missed,term:a.term.concat({value:l})};u.length>l.length?e(u.substr(l.length),h):t.push(h),s=!0}else for(var p=l.length-1;p>i;p-=1){var d=l.substr(0,p);if(u.substr(0,p)===d){i=p;var f={missed:a.missed,term:a.term.concat({value:d,trailing:!0})};u.length>p?e(u.substr(p),f):t.push(f),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&t.push(a))}(e,{missed:0,term:[]}),t.sort((function(e,n){var t=e.missed>0?1:0,r=n.missed>0?1:0;return t!==r?t-r:e.term.length-n.term.length})).map((function(e){return e.term}))}(o,n),c=(0,r.Z)(s);!(i=c()).done;){var l=i.value,h=a.concat.apply(a,l);e(u.slice(1),h)}else{var p=a.concat({value:o});e(u.slice(1),p)}}else t.push(a)}(e,[]),t}var i=t(9376);function s(e){return c(e).concat(c(e.filter((function(e){var n=e[e.length-1];return!n.trailing&&n.maybeTyping})),!0))}function c(e,n){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(n?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function l(e,n,t){return function(u,c){var l=function(e,n){if(1===n.length&&["ja","jp","th"].includes(n[0]))return a()[n[0]].tokenizer(e).map((function(e){return e.toString()}));var t=/[^-\s]+/g;return n.includes("zh")&&(t=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(t)||[]}(u,i.dK);if(0!==l.length){var h=function(e,n){var t=o(e,n);if(0===t.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,c=(0,r.Z)(t);!(u=c()).done;){var l=u.value;l[l.length-1].maybeTyping=!0}for(var h,p,d=[],f=(0,r.Z)(i.dK);!(h=f()).done;){var v=h.value;if("en"===v)i._k||d.unshift(a().stopWordFilter);else{var D=a()[v];D.stopWordFilter&&d.unshift(D.stopWordFilter)}}if(d.length>0){var F=function(e){return d.reduce((function(e,n){return e.filter((function(e){return n(e.value)}))}),e)};p=[];for(var m,g=[],A=(0,r.Z)(t);!(m=A()).done;){var C=m.value,k=F(C);p.push(k),k.length<C.length&&k.length>0&&g.push(k)}t.push.apply(t,g)}else p=t.slice();for(var E,_=[],x=(0,r.Z)(p);!(E=x()).done;){var w=E.value;if(w.length>2)for(var y=w.length-1;y>=0;y-=1)_.push(w.slice(0,y).concat(w.slice(y+1)))}return s(t).concat(s(_))}(l,n),p=[],d=function(){for(var n,u=f.value,a=u.term,o=u.tokens,i=function(){var u=n.value,i=u.documents,s=u.index,c=u.type;if(p.push.apply(p,s.query((function(e){for(var n,t=(0,r.Z)(a);!(n=t()).done;){var u=n.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,t).filter((function(e){return!p.some((function(n){return n.document.i.toString()===e.ref}))})).slice(0,t-p.length).map((function(n){var t=i.find((function(e){return e.i.toString()===n.ref}));return{document:t,type:c,page:0!==c&&e[0].documents.find((function(e){return e.i===t.p})),metadata:n.matchData.metadata,tokens:o,score:n.score}}))),p.length>=t)return{v:"break|search"}},s=(0,r.Z)(e);!(n=s()).done;){var c=i();if("object"==typeof c)return c.v}};e:for(var f,v=(0,r.Z)(h);!(f=v()).done;){if("break|search"===d())break e}!function(e){e.forEach((function(e,n){e.index=n})),e.sort((function(n,t){var r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index,u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index;return-1===r&&(r=n.index),-1===u&&(u=t.index),r===u?0===n.type?-1:0===t.type?1:n.index-t.index:r-u}))}(p),function(e){e.forEach((function(n,t){t>0&&n.page&&e.some((function(e){return e.document===n.page}))&&(t<e.length-1&&e[t+1].page===n.page?n.isInterOfTree=!0:n.isLastOfTree=!0)}))}(p),c(p)}else c([])}}},8740:function(e,n,t){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t.d(n,{X:function(){return r}})},5579:function(e,n,t){function r(e,n){for(var t=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[n]&&t.push.apply(t,a[n].position)}return t.sort((function(e,n){return e[0]-n[0]||n[1]-e[1]}))}t.d(n,{m:function(){return r}})},6092:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(7855),u=t(8740);function a(e,n,t){for(var o,i=[],s=(0,r.Z)(n);!(o=s()).done;){var c=o.value,l=e.toLowerCase().indexOf(c);if(l>=0){l>0&&i.push(a(e.substr(0,l),n)),i.push("<mark>"+(0,u.X)(e.substr(l,c.length))+"</mark>");var h=l+c.length;h<e.length&&i.push(a(e.substr(h),n));break}}return 0===i.length?t?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},3318:function(e,n,t){t.d(n,{o:function(){return s}});var r=t(8740),u=t(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var n=[],t=0,r=e;r.length>0;){var u=r.match(a);if(!u){n.push(r);break}u.index>0&&n.push(r.substr(0,u.index)),n.push(u[0]),t+=u.index+u[0].length,r=e.substr(t)}return n}var i=t(9376);function s(e,n,t,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=c(e,n,t,0,0,u),o=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],l=[s.html],h=a.slice(u.chunkIndex+1),p=s.textLength,d=0,f=0,v=!1,D=!1;p<r;)if((d<=f||0===h.length)&&o.length>0){var F=o.pop();p+F.textLength<=r?(l.unshift(F.html),d+=F.textLength,p+=F.textLength):(v=!0,o.length=0)}else{if(!(h.length>0))break;var m=h.shift();p+m.textLength<=r?(l.push(m.html),f+=m.textLength,p+=m.textLength):(D=!0,h.length=0)}return(v||o.length>0)&&l.unshift("\u2026"),(D||h.length>0)&&l.push("\u2026"),l.join("")}function c(e,n,t,a,i,s){var l=[],h=n[a],p=h[0],d=h[1];if(p<i)(a+=1)<n.length&&l.push.apply(l,c(e,n,t,a,i));else{p>i&&l.push.apply(l,o(e.substring(i,p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=l.length),l.push({html:(0,u.C)(e.substr(p,d),t,!0),textLength:d});var f=p+d;(a+=1)<n.length?l.push.apply(l,c(e,n,t,a,f)):f<e.length&&l.push.apply(l,o(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return l}},9376:function(e,n,t){t.d(n,{vc:function(){return i},rx:function(){return s},dK:function(){return a},_k:function(){return o},Hk:function(){return l},qo:function(){return c},Iz:function(){return h}});var r=t(5850),u=t.n(r);t(8465)(u()),t(2324).w(u()),t(3609)(u());var a=["en","zh"],o=!1,i=null,s="767d4510",c=10,l=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},2324:function(e,n,t){function r(e){var n=new RegExp("^[^"+e+"]+","u"),t=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(n,"").replace(t,"")}))}}function u(e,n){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),n&&(this.tokenizer=n)},n&&(e.zh.tokenizer=n),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}t.d(n,{w:function(){return u}})}}]);