"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={description:"How to only allow users having undergone KYC to a token sale."},l="Setting up KYC",a={unversionedId:"extensions/whitelist/setting-up-kyc",id:"extensions/whitelist/setting-up-kyc",title:"Setting up KYC",description:"How to only allow users having undergone KYC to a token sale.",source:"@site/colony/explore/extensions/whitelist/setting-up-kyc.md",sourceDirName:"extensions/whitelist",slug:"/extensions/whitelist/setting-up-kyc",permalink:"/explore/extensions/whitelist/setting-up-kyc",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/explore/extensions/whitelist/setting-up-kyc.md",tags:[],version:"current",frontMatter:{description:"How to only allow users having undergone KYC to a token sale."},sidebar:"sidebar",previous:{title:"Setting up an Agreement",permalink:"/explore/extensions/whitelist/setting-up-an-agreement"},next:{title:"Uninstallation",permalink:"/explore/extensions/whitelist/uninstallation"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-kyc"},"Setting up KYC"),(0,r.kt)("p",null,"To include Know Your Customer (KYC) standards in a token sale through Coin Machine, the Whitelist Extension allows you to upload a list of whitelisted wallet addresses that have undergone KYC with a KYC provider of your choice. Colony does not provide KYC services itself nor does it integrate any third-party providers directly into the interface. When looking for a KYC solution, it is important that the data includes a list of to-be-whitelisted wallet addresses in a compatible format."," "),(0,r.kt)("p",null,"To set up KYC, follow these steps."," "),(0,r.kt)("p",null,"1",".",' Select "KYC only" or "KYC and agreement", as you wish.'),(0,r.kt)("p",null,"2",".",' If you chose "KYC and agreement", paste the agreement in the box provided below.'),(0,r.kt)("p",null,"3",".",' Click "Confirm" and confirm the transaction in your wallet.'),(0,r.kt)("p",null,"4",".",' Revisit the "Whitelist" page in the "Extensions" section whenever you have to-be-whitelisted wallet addresses available.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To add a single wallet address, paste it into the text field."),(0,r.kt)("li",{parentName:"ul"},'To add multiple wallet addresses in a CSV file, click "Upload .csv" in the upper right-hand corner of the text field to toggle the view to a file uploader and select your CSV file. The input must be formatted a CSV file and contain a single column of wallet addresses with one address per row, see also the following template.')),(0,r.kt)("p",null,'{% file src="../../assets/template.csv" %}\nTemplate of a list with to-be-whitelisted wallet addresses.\n{% endfile %}'),(0,r.kt)("p",null,"4",".",' Click on "Confirm" and confirm in your wallet.'),(0,r.kt)("p",null,"Users will now be required to have their wallet address whitelisted before they can take part in a token sale on Coin Machine in your colony."))}u.isMDXComponent=!0}}]);