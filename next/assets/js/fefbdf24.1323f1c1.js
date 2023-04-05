"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53247:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=n(67294),l=n(3905);const r={id:"list-domains",title:"listDomains",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/queries/list-domains",id:"graphql/queries/list-domains",title:"listDomains",description:"No description",source:"@site/colony/graphql/queries/list-domains.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/list-domains",permalink:"/next/graphql/queries/list-domains",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/list-domains.mdx",tags:[],version:"current",frontMatter:{id:"list-domains",title:"listDomains",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"listDomainMetadata",permalink:"/next/graphql/queries/list-domain-metadata"},next:{title:"listProfiles",permalink:"/next/graphql/queries/list-profiles"}},c={},d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>listDomains.<b>filter</b></code><Bullet /><code>ModelDomainFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-listdomainsbfilterbcodemodeldomainfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listDomains.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listdomainsblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listDomains.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listdomainsbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelDomainConnection</code> <Badge class="secondary" text="object"/>',id:"modeldomainconnection-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[s,c]=(0,a.useState)(i);return(0,l.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&r)},g={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:f};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"listDomains(\n  filter: ModelDomainFilterInput\n  limit: Int\n  nextToken: String\n): ModelDomainConnection\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listdomainsbfilterbcodemodeldomainfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listDomains.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelDomainFilterInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listdomainsblimitbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listDomains.",(0,l.kt)("b",null,"limit"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listdomainsbnexttokenbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listDomains.",(0,l.kt)("b",null,"nextToken"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"modeldomainconnection-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/model-domain-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelDomainConnection"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}y.isMDXComponent=!0}}]);