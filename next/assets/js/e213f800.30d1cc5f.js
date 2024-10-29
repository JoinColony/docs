"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[468],{8860:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>c});var n=t(7953);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},y=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return t?n.createElement(c,i(i({ref:a},y),{},{components:t})):n.createElement(c,i({ref:a},y))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6352:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(4432),r=(t(7953),t(8860));const o={},i="Class: MetaTxCreator<C, M, E, MD>",l={unversionedId:"api/classes/MetaTxCreator",id:"api/classes/MetaTxCreator",title:"Class: MetaTxCreator<C, M, E, MD\\>",description:"An umbrella API for all kinds of transactions",source:"@site/vendor/colonyJS/packages/sdk/docs/api/classes/MetaTxCreator.md",sourceDirName:"api/classes",slug:"/api/classes/MetaTxCreator",permalink:"/next/colonysdk/api/classes/MetaTxCreator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: IpfsMetadata",permalink:"/next/colonysdk/api/classes/IpfsMetadata"},next:{title:"Class: OneTxPayment",permalink:"/next/colonysdk/api/classes/OneTxPayment"}},p={},s=[{value:"Create a standard transaction (&quot;force&quot; in dApp)",id:"create-a-standard-transaction-force-in-dapp",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Methods",id:"methods",level:2},{value:"metaTx",id:"metatx",level:3},{value:"Returns",id:"returns",level:4},{value:"tx",id:"tx",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],y={toc:s},d="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"class-metatxcreatorc-m-e-md"},"Class: MetaTxCreator<C, M, E, MD",">"),(0,r.yg)("p",null,"An umbrella API for all kinds of transactions"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaTxCreator")," allows for a simple API to cover all the different cases of transactions within the Colony Network. The ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaTxCreator")," supports sending a standard transaction (",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#tx"},"tx"),") as well as metatransactions (",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator#metatx"},"metaTx"),")."),(0,r.yg)("h2",{id:"create-a-standard-transaction-force-in-dapp"},'Create a standard transaction ("force" in dApp)'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator#tx"},"tx"),": force a Colony transaction, knowing you have the permissions to do so"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/next/colonysdk/api/classes/MetaTxCreator#metatx"},"metaTx"),": same as ",(0,r.yg)("inlineCode",{parentName:"li"},"tx()"),", but send as a gasless metatransaction")),(0,r.yg)("p",null,"Learn more about these functions in their individual documentation"),(0,r.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"C")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.yg)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"M")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.yg)("inlineCode",{parentName:"td"},"C"),"[",(0,r.yg)("inlineCode",{parentName:"td"},'"functions"'),"]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"E")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/EventData"},(0,r.yg)("inlineCode",{parentName:"a"},"EventData")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MD")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},(0,r.yg)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"C"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"M"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"MetaTxCreator"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyTxCreator"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTxCreator"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"new MetaTxCreator"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"C"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"M"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),")"),(0,r.yg)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"C")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.yg)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"M")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"E")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/EventData"},(0,r.yg)("inlineCode",{parentName:"a"},"EventData")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MD")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Object"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"args")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"unknown"),"[] ","|"," () => ",(0,r.yg)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"unknown"),"[]",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"colonyNetwork")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyNetwork")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"contract")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"C"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"eventData?")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"receipt"),": ",(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"E"),">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"metadataType?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MD"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"method")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"M"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.yg)("inlineCode",{parentName:"td"},"txConfig?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/TxConfig"},(0,r.yg)("inlineCode",{parentName:"a"},"TxConfig")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"MD"),">")))),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},"TxCreator"),".",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#constructor"},"constructor")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"metatx"},"metaTx"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"metaTx"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,'Create a gasless MetaTransaction ("force" in dApp)'),(0,r.yg)("p",null,"After creation, you can then ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," the transaction or wait for it to be ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),".\nSee also ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#tx"},"tx")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.yg)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),"."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"tx"},"tx"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"tx"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,'Create a standard transaction ("force" in dApp)'),(0,r.yg)("p",null,"See also ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyTransaction"},"ColonyTransaction")," or ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.yg)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"mined")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"encode"),"d."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},"TxCreator"),".",(0,r.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#tx"},"tx")))}g.isMDXComponent=!0}}]);