"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7259],{8860:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(7953);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||y[m]||a;return t?n.createElement(g,l(l({ref:r},c),{},{components:t})):n.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1534:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=t(4432),i=(t(7953),t(8860));const a={},l="Interface: Ethers6Filter",o={unversionedId:"api/interfaces/Ethers6Filter",id:"api/interfaces/Ethers6Filter",title:"Interface: Ethers6Filter",description:"Ethers 6 supports mulitple addresses in a filter. Until then we have this",source:"@site/vendor/colonyJS/packages/sdk/docs/api/interfaces/Ethers6Filter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Ethers6Filter",permalink:"/colonysdk/api/interfaces/Ethers6Filter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: DomainData",permalink:"/colonysdk/api/interfaces/DomainData"},next:{title:"Interface: Ethers6FilterByBlockHash",permalink:"/colonysdk/api/interfaces/Ethers6FilterByBlockHash"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-2",level:4}],c={toc:s},d="wrapper";function y(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"interface-ethers6filter"},"Interface: Ethers6Filter"),(0,i.yg)("p",null,"Ethers 6 supports mulitple addresses in a filter. Until then we have this"),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.yg)("inlineCode",{parentName:"p"},"Filter"),", ",(0,i.yg)("inlineCode",{parentName:"p"},'"address"'),">"),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Ethers6Filter"))),(0,i.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},(0,i.yg)("inlineCode",{parentName:"a"},"ColonyFilter"))))),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"address"},"address"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"address"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"fromblock"},"fromBlock"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"fromBlock"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,i.yg)("p",null,"Omit.fromBlock"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"toblock"},"toBlock"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"toBlock"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.yg)("p",null,"Omit.toBlock"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"topics"},"topics"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"topics"),": (",(0,i.yg)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,i.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.yg)("p",null,"Omit.topics"))}y.isMDXComponent=!0}}]);