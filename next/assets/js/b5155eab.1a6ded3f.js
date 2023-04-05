"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59368],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>f});var r=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(l),f=o,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||n;return l?r.createElement(u,a(a({ref:t},s),{},{components:l})):r.createElement(u,a({ref:t},s))}));function f(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,a=new Array(n);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<n;d++)a[d]=l[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}p.displayName="MDXCreateElement"},43841:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var r=l(87462),o=l(67294),n=l(3905);const a={id:"get-profile-by-email",title:"getProfileByEmail",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/queries/get-profile-by-email",id:"graphql/queries/get-profile-by-email",title:"getProfileByEmail",description:"No description",source:"@site/colony/graphql/queries/get-profile-by-email.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-profile-by-email",permalink:"/next/graphql/queries/get-profile-by-email",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/get-profile-by-email.mdx",tags:[],version:"current",frontMatter:{id:"get-profile-by-email",title:"getProfileByEmail",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getMembersForColony",permalink:"/next/graphql/queries/get-members-for-colony"},next:{title:"getProfile",permalink:"/next/graphql/queries/get-profile"}},d={},s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>getProfileByEmail.<b>email</b></code><Bullet /><code>AWSEmail!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getprofilebyemailbemailbcodeawsemail--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getProfileByEmail.<b>sortDirection</b></code><Bullet /><code>ModelSortDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-getprofilebyemailbsortdirectionbcodemodelsortdirection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getProfileByEmail.<b>filter</b></code><Bullet /><code>ModelProfileFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-getprofilebyemailbfilterbcodemodelprofilefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getProfileByEmail.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getprofilebyemailblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getProfileByEmail.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getprofilebyemailbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelProfileConnection</code> <Badge class="secondary" text="object"/>',id:"modelprofileconnection-",level:4}],u=e=>{let{dataOpen:t,dataClose:l,children:a,startOpen:i=!1}=e;const[c,d]=(0,o.useState)(i);return(0,n.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:l),c&&a)},y={Bullet:s,SpecifiedBy:m,Badge:p,toc:f,Details:u};function g(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"getProfileByEmail(\n  email: AWSEmail!\n  sortDirection: ModelSortDirection\n  filter: ModelProfileFilterInput\n  limit: Int\n  nextToken: String\n): ModelProfileConnection\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-getprofilebyemailbemailbcodeawsemail--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"getProfileByEmail.",(0,n.kt)("b",null,"email"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsemail"},(0,n.kt)("inlineCode",{parentName:"a"},"AWSEmail!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-getprofilebyemailbsortdirectionbcodemodelsortdirection-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"getProfileByEmail.",(0,n.kt)("b",null,"sortDirection"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/enums/model-sort-direction"},(0,n.kt)("inlineCode",{parentName:"a"},"ModelSortDirection"))," ",(0,n.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-getprofilebyemailbfilterbcodemodelprofilefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"getProfileByEmail.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-profile-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ModelProfileFilterInput"))," ",(0,n.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-getprofilebyemailblimitbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"getProfileByEmail.",(0,n.kt)("b",null,"limit"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-getprofilebyemailbnexttokenbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"getProfileByEmail.",(0,n.kt)("b",null,"nextToken"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"modelprofileconnection-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/objects/model-profile-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"ModelProfileConnection"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}g.isMDXComponent=!0}}]);