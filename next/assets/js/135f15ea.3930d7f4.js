"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),a=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=a(n),k=l,m=c["".concat(d,".").concat(k)]||c[k]||p[k]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var a=2;a<r;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50640:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>p,assets:()=>a,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>k});var o=n(87462),l=n(67294),r=n(3905);const i={id:"model-user-tokens-filter-input",title:"ModelUserTokensFilterInput",hide_table_of_contents:!1},s=void 0,d={unversionedId:"graphql/inputs/model-user-tokens-filter-input",id:"graphql/inputs/model-user-tokens-filter-input",title:"ModelUserTokensFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-user-tokens-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-user-tokens-filter-input",permalink:"/next/graphql/inputs/model-user-tokens-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-user-tokens-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-user-tokens-filter-input",title:"ModelUserTokensFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelUserTokensConditionInput",permalink:"/next/graphql/inputs/model-user-tokens-condition-input"},next:{title:"ModelWatchedColoniesConditionInput",permalink:"/next/graphql/inputs/model-watched-colonies-condition-input"}},a={},u=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>tokenID</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputbtokenidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>userID</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputbuseridbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>and</b></code><Bullet /><code>[ModelUserTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputbandbcodemodelusertokensfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>or</b></code><Bullet /><code>[ModelUserTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputborbcodemodelusertokensfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserTokensFilterInput.<b>not</b></code><Bullet /><code>ModelUserTokensFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelusertokensfilterinputbnotbcodemodelusertokensfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:s=!1}=e;const[d,a]=(0,l.useState)(s);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&i)},f={Bullet:u,SpecifiedBy:p,Badge:c,toc:k,Details:m};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelUserTokensFilterInput {\n  id: ModelIDInput\n  tokenID: ModelIDInput\n  userID: ModelIDInput\n  and: [ModelUserTokensFilterInput]\n  or: [ModelUserTokensFilterInput]\n  not: ModelUserTokensFilterInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputbidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"id"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputbtokenidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"tokenID"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputbuseridbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"userID"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputbandbcodemodelusertokensfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"and"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelUserTokensFilterInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputborbcodemodelusertokensfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"or"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelUserTokensFilterInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelusertokensfilterinputbnotbcodemodelusertokensfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserTokensFilterInput.",(0,r.kt)("b",null,"not"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelUserTokensFilterInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/list-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"listUserTokens")),"  ",(0,r.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/inputs/model-user-tokens-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelUserTokensFilterInput")),"  ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);