"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[394],{8860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var o=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,g=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=n(4432),r=(n(7953),n(8860)),a=n(8105),l=n(6218);const i={sidebar_position:1,description:"A stupidly short guide to get started with Colony development"},s="Start Building",u={unversionedId:"getting-started/index",id:"getting-started/index",title:"Start Building",description:"A stupidly short guide to get started with Colony development",source:"@site/vendor/colonyJS/packages/sdk/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/colonysdk/getting-started/",draft:!1,editUrl:"https://github.com/JoinColony/colonyJS/edit/main/packages/sdk/docs/getting-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A stupidly short guide to get started with Colony development"},sidebar:"sidebar",previous:{title:"Colony SDK",permalink:"/colonysdk/"},next:{title:"Creating your first transaction",permalink:"/colonysdk/getting-started/your-first-transaction"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Connecting to Colony on Gnosis Chain",id:"connecting-to-colony-on-gnosis-chain",level:2}],p={toc:d},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"start-building"},"Start Building"),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NodeJS v 16.15.0 is installed on your system (use ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},(0,r.yg)("inlineCode",{parentName:"a"},"nvm"))," for changing NodeJS versions on the fly)"),(0,r.yg)("li",{parentName:"ul"},"A JavaScript/TypeScript project with a ",(0,r.yg)("inlineCode",{parentName:"li"},"package.json")," and the ",(0,r.yg)("inlineCode",{parentName:"li"},"@colony/sdk")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"ethers")," packages installed.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To get started even faster, use our ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyStarter"},(0,r.yg)("strong",{parentName:"a"},(0,r.yg)("inlineCode",{parentName:"strong"},"Colony Starter")))," template. It's just a matter of cloning the repository and running ",(0,r.yg)("inlineCode",{parentName:"p"},"npm start")," to get to the first working example. Follow the guide after the link for more information.")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"It's as easy as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install ethers@legacy-v5 @colony/sdk@next\n")),(0,r.yg)("p",null,"You'll need ",(0,r.yg)("inlineCode",{parentName:"p"},"ethers")," v5.x as a dependency in your project."),(0,r.yg)("h2",{id:"connecting-to-colony-on-gnosis-chain"},"Connecting to Colony on Gnosis Chain"),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"browser",label:"In the browser (using MetaMask)",default:!0,mdxType:"TabItem"},(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For browser based projects, consider using a build system like ",(0,r.yg)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," that can understand the ",(0,r.yg)("inlineCode",{parentName:"p"},"import")," commands and will bundle all necessary libraries into one file. Again, feel free to just use the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyStarter"},"colonyStarter")," template which has this already set up for you.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"import { providers } from 'ethers';\nimport { ColonyNetwork, toEth } from '@colony/sdk';\n\n// If MetaMask is installed there will be an `ethereum` object on the `window`\n// NOTE: Make sure MetaMask is connected to Gnosis chain (see https://docs.gnosischain.com/tools/wallets/metamask)\nconst provider = new providers.Web3Provider(window.ethereum);\n\n// Get the Colony's XDAI funding in the ROOT pot (id 1)\nconst start = async () => {\n  // This will try to connect the page to MetaMask\n  await provider.send('eth_requestAccounts', []);\n  // Create a new connection to the Colony Network contracts using the MetaMask \"wallet\"\n  const colonyNetwork = new ColonyNetwork(provider.getSigner());\n  // Connect to the MetaColony (this could be replaced with your own colony using `colonyNetwork.getColony(COLONY_ADDRESS)`)\n  const metaColony = await colonyNetwork.getMetaColony();\n  // Get the CLNY funding for the MetaColony (CLNY is it's native token)\n  const funding = await metaColony.getBalance();\n  // The funding will be in wei (x * 10^18), so we format into a readable string using the `toEth` function\n  alert('MetaColony balance is ' + toEth(funding) + ' CLNY');\n};\n\nstart();\n")),(0,r.yg)("p",null,"Include the resulting bundle in an HTML file and open it in you favorite browser. It should connect to MetaMask and alert you with the current MetaColony CLNY balance.")),(0,r.yg)(l.A,{value:"nodejs",label:"In NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"const { providers, Wallet } = require('ethers');\nconst { ColonyNetwork } = require('@colony/sdk');\n\nconst provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc/');\nconst wallet = Wallet.createRandom().connect(provider);\n\n// Get the Colony's XDAI funding in the ROOT pot (id 1)\nconst start = async () => {\n  // Create a new connection to the Colony Network contracts using the MetaMask \"wallet\"\n  const colonyNetwork = new ColonyNetwork(wallet);\n  // Connect to the MetaColony (this could be replaced with your own colony using `colonyNetwork.getColony(COLONY_ADDRESS)`)\n  const metaColony = await colonyNetwork.getMetaColony();\n  // Get the CLNY funding for the MetaColony (CLNY is it's native token)\n  const funding = await metaColony.getBalance();\n  // The funding will be in wei (x * 10^18), so we format into a readable string using the `toEth` function\n  console.log('MetaColony balance is ' + toEth(funding) + ' CLNY')\n};\n\nstart();\n")),(0,r.yg)("p",null,"Run this file by executing ",(0,r.yg)("inlineCode",{parentName:"p"},"node index.js")," and carefully observe the output. The last line should be something like"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MetaColony balance is 2.125319999999999999 CLNY\n")))))}g.isMDXComponent=!0},6218:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(7953),r=n(8835);const a={tabItem:"tabItem_CNTK"};function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n},t)}},8105:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(4432),r=n(7953),a=n(8835),l=n(1623),i=n(5926),s=n(9064),u=n(1609),c=n(1323);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[s,u]=g({queryString:n,groupId:o}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),h=(()=>{const e=s??d;return y({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var h=n(4229);const f={tabList:"tabList_WIVk",tabItem:"tabItem_BBGz"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==i&&(d(t),s(o))},y=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,o.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:y,onClick:p},l,{className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,a.A)("tabs-container",f.tabList)},r.createElement(b,(0,o.A)({},e,t)),r.createElement(v,(0,o.A)({},e,t)))}function C(e){const t=(0,h.A)();return r.createElement(w,(0,o.A)({key:String(t)},e))}}}]);