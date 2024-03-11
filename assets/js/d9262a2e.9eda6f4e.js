"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4934],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(y,l(l({ref:n},u),{},{components:t})):o.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={},l="Enumeration: ColonyRpcEndpoint",a={unversionedId:"api/enums/ColonyRpcEndpoint",id:"api/enums/ColonyRpcEndpoint",title:"Enumeration: ColonyRpcEndpoint",description:"Official Colony RPC2 endpoint (node)",source:"@site/vendor/colonyJS/packages/colony-js/docs/api/enums/ColonyRpcEndpoint.md",sourceDirName:"api/enums",slug:"/api/enums/ColonyRpcEndpoint",permalink:"/colonyjs/api/enums/ColonyRpcEndpoint",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Enumeration: ColonyRole",permalink:"/colonyjs/api/enums/ColonyRole"},next:{title:"Enumeration: Core",permalink:"/colonyjs/api/enums/Core"}},p={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Custom",id:"custom",level:3},{value:"Gnosis",id:"gnosis",level:3},{value:"Goerli",id:"goerli",level:3},{value:"Mainnet",id:"mainnet",level:3},{value:"Xdai",id:"xdai",level:3},{value:"XdaiQa",id:"xdaiqa",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumeration-colonyrpcendpoint"},"Enumeration: ColonyRpcEndpoint"),(0,r.kt)("p",null,"Official Colony RPC2 endpoint (node)"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"custom"},"Custom"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Custom")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for a custom network"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gnosis"},"Gnosis"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Gnosis")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://xdai.colony.io/rpc/"')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for Gnosis chain"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"goerli"},"Goerli"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Goerli")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for Goerli testnet"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Mainnet")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for Mainnet"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xdai"},"Xdai"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Xdai")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://xdai.colony.io/rpc/"')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for Gnosis chain (alias)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xdaiqa"},"XdaiQa"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"XdaiQa")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://xdai.colony.io/rpc/"')),(0,r.kt)("p",null,"Colony's own RPC2 endpoint for Gnosis chain (QA environment)"))}c.isMDXComponent=!0}}]);