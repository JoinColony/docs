"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),N=r,u=m["".concat(p,".").concat(N)]||m[N]||k[N]||l;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},o="Class: ColonyNetwork",i={unversionedId:"api/classes/ColonyNetwork",id:"api/classes/ColonyNetwork",title:"Class: ColonyNetwork",description:"Properties",source:"@site/vendor/colonySDK/docs/api/classes/ColonyNetwork.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyNetwork",permalink:"/next/colonysdk/api/classes/ColonyNetwork",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ColonyGraph",permalink:"/next/colonysdk/api/classes/ColonyGraph"},next:{title:"Class: ColonyToken",permalink:"/next/colonysdk/api/classes/ColonyToken"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"config",id:"config",level:3},{value:"graphClient",id:"graphclient",level:3},{value:"ipfs",id:"ipfs",level:3},{value:"locking",id:"locking",level:3},{value:"network",id:"network",level:3},{value:"networkClient",id:"networkclient",level:3},{value:"signerOrProvider",id:"signerorprovider",level:3},{value:"Methods",id:"methods",level:2},{value:"createColony",id:"createcolony",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Event data",id:"event-data",level:4},{value:"Metadata",id:"metadata",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Event data",id:"event-data-1",level:4},{value:"deployToken",id:"deploytoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getColony",id:"getcolony",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getColonyAddress",id:"getcolonyaddress",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getColonyLabel",id:"getcolonylabel",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getMetaColony",id:"getmetacolony",level:3},{value:"Returns",id:"returns-6",level:4},{value:"getSigner",id:"getsigner",level:3},{value:"Returns",id:"returns-7",level:4},{value:"getUserAddress",id:"getuseraddress",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"getUsername",id:"getusername",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"registerUsername",id:"registerusername",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-11",level:4}],s={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-colonynetwork"},"Class: ColonyNetwork"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"config"},"config"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkConfig")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"graphclient"},"graphClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"graphClient"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ipfs"},"ipfs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ipfs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IpfsMetadata")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locking"},"locking"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locking"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenLocking")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"network"},"network"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"network"),": ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/Network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"networkclient"},"networkClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"networkClient"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signerorprovider"},"signerOrProvider"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"signerOrProvider"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerOrProvider")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createcolony"},"createColony"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createColony"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"): ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"createColony(address,uint256,string,string)"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"agent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType#colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"Create a new colony with metadata"),(0,r.kt)("p",null,"Creates a new colony with IPFS metadata. To edit metadata at a later point you can call the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony#editcolony"},"Colony.editColony")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"There is more to creating a fully functional colony that can be used within the dapp than just calling this function. See the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/colony-creation"},"Colony Creation Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Tokens } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  // Create a colony with some metadata details attached\n  // (forced transaction example)\n  // (also notice that this requires an upload-capable IPFS adapter)\n  await colonyNetwork.createColony(\n    // Use USDC on Gnosis chain as the native token\n    '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', {\n      colonyDisplayName: 'Cool Colony',\n      // IPFS hash to an image file\n      colonyAvatarHash: 'QmS26o1Cmsrx7iw1SSFGEcy22TVDq6VmEZ4XNjpWFyaKUe',\n      // List of token addresses that the Colony should be initialized with (can be changed later) - excluding ETH and the native token from above\n      colonyTokens: [Tokens.CLNY],\n  }).tx();\n})();\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},"ColonyMetadata")," is provided directly (as opposed to a ",(0,r.kt)("a",{parentName:"td",href:"https://docs.ipfs.io/concepts/content-addressing/#identifier-formats"},"CID")," for a JSON file) this requires an ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter")," that can upload and pin to IPFS (like the ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/classes/PinataAdapter"},"PinataAdapter"),"). See its documentation for more information.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"createColony(address,uint256,string,string)"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"agent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType#colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auto-incremented integer id of the colony")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the newly deployed colony contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the token that is used as the colony's native token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IPFS CID of metadata attached to this transaction")))),(0,r.kt)("h4",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"(can be obtained by calling and awaiting the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMetadata")," function)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyDisplayName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name that should be displayed for the colony")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyAvatarHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An IPFS hash for a Colony logo (make it 200x200px)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyTokens")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},'A list of additional tokens that should be in the colony\'s "address book"')))),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createColony"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"): ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"createColony(address,uint256,string)"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Create a new Colony without metadata"),(0,r.kt)("p",null,"Creates a new Colony without IPFS metadata. To add metadata at a later point you can call the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony#editcolony"},"Colony.editColony")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"There is more to creating a fully functional colony that can be used within the dapp than just calling this function. See the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/colony-creation"},"Colony Creation Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Immediately executing async function\n(async function() {\n  // Create a colony\n  // (forced transaction example)\n  await colonyNetwork\n    // Use USDC on Gnosis chain as the native token\n    .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83')\n    .tx();\n})();\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"createColony(address,uint256,string)"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data-1"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auto-incremented integer id of the colony")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the newly deployed colony contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the token that is used as the colony's native token")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deploytoken"},"deployToken"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deployToken"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"deployTokenViaNetwork"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAddress?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,'Deploy a "special" colony ERC20 token'),(0,r.kt)("p",null,"If there is not token yet that should be used with the Colony, this is the canonical way to create one."),(0,r.kt)("p",null,"This is a supercharged ERC20 token contract, that not only has a permissioned ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," function (that can be used from the colony) but also supports Metatransactions. In order to fully use its permissioned system with a colony, some extra steps have to be taken. See the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/colony-creation"},"Colony Creation Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The token deployed with this function is locked by default. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"unlockToken()")," on the Colony at a later point to unlock it."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"decimals")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"18"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"deployTokenViaNetwork"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAddress?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcolony"},"getColony"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getColony"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"Get a new instance of a Colony"),(0,r.kt)("p",null,"Use this function to instantiate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Colony")," by providing the Colony's address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Colony's address")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"A Colony abstaction instance"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcolonyaddress"},"getColonyAddress"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getColonyAddress"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Get the colony's addess by the ENS label"),(0,r.kt)("p",null,"Returns the colony's address that belongs to the given ENS label\nWill return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the given label was not assigned to a colony."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The colony's address"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcolonylabel"},"getColonyLabel"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getColonyLabel"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Get the colony's ENS label"),(0,r.kt)("p",null,"Returns the colony's ENS label, just like it's shown in the browsers address bar after ",(0,r.kt)("inlineCode",{parentName:"p"},"/colony/"),", when using the dApp.\nWill return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the colony does not exist or if no label was assigned yet"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The colony's ENS label"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmetacolony"},"getMetaColony"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMetaColony"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"Get a new instance of the MetaColony"),(0,r.kt)("p",null,"Use this function to instantiate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Colony")," for the deployed MetaColony"),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),">"),(0,r.kt)("p",null,"A Colony abstaction instance of the MetaColony"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsigner"},"getSigner"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSigner"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Signer")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getuseraddress"},"getUserAddress"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getUserAddress"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Get the user's addess by the username"),(0,r.kt)("p",null,"Returns the user's address that belongs to the given username. Username has to be provided without any suffix, just like it's shown in the dapp.\nWill return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the given username was not registered."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The user's address"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getusername"},"getUsername"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getUsername"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Get a user's username"),(0,r.kt)("p",null,"Returns the user's username (the ENS label, just like it's shown in the dapp, without any suffixes)\nWill return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the user does not exist or if no label was assigned yet"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The user's username"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"registerusername"},"registerUsername"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"registerUsername"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"): ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"registerUserLabel"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"label?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Register a Colony-internal ENS username"),(0,r.kt)("p",null,"Registers a username for the signing address. An address can only register one username. Usernames are globally unique. This method will check whether the username was registered before."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyNetworkClient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"registerUserLabel"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"label?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"init"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signerOrProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetwork")),">"),(0,r.kt)("p",null,"Creates a new instance to connect to the ColonyNetwork"),(0,r.kt)("p",null,"This is your main entry point to talk to the Colony Network Smart Contracts.\nFrom here you should be able to instantiate all the required instances for Colonies and their extensions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { providers } from 'ethers';\nimport { ColonyNetwork, Tokens } from '@colony/sdk';\n\n// Connect directly to the deployed Colony Network on Gnosis Chain\nconst provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc/');\n// Immediately executing async function\n(async function() {\n  const colonyNetwork = await ColonyNetwork.init(provider);\n  // Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`\n})();\n")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signerOrProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SignerOrProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ",(0,r.kt)("em",{parentName:"td"},"ethers")," compatible Signer or Provider instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyNetworkOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetworkOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional custom ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/ColonyNetworkOptions"},"ColonyNetworkOptions"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetwork")),">"),(0,r.kt)("p",null,"A ColonyNetwork abstraction instance"))}k.isMDXComponent=!0}}]);