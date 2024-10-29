"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[755],{8860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(7953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),y=o(a),u=r,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var n=a(4432),r=(a(7953),a(8860));const l={},i="Whitelist Extension (Whitelist)",g={unversionedId:"interfaces/extensions/whitelist",id:"interfaces/extensions/whitelist",title:"Whitelist Extension (Whitelist)",description:"Alongside the Coin Machine Extension, a colony may use the Whitelist extension to filter wallet addresses allowed to take part in a token sale on Coin Machine.",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/whitelist.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/whitelist",permalink:"/colonynetwork/interfaces/extensions/whitelist",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Motions & Disputes Extension (VotingReputation)",permalink:"/colonynetwork/interfaces/extensions/votingreputation"},next:{title:"Colony (IColony)",permalink:"/colonynetwork/interfaces/icolony"}},s={},o=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>approveUsers(address[] memory _users, bool _status)</code>",id:"-approveusersaddress-memory-_users-bool-_status",level:3},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getAgreementHash():string _hash</code>",id:"-getagreementhashstring-_hash",level:3},{value:"\u25b8 <code>getApproval(address _user):bool _status</code>",id:"-getapprovaladdress-_userbool-_status",level:3},{value:"\u25b8 <code>getMetatransactionNonce(address userAddress):uint256 nonce</code>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <code>getSignature(address _user):bool _status</code>",id:"-getsignatureaddress-_userbool-_status",level:3},{value:"\u25b8 <code>getUseApprovals():bool _useApprovals</code>",id:"-getuseapprovalsbool-_useapprovals",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>initialise(bool _useApprovals, string memory _agreementHash)</code>",id:"-initialisebool-_useapprovals-string-memory-_agreementhash",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>isApproved(address _user):bool _approved</code>",id:"-isapprovedaddress-_userbool-_approved",level:3},{value:"\u25b8 <code>signAgreement(string memory _agreementHash)</code>",id:"-signagreementstring-memory-_agreementhash",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],p={toc:o},y="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"whitelist-extension-whitelist"},"Whitelist Extension (",(0,r.yg)("inlineCode",{parentName:"h1"},"Whitelist"),")"),(0,r.yg)("p",null,"Alongside the Coin Machine Extension, a colony may use the Whitelist extension to filter wallet addresses allowed to take part in a token sale on Coin Machine."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/whitelist"},"here")," for more information."),(0,r.yg)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.yg)("h3",{id:"-approveusersaddress-memory-_users-bool-_status"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"approveUsers(address[] memory _users, bool _status)")),(0,r.yg)("p",null,"Sets user statuses in the whitelist"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_users"),(0,r.yg)("td",{parentName:"tr",align:null},"address[]"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of user addresses")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_status"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"The whitelist status to set")))),(0,r.yg)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,r.yg)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.yg)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,r.yg)("p",null,"Called when upgrading the extension"),(0,r.yg)("h3",{id:"-getagreementhashstring-_hash"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getAgreementHash():string _hash")),(0,r.yg)("p",null,"Get the agreementHash"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_hash"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The agreement hash")))),(0,r.yg)("h3",{id:"-getapprovaladdress-_userbool-_status"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getApproval(address _user):bool _status")),(0,r.yg)("p",null,"Get the user's approval status"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_user"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_status"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"The user's approval status")))),(0,r.yg)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getMetatransactionNonce(address userAddress):uint256 nonce")),(0,r.yg)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"userAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.yg)("h3",{id:"-getsignatureaddress-_userbool-_status"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getSignature(address _user):bool _status")),(0,r.yg)("p",null,"Get the user's signature status"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_user"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_status"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"The user's signature status")))),(0,r.yg)("h3",{id:"-getuseapprovalsbool-_useapprovals"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"getUseApprovals():bool _useApprovals")),(0,r.yg)("p",null,"Get the useApprovals boolean"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_useApprovals"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether ",(0,r.yg)("inlineCode",{parentName:"td"},"useApprovals")," is ",(0,r.yg)("inlineCode",{parentName:"td"},"true"))))),(0,r.yg)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,r.yg)("p",null,"Returns the identifier of the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"bytes32"),(0,r.yg)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.yg)("h3",{id:"-initialisebool-_useapprovals-string-memory-_agreementhash"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"initialise(bool _useApprovals, string memory _agreementHash)")),(0,r.yg)("p",null,"Initialise the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_useApprovals"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not to require administrative approval")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_agreementHash"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"An agreement hash (such as an IPFS URI)")))),(0,r.yg)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,r.yg)("p",null,"Configures the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_colony"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.yg)("h3",{id:"-isapprovedaddress-_userbool-_approved"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"isApproved(address _user):bool _approved")),(0,r.yg)("p",null,"Get the user's overall whitelist status"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_user"),(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_approved"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Is ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," when the user is approved")))),(0,r.yg)("h3",{id:"-signagreementstring-memory-_agreementhash"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"signAgreement(string memory _agreementHash)")),(0,r.yg)("p",null,"The user's signature on the agreement"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_agreementHash"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The agreement hash being signed")))),(0,r.yg)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"uninstall()")),(0,r.yg)("p",null,"Called when uninstalling the extension"),(0,r.yg)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,r.yg)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,r.yg)("p",null,"Returns the version of the extension"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Return Parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_version"),(0,r.yg)("td",{parentName:"tr",align:null},"uint256"),(0,r.yg)("td",{parentName:"tr",align:null},"The extension's version number")))))}d.isMDXComponent=!0}}]);