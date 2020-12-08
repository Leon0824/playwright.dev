(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(866)),o={id:"selectors",title:"Element selectors"},l={unversionedId:"selectors",id:"version-1.6.2/selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors query elements on the web page for interactions, like page.click, and to obtain ElementHandle through page.$. Built-in selectors auto-pierce shadow DOM.",source:"@site/versioned_docs/version-1.6.2/selectors.md",slug:"/selectors",permalink:"/playwright/docs/selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.2/selectors.md",version:"1.6.2",sidebar:"version-1.6.2/docs",previous:{title:"Supported languages",permalink:"/playwright/docs/languages"},next:{title:"Input",permalink:"/playwright/docs/input"}},c=[{value:"Syntax",id:"syntax",children:[{value:"Short-forms",id:"short-forms",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[]},{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Selector engines",id:"selector-engines",children:[{value:"css and css:light",id:"css-and-csslight",children:[]},{value:"xpath",id:"xpath",children:[]},{value:"text and text:light",id:"text-and-textlight",children:[]},{value:"id, data-testid, data-test-id, data-test and their :light counterparts",id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Selectors query elements on the web page for interactions, like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/api/class-page#pageclickselector-options"}),"page.click"),", and to obtain ",Object(r.b)("inlineCode",{parentName:"p"},"ElementHandle")," through ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/api#pageselector"}),"page.$"),". Built-in selectors auto-pierce ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"shadow DOM"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#syntax"}),"Syntax")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#best-practices"}),"Best practices")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#selector-engines"}),"Selector engines"))),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("p",null,"Selectors are defined by selector engine name and selector body, ",Object(r.b)("inlineCode",{parentName:"p"},"engine=body"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"engine")," refers to one of the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#selector-engines"}),"supported engines"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Built-in selector engines: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#css-and-csslight"}),"css"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#text-and-textlight"}),"text"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#xpath"}),"xpath")," and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors")),Object(r.b)("li",{parentName:"ul"},"Learn more about ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/extensibility"}),"custom selector engines")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body")," refers to the query string for the respective engine",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"text"),", body is the text content"),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"css"),", body is a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"}),"css selector"))))),Object(r.b)("p",null,"Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability."),Object(r.b)("h3",{id:"short-forms"},"Short-forms"),Object(r.b)("p",null,"For convenience, common selectors have short-forms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Selector starting with ",Object(r.b)("inlineCode",{parentName:"li"},"//")," or ",Object(r.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(r.b)("inlineCode",{parentName:"li"},"xpath=selector"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('//html')")," is converted to ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('xpath=//html')"),"."))),Object(r.b)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",Object(r.b)("inlineCode",{parentName:"li"},'"')," or ",Object(r.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(r.b)("inlineCode",{parentName:"li"},"text=selector"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('\"foo\"')")," is converted to ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('text=\"foo\"')"),"."))),Object(r.b)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",Object(r.b)("inlineCode",{parentName:"li"},"css=selector"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('div')")," is converted to ",Object(r.b)("inlineCode",{parentName:"li"},"page.click('css=div')"),".")))),Object(r.b)("h3",{id:"chaining-selectors"},"Chaining selectors"),Object(r.b)("p",null,"Selectors defined as ",Object(r.b)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",Object(r.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),Object(r.b)("p",null,"For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(r.b)("p",null,"is equivalent to"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),Object(r.b)("p",null,"If a selector needs to include ",Object(r.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(r.b)("h3",{id:"intermediate-matches"},"Intermediate matches"),Object(r.b)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(r.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(r.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(r.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(r.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(r.b)("h2",{id:"best-practices"},"Best practices"),Object(r.b)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),Object(r.b)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),Object(r.b)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),Object(r.b)("p",null,"The following examples use the built-in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#text-and-textlight"}),"text")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," selector engines."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// queries "Login" text selector\nawait page.click(\'text="Login"\');\nawait page.click(\'"Login"\'); // short-form\n\n// queries "Search GitHub" placeholder attribute\nawait page.fill(\'css=[placeholder="Search GitHub"]\');\nawait page.fill(\'[placeholder="Search GitHub"]\'); // short-form\n\n// queries "Close" accessibility label\nawait page.click(\'css=[aria-label="Close"]\');\nawait page.click(\'[aria-label="Close"]\'); // short-form\n\n// combine role and text queries\nawait page.click(\'css=nav >> text=Login\');\n')),Object(r.b)("h3",{id:"define-explicit-contract"},"Define explicit contract"),Object(r.b)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",Object(r.b)("inlineCode",{parentName:"p"},"data-test-id"),". These ",Object(r.b)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button data-test-id="directions">Itin\xe9raire</button>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// queries data-test-id attribute with css\nawait page.click('css=[data-test-id=directions]');\nawait page.click('[data-test-id=directions]'); // short-form\n\n// queries data-test-id with id\nawait page.click('data-test-id=directions');\n")),Object(r.b)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#xpath"}),"xpath")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// avoid long css or xpath chains\nawait page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');\nawait page.click('//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input');\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),Object(r.b)("h2",{id:"selector-engines"},"Selector engines"),Object(r.b)("h3",{id:"css-and-csslight"},"css and css:light"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",Object(r.b)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",Object(r.b)("inlineCode",{parentName:"p"},"page.$('span > button')")," to ",Object(r.b)("inlineCode",{parentName:"p"},"page.$('css=span > button')"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"}),Object(r.b)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM and Web Components"),". For that reason, ",Object(r.b)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, every ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",Object(r.b)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Both ",Object(r.b)("inlineCode",{parentName:"li"},'"css=article div"')," and ",Object(r.b)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",Object(r.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(r.b)("li",{parentName:"ul"},"Both ",Object(r.b)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",Object(r.b)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",Object(r.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(r.b)("inlineCode",{parentName:"li"},"article"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",Object(r.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(r.b)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",Object(r.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(r.b)("inlineCode",{parentName:"li"},"span"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",Object(r.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",Object(r.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(r.b)("inlineCode",{parentName:"li"},"article")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",Object(r.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(r.b)("h3",{id:"xpath"},"xpath"),Object(r.b)("p",null,"XPath engine is equivalent to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(r.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(r.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(r.b)("p",null,"Malformed selector starting with ",Object(r.b)("inlineCode",{parentName:"p"},"//")," or ",Object(r.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(r.b)("inlineCode",{parentName:"p"},"page.$('//html/body')")," to ",Object(r.b)("inlineCode",{parentName:"p"},"page.$('xpath=//html/body')"),"."),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),Object(r.b)("h3",{id:"text-and-textlight"},"text and text:light"),Object(r.b)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",Object(r.b)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",Object(r.b)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",Object(r.b)("inlineCode",{parentName:"li"},"text= Login")," matches ",Object(r.b)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),Object(r.b)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",Object(r.b)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",Object(r.b)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',Object(r.b)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",Object(r.b)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),Object(r.b)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",Object(r.b)("inlineCode",{parentName:"li"},"/")," symbols. This means ",Object(r.b)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",Object(r.b)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(r.b)("li",{parentName:"ul"},"Input elements of the type ",Object(r.b)("inlineCode",{parentName:"li"},"button")," and ",Object(r.b)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(r.b)("inlineCode",{parentName:"li"},"text=Login")," matches ",Object(r.b)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),Object(r.b)("p",null,"Malformed selector starting and ending with a quote (either ",Object(r.b)("inlineCode",{parentName:"p"},'"')," or ",Object(r.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(r.b)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",Object(r.b)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",Object(r.b)("inlineCode",{parentName:"p"},"css"),", while ",Object(r.b)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(r.b)("h3",{id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id, data-testid, data-test-id, data-test and their :light counterparts"),Object(r.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(r.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(r.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}b.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||r;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);