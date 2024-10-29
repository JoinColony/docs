"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7340],{8860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),g=o,m=c["".concat(p,".").concat(g)]||c[g]||y[g]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(4432),o=(t(7953),t(8860));const r={description:"What is Reputation in Colony, and how does it work?",sidebar_position:2},i="Reputation",s={unversionedId:"learn/governance/reputation",id:"learn/governance/reputation",title:"Reputation",description:"What is Reputation in Colony, and how does it work?",source:"@site/colony/learn/governance/reputation.md",sourceDirName:"learn/governance",slug:"/learn/governance/reputation",permalink:"/learn/governance/reputation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/governance/reputation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"What is Reputation in Colony, and how does it work?",sidebar_position:2},sidebar:"learn",previous:{title:"Parameters",permalink:"/learn/governance/parameters"},next:{title:"Lazy Consensus",permalink:"/learn/governance/lazy-consensus"}},p={},l=[{value:"What is Reputation?",id:"what-is-reputation",level:3},{value:"Can Reputation be Transferred?",id:"can-reputation-be-transferred",level:3},{value:"Earning Reputation in a Colony",id:"earning-reputation-in-a-colony",level:3},{value:"Reputation Decay",id:"reputation-decay",level:3}],u={toc:l},c="wrapper";function y(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"reputation"},"Reputation"),(0,o.yg)("h3",{id:"what-is-reputation"},"What is Reputation?"),(0,o.yg)("p",null,"Most DAO frameworks in the past have used token-based governance systems: the more tokens you have, the more voting power you have. This system may work out for whales, but not for everyday DAO contributors that want to participate in the future of work. "),(0,o.yg)("p",null,"In a Colony, governance power is determined by ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Reputation")),", not the size of someone's native token bags. "),(0,o.yg)("p",null,"Reputation is an off-chain attribute that is calculated through on-chain data and verified by ",(0,o.yg)("strong",{parentName:"p"},"Reputation Miners"),", that stake ",(0,o.yg)("strong",{parentName:"p"},"CLNY")," to provide network updates."),(0,o.yg)("p",null,"Reputation is an attribute that quantifies a particular individual\u2019s influence and is calculated from the sum of work that has been completed within the colony. Both ",(0,o.yg)("strong",{parentName:"p"},"native tokens")," and ",(0,o.yg)("strong",{parentName:"p"},"reputation")," are required to create motions, raise disputes, and vote."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(5412).A,width:"434",height:"343"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Reputation confers influence in a colony by mediating a member's ability to adjust various aspects of the organization.")," Whether it is the ability to move funds, create new teams, or settle disputes, reputation determines influence by degrees."),(0,o.yg)("h3",{id:"can-reputation-be-transferred"},"Can Reputation be Transferred?"),(0,o.yg)("p",null,"Unlike tokens, reputation cannot be transferred between accounts and can only be gained or lost through receiving a colony's native token ",(0,o.yg)("strong",{parentName:"p"},"(contributions)")," or resolving disputes (",(0,o.yg)("strong",{parentName:"p"},"participating in the colony governance"),")."),(0,o.yg)("h3",{id:"earning-reputation-in-a-colony"},"Earning Reputation in a Colony"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"After you join a colony, you'll need to earn some reputation before you can participate in governance.")),(0,o.yg)("p",null,"The most common way of earning reputation is by getting paid in the colony's native token. "),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Payments in stablecoins will not provide reputation. You can use stablecoin payments to adjust for cost-of-living requirements for contributors, or any other situation where making a payment without giving additional reputation is appropriate. ")),(0,o.yg)("p",null,"Reputation can also be manually awarded in special circumstances, such as when launching a new colony with an existing team."),(0,o.yg)("p",null,"Each colony will have its own rationale for paying contributors. Some colonies may pay contributors for approved content or codebase contributions, while other colonies may send you some native tokens just for asking nicely."),(0,o.yg)("h1",{id:"earning-reputation-in-the-metacolony"},"Earning Reputation in the Metacolony"),(0,o.yg)("p",null,"Are you interested in helping build the Colony ecosystem? You can earn CLNY and reputation by contributing to the Metacolony. Drop a line in the ",(0,o.yg)("a",{parentName:"p",href:"https://discord.com/invite/feVZWwysqM"},"Colony Discord")," to find out the latest ways you can contribute.  "),(0,o.yg)("p",null,"When a member of a colony receives a payment in the colony native tokens, they earn Reputation in that Team as well as all parent Teams, including Root."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"They do not earn any reputation in child Teams or sibling Teams.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Example of a colony structure.",src:t(689).A,width:"1200",height:"917"})),(0,o.yg)("p",null,"To make an example, earning reputation as a result of an internal token payment in ",(0,o.yg)("strong",{parentName:"p"},"Backend"),", will earn reputation in ",(0,o.yg)("strong",{parentName:"p"},"Backend"),", ",(0,o.yg)("strong",{parentName:"p"},"Development,")," and in ",(0,o.yg)("strong",{parentName:"p"},"Root.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"No reputation")," will be earned in child Teams (",(0,o.yg)("strong",{parentName:"p"},"Ruby"),", ",(0,o.yg)("strong",{parentName:"p"},"Node.js)"),", or in sibling or uncle teams (",(0,o.yg)("strong",{parentName:"p"},"Frontend")," & ",(0,o.yg)("strong",{parentName:"p"},"Design)"),"."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Currently, Colony allows ",(0,o.yg)("strong",{parentName:"p"},"only one layer of Teams"),". Nested Teams are forthcoming.")),(0,o.yg)("h3",{id:"reputation-decay"},"Reputation Decay"),(0,o.yg)("p",null,"One of the unique characteristics of reputation is that it ",(0,o.yg)("strong",{parentName:"p"},"decays over time"),". This ",(0,o.yg)("strong",{parentName:"p"},"incentivizes consistent contribution")," to a colony, and maintains decentralization by ensuring that reputation represents ",(0,o.yg)("em",{parentName:"p"},"recent")," contributions."),(0,o.yg)("p",null,"Every 600000 blocks, a user\u2019s reputation in every team decays by a factor of 2. ",(0,o.yg)("strong",{parentName:"p"},"This implies a 'reputation half-life' of about 3.5 months.")," Reputation slowly decays on a per-block basis."),(0,o.yg)("p",null,"To know more about ",(0,o.yg)("strong",{parentName:"p"},"Reputation Decay"),", ",(0,o.yg)("strong",{parentName:"p"},"Reputation Mining"),", and ",(0,o.yg)("strong",{parentName:"p"},"how it's calculated"),", please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Whitepaper"),"."))}y.isMDXComponent=!0},5412:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Frame-40-96d4541de6ee6ef52da70d45c47f0aca.png"},689:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/domains_1-fcfb92e273169bc60b983c3a4f765839-1d97fe2ef8b2a9dd0315369f7b4855fe.png"}}]);