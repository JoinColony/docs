"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56892:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>k});var o=n(87462),r=n(67294),a=n(3905);const l={id:"create-token",title:"createToken",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/create-token",id:"graphql/mutations/create-token",title:"createToken",description:"No description",source:"@site/colony/graphql/mutations/create-token.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-token",permalink:"/next/graphql/mutations/create-token",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-token.mdx",tags:[],version:"current",frontMatter:{id:"create-token",title:"createToken",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createProfile",permalink:"/next/graphql/mutations/create-profile"},next:{title:"createUniqueColony",permalink:"/next/graphql/mutations/create-unique-colony"}},d={},p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createToken.<b>input</b></code><Bullet /><code>CreateTokenInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createtokenbinputbcodecreatetokeninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createToken.<b>condition</b></code><Bullet /><code>ModelTokenConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createtokenbconditionbcodemodeltokenconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Token</code> <Badge class="secondary" text="object"/>',id:"token-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,d]=(0,r.useState)(i);return(0,a.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},y={Bullet:p,SpecifiedBy:s,Badge:u,toc:k,Details:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createToken(\n  input: CreateTokenInput!\n  condition: ModelTokenConditionInput\n): Token\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createtokenbinputbcodecreatetokeninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createToken.",(0,a.kt)("b",null,"input"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-token-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateTokenInput!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createtokenbconditionbcodemodeltokenconditioninput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createToken.",(0,a.kt)("b",null,"condition"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-condition-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelTokenConditionInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"token-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/token"},(0,a.kt)("inlineCode",{parentName:"a"},"Token"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}f.isMDXComponent=!0}}]);