"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20147:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var a=n(87462),o=n(67294),r=n(3905);const l={id:"on-create-colony-metadata",title:"onCreateColonyMetadata",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/subscriptions/on-create-colony-metadata",id:"graphql/subscriptions/on-create-colony-metadata",title:"onCreateColonyMetadata",description:"No description",source:"@site/colony/graphql/subscriptions/on-create-colony-metadata.mdx",sourceDirName:"graphql/subscriptions",slug:"/graphql/subscriptions/on-create-colony-metadata",permalink:"/next/graphql/subscriptions/on-create-colony-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/subscriptions/on-create-colony-metadata.mdx",tags:[],version:"current",frontMatter:{id:"on-create-colony-metadata",title:"onCreateColonyMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"onCreateColonyFundsClaim",permalink:"/next/graphql/subscriptions/on-create-colony-funds-claim"},next:{title:"onCreateColonyTokens",permalink:"/next/graphql/subscriptions/on-create-colony-tokens"}},s={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>onCreateColonyMetadata.<b>filter</b></code><Bullet /><code>ModelSubscriptionColonyMetadataFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-oncreatecolonymetadatabfilterbcodemodelsubscriptioncolonymetadatafilterinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ColonyMetadata</code> <Badge class="secondary" text="object"/>',id:"colonymetadata-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,s]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:d,SpecifiedBy:p,Badge:u,toc:y,Details:m};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"onCreateColonyMetadata(\n  filter: ModelSubscriptionColonyMetadataFilterInput\n): ColonyMetadata\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-oncreatecolonymetadatabfilterbcodemodelsubscriptioncolonymetadatafilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"onCreateColonyMetadata.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-colony-metadata-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyMetadataFilterInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"colonymetadata-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}b.isMDXComponent=!0}}]);