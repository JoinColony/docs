"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[9269],{8860:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>c});var t=n(7953);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},y=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return n?t.createElement(c,i(i({ref:a},y),{},{components:n})):t.createElement(c,i({ref:a},y))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3497:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(4432),r=(n(7953),n(8860));const o={},i="Class: ColonyTxCreator<C, M, E, MD>",l={unversionedId:"api/classes/ColonyTxCreator",id:"api/classes/ColonyTxCreator",title:"Class: ColonyTxCreator<C, M, E, MD\\>",description:"An umbrella API for all kinds of transactions within colonies",source:"@site/vendor/colonyJS/packages/sdk/docs/api/classes/ColonyTxCreator.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyTxCreator",permalink:"/colonysdk/api/classes/ColonyTxCreator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ColonyToken",permalink:"/colonysdk/api/classes/ColonyToken"},next:{title:"Class: ERC20Token",permalink:"/colonysdk/api/classes/ERC20Token"}},p={},s=[{value:"Create a standard transaction (&quot;force&quot; in dApp)",id:"create-a-standard-transaction-force-in-dapp",level:2},{value:"Create a motion to trigger an action once it passes",id:"create-a-motion-to-trigger-an-action-once-it-passes",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"metaMotion",id:"metamotion",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"metaTx",id:"metatx",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"motion",id:"motion",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"tx",id:"tx",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],y={toc:s},d="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"class-colonytxcreatorc-m-e-md"},"Class: ColonyTxCreator<C, M, E, MD",">"),(0,r.yg)("p",null,"An umbrella API for all kinds of transactions within colonies"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyTxCreator")," allows for a simple API to cover all the different cases of transactions within a colony. Once a ",(0,r.yg)("inlineCode",{parentName:"p"},"ColonyTxCreator")," is created using a method on the base contracts (e.g. ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony"},"Colony")," or extensions like ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation"},"VotingReputation"),") there are four options available:"),(0,r.yg)("h2",{id:"create-a-standard-transaction-force-in-dapp"},'Create a standard transaction ("force" in dApp)'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator#tx"},"tx"),": force a Colony transaction, knowing you have the permissions to do so"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/colonysdk/api/classes/MetaTxCreator#metatx"},"metaTx"),": same as ",(0,r.yg)("inlineCode",{parentName:"li"},"tx()"),", but send as a gasless metatransaction")),(0,r.yg)("h2",{id:"create-a-motion-to-trigger-an-action-once-it-passes"},"Create a motion to trigger an action once it passes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyTxCreator#motion"},"motion"),": create a motion (needs the motion's domain as a parameter)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyTxCreator#metamotion"},"metaMotion"),": same as ",(0,r.yg)("inlineCode",{parentName:"li"},"motion()"),", but sends a gasless metatransaction")),(0,r.yg)("p",null,"Learn more about these functions in their individual documentation"),(0,r.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"C")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.yg)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"M")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.yg)("inlineCode",{parentName:"td"},"C"),"[",(0,r.yg)("inlineCode",{parentName:"td"},'"functions"'),"]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"E")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/interfaces/EventData"},(0,r.yg)("inlineCode",{parentName:"a"},"EventData")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MD")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},(0,r.yg)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"C"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"M"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"ColonyTxCreator"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"new ColonyTxCreator"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"C"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"M"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"config"),")"),(0,r.yg)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"C")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.yg)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"M")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"E")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/interfaces/EventData"},(0,r.yg)("inlineCode",{parentName:"a"},"EventData")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MD")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,r.yg)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"config")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MetaMotionsConfig"),"<",(0,r.yg)("inlineCode",{parentName:"td"},"C"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"M"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"E"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"MD"),">")))),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},"MetaTxCreator"),".",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator#constructor"},"constructor")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"metamotion"},"metaMotion"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"metaMotion"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"motionDomain?"),"): ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MotionCreatedEventObject"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"Creates a motion for an action, using a gasless transaction"),(0,r.yg)("p",null,"You can specify a team (domain) this motion should be created in. It will be created in the Root team by default."),(0,r.yg)("p",null,"After creation, you can then ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," the transaction or wait for it to be ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),".\nSee also ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator#tx"},"tx")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"This will only work if the ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation"},"VotingReputation")," extension is installed for the Colony that's being acted on"),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"motionDomain")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Id.RootDomain"))))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MotionCreatedEventObject"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A motion transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"mined")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"encode"),"d."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"metatx"},"metaTx"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"metaTx"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,'Create a gasless MetaTransaction ("force" in dApp)'),(0,r.yg)("p",null,"After creation, you can then ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," the transaction or wait for it to be ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),".\nSee also ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator#tx"},"tx")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.yg)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyMetaTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyMetaTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},(0,r.yg)("inlineCode",{parentName:"a"},"TransactionResponse")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),"."),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},"MetaTxCreator"),".",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator#metatx"},"metaTx")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"motion"},"motion"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"motion"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"motionDomain?"),"): ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MotionCreatedEventObject"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"Creates a motion for an action"),(0,r.yg)("p",null,"You can specify a team (domain) this motion should be created in. It will be created in the Root team by default."),(0,r.yg)("p",null,"After creation, you can then ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," the transaction or wait for it to be ",(0,r.yg)("inlineCode",{parentName:"p"},"mined"),".\nSee also ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},"ColonyTransaction")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"This will only work if the ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation"},"VotingReputation")," extension is installed for the Colony that's being acted on"),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"motionDomain")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Id.RootDomain"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MotionCreatedEventObject"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A motion transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"mined")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"encode"),"d."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"tx"},"tx"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"tx"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,'Create a standard transaction ("force" in dApp)'),(0,r.yg)("p",null,"See also ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},"ColonyTransaction")," or ",(0,r.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk/guides/transactions"},"https://docs.colony.io/colonysdk/guides/transactions")," for more information"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.yg)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ColonyTransaction")),"<",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractTransaction")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),", ",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.yg)("p",null,"A transaction that can be ",(0,r.yg)("inlineCode",{parentName:"p"},"send"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"mined")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"encode"),"d."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},"MetaTxCreator"),".",(0,r.yg)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator#tx"},"tx")))}g.isMDXComponent=!0}}]);