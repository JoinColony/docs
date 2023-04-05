"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),y=p(n),s=l,m=y["".concat(d,".").concat(s)]||y[s]||u[s]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},71665:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var o=n(87462),l=n(67294),r=n(3905);const i={id:"model-colony-filter-input",title:"ModelColonyFilterInput",hide_table_of_contents:!1},a=void 0,d={unversionedId:"graphql/inputs/model-colony-filter-input",id:"graphql/inputs/model-colony-filter-input",title:"ModelColonyFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-colony-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-colony-filter-input",permalink:"/next/graphql/inputs/model-colony-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-colony-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-filter-input",title:"ModelColonyFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyExtensionFilterInput",permalink:"/next/graphql/inputs/model-colony-extension-filter-input"},next:{title:"ModelColonyFundsClaimConditionInput",permalink:"/next/graphql/inputs/model-colony-funds-claim-condition-input"}},p={},c=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>name</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbnamebcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>type</b></code><Bullet /><code>ModelColonyTypeInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbtypebcodemodelcolonytypeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>version</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbversionbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>and</b></code><Bullet /><code>[ModelColonyFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbandbcodemodelcolonyfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>or</b></code><Bullet /><code>[ModelColonyFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputborbcodemodelcolonyfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>not</b></code><Bullet /><code>ModelColonyFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbnotbcodemodelcolonyfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFilterInput.<b>colonyNativeTokenId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfilterinputbcolonynativetokenidbcodemodelidinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:a=!1}=e;const[d,p]=(0,l.useState)(a);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&i)},f={Bullet:c,SpecifiedBy:u,Badge:y,toc:s,Details:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelColonyFilterInput {\n  id: ModelIDInput\n  name: ModelStringInput\n  type: ModelColonyTypeInput\n  version: ModelIntInput\n  and: [ModelColonyFilterInput]\n  or: [ModelColonyFilterInput]\n  not: ModelColonyFilterInput\n  colonyNativeTokenId: ModelIDInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"id"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbnamebcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbtypebcodemodelcolonytypeinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"type"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-type-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyTypeInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbversionbcodemodelintinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"version"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbandbcodemodelcolonyfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"and"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelColonyFilterInput]"))," ",(0,r.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputborbcodemodelcolonyfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"or"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelColonyFilterInput]"))," ",(0,r.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbnotbcodemodelcolonyfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"not"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyFilterInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfilterinputbcolonynativetokenidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFilterInput.",(0,r.kt)("b",null,"colonyNativeTokenId"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-by-address"},(0,r.kt)("inlineCode",{parentName:"a"},"getColonyByAddress")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-by-name"},(0,r.kt)("inlineCode",{parentName:"a"},"getColonyByName")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-by-type"},(0,r.kt)("inlineCode",{parentName:"a"},"getColonyByType")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/list-colonies"},(0,r.kt)("inlineCode",{parentName:"a"},"listColonies")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyFilterInput")),"  ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);