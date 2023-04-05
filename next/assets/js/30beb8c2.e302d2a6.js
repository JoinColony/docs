"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=p(n),s=l,f=c["".concat(r,".").concat(s)]||c[s]||m[s]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=c;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d.mdxType="string"==typeof e?e:l,a[1]=d;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93982:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=n(87462),l=n(67294),i=n(3905);const a={id:"model-domain-filter-input",title:"ModelDomainFilterInput",hide_table_of_contents:!1},d=void 0,r={unversionedId:"graphql/inputs/model-domain-filter-input",id:"graphql/inputs/model-domain-filter-input",title:"ModelDomainFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-domain-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-domain-filter-input",permalink:"/next/graphql/inputs/model-domain-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-domain-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-domain-filter-input",title:"ModelDomainFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelDomainConditionInput",permalink:"/next/graphql/inputs/model-domain-condition-input"},next:{title:"ModelDomainMetadataConditionInput",permalink:"/next/graphql/inputs/model-domain-metadata-condition-input"}},p={},u=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>colonyId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbcolonyidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>nativeId</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbnativeidbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>nativeFundingPotId</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbnativefundingpotidbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>nativeSkillId</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbnativeskillidbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>isRoot</b></code><Bullet /><code>ModelBooleanInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbisrootbcodemodelbooleaninput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>and</b></code><Bullet /><code>[ModelDomainFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbandbcodemodeldomainfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>or</b></code><Bullet /><code>[ModelDomainFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputborbcodemodeldomainfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelDomainFilterInput.<b>not</b></code><Bullet /><code>ModelDomainFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeldomainfilterinputbnotbcodemodeldomainfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:d=!1}=e;const[r,p]=(0,l.useState)(d);return(0,i.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&a)},y={Bullet:u,SpecifiedBy:m,Badge:c,toc:s,Details:f};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelDomainFilterInput {\n  id: ModelIDInput\n  colonyId: ModelIDInput\n  nativeId: ModelIntInput\n  nativeFundingPotId: ModelIntInput\n  nativeSkillId: ModelIntInput\n  isRoot: ModelBooleanInput\n  and: [ModelDomainFilterInput]\n  or: [ModelDomainFilterInput]\n  not: ModelDomainFilterInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbcolonyidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"colonyId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbnativeidbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"nativeId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbnativefundingpotidbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"nativeFundingPotId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbnativeskillidbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"nativeSkillId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbisrootbcodemodelbooleaninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"isRoot"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-boolean-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelBooleanInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbandbcodemodeldomainfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelDomainFilterInput]"))," ",(0,i.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputborbcodemodeldomainfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelDomainFilterInput]"))," ",(0,i.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modeldomainfilterinputbnotbcodemodeldomainfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelDomainFilterInput.",(0,i.kt)("b",null,"not"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelDomainFilterInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/queries/list-domains"},(0,i.kt)("inlineCode",{parentName:"a"},"listDomains")),"  ",(0,i.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-domain-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelDomainFilterInput")),"  ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);