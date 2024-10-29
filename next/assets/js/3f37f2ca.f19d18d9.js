"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[2278],{8860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.createContext({}),d=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(y.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=d(n),u=r,m=g["".concat(y,".").concat(u)]||g[u]||p[u]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(4432),r=(n(7953),n(8860));const l={},o="Meta Colony (IMetaColony)",i={unversionedId:"interfaces/imetacolony",id:"interfaces/imetacolony",title:"Meta Colony (IMetaColony)",description:"The Meta Colony is a special colony which controls the Colony Network.",source:"@site/vendor/colonyNetwork/docs/interfaces/imetacolony.md",sourceDirName:"interfaces",slug:"/interfaces/imetacolony",permalink:"/next/colonynetwork/interfaces/imetacolony",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Ether Router (IEtherRouter)",permalink:"/next/colonynetwork/interfaces/ietherrouter"},next:{title:"Recovery (IRecovery)",permalink:"/next/colonynetwork/interfaces/irecovery"}},y={},d=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>addExtensionToNetwork(bytes32 _extensionId, address _resolver)</code>",id:"-addextensiontonetworkbytes32-_extensionid-address-_resolver",level:3},{value:"\u25b8 <code>addGlobalSkill():uint256 skillId</code>",id:"-addglobalskilluint256-skillid",level:3},{value:"\u25b8 <code>addNetworkColonyVersion(uint256 _version, address _resolver)</code>",id:"-addnetworkcolonyversionuint256-_version-address-_resolver",level:3},{value:"\u25b8 <code>deprecateGlobalSkill(uint256 _skillId)</code>",id:"-deprecateglobalskilluint256-_skillid",level:3},{value:"\u25b8 <code>mintTokensForColonyNetwork(uint256 _wad)</code>",id:"-minttokensforcolonynetworkuint256-_wad",level:3},{value:"\u25b8 <code>setNetworkFeeInverse(uint256 _feeInverse)</code>",id:"-setnetworkfeeinverseuint256-_feeinverse",level:3},{value:"\u25b8 <code>setPayoutWhitelist(address _token, bool _status)</code>",id:"-setpayoutwhitelistaddress-_token-bool-_status",level:3},{value:"\u25b8 <code>setReputationMiningCycleReward(uint256 _amount)</code>",id:"-setreputationminingcyclerewarduint256-_amount",level:3}],s={toc:d},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"meta-colony-imetacolony"},"Meta Colony (",(0,r.yg)("inlineCode",{parentName:"h1"},"IMetaColony"),")"),(0,r.yg)("p",null,"The Meta Colony is a special colony which controls the Colony Network.\nThis colony has access to a number of special functions used to manage\nvarious parameters of the network."),(0,r.yg)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.yg)("h3",{id:"-addextensiontonetworkbytes32-_extensionid-address-_resolver"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"addExtensionToNetwork(bytes32 _extensionId, address _resolver)")),(0,r.yg)("p",null,"Add a new extension/version to the Extensions repository."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls ",(0,r.yg)("inlineCode",{parentName:"em"},"IColonyNetwork.addExtensionToNetwork"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_extensionId"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes32"),(0,r.yg)("td",{parentName:"tr",align:null},"keccak256 hash of the extension name, used as an indentifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_resolver"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The deployed resolver containing the extension contract logic")))),(0,r.yg)("h3",{id:"-addglobalskilluint256-skillid"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"addGlobalSkill():uint256 skillId")),(0,r.yg)("p",null,"Add a new global skill."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls ",(0,r.yg)("inlineCode",{parentName:"em"},"IColonyNetwork.addSkill"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"skillId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Id of the added skill")))),(0,r.yg)("h3",{id:"-addnetworkcolonyversionuint256-_version-address-_resolver"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"addNetworkColonyVersion(uint256 _version, address _resolver)")),(0,r.yg)("p",null,"Adds a new Colony contract version and the address of associated ",(0,r.yg)("inlineCode",{parentName:"p"},"_resolver")," contract. Secured function to authorised members."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls ",(0,r.yg)("inlineCode",{parentName:"em"},"IColonyNetwork.addColonyVersion"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_version"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The new Colony contract version")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_resolver"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"Address of the ",(0,r.yg)("inlineCode",{parentName:"td"},"Resolver")," contract which will be used with the underlying ",(0,r.yg)("inlineCode",{parentName:"td"},"EtherRouter")," contract")))),(0,r.yg)("h3",{id:"-deprecateglobalskilluint256-_skillid"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"deprecateGlobalSkill(uint256 _skillId)")),(0,r.yg)("p",null,"Mark a global skill as deprecated which stops new tasks and payments from using it."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls ",(0,r.yg)("inlineCode",{parentName:"em"},"IColonyNetwork.deprecateSkill"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_skillId"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Id of the added skill")))),(0,r.yg)("h3",{id:"-minttokensforcolonynetworkuint256-_wad"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"mintTokensForColonyNetwork(uint256 _wad)")),(0,r.yg)("p",null,"Mints CLNY in the Meta Colony and transfers them to the colony network. Only allowed to be called on the Meta Colony by the colony network."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_wad"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Amount to mint and transfer to the colony network")))),(0,r.yg)("h3",{id:"-setnetworkfeeinverseuint256-_feeinverse"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"setNetworkFeeInverse(uint256 _feeInverse)")),(0,r.yg)("p",null,"Set the Colony Network fee inverse amount."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls ",(0,r.yg)("inlineCode",{parentName:"em"},"IColonyNetwork.setFeeInverse"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_feeInverse"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"Nonzero amount for the fee inverse")))),(0,r.yg)("h3",{id:"-setpayoutwhitelistaddress-_token-bool-_status"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"setPayoutWhitelist(address _token, bool _status)")),(0,r.yg)("p",null,"Set a token's status in the payout whitelist on the Colony Network"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_token"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The token being set")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_status"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"The whitelist status")))),(0,r.yg)("h3",{id:"-setreputationminingcyclerewarduint256-_amount"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"setReputationMiningCycleReward(uint256 _amount)")),(0,r.yg)("p",null,"Called to set the total per-cycle reputation reward, which will be split between all miners."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Calls the corresponding function on the ColonyNetwork.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_amount"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The CLNY awarded per mining cycle to the miners")))))}p.isMDXComponent=!0}}]);