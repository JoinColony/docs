"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66689],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),y=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=y(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=y(o),u=l,g=p["".concat(i,".").concat(u)]||p[u]||s[u]||r;return o?n.createElement(g,a(a({ref:t},d),{},{components:o})):n.createElement(g,a({ref:t},d))}));function u(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var y=2;y<r;y++)a[y]=o[y];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},75498:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>s,assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(87462),l=o(67294),r=o(3905);const a={id:"get-colony-by-type",title:"getColonyByType",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/queries/get-colony-by-type",id:"graphql/queries/get-colony-by-type",title:"getColonyByType",description:"No description",source:"@site/colony/graphql/queries/get-colony-by-type.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-colony-by-type",permalink:"/next/graphql/queries/get-colony-by-type",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/get-colony-by-type.mdx",tags:[],version:"current",frontMatter:{id:"get-colony-by-type",title:"getColonyByType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getColonyByName",permalink:"/next/graphql/queries/get-colony-by-name"},next:{title:"getColonyExtension",permalink:"/next/graphql/queries/get-colony-extension"}},y={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>getColonyByType.<b>type</b></code><Bullet /><code>ColonyType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-getcolonybytypebtypebcodecolonytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getColonyByType.<b>sortDirection</b></code><Bullet /><code>ModelSortDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-getcolonybytypebsortdirectionbcodemodelsortdirection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getColonyByType.<b>filter</b></code><Bullet /><code>ModelColonyFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-getcolonybytypebfilterbcodemodelcolonyfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getColonyByType.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getcolonybytypeblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getColonyByType.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getcolonybytypebnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelColonyConnection</code> <Badge class="secondary" text="object"/>',id:"modelcolonyconnection-",level:4}],g=e=>{let{dataOpen:t,dataClose:o,children:a,startOpen:c=!1}=e;const[i,y]=(0,l.useState)(c);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),y((e=>!e))},style:{listStyle:"none"}},i?t:o),i&&a)},m={Bullet:d,SpecifiedBy:s,Badge:p,toc:u,Details:g};function b(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"getColonyByType(\n  type: ColonyType!\n  sortDirection: ModelSortDirection\n  filter: ModelColonyFilterInput\n  limit: Int\n  nextToken: String\n): ModelColonyConnection\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-getcolonybytypebtypebcodecolonytype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"getColonyByType.",(0,r.kt)("b",null,"type"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/enums/colony-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyType!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-getcolonybytypebsortdirectionbcodemodelsortdirection-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"getColonyByType.",(0,r.kt)("b",null,"sortDirection"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/enums/model-sort-direction"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelSortDirection"))," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-getcolonybytypebfilterbcodemodelcolonyfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"getColonyByType.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyFilterInput"))," ",(0,r.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-getcolonybytypeblimitbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"getColonyByType.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-getcolonybytypebnexttokenbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"getColonyByType.",(0,r.kt)("b",null,"nextToken"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"modelcolonyconnection-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/model-colony-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyConnection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}b.isMDXComponent=!0}}]);