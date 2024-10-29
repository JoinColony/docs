"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[8128],{8860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),y=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=y(n),m=r,c=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(c,o(o({ref:t},g),{},{components:n})):a.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var y=2;y<l;y++)o[y]=n[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=n(4432),r=(n(7953),n(8860));const l={},o="Class: ColonyEventManager",i={unversionedId:"api/classes/ColonyEventManager",id:"api/classes/ColonyEventManager",title:"Class: ColonyEventManager",description:"The ColonyEvents class is a wrapper around ethers's event implementations to make it easier to track and fetch Colony related events.",source:"@site/vendor/colonyJS/packages/sdk/docs/api/classes/ColonyEventManager.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyEventManager",permalink:"/next/colonysdk/api/classes/ColonyEventManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: Colony",permalink:"/next/colonysdk/api/classes/Colony"},next:{title:"Class: ColonyNetwork",permalink:"/next/colonysdk/api/classes/ColonyNetwork"}},p={},y=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"ipfs",id:"ipfs",level:3},{value:"provider",id:"provider",level:3},{value:"Methods",id:"methods",level:2},{value:"createEventSource",id:"createeventsource",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"createFilter",id:"createfilter",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"createMultiFilter",id:"createmultifilter",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getEvents",id:"getevents",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getMultiEvents",id:"getmultievents",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4}],g={toc:y},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"class-colonyeventmanager"},"Class: ColonyEventManager"),(0,r.yg)("p",null,"The ColonyEvents class is a wrapper around ",(0,r.yg)("em",{parentName:"p"},"ethers"),"'s event implementations to make it easier to track and fetch Colony related events.\nIt works by creating specific filters that can keep track of event sources and map filters to their respective events. This allows for\neasy parsing of event data, without necessarily knowing the contract that emitted it."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The API is subject to change as we find more applications for this"),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"new ColonyEventManager"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"provider"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"options?"),")"),(0,r.yg)("p",null,"Create a new ColonyEvents instance"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"As opposed to the ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," class, this constructor ",(0,r.yg)("em",{parentName:"p"},"needs")," an ",(0,r.yg)("em",{parentName:"p"},"ethers")," JsonRpcProvider (or a subclass of it) as it's\nthe only provider that supports topic filtering by multiple addresses"),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"provider")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"JsonRpcProvider")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An ",(0,r.yg)("em",{parentName:"td"},"ethers")," ",(0,r.yg)("inlineCode",{parentName:"td"},"JsonRpcProvider"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyEventManagerOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyEventManagerOptions"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional custom ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyEventManagerOptions"},"ColonyEventManagerOptions"))))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"ipfs"},"ipfs"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"ipfs"),": ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/IpfsMetadata"},(0,r.yg)("inlineCode",{parentName:"a"},"IpfsMetadata"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"provider"},"provider"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"provider"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonRpcProvider")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"createeventsource"},"createEventSource"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"createEventSource"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"contractFactory"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"T")),(0,r.yg)("p",null,"Create an event source to create filters with"),(0,r.yg)("p",null,"This method can be used to instantiate contract event sources from virtually any\nTypeChain ContractFactory (has to have the ",(0,r.yg)("inlineCode",{parentName:"p"},".connect()")," method) that can then\nbe used with the EventManager. Best to use with the contracts from ",(0,r.yg)("inlineCode",{parentName:"p"},"@colony/events"),"\nas they all are compatible"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Create an event source from the IColonyEventsFactory"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { ColonyEventManager } from '@colony/sdk';\nimport { IColonyEvents__factory as ColonyEventsFactory } from '@colony/events';\n\nconst manager = new ColonyEventManager(provider);\n// Event source that can be plugged into a filter creation method\nconst colonyEventSource = manager.createEventSource(ColonyEventsFactory);\n")),(0,r.yg)("h4",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"BaseContract"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"T"),">")))),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"contractFactory")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ContractFactory"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"T"),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"A TypeChain compatible contract factory")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"T")),(0,r.yg)("p",null,"An event source contract (it's just an ethers ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract"),")"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"createfilter"},"createFilter"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"createFilter"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"N"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"eventSource"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"address?"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"params?"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,r.yg)("p",null,"Create a ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter")," that keeps track of its event source"),(0,r.yg)("p",null,"To create a ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),", we need to not only give it the topics and addresses as required by ",(0,r.yg)("em",{parentName:"p"},"ethers"),"\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/types/#providers-Filter"},(0,r.yg)("inlineCode",{parentName:"a"},"Filter"),"s"),", but also the actual source contract of that Filter.\nLike this we can keep track of the source contract interface to parse the event data when it's emitted"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Filter for all ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainAdded")," events between block 21830000 and 21840000 (across all deployed ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," contracts)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"}," const domainAdded = colonyEvents.createFilter(\n   colonyEventSource,\n   'DomainAdded(address,uint256)',\n   null,\n   { fromBlock: 21830000 , toBlock: 21840000  },\n);\n")),(0,r.yg)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"BaseContract"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"T"),">"," & { ",(0,r.yg)("inlineCode",{parentName:"td"},"filters"),": { ","[P in string ","|"," number ","|"," symbol]",": Function }  }"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Needs to be a valid ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/#eventsource"},"EventSource")," (i.e. from ",(0,r.yg)("inlineCode",{parentName:"td"},"colonyEvents.eventSources"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An event signature as defined in the ",(0,r.yg)("em",{parentName:"td"},"ethers")," contract's ",(0,r.yg)("a",{parentName:"td",href:"https://docs.ethers.io/v5/api/contract/contract/#Contract--filters"},(0,r.yg)("inlineCode",{parentName:"a"},"filters"))," object. See the ",(0,r.yg)("a",{parentName:"td",href:"https://colony.gitbook.io/colony/colonyjs"},"ColonyJS documentation")," for a list of all available contracts and events")))),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"eventSource")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"eventName")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A valid event signature from the contract's ",(0,r.yg)("inlineCode",{parentName:"td"},"filters")," object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"address?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Address of the contract that can emit this event. Will listen to any contract if not provided")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"params?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Parameters"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"T"),"[",(0,r.yg)("inlineCode",{parentName:"td"},'"filters"'),"][`N`]",">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Parameters to filter by for the event. Has to be indexed in the contract (see ",(0,r.yg)("em",{parentName:"td"},"ethers")," ",(0,r.yg)("a",{parentName:"td",href:"https://docs.ethers.io/v5/api/contract/contract/#Contract--filters"},"Event Filters"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Object")),(0,r.yg)("td",{parentName:"tr",align:"left"},"You can define ",(0,r.yg)("inlineCode",{parentName:"td"},"fromBlock")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"toBlock")," only once for all the filters given (default for both is ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options.fromBlock?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BlockTag")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options.toBlock?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BlockTag")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"createmultifilter"},"createMultiFilter"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"createMultiFilter"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"N"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"contract"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"eventNames"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"address?"),"): ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMultiFilter"))),(0,r.yg)("p",null,"Create a ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter")," that keeps track of its event source and can work alongside other filters in ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyEventManager#getmultievents"},"getMultiEvents")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter")," works much like the ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),", just that we ",(0,r.yg)("em",{parentName:"p"},"have")," to specify an address of the contract which emits this event.\nFurthermore, no ",(0,r.yg)("inlineCode",{parentName:"p"},"fromBlock")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"toBlock")," requirements can be given (that is done on a global level in ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyEventManager#getmultievents"},"getMultiEvents"),")"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on. Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyMultiFilter")," does not allow for params to be passed in."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Filter for all ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainAdded")," events for a specific ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"Colony")," contract"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const domainAdded = colonyEvents.createFilter(\n  colonyEventSource,\n  'DomainAdded(address,uint256)',\n  colonyAddress,\n);\n")),(0,r.yg)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"BaseContract"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"T"),">"," & { ",(0,r.yg)("inlineCode",{parentName:"td"},"filters"),": { ","[P in string ","|"," number ","|"," symbol]",": Function }  }"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Needs to be a valid ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/#eventsource"},"EventSource")," (i.e. from ",(0,r.yg)("inlineCode",{parentName:"td"},"colonyEvents.eventSources"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An event signature as defined in the ",(0,r.yg)("em",{parentName:"td"},"ethers")," contract's ",(0,r.yg)("a",{parentName:"td",href:"https://docs.ethers.io/v5/api/contract/contract/#Contract--filters"},(0,r.yg)("inlineCode",{parentName:"a"},"filters"))," object. See the ",(0,r.yg)("a",{parentName:"td",href:"https://colony.gitbook.io/colony/colonyjs"},"ColonyJS documentation")," for a list of all available contracts and events")))),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"contract")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A valid ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/#eventsource"},"EventSource"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"eventNames")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"N"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"A list of valid event signatures from the contract's ",(0,r.yg)("inlineCode",{parentName:"td"},"filters")," object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"address?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Address of the contract that can emit this event. Will listen to any contract if not provided")))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMultiFilter"))),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getevents"},"getEvents"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getEvents"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"filter"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyEvent")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","[]",">"),(0,r.yg)("p",null,"Get events for a single filter"),(0,r.yg)("p",null,"Gets events for an individual filter and automatically parses the data if possible"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Retrieve and parse all ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainAdded")," events for a specific ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"Colony")," contract"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const domainAdded = colonyEvents.createFilter(\n   colonyEventSource,\n  'DomainAdded(address,uint256)',\n  colonyAddress,\n);\n// Immediately executing async function\n(async function() {\n  const events = await colonyEvents.getEvents(domainAdded);\n})();\n")),(0,r.yg)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"filter")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"A ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),", ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter"),"s will not work")))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyEvent")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","[]",">"),(0,r.yg)("p",null,"An array of ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},"ColonyEvent"),"s"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getmultievents"},"getMultiEvents"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getMultiEvents"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"filters"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyEvent")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","[]",">"),(0,r.yg)("p",null,"Get events for multiple filters across multiple addresses at once"),(0,r.yg)("p",null,"All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses\nThis is handy when you want to listen to a fixed set of events for a lot of different contracts"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fromBlock")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"toBlock")," properties of the indivdual filters will be ignored"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Retrieve and parse all ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainAdded")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainMetadata")," events for a specific ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," contract.\nNote that we're using ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyEventManager#createmultifilter"},"createMultiFilter")," here. The two ",(0,r.yg)("inlineCode",{parentName:"p"},"colonyAddress"),"es could also be different"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const domainAdded = colonyEvents.createMultiFilter(\n  colonyEventSource,\n  'DomainAdded(address,uint256)',\n  colonyAddress,\n);\nconst domainMetadata = colonyEvents.createMultiFilter(\n  colonyEventSource,\n  'DomainMetadata(address,uint256,string)',\n  colonyAddress,\n);\n\n// Immediately executing async function\n(async function() {\n  const events = await colonyEvents.getMultiEvents([domainAdded, domainMetadata]);\n})();\n")),(0,r.yg)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"filters")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMultiFilter"))," ","|"," ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMultiFilter")),"[]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"An array of ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter"),"s. Normal ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),"s will not work")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Object")),(0,r.yg)("td",{parentName:"tr",align:"left"},"You can define ",(0,r.yg)("inlineCode",{parentName:"td"},"fromBlock")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"toBlock")," only once for all the filters given (default for both is ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options.fromBlock?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BlockTag")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options.toBlock?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BlockTag")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyEvent")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","[]",">"),(0,r.yg)("p",null,"An array of ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyEvent"},"ColonyEvent"),"s"))}s.isMDXComponent=!0}}]);