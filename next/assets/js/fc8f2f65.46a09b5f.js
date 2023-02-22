"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={description:"The Reputation System",sidebar_position:7},r="Reputation",s={unversionedId:"develop/dev-learning/reputation",id:"develop/dev-learning/reputation",title:"Reputation",description:"The Reputation System",source:"@site/colony/develop/dev-learning/reputation.md",sourceDirName:"develop/dev-learning",slug:"/develop/dev-learning/reputation",permalink:"/next/develop/dev-learning/reputation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/develop/dev-learning/reputation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"The Reputation System",sidebar_position:7},sidebar:"develop",previous:{title:"Modular Permissions",permalink:"/next/develop/dev-learning/permissions"},next:{title:"Objections and Disputes",permalink:"/next/develop/dev-learning/disputes"}},l={},p=[{value:"Gaining and Losing Reputation",id:"gaining-and-losing-reputation",level:2},{value:"Completing Tasks",id:"completing-tasks",level:3},{value:"Staking Reputation",id:"staking-reputation",level:3},{value:"Reputation Bootstrapping",id:"reputation-bootstrapping",level:3},{value:"Reputation Decay",id:"reputation-decay",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reputation"},"Reputation"),(0,i.kt)("p",null,"In an organization of any type, reputation is an essential heuristic for people to keep track of each other's perceived merit in an environment of limited information. Reputation within Colony is meant to stay close to the concept of reputation as it is commonly understood. Reputation is a representation of ",(0,i.kt)("em",{parentName:"p"},"merit"),", which in Colony implies an immutable record of contributions to a shared goal."),(0,i.kt)("p",null,"In the Colony Protocol, ",(0,i.kt)("strong",{parentName:"p"},"reputation")," is a number that quantifies a particular individual\u2019s influence, calculated from the sum of work that has been completed within the colony."),(0,i.kt)("p",null,"Every Colony has its own ",(0,i.kt)("strong",{parentName:"p"},"internal token")," which complements reputation. Tokens, when earned as a task payout, create reputation for the recipient."),(0,i.kt)("p",null,"The Reputation System in Colony is a tool for governance in a decentralized context: It allows for members of an organization to have different amounts of influence over the organization, without the use of a management hierarchy or frequent voting."),(0,i.kt)("p",null,"Reputation confers influence in a colony by mediating a member's ability to adjust various aspects of the organization. Whether it is the ability to move funds to fund tasks, to create new domains and skills, or to settle disputes, reputation determines influence by degrees."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"It is important to note that in the first deployed version of the Colony Network, reputation will play a more passive role in a colony. Reputation will still determine payouts during the rewards cycle, but influence over domain/skill creation, funding tasks, and other important functions will instead be mediated by a permissioned")," authority role."),(0,i.kt)("h2",{id:"gaining-and-losing-reputation"},"Gaining and Losing Reputation"),(0,i.kt)("p",null,"Unlike a token, reputation cannot be transacted between accounts. Reputation can only be gained or lost through interactions with other members of a colony."),(0,i.kt)("h3",{id:"completing-tasks"},"Completing Tasks"),(0,i.kt)("p",null,"The most straightforward way of gaining reputation is by completing tasks within the colony. Tasks funded with internal tokens generate reputation for their recipient upon payout."),(0,i.kt)("p",null,"The amount of reputation gained or lost through a task is determined by the task's rating:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[1]")," ",(0,i.kt)("strong",{parentName:"li"},"Unsatisfactory"),". The work done did not meet the expectations established by the manager. The worker is ",(0,i.kt)("em",{parentName:"li"},"penalized")," reputation equal to the internal token payout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[2]")," ",(0,i.kt)("strong",{parentName:"li"},"Satisfactory"),". The work done met the established expectations. Worker is awarded reputation equal to the internal token payout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[3]")," ",(0,i.kt)("strong",{parentName:"li"},"Excellent"),". The work done exceeded the expectations of the manager. Reputation is awarded at 1.5 times the internal token payout.")),(0,i.kt)("p",null,"When a payout is received for the completion of a task, reputation is awarded within the task's domain, as well as all its parent domains. If the task is tagged with a skill, reputation is awarded in the skill, as well as all its parent skills."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/next/develop/dev-learning/tasks"},"Tasks")," for more information about the task workflow and ratings."),(0,i.kt)("h3",{id:"staking-reputation"},"Staking Reputation"),(0,i.kt)("p",null,"Almost every interaction with a colony requires that the user stake some amount of reputation. How much reputation is required to stake depends on how important the interaction is. Actions like the creation and funding of tasks require a nominal amount of reputation, while things like creating a new domain require comparatively more."),(0,i.kt)("p",null,"Staked reputation has the potential to be both lost and gained in the event of an objection or a dispute."),(0,i.kt)("p",null,"If an objection to any action is raised by another member, the reputation stake is given to the objector (objections pass automatically if they are not challenged)."),(0,i.kt)("p",null,"If an objection is escalated to a dispute, a reputation-weighted vote is called within the objection's domain, in which both sides must stake reputation. The amount of reputation gained/lost by each side is determined by the vote's outcome ('landslide' outcomes punish the losing side harshly, while more contentious decisions have only small penalties for the losing side)."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/next/develop/dev-learning/disputes"},"Objections and Disputes")," for more information about reputation-weighted voting and the dispute resolution process."),(0,i.kt)("h3",{id:"reputation-bootstrapping"},"Reputation Bootstrapping"),(0,i.kt)("p",null,"After a colony is created, reputation can only be gained and lost through normal interactions within a colony. But at the colony's beginning, we are presented with a bootstrapping problem: When a colony is new, no-one has yet completed any work in it and so nobody will have earned any reputation."),(0,i.kt)("p",null,"During a colony's creation, the creator of the colony is granted the ability to designate an initial set of addresses to receive internal tokens and an equivalent amount of reputation. Users receiving reputation are presumably the colony creator and their colleagues, and this starting reputation should be seen as a representation of the existing trust within the team."),(0,i.kt)("h2",{id:"reputation-decay"},"Reputation Decay"),(0,i.kt)("p",null,"One of the unique characteristics of reputation is that it decays over time. This is meant to incentivize frequent and consistent contributions to a colony, and to ensure that reputation represents ",(0,i.kt)("em",{parentName:"p"},"recent")," contributions."),(0,i.kt)("p",null,"Every 600000 blocks, a user\u2019s reputation in every domain or skill decays by a factor of 2. This implies a 'reputation half-life' of about 3.5 months."))}d.isMDXComponent=!0}}]);