"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="Enumeration: FundingPotAssociatedType",p={unversionedId:"api/enums/FundingPotAssociatedType",id:"api/enums/FundingPotAssociatedType",title:"Enumeration: FundingPotAssociatedType",description:"Funding pots can have different types in a colony.",source:"@site/vendor/colonyJS/docs/api/enums/FundingPotAssociatedType.md",sourceDirName:"api/enums",slug:"/api/enums/FundingPotAssociatedType",permalink:"/next/colonyjs/api/enums/FundingPotAssociatedType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Enumeration: Extension",permalink:"/next/colonyjs/api/enums/Extension"},next:{title:"Enumeration: Id",permalink:"/next/colonyjs/api/enums/Id"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Domain",id:"domain",level:3},{value:"Expenditure",id:"expenditure",level:3},{value:"Payment",id:"payment",level:3},{value:"Task",id:"task",level:3},{value:"Unassigned",id:"unassigned",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enumeration-fundingpotassociatedtype"},"Enumeration: FundingPotAssociatedType"),(0,o.kt)("p",null,"Funding pots can have different types in a colony.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/docs/_TLDR_Pots.md#types-of-pots"},"here")," for more details"),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("h3",{id:"domain"},"Domain"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Domain")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"1")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"expenditure"},"Expenditure"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Expenditure")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payment"},"Payment"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Payment")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"3")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Task")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"2")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"unassigned"},"Unassigned"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Unassigned")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"0")))}c.isMDXComponent=!0}}]);