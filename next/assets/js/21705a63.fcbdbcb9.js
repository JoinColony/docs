"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7326],{8860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(7953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(4432),i=(n(7953),n(8860));const a={description:"Reputation-weighted Voting",sidebar_position:8},r="Objections and Disputes",s={unversionedId:"tldr/disputes",id:"tldr/disputes",title:"Objections and Disputes",description:"Reputation-weighted Voting",source:"@site/vendor/colonyNetwork/docs/tldr/disputes.md",sourceDirName:"tldr",slug:"/tldr/disputes",permalink:"/next/colonynetwork/tldr/disputes",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/tldr/disputes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Reputation-weighted Voting",sidebar_position:8},sidebar:"sidebar",previous:{title:"Reputation",permalink:"/next/colonynetwork/tldr/reputation"},next:{title:"Reputation Mining",permalink:"/next/colonynetwork/tldr/reputation-mining"}},l={},p=[{value:"Objections",id:"objections",level:2},{value:"Disputes",id:"disputes",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"objections-and-disputes"},"Objections and Disputes"),(0,i.yg)("p",null,"The solution to collective decision making is usually voting, but Colony is designed for day to day operation of an organisation. Voting on every decision is wholly impractical."),(0,i.yg)("p",null,"Colony is designed to be permissive. The ",(0,i.yg)("a",{parentName:"p",href:"/next/colonynetwork/tldr/reputation"},"reputation system")," mediates the extent to which members may influence a colony, but beyond that constraint, members are free to take executive action with most colony matters without any approval from a management authority."),(0,i.yg)("p",null,"In the event of disagreement, the Dispute system allows colony members to signal disapproval and potentially force a vote on decisions and actions that would otherwise have proceeded unimpeded."),(0,i.yg)("h2",{id:"objections"},"Objections"),(0,i.yg)("p",null,"When a member of a colony feels that something is amiss, they can ",(0,i.yg)("em",{parentName:"p"},"raise an objection"),'. By doing so, they are fundamentally proposing that a variable, or more than one variable, in the contract should be changed to another value. For this reason we call supporters of the objection the "change" side and opponents the "keep" side.'),(0,i.yg)("p",null,"The user raising the objection must put up a stake of colony tokens to back it up. In essence, they are challenging the rest of the colony to disagree with them."),(0,i.yg)("p",null,"In raising an objection, the objector must provide the change to be made, as well as specify the Reputation that should vote on the issue."),(0,i.yg)("p",null,"Objections pass ",(0,i.yg)("em",{parentName:"p"},"automatically"),' after three days if they are not opposed by other colony members, who must stake tokens on the "keep" side in order to ',(0,i.yg)("em",{parentName:"p"},"escalate")," the objection to become a ",(0,i.yg)("em",{parentName:"p"},"dispute"),"."),(0,i.yg)("h2",{id:"disputes"},"Disputes"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"In Colony you cannot escalate a decision to higher management, you can only escalate to bigger groups of your peers.")),(0,i.yg)("p",null,'A dispute is settled by vote to "Change" or "Keep", within the domain and/or skill that was specified when the objection was raised.'),(0,i.yg)("p",null,'During the vote, any member with reputation in the named domain or skill may stake the "Change" or the "Keep" side with the colony\'s internal token.'),(0,i.yg)("p",null,"At the conclusion of the poll, losing stakers receive some of their staked tokens back and they lose the complementary percentage of the reputation that was required to stake. The exact amount of tokens they receive back (and therefore reputation they lose) is based on:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The fraction of the reputation in the colony that voted."),(0,i.yg)("li",{parentName:"ul"},"How close the vote ultimately was.")),(0,i.yg)("p",null,"At the end of a vote, if the vote was very close, then the losing side receives nearly 90% of their stake back. If the vote is lopsided enough that the winning side\u2019s vote weight reaches a landslide threshold of the total vote weight, then they receive 0% of their staked tokens back."),(0,i.yg)("p",null,"The motivation here is efficiency \u2014 it aims to discourage spurious objections and disputes. A close vote is a sign that the decision was not a simple one and forcing a vote may have been wise. Therefore, the instigators of the dispute should not be harshly punished. On the other hand, if a vote ended in a landslide, it is a sign that the losing side was going up against a general consensus."),(0,i.yg)("p",null,"We encourage communication within the colony. Members should be aware of the opinions of their peers whenever possible before disputes are invoked."),(0,i.yg)("p",null,"Complete details of the dispute mechanism can be found in the ",(0,i.yg)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony Whitepaper")," in section 9.2"))}d.isMDXComponent=!0}}]);