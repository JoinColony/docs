"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[960],{8860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,s=u["".concat(p,".").concat(m)]||u[m]||y[m]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=n(4432),r=(n(7953),n(8860));const l={},i="Funding Queue (FundingQueue)",g={unversionedId:"interfaces/extensions/fundingqueue",id:"interfaces/extensions/fundingqueue",title:"Funding Queue (FundingQueue)",description:"Funding Queues are a core mechanic described in the Colony whitepaper,",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/fundingqueue.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/fundingqueue",permalink:"/colonynetwork/interfaces/extensions/fundingqueue",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Evaluated Expenditure (EvaluatedExpenditure)",permalink:"/colonynetwork/interfaces/extensions/evaluatedexpenditure"},next:{title:"One Transaction Payment Extension (OneTxPayment)",permalink:"/colonynetwork/interfaces/extensions/onetxpayment"}},p={},o=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>backProposal(uint256 _id, uint256 _backing, uint256 _currPrevId, uint256 _newPrevId, bytes memory _key, bytes memory _value, uint256 _branchMask, bytes32[] memory _siblings)</code>",id:"-backproposaluint256-_id-uint256-_backing-uint256-_currprevid-uint256-_newprevid-bytes-memory-_key-bytes-memory-_value-uint256-_branchmask-bytes32-memory-_siblings",level:3},{value:"\u25b8 <code>cancelProposal(uint256 _id, uint256 _prevId)</code>",id:"-cancelproposaluint256-_id-uint256-_previd",level:3},{value:"\u25b8 <code>createProposal(uint256 _domainId, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _fromPot, uint256 _toPot, uint256 _totalRequested, address _token)</code>",id:"-createproposaluint256-_domainid-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_frompot-uint256-_topot-uint256-_totalrequested-address-_token",level:3},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getMetatransactionNonce(address userAddress):uint256 nonce</code>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <code>getNextProposalId(uint256 _id):uint256 nextId</code>",id:"-getnextproposaliduint256-_iduint256-nextid",level:3},{value:"\u25b8 <code>getProposal(uint256 _id):Proposal proposal</code>",id:"-getproposaluint256-_idproposal-proposal",level:3},{value:"\u25b8 <code>getProposalCount():uint256 count</code>",id:"-getproposalcountuint256-count",level:3},{value:"\u25b8 <code>getSupport(uint256 _id, address _supporter):uint256 support</code>",id:"-getsupportuint256-_id-address-_supporteruint256-support",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>pingProposal(uint256 _id)</code>",id:"-pingproposaluint256-_id",level:3},{value:"\u25b8 <code>reclaimStake(uint256 _id)</code>",id:"-reclaimstakeuint256-_id",level:3},{value:"\u25b8 <code>stakeProposal(uint256 _id, bytes memory _key, bytes memory _value, uint256 _branchMask, bytes32[] memory _siblings)</code>",id:"-stakeproposaluint256-_id-bytes-memory-_key-bytes-memory-_value-uint256-_branchmask-bytes32-memory-_siblings",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],d={toc:o},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"funding-queue-fundingqueue"},"Funding Queue (",(0,r.yg)("inlineCode",{parentName:"h1"},"FundingQueue"),")"),(0,r.yg)("p",null,"Funding Queues are a core mechanic described in the Colony whitepaper,\nallowing for teams to allocate resources in a distributed manner. Members of\na colony can make and back funding proposals, requesting that some number of tokens be\ntransferred between domains. The more reputation backing a proposal, the more\nquickly the proposal is fulfilled, up to a maximum of half of the source domain's\nassets per week. By creating and bacing funding proposals throughout the colony,\na steady flow of resources from the root through the domains can be achieved."),(0,r.yg)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.yg)("h3",{id:"-backproposaluint256-_id-uint256-_backing-uint256-_currprevid-uint256-_newprevid-bytes-memory-_key-bytes-memory-_value-uint256-_branchmask-bytes32-memory-_siblings"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"backProposal(uint256 _id, uint256 _backing, uint256 _currPrevId, uint256 _newPrevId, bytes memory _key, bytes memory _value, uint256 _branchMask, bytes32[] memory _siblings)")),(0,r.yg)("p",null,"Back a funding proposal and advance it along the list"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_backing"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of backing to give the proposal (up to user's reputation)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_currPrevId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The current previous proposal in the list")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_newPrevId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The new previous proposal after we re-arrange")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_key"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"A reputation hash tree key, of the caller's reputation in _domainId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_value"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Reputation value indicating the caller's reputation in _domainId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_branchMask"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The branchmask of the proof")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_siblings"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes32[]"),(0,r.yg)("td",{parentName:"tr",align:null},"The siblings of the proof")))),(0,r.yg)("h3",{id:"-cancelproposaluint256-_id-uint256-_previd"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"cancelProposal(uint256 _id, uint256 _prevId)")),(0,r.yg)("p",null,"Cancel a funding proposal and remove from linked list"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_prevId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The id of the preceding proposal in the linked list")))),(0,r.yg)("h3",{id:"-createproposaluint256-_domainid-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_frompot-uint256-_topot-uint256-_totalrequested-address-_token"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"createProposal(uint256 _domainId, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _fromPot, uint256 _toPot, uint256 _totalRequested, address _token)")),(0,r.yg)("p",null,"Create a new funding proposal"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_domainId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The domain the extension has the funding permission")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_fromChildSkillIndex"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The index of the fromPot's domain in _domainId.children[]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_toChildSkillIndex"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The index of the toPot's domain in _domainId.children[]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_fromPot"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Funding pot id providing the funds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_toPot"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Funding pot id receiving the funds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_totalRequested"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The total amount being requested")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_token"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The token being transferred")))),(0,r.yg)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,r.yg)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.yg)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,r.yg)("p",null,"Called when upgrading the extension"),(0,r.yg)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getMetatransactionNonce(address userAddress):uint256 nonce")),(0,r.yg)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"userAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.yg)("h3",{id:"-getnextproposaliduint256-_iduint256-nextid"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getNextProposalId(uint256 _id):uint256 nextId")),(0,r.yg)("p",null,"Gets the id of the next proposal in the list"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nextId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The next proposal Id in the list")))),(0,r.yg)("h3",{id:"-getproposaluint256-_idproposal-proposal"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getProposal(uint256 _id):Proposal proposal")),(0,r.yg)("p",null,"Get the proposal struct for a given proposal"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proposal"),(0,r.yg)("td",{parentName:"tr",align:null},"Proposal"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal struct")))),(0,r.yg)("h3",{id:"-getproposalcountuint256-count"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getProposalCount():uint256 count")),(0,r.yg)("p",null,"Get the total number of proposals"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The count")))),(0,r.yg)("h3",{id:"-getsupportuint256-_id-address-_supporteruint256-support"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getSupport(uint256 _id, address _supporter):uint256 support")),(0,r.yg)("p",null,"Gets the reputation support from a user to a proposal"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_supporter"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The supporter")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"support"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The support amount")))),(0,r.yg)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,r.yg)("p",null,"Returns the identifier of the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes32"),(0,r.yg)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.yg)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,r.yg)("p",null,"Configures the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_colony"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.yg)("h3",{id:"-pingproposaluint256-_id"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"pingProposal(uint256 _id)")),(0,r.yg)("p",null,"Transfer the marginal funds"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")))),(0,r.yg)("h3",{id:"-reclaimstakeuint256-_id"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"reclaimStake(uint256 _id)")),(0,r.yg)("p",null,"Reclaim the stake after the proposal is funded"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")))),(0,r.yg)("h3",{id:"-stakeproposaluint256-_id-bytes-memory-_key-bytes-memory-_value-uint256-_branchmask-bytes32-memory-_siblings"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"stakeProposal(uint256 _id, bytes memory _key, bytes memory _value, uint256 _branchMask, bytes32[] memory _siblings)")),(0,r.yg)("p",null,"Stake a funding proposal"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The proposal Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_key"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"A reputation hash tree key, of the total reputation in _domainId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_value"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Reputation value indicating the total reputation in _domainId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_branchMask"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The branchmask of the proof")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_siblings"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes32[]"),(0,r.yg)("td",{parentName:"tr",align:null},"The siblings of the proof")))),(0,r.yg)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"uninstall()")),(0,r.yg)("p",null,"Called when uninstalling the extension"),(0,r.yg)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,r.yg)("p",null,"Returns the version of the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_version"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The extension's version number")))))}y.isMDXComponent=!0}}]);