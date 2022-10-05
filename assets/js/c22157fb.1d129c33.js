"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),i=n(2991);const c={},a="Extension Interfaces",s={unversionedId:"interfaces/extensions/index",id:"interfaces/extensions/index",title:"Extension Interfaces",description:"",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/index.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/",permalink:"/colonynetwork/interfaces/extensions/",draft:!1,editUrl:"https://github.com/JoinColony/interfaces/extensions/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interfaces",permalink:"/colonynetwork/interfaces/"},next:{title:"Coin Machine Extension (`CoinMachine`)",permalink:"/colonynetwork/interfaces/extensions/coinmachine"}},l={},u=[],f={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extension-interfaces"},"Extension Interfaces"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),i=n(3438),c=n(9960),a=n(3919),s=n(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",f),title:c},c))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const o=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:o,title:n.label,description:null==c?void 0:c.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}}}]);