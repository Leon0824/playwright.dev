"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8241],{71976:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=n(87462),r=n(63366),s=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),p={id:"test-typescript",title:"Advanced: TypeScript"},a=void 0,c={unversionedId:"test-typescript",id:"version-1.16/test-typescript",isDocsHomePage:!1,title:"Advanced: TypeScript",description:"Manually compile tests with TypeScript",source:"@site/versioned_docs/version-1.16/test-typescript.mdx",sourceDirName:".",slug:"/test-typescript",permalink:"/docs/test-typescript",tags:[],version:"1.16",frontMatter:{id:"test-typescript",title:"Advanced: TypeScript"},sidebar:"version-1.16/docs",previous:{title:"Advanced: fixtures",permalink:"/docs/test-fixtures"},next:{title:"Overview",permalink:"/docs/library"}},l=[{value:"Manually compile tests with TypeScript",id:"manually-compile-tests-with-typescript",children:[],level:2}],u={toc:l};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"manually-compile-tests-with-typescript"},"Manually compile tests with TypeScript"),(0,s.kt)("p",null,"Playwright Test supports TypeScript out of the box. We automatically transform TypeScript code to javascript to run it."),(0,s.kt)("p",null,"However if you find that the TypeScript code is not being transpiled correctly, you can perform your own TypeScript compilation before sending the tests to Playwright."),(0,s.kt)("p",null,"First I add a ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file inside my tests directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "ESNext",\n        "module": "commonjs",\n        "moduleResolution": "Node",\n        "sourceMap": true,\n        "outDir": "../tests-out",\n    }\n}\n')),(0,s.kt)("p",null,"In my ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),", I have two scripts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "pretest": "tsc --incremental -p tests/tsconfig.json",\n    "test": "playwright test -c tests-out"\n  }\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"pretest")," script runs typescript on the tests. ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," will run the tests that have been generated to the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests-out")," directory. The ",(0,s.kt)("inlineCode",{parentName:"p"},"-c")," argument configures the test runner to look for tests inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests-out")," directory."),(0,s.kt)("p",null,"Then ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test")," will build the tests and run them."))}d.isMDXComponent=!0}}]);