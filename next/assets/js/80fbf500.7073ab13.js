"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[6928],{8860:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var o=n(7953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,y=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?o.createElement(u,i(i({ref:t},y),{},{components:n})):o.createElement(u,i({ref:t},y))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(4432),a=(n(7953),n(8860));const s={description:"A guide on how to create a Colony programmatically. The deployment of a Colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",sidebar_position:2},i="Creating a Colony",r={unversionedId:"guides/colony-creation",id:"guides/colony-creation",title:"Creating a Colony",description:"A guide on how to create a Colony programmatically. The deployment of a Colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",source:"@site/vendor/colonyJS/packages/sdk/docs/guides/colony-creation.md",sourceDirName:"guides",slug:"/guides/colony-creation",permalink:"/next/colonysdk/guides/colony-creation",draft:!1,editUrl:"https://github.com/JoinColony/colonyJS/edit/main/packages/sdk/docs/guides/colony-creation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"A guide on how to create a Colony programmatically. The deployment of a Colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",sidebar_position:2},sidebar:"sidebar",previous:{title:"Creating transactions in Colony SDK",permalink:"/next/colonysdk/guides/transactions"},next:{title:"Metadata within Colony",permalink:"/next/colonysdk/guides/metadata"}},l={},p=[{value:"Step 1 - Deploying the Colony contract (and optionally its token)",id:"step-1---deploying-the-colony-contract-and-optionally-its-token",level:2},{value:"Step 2 - Instantiate the Colony for the first time",id:"step-2---instantiate-the-colony-for-the-first-time",level:2},{value:"Step 3 - Set the Colony as owner of the token",id:"step-3---set-the-colony-as-owner-of-the-token",level:2},{value:"Step 4 - Install the <code>OneTxPayment</code> extension",id:"step-4---install-the-onetxpayment-extension",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],y={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"creating-a-colony"},"Creating a Colony"),(0,a.yg)("p",null,"Even though deploying a Colony is technically just a matter of issuing one transaction, for the Colony to be properly set up and usable in the dApp, some extra steps are necessary. In this guide we'll walk you through the whole process of creating the right transactions and explain what happens on the way."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Keep in mind that some of these transactions are optional and depend on your specific situation.")),(0,a.yg)("p",null,"For a full example see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyJS/blob/main/packages/sdk/examples/node/create.ts"},"here"),"."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"These examples assume that the user executing the transactions has funds in their wallet to pay for gas. If you'd like to use gasless transactions instead, use ",(0,a.yg)("inlineCode",{parentName:"p"},"metaTx()")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"tx()"),".")),(0,a.yg)("h2",{id:"step-1---deploying-the-colony-contract-and-optionally-its-token"},"Step 1 - Deploying the Colony contract (and optionally its token)"),(0,a.yg)("p",null,"The most important step. Here the actualy Colony contract will be deployed. This happens by executing a contract method on the ",(0,a.yg)("inlineCode",{parentName:"p"},"ColonyNetwork")," (as opposed to a deploy-transaction):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import { providers } from 'ethers';\nimport { ColonyNetwork, ColonyRpcEndpoint, Wallet } from '@colony/sdk';\n\n// Prepare your provider and signer (wallet)\nconst provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);\nconst wallet = Wallet.createRandom().connect(provider);\n// Instantiate Colony Network\nconst colonyNetwork = new ColonyNetwork(wallet);\n\n// Create actual colony (deploys Colony contract) (do this in an async function)\nconst [{ colonyAddress, tokenAddress, tokenAuthorityAddress }] = await colonyNetwork\n  .createColony({ name: 'Test token', symbol: 'TOT' }, 'colonytestname')\n  .tx().mined();\n")),(0,a.yg)("p",null,"One can specify the token name, its symbol and even its decimals (even though it's recommended to leave that at the default value). This will deploy a special ERC20 token that integrates well with Colony (e.g. it supports permissions, minting and gasless transactions out of the box). For its contract code see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/metaTxToken/MetaTxToken.sol"},"here"),"."),(0,a.yg)("p",null,"You can also use an already existing token. For that, instead of passing in the token's details as the first argument, just use the token's address (it needs to be in the same chain your Colony is deployed in), like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"// Use USDC on Gnosis chain as the native token\nconst [{ colonyAddress }] = await colonyNetwork\n  .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 'anothertestname')\n  .tx().mined();\n")),(0,a.yg)("p",null,"As the second argument a label for the Colony is assigned. These are unique, so pick one that's not already taken. The ",(0,a.yg)("inlineCode",{parentName:"p"},"createColony")," method will check that. Alternatively, the ",(0,a.yg)("inlineCode",{parentName:"p"},"colonyNetwork.getColonyAddress(label)")," function can be used. The label is used by the dApp as a short name and for looking up the Colony's address."),(0,a.yg)("p",null,"**If the own token was used and no extension installation is desired we would be done here. This is not recommended though, as one will at least need the ",(0,a.yg)("inlineCode",{parentName:"p"},"OneTxPayment")," extension to properly use Colony at this stage."),(0,a.yg)("h2",{id:"step-2---instantiate-the-colony-for-the-first-time"},"Step 2 - Instantiate the Colony for the first time"),(0,a.yg)("p",null,"Let's instantiate the Colony (this is the code used to instantiate an existing Colony) and the token:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const colony = await colonyNetwork.getColony(colonyAddress);\nconst { token } = colony;\n")),(0,a.yg)("h2",{id:"step-3---set-the-colony-as-owner-of-the-token"},"Step 3 - Set the Colony as owner of the token"),(0,a.yg)("p",null,"The token authority is a contract that glues the token and the Colony together and makes it possible for the Colony to manage and move the token. The first transaction is needed to set the token's ",(0,a.yg)("inlineCode",{parentName:"p"},"authority"),' to the one that was just deployed. After that we set the Colony to one of the token\'s "owners", so that it has permissions to access extra token functions (like ',(0,a.yg)("inlineCode",{parentName:"p"},"mint"),"). If your token was newly created in step 1 you will want to do this! If the token does not support the ",(0,a.yg)("inlineCode",{parentName:"p"},"setAuthority")," method, this step should be skipped. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"// Set the token's authority to the freshly deployed one (see step 1)\nawait token.setAuthority(tokenAuthorityAddress).tx().mined();\n// Set the token's owner (the Colony), to have permissions to execute authorized functions (like `mint`)\nawait colony.token.setOwner(colony.address).tx().mined();\n")),(0,a.yg)("h2",{id:"step-4---install-the-onetxpayment-extension"},"Step 4 - Install the ",(0,a.yg)("inlineCode",{parentName:"h2"},"OneTxPayment")," extension"),(0,a.yg)("p",null,"As mentioned earlier, this step is technically optional as well but if the Colony is supposed to be used productively, a form of payment extension is needed. Currently only the ",(0,a.yg)("inlineCode",{parentName:"p"},"OneTxPayment")," extension is supported. Install it like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const [{ extensionId, version }] = await colony\n  .installExtension(SupportedExtension.oneTx)\n  .tx().mined();\nawait colony.updateExtensions();\nconst [{ user, setTo, role }] = await colony\n  .setRoles(colony.ext.oneTx.address, [\n    ColonyRole.Administration,\n    ColonyRole.Funding,\n  ])\n  .tx().mined();\n")),(0,a.yg)("p",null,"Here we install the extension using the ",(0,a.yg)("inlineCode",{parentName:"p"},"installExtension")," method. This extension is an own contract that was deployed in this transaction. To get its address, we re-initialize the extensions on the Colony using ",(0,a.yg)("inlineCode",{parentName:"p"},"updateExtensions"),". After that, ",(0,a.yg)("inlineCode",{parentName:"p"},"oneTx")," will be available on ",(0,a.yg)("inlineCode",{parentName:"p"},"colony.ext"),".\nFinally, we assign the ",(0,a.yg)("strong",{parentName:"p"},"Administration")," and ",(0,a.yg)("strong",{parentName:"p"},"Funding")," roles of the Colony's ",(0,a.yg)("inlineCode",{parentName:"p"},"Root")," team to the extension that we just deployed. The OneTxPayment extension needs these permissions to function properly."),(0,a.yg)("h2",{id:"thats-it"},"That's it!"),(0,a.yg)("p",null,"We have successfully deployed a Colony that can be used from the dApp as well. Explore what's possible within a Colony using Colony SDK ",(0,a.yg)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"here"),"."))}c.isMDXComponent=!0}}]);