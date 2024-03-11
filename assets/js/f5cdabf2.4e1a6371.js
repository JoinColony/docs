"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i="Enumeration: MetadataType",l={unversionedId:"api/enums/MetadataType",id:"api/enums/MetadataType",title:"Enumeration: MetadataType",description:"Available metadata types",source:"@site/vendor/colonyJS/packages/sdk/docs/api/enums/MetadataType.md",sourceDirName:"api/enums",slug:"/api/enums/MetadataType",permalink:"/colonysdk/api/enums/MetadataType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Enumeration: Id",permalink:"/colonysdk/api/enums/Id"},next:{title:"Enumeration: MotionState",permalink:"/colonysdk/api/enums/MotionState"}},p={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Annotation",id:"annotation",level:3},{value:"Colony",id:"colony",level:3},{value:"DEFAULT",id:"default",level:3},{value:"Decision",id:"decision",level:3},{value:"Domain",id:"domain",level:3},{value:"Misc",id:"misc",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumeration-metadatatype"},"Enumeration: MetadataType"),(0,r.kt)("p",null,"Available metadata types"),(0,r.kt)("p",null,"DEFAULT is usually used to indicate a generic Metadata type"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"annotation"},"Annotation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Annotation")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"annotation"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colony"},"Colony"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Colony")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"colony"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"default"},"DEFAULT"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"DEFAULT")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"decision"},"Decision"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Decision")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"decision"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"domain"},"Domain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Domain")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"domain"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"misc"},"Misc"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Misc")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"misc"')))}s.isMDXComponent=!0}}]);