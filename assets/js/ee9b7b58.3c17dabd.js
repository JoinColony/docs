"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[4604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={description:"How to set up and use the Coin Machine to sell and buy tokens.",sidebar_position:10},a="Coin Machine",s={unversionedId:"use/coin-machine/index",id:"use/coin-machine/index",title:"Coin Machine",description:"How to set up and use the Coin Machine to sell and buy tokens.",source:"@site/colony/use/coin-machine/index.md",sourceDirName:"use/coin-machine",slug:"/use/coin-machine/",permalink:"/use/coin-machine/",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/coin-machine/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"How to set up and use the Coin Machine to sell and buy tokens.",sidebar_position:10},sidebar:"use",previous:{title:"Getting xDAI",permalink:"/use/additional-guides/get-an-ethereum-wallet"},next:{title:"Disclaimers",permalink:"/use/beta"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coin-machine"},"Coin Machine"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Coin Machine is moving to a stand alone product and is therefore no longer being included in the Colony DApp.")),(0,o.kt)("p",null,"Fundraising is an omnipresent theme in blockchain ecosystems and usually tackled by selling tokens. The space has seen a variety of mechanisms, yet finding one that is easy-to-use without compromising on security, transparency and fairness turns out to be easier said than done."),(0,o.kt)("p",null,"Coin Machine is a mechanism to sell tokens within a colony, simplifying the process for all participants involved. It introduces the functionality to sell limited amounts of tokens in fixed-price batches, adjusting prices up or down in between sale periods based on recent demand. Coin Machine sacrifices continual availability and real-time price adjustment for the simplicity of fixed price and fixed supply, thereby also sidestepping the challenges of price manipulation, volatility, and front-running."))}p.isMDXComponent=!0}}]);