"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},y=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return n?o.createElement(m,a(a({ref:t},y),{},{components:n})):o.createElement(m,a({ref:t},y))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8503:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>y,Details:()=>m,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(87462),r=n(67294),l=n(3905);const a={id:"colony-type",title:"ColonyType",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/enums/colony-type",id:"graphql/enums/colony-type",title:"ColonyType",description:"No description",source:"@site/colony/graphql/enums/colony-type.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/colony-type",permalink:"/next/graphql/enums/colony-type",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/enums/colony-type.mdx",tags:[],version:"current",frontMatter:{id:"colony-type",title:"ColonyType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ColonyActionType",permalink:"/next/graphql/enums/colony-action-type"},next:{title:"DomainColor",permalink:"/next/graphql/enums/domain-color"}},i={},y=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ColonyType.<b>COLONY</b></code>",id:"code-style-fontweight-normal-colonytypebcolonybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ColonyType.<b>METACOLONY</b></code>",id:"code-style-fontweight-normal-colonytypebmetacolonybcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:p=!1}=e;const[c,i]=(0,r.useState)(p);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&a)},f={Bullet:y,SpecifiedBy:s,Badge:u,toc:d,Details:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ColonyType {\n  COLONY\n  METACOLONY\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonytypebcolonybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyType.",(0,l.kt)("b",null,"COLONY")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonytypebmetacolonybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyType.",(0,l.kt)("b",null,"METACOLONY")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/colony"},(0,l.kt)("inlineCode",{parentName:"a"},"Colony")),"  ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/create-colony-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateColonyInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/create-unique-colony-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateUniqueColonyInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-by-type"},(0,l.kt)("inlineCode",{parentName:"a"},"getColonyByType")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-type-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelColonyTypeInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/update-colony-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateColonyInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);