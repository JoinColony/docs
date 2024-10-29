"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[6049],{8860:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var r=a(7953);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(a),g=i,m=y["".concat(s,".").concat(g)]||y[g]||d[g]||t;return a?r.createElement(m,o(o({ref:n},c),{},{components:a})):r.createElement(m,o({ref:n},c))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[y]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<t;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2787:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>p,toc:()=>l});var r=a(4432),i=(a(7953),a(8860));const t={},o="Interface: ContractTransaction",p={unversionedId:"api/interfaces/ContractTransaction",id:"api/interfaces/ContractTransaction",title:"Interface: ContractTransaction",description:"Hierarchy",source:"@site/vendor/colonyJS/packages/sdk/docs/api/interfaces/ContractTransaction.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ContractTransaction",permalink:"/colonysdk/api/interfaces/ContractTransaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ContractReceipt",permalink:"/colonysdk/api/interfaces/ContractReceipt"},next:{title:"Interface: DecisionData",permalink:"/colonysdk/api/interfaces/DecisionData"}},s={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"accessList",id:"accesslist",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"blockHash",id:"blockhash",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"chainId",id:"chainid",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"confirmations",id:"confirmations",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"data",id:"data",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"from",id:"from",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"gasLimit",id:"gaslimit",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"gasPrice",id:"gasprice",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"hash",id:"hash",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"maxFeePerGas",id:"maxfeepergas",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"maxPriorityFeePerGas",id:"maxpriorityfeepergas",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"nonce",id:"nonce",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"r",id:"r",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"raw",id:"raw",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"s",id:"s",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"timestamp",id:"timestamp",level:3},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"to",id:"to",level:3},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"v",id:"v",level:3},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"value",id:"value",level:3},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"Methods",id:"methods",level:2},{value:"wait",id:"wait",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4}],c={toc:l},y="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(y,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"interface-contracttransaction"},"Interface: ContractTransaction"),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},(0,i.yg)("inlineCode",{parentName:"a"},"TransactionResponse"))),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ContractTransaction"))))),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"accesslist"},"accessList"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"accessList"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"AccessList")),(0,i.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#accesslist"},"accessList")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"blockhash"},"blockHash"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"blockHash"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#blockhash"},"blockHash")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"blocknumber"},"blockNumber"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"blockNumber"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#blocknumber"},"blockNumber")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"chainid"},"chainId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"chainId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#chainid"},"chainId")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"confirmations"},"confirmations"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"confirmations"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#confirmations"},"confirmations")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"data"},"data"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"data"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#data"},"data")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"from"},"from"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"from"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#from"},"from")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"gaslimit"},"gasLimit"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"gasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#gaslimit"},"gasLimit")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"gasprice"},"gasPrice"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"gasPrice"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#gasprice"},"gasPrice")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"hash"},"hash"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"hash"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#hash"},"hash")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"maxfeepergas"},"maxFeePerGas"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"maxFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#maxfeepergas"},"maxFeePerGas")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"maxpriorityfeepergas"},"maxPriorityFeePerGas"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"maxPriorityFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.yg)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#maxpriorityfeepergas"},"maxPriorityFeePerGas")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"nonce"},"nonce"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"nonce"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#nonce"},"nonce")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"r"},"r"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"r"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#r"},"r")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"raw"},"raw"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"raw"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-14"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#raw"},"raw")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"s"},"s"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"s"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-15"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#s"},"s")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"timestamp"},"timestamp"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"timestamp"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-16"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#timestamp"},"timestamp")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"to"},"to"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"to"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"inherited-from-17"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#to"},"to")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"type"},"type"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"type"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-18"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#type"},"type")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"v"},"v"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"v"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("h4",{id:"inherited-from-19"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#v"},"v")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"value"},"value"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"value"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.yg)("h4",{id:"inherited-from-20"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse"},"TransactionResponse"),".",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TransactionResponse#value"},"value")),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"wait"},"wait"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"wait"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"confirmations?"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,i.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),">"),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"confirmations?")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"number"))))),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.yg)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ContractReceipt"},(0,i.yg)("inlineCode",{parentName:"a"},"ContractReceipt")),">"),(0,i.yg)("h4",{id:"overrides"},"Overrides"),(0,i.yg)("p",null,"TransactionResponse.wait"))}d.isMDXComponent=!0}}]);