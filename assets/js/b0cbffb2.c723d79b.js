"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[4470],{8860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var i=n(7953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(4432),o=(n(7953),n(8860));const a={description:"How You Can Help By Verifying Reputation on the Colony Network",sidebar_position:9},r="Reputation Mining",s={unversionedId:"develop/dev-learning/reputation-mining",id:"develop/dev-learning/reputation-mining",title:"Reputation Mining",description:"How You Can Help By Verifying Reputation on the Colony Network",source:"@site/colony/develop/dev-learning/reputation-mining.md",sourceDirName:"develop/dev-learning",slug:"/develop/dev-learning/reputation-mining",permalink:"/develop/dev-learning/reputation-mining",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/develop/dev-learning/reputation-mining.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"How You Can Help By Verifying Reputation on the Colony Network",sidebar_position:9},sidebar:"develop",previous:{title:"Objections and Disputes",permalink:"/develop/dev-learning/disputes"},next:{title:"Glossary of Terms",permalink:"/develop/dev-learning/glossary"}},l={},p=[{value:"Whitepaper tl;dr: Reputation Mining",id:"whitepaper-tldr-reputation-mining",level:2},{value:"Rationale for off-chain Reputation",id:"rationale-for-off-chain-reputation",level:2},{value:"Reputation Mining Overview",id:"reputation-mining-overview",level:3},{value:"Reputation Updates",id:"reputation-updates",level:4},{value:"Reputation Root Hashes",id:"reputation-root-hashes",level:4},{value:"The Reputation Mining Cycle",id:"the-reputation-mining-cycle",level:3},{value:"Submissions",id:"submissions",level:4},{value:"Challenges",id:"challenges",level:4},{value:"Acceptance",id:"acceptance",level:4}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"reputation-mining"},"Reputation Mining"),(0,o.yg)("h2",{id:"whitepaper-tldr-reputation-mining"},"Whitepaper tl;dr: Reputation Mining"),(0,o.yg)("p",null,"This is an overview of the process by which Reputation scores in Colony are maintained."),(0,o.yg)("p",null,"For a complete description of the Reputation Mining process, see the ",(0,o.yg)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"whitepaper")),(0,o.yg)("h2",{id:"rationale-for-off-chain-reputation"},"Rationale for off-chain Reputation"),(0,o.yg)("p",null,"Events in Colony that affect reputation are numerous and expected to be frequent. The calculations for global reputation updates would be unreasonable to perform on-chain. However, Reputation doesn't ",(0,o.yg)("em",{parentName:"p"},"need")," to be on-chain, because reputation is entirely deterministic and calculated from on-chain events."),(0,o.yg)("p",null,"So, rather than calculating reputation scores on-chain, users submit to the colony contract a transaction which contains their score, together with a proof that the score is consistent with the global state of reputation."),(0,o.yg)("h3",{id:"reputation-mining-overview"},"Reputation Mining Overview"),(0,o.yg)("p",null,"The process of maintaining consensus over the global state of reputation is called ",(0,o.yg)("em",{parentName:"p"},"Reputation Mining"),"."),(0,o.yg)("p",null,"Reputation Mining resembles a proof-of-stake blockchain consensus protocol. Miners must put up a stake of the network token, CLNY, to participate in the reputation mining process, whereby the global state of reputation is calculated off-chain and submitted to the blockchain as a ",(0,o.yg)("inlineCode",{parentName:"p"},"reputationRootHash"),". In the case of honest submissions, the miner is rewarded reputation in the Meta Colony tagged with a special 'mining' skill. In the event of malicious activity, miners with false submission is punished by losing her stake."),(0,o.yg)("h4",{id:"reputation-updates"},"Reputation Updates"),(0,o.yg)("p",null,"One feature of reputation that distinguish it from a token or cryptographic asset is that reputation cannot be transferred between accounts through a voluntary transaction. Rather, it is a number associated with an address, calculated from a well-defined set of on-chain events."),(0,o.yg)("p",null,"Reputation within a specific colony can only be earned and lost by completing tasks within the colony, through the ",(0,o.yg)("a",{parentName:"p",href:"/develop/dev-learning/disputes"},"objections and disputes mechanism"),", and in the case of the Meta Colony, through participation in the reputation mining process."),(0,o.yg)("h4",{id:"reputation-root-hashes"},"Reputation Root Hashes"),(0,o.yg)("p",null,"Using a ",(0,o.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/"},"Patricia Tree"),', all updates to the global state of reputation are maintained on-chain with a single "Reputation Root Hash".'),(0,o.yg)("p",null,"The Reputation Root Hash is effectively a fingerprint for the network state (of reputation). It is calculated off-chain, but it represents the collection of all reputation-updating events that have occurred on the network, and even a single discrepancy in the complete history of reputational updates will result in a different Root Hash."),(0,o.yg)("h3",{id:"the-reputation-mining-cycle"},"The Reputation Mining Cycle"),(0,o.yg)("p",null,"Reputation mining is a cyclic process in which multiple actors compete to verify the global reputation state."),(0,o.yg)("p",null,"The process works on an \u201cinnocent until proven guilty\u201d principle: Although it\u2019s infeasible for a valid hash to be proven true on-chain, it\u2019s relatively straightforward for an invalid hash to be proven false. In the event that two submitted hashes differ, the false one can be fleshed out through an automated challenge process ",(0,o.yg)("em",{parentName:"p"},"on-chain")," that will eventually zero in on the exact on-chain events that differ between any two submitted hashes."),(0,o.yg)("p",null,"The reputation system depends on having at ",(0,o.yg)("em",{parentName:"p"},"at least one")," honest submission per cycle (as opposed to at least 51% of submissions as is the case in proof-of-work mining)."),(0,o.yg)("h4",{id:"submissions"},"Submissions"),(0,o.yg)("p",null,"Each cycle begins with a submission window, in which all miners compete to submit a correct Root Hash to the network. The Root Hash must be calculated from the events stored in a Reputation Update Log, which contains a fixed list of updates to global reputation logged during the previous mining cycle."),(0,o.yg)("p",null,"A miner is eligible to submit a new Root Hash only if they stake an amount of CLNY. The amount of CLNY staked determines the number of times a miner can submit a Root Hash to the network during each submission window. Thus the greater the stake, the greater the likelihood that a miner will receive rewards from a successful submission."),(0,o.yg)("h4",{id:"challenges"},"Challenges"),(0,o.yg)("p",null,"The complete challenge-response protocol is described in section 7.5.1 of the ",(0,o.yg)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony whitepaper"),"."),(0,o.yg)("p",null,"For the sake of legibility, the general process has been simplified below to describe a situation in which only two miners are participating in the challenge process, with one of them being a malicious actor:"),(0,o.yg)("p",null,"If two different root hashes are submitted, it is assumed that one submission is honest. Therefore, one submission is false, and the miner that submitted an invalid hash must be punished."),(0,o.yg)("p",null,"In whichever submission is false, there must be one or more reputation update(s) inconsistent with the global state of reputation up until the current submission window."),(0,o.yg)("p",null,"Miners can submit a justification to the network that shows how a reputation update results in a Root Hash consistent with the last agreed upon Root Hash (of the previous cycle), and they can do so for each reputation update in the current cycle."),(0,o.yg)("p",null,"Both miners must provide such a justification to the network for each historical update until the discrepancy is found, at which point the correct hash can be calculated ",(0,o.yg)("em",{parentName:"p"},"on-chain"),"."),(0,o.yg)("p",null,"Whichever miner is found to have performed the calculation incorrectly is punished by losing some of their CLNY stake."),(0,o.yg)("h4",{id:"acceptance"},"Acceptance"),(0,o.yg)("p",null,"When a new Root Hash is accepted by the network, its corresponding Reputation Update Log is deleted from on-chain memory."),(0,o.yg)("p",null,"All reputation events that occurred during the current cycle are 'frozen' as the new Reputation Update Log to be used by miners in the next cycle."))}h.isMDXComponent=!0}}]);