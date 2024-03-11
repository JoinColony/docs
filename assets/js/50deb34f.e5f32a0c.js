"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={},l="Interface: ContractReceipt",o={unversionedId:"api/interfaces/ContractReceipt",id:"api/interfaces/ContractReceipt",title:"Interface: ContractReceipt",description:"Hierarchy",source:"@site/vendor/colonyJS/packages/sdk/docs/api/interfaces/ContractReceipt.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ContractReceipt",permalink:"/colonysdk/api/interfaces/ContractReceipt",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ColonyTransaction<C, E, R, MD\\>",permalink:"/colonysdk/api/interfaces/ColonyTransaction"},next:{title:"Interface: ContractTransaction",permalink:"/colonysdk/api/interfaces/ContractTransaction"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"blockHash",id:"blockhash",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"byzantium",id:"byzantium",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"confirmations",id:"confirmations",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"contractAddress",id:"contractaddress",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"cumulativeGasUsed",id:"cumulativegasused",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"effectiveGasPrice",id:"effectivegasprice",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"events",id:"events",level:3},{value:"from",id:"from",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"gasUsed",id:"gasused",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"logs",id:"logs",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"logsBloom",id:"logsbloom",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"root",id:"root",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"status",id:"status",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"to",id:"to",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"transactionHash",id:"transactionhash",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"transactionIndex",id:"transactionindex",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from-16",level:4}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-contractreceipt"},"Interface: ContractReceipt"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TransactionReceipt")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ContractReceipt"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"blockhash"},"blockHash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.blockHash"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.blockNumber"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"byzantium"},"byzantium"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"byzantium"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.byzantium"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"confirmations"},"confirmations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"confirmations"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.confirmations"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contractaddress"},"contractAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"contractAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.contractAddress"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cumulativegasused"},"cumulativeGasUsed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cumulativeGasUsed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.cumulativeGasUsed"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effectivegasprice"},"effectiveGasPrice"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"effectiveGasPrice"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.effectiveGasPrice"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"events"},"events"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"events"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"from"},"from"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"from"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.from"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gasused"},"gasUsed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.gasUsed"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logs"},"logs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"logs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Log"),"[]"),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.logs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logsbloom"},"logsBloom"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"logsBloom"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.logsBloom"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"root"},"root"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"root"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.root"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.status"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"to"},"to"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"to"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.to"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.transactionHash"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.transactionIndex"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,i.kt)("p",null,"TransactionReceipt.type"))}s.isMDXComponent=!0}}]);