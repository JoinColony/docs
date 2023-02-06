"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6605],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(y,s(s({ref:n},p),{},{components:t})):o.createElement(y,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const r={description:"Lazy Consensus",sidebar_position:3},s="Lazy Consensus",i={unversionedId:"learn/governance/lazy-consensus",id:"learn/governance/lazy-consensus",title:"Lazy Consensus",description:"Lazy Consensus",source:"@site/colony/learn/governance/lazy-consensus.md",sourceDirName:"learn/governance",slug:"/learn/governance/lazy-consensus",permalink:"/learn/governance/lazy-consensus",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/governance/lazy-consensus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Lazy Consensus",sidebar_position:3},sidebar:"learn",previous:{title:"Reputation",permalink:"/learn/governance/reputation"},next:{title:"Motions and Simple Decisions",permalink:"/learn/governance/motions"}},c={},l=[{value:"The Lazy Consensus Process",id:"the-lazy-consensus-process",level:3},{value:"Objections and Voting",id:"objections-and-voting",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lazy-consensus"},"Lazy Consensus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Because voting is only needed when there is a disagreement about something."))),(0,a.kt)("p",null,"The solution to collective decision making is usually voting, but voting on every single decision is a big waste of time. Since Colony is designed for an organization's day-to-day affairs, Lazy Consensus was created to balance governance participation with operational efficiency."),(0,a.kt)("p",null,"The Lazy Consensus process was designed to make DAO decision-making as efficient and fair as possible. In a colony, a vote only needs to be triggered if there is a disagreement. If there are no objections, a proposed action can go through without the need for a governance vote. "),(0,a.kt)("h3",{id:"the-lazy-consensus-process"},"The Lazy Consensus Process"),(0,a.kt)("p",null,"Here's how Lazy Consensus works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A DAO member creates a Motion to carry out an action such as, \u201cPay Alice 100 xDAI\u201d"),(0,a.kt)("li",{parentName:"ul"},"A staking period begins, where the colony\u2019s native tokens are used to back the Motion. This is ",(0,a.kt)("em",{parentName:"li"},"putting skin in the game")),(0,a.kt)("li",{parentName:"ul"},"If the Motion has been adequately staked and no objections are raised, it passes and is executed automatically"),(0,a.kt)("li",{parentName:"ul"},"If someone objects to the Motion, they can raise an objection and trigger a reputation-weighted governance vote"),(0,a.kt)("li",{parentName:"ul"},"DAO members who vote can be awarded a portion of the staked tokens after voting concludes")),(0,a.kt)("h2",{id:"objections-and-voting"},"Objections and Voting"),(0,a.kt)("p",null,"When a member of a colony feels that something is amiss, they can ",(0,a.kt)("em",{parentName:"p"},"raise an objection"),". In order to raise an objection, they also have to stake the colony's native tokens. Staking tokens serves as an anti-spam measure and ensures that motions and objections are made in good faith. In addition, this pool of staked tokens incentivizes DAO members to show up and vote. A portion of the staked tokens can be rewarded to those who are on the winning side of the vote."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We encourage communication within the colony. Members should be aware of the opinions of their peers whenever possible before objections are invoked.")),(0,a.kt)("p",null,"Complete details of the objection mechanism can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony Whitepaper")," in section 9.2"),(0,a.kt)("p",null,"For more on using Lazy Consensus in your colony, see ",(0,a.kt)("a",{parentName:"p",href:"../../use/governance/motions-and-disputes/"},(0,a.kt)("strong",{parentName:"a"},"this page")),"."))}u.isMDXComponent=!0}}]);