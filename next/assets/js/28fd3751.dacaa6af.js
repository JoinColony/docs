"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65417:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),l=n(67294),r=n(3905);const i={id:"list-colonies",title:"listColonies",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/queries/list-colonies",id:"graphql/queries/list-colonies",title:"listColonies",description:"No description",source:"@site/colony/graphql/queries/list-colonies.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/list-colonies",permalink:"/next/graphql/queries/list-colonies",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/list-colonies.mdx",tags:[],version:"current",frontMatter:{id:"list-colonies",title:"listColonies",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getWatchedColonies",permalink:"/next/graphql/queries/get-watched-colonies"},next:{title:"listColonyActions",permalink:"/next/graphql/queries/list-colony-actions"}},c={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>listColonies.<b>filter</b></code><Bullet /><code>ModelColonyFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-listcoloniesbfilterbcodemodelcolonyfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listColonies.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listcoloniesblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listColonies.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listcoloniesbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelColonyConnection</code> <Badge class="secondary" text="object"/>',id:"modelcolonyconnection-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:a=!1}=e;const[s,c]=(0,l.useState)(a);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},f={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:y};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"listColonies(\n  filter: ModelColonyFilterInput\n  limit: Int\n  nextToken: String\n): ModelColonyConnection\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcoloniesbfilterbcodemodelcolonyfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonies.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyFilterInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcoloniesblimitbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonies.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcoloniesbnexttokenbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonies.",(0,r.kt)("b",null,"nextToken"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"modelcolonyconnection-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/model-colony-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyConnection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}g.isMDXComponent=!0}}]);