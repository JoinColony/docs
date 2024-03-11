"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[3418],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(g,i(i({ref:e},l),{},{components:n})):o.createElement(g,i({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"Bootstrapping reputation in a new colony.",sidebar_position:3},i="Reputation Bootstrapping",p={unversionedId:"use/reputation/reputation-bootstrapping",id:"use/reputation/reputation-bootstrapping",title:"Reputation Bootstrapping",description:"Bootstrapping reputation in a new colony.",source:"@site/colony/use/reputation/reputation-bootstrapping.md",sourceDirName:"use/reputation",slug:"/use/reputation/reputation-bootstrapping",permalink:"/use/reputation/reputation-bootstrapping",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/reputation/reputation-bootstrapping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Bootstrapping reputation in a new colony.",sidebar_position:3},sidebar:"use",previous:{title:"Smite Reputation",permalink:"/use/reputation/smite-reputation"},next:{title:"Teams",permalink:"/use/teams/"}},s={},u=[{value:"Determining Reputation Allotments",id:"determining-reputation-allotments",level:2},{value:"Reputation Bootstrapping Calculator",id:"reputation-bootstrapping-calculator",level:3}],l={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reputation-bootstrapping"},"Reputation Bootstrapping"),(0,r.kt)("p",null,"If you're launching a new colony for a previously established organization, you'll want to ensure that reputation is fairly distributed amongst those who have earned it. This process is known as ",(0,r.kt)("strong",{parentName:"p"},"Reputation Bootstrapping"),"."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/use/reputation/award-reputation"},"award reputation")," function to distribute reputation without needing to send tokens. "),(0,r.kt)("h2",{id:"determining-reputation-allotments"},"Determining Reputation Allotments"),(0,r.kt)("p",null,"How much reputation to distribute to your existing DAO members is up to your organization. There are pros and cons to each method. Some potential methods are:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method 1: Reputation scores in the colony are determined by the amount of tokens a DAO member has")),(0,r.kt)("p",null,"In this method, a contributor's proportion of reputation is determined by how many governance tokens they have."),(0,r.kt)("admonition",{title:"Pros",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Easy to determine and implement")),(0,r.kt)("admonition",{title:"Cons",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Many of the drawbacks of token-based governance are preserved in this method, such as early holders (with huge bags, who contribute very little) having an unfair advantage over new holders (with smaller bags, who actively contribute). However, as the colony matures, the benefits of ",(0,r.kt)("a",{parentName:"p",href:"/learn/governance/reputation"},"reputation-based governance")," will gradually take precedent.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method 2: Reputation scores are agreed upon through a vote")),(0,r.kt)("p",null,"In this method, DAO members vote on an external platform (such as through a snapshot vote, or discord/forum poll) to determine how much reputation to give specific members. "),(0,r.kt)("p",null,"Example: a proposal is made to give 0xFounder 50% of the reputation, 0xDeputy1 25%, and 0xDeputy2 25%."),(0,r.kt)("admonition",{title:"Pros",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Easy to implement and can be independent of token holdings")),(0,r.kt)("admonition",{title:"Cons",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"For large DAOs, such votes are impractical and may centralize governance power.")),(0,r.kt)("h3",{id:"reputation-bootstrapping-calculator"},"Reputation Bootstrapping Calculator"),(0,r.kt)("p",null,"More methods are being developed to fairly implement reputation bootstrapping in future colonies. Stay tuned for our forthcoming Reputation Bootstrapping Calculator."))}c.isMDXComponent=!0}}]);