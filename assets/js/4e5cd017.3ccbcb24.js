"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o="Class: CloudflareReadonlyAdapter",p={unversionedId:"api/classes/CloudflareReadonlyAdapter",id:"api/classes/CloudflareReadonlyAdapter",title:"Class: CloudflareReadonlyAdapter",description:"CloudflareReadonlyAdapter",source:"@site/vendor/colonySDK/docs/api/classes/CloudflareReadonlyAdapter.md",sourceDirName:"api/classes",slug:"/api/classes/CloudflareReadonlyAdapter",permalink:"/colonysdk/api/classes/CloudflareReadonlyAdapter",draft:!1,editUrl:"https://github.com/JoinColony/api/classes/CloudflareReadonlyAdapter.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"API",permalink:"/colonysdk/api/"},next:{title:"Class: Colony",permalink:"/colonysdk/api/classes/Colony"}},i={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Methods",id:"methods",level:2},{value:"getIpfsUrl",id:"getipfsurl",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"uploadJson",id:"uploadjson",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-2",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-cloudflarereadonlyadapter"},"Class: CloudflareReadonlyAdapter"),(0,r.kt)("p",null,"CloudflareReadonlyAdapter"),(0,r.kt)("p",null,"A Colony SDK IPFS adapter for Cloudflare IPFS (",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/web3/ipfs-gateway/"},"https://developers.cloudflare.com/web3/ipfs-gateway/"),"). It only supports reading IPFS data from the Cloudflare gateway (not uploading or pinning files)."),(0,r.kt)("p",null,"This is the default IpfsAdapter used in Colony SDK. So in order to use this, you don't have to do anything."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/IpfsAdapter"},(0,r.kt)("inlineCode",{parentName:"a"},"IpfsAdapter")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new CloudflareReadonlyAdapter"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"'CLOUDFLARE'")),(0,r.kt)("p",null,"Name for the IpfsAdapter. All uppercase please"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#name"},"name")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getipfsurl"},"getIpfsUrl"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getIpfsUrl"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"cid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx)."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An IPFS hash (CID)")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The URL to an ipfs resource"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#getipfsurl"},"getIpfsUrl")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadjson"},"uploadJson"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"uploadJson"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Function to upload a JSON string to IPFS. Takes the string as an argument (use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," if needbe). Returns a promise that resolves to the IPFS hash (CID)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function should ideally ",(0,r.kt)("strong",{parentName:"p"},"pin")," your data on the relevant service."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Promise to IPFS hash (CID)"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#uploadjson"},"uploadJson")))}u.isMDXComponent=!0}}]);