"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3247],{7174:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),i=(t(6396),t(8215),["components"]),s={id:"assertions",title:"Assertions"},o=void 0,c={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/java/docs/next/assertions",tags:[],version:"current",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/java/docs/next/actionability"},next:{title:"Authentication",permalink:"/java/docs/next/auth"}},p=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[],level:3}],level:2}],u={toc:p};function d(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String content = page.textContent("nav:first-child");\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-text-content"},"Page.textContent(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-text-content"},"ElementHandle.textContent()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String text = page.innerText(".selected");\nassertEquals("value", text);\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-inner-text"},"Page.innerText(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.innerText()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String alt = page.getAttribute("input", "alt");\nassertEquals("Text", alt);\n')),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean checked = page.isChecked("input");\nassertTrue(checked);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-checked"},"Page.isChecked(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.isChecked()"))),(0,r.kt)("h2",{id:"js-expression"},"JS expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object content = page.evalOnSelector("nav:first-child", "e => e.textContent");\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-eval-on-selector"},"Page.evalOnSelector(selector, expression[, arg, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-evaluate"},"JsHandle.evaluate(expression[, arg])"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String html = page.innerHTML("div.result");\nassertEquals("<p>Result</p>", html);\n')),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-inner-html"},"Page.innerHTML(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.innerHTML()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean visible = page.isVisible("input");\nassertTrue(visible);\n')),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-visible"},"Page.isVisible(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.isVisible()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean enabled = page.isEnabled("input");\nassertTrue(enabled);\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-is-enabled"},"Page.isEnabled(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.isEnabled()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Assert local storage value\nObject userId = page.evaluate("() => window.localStorage.getItem(\'userId\')");\nassertNotNull(userId);\n\n// Assert value for input element\npage.waitForSelector("#search");\nObject value = page.evalOnSelector("#search", "el => el.value");\nassertEquals("query", value);\n\n// Assert computed style\nObject fontSize = page.evalOnSelector("div", "el => window.getComputedStyle(el).fontSize");\nassertEquals("16px", fontSize);\n\n// Assert list length\nObject length = page.evalOnSelectorAll("li.selected",  "items => items.length");\nassertEquals(3, length);\n')),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-eval-on-selector"},"Page.evalOnSelector(selector, expression[, arg, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-eval-on-selector-all"},"Page.evalOnSelectorAll(selector, expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame#frame-evaluate"},"Frame.evaluate(expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame#frame-eval-on-selector"},"Frame.evalOnSelector(selector, expression[, arg, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame#frame-eval-on-selector-all"},"Frame.evalOnSelectorAll(selector, expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-eval-on-selector"},"ElementHandle.evalOnSelector(selector, expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle#element-handle-eval-on-selector-all"},"ElementHandle.evalOnSelectorAll(selector, expression[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))))}d.isMDXComponent=!0}}]);