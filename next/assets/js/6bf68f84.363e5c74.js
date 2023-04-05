"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={},a="Enumeration: Network",l={unversionedId:"api/enums/Network",id:"api/enums/Network",title:"Enumeration: Network",description:"Supported Ethereum networks. Use Custom if you'd like to bring your own deployment (e.g. local)",source:"@site/vendor/colonySDK/docs/api/enums/Network.md",sourceDirName:"api/enums",slug:"/api/enums/Network",permalink:"/next/colonysdk/api/enums/Network",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Enumeration: MotionState",permalink:"/next/colonysdk/api/enums/MotionState"},next:{title:"Enumeration: SupportedExtension",permalink:"/next/colonysdk/api/enums/SupportedExtension"}},p={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Custom",id:"custom",level:3},{value:"Gnosis",id:"gnosis",level:3},{value:"Goerli",id:"goerli",level:3},{value:"Mainnet",id:"mainnet",level:3},{value:"Xdai",id:"xdai",level:3},{value:"XdaiQa",id:"xdaiqa",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enumeration-network"},"Enumeration: Network"),(0,o.kt)("p",null,"Supported Ethereum networks. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom")," if you'd like to bring your own deployment (e.g. local)"),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("h3",{id:"custom"},"Custom"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Custom")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Custom"')),(0,o.kt)("p",null,"Use this to specify an own main ColonyNetwork address in the options"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gnosis"},"Gnosis"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Gnosis")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Xdai"')),(0,o.kt)("p",null,"Gnosis chain"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"goerli"},"Goerli"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Goerli")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Goerli"')),(0,o.kt)("p",null,"Goerli testnet"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mainnet"},"Mainnet"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Mainnet")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Mainnet"')),(0,o.kt)("p",null,"Ethereum Mainnet"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"xdai"},"Xdai"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Xdai")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Xdai"')),(0,o.kt)("p",null,"Gnosis chain (alias)"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"xdaiqa"},"XdaiQa"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"XdaiQa")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"XdaiQa"')),(0,o.kt)("p",null,"Gnosis chain custom fork"))}m.isMDXComponent=!0}}]);