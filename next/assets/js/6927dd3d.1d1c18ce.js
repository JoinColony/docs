"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[9076],{8860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(n),m=r,u=y["".concat(i,".").concat(m)]||y[m]||d[m]||l;return n?a.createElement(u,p(p({ref:t},g),{},{components:n})):a.createElement(u,p({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[y]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(4432),r=(n(7953),n(8860));const l={},p="Class: PinataAdapter",o={unversionedId:"api/classes/PinataAdapter",id:"api/classes/PinataAdapter",title:"Class: PinataAdapter",description:"A Colony SDK IPFS adapter for Pinata (https://pinata.cloud)",source:"@site/vendor/colonyJS/packages/sdk/docs/api/classes/PinataAdapter.md",sourceDirName:"api/classes",slug:"/api/classes/PinataAdapter",permalink:"/next/colonysdk/api/classes/PinataAdapter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: OneTxPayment",permalink:"/next/colonysdk/api/classes/OneTxPayment"},next:{title:"Class: ReputationClient",permalink:"/next/colonysdk/api/classes/ReputationClient"}},i={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Methods",id:"methods",level:2},{value:"getIpfsUrl",id:"getipfsurl",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"uploadJson",id:"uploadjson",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-2",level:4}],g={toc:s},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"class-pinataadapter"},"Class: PinataAdapter"),(0,r.yg)("p",null,"A Colony SDK IPFS adapter for Pinata (",(0,r.yg)("a",{parentName:"p",href:"https://pinata.cloud"},"https://pinata.cloud"),")"),(0,r.yg)("p",null,"In order to use this, sign up for Pinata (if you haven't already) and generate a token. Then either supply this token when instantiating the class (example below) or provide it via the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"COLONY_IPFS_PINATA_TOKEN")," (when using NodeJS). Then provide an instance of this class to the ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," or ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyEventManager"},"ColonyEventManager")," classes (depending on your needs)."),(0,r.yg)("admonition",{title:"Tokens are sensitive data",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Do not check in your Pinata token into version control and ",(0,r.yg)("strong",{parentName:"p"},"DO NOT EMBED IT INTO YOUR FRONTEND BUNDLE"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { ColonyNetwork, PinataAdapter } from '@colony/sdk';\nconst pinataAdapter = new PinataAdapter('[YOUR_PINANTA_JWT_TOKEN]');\n// Immediately executing async function\n(async function() {\n  const colonyNetwork = ColonyNetwork.init(signerOrProvider, { ipfsAdapter: pinataAdapter });\n})();\n")),(0,r.yg)("h2",{id:"implements"},"Implements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},(0,r.yg)("inlineCode",{parentName:"a"},"IpfsAdapter")))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"new PinataAdapter"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"pinataToken?"),")"),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"pinataToken?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"name"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," = ",(0,r.yg)("inlineCode",{parentName:"p"},"'PINATA'")),(0,r.yg)("p",null,"Name for the IpfsAdapter. All uppercase please"),(0,r.yg)("h4",{id:"implementation-of"},"Implementation of"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter#name"},"name")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"getipfsurl"},"getIpfsUrl"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getIpfsUrl"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"cid"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx)."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"cid")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An IPFS hash (CID)")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The URL to an ipfs resource"),(0,r.yg)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter#getipfsurl"},"getIpfsUrl")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"uploadjson"},"uploadJson"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"uploadJson"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"jsonString"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"string"),">"),(0,r.yg)("p",null,"Function to upload a JSON string to IPFS. Takes the string as an argument (use ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.stringify()")," if needbe). Returns a promise that resolves to the IPFS hash (CID)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"This function should ideally ",(0,r.yg)("strong",{parentName:"p"},"pin")," your data on the relevant service."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"jsonString")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"JSON string to upload (and pin) to IPFS")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"string"),">"),(0,r.yg)("p",null,"Promise to IPFS hash (CID)"),(0,r.yg)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/IpfsAdapter#uploadjson"},"uploadJson")))}d.isMDXComponent=!0}}]);