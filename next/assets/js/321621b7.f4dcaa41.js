"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,u=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},23295:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var n=a(87462),o=a(67294),l=a(3905);const r={id:"domain-metadata-changelog-input",title:"DomainMetadataChangelogInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/domain-metadata-changelog-input",id:"graphql/inputs/domain-metadata-changelog-input",title:"DomainMetadataChangelogInput",description:"No description",source:"@site/colony/graphql/inputs/domain-metadata-changelog-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/domain-metadata-changelog-input",permalink:"/next/graphql/inputs/domain-metadata-changelog-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/domain-metadata-changelog-input.mdx",tags:[],version:"current",frontMatter:{id:"domain-metadata-changelog-input",title:"DomainMetadataChangelogInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DomainInput",permalink:"/next/graphql/inputs/domain-input"},next:{title:"GetReputationForTopDomainsInput",permalink:"/next/graphql/inputs/get-reputation-for-top-domains-input"}},c={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>transactionHash</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputbtransactionhashbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>oldName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputboldnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>newName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>oldColor</b></code><Bullet /><code>DomainColor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputboldcolorbcodedomaincolor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>newColor</b></code><Bullet /><code>DomainColor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewcolorbcodedomaincolor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>oldDescription</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputbolddescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadataChangelogInput.<b>newDescription</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewdescriptionbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},h={Bullet:s,SpecifiedBy:m,Badge:p,toc:g,Details:u};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input DomainMetadataChangelogInput {\n  transactionHash: String!\n  oldName: String!\n  newName: String!\n  oldColor: DomainColor!\n  newColor: DomainColor!\n  oldDescription: String!\n  newDescription: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputbtransactionhashbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"transactionHash"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputboldnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"oldName"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"newName"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputboldcolorbcodedomaincolor--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"oldColor"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/domain-color"},(0,l.kt)("inlineCode",{parentName:"a"},"DomainColor!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewcolorbcodedomaincolor--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"newColor"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/domain-color"},(0,l.kt)("inlineCode",{parentName:"a"},"DomainColor!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputbolddescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"oldDescription"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatachangeloginputbnewdescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadataChangelogInput.",(0,l.kt)("b",null,"newDescription"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/create-domain-metadata-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateDomainMetadataInput")),"  ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/update-domain-metadata-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateDomainMetadataInput")),"  ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);