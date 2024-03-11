"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[8806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||k[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},l="Interface: ColonyEvent<M>",i={unversionedId:"api/interfaces/ColonyEvent",id:"api/interfaces/ColonyEvent",title:"Interface: ColonyEvent<M\\>",description:"An Event that came from a contract within the Colony Network",source:"@site/vendor/colonyJS/packages/sdk/docs/api/interfaces/ColonyEvent.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ColonyEvent",permalink:"/colonysdk/api/interfaces/ColonyEvent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ColonyData",permalink:"/colonysdk/api/interfaces/ColonyData"},next:{title:"Interface: ColonyEventManagerOptions",permalink:"/colonysdk/api/interfaces/ColonyEventManagerOptions"}},p={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"data",id:"data",level:3},{value:"eventName",id:"eventname",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"eventSource",id:"eventsource",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"getMetadata",id:"getmetadata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"transactionHash",id:"transactionhash",level:3}],c={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-colonyeventm"},"Interface: ColonyEvent<M",">"),(0,a.kt)("p",null,"An Event that came from a contract within the Colony Network"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"M")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,a.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},(0,a.kt)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ColonyEvent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#address"},"address")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eventname"},"eventName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"eventName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The full event signature of this event (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenMinted(uint256))")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#eventname"},"eventName")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eventsource"},"eventSource"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"eventSource"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseContract")),(0,a.kt)("p",null,"The generated id of the contract the event originated from"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#eventsource"},"eventSource")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromblock"},"fromBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#fromblock"},"fromBlock")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getmetadata"},"getMetadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"getMetadata"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"MetadataTypeMap"),"[",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"]",">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"MetadataTypeMap"),"[",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"]",">"),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"MetadataTypeMap"),"[",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"]",">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toblock"},"toBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#toblock"},"toBlock")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"topics"},"topics"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"topics"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#topics"},"topics")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}k.isMDXComponent=!0}}]);