"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[5630],{8860:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>N});var n=t(7953);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),y=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=y(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=y(t),m=r,N=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return t?n.createElement(N,i(i({ref:a},g),{},{components:t})):n.createElement(N,i({ref:a},g))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var y=2;y<l;y++)i[y]=t[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3704:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var n=t(4432),r=(t(7953),t(8860));const l={},i="API",o={unversionedId:"api/README",id:"api/README",title:"API",description:"Namespaces",source:"@site/vendor/colonyJS/packages/sdk/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/next/colonysdk/api/",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Metadata within Colony",permalink:"/next/colonysdk/guides/metadata"},next:{title:"Class: CloudflareReadonlyAdapter",permalink:"/next/colonysdk/api/classes/CloudflareReadonlyAdapter"}},p={},y=[{value:"Namespaces",id:"namespaces",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Domain",id:"domain",level:3},{value:"EventSource",id:"eventsource",level:3},{value:"Metadata",id:"metadata",level:3},{value:"MetadataEvent",id:"metadataevent",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Motion",id:"motion",level:3},{value:"SignerOrProvider",id:"signerorprovider",level:3},{value:"SupportedColonyContract",id:"supportedcolonycontract",level:3},{value:"Token",id:"token",level:3},{value:"Variables",id:"variables",level:2},{value:"ERC20Interface",id:"erc20interface",level:3},{value:"ERC2612Interface",id:"erc2612interface",level:3},{value:"ERC721Interface",id:"erc721interface",level:3},{value:"ExtensionVersions",id:"extensionversions",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"IpfsMetadataEvents",id:"ipfsmetadataevents",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Functions",id:"functions",level:2},{value:"addressesAreEqual",id:"addressesareequal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getToken",id:"gettoken",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isExtensionCompatible",id:"isextensioncompatible",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"parseLogs",id:"parselogs",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"toEth",id:"toeth",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"toWei",id:"towei",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"w",id:"w",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4}],g={toc:y},d="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"api"},"API"),(0,r.yg)("h2",{id:"namespaces"},"Namespaces"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/modules/Tokens"},"Tokens"))),(0,r.yg)("h2",{id:"enumerations"},"Enumerations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/ColonyRole"},"ColonyRole")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/ColonyRpcEndpoint"},"ColonyRpcEndpoint")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/Extension"},"Extension")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/Id"},"Id")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/MetadataType"},"MetadataType")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/MotionState"},"MotionState")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/Network"},"Network")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/SupportedExtension"},"SupportedExtension")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/TeamColor"},"TeamColor")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/enums/Vote"},"Vote"))),(0,r.yg)("h2",{id:"classes"},"Classes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/CloudflareReadonlyAdapter"},"CloudflareReadonlyAdapter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/Colony"},"Colony")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ColonyEventManager"},"ColonyEventManager")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ColonyToken"},"ColonyToken")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ColonyTxCreator"},"ColonyTxCreator")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ERC20Token"},"ERC20Token")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ERC2612Token"},"ERC2612Token")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/IpfsMetadata"},"IpfsMetadata")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/MetaTxCreator"},"MetaTxCreator")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/OneTxPayment"},"OneTxPayment")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/PinataAdapter"},"PinataAdapter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/ReputationClient"},"ReputationClient")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TokenLocking"},"TokenLocking")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator"},"TxCreator")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/VotingReputation"},"VotingReputation"))),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/AnnotationData"},"AnnotationData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/BaseContract"},"BaseContract")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyData"},"ColonyData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyEvent"},"ColonyEvent")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyEventManagerOptions"},"ColonyEventManagerOptions")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyMetaTransaction"},"ColonyMetaTransaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyNetworkOptions"},"ColonyNetworkOptions")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyTopic"},"ColonyTopic")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ColonyTransaction"},"ColonyTransaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ContractReceipt"},"ContractReceipt")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ContractTransaction"},"ContractTransaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/DecisionData"},"DecisionData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/DomainData"},"DomainData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/Ethers6FilterByBlockHash"},"Ethers6FilterByBlockHash")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/EventData"},"EventData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/MetaTxBaseContract"},"MetaTxBaseContract")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},"ParsedLogTransactionReceipt")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/PermissionConfig"},"PermissionConfig")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/SafeInfo"},"SafeInfo")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/SupportedExtensions"},"SupportedExtensions")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/TokenData"},"TokenData")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/TxConfig"},"TxConfig")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/interfaces/TxCreatorConfig"},"TxCreatorConfig"))),(0,r.yg)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.yg)("h3",{id:"domain"},"Domain"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"Domain"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyDataTypes10.DomainStructOutput")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyDataTypes11.DomainStructOutput")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyDataTypes12.DomainStructOutput")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"eventsource"},"EventSource"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"EventSource"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"BaseContract")),(0,r.yg)("p",null,"A valid eventsource (currently just an ethers.js ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/BaseContract"},"BaseContract"),")"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"metadata"},"Metadata"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"Metadata"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"AnnotationMetadata")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyMetadata")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"DecisionMetadata")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"DomainMetadata")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"MiscMetadata")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"metadataevent"},"MetadataEvent"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"MetadataEvent"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"K"),">",": typeof ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/#ipfsmetadataevents"},(0,r.yg)("inlineCode",{parentName:"a"},"IpfsMetadataEvents")),"[",(0,r.yg)("inlineCode",{parentName:"p"},"K"),"]"),(0,r.yg)("h4",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"K")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"motion"},"Motion"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"Motion"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"VotingReputationDataTypes7.MotionStructOutput")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"VotingReputationDataTypes8.MotionStructOutput")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"VotingReputationDataTypes9.MotionStructOutput")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"signerorprovider"},"SignerOrProvider"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"SignerOrProvider"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Signer")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Provider")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"supportedcolonycontract"},"SupportedColonyContract"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"SupportedColonyContract"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyContract11")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyContract12")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyContract13")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"token"},"Token"),(0,r.yg)("p",null,"\u01ac ",(0,r.yg)("strong",{parentName:"p"},"Token"),": ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyToken"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyToken"))," ","|"," ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ERC20Token"},(0,r.yg)("inlineCode",{parentName:"a"},"ERC20Token"))," ","|"," ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ERC2612Token"},(0,r.yg)("inlineCode",{parentName:"a"},"ERC2612Token"))),(0,r.yg)("h2",{id:"variables"},"Variables"),(0,r.yg)("h3",{id:"erc20interface"},"ERC20Interface"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,r.yg)("strong",{parentName:"p"},"ERC20Interface"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenERC20Interface")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"erc2612interface"},"ERC2612Interface"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,r.yg)("strong",{parentName:"p"},"ERC2612Interface"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenERC2612Interface")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"erc721interface"},"ERC721Interface"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,r.yg)("strong",{parentName:"p"},"ERC721Interface"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenERC721Interface")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"extensionversions"},"ExtensionVersions"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,r.yg)("strong",{parentName:"p"},"ExtensionVersions"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Object")),(0,r.yg)("p",null,"Latest versions of all extension contracts"),(0,r.yg)("h4",{id:"type-declaration"},"Type declaration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CoinMachine")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"7")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"8"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"EvaluatedExpenditure")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"FundingQueue")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"IVotingReputation")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"7")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"8")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"9"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"OneTxPayment")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ReputationBootstrapper")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"StakedExpenditure")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"StreamingPayments")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TokenSupplier")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"VotingReputation")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"7")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"8")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"9"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Whitelist")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"ipfsmetadataevents"},"IpfsMetadataEvents"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,r.yg)("strong",{parentName:"p"},"IpfsMetadataEvents"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Object")),(0,r.yg)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"annotation")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'"Annotation(address,bytes32,string)"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"colony")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'"ColonyMetadata(address,string)"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"decision")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'"Annotation(address,bytes32,string)"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"default")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'""'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"domain")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'"DomainMetadata(address,uint256,string)"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"misc")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'""'))))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"addressesareequal"},"addressesAreEqual"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"addressesAreEqual"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"b"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Check if two addresses are equal"),(0,r.yg)("p",null,"Addresses can be displayed using a checksum format which contains uppercase and lowercase characters.\nThis function can compare addresses in either format"),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"a")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Left hand side address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"b")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Right hand side address")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Whether a and b are the same address"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"gettoken"},"getToken"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getToken"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"colonyNetwork"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ERC20Token"},(0,r.yg)("inlineCode",{parentName:"a"},"ERC20Token")),">"),(0,r.yg)("p",null,"Get a properly instantiated Token contract client"),(0,r.yg)("p",null,"This method tries to auto-detect the type of the token under the given address"),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"colonyNetwork")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyNetwork"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"A ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"address")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The token's address")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ERC20Token"},(0,r.yg)("inlineCode",{parentName:"a"},"ERC20Token")),">"),(0,r.yg)("p",null,"A Token contract client"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"isextensioncompatible"},"isExtensionCompatible"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"isExtensionCompatible"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"extension"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"extensionVersion"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"colonyVersion"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Checks the compatibility of an extension version with a colony version it requests to be installed in\nReturns ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," if an extension version is compatible with the given colony version"),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"extension")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/Extension"},(0,r.yg)("inlineCode",{parentName:"a"},"Extension"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"A valid ",(0,r.yg)("inlineCode",{parentName:"td"},"Extension")," contract name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"extensionVersion")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ExtensionVersion")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The version of the extension to check against the colony")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"colonyVersion")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"7")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"8")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"9")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"10")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"11")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"12")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"13")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The version of the colony to check for")))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"indication whether extension in given version is compatible with colony at the given version"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"parselogs"},"parseLogs"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"parseLogs"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"logs"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"iface"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"LogDescription"),"[]"),(0,r.yg)("p",null,"Try to parse an array of logs with a given interface"),(0,r.yg)("p",null,"Will filter out logs that can't be parsed with the given interface"),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"logs")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Log"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Array of log entries (usually from a ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ContractReceipt"},"ContractReceipt"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"iface")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Interface")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Ethers compatible contract interface")))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"LogDescription"),"[]"),(0,r.yg)("p",null,"A list of parsed log entries (events)"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"toeth"},"toEth"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"toEth"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"num"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Convert any number to ETH (remove 18 zeros)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { toEth } from '@colony/sdk';\n\nconst oneEther = BigNumber.from(\"1000000000000000000\");\nconsole.log(toEth(oneEther)); // 1.0\n")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"num")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BigNumberish"))))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"towei"},"toWei"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"toWei"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"num"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.yg)("p",null,"Convert any number to wei (add 18 zeros)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { toWei } from '@colony/sdk';\n\nconst oneEther = '1.0';\nconsole.log(toWei(oneEther)); // { BigNumber: \"1000000000000000000\" }\n")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"num")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"w"},"w"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"w"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"str"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.yg)("p",null,"Short-hand method to convert a number to wei using JS tagged template strings"),(0,r.yg)("p",null,"See also here: ",(0,r.yg)("a",{parentName:"p",href:"http://tc39wiki.calculist.org/es6/template-strings/"},"http://tc39wiki.calculist.org/es6/template-strings/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"This is only useful in contexts where the number is hard-coded (e.g. examples)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\nconsole.log(w`1.0`); // { BigNumber: \"1000000000000000000\" }\n")),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"str")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TemplateStringsArray"))))),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BigNumber")))}s.isMDXComponent=!0}}]);