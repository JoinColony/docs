"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[6563],{8860:(e,t,o)=>{o.d(t,{xA:()=>h,yg:()=>u});var a=o(7953);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(o),y=n,u=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return o?a.createElement(u,r(r({ref:t},h),{},{components:o})):a.createElement(u,r({ref:t},h))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7077:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=o(4432),n=(o(7953),o(8860));const i={description:"Motions and Simple Decisions",sidebar_position:4},r="Motions and Simple Decisions",s={unversionedId:"learn/governance/motions",id:"learn/governance/motions",title:"Motions and Simple Decisions",description:"Motions and Simple Decisions",source:"@site/colony/learn/governance/motions.md",sourceDirName:"learn/governance",slug:"/learn/governance/motions",permalink:"/learn/governance/motions",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/governance/motions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Motions and Simple Decisions",sidebar_position:4},sidebar:"learn",previous:{title:"Lazy Consensus",permalink:"/learn/governance/lazy-consensus"},next:{title:"Teams",permalink:"/learn/governance/teams"}},l={},p=[{value:"How Motions work",id:"how-motions-work",level:2},{value:"The Motion lifecycle",id:"the-motion-lifecycle",level:2},{value:"Step 1: Create a Motion",id:"step-1-create-a-motion",level:3},{value:"Step 2: Stake the Motion",id:"step-2-stake-the-motion",level:3},{value:"Step 3: View the staking results and vote (if necessary)",id:"step-3-view-the-staking-results-and-vote-if-necessary",level:3},{value:"Step 4: Reveal the votes",id:"step-4-reveal-the-votes",level:3},{value:"Simple Decisions",id:"simple-decisions",level:2},{value:"Rewards and Penalties",id:"rewards-and-penalties",level:2},{value:"Rewards",id:"rewards",level:3},{value:"Penalties",id:"penalties",level:3},{value:"EXAMPLE",id:"example",level:3}],h={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,a.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"motions-and-simple-decisions"},"Motions and Simple Decisions"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Motions")," are reputation-based governance processes that automatically trigger outcomes on the blockchain. "),(0,n.yg)("p",null,"Whether you're paying contributors, managing a DAO treasury, or creating teams, Motions allow your DAO to carry out actions without the need for a trusted third party. Motions follow the ",(0,n.yg)("a",{parentName:"p",href:"/learn/governance/lazy-consensus"},"Lazy Consensus")," model."),(0,n.yg)("p",null,"Does your DAO want to decide on proposals that cannot be executed automatically? That's where Simple Decisions come in."),(0,n.yg)("p",null,"For a quick overview of Motions, ",(0,n.yg)("a",{parentName:"p",href:"https://twitter.com/joincolony/status/1598009846544191488?s=20&t=tDd7GViC_aeTrXr0ElZDRg"},"view this Twitter thread"),". "),(0,n.yg)("h2",{id:"how-motions-work"},"How Motions work"),(0,n.yg)("p",null,"Within Colony, a Motion is an on-chain proposal whose two sides (",(0,n.yg)("em",{parentName:"p"},"Yay")," or ",(0,n.yg)("em",{parentName:"p"},"Nay"),") can be supported by staking the Colony's native token for that side. Motions always have an ",(0,n.yg)("strong",{parentName:"p"},"action")," attached to them which is a contract transaction that can take place in a Colony. "),(0,n.yg)("p",null,"For example, Motions could be created to move funds from one team to another, for paying someone that did work or minting new native tokens (even arbitrary transaction on any contract in the name of the Colony are supported!). Motions that pass (the outcome is ",(0,n.yg)("em",{parentName:"p"},"Yay"),") will execute the ",(0,n.yg)("strong",{parentName:"p"},"action")," once they are finalized. If the outcome is ",(0,n.yg)("em",{parentName:"p"},"Nay"),", there is no action taking place."),(0,n.yg)("h2",{id:"the-motion-lifecycle"},"The Motion lifecycle"),(0,n.yg)("h3",{id:"step-1-create-a-motion"},"Step 1: Create a Motion"),(0,n.yg)("p",null,"Anyone within a colony can start a Motion."),(0,n.yg)("h3",{id:"step-2-stake-the-motion"},"Step 2: Stake the Motion"),(0,n.yg)("p",null,"Once a motion is created, native tokens can be staked to support either of its sides (",(0,n.yg)("em",{parentName:"p"},"Yay")," or ",(0,n.yg)("em",{parentName:"p"},"Nay"),"). A user can only stake as many tokens for either side as they have reputation in the team the motion is created in. A side can be staked by the motion creator and an arbitrary number of additional users as long as they adhere to the minimum stake per user that was defined in the extensions parameters. The maximum amount a user can stake is also determined by the amount of reputation in the team in which the Motion takes place."),(0,n.yg)("h3",{id:"step-3-view-the-staking-results-and-vote-if-necessary"},"Step 3: View the staking results and vote (if necessary)"),(0,n.yg)("p",null,"After the staking phase (which has a predetermined runtime) one of these four cases can happen:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Case 1:")," Yay side reaches minimum stakes, Nay side does not: the motion passed and can be finalized. All stakes are returned"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Case 2:")," Nay side reaches minimum stakes, Yay side does not: the motion failed and will not execute. All stakes are returned"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Case 3:")," Neither Yay or Nay side have reached minimum stakes: nothing happens. All stakes are returned."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Case 4:")," Both Yay and Nay sides are activated. The Motion will go into Voting immediately (and will not wait out the staking period).\nVoting")),(0,n.yg)("p",null,"As soon as the voting phase starts, anyone with reputation in the team the Motion was created in can vote for a side. Votes are secret (i.e. they're encrypted using your private key), and weighted by reputation. Vote weight is proportional to the voter's reputation in the team in which the vote is occurring."),(0,n.yg)("p",null,"Voters receive a reward for voting proportional to their reputation in the team in which the vote is occurring. The reward comes from the stake provided by whichever side of the dispute loses. It doesn't matter whether the voter voters for the winning or the losing side, they are rewarded the same either way."),(0,n.yg)("h3",{id:"step-4-reveal-the-votes"},"Step 4: Reveal the votes"),(0,n.yg)("p",null,"After the voting period is complete, the Reveal phase starts. Votes must be Revealed in order to be counted, and for the voter to receive their voter reward. The Reveal phase ends when either the time runs out, or everyone who has voted reveals their vote, whichever comes first."),(0,n.yg)("admonition",{title:"STAKING PENALTIES",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If you staked tokens for the side that eventually lost you will lose some of your stake. The amount lost will be smaller the closer the decision ultimately ended up being.")),(0,n.yg)("h2",{id:"simple-decisions"},"Simple Decisions"),(0,n.yg)("p",null,"Simple Decisions lets your DAO use reputation-weighted governance in virtually any Yes or No question. The process is similar to Motions:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"A proposal is submitted: \u201cShould our DAO do this?\u201d with rationale provided in the description"),(0,n.yg)("li",{parentName:"ol"},"The proposal is backed by staking the colony\u2019s native tokens"),(0,n.yg)("li",{parentName:"ol"},"After a period of time, if there are no objections, the proposal passes"),(0,n.yg)("li",{parentName:"ol"},"If there is an objection, a vote is triggered and DAO members vote with their reputation"),(0,n.yg)("li",{parentName:"ol"},"This process\u2014known as ",(0,n.yg)("a",{parentName:"li",href:"/learn/governance/lazy-consensus"},"Lazy Consensus"),"\u2014maximizes efficiency while remaining fair to contributors. DAO members are incentivized to participate in the process by the staked tokens: if they\u2019re on the winning side of a vote, they can walk away with rewards.")),(0,n.yg)("h2",{id:"rewards-and-penalties"},"Rewards and Penalties"),(0,n.yg)("h3",{id:"rewards"},"Rewards"),(0,n.yg)("p",null,"Those who participate in a voting round are eligible to claim a reward. The total voting reward is set to a percentage of all stakes of the Motion when the extension is initialized. Your reward will be scaled with your share of reputation of all reputation that voted for the winning side. The reward is not fixed until the voting period is over (the more people who vote, the smaller your reward gets). Once the votes are revealed, rewards are paid out. "),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"You get rewarded for voting regardless of whether you were on the winning side or not!")),(0,n.yg)("h3",{id:"penalties"},"Penalties"),(0,n.yg)("p",null,"Voting on a Motion cannot be penalized, but staking can be. You will receive a penalty when you stake the losing side of a vote. This penalty is used to cover the reward for voters. The amount you get back after the voting reward was deducted depends on how close the voting result was. "),(0,n.yg)("p",null,"The maximum penalty occurs if 100% of all votes are on the opposing side of what you staked. In this case you won't get any of your staked tokens back. If voting results in a 50:50 split, you get all stakes back after the voting reward was deducted. In between these extremes it's scaled linearly and is split up among the stakers proportional to the amounts that they've staked. Also the \"base\" penalty to cover the voting reward is split proportionally among the stakers on the losing side. The penalty that is not accounted for yet (because the voting reward is lower than the staking penalty) will be rewarded to the winning staking side (proportional to their stakes)."),(0,n.yg)("h3",{id:"example"},"EXAMPLE"),(0,n.yg)("p",null,"There are 4 people in a domain:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Alice has 30% reputation"),(0,n.yg)("li",{parentName:"ul"},"Bob has 30% reputation"),(0,n.yg)("li",{parentName:"ul"},"Charlie has 20% reputation"),(0,n.yg)("li",{parentName:"ul"},"Danielle has 20% reputation")),(0,n.yg)("p",null,"There is a Motion and the stakes are as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Alice stakes 50 tokens for Yay"),(0,n.yg)("li",{parentName:"ul"},"Bob stakes 100 tokens for Yay"),(0,n.yg)("li",{parentName:"ul"},"Charlie stakes 90 tokes for Nay (an objection)"),(0,n.yg)("li",{parentName:"ul"},"Danielle stakes 60 tokens for Nay")),(0,n.yg)("p",null,"The voting reward is set to 25% of all stakes of the Motion."),(0,n.yg)("p",null,"In this scenario, let's assume both sides are active and everyone votes for the side they staked for. Alice and Bob have 60% of the reputation and voted for Yay, so the Yay side wins. The voting reward of 25% means that 75 Tokens will be paid out as voting reward to all voters. The losing staking side is 150 Tokens total (from which the voting rewards will be paid). The losing stakers will get back a share of the rest of the remaining 75 tokens, depending on how close the vote was.  "),(0,n.yg)("p",null,'It was a close call, so we are only 20% on the way to the maximum penalty of 75 tokens. That means the total additional penalty is 75 * 0.2 = 15 Tokens. This will be assigned proportionally to Charlie and Danielle. Also the 75 Tokens "base" penalty will be assigned proportionally: Charlie loses 45  Tokens and Danielle loses 30 Tokens.'),(0,n.yg)("p",null,"The rewards are for voting are 75 Tokens total. These will be distributed proportional to the share of reputation that voted. So Alice and Bob get 0.3 75 = 22.5 Tokens each, and Charlie and Danielle get 0.2 * 75 = 15 Tokens each."),(0,n.yg)("p",null,"The penalty that was not paid out as rewards (90 Tokens total penalty, 75 Tokens paid out as rewards = 15 Tokens) will be paid out to the winning staking side, proportional to their stakes. Alice gets 5 Tokens and Bob gets 10 Tokens."),(0,n.yg)("p",null,"If we now add up everything that means:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Alice gets 27.5 Tokens (22.5 from voting and 5 from Staking)"),(0,n.yg)("li",{parentName:"ul"},"Bob gets 32.5  Tokens (22.5 from voting and 10 from Staking)"),(0,n.yg)("li",{parentName:"ul"},"Charlie loses 39 Tokens (Loses 45 + 9 for staking and gains 15 for voting)"),(0,n.yg)("li",{parentName:"ul"},"Danielle loses 21  Tokens (Loses 30 + 6 for staking and gains 15 for voting)")))}c.isMDXComponent=!0}}]);