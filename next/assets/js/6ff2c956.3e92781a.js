"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4990],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var r=n.createContext({}),i=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=i(e.components);return n.createElement(r.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(o),k=a,p=m["".concat(r,".").concat(k)]||m[k]||y[k]||l;return o?n.createElement(p,c(c({ref:t},s),{},{components:o})):n.createElement(p,c({ref:t},s))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,c=new Array(l);c[0]=m;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var i=2;i<l;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6554:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>k});var n=o(87462),a=o(67294),l=o(3905);const c={id:"colony-action",title:"ColonyAction",hide_table_of_contents:!1},d=void 0,r={unversionedId:"graphql/objects/colony-action",id:"graphql/objects/colony-action",title:"ColonyAction",description:"No description",source:"@site/colony/graphql/objects/colony-action.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/colony-action",permalink:"/next/graphql/objects/colony-action",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/colony-action.mdx",tags:[],version:"current",frontMatter:{id:"colony-action",title:"ColonyAction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ChainMetadata",permalink:"/next/graphql/objects/chain-metadata"},next:{title:"ColonyBalance",permalink:"/next/graphql/objects/colony-balance"}},i={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>colonyId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbcolonyidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>colony</b></code><Bullet /><code>Colony!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbcolonybcodecolony--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>type</b></code><Bullet /><code>ColonyActionType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-colonyactionbtypebcodecolonyactiontype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>blockNumber</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbblocknumberbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>createdAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbcreatedatbcodeawsdatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>initiatorAddress</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbinitiatoraddressbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>initiatorUser</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbinitiatoruserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>initiatorExtension</b></code><Bullet /><code>ColonyExtension</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbinitiatorextensionbcodecolonyextension-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>initiatorColony</b></code><Bullet /><code>Colony</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbinitiatorcolonybcodecolony-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>recipientAddress</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbrecipientaddressbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>recipient</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbrecipientbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>amount</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbamountbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>tokenAddress</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbtokenaddressbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>token</b></code><Bullet /><code>Token</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbtokenbcodetoken-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>fromDomainId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbfromdomainidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>fromDomain</b></code><Bullet /><code>Domain</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbfromdomainbcodedomain-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>toDomainId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbtodomainidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>toDomain</b></code><Bullet /><code>Domain</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyactionbtodomainbcodedomain-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>fundamentalChainId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbfundamentalchainidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>newColonyVersion</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbnewcolonyversionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>updatedAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbupdatedatbcodeawsdatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyAction.<b>colonyActionsId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyactionbcolonyactionsidbcodeid-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:o,children:c,startOpen:d=!1}=e;const[r,i]=(0,a.useState)(d);return(0,l.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:o),r&&c)},h={Bullet:s,SpecifiedBy:y,Badge:m,toc:k,Details:p};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ColonyAction {\n  id: ID!\n  colonyId: ID!\n  colony: Colony!\n  type: ColonyActionType!\n  blockNumber: Int!\n  createdAt: AWSDateTime!\n  initiatorAddress: ID\n  initiatorUser: User\n  initiatorExtension: ColonyExtension\n  initiatorColony: Colony\n  recipientAddress: ID\n  recipient: User\n  amount: String\n  tokenAddress: ID\n  token: Token\n  fromDomainId: ID\n  fromDomain: Domain\n  toDomainId: ID\n  toDomain: Domain\n  fundamentalChainId: Int\n  newColonyVersion: Int\n  updatedAt: AWSDateTime!\n  colonyActionsId: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"id"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbcolonyidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"colonyId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbcolonybcodecolony--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"colony"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/colony"},(0,l.kt)("inlineCode",{parentName:"a"},"Colony!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbtypebcodecolonyactiontype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"type"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/colony-action-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyActionType!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbblocknumberbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"blockNumber"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbcreatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbinitiatoraddressbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"initiatorAddress"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbinitiatoruserbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"initiatorUser"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbinitiatorextensionbcodecolonyextension-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"initiatorExtension"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyExtension"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbinitiatorcolonybcodecolony-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"initiatorColony"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/colony"},(0,l.kt)("inlineCode",{parentName:"a"},"Colony"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbrecipientaddressbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"recipientAddress"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbrecipientbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"recipient"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbamountbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbtokenaddressbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"tokenAddress"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbtokenbcodetoken-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"token"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/token"},(0,l.kt)("inlineCode",{parentName:"a"},"Token"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbfromdomainidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"fromDomainId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbfromdomainbcodedomain-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"fromDomain"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/domain"},(0,l.kt)("inlineCode",{parentName:"a"},"Domain"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbtodomainidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"toDomainId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbtodomainbcodedomain-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"toDomain"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/domain"},(0,l.kt)("inlineCode",{parentName:"a"},"Domain"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbfundamentalchainidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"fundamentalChainId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbnewcolonyversionbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"newColonyVersion"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbupdatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyactionbcolonyactionsidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyAction.",(0,l.kt)("b",null,"colonyActionsId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/create-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"createColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"getColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"onCreateColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"onDeleteColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"onUpdateColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/update-colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"updateColonyAction")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/model-colony-action-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelColonyActionConnection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);