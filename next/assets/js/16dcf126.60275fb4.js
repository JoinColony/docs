"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[1194],{8860:(e,t,o)=>{o.d(t,{xA:()=>s,yg:()=>y});var n=o(7953);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return o?n.createElement(y,a(a({ref:t},s),{},{components:o})):n.createElement(y,a({ref:t},s))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=o(4432),r=o(7953),l=o(8860),a=o(8835),i=o(5999);const c={features:"features_LG9w",featureSvg:"featureSvg_Yzue"},p=[{title:"Colony SDK",logo:"https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_sdk_no_padding.svg",description:r.createElement(r.Fragment,null,'"Just add ',r.createElement("s",null,"water")," MetaMask\" toolbox for the most common Colony workflows. Start here if you're new \ud83d\ude80"),link:"/colonysdk",color:"#19A582"},{title:"Colony Network",logo:"https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_network_no_padding.svg",description:r.createElement(r.Fragment,null,"The Colony Smart Contracts in all their glory. Freshly tested. Upgradable. Ready for you!"),link:"/colonynetwork",color:"#289BDC"},{title:"ColonyJS",logo:"https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_js_no_padding.svg",description:r.createElement(r.Fragment,null,"Our reference client implementation, written in TypeScript. Battle-tested in our Dapp, it gives you all the features the Colony Network has to offer."),link:"/colonyjs",color:"#F5416E"}];function s(e){let{title:t,logo:o,description:n,link:l,color:p}=e;const s=(0,i.A)(l);return r.createElement("div",{className:(0,a.A)("col col--4")},r.createElement("div",{className:"text--center"},r.createElement("a",{href:s},r.createElement("img",{src:o,className:c.featureSvg}))),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,r.createElement("a",{href:s,style:{color:p}},t)),r.createElement("p",null,n)))}function u(){return r.createElement("section",{className:c.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},p.map(((e,t)=>r.createElement(s,(0,n.A)({key:t},e)))))))}const d={description:"Developer Knowledge Realm Homepage",sidebar_position:0},m="Developer Knowledge Realm",y={unversionedId:"develop/index",id:"develop/index",title:"Developer Knowledge Realm",description:"Developer Knowledge Realm Homepage",source:"@site/colony/develop/index.mdx",sourceDirName:"develop",slug:"/develop/",permalink:"/next/develop/",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/develop/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Developer Knowledge Realm Homepage",sidebar_position:0},sidebar:"develop",next:{title:"Key Concepts",permalink:"/next/develop/dev-learning/"}},g={},v=[{value:"Our Developer Tools",id:"our-developer-tools",level:2},{value:"Developer Community",id:"developer-community",level:2},{value:"Want to talk to a human?",id:"want-to-talk-to-a-human",level:2},{value:"Setup Reputation Mining",id:"setup-reputation-mining",level:2}],f={toc:v},h="wrapper";function b(e){let{components:t,...o}=e;return(0,l.yg)(h,(0,n.A)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"developer-knowledge-realm"},"Developer Knowledge Realm"),(0,l.yg)("admonition",{title:"New to Colony?",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you're brand new to Colony, head over to the ",(0,l.yg)("a",{parentName:"p",href:"../learn/"},"Learning Realm")," to brush up on the basics!")),(0,l.yg)("p",null,"In the DevRealm, we dive deeper into the features that make Colony the most powerful DAO framework to build on."),(0,l.yg)("h2",{id:"our-developer-tools"},"Our Developer Tools"),(0,l.yg)(u,{mdxType:"DeveloperTools"}),(0,l.yg)("h2",{id:"developer-community"},"Developer Community"),(0,l.yg)("p",null,"Join our Discord to hang out with other developers, collaborate on projects or ask questions."),(0,l.yg)("join-discord",null),(0,l.yg)("h2",{id:"want-to-talk-to-a-human"},"Want to talk to a human?"),(0,l.yg)("p",null,"Send an email to ",(0,l.yg)("a",{parentName:"p",href:"mailto:chris@colony.io"},"chris@colony.io")," or send a DM to @chmanie in our Discord community."),(0,l.yg)("h2",{id:"setup-reputation-mining"},"Setup Reputation Mining"),(0,l.yg)("reputation-mining-setup",null))}b.isMDXComponent=!0}}]);