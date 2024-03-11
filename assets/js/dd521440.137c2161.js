"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[3693],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={description:"How to Award Reputation without making payments.",sidebar_position:1},i="Award Reputation",u={unversionedId:"use/reputation/award-reputation",id:"use/reputation/award-reputation",title:"Award Reputation",description:"How to Award Reputation without making payments.",source:"@site/colony/use/reputation/award-reputation.md",sourceDirName:"use/reputation",slug:"/use/reputation/award-reputation",permalink:"/use/reputation/award-reputation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/reputation/award-reputation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"How to Award Reputation without making payments.",sidebar_position:1},sidebar:"use",previous:{title:"Reputation",permalink:"/use/reputation/"},next:{title:"Smite Reputation",permalink:"/use/reputation/smite-reputation"}},p={},s=[{value:"Why award reputation manually?",id:"why-award-reputation-manually",level:3},{value:"Awarding reputation",id:"awarding-reputation",level:3}],c={toc:s};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"award-reputation"},"Award Reputation"),(0,r.kt)("h3",{id:"why-award-reputation-manually"},"Why award reputation manually?"),(0,r.kt)("p",null,"After having ",(0,r.kt)("a",{parentName:"p",href:"/use/launch-a-colony"},"created a colony"),", nobody has reputation - not even the user who has created the colony. Some colonies use ",(0,r.kt)("a",{parentName:"p",href:"/learn/advanced-concepts/permissions"},"permissions")," to distribute reputation through ",(0,r.kt)("a",{parentName:"p",href:"../making-payments/"},"payments"),". Another way to distribute reputation is the Award feature, described below. Making sure that reputation is distributed appropriately among a colony's users allows users to get the most out of the Colony experience, such as the ",(0,r.kt)("a",{parentName:"p",href:"/use/governance/motions-and-disputes/installation"},"Governance (Reputation Weighted)")," extension."," "),(0,r.kt)("h3",{id:"awarding-reputation"},"Awarding reputation"),(0,r.kt)("p",null,"1","."," On the main page of your colony, navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Manage Reputation > Award Reputation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74148).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"2","."," Choose the recipient. This can be any member of the colony, including yourself."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(98779).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"3","."," Choose the team. You can award reputation at Root level, however it is typically appropriate to do so on a team level. See ",(0,r.kt)("a",{parentName:"p",href:"/use/teams/create-team"},"here for more information on teams"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4419).Z,width:"1119",height:"648"})),(0,r.kt)("p",null,"4","."," Specify the amount of reputation points."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be careful when manually awarding reputation. ",(0,r.kt)("strong",{parentName:"p"},"Improper use can break your colony.")," ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make sure that no single account can govern the colony, make sure that the number of reputation points awarded to a particular account is appropriate and reasonable compared to the number of reputation points that other accounts hold. A malicious actor could use this feature to attack your colony if they receive the ",(0,r.kt)("a",{parentName:"p",href:"/use/teams/permissions"},"required permission"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(10686).Z,width:"1119",height:"648"})),(0,r.kt)("p",null,"5",".",' Optionally, add a comment or toggle the "Force" button if you wish to perform this action immediately without creating a Motion.'),(0,r.kt)("p",null,"6",".",' After clicking "Confirm" and confirm the two transactions in MetaMask, you should see a screen confirming that reputation was successfully awarded to the account you specified.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74742).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"If an account was awarded too many reputation points, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/use/reputation/smite-reputation"},"Smite feature")," to reduce them again."))}l.isMDXComponent=!0},74148:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/award-reputation-1_AdobeCreativeCloudExpress-330783f0784ba38ae22b3214acbeab48.gif"},98779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/award-reputation-2a_AdobeCreativeCloudExpress-62ad94bb1b00a9e29d8292cead728440.gif"},4419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/award-reputation-2b_AdobeCreativeCloudExpress-279a3b89cd377aa78a7d073d6058f348.gif"},10686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/award-reputation-2c_AdobeCreativeCloudExpress-b8f48814e3cba9c15c1e88c299f0a2d8.gif"},74742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/award-reputation-4_AdobeCreativeCloudExpress-ffa5b798c9b835f89d722e13385b4b63.gif"}}]);