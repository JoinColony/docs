"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[2408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={description:"How to create an Ethereum wallet so you can log in to Colony"},i="Getting xDAI",l={unversionedId:"use/additional-guides/get-an-ethereum-wallet",id:"use/additional-guides/get-an-ethereum-wallet",title:"Getting xDAI",description:"How to create an Ethereum wallet so you can log in to Colony",source:"@site/colony/use/additional-guides/get-an-ethereum-wallet.md",sourceDirName:"use/additional-guides",slug:"/use/additional-guides/get-an-ethereum-wallet",permalink:"/use/additional-guides/get-an-ethereum-wallet",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/additional-guides/get-an-ethereum-wallet.md",tags:[],version:"current",frontMatter:{description:"How to create an Ethereum wallet so you can log in to Colony"},sidebar:"use",previous:{title:"Connecting Metamask to Gnosis Chain (xDAI)",permalink:"/use/additional-guides/connect-metamask-to-xdai"},next:{title:"Coin Machine",permalink:"/use/coin-machine/"}},s={},c=[{value:"Faucet for smaller amounts",id:"faucet-for-smaller-amounts",level:3},{value:"Sources for larger amounts",id:"sources-for-larger-amounts",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-xdai"},"Getting xDAI"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Colony is now offering Gassless Transactions (MetaTransactions), which covers your gas fees for Colony on the Gnosis Chain, meaning you no longer need xDai tokens to use Colony.\nYou can ",(0,r.kt)("a",{parentName:"p",href:"/use/advanced-features/gasless-transactions"},"read more about it here"),". In some cases, power users may want to disable MetaTransactions and use xDAI, so we've preserved this guide.")),(0,r.kt)("p",null,"Since Colony runs on the Gnosis Chain network, transaction fees are extremely cheap compared to Ethereum mainnet. If you've disabled the ",(0,r.kt)("a",{parentName:"p",href:"/use/advanced-features/gasless-transactions"},"MetaTransaction feature"),", you'll need xDAI to cover gas fees."),(0,r.kt)("p",null,"For creating a new colony, 0.1 xDAI is usually sufficient. Once a colony is created, 0.01 xDAI will be sufficient for using a colony for months."),(0,r.kt)("h3",{id:"faucet-for-smaller-amounts"},"Faucet for smaller amounts"),(0,r.kt)("p",null,"So-called ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/get-xdai-tokens/xdai-faucet"},"faucets")," are a convenient way to receive a small amount of xDai instantly and for free."),(0,r.kt)("h3",{id:"sources-for-larger-amounts"},"Sources for larger amounts"),(0,r.kt)("p",null,"To receive larger amounts of xDai, you can either buy xDai directly or bridge funds from another blockchain and exchanges."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Bridge DAI across chains")),(0,r.kt)("p",null,"a. To bridge from Ethereum use ",(0,r.kt)("a",{parentName:"p",href:"https://bridge.xdaichain.com/"},"https://bridge.xdaichain.com")),(0,r.kt)("p",null,"b. To bridge DAI from Binance Smart Chain, Polygon, Avalanche, Fantom, or various other chains you can use one of the following 3rd party token bridges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.xpollinate.io/"},"https://www.xpollinate.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hop.exchange/"},"https://hop.exchange/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cbridge.celer.network/#/"},"https://cbridge.celer.network/#/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.elk.finance/#/elknet"},"https://app.elk.finance/#/elknet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://oportal.boringdao.com/twoway"},"https://oportal.boringdao.com/twoway"))),(0,r.kt)("p",null,"Once you have bridged, please double-check that you have actually swapped to xDai and not DAI, as DAI is also on xDai chain as an ERC20 token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Alternatively, you can buy xDai with fiat via:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ramp.network/buy/?swapAsset=XDAI"},"Ramp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mtpelerin.com/buy-xdai"},"Mt Pelerin")),(0,r.kt)("li",{parentName:"ul"},"for USDT on ",(0,r.kt)("a",{parentName:"li",href:"https://ascendex.com/en/basic/cashtrade-spottrading/usdt/xdai"},"AscendEX (BitMax) with the xDai/USDT Pair"))),(0,r.kt)("p",null,"Note that some options to buy xDai with fiat incur high fees. Especially for higher amounts, bridging DAI from another blockchain may be much cheaper."))}p.isMDXComponent=!0}}]);