"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3608],{1180:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),l=a(646),n=a(9130),c=a(3084),i=a(9670),o=Object.defineProperty,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function h({year:e,posts:t}){return r.createElement(r.Fragment,null,r.createElement("h3",null,e),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function d({years:e}){return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},e.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(h,((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(m)for(var a of m(t))p.call(t,a)&&u(e,a,t[a]);return e})({},e))))))))}function g({archive:e}){const t=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const t=e.reduceRight(((e,t)=>{var a;const r=t.metadata.date.split("-")[0],l=null!=(a=e.get(r))?a:[];return e.set(r,[t,...l])}),new Map);return Array.from(t,(([e,t])=>({year:e,posts:t})))}(e.blogPosts);return r.createElement(r.Fragment,null,r.createElement(i.d,{title:t,description:a}),r.createElement(l.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t),r.createElement("p",{className:"hero__subtitle"},a))),r.createElement("main",null,n.length>0&&r.createElement(d,{years:n}))))}}}]);