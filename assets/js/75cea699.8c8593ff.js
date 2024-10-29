"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[3368],{8860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=o,d=m["".concat(p,".").concat(c)]||m[c]||y[c]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(4432),o=(t(7953),t(8860));const i={},a="Enumeration: Network",l={unversionedId:"api/enums/Network",id:"api/enums/Network",title:"Enumeration: Network",description:"Supported Ethereum networks. Use Custom if you'd like to bring your own deployment (e.g. local)",source:"@site/vendor/colonyJS/packages/sdk/docs/api/enums/Network.md",sourceDirName:"api/enums",slug:"/api/enums/Network",permalink:"/colonysdk/api/enums/Network",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Enumeration: MotionState",permalink:"/colonysdk/api/enums/MotionState"},next:{title:"Enumeration: SupportedExtension",permalink:"/colonysdk/api/enums/SupportedExtension"}},p={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Custom",id:"custom",level:3},{value:"Gnosis",id:"gnosis",level:3},{value:"Goerli",id:"goerli",level:3},{value:"Mainnet",id:"mainnet",level:3},{value:"Xdai",id:"xdai",level:3},{value:"XdaiQa",id:"xdaiqa",level:3}],s={toc:u},m="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"enumeration-network"},"Enumeration: Network"),(0,o.yg)("p",null,"Supported Ethereum networks. Use ",(0,o.yg)("inlineCode",{parentName:"p"},"Custom")," if you'd like to bring your own deployment (e.g. local)"),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"custom"},"Custom"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Custom")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Custom"')),(0,o.yg)("p",null,"Use this to specify an own main ColonyNetwork address in the options"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"gnosis"},"Gnosis"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Gnosis")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Xdai"')),(0,o.yg)("p",null,"Gnosis chain"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"goerli"},"Goerli"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Goerli")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Goerli"')),(0,o.yg)("p",null,"Goerli testnet"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"mainnet"},"Mainnet"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Mainnet")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Mainnet"')),(0,o.yg)("p",null,"Ethereum Mainnet"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"xdai"},"Xdai"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Xdai")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Xdai"')),(0,o.yg)("p",null,"Gnosis chain (alias)"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"xdaiqa"},"XdaiQa"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"XdaiQa")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"XdaiQa"')),(0,o.yg)("p",null,"Gnosis chain custom fork"))}y.isMDXComponent=!0}}]);