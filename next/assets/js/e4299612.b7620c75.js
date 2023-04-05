"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},80978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l="Ether Router (IEtherRouter)",i={unversionedId:"interfaces/ietherrouter",id:"interfaces/ietherrouter",title:"Ether Router (IEtherRouter)",description:"Ether Router is an internal contract used to implement upgradability. A",source:"@site/vendor/colonyNetwork/docs/interfaces/ietherrouter.md",sourceDirName:"interfaces",slug:"/interfaces/ietherrouter",permalink:"/next/colonynetwork/interfaces/ietherrouter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Colony Network (IColonyNetwork)",permalink:"/next/colonynetwork/interfaces/icolonynetwork"},next:{title:"Meta Colony (IMetaColony)",permalink:"/next/colonynetwork/interfaces/imetacolony"}},s={},u=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>setAuthority(address authority_)</code>",id:"-setauthorityaddress-authority_",level:3},{value:"\u25b8 <code>setOwner(address owner_)</code>",id:"-setowneraddress-owner_",level:3},{value:"\u25b8 <code>setResolver(address _resolver)</code>",id:"-setresolveraddress-_resolver",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ether-router-ietherrouter"},"Ether Router (",(0,a.kt)("inlineCode",{parentName:"h1"},"IEtherRouter"),")"),(0,a.kt)("p",null,"Ether Router is an internal contract used to implement upgradability. A\nproxy contract, this contract provides consistent storage while allowing for\nfunction calls to be dispatched to other contracts. This allows for a colony's\nstate to remain constant while upgrading the function logic available to users."),(0,a.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,a.kt)("h3",{id:"-setauthorityaddress-authority_"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"setAuthority(address authority_)")),(0,a.kt)("p",null,"Sets the EtherRouter authority. Inherited from DSAuth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority_"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new DSAuthority instance")))),(0,a.kt)("h3",{id:"-setowneraddress-owner_"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"setOwner(address owner_)")),(0,a.kt)("p",null,"Sets the EtherRouter owner. Inherited from DSAuth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new owner")))),(0,a.kt)("h3",{id:"-setresolveraddress-_resolver"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"setResolver(address _resolver)")),(0,a.kt)("p",null,"Sets the resolver address. This is used in the routing of all delegatecalls by the EtherRouter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_resolver"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new Resolver")))))}c.isMDXComponent=!0}}]);