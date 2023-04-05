"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),a=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=a(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=a(n),y=l,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var a=2;a<i;a++)r[a]=n[a];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11508:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>a,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>y});var o=n(87462),l=n(67294),i=n(3905);const r={id:"model-subscription-colony-tokens-filter-input",title:"ModelSubscriptionColonyTokensFilterInput",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/model-subscription-colony-tokens-filter-input",id:"graphql/inputs/model-subscription-colony-tokens-filter-input",title:"ModelSubscriptionColonyTokensFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-subscription-colony-tokens-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-subscription-colony-tokens-filter-input",permalink:"/next/graphql/inputs/model-subscription-colony-tokens-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-subscription-colony-tokens-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-subscription-colony-tokens-filter-input",title:"ModelSubscriptionColonyTokensFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelSubscriptionColonyMetadataFilterInput",permalink:"/next/graphql/inputs/model-subscription-colony-metadata-filter-input"},next:{title:"ModelSubscriptionContractEventFilterInput",permalink:"/next/graphql/inputs/model-subscription-contract-event-filter-input"}},a={},c=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionColonyTokensFilterInput.<b>id</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionColonyTokensFilterInput.<b>tokenID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbtokenidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionColonyTokensFilterInput.<b>colonyID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbcolonyidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionColonyTokensFilterInput.<b>and</b></code><Bullet /><code>[ModelSubscriptionColonyTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbandbcodemodelsubscriptioncolonytokensfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionColonyTokensFilterInput.<b>or</b></code><Bullet /><code>[ModelSubscriptionColonyTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputborbcodemodelsubscriptioncolonytokensfilterinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:s=!1}=e;const[p,a]=(0,l.useState)(s);return(0,i.kt)("details",(0,o.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&r)},b={Bullet:c,SpecifiedBy:d,Badge:u,toc:y,Details:m};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelSubscriptionColonyTokensFilterInput {\n  id: ModelSubscriptionIDInput\n  tokenID: ModelSubscriptionIDInput\n  colonyID: ModelSubscriptionIDInput\n  and: [ModelSubscriptionColonyTokensFilterInput]\n  or: [ModelSubscriptionColonyTokensFilterInput]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbidbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionColonyTokensFilterInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbtokenidbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionColonyTokensFilterInput.",(0,i.kt)("b",null,"tokenID"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbcolonyidbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionColonyTokensFilterInput.",(0,i.kt)("b",null,"colonyID"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputbandbcodemodelsubscriptioncolonytokensfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionColonyTokensFilterInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-colony-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionColonyTokensFilterInput]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptioncolonytokensfilterinputborbcodemodelsubscriptioncolonytokensfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionColonyTokensFilterInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-colony-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionColonyTokensFilterInput]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-colony-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyTokensFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-colony-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onCreateColonyTokens")),"  ",(0,i.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-colony-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onDeleteColonyTokens")),"  ",(0,i.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-colony-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onUpdateColonyTokens")),"  ",(0,i.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);