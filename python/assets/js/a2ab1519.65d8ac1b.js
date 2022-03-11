"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4560],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||n;return t?r.createElement(m,o(o({ref:a},u),{},{components:t})):r.createElement(m,o({ref:a},u))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,a,t){t.d(a,{Z:function(){return l}});var r=t(7294);function l(e){var a=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(7462),l=t(7294),n=t(2389),o=t(9366),i=t(6010),s="tabItem_LplD";function p(e){var a,t,n,p=e.lazy,u=e.block,h=e.defaultValue,c=e.values,d=e.groupId,m=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=c?c:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,o.lx)(w,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===h?h:null!=(a=null!=h?h:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=b[0])?void 0:n.props.value;if(null!==f&&!w.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),v=y.tabGroupChoices,k=y.setTabGroupChoices,N=(0,l.useState)(f),T=N[0],O=N[1],P=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=v[d];null!=S&&S!==T&&w.some((function(e){return e.value===S}))&&O(S)}var _=function(e){var a=e.currentTarget,t=P.indexOf(a),r=w[t].value;r!==T&&(I(a),O(r),null!=d&&k(d,r))},x=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var l=P.indexOf(e.currentTarget)-1;t=P[l]||P[P.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},w.map((function(e){var a=e.value,t=e.label,n=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return P.push(e)},onKeyDown:x,onFocus:_,onClick:_},n,{className:(0,i.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),p?(0,l.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function u(e){var a=(0,n.Z)();return l.createElement(p,(0,r.Z)({key:String(a)},e))}},5066:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return d}});var r=t(7462),l=t(3366),n=(t(7294),t(3905)),o=t(9877),i=t(8215),s=["components"],p={id:"browsers",title:"Browsers"},u=void 0,h={unversionedId:"browsers",id:"version-1.18/browsers",title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/versioned_docs/version-1.18/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/python/docs/1.18/browsers",tags:[],version:"1.18",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"version-1.18/docs",previous:{title:"Authentication",permalink:"/python/docs/1.18/auth"},next:{title:"Browser Contexts",permalink:"/python/docs/1.18/browser-contexts"}},c={},d=[{value:"Chromium",id:"chromium",level:2},{value:"Firefox",id:"firefox",level:2},{value:"WebKit",id:"webkit",level:2},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",level:2},{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",level:3},{value:"Installing browsers",id:"installing-browsers",level:2},{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",level:2},{value:"Skip browser downloads",id:"skip-browser-downloads",level:2},{value:"Download single browser binary",id:"download-single-browser-binary",level:2},{value:"Stale browser removal",id:"stale-browser-removal",level:2}],m={toc:d};function b(e){var a=e.components,t=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/1.18/cli"},"Playwright CLI")," to install these browsers."),(0,n.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#chromium"},"Chromium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#firefox"},"Firefox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#webkit"},"WebKit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#installing-browsers"},"Installing browsers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#skip-browser-downloads"},"Skip browser downloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#download-single-browser-binary"},"Download single browser binary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,n.kt)("h2",{id:"chromium"},"Chromium"),(0,n.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,n.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,n.kt)("a",{parentName:"p",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")," section below."),(0,n.kt)("h2",{id:"firefox"},"Firefox"),(0,n.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,n.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox Stable")," build."),(0,n.kt)("h2",{id:"webkit"},"WebKit"),(0,n.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,n.kt)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),(0,n.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = playwright.chromium.launch(channel="chrome")\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = await playwright.chromium.launch(channel="chrome")\n')))),(0,n.kt)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Defaults")),(0,n.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Regression testing")),(0,n.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,n.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Media codecs")),(0,n.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,n.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,n.kt)("h2",{id:"installing-browsers"},"Installing browsers"),(0,n.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,n.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,n.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,n.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python -m playwright install\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npip install playwright\nplaywright install\n'))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npip install playwright\nplaywright install\n")))),(0,n.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python playwright_script.py\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npython playwright_script.py\n'))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npython playwright_script.py\n")))),(0,n.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,n.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,n.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,n.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,n.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nHTTPS_PROXY=https://192.0.2.1 playwright install\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:HTTPS_PROXY="https://192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set HTTPS_PROXY=https://192.0.2.1\npip install playwright\nplaywright install\n")))),(0,n.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,n.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,n.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 playwright install\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npip install playwright\nplaywright install\n")))),(0,n.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 playwright install\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npip install playwright\nplaywright install\n")))),(0,n.kt)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),(0,n.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,n.kt)("p",null,"This can be done by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nPLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 python -m playwright install\n"))),(0,n.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n"))),(0,n.kt)(i.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n")))),(0,n.kt)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),(0,n.kt)("p",null,"Playwright downloads Chromium, Firefox and WebKit browsers by default. To install a specific browser, pass it as an argument during installation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nplaywright install firefox\n")),(0,n.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,n.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,n.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}b.isMDXComponent=!0}}]);