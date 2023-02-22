"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={description:"About pots and funding in Colony",sidebar_position:4},r="Pots and Funding",s={unversionedId:"develop/dev-learning/pots",id:"develop/dev-learning/pots",title:"Pots and Funding",description:"About pots and funding in Colony",source:"@site/colony/develop/dev-learning/pots.md",sourceDirName:"develop/dev-learning",slug:"/develop/dev-learning/pots",permalink:"/next/develop/dev-learning/pots",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/develop/dev-learning/pots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"About pots and funding in Colony",sidebar_position:4},sidebar:"develop",previous:{title:"Domains and Skills",permalink:"/next/develop/dev-learning/domains-skills"},next:{title:"Tasks and Payments",permalink:"/next/develop/dev-learning/tasks"}},l={},d=[{value:"Types of Pots",id:"types-of-pots",level:2},{value:"Rewards",id:"rewards",level:3},{value:"Domain Funding",id:"domain-funding",level:3},{value:"Task Funding",id:"task-funding",level:3},{value:"Funding Proposals",id:"funding-proposals",level:2},{value:"The Funding Queue",id:"the-funding-queue",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pots-and-funding"},"Pots and Funding"),(0,a.kt)("p",null,"All funding within a colony resides in pots. To each pot, a colony can associate any number of unassigned tokens it holds. Pots can be thought of as 'earmarked' funds for a specific purpose, and depending on context, might be called a bounty, a budget, working capital, or rewards."),(0,a.kt)("p",null,"Assigning funding to pots is purely a bookkeeping mechanism for a colony. From the perspective of the blockchain, ether and tokens are held by the colony contract until they are paid out when a task is completed."),(0,a.kt)("p",null,"A colony's internal token, chosen at the time of creation, has a special role within colony funding. When paid to a user through the task mechanism, the token confers reputation to that user, which can influence rewards payouts. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.colony.io/colonyjs/api/interfaces/ColonyTokenClient"},"ColonyJS ",(0,a.kt)("inlineCode",{parentName:"a"},"tokenClient"))," API for information about the internal token and related administration."),(0,a.kt)("h2",{id:"types-of-pots"},"Types of Pots"),(0,a.kt)("p",null,"A colony will have many pots, but at a minimum will have one pot for rewards ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[0]")," ) and one for working capital ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[1]")," ), both of which are associated with the colony-wide domain."),(0,a.kt)("h3",{id:"rewards"},"Rewards"),(0,a.kt)("p",null,"Every colony has a special pot, ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[0]"),", which accrues funds by taking a small percentage of colony revenue. Members of the colony may claim rewards from this pot based on the number of colony tokens they have."),(0,a.kt)("p",null,"When funds are sent to a colony as revenue, they must be put into the working capital pot before they can be further distributed to relevant sub-domains. In doing so, 1% of the revenue is siphoned off and put into the ",(0,a.kt)("em",{parentName:"p"},"rewards")," pot."),(0,a.kt)("p",null,"When triggered, the rewards pot disburses to all members of the colony that have ",(0,a.kt)("em",{parentName:"p"},"both")," tokens and reputation. Rewards are limited to the (normalized) geometric average of token holdings and reputation score (read more about the rewards formula in section 10.2 of the colony whitepaper)."),(0,a.kt)("p",null,"The rewards mechanism maximizes payout for individuals who both contribute meaningful work to the colony (evidenced by their reputation), and who maintain 'skin in the game' (evidenced by their unsold token holdings)."),(0,a.kt)("h3",{id:"domain-funding"},"Domain Funding"),(0,a.kt)("p",null,"When new domains are created, they each are assigned a newly created pot, which can then be funded from the parent domain (see 'Funding Proposals' below). Pots associated with domains may only pay out to other pots."),(0,a.kt)("h3",{id:"task-funding"},"Task Funding"),(0,a.kt)("p",null,"Each task created within a domain also has its own pot, which is funded from the domain to which the task belongs. Pots associated with tasks may only pay out to the individuals associated with the task (the Manager, Evaluator, and Worker of the task)."),(0,a.kt)("h2",{id:"funding-proposals"},"Funding Proposals"),(0,a.kt)("p",null,"Note: Funding Proposals are not slated for implementation in the first version of the colonyNetwork. Instead, movement of funds between pots in a colony is permissioned activity based on authority roles. The rest of this page explains funding proposals as described in the Colony Whitepaper, which will be implemented in subsequent upgrades to the Colony Network."),(0,a.kt)("p",null,"Funding proposals are the mechanism that mediates the flow of funds between pots. Funding proposals are created by any user with sufficient reputation to stake in the relevant domain."),(0,a.kt)("p",null,"Funding proposals can be one of two types: Basic Funding Proposals (BFPs), or Priority Funding Proposals (PFPs)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Basic Funding Proposals")," are immediately active upon creation, but are restricted to funding pots which are direct descendants of the source. In other words, the ",(0,a.kt)("inlineCode",{parentName:"p"},"From")," pot must be a parent of the ",(0,a.kt)("inlineCode",{parentName:"p"},"To")," pot. BFPs also have an upper limit on the rate funds can be moved."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Priority Funding Proposals")," must be explicitly voted on before it starts directing funds, but may move funds from any pot to any other pot within a colony, at any rate, so long as there is consensus in the relevant domain."),(0,a.kt)("h3",{id:"the-funding-queue"},"The Funding Queue"),(0,a.kt)("p",null,"In normal circumstances, funding should flow naturally from the pots of general, top-level domains toward more specific and focused sub-domains and tasks through the use of Basic Funding Proposals (BFPs)."),(0,a.kt)("p",null,"Any user with sufficient reputation may create a BFP. Once created, the BFP is ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", and is placed in a ",(0,a.kt)("em",{parentName:"p"},"Funding Queue")," associated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"From")," pot."),(0,a.kt)("p",null,"All funding proposals in the same ",(0,a.kt)("em",{parentName:"p"},"Funding Queue")," are ranked according to the reputation that is 'backing' the proposal, which may come from multiple users. The greater the reputation backing the proposal, the closer to the top the proposal sits."),(0,a.kt)("p",null,"To mitigate possible manipulation and attack, only the top proposal in the queue is funded at any given time. This allows for other members to halt malicious funding proposals with an objection before too many funds can be taken."))}u.isMDXComponent=!0}}]);