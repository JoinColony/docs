"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[413],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),k=p(a),N=r,c=k["".concat(m,".").concat(N)]||k[N]||s[N]||o;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80667:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"Permissions within Colony",sidebar_position:0},i="Roles & Permissions",l={unversionedId:"learn/advanced-concepts/permissions",id:"learn/advanced-concepts/permissions",title:"Roles & Permissions",description:"Permissions within Colony",source:"@site/colony/learn/advanced-concepts/permissions.md",sourceDirName:"learn/advanced-concepts",slug:"/learn/advanced-concepts/permissions",permalink:"/learn/advanced-concepts/permissions",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/advanced-concepts/permissions.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Permissions within Colony",sidebar_position:0},sidebar:"learn",previous:{title:"Advanced Concepts",permalink:"/learn/advanced-concepts/"},next:{title:"Recovery Mode",permalink:"/learn/advanced-concepts/recovery-mode"}},m={},p=[{value:"Available roles in Colony",id:"available-roles-in-colony",level:2},{value:"\ud83e\ude99 Root",id:"-root",level:3},{value:"\ud83c\udfdb Administration",id:"-administration",level:3},{value:"\ud83c\udfd7 Architecture",id:"-architecture",level:3},{value:"\ud83d\udcb0 Funding",id:"-funding",level:3},{value:"\ud83d\udc69\u200d\u2696\ufe0f  Arbitration",id:"\ufe0f--arbitration",level:3},{value:"\ud83d\udea8 Recovery",id:"-recovery",level:3},{value:"Actions that require permissions",id:"actions-that-require-permissions",level:2},{value:"One Transaction Payment (<code>OneTxPayment</code>) extension permissions",id:"one-transaction-payment-onetxpayment-extension-permissions",level:2},{value:"Motions &amp; Disputes (<code>VotingReputation</code>) permissions",id:"motions--disputes-votingreputation-permissions",level:2},{value:"Some notes on permissions",id:"some-notes-on-permissions",level:2}],d={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roles--permissions"},"Roles & Permissions"),(0,r.kt)("p",null,"Roles and Permissions are used in a colony to determine who has access to which features. When setting up a colony, it's important to make sure that the right users have the right roles. "),(0,r.kt)("h2",{id:"available-roles-in-colony"},"Available roles in Colony"),(0,r.kt)("h3",{id:"-root"},"\ud83e\ude99 Root"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Root")," allows you to take actions affecting the Colony as a whole, such as changing the colony details and minting tokens."),(0,r.kt)("h3",{id:"-administration"},"\ud83c\udfdb Administration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Administration")," allows you to create and manage expenditures, but not to fund them."),(0,r.kt)("h3",{id:"-architecture"},"\ud83c\udfd7 Architecture"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Architecture")," allows you to set permissions in the active team, as well as changing the Team details. Architecture permission in Root allows you to create and edit teams."),(0,r.kt)("h3",{id:"-funding"},"\ud83d\udcb0 Funding"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Funding")," allows you to fund expenditures, and transfer funds between Teams."),(0,r.kt)("h3",{id:"\ufe0f--arbitration"},"\ud83d\udc69\u200d\u2696\ufe0f  Arbitration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Arbitration")," allows you to resolve disputes, make state changes, and punish bad behavior."),(0,r.kt)("h3",{id:"-recovery"},"\ud83d\udea8 Recovery"),(0,r.kt)("p",null,"Recovery mode allows you to disable the colony in an emergency, update storage, and approve reactivation. The ",(0,r.kt)("em",{parentName:"p"},"Recovery")," role is only effective in ",(0,r.kt)("strong",{parentName:"p"},"Root"),"."),(0,r.kt)("h2",{id:"actions-that-require-permissions"},"Actions that require permissions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required permission(s)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Method on contract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Move funds between teams (domains)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Funding")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"moveFundsBetweenPots")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Requires the Funding permission in a parent domain of both domains (e.g. Root)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a team (domain)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Architecture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addDomain")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"(Un-)set ",(0,r.kt)("em",{parentName:"td"},"Architecture")," role for user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Architecture"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setArchitectureRole")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Applies only to subdomains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"(Un-)set ",(0,r.kt)("em",{parentName:"td"},"Funding")," role for user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Architecture"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setFundingRole")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"(Un-)set ",(0,r.kt)("em",{parentName:"td"},"Administration")," role for user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Architecture"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setAdministrationRole")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"(Un-)set ",(0,r.kt)("em",{parentName:"td"},"Root")," role for user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root"),(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setRootRole")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("em",{parentName:"td"},"Recovery"),(0,r.kt)("sup",{parentName:"td",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," role to user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setRecoveryRole")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,r.kt)("em",{parentName:"td"},"Recovery"),(0,r.kt)("sup",{parentName:"td",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," role from user"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"removeRecoveryRole")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mint tokens"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mintTokens")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only if colony has access to mint function on token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Upgrade colony"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"upgrade")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Upgrades the colony to a new version (non-reversible)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Install extension"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"installExtension")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Upgrade extension"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"upgradeExtension")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecate extension"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deprecateExtension")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Uninstall extension"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uninstallExtension")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Make arbitrary transaction"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"makeArbitraryTransaction")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Make multiple arbitrary transactions"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"makeArbitraryTransactions")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Edit colony"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"editColony")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Edit a Colony's metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Burn tokens"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"burnTokens")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unlock the colony's token"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unlockToken")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecate team/domain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Architecture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deprecateDomain")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unlock the colony's token"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unlockToken")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Claim Colony funds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"claimColonyFunds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Anyone can claim funds ",(0,r.kt)("strong",{parentName:"td"},"for")," the Colony that were send to it")))),(0,r.kt)("h2",{id:"one-transaction-payment-onetxpayment-extension-permissions"},"One Transaction Payment (",(0,r.kt)("inlineCode",{parentName:"h2"},"OneTxPayment"),") extension permissions"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The One Transaction Payment extension contract itself needs the ",(0,r.kt)("em",{parentName:"p"},"Administration")," and ",(0,r.kt)("em",{parentName:"p"},"Funding")," permissions in the ",(0,r.kt)("em",{parentName:"p"},"Root")," domain to function.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required permission(s)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Method on contract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pay someone from a domain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Funding"),", ",(0,r.kt)("em",{parentName:"td"},"Administration")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"makePaymentFundedFromDomain")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"motions--disputes-votingreputation-permissions"},"Motions & Disputes (",(0,r.kt)("inlineCode",{parentName:"h2"},"VotingReputation"),") permissions"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Motions & Disputes extension contract itself needs the ",(0,r.kt)("em",{parentName:"p"},"Root"),", ",(0,r.kt)("em",{parentName:"p"},"Administration"),", ",(0,r.kt)("em",{parentName:"p"},"Arbitration"),", ",(0,r.kt)("em",{parentName:"p"},"Architecture")," and ",(0,r.kt)("em",{parentName:"p"},"Funding")," permissions in the ",(0,r.kt)("em",{parentName:"p"},"Root")," domain to function.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required permission(s)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Method on contract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a motion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"createMotion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Anyone can create a motion as long as there is reputation within the motion's team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stake a motion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stakeMotion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Anyone can stake a motion as long as they have enough tokens and reputation to do so")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Finalize a motion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"finalizeMotion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Anyone can finalize a motion")))),(0,r.kt)("h2",{id:"some-notes-on-permissions"},"Some notes on permissions"),(0,r.kt)("p",null,"This list of actions is not complete, but rather covers the most common actions that you come across within the UI."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Root")," role can only be assigned in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Root")," team/domain.")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Be aware that when you have the ",(0,r.kt)("em",{parentName:"li"},"Architecture")," role in one team, you can only apply these actions in teams that are nested within the one you have the ",(0,r.kt)("em",{parentName:"li"},"Architecture")," role in. E.g. you can't assign yourself the ",(0,r.kt)("em",{parentName:"li"},"Funding")," role in the same team you have the ",(0,r.kt)("em",{parentName:"li"},"Architecture")," role in",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"When a user has the ",(0,r.kt)("em",{parentName:"li"},"Root")," role, they can set permissions for the ",(0,r.kt)("em",{parentName:"li"},"Root")," domain (which doesn't have any parents), essentially meaning that the limitation in ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is lifted.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"The ",(0,r.kt)("em",{parentName:"li"},"Recovery")," role is a special role that enables a user to put the Colony into and out of Recovery Mode. Read more about Recovery Mode ",(0,r.kt)("a",{parentName:"li",href:"/learn/advanced-concepts/recovery-mode"},"here"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);