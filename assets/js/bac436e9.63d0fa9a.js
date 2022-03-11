"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3964],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(87462),n=a(67294),l=a(72389),i=a(29366),o=a(86010),p="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),w=y.tabGroupChoices,v=y.setTabGroupChoices,b=(0,n.useState)(N),P=b[0],x=b[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=w[d];null!=E&&E!==P&&k.some((function(e){return e.value===E}))&&x(E)}var A=function(e){var t=e.currentTarget,a=T.indexOf(t),r=k[a].value;r!==P&&(C(t),x(r),null!=d&&v(d,r))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:A,onClick:A},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function u(e){var t=(0,l.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},55298:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=(a(9877),a(58215),["components"]),o={id:"protractor",title:"Migrating from Protractor"},p=void 0,s={unversionedId:"protractor",id:"version-1.19/protractor",title:"Migrating from Protractor",description:"- Migration Principes",source:"@site/versioned_docs/version-1.19/protractor.mdx",sourceDirName:".",slug:"/protractor",permalink:"/docs/protractor",tags:[],version:"1.19",frontMatter:{id:"protractor",title:"Migrating from Protractor"},sidebar:"version-1.19/docs",previous:{title:"Videos",permalink:"/docs/videos"},next:{title:"Docker",permalink:"/docs/docker"}},u={},c=[{value:"Migration Principes",id:"migration-principes",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Example",id:"example",level:2},{value:"Polyfilling <code>waitForAngular</code>",id:"polyfilling-waitforangular",level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",level:2},{value:"Further Reading",id:"further-reading",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#migration-principes"},"Migration Principes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cheat-sheet"},"Cheat Sheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#polyfilling-waitforangular"},"Polyfilling ",(0,l.kt)("inlineCode",{parentName:"a"},"waitForAngular"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#playwright-test-super-powers"},"Playwright Test Super Powers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,l.kt)("h2",{id:"migration-principes"},"Migration Principes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'No need for "webdriver-manager" / Selenium.'),(0,l.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,l.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ElementFinder"},"ElementFinder")," \u21c4 ",(0,l.kt)("a",{parentName:"li",href:"./api/class-locator"},"Playwright Test Locator")),(0,l.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,l.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,l.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," \u21c4 Playwright Test ",(0,l.kt)("a",{parentName:"li",href:"/docs/actionability"},"auto-waiting")),(0,l.kt)("li",{parentName:"ul"},"Don\u2019t forget to await in Playwright Test")),(0,l.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Protractor"),(0,l.kt)("th",{parentName:"tr",align:null},"Playwright Test"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.buttonText('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'page.locator(\'button, input[type="button"], input[type="submit"] >> text="..."\')'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.css('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('...')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.cssContainingText('..1..', '..2..'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('..1.. >> text=..2..')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.id('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('#...')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.model('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-model=\"...\"]')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.repeater('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-repeat=\"...\"]')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element(by.xpath('...'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator('xpath=...')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.all")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.locator"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"browser.get(url)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"await page.goto(url)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"browser.getCurrentUrl()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page.url()"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Protractor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describe('angularjs homepage todo list', function() {\n  it('should add a todo', function() {\n    browser.get('https://angularjs.org');\n\n    element(by.model('todoList.todoText')).sendKeys('first test');\n    element(by.css('[value=\"add\"]')).click();\n\n    var todoList = element.all(by.repeater('todo in todoList.todos'));\n    expect(todoList.count()).toEqual(3);\n    expect(todoList.get(2).getText()).toEqual('first test');\n\n    // You wrote your first test, cross it off the list\n    todoList.get(2).element(by.css('input')).click();\n    var completedAmount = element.all(by.css('.done-true'));\n    expect(completedAmount.count()).toEqual(2);\n  });\n});\n")),(0,l.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test'); // 1\n\ntest.describe('angularjs homepage todo list', function() {\n  test('should add a todo', async function({page}) { // 2, 3\n    await page.goto('https://angularjs.org'); // 4\n\n    await page.locator('[ng-model=\"todoList.todoText\"]').fill('first test');\n    await page.locator('[value=\"add\"]').click();\n\n    var todoList = page.locator('[ng-repeat=\"todo in todoList.todos\"]'); // 5\n    await expect(todoList).toHaveCount(3);\n    await expect(todoList.nth(2)).toHaveText('first test', {\n      useInnerText: true,\n    });\n\n    // You wrote your first test, cross it off the list\n    await todoList.nth(2).locator('input').click();\n    var completedAmount = page.locator('.done-true');\n    await expect(completedAmount).toHaveCount(2);\n  });\n}\n")),(0,l.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Each Playwright Test file has explicit import of the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"expect")," functions"),(0,l.kt)("li",{parentName:"ol"},"Test function is marked with ",(0,l.kt)("inlineCode",{parentName:"li"},"async")),(0,l.kt)("li",{parentName:"ol"},"Playwright Test is given a ",(0,l.kt)("inlineCode",{parentName:"li"},"page")," as one of its parameters. This is one of the many ",(0,l.kt)("a",{parentName:"li",href:"./api/class-fixtures"},"useful fixtures")," in Playwright Test."),(0,l.kt)("li",{parentName:"ol"},"Almost all Playwright calls are prefixed with ",(0,l.kt)("inlineCode",{parentName:"li"},"await")),(0,l.kt)("li",{parentName:"ol"},"Locator creation with ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-locator"},"page.locator(selector[, options])")," is one of the few methods that is sync.")),(0,l.kt)("h2",{id:"polyfilling-waitforangular"},"Polyfilling ",(0,l.kt)("inlineCode",{parentName:"h2"},"waitForAngular")),(0,l.kt)("p",null,"Playwright Test has built-in ",(0,l.kt)("a",{parentName:"p",href:"/docs/actionability"},"auto-waiting")," that makes protractor's ",(0,l.kt)("a",{parentName:"p",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,l.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," unneeded in general case."),(0,l.kt)("p",null,"However, it might come handy in some edge cases. Here's how to polyfill ",(0,l.kt)("inlineCode",{parentName:"p"},"waitForAngular")," function in Playwright Test:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make sure you have protractor installed in your package.json")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Polyfill function"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async function waitForAngular(page) {\n\u200bconst clientSideScripts = require('protractor/built/clientsidescripts.js');\n\n\u200basync function executeScriptAsync(page, script, ...scriptArgs) {\n  \u200bawait page.evaluate(`\n    \u200bnew Promise((resolve, reject) => {\n      \u200bconst callback = (errMessage) => {\n        \u200bif (errMessage)\n          \u200breject(new Error(errMessage));\n        \u200belse\n          \u200bresolve();\n      \u200b};\n      \u200b(function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);\n    \u200b})\n  \u200b`);\n\u200b}\n\n\u200bawait executeScriptAsync(page, clientSideScripts.waitForAngular, '');\n}\n")),(0,l.kt)("p",{parentName:"li"},"If you don't want to keep a version protractor around, you can also use this simpler approach using this function (only works for Angular 2+):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async function waitForAngular(page) {\n  await page.evaluate(async () => {\n    // @ts-expect-error\n    if (window.getAllAngularTestabilities) {\n      // @ts-expect-error\n      await Promise.all(window.getAllAngularTestabilities().map(whenStable));\n      // @ts-expect-error\n      async function whenStable(testability) {\n        return new Promise((res) => testability.whenStable(res) );\n      }\n    }\n   });\n }\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Polyfill usage"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const page = await context.newPage();\nawait page.goto('https://example.org');\nawait waitForAngular(page);\n")))),(0,l.kt)("h2",{id:"playwright-test-super-powers"},"Playwright Test Super Powers"),(0,l.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,l.kt)("li",{parentName:"ul"},"Run tests across ",(0,l.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,l.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, MacOS, Ubuntu)"),(0,l.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,l.kt)("a",{parentName:"li",href:"./api/class-frame"},"(i)frames"),", ",(0,l.kt)("a",{parentName:"li",href:"./pages"},"tabs and contexts")),(0,l.kt)("li",{parentName:"ul"},"Run tests in parallel across multiple browsers"),(0,l.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,l.kt)("a",{parentName:"li",href:"./test-configuration#record-video"},"video recording"),", ",(0,l.kt)("a",{parentName:"li",href:"./test-configuration#automatic-screenshots"},"screenshots")," and ",(0,l.kt)("a",{parentName:"li",href:"./test-configuration#record-test-trace"},"playwright traces"))),(0,l.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./inspector"},"Playwright Inspector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./auth#code-generation"},"Playwright Test Code generation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./trace-viewer"},"Playwright Tracing")," for post-mortem debugging")),(0,l.kt)("h2",{id:"further-reading"},"Further Reading"),(0,l.kt)("p",null,"Learn more about Playwright Test runner:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./intro"},"Getting Started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./test-fixtures"},"Fixtures")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./api/class-locator"},"Locators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./selectors"},"Selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./test-assertions"},"Assertions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./actionability"},"Auto-waiting"))))}d.isMDXComponent=!0}}]);