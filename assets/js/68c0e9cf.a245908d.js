"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,y=k["".concat(s,".").concat(m)]||k[m]||d[m]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},l="Class: ColonyNetwork",i={unversionedId:"api/classes/ColonyNetwork",id:"api/classes/ColonyNetwork",title:"Class: ColonyNetwork",description:"Constructors",source:"@site/vendor/colonySDK/docs/api/classes/ColonyNetwork.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyNetwork",permalink:"/colonysdk/api/classes/ColonyNetwork",draft:!1,editUrl:"https://github.com/JoinColony/api/classes/ColonyNetwork.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ColonyEventManager",permalink:"/colonysdk/api/classes/ColonyEventManager"},next:{title:"Class: ColonyToken",permalink:"/colonysdk/api/classes/ColonyToken"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"ipfs",id:"ipfs",level:3},{value:"networkClient",id:"networkclient",level:3},{value:"Methods",id:"methods",level:2},{value:"getColony",id:"getcolony",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"getMetaColony",id:"getmetacolony",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-colonynetwork"},"Class: ColonyNetwork"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ColonyNetwork"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signerOrProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),")"),(0,r.kt)("p",null,"Creates a new instance to connect to the ColonyNetwork"),(0,r.kt)("p",null,"This is your main entry point to talk to the Colony Network Smart Contracts.\nFrom here you should be able to instantiate all the required instances for Colonies and their extensions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { providers } from 'ethers';\nimport { ColonyNetwork, Tokens } from '@colony/sdk';\n\n// Connect directly to the deployed Colony Network on Gnosis Chain\nconst provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');\nconst colonyNetwork = new ColonyNetwork(provider);\n// Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signerOrProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SignerOrProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ",(0,r.kt)("em",{parentName:"td"},"ethers")," compatible Signer or Provider instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ColonyNetworkOptions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional custom ColonyNetworkOptions")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"ipfs"},"ipfs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ipfs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IpfsMetadata")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"networkclient"},"networkClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"networkClient"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getcolony"},"getColony"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getColony"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"Get a new instance of a Colony"),(0,r.kt)("p",null,"Use this function to instantiate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Colony")," by providing the Colony's address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Colony's address")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"A Colony abstaction instance"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmetacolony"},"getMetaColony"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMetaColony"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"Get a new instance of the MetaColony"),(0,r.kt)("p",null,"Use this function to instantiate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Colony")," for the deployed MetaColony"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"A Colony abstaction instance of the MetaColony"))}d.isMDXComponent=!0}}]);