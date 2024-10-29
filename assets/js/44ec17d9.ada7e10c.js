"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[370],{8860:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(7953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(4432),o=(r(7953),r(8860)),i=r(8071);const c={description:"Colony Whitepaper tl;dr",sidebar_position:3},a="Whitepaper tl;dr",l={unversionedId:"tldr/index",id:"tldr/index",title:"Whitepaper tl;dr",description:"Colony Whitepaper tl;dr",source:"@site/vendor/colonyNetwork/docs/tldr/index.md",sourceDirName:"tldr",slug:"/tldr/",permalink:"/colonynetwork/tldr/",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/tldr/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Colony Whitepaper tl;dr",sidebar_position:3},sidebar:"sidebar",previous:{title:"The Colony Network",permalink:"/colonynetwork/"},next:{title:"Glossary of Terms",permalink:"/colonynetwork/tldr/glossary"}},s={},d=[],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"whitepaper-tldr"},"Whitepaper tl;dr"),(0,o.yg)("p",null,"Learn about important concepts from the whitepaper in a condensed form."),(0,o.yg)(i.A,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},8071:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(7953),o=r(8835),i=r(3517),c=r(9525),a=r(5852),l=r(3019);const s={cardContainer:"cardContainer_xqPq",cardTitle:"cardTitle_LdVz",cardDescription:"cardDescription_VnOv"};function d(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,o.A)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.A)("text--truncate",s.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.A)("text--truncate",s.cardDescription),title:c},c))}function u(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}}}]);