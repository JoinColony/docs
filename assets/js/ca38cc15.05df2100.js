"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[1275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={description:"Use this guide to get up-and-running with Colony in just 7 steps!",sidebar_position:1},s="Launching a Colony",r={unversionedId:"use/launch-a-colony",id:"use/launch-a-colony",title:"Launching a Colony",description:"Use this guide to get up-and-running with Colony in just 7 steps!",source:"@site/colony/use/launch-a-colony.md",sourceDirName:"use",slug:"/use/launch-a-colony",permalink:"/use/launch-a-colony",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/launch-a-colony.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Use this guide to get up-and-running with Colony in just 7 steps!",sidebar_position:1},sidebar:"use",previous:{title:"Getting Started",permalink:"/use/"},next:{title:"Joining a Colony",permalink:"/use/join-a-colony"}},l={},u=[{value:"Step 1: Define Your DAO",id:"step-1-define-your-dao",level:2},{value:"Step 2: Setup Your Token",id:"step-2-setup-your-token",level:2},{value:"Step 2a: Creating a New Token",id:"step-2a-creating-a-new-token",level:3},{value:"Step 2b: Using an Existing Token",id:"step-2b-using-an-existing-token",level:3},{value:"Step 3: Sign Transactions",id:"step-3-sign-transactions",level:2},{value:"Step 4: Invite Contributors",id:"step-4-invite-contributors",level:2},{value:"Step 5: Mint Your Native Token (if needed)",id:"step-5-mint-your-native-token-if-needed",level:2},{value:"Step 6: Set Up Permissions and Teams",id:"step-6-set-up-permissions-and-teams",level:2},{value:"Step 7: Set Reputations",id:"step-7-set-reputations",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"launching-a-colony"},"Launching a Colony"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This guide will get you from zero to DAO in a matter of minutes.")),(0,a.kt)("p",null,"Each of these seven steps will lay the groundwork for your colony. The entire process can be completed in just a few minutes, so be sure to join the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/feVZWwysqM"},"Colony Community")," to share your journey with other DAO builders."),(0,a.kt)("h2",{id:"step-1-define-your-dao"},"Step 1: Define Your DAO"),(0,a.kt)("p",null,"Once you\u2019ve logged into the ",(0,a.kt)("a",{parentName:"p",href:"https://xdai.colony.io/landing"},"Colony Dapp")," and connected your MetaMask wallet, you\u2019ll see the option to create a colony. You can then create a name for your colony and set your own unique URL slug."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Define Your DAO",src:n(47077).Z,width:"2878",height:"1634"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'It\'s not always necessary to have "DAO" in your Colony name',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'e.g., "Writer\'s Guild DAO" can just be "Writer\'s Guild"'))),(0,a.kt)("li",{parentName:"ul"},"Pick a URL which is easy to remember",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"MarsSpaceFleetAlpha9000" can be simplified to "marsfleet"'))))),(0,a.kt)("h2",{id:"step-2-setup-your-token"},"Step 2: Setup Your Token"),(0,a.kt)("p",null,"Every colony has its own ",(0,a.kt)("a",{parentName:"p",href:"/learn/payments-and-tokens/payments-and-native-tokens"},"native token"),". Payment in a colony\u2019s native token confers ",(0,a.kt)("a",{parentName:"p",href:"/learn/governance/reputation"},(0,a.kt)("strong",{parentName:"a"},"reputation"))," in the team from which it was received."),(0,a.kt)("p",null,"Users can decide to adopt an existing ERC20 token as their native token (e.g. if your project already has a token), or to create a new one. If you already have an ERC20 governance token, skip to step 2b."),(0,a.kt)("h3",{id:"step-2a-creating-a-new-token"},"Step 2a: Creating a New Token"),(0,a.kt)("p",null,"Colony makes it easy to launch a new token from right within the Dapp. Before doing so, it's a good idea to plan out what you want the token name and symbol to be."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Creating a New Token",src:n(74995).Z,width:"2874",height:"1636"})),(0,a.kt)("h3",{id:"step-2b-using-an-existing-token"},"Step 2b: Using an Existing Token"),(0,a.kt)("p",null,"Already have a native token? Specify the token address and see if the token name and symbol are auto-populated. If it's a new token, you may be asked to provide the token name and symbol after pasting in the address."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Using an Existing Token",src:n(75096).Z,width:"2878",height:"1634"})),(0,a.kt)("p",null,"Once you've set up your token, you'll see a confirmation page where you can double check the details. If it looks good to go, you're ready to launch your colony!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Until multichain support is live, you'll need to bridge your ERC20 tokens to the Gnosis chain and have your Gnosis contract address ready before creating your colony.")),(0,a.kt)("h2",{id:"step-3-sign-transactions"},"Step 3: Sign Transactions"),(0,a.kt)("p",null,"Next, you'll need to approve a series of transactions with your MetaMask wallet to get your colony's contracts set up. This process only needs to be ran one time per colony and should only take a few minutes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign Transactions",src:n(68984).Z,width:"666",height:"693"})),(0,a.kt)("p",null,"Now that your colony has officially been created, you\u2019re ready to bring some contributors on board!"),(0,a.kt)("h2",{id:"step-4-invite-contributors"},"Step 4: Invite Contributors"),(0,a.kt)("p",null,"After completing the initial setup process, you\u2019ll be brought to your colony's dashboard, which will serve as the home base for your DAO. For now, let's click on \"Contributors\" to see how we can bring some friends on board."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Invite Contributors",src:n(51184).Z,width:"1435",height:"602"})),(0,a.kt)("p",null,"On the Contributors page, we'll see a list of all the DAO members, along with their permissions and reputation scores. It's a bit lonely in here, but not for long! Clicking \"Invite\" will copy our shareable colony URL, which contributors can use to join the group."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Invite Contributors with Sharable Link",src:n(12814).Z,width:"1560",height:"436"})),(0,a.kt)("p",null,"When a prospective new member clicks this link, they will see the \"Join this colony\" option beneath the colony's name. If they're new to using the Colony Dapp, they'll be asked to setup a unique username before joining."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Join this colony",src:n(99480).Z,width:"1239",height:"526"})),(0,a.kt)("p",null,"Our colony now has some new members! Since they haven't earned any reputation yet, the new members are known as Watchers."),(0,a.kt)("h2",{id:"step-5-mint-your-native-token-if-needed"},"Step 5: Mint Your Native Token (if needed)"),(0,a.kt)("p",null,"If you\u2019re using an existing ERC20 token as your colony\u2019s native token, you can skip this step. "),(0,a.kt)("p",null,"If you've set up a new token, you'll need to mint it before you can pay contributors. This can be easily done by navigating to New Action -> Manage Funds -> Mint Token"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mint Your Native Token",src:n(95017).Z,width:"618",height:"502"})),(0,a.kt)("h2",{id:"step-6-set-up-permissions-and-teams"},"Step 6: Set Up Permissions and Teams"),(0,a.kt)("p",null,"If you have a trusted teammate that wants to help manage your colony, you can grant them specific permissions by navigating to New Action -> Advanced -> Manage Permissions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set Up Permissions",src:n(90438).Z,width:"542",height:"1081"})),(0,a.kt)("p",null,"Chances are, you'll also want to set up specific domains within your colony, which are known as ",(0,a.kt)("strong",{parentName:"p"},"teams"),". Members within each team can have their own domain-specific reputation score, which gives them the autonomy to pursue their workstreams without bogging down the rest of the organization."),(0,a.kt)("p",null,"Navigate to New Action -> Manage Team -> Create New Team to get started."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set Up Teams",src:n(99880).Z,width:"559",height:"636"})),(0,a.kt)("p",null,"After your new team has been created, you'll be brought to the team landing page, where teammates can leave messages for each other."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Message Team",src:n(4777).Z,width:"1042",height:"308"})),(0,a.kt)("h2",{id:"step-7-set-reputations"},"Step 7: Set Reputations"),(0,a.kt)("p",null,"These newest DAO members have indicated their willingness and ability to contribute, so let's assign them to teams and give them some reputation. We can do this in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Paying them in our native token will automatically give them reputation, or"),(0,a.kt)("li",{parentName:"ol"},"We can create an action that gives them reputation without needing to transfer tokens")),(0,a.kt)("p",null,"For today, let's set our reputation score directly. We do this by navigating to New Action -> Manage Reputation -> Award Reputation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set Reputations",src:n(40704).Z,width:"564",height:"808"})),(0,a.kt)("p",null,"Note: make sure that your reputation scores have been adequately weighted to avoid new contributors having an undue amount of influence in your colony. In other words: set your own reputation before sending out payments."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congrats! Your colony has now been setup, and you\u2019re ready to ",(0,a.kt)("a",{parentName:"strong",href:"/use/making-payments/payments"},"pay contributors"),", launch governance votes, and grow your organization.")))}c.isMDXComponent=!0},47077:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ColonyName-d620bb6e85eee7c3432ce00aa74a3ae3.gif"},75096:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ExistingToken-8979074c68154e83f47015d95645d29b.gif"},74995:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/NewToken-0e2fdae944630fec37b962b3c351fb93.gif"},68984:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926115607-f439860da178a6b3341fcff6cbf087eb.png"},51184:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926120053-5c6fd7b51d8cd26f97c867a6924e0757.png"},12814:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926120446-52d7e34caf5fa8e25bef0bda63f51e24.png"},99480:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926121447-53e66af7aee868ebb19b0fe896616ce0.png"},90438:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926123209-7ece18eeffec8034975508a1ecfa3050.png"},99880:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926123806-d6e2eb0087d8174b40fc34fdef710596.png"},4777:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926124126-fd3242c773877c03f772172a011c0e17.png"},40704:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926124343-ba24c0c3e36cc13ac49f64f90b8397ad.png"},95017:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Pasted_image_20220926125706-62c35890c24e63ef00e0dfde12014221.png"}}]);