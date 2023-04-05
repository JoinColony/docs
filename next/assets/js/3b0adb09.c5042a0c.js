"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Evaluated Expenditure (EvaluatedExpenditure)",o={unversionedId:"interfaces/extensions/evaluatedexpenditure",id:"interfaces/extensions/evaluatedexpenditure",title:"Evaluated Expenditure (EvaluatedExpenditure)",description:"Evaluated Expenditures is a simple extension which allows the owner of an expenditure",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/evaluatedexpenditure.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/evaluatedexpenditure",permalink:"/next/colonynetwork/interfaces/extensions/evaluatedexpenditure",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Coin Machine Extension (CoinMachine)",permalink:"/next/colonynetwork/interfaces/extensions/coinmachine"},next:{title:"Funding Queue (FundingQueue)",permalink:"/next/colonynetwork/interfaces/extensions/fundingqueue"}},d={},s=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getMetatransactionNonce(address _userAddress):uint256 nonce</code>",id:"-getmetatransactionnonceaddress-_useraddressuint256-nonce",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>setExpenditurePayoutModifiers(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _id, uint256[] memory _slots, int256[] memory _payoutModifiers)</code>",id:"-setexpenditurepayoutmodifiersuint256-_permissiondomainid-uint256-_childskillindex-uint256-_id-uint256-memory-_slots-int256-memory-_payoutmodifiers",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evaluated-expenditure-evaluatedexpenditure"},"Evaluated Expenditure (",(0,r.kt)("inlineCode",{parentName:"h1"},"EvaluatedExpenditure"),")"),(0,r.kt)("p",null,'Evaluated Expenditures is a simple extension which allows the owner of an expenditure\nto update the payout modifiers after the expenditure is locked, effectively enabling\nthe "evaluation" functionality we initially described as a part of the Tasks flow.\nWithout this extension, payout modifiers can only be set by the Arbitration permission\nonce the expenditure is locked, making it tedious to implement evaluation workflows.'),(0,r.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,r.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,r.kt)("p",null,"Called when upgrading the extension"),(0,r.kt)("h3",{id:"-getmetatransactionnonceaddress-_useraddressuint256-nonce"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"getMetatransactionNonce(address _userAddress):uint256 nonce")),(0,r.kt)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_userAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.kt)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,r.kt)("p",null,"Returns the identifier of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,r.kt)("p",null,"Configures the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_colony"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.kt)("h3",{id:"-setexpenditurepayoutmodifiersuint256-_permissiondomainid-uint256-_childskillindex-uint256-_id-uint256-memory-_slots-int256-memory-_payoutmodifiers"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"setExpenditurePayoutModifiers(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _id, uint256[] memory _slots, int256[] memory _payoutModifiers)")),(0,r.kt)("p",null,"Sets the payout modifiers in given expenditure slots, using the arbitration permission"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_permissionDomainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId in which the extension has the arbitration permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_childSkillIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The index that the ",(0,r.kt)("inlineCode",{parentName:"td"},"_domainId")," is relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"_permissionDomainId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_id"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Expenditure identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_slots"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of slots to set payout modifiers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_payoutModifiers"),(0,r.kt)("td",{parentName:"tr",align:null},"int256[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Values (between +/- WAD) to modify the payout & reputation bonus")))),(0,r.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"uninstall()")),(0,r.kt)("p",null,"Called when uninstalling the extension"),(0,r.kt)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,r.kt)("p",null,"Returns the version of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}u.isMDXComponent=!0}}]);