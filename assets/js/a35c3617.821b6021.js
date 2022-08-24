"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={description:"A Quick Overview of the Important Colony Concepts",sidebar_position:1},i="Colony",l={unversionedId:"colonynetwork/tldr/colony",id:"colonynetwork/tldr/colony",title:"Colony",description:"A Quick Overview of the Important Colony Concepts",source:"@site/docs/colonynetwork/tldr/colony.md",sourceDirName:"colonynetwork/tldr",slug:"/colonynetwork/tldr/colony",permalink:"/docs/colonynetwork/tldr/colony",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/tldr/colony.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"A Quick Overview of the Important Colony Concepts",sidebar_position:1},sidebar:"sidebar",previous:{title:"Glossary of Terms",permalink:"/docs/colonynetwork/tldr/glossary"},next:{title:"The Meta Colony and CLNY",permalink:"/docs/colonynetwork/tldr/metacolony"}},s={},c=[{value:"Tasks",id:"tasks",level:2},{value:"Reputation and Tokens",id:"reputation-and-tokens",level:2},{value:"Domains and Skills",id:"domains-and-skills",level:2},{value:"Pots",id:"pots",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colony"},"Colony"),(0,a.kt)("p",null,"Colony is a protocol for a new type of open, meritocratic organization that operates via software rather than paperwork and management hierarchy."),(0,a.kt)("p",null,"A colony is a set of smart contracts on the Ethereum blockchain that contains all of the normal functions of a traditional firm, as well as some new functions that are only possible using a decentralized platform. Using the functions built into Colony, an organization can do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decision making"),(0,a.kt)("li",{parentName:"ul"},"Ownership"),(0,a.kt)("li",{parentName:"ul"},"Reputation"),(0,a.kt)("li",{parentName:"ul"},"Dispute resolution"),(0,a.kt)("li",{parentName:"ul"},"Work management and delegation"),(0,a.kt)("li",{parentName:"ul"},"Financial management")),(0,a.kt)("p",null,"The basic ideas of how Colony fits together are presented below."),(0,a.kt)("h2",{id:"tasks"},"Tasks"),(0,a.kt)("p",null,"The smallest conceptual unit within a Colony is a ",(0,a.kt)("strong",{parentName:"p"},"task"),". A task is a discrete unit of work which requires no further subdivision or delegation, and which can be evaluated as complete or incomplete based on some set of criteria."),(0,a.kt)("p",null,'There is intentionally no further prescription for how a task is meant to be used within a colony. Depending on context and criteria, a task could be called a "bounty", a "salary", a "reimbursement", or an "incentive".'),(0,a.kt)("p",null,"At a minimum, a newly created task must be assigned a ",(0,a.kt)("inlineCode",{parentName:"p"},"domainId")," and reference a specification for the task's completion, i.e. a description of the work to be done and how that work will be evaluated."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonynetwork/tldr/tasks"},"More about Tasks")),(0,a.kt)("h2",{id:"reputation-and-tokens"},"Reputation and Tokens"),(0,a.kt)("p",null,"In an organization of any type, reputation is an essential heuristic for people to keep track of each other's perceived merit in an environment of limited information. Reputation within Colony is meant to stay as close as possible to the concept of reputation as it is commonly understood. Reputation is a representation of ",(0,a.kt)("em",{parentName:"p"},"merit"),", which in Colony implies an immutable record of contributions to a shared goal."),(0,a.kt)("p",null,"In the Colony Protocol, ",(0,a.kt)("strong",{parentName:"p"},"reputation")," is a number that quantifies a particular individual\u2019s influence, calculated from the sum of work that has been completed within the colony."),(0,a.kt)("p",null,"Every Colony has its own ",(0,a.kt)("strong",{parentName:"p"},"internal token")," which complements reputation. Tokens, when earned as a task payout, create reputation for the recipient."),(0,a.kt)("p",null,"Tasks are expected to be funded with internal tokens (thus awarding reputation), and/or payment tokens (which do not confer reputation). When a task is funded, the task awaits work completion and approval before paying out to a worker."),(0,a.kt)("p",null,"Unlike a token, reputation cannot be transacted between accounts, and can only be gained or lost through the completion of tasks, the resolution of disputes, or participating in the reputation mining process. Reputation decays over time due to encourage frequent and regular engagement-- it has a half-life of ","~","3.5 months."),(0,a.kt)("p",null,"Within a colony, both tokens and reputation are required in order to create tasks and domains, to raise objections or disputes, and to vote on the collective actions/decisions of the colony."),(0,a.kt)("p",null,"It's up to each colony to decide how they use their token. Creators of a colony get to determine an initial ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenSupplyCeiling")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenIssuanceRate"),". Depending on how these parameters are set and what the colony does, tokens could be valuable and bought/sold for a hefty price, or they could be ubiquitous and more of a symbolic gesture -- like an upvote."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonynetwork/tldr/reputation"},"More about Reputation and Tokens")),(0,a.kt)("h2",{id:"domains-and-skills"},"Domains and Skills"),(0,a.kt)("p",null,"Domains and Skills are concepts that define a colony's organizational structure in a decentralized context, and allow for the division of labor without a strict management hierarchy."),(0,a.kt)("p",null,"Domains are a structure for compartmentalizing the work and shared resources of a colony into smaller, more specialized sub-groups which are analogous to the departments of a traditional company."),(0,a.kt)("p",null,"Skills are a similar structure that categorize the ",(0,a.kt)("em",{parentName:"p"},"type")," of work done, independent of the domain or colony in which the work took place."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonynetwork/tldr/domains-skills"},"More about Domains and Skills")),(0,a.kt)("h2",{id:"pots"},"Pots"),(0,a.kt)("p",null,"All funding within a colony resides in pots. Pots can be thought of as 'earmarked' funds for a specific purpose, and depending on context, might be called a bounty, a budget, working capital, or rewards. A colony will have many pots, but at a minimum will have one pot for rewards ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[0]")," ) and one for working capital ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[1]")," )."),(0,a.kt)("p",null,"When domains (and tasks within those domains) are created, they each are assigned a newly created pot, which can then be funded with the ",(0,a.kt)("inlineCode",{parentName:"p"},"moveFundsBetweenPots")," function. This action will eventually be mediated by a user's reputation score, but for now is merely permissioned based on the roles defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Authority.sol")," (meaning only colony founders and admins may create new pots and move funds between pots)."),(0,a.kt)("p",null,"Every colony has a special pot, ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[0]"),", which accrues funds by taking a small percentage of colony revenue. Members of the colony may claim rewards from this pot based on the number of colony tokens they have."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonynetwork/tldr/pots"},"More about Pots")))}d.isMDXComponent=!0}}]);